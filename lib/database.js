
const port = 3000
const config=require("../config.js");
const mysql=require('mysql')
const _=require('lodash')
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'shengxin' // 添加该列
})
module.exports={

	connection


}