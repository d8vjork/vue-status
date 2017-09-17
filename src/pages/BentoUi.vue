<template>
  <div class="text-center pt-5">
    <h1>Coming soon...</h1>
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
