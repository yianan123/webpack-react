import asyncComponent from  '../../router/ansycComponent.js'
const _import_views = file => asyncComponent(() => import(`./component/${file}`),false)
let t =['NewsHot','NewsCar','NewsEntertainment','NewsSociety','NewsTech','QuestionAndAnswer','Video','NewsMilitary','NewsWorld','NewsFinance']
let o ={}
t.forEach(e=>{
    o[e] = _import_views(e)
})
export default o 