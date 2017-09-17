import Vue from 'vue'
import Router from 'vue-router'

// Pages
import Bulma from '@/pages/Bulma'
import Bootstrap from '@/pages/Bootstrap'
import BentoUi from '@/pages/BentoUi'
import SemanticUi from '@/pages/SemanticUi'
import UiKit from '@/pages/UiKit'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'bootstrap',
      component: Bootstrap,
      meta: {
        stylesheet: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css'
      }
    },
    {
      path: '/bulma',
      name: 'bulma',
      component: Bulma,
      meta: {
        stylesheet: 'https://cdn.jsdelivr.net/npm/bulma@0.5/css/bulma.min.css'
      }
    },
    {
      path: '/bento-ui',
      name: 'bento-ui',
      component: BentoUi,
      meta: {
        stylesheet: 'https://cdn.jsdelivr.net/npm/bento-ui@0.6/dist/bento.min.css'
      }
    },
    {
      path: '/semantic-ui',
      name: 'semantic-ui',
      component: SemanticUi,
      meta: {
        stylesheet: 'https://cdn.jsdelivr.net/npm/semantic-ui-css@2.2/semantic.min.css'
      }
    },
    {
      path: '/uikit',
      name: 'uikit',
      component: UiKit,
      meta: {
        stylesheet: 'https://cdn.jsdelivr.net/npm/uikit@3.0.0-beta.30/dist/css/uikit.min.css'
      }
    }
  ]
})
