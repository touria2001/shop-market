<template>
  <a href="#" class="button" data-tilt @click="$emit('event-click')">{{ text }}</a>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
</style>