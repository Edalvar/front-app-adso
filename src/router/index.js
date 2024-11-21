import {createRouter,createWebHashHistory} from 'vue-router'
import LayoutMain from '../components/LayoutMain.vue'
import Login from '../components/Login.vue'
import Pais from '../views/paises/Pais.vue'
import Peliculas from '../views/peliculas/Peliculas.vue'

const routes =[

{
    path:'/',
    name:'home',
    component:LayoutMain,
},
{
    path:'/peliculas',
    name:'Peliculas',
    component:Peliculas,
},
{
    path:'/login',
    name:'login',
    component:Login,
},
{
    path:'/pais',
    name:'Pais',
    component:Pais
}

]

const router= createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router;