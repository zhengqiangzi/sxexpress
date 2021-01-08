const db = require('./database')
const moment = require('moment')

module.exports={
	routerFn:async function(id){

		 let tips = await new Promise((resolve,reject)=>{
		    db.connection.query("select * from news order by date desc limit 5 ",(err,result)=>{
		      var rea_result = JSON.parse(JSON.stringify(result))
		      rea_result.map(x=>{
		        x.date=moment(x.date).format("YYYY-MM-DD hh:mm:ss")
		      })
		      //var index  = _.findIndex(rea_result,{id:id});
		      resolve(rea_result  )
		    })
		  })

	     let current_news = await new Promise((resolve,reject)=>{
			    db.connection.query(`select * from news where id = ${id} order by date desc `,(err,result)=>{
			      var rea_result = JSON.parse(JSON.stringify(result))
			      rea_result.map(x=>{
			        x.date=moment(x.date).format("YYYY-MM-DD hh:mm:ss")
			      })
			      resolve(rea_result[0])
			    })
			  })

	     return { tips,current_news}

	}
}