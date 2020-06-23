<template>
  <a :href=callableTel @click="stepToCall"><slot></slot></a>
</template>

<script>
export default {
  name: 'TelLink',
  props: {
    tel: String
  },
  computed: {
    callableTel () {
      return `tel:${this.tel.replace(/-/g, '')}`
    }
  },
  methods: {
    stepToCall () {
      if (typeof this.$gtm !== 'undefined' && this.$gtm.enabled()) {
        // this.$gtm
      }
      this.$emit('stepToCall')
    }
  }
}
</script>
