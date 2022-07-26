import VueRouter from "vue-router"

const router = new VueRouter({
    routes: [
        {
            name: 'HomePage',
            path: '/',
            component: () => import('../components/HomePage.vue'),
            meta: {
                title: 'homepage',
                isAuth: false
            }
        },
        {
            name: 'Login',
            path: '/login',
            component: () => import('../components/LoginPage.vue'),
            meta: {
                title: 'login',
                isAuth: false
            }
        },
        {
            name: 'UserPage',
            path: '/user',
            component: () => import('../components/UserPage.vue'),
            meta: {
                title: 'userpage',
                isAuth: true
            },
            children: [
                {
                    name: 'UserInfo',
                    path: 'info',
                    component: () => import('../components/UserInfo.vue'),
                    meta: {
                        title: 'userinfo',
                        isAuth: true
                    }
                },
                {
                    name: 'UserPhoneBook',
                    path: 'phonebook',
                    component: () => import('../components/UserPhoneBook.vue'),
                    meta: {
                        title: 'userphonebook',
                        isAuth: true
                    }
                }
            ]
        }
    ]
})

export default router