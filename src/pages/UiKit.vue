<template>
  <div>
    <nav class="uk-navbar-container">
        <a class="uk-navbar-item uk-logo" href="#">
          VueStatus
        </a>
        <ul class="uk-navbar-nav">
          <li>
            <a href="#">Templates</a>
            <div class="uk-navbar-dropdown">
              <ul class="uk-nav uk-navbar-dropdown-nav">
                <li v-for="(tpl, index) in templates" :key="index" :class="{ 'uk-active' : tpl.codename === 'uikit' }">
                  <a @click="$router.push({ name: tpl.codename })" href="javascript:;">
                    {{ tpl.name }}
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
    </nav>
  </div>
</template>

<script>
export default {
  props: {
    templates: {
      type: Array,
      required: true
    }
  }
}
</script>
