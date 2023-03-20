export default [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/pages/home'),
        children: [
            {
                path: '/childOne',
                name: 'Home',
                component: () => import('@/pages/home/childOne'),
            },
            {
                path: '/childTwo',
                name: 'Home',
                component: () => import('@/pages/home/childTwo'),
            }
        ]
    }
]

