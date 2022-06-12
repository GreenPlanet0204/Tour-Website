import 'es6-promise/auto'
import Vue from 'vue'
import Meta from 'vue-meta'
import { createRouter } from './router.js'
import NoSSR from './components/no-ssr.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtLink from './components/nuxt-link.js'
import NuxtError from './components/nuxt-error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData } from './utils'
import { createStore } from './store.js'

/* Plugins */
import nuxt_plugin_cookieuniversalnuxt_a0c795c2 from 'nuxt_plugin_cookieuniversalnuxt_a0c795c2' // Source: ./cookie-universal-nuxt.js
import nuxt_plugin_googletagmanager_7db5d94a from 'nuxt_plugin_googletagmanager_7db5d94a' // Source: ./google-tag-manager.js (ssr: false)
import nuxt_plugin_templatesplugin8b18edf6_7d444f87 from 'nuxt_plugin_templatesplugin8b18edf6_7d444f87' // Source: ./templates.plugin.8b18edf6.js (ssr: false)
import nuxt_plugin_veevalidate_3db85ef4 from 'nuxt_plugin_veevalidate_3db85ef4' // Source: ./vee-validate.js
import nuxt_plugin_axios_225b3912 from 'nuxt_plugin_axios_225b3912' // Source: ./axios.js
import nuxt_plugin_i18n_1fba523a from 'nuxt_plugin_i18n_1fba523a' // Source: ..\\plugins\\i18n.js
import nuxt_plugin_geolocation_326389b2 from 'nuxt_plugin_geolocation_326389b2' // Source: ..\\plugins\\geolocation.js
import nuxt_plugin_mq_341c8fc6 from 'nuxt_plugin_mq_341c8fc6' // Source: ..\\plugins\\mq.js
import nuxt_plugin_svginline_1bdfe642 from 'nuxt_plugin_svginline_1bdfe642' // Source: ..\\plugins\\svg-inline.js
import nuxt_plugin_smoothscroll_601f1be6 from 'nuxt_plugin_smoothscroll_601f1be6' // Source: ..\\plugins\\smoothscroll.js
import nuxt_plugin_distances_2791248f from 'nuxt_plugin_distances_2791248f' // Source: ..\\plugins\\distances.js
import nuxt_plugin_axios_5659d192 from 'nuxt_plugin_axios_5659d192' // Source: ..\\plugins\\axios.js
import nuxt_plugin_flickity_1541ddc4 from 'nuxt_plugin_flickity_1541ddc4' // Source: ..\\plugins\\flickity.js (ssr: false)
import nuxt_plugin_svg_3a3c47ee from 'nuxt_plugin_svg_3a3c47ee' // Source: ..\\plugins\\svg.js (ssr: false)
import nuxt_plugin_moment_57893d7e from 'nuxt_plugin_moment_57893d7e' // Source: ..\\plugins\\moment.js
import nuxt_plugin_yt_32c7a174 from 'nuxt_plugin_yt_32c7a174' // Source: ..\\plugins\\yt.js
import nuxt_plugin_svgfix_2dedf320 from 'nuxt_plugin_svgfix_2dedf320' // Source: ..\\plugins\\svgfix.js (ssr: false)


// Component: <no-ssr>
Vue.component(NoSSR.name, NoSSR)

// Component: <nuxt-child>
Vue.component(NuxtChild.name, NuxtChild)

// Component: <nuxt-link>
Vue.component(NuxtLink.name, NuxtLink)

// Component: <nuxt>`
Vue.component(Nuxt.name, Nuxt)

// vue-meta configuration
Vue.use(Meta, {
  keyName: 'head', // the component option name that vue-meta looks for meta info on.
  attribute: 'data-n-head', // the attribute name vue-meta adds to the tags it observes
  ssrAttribute: 'data-n-head-ssr', // the attribute name that lets vue-meta know that meta info has already been server-rendered
  tagIDKeyName: 'hid' // the property name that vue-meta uses to determine whether to overwrite or append a tag
})

