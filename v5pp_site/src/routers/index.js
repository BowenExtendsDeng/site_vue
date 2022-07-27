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
            },
            children: [
                {
                    name: 'HomePageIntro',
                    path: 'intro',
                    component: () => import('../components/HomepageIntro.vue'),
                    meta: {
                        title: 'intro',
                        isAuth: false
                    }
                },
                {
                    name: 'HomePageCarousel',
                    path: 'carousel',
                    component: () => import('../components/HomePageCarousel.vue'),
                    meta: {
                        title: 'carousel',
                        isAuth: false
                    }
                },
                {
                    name: 'StructureOverview',
                    path: 'structure',
                    component: () => import('../components/StructureOverview.vue'),
                    meta: {
                        title: 'structure',
                        isAuth: false
                    }
                },
                {
                    name: 'PptProjector',
                    path: 'ppt/:imageDirPath/:amount',
                    component: () => import('../components/PptProjector.vue'),
                    meta: {
                        title: 'ppt',
                        isAuth: false
                    }
                }
            ]
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
                },
                {
                    name: 'budgetOverview',
                    path: 'budgetOverview',
                    component: () => import('../components/BudgetOverview.vue'),
                    meta: {
                        title: 'budget',
                        isAuth: true
                    }
                },
                {
                    name: 'budgetApplication',
                    path: 'budgetApplication',
                    component: () => import('../components/BudgetApplication.vue'),
                    meta: {
                        title: 'budgetApplication',
                        isAuth: true
                    }
                },
                {
                    name: 'uploadBill',
                    path: 'uploadBill',
                    component: () => import('../components/UploadBill.vue'),
                    meta: {
                        title: 'uploadBill',
                        isAuth: true
                    }
                },
                {
                    name: 'receiveBudget',
                    path: 'receiveBudget',
                    component: () => import('../components/ReceiveBudget.vue'),
                    meta: {
                        title: 'receiveBudget',
                        isAuth: true
                    }
                },
                {
                    name: 'UserSettings',
                    path: 'settings',
                    component: () => import('../components/UserSettings.vue'),
                    meta: {
                        title: 'settings',
                        isAuth: true
                    }
                }
            ]
        }
    ]
})

export default router
