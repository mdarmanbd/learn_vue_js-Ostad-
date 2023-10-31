
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Contact from '../components/Contact.vue'
import Posts from '../components/Posts.vue'
import Post from '../components/Post.vue'
import Sidebar from '../components/Sidebar.vue'

const routes = [
    {
        path: '/',
        components:
        {
            default:Home,
            LeftSideBar:Sidebar
        }
    },
    {
        path: '/about',
        components:
        {
            default:About,
            LeftSideBar:Sidebar
        }
    },
    {
        path: '/contact',
        components:
        {
            default:Contact,
            LeftSideBar:Sidebar
        }
    },
    {
        path: '/posts',
        components:
        {
            default:Post,
            LeftSideBar:Sidebar
        }
    },
    {
        path: '/posts/:id',
        components:
        {
            default:Posts,
            LeftSideBar:Sidebar
        },
        name:'post'
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router