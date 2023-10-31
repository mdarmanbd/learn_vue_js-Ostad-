
import { createRouter, createWebHistory } from 'vue-router'
import Table from '../views/TableView.vue'
import ToastView from '../views/ToastView.vue'
import ChartView from '../views/ChartView.vue'
import RichTestView from '../views/RichTestView.vue'
import LoaderView from '../views/LoaderView.vue'
import CircleView from '../views/CircleView.vue'

const routes = [
    {
        path: '/',
        name: 'table',
        component: Table
    },
    {
        path:'/toast',
        name: 'toast',
        component:ToastView
    },
    {
        path:'/chart',
        name: 'chart',
        component:ChartView
    },
    {
        path:'/rich',
        name: 'rich',
        component:RichTestView
    },
    {
        path:'/loader',
        name: 'loader',
        component:LoaderView
    },
    {
        path:'/circule',
        name: 'circule',
        component:CircleView
    }
    
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router