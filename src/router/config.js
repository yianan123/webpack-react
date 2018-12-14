import IconList from '../asset/icon/index'
// import Home from '../view/home/Home'
// import About from '../view/about/About'
// import Mine from '../view/mine/Mine'
import asyncComponent from  './ansycComponent'
// const _import_components = file => asyncComponent(() => import(`components/${file}`))
const _import_views = file => asyncComponent(() => import(`../view/${file}`))
const config = [
    {
        name:'home',
        path:'/',
        component:_import_views('home') ,
        iconUrl:  IconList.news,  
        checkIconUrl:  IconList.newcheck
    },
    {
        name:'about',
        path:'/about',
        component:_import_views('about'),
        iconUrl:  IconList.page,  
        checkIconUrl:  IconList.pagecheck

    },
    {
        name:'mine',
        path:'/mine',
        component:_import_views('mine'),
        iconUrl:  IconList.mine,  
        checkIconUrl:  IconList.minecheck 

    }
]
export default config