const defaultTransition = {"name":"page","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

async function createApp (ssrContext) {
  const router = createRouter(ssrContext)

  
  const store = createStore(ssrContext)
  // Add this.$router into store actions/mutations
  store.$router = router
  

  // Create Root instance
  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    router,
    store,
    nuxt: {
      defaultTransition,
      transitions: [ defaultTransition ],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [ transitions ]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },
      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = !!err
        if (typeof err === 'string') err = { statusCode: 500, message: err }
        const nuxt = this.nuxt || this.$options.nuxt
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in lib/server.js
        if (ssrContext) ssrContext.nuxt.error = err
        return err
      }
    },
    ...App
  }
  
  // Make app available into store via this.app
  store.app = app
  
  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    route,
    next,
    error: app.nuxt.error.bind(app),
    store,
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined
  })

  const inject = function (key, value) {
    if (!key) throw new Error('inject(key, value) has no key provided')
    if (!value) throw new Error('inject(key, value) has no value provided')
    key = '$' + key
    // Add into app
    app[key] = value
    
    // Add into store
    store[key] = app[key]
    
    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) return
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Vue.prototype.hasOwnProperty(key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  
  if (process.browser) {
    // Replace store state before plugins execution
    if (window.__NUXT__ && window.__NUXT__.state) {
      store.replaceState(window.__NUXT__.state)
    }
  }
  

  // Plugin execution
  
  if (typeof nuxt_plugin_cookieuniversalnuxt_a0c795c2 === 'function') await nuxt_plugin_cookieuniversalnuxt_a0c795c2(app.context, inject)
  if (typeof nuxt_plugin_veevalidate_3db85ef4 === 'function') await nuxt_plugin_veevalidate_3db85ef4(app.context, inject)
  if (typeof nuxt_plugin_axios_225b3912 === 'function') await nuxt_plugin_axios_225b3912(app.context, inject)
  if (typeof nuxt_plugin_i18n_1fba523a === 'function') await nuxt_plugin_i18n_1fba523a(app.context, inject)
  if (typeof nuxt_plugin_geolocation_326389b2 === 'function') await nuxt_plugin_geolocation_326389b2(app.context, inject)
  if (typeof nuxt_plugin_mq_341c8fc6 === 'function') await nuxt_plugin_mq_341c8fc6(app.context, inject)
  if (typeof nuxt_plugin_svginline_1bdfe642 === 'function') await nuxt_plugin_svginline_1bdfe642(app.context, inject)
  if (typeof nuxt_plugin_smoothscroll_601f1be6 === 'function') await nuxt_plugin_smoothscroll_601f1be6(app.context, inject)
  if (typeof nuxt_plugin_distances_2791248f === 'function') await nuxt_plugin_distances_2791248f(app.context, inject)
  if (typeof nuxt_plugin_axios_5659d192 === 'function') await nuxt_plugin_axios_5659d192(app.context, inject)
  if (typeof nuxt_plugin_moment_57893d7e === 'function') await nuxt_plugin_moment_57893d7e(app.context, inject)
  if (typeof nuxt_plugin_yt_32c7a174 === 'function') await nuxt_plugin_yt_32c7a174(app.context, inject)
  
  if (process.browser) { 
    if (typeof nuxt_plugin_googletagmanager_7db5d94a === 'function') await nuxt_plugin_googletagmanager_7db5d94a(app.context, inject)
    if (typeof nuxt_plugin_templatesplugin8b18edf6_7d444f87 === 'function') await nuxt_plugin_templatesplugin8b18edf6_7d444f87(app.context, inject)
    if (typeof nuxt_plugin_flickity_1541ddc4 === 'function') await nuxt_plugin_flickity_1541ddc4(app.context, inject)
    if (typeof nuxt_plugin_svg_3a3c47ee === 'function') await nuxt_plugin_svg_3a3c47ee(app.context, inject)
    if (typeof nuxt_plugin_svgfix_2dedf320 === 'function') await nuxt_plugin_svgfix_2dedf320(app.context, inject)
  }

  // If server-side, wait for async component to be resolved first
  if (process.server && ssrContext && ssrContext.url) {
    await new Promise((resolve, reject) => {
      router.push(ssrContext.url, resolve, () => {
        // navigated to a different route in router guard
        const unregister = router.afterEach(async (to, from, next) => {
          ssrContext.url = to.fullPath
          app.context.route = await getRouteData(to)
          app.context.params = to.params || {}
          app.context.query = to.query || {}
          unregister()
          resolve()
        })
      })
    })
  }

  return {
    app,
    router,
    store
  }
}

export { createApp, NuxtError }
