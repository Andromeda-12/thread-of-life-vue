<template>
  <v-text-field class="input" :label="label" outlined>Zheneva</v-text-field>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: 'DefaultLabel',
    },
  },
}
</script>
