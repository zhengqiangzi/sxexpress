
const db = require('./database')
const moment = require('moment')

module.exports={

	fn:async function(){

		let news  = await new Promise((resolve,reject)=>{

			db.connection.query('select * from news where cate=1',(err,result)=>{

				let _r  = JSON.parse(JSON.stringify(result))
				resolve(_r)

			})

		})

		return news




	}
}
