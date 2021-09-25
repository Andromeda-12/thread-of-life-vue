<template>
  <v-text-field
    class="input"
    :label="label"
    :type="type"
    :append-icon="appendIcon"
    :value="value"
    :rules="rules"
    outlined
    @input="$emit('input', $event)"
    @click:append="$emit('click:append')"
  ></v-text-field>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: 'DefaultLabel',
    },
    type: {
      type: String,
      default: 'text',
    },
    rules: {
      type: Array,
      default: () => [],
    },
    appendIcon: {
      type: String,
      default: '',
    },
  },
}
</script>
