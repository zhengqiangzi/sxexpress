const express = require('express')
const app = express()
const moment = require('moment')

const index_router_fn=require('./lib/index_fn');
const tips_router_fn=require('./lib/tipThemesFn')
const companynews=require('./lib/cate_company_news')
const careernews=require('./lib/cate_career_news')
const knowleagenews=require('./lib/cate_knowleage_news')
const config =require('./config')


app.set('view engine', 'pug');
app.use(express.static('public'));
//首页
app.get('/',  async (req, res)=>{

  let data = await index_router_fn.routerFn(req,res)
  res.render('index',{
    domain:config.domain,
    url:"index",
    tips:data.knowleage,
    news:data.news
   })
})
//行业新闻 
app.get('/news.html', async (req, res)=>{

  let data = await careernews.fn()
  res.render('news', { domain:config.domain,url:"news",surl:"news",data:data})
})
//行业 小知识
app.get('/tips.html', async (req, res)=>{
  let data = await knowleagenews.fn()
  res.render('tips', { domain:config.domain,url:"news",surl:"tips",data:data})
})
//企业动态
app.get('/companyNews.html', async (req, res)=>{
  let data = await companynews.fn()

  res.render('companynews', { 
    domain:config.domain,
    url:"companynews",
    surl:"companyNews",
    data:data})
})
//联系我们
app.get('/contcat.html', (req, res)=>{
  res.render('contcat', { domain:config.domain,url:"contcat",surl:"contcat"})
})
//产品中心-表面处理
app.get('/surface.html', (req, res)=>{
  res.render('surface', { domain:config.domain,url:"product",surl:"surface"})
})
//型材类型
app.get('/cate.html', (req, res)=>{
  res.render('cate', { domain:config.domain,url:"product",surl:"cate"})
})
//工程案例 
app.get('/case.html', (req, res)=>{
  res.render('case', { domain:config.domain,url:"product",surl:"case"})
})
//公司简介 
app.get('/introduce.html', (req, res)=>{

  res.render('introduce', { domain:config.domain,url:"contcat",surl:"introduce"})
})
//销售网络
app.get('/net.html', (req, res)=>{
  res.render('net', { domain:config.domain,url:"contcat",surl:"net"})
})
//销售网络
app.get('/companyVideo.html', (req, res)=>{
  res.render('companyVideo', { domain:config.domain,url:"companyVideo",surl:"companyVideo"})
})
//tips_themes
app.get('/tipsThemes/:id.html',async (req, res)=>{

  var id=parseInt(req.params.id);
  let data = await tips_router_fn.routerFn(id)
  res.render('tips_themes', { 
    domain:config.domain,
    url:"news",
    surl:"news",
    result:data.tips,
    c_data:data.current_news
  })
})

app.listen(config.port, () => console.log(`Example app listening on port ${config.port}!`))