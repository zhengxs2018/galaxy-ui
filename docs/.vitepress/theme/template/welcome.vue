<script setup lang="ts">
import { GButton, version } from 'galaxy-ui'
import { version as vueVersion } from 'vue'

function handleClick() {
  alert('Button clicked!')
}
</script>

<template>
  <p>Galaxy UI {{ version }} + Vue {{ vueVersion }}</p>
  <p>
    <g-button @click="handleClick">Click me!</g-button>
  </p>
</template>
