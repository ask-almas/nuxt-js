import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _f99f6cc6 = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)
const _cc58e4a8 = () => import('../pages/products/index.vue' /* webpackChunkName: "pages/products/index" */).then(m => m.default || m)
const _57cc71e2 = () => import('../pages/products/_pid.vue' /* webpackChunkName: "pages/products/_pid" */).then(m => m.default || m)



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
			component: _f99f6cc6,
			name: "index"
		},
		{
			path: "/products",
			component: _cc58e4a8,
			name: "products"
		},
		{
			path: "/products/:pid",
			component: _57cc71e2,
			name: "products-pid"
		}
    ],
    
    
    fallback: false
  })
}
