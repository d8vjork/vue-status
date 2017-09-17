<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container">
        <a class="navbar-brand" href="#">VueState</a>
        <ul class="navbar-nav">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="javascript:;" @click="toggleDropdown('tplDropdown')" aria-haspopup="true" aria-expanded="false">
              Templates
            </a>
            <div class="dropdown-menu" id="tplDropdown" aria-labelledby="tplDropdown">
              <a href="javascript:;" v-for="(tpl, index) in templates" :key="index" @click="$router.push({ name: tpl.codename })" class="dropdown-item" :class="{ 'active' : tpl.codename === 'bootstrap' }">
                {{ tpl.name }}
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
    <div class="container mt-5">
      <div class="row text-uppercase text-center mb-5">
        <div class="col-12 col-lg-3">
          <p class="lead mb-0">Criticals</p>
          <h1 class="display-4">{{ repo.criticals.length }}</h1>
        </div>
        <div class="col-12 col-lg-3">
          <p class="lead mb-0">Issues</p>
          <h1 class="display-4">{{ repo.issues }}</h1>
        </div>
        <div class="col-12 col-lg-3">
          <p class="lead mb-0">Requests</p>
          <h1 class="display-4">0</h1>
        </div>
        <div class="col-12 col-lg-3">
          <p class="lead mb-0">Days</p>
          <h1 class="display-4">0</h1>
        </div>
      </div>
      <div class="row text-uppercase text-center mb-5">
        <div class="col-12 col-lg-4">
          <div class="card text-white" :class="(repo.status.web) ? 'bg-success' : 'bg-danger'">
            <div class="card-body">
              web
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-4">
          <div class="card text-white" :class="(repo.status.web) ? 'bg-success' : 'bg-danger'">
            <div class="card-body">
              api
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-4">
          <div class="card text-white" :class="(repo.status.web) ? 'bg-success' : 'bg-danger'">
            <div class="card-body">
              cdn
            </div>
          </div>
        </div>
      </div>
      <div v-for="(critical, index) in repo.criticals" :key="index" class="card mb-3">
        <div class="card-body">
          <h4 class="card-title">{{ critical.title }}</h4>
          <h6 class="card-subtitle mb-2 text-muted">{{ critical.created_at }}</h6>
          <p class="card-text">
            {{ critical.body }}
          </p>
        </div>
      </div>
    </div>
    <div class="bg-light text-center py-5 mt-5">
      <div class="container">
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
  },

  methods: {
    toggleDropdown (item) {
      document.getElementById(item).classList.toggle('show')
    }
  }
}
</script>
