
import { createRouter , createWebHistory } from "vue-router";

import Helloworld from '../components/HelloWorld.vue';
import About from '../components/About.vue';
import Contact from '../components/Contact.vue';
import Post from '../components/Post.vue';
import Posts from '../components/Posts.vue';
import User from '../components/User.vue';
import NotFound from '../components/NotFound.vue';
import UserProfile from '../components/UserProfile.vue';
import UserSetting from '../components/UserSetting.vue'

const routes = [
    {
        path:'/',
        component:Helloworld
    },
    {
        path:'/about',
        component:About
    },
    {
        path:'/contact',
        component:Contact,
        name: "contact"
    },
    {
        path:'/post',
        component:Posts
    },
    {
        path:'/post/:id',
        component:Post,
        name: "post"
    },
    {
        path:'/user/:id?',
        component:User,
        children:[
            {
                path:'profile',
                component:UserProfile
            },
            {
                path:'setting',
                component:UserSetting
            }
        ]
    },
    {
        path:'/:hkjhkj(.*)*',
        component:NotFound
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;