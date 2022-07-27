import VueRouter from "vue-router"

const router = new VueRouter({
    routes: [
        {
            name: 'HomePage',
            path: '/',
            component: () => import('../components/homepage/HomePage.vue'),
            meta: {
                title: 'homepage',
                isAuth: false
            },
            children: [
                {
                    name: 'HomePageIntro',
                    path: 'intro',
                    component: () => import('../components/PPT/IntroPro'),
                    meta: {
                        title: 'intro',
                        isAuth: false
                    }
                },
                {
                    name: 'HomePageCarousel',
                    path: 'carousel',
                    component: () => import('../components/homepage/HomePageCarousel.vue'),
                    meta: {
                        title: 'carousel',
                        isAuth: false
                    }
                },
                {
                    name: 'StructureOverview',
                    path: 'structure',
                    component: () => import('../components/homepage/StructureOverview.vue'),
                    meta: {
                        title: 'structure',
                        isAuth: false
                    }
                },
                {
                    name:'V5Pro',
                    path: 'v5',
                    component: () => import('../components/PPT/V5Pro'),
                    meta: {
                        title: 'v5',
                        isAuth: false
                    }
                },
                {
                    name:'WheelPro',
                    path: 'wheel',
                    component: () => import('../components/PPT/WheelPro'),
                    meta: {
                        title: 'wheel',
                        isAuth: false
                    }
                },
                {
                    name:'HumanPro',
                    path: 'human',
                    component: () => import('../components/PPT/HumanPro'),
                    meta: {
                        title: 'human',
                        isAuth: false
                    }
                },
                {
                    name:'FishPro',
                    path: 'fish',
                    component: () => import('../components/PPT/FishPro'),
                    meta: {
                        title: 'fish',
                        isAuth: false
                    }
                },
                {
                    name:'StandardPro',
                    path: 'standard',
                    component: () => import('../components/PPT/StandardPro'),
                    meta: {
                        title: 'standard',
                        isAuth: false
                    }
                },
                {
                    name:'NaviPro',
                    path: 'navi',
                    component: () => import('../components/PPT/NaviPro'),
                    meta: {
                        title: 'navi',
                        isAuth: false
                    }
                },
                {
                    name:'VisionPro',
                    path: 'vision',
                    component: () => import('../components/PPT/VisionPro'),
                    meta: {
                        title: 'vision',
                        isAuth: false
                    }
                },
                {
                    name:'StrategyPro',
                    path: 'strategy',
                    component: () => import('../components/PPT/StrategyPro'),
                    meta: {
                        title: 'strategy',
                        isAuth: false
                    }
                },
                {
                    name:'HardwarePro',
                    path: 'hardware',
                    component: () => import('../components/PPT/HardwarePro'),
                    meta: {
                        title: 'hardware',
                        isAuth: false
                    }
                },
                {
                    name:'MachPro',
                    path: 'mach',
                    component: () => import('../components/PPT/MachPro'),
                    meta: {
                        title: 'mach',
                        isAuth: false
                    }
                },
                {
                    name:'DoublePro',
                    path: 'double',
                    component: () => import('../components/PPT/DoublePro'),
                    meta: {
                        title: 'double',
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
            component: () => import('../components/user/UserPage.vue'),
            meta: {
                title: 'userpage',
                isAuth: true
            },
            children: [
                {
                    name: 'UserInfo',
                    path: 'info',
                    component: () => import('../components/user/UserInfo.vue'),
                    meta: {
                        title: 'userinfo',
                        isAuth: true
                    }
                },
                {
                    name: 'UserPhoneBook',
                    path: 'phonebook',
                    component: () => import('../components/user/UserPhoneBook.vue'),
                    meta: {
                        title: 'userphonebook',
                        isAuth: true
                    }
                },
                {
                    name: 'budgetOverview',
                    path: 'budgetOverview',
                    component: () => import('../components/budget/BudgetOverview.vue'),
                    meta: {
                        title: 'budget',
                        isAuth: true
                    }
                },
                {
                    name: 'budgetApplication',
                    path: 'budgetApplication',
                    component: () => import('../components/budget/BudgetApplication.vue'),
                    meta: {
                        title: 'budgetApplication',
                        isAuth: true
                    }
                },
                {
                    name: 'uploadBill',
                    path: 'uploadBill',
                    component: () => import('../components/budget/UploadBill.vue'),
                    meta: {
                        title: 'uploadBill',
                        isAuth: true
                    }
                },
                {
                    name: 'receiveBudget',
                    path: 'receiveBudget',
                    component: () => import('../components/budget/ReceiveBudget.vue'),
                    meta: {
                        title: 'receiveBudget',
                        isAuth: true
                    }
                },
                {
                    name: 'UserSettings',
                    path: 'settings',
                    component: () => import('../components/user/UserSettings.vue'),
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
