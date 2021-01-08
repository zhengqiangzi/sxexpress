const db = require('./database')

module.exports={
	routerFn:async function(req,res){

	   let knowleage = await new Promise((resolve,reject)=>{

	     db.connection.query(' select *  from news where cate = 3 order by date desc limit 8 ',(err,result)=>{

	        resolve(JSON.parse(JSON.stringify(result)));
	     })
	   })

	   let news = await new Promise((resolve,reject)=>{

	     db.connection.query(' select *  from news where cate != 3 order by date desc limit 5 ',(err,result)=>{

	        resolve(JSON.parse(JSON.stringify(result)));
	     })
	   })
	   return {knowleage,news}

	}
}