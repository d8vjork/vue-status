<template>
  <div>
    <div class="container">
      <nav class="navbar is-transparent">
        <div class="navbar-brand">
          <a class="navbar-item has-text-weight-semibold" href="/">
            VueStatus
          </a>

          <div class="navbar-burger burger" data-target="navMenuTransparentExample">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div id="navMenuTransparentExample" class="navbar-menu">
          <div class="navbar-start"></div>

          <div class="navbar-end">
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">
                Template
              </a>
              <div class="navbar-dropdown is-boxed">
                <a href="javascript:;" v-for="(tpl, index) in templates" :key="index" @click="$router.push({ name: tpl.codename })" class="navbar-item" :class="{ 'is-active' : tpl.codename === 'bulma' }">
                  {{ tpl.name }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
    <section class="section">
      <div class="container">
        <nav class="level">
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">Criticals</p>
              <p class="title">
                {{ repo.criticals.length }}
              </p>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">Issues</p>
              <p class="title">
                {{ repo.issues }}
              </p>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">Requests</p>
              <p class="title">0</p>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">Days</p>
              <p class="title">0</p>
            </div>
          </div>
        </nav>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="columns has-text-centered is-uppercase">
          <div class="column">
            <p class="notification" :class="(repo.status.web) ? 'is-success' : 'is-danger'">
              web
            </p>
          </div>
          <div class="column">
            <p class="notification" :class="(repo.status.api) ? 'is-success' : 'is-danger'">
              api
            </p>
          </div>
          <div class="column">
            <p class="notification" :class="(repo.status.cdn) ? 'is-success' : 'is-danger'">
              cdn
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div v-for="(critical, index) in repo.criticals" :key="index" class="box">
          <h1 class="title">{{ critical.title }}</h1>
          <h2 class="subtitle">{{ critical.created_at }}</h2>
          <hr>
          <p>
            {{ critical.body }}
          </p>
        </div>
      </div>
    </section>
    <footer class="footer">
      <div class="container">
        <div class="content has-text-centered">
          <p>
            <strong>VueStatus</strong> by <a href="https://d8vjork.es">@d8vjork</a>.
            The source code is licensed under <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.
          </p>
          <p>
            <a :href="this.$env.REPO_URL">
              VueStatus
            </a>
          </p>
        </div>
      </div>
    </footer>
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
