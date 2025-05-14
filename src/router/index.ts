import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import { NotFoundView, HomeView, TimetableView, TrainingMajorView, TuitionView, StudentOpinionView, SignInView, SignUpView, CreateRequestView, RegisterForAdmissionView, PersonalView, NotificationView, NotificationDetailsView, NewsView, NewsDetailsView, MessageView, ExaminationTimetableView, ErrorView, TuitionDetailsView } from '@/views'

const routes = [
    {
        path: '/',
        name: 'homeView',
        component: HomeView,
        meta: { requiresAuth: false, transition: 'fade' },
        alias: '/homeView'

    },
    {
        path: '/timetableView',
        name: 'timetableView',
        component: TimetableView,
        meta: { requiresAuth: true, transition: 'fade' },

    },
    {
        path: '/trainingMajorView',
        name: 'trainingMajorView',
        component: TrainingMajorView,
        meta: { requiresAuth: false, transition: 'fade' },

    },
    {
        path: '/tuitionView',
        name: 'tuitionView',
        component: TuitionView,
        meta: { requiresAuth: true, transition: 'fade' },

    }
    ,
    {
        path: '/tuitionDetailsView/:tuitionId',
        name: 'tuitionDetailsView',
        component: TuitionDetailsView,
        meta: { requiresAuth: true, transition: 'fade' },

    },
    {
        path: '/studentOpinionView',
        name: 'studentOpinionView',
        component: StudentOpinionView,
        meta: { requiresAuth: true, transition: 'fade' },

    },
    {
        path: '/signInView',
        name: 'signInView',
        component: SignInView,
        meta: { requiresAuth: false, transition: 'fade' },

    },
    {
        path: '/signUpView',
        name: 'signUpView',
        component: SignUpView,
        meta: { requiresAuth: false, transition: 'fade' },

    },
    {
        path: '/createRequestView',
        name: 'createRequestView',
        component: CreateRequestView,
        meta: { requiresAuth: false, transition: 'fade' },

    }, {
        path: '/registerForAdmissionView',
        name: 'registerForAdmissionView',
        component: RegisterForAdmissionView,
        meta: { requiresAuth: false, transition: 'fade' },

    },
    {
        path: '/personalView',
        name: 'personalView',
        component: PersonalView,
        meta: { requiresAuth: true, transition: 'fade' },

    },
    {
        path: '/notificationView',
        name: 'notificationView',
        component: NotificationView,
        meta: { requiresAuth: true, transition: 'fade' },

    },
    {
        path: '/notificationDetailsView/:notificationId',
        name: 'notificationDetailsView',
        component: NotificationDetailsView,
        meta: { requiresAuth: true, transition: 'fade' },

    },
    {
        path: '/newsView',
        name: 'newsView',
        component: NewsView,
        meta: { requiresAuth: false, transition: 'fade' },

    },
    {
        path: '/newsDetailsView',
        name: 'newsDetailsView',
        component: NewsDetailsView,
        meta: { requiresAuth: false, transition: 'fade' },

    },
    {
        path: '/messageView',
        name: 'messageView',
        component: MessageView,
        meta: { requiresAuth: false, transition: 'fade' },

    },
    {
        path: '/examinationTimetableView',
        name: 'examinationTimetableView',
        component: ExaminationTimetableView,
        meta: { requiresAuth: true, transition: 'fade' },

    },

    {
        path: '/errorView',
        name: 'errorView',
        component: ErrorView,
        meta: { requiresAuth: false, transition: 'fade' },
    },
    {
        path: '/:pathMatch(.*)',
        name: 'notFoundView',
        component: NotFoundView,
        meta: { requiresAuth: false, transition: 'fade' },
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(savedPosition)
                }, 50)
            })
        }
        return { left: 0, top: 0 }
    },
})

export default router


