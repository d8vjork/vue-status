<template>
  <div>
    <div class="ui large borderless menu">
      <div class="ui text container">
        <div class="item">
          <strong>VueStatus</strong>
        </div>
        <div class="right menu">
          <div class="ui simple dropdown item">
            Templates
            <i class="dropdown icon"></i>
            <div class="menu">
              <a v-for="(tpl, index) in templates" :key="index" @click="$router.push({ name: tpl.codename })" class="item" :class="{ 'active' : tpl.codename === 'semantic-ui' }">
                {{ tpl.name }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="ui text container" style="margin-top: 2.5em">
      <div class="ui four small statistics">
        <div class="statistic">
          <div class="value">
            {{ repo.criticals.length }}
          </div>
          <div class="label">
            Criticals
          </div>
        </div>
        <div class="statistic">
          <div class="value">
            {{ repo.issues }}
          </div>
          <div class="label">
            Issues
          </div>
        </div>
        <div class="statistic">
          <div class="value">
            0
          </div>
          <div class="label">
            Requests
          </div>
        </div>
        <div class="statistic">
          <div class="value">
            0
          </div>
          <div class="label">
            Days
          </div>
        </div>
      </div>
      <div class="ui three column grid" style="margin-top: 2.5em">
        <div class="column">
          <div class="ui inverted center aligned segment" :class="(repo.status.web) ? 'green' : 'red'">
            WEB
          </div>
        </div>
        <div class="column">
          <div class="ui inverted center aligned segment" :class="(repo.status.web) ? 'green' : 'red'">
            API
          </div>
        </div>
        <div class="column">
          <div class="ui inverted center aligned segment" :class="(repo.status.web) ? 'green' : 'red'">
            CDN
          </div>
        </div>
      </div>
      <div v-for="(critical, index) in repo.criticals" :key="index" class="ui fluid card" style="margin-top: 2.5em">
        <div class="content">
          <div class="header">
            {{ critical.title }}
          </div>
          <div class="meta">
            {{ critical.created_at }}
          </div>
          <div class="description">
            {{ critical.body }}
          </div>
        </div>
      </div>
    </div>
    <div class="ui inverted vertical segment" style="padding: 5em 0em; margin-top: 2.5em">
      <div class="ui center aligned container">
        <div class="ui stackable inverted divided equal height stackable grid">
          <div class="eight wide column">
            <h4 class="ui inverted header">About</h4>
            <div class="ui inverted link list">
              <a href="https://d8vjork.es" class="item">@d8vjork</a>
              <a href="https://github.com/d8vjork/vue-status" class="item">GitHub Repo</a>
              <a href="http://opensource.org/licenses/mit-license.php" class="item">MIT License</a>
            </div>
          </div>
          <div class="eight wide column">
            <h4 class="ui inverted header">VueStatus</h4>
            <p>Build status pages with VueJS.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    templates: {
      type: Array,
      required: true
    },
    repo: {
      type: Object,
      required: true
    }
  }
}
</script>
