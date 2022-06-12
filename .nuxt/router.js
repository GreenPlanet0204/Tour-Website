import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _71a37fd0 = () => import('..\\pages\\about.vue' /* webpackChunkName: "pages_about" */).then(m => m.default || m)
const _18556eda = () => import('..\\pages\\admin.vue' /* webpackChunkName: "pages_admin" */).then(m => m.default || m)
const _01633be1 = () => import('..\\pages\\faq.vue' /* webpackChunkName: "pages_faq" */).then(m => m.default || m)
const _9ee48418 = () => import('..\\pages\\login.vue' /* webpackChunkName: "pages_login" */).then(m => m.default || m)
const _0bd39e2c = () => import('..\\pages\\orders.vue' /* webpackChunkName: "pages_orders" */).then(m => m.default || m)
const _de384ddc = () => import('..\\pages\\terms.vue' /* webpackChunkName: "pages_terms" */).then(m => m.default || m)
const _3233ca46 = () => import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */).then(m => m.default || m)
const _2129cbac = () => import('..\\pages\\_lang\\index.vue' /* webpackChunkName: "pages__lang_index" */).then(m => m.default || m)
const _60998136 = () => import('..\\pages\\_lang\\about.vue' /* webpackChunkName: "pages__lang_about" */).then(m => m.default || m)
const _20da6e27 = () => import('..\\pages\\_lang\\admin.vue' /* webpackChunkName: "pages__lang_admin" */).then(m => m.default || m)
const _ec6cab24 = () => import('..\\pages\\_lang\\faq.vue' /* webpackChunkName: "pages__lang_faq" */).then(m => m.default || m)
const _8dda857e = () => import('..\\pages\\_lang\\login.vue' /* webpackChunkName: "pages__lang_login" */).then(m => m.default || m)
const _02311b3d = () => import('..\\pages\\_lang\\orders.vue' /* webpackChunkName: "pages__lang_orders" */).then(m => m.default || m)
const _cd2e4f42 = () => import('..\\pages\\_lang\\terms.vue' /* webpackChunkName: "pages__lang_terms" */).then(m => m.default || m)
const _2100522b = () => import('..\\pages\\_lang\\booking\\cancel.vue' /* webpackChunkName: "pages__lang_booking_cancel" */).then(m => m.default || m)
const _13bebe22 = () => import('..\\pages\\_lang\\booking\\success.vue' /* webpackChunkName: "pages__lang_booking_success" */).then(m => m.default || m)
const _79e5886e = () => import('..\\pages\\_lang\\booking\\_name.vue' /* webpackChunkName: "pages__lang_booking__name" */).then(m => m.default || m)



if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
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
			path: "/about",
			component: _71a37fd0,
			name: "about"
		},
		{
			path: "/admin",
			component: _18556eda,
			name: "admin"
		},
		{
			path: "/faq",
			component: _01633be1,
			name: "faq"
		},
		{
			path: "/login",
			component: _9ee48418,
			name: "login"
		},
		{
			path: "/orders",
			component: _0bd39e2c,
			name: "orders"
		},
		{
			path: "/terms",
			component: _de384ddc,
			name: "terms"
		},
		{
			path: "/",
			component: _3233ca46,
			name: "index"
		},
		{
			path: "/:lang",
			component: _2129cbac,
			name: "lang"
		},
		{
			path: "/:lang/about",
			component: _60998136,
			name: "lang-about"
		},
		{
			path: "/:lang/admin",
			component: _20da6e27,
			name: "lang-admin"
		},
		{
			path: "/:lang/faq",
			component: _ec6cab24,
			name: "lang-faq"
		},
		{
			path: "/:lang/login",
			component: _8dda857e,
			name: "lang-login"
		},
		{
			path: "/:lang/orders",
			component: _02311b3d,
			name: "lang-orders"
		},
		{
			path: "/:lang/terms",
			component: _cd2e4f42,
			name: "lang-terms"
		},
		{
			path: "/:lang/booking/cancel",
			component: _2100522b,
			name: "lang-booking-cancel"
		},
		{
			path: "/:lang/booking/success",
			component: _13bebe22,
			name: "lang-booking-success"
		},
		{
			path: "/:lang/booking/:name?",
			component: _79e5886e,
			name: "lang-booking-name"
		}
    ],
    
    
    fallback: false
  })
}
