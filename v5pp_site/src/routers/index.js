import VueRouter from "vue-router"
import Vue from "vue";

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
                    name: 'JoinUs',
                    path: 'join_us',
                    component: () => import('../components/JoinUs.vue'),
                    meta: {
                        title: 'join_us',
                        isAuth: false
                    }
                },
                {
                    name: 'AdmissionRegistration',
                    path: 'admission_registration',
                    component: () => import('../components/AdmissionRegistration.vue'),
                    meta: {
                        title: 'admission_registration',
                        isAuth: false
                    }
                },
                {
                    name: 'V5Pro',
                    path: 'v5',
                    component: () => import('../components/PPT/V5Pro'),
                    meta: {
                        title: 'v5',
                        isAuth: false
                    }
                },
                {
                    name: 'WheelPro',
                    path: 'wheel',
                    component: () => import('../components/PPT/WheelPro'),
                    meta: {
                        title: 'wheel',
                        isAuth: false
                    }
                },
                {
                    name: 'HumanPro',
                    path: 'human',
                    component: () => import('../components/PPT/HumanPro'),
                    meta: {
                        title: 'human',
                        isAuth: false
                    }
                },
                {
                    name: 'FishPro',
                    path: 'fish',
                    component: () => import('../components/PPT/FishPro'),
                    meta: {
                        title: 'fish',
                        isAuth: false
                    }
                },
                {
                    name: 'StandardPro',
                    path: 'standard',
                    component: () => import('../components/PPT/StandardPro'),
                    meta: {
                        title: 'standard',
                        isAuth: false
                    }
                },
                {
                    name: 'NaviPro',
                    path: 'navi',
                    component: () => import('../components/PPT/NaviPro'),
                    meta: {
                        title: 'navi',
                        isAuth: false
                    }
                },
                {
                    name: 'VisionPro',
                    path: 'vision',
                    component: () => import('../components/PPT/VisionPro'),
                    meta: {
                        title: 'vision',
                        isAuth: false
                    }
                },
                {
                    name: 'StrategyPro',
                    path: 'strategy',
                    component: () => import('../components/PPT/StrategyPro'),
                    meta: {
                        title: 'strategy',
                        isAuth: false
                    }
                },
                {
                    name: 'HardwarePro',
                    path: 'hardware',
                    component: () => import('../components/PPT/HardwarePro'),
                    meta: {
                        title: 'hardware',
                        isAuth: false
                    }
                },
                {
                    name: 'MachPro',
                    path: 'mach',
                    component: () => import('../components/PPT/MachPro'),
                    meta: {
                        title: 'mach',
                        isAuth: false
                    }
                },
                {
                    name: 'DoublePro',
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
                    name: 'UserSettings',
                    path: 'settings',
                    component: () => import('../components/user/UserSettings.vue'),
                    meta: {
                        title: 'settings',
                        isAuth: true
                    }
                },
                {
                    name: 'ManageBudgetOverview',
                    path: 'manageBudgetOverview',
                    component: () => import('../components/manage_budgets/ManageBudgetOverview.vue'),
                    meta: {
                        title: 'manageBudgetOverview',
                        isAuth: true
                    }
                },
                {
                    name: 'ManageBudgetApplication',
                    path: 'manageBudgetApplication',
                    component: () => import('../components/manage_budgets/ManageBudgetApplication.vue'),
                    meta: {
                        title: 'manageBudgetApplication',
                        isAuth: true
                    }
                }
            ]
        }
    ]
})

router.beforeEach((to, from, next) => {
    // 简单的判断IE10及以下不进入富文本编辑器，该组件不兼容
    if (navigator.userAgent.indexOf('MSIE') > -1 && to.path === '/editor') {
        Vue.prototype.$alert('vue-quill-editor组件不兼容IE10及以下浏览器，请使用更高版本的浏览器查看', '浏览器不兼容通知', {
            confirmButtonText: '确定'
        });
    } else {
        next();
    }
})
export default router
