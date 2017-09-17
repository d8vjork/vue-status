<template>
  <div id="app">
    <router-view :repo="repo_data" :templates="templates"></router-view>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'app',

  data () {
    return {
      repo_data: {
        criticals: [],
        status: {
          web: true,
          api: true,
          cdn: true
        },
        issues: 0,
        created_at: null
      },
      templates: [
        {
          name: 'Bootstrap',
          codename: 'bootstrap'
        },
        {
          name: 'Bulma',
          codename: 'bulma'
        },
        {
          name: 'Semantic UI',
          codename: 'semantic-ui'
        },
        {
          name: 'Bento UI',
          codename: 'bento-ui'
        }
      ]
    }
  },

  methods: {
    getStatus (sites) {
      for (var i = 0; i < sites.length; i++) {
        for (var n = 0; n < this.repo_data.criticals.length; n++) {
          if (this.repo_data.criticals[n].labels.filter(x => x.name === sites[i])) {
            this.repo_data.status[sites[i]] = false
          }
        }
      }
    }
  },

  mounted () {
    axios.get(this.$env.API_URL).then(response => {
      this.repo_data.issues = response.data.open_issues_count
      this.repo_data.created_at = response.data.created_at
    })

    axios.get(this.$env.API_URL + '/issues', {
      labels: 'critical'
    }).then(response => {
      this.repo_data.criticals = response.data
      this.getStatus(['web', 'api', 'cdn'])
    })
  }
}
</script>
