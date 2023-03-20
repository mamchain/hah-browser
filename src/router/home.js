export default [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/pages/home'),
    },
    {
        path: '/home/childOne',
        name: 'Home',
        component: () => import('@/pages/home/childOne'),
    },
    {
        path: '/home/childTwo',
        name: 'Home',
        component: () => import('@/pages/home/childTwo'),
    }
]

