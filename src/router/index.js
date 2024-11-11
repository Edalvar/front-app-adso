import {createRouter,createWebHashHistory} from 'vue-router'
import Ejemplo from '../views/ejemplo.vue'

const routes =[
{
    path:'/pais',
    name:'Pais',
    component:Ejemplo,
}

]

const router= createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router;