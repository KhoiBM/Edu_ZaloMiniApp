

// export const changeTransitionBasedRouteDynamically = async (to: unknown, from: unknown, router:   ) => {
//     router.afterEach((to, from) => {
//         const toDepth = to.path.split('/').length
//         const fromDepth = from.path.split('/').length
//         to.meta.transition = toDepth < fromDepth ? 'slide-right' : 'slide-left'
//     })

// }