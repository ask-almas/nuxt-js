import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _1ec20d82 = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)
const _02773046 = () => import('../pages/posts/index.vue' /* webpackChunkName: "pages/posts/index" */).then(m => m.default || m)
const _35e88cc2 = () => import('../pages/admin/index.vue' /* webpackChunkName: "pages/admin/index" */).then(m => m.default || m)
const _28e2f780 = () => import('../pages/about/index.vue' /* webpackChunkName: "pages/about/index" */).then(m => m.default || m)
const _3785c12a = () => import('../pages/admin/auth/index.vue' /* webpackChunkName: "pages/admin/auth/index" */).then(m => m.default || m)
const _6bfd8030 = () => import('../pages/admin/new-post/index.vue' /* webpackChunkName: "pages/admin/new-post/index" */).then(m => m.default || m)
const _e8470026 = () => import('../pages/admin/_postId/index.vue' /* webpackChunkName: "pages/admin/_postId/index" */).then(m => m.default || m)
const _0e12b831 = () => import('../pages/posts/_id/index.vue' /* webpackChunkName: "pages/posts/_id/index" */).then(m => m.default || m)



const scrollBehavior = (to, from, savedPosition) => {
  // SavedPosition is only available for popstate navigations.
  if (savedPosition) {
    return savedPosition
  } else {
    let position = {}
    // If no children detected
    if (to.matched.length < 2) {
      // Scroll to the top of the page
      position = { x: 0, y: 0 }
    }
    else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
      // If one of the children has scrollToTop option set to true
      position = { x: 0, y: 0 }
    }
    // If link has anchor, scroll to anchor by returning the selector
    if (to.hash) {
      position = { selector: to.hash }
    }
    return position
  }
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/",
			component: _1ec20d82,
			name: "index"
		},
		{
			path: "/posts",
			component: _02773046,
			name: "posts"
		},
		{
			path: "/admin",
			component: _35e88cc2,
			name: "admin"
		},
		{
			path: "/about",
			component: _28e2f780,
			name: "about"
		},
		{
			path: "/admin/auth",
			component: _3785c12a,
			name: "admin-auth"
		},
		{
			path: "/admin/new-post",
			component: _6bfd8030,
			name: "admin-new-post"
		},
		{
			path: "/admin/:postId",
			component: _e8470026,
			name: "admin-postId"
		},
		{
			path: "/posts/:id",
			component: _0e12b831,
			name: "posts-id"
		}
    ],
    
    
    fallback: false
  })
}
