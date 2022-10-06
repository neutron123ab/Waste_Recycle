<template>

  <PlatformUp></PlatformUp>
  <PlatformDown></PlatformDown>

</template>

<script>
import PlatformUp from "./PlatformUp";
import PlatformDown from "./PlatformDown";
export default {
  name: "Platform",
  components: {PlatformDown, PlatformUp}
}
</script>

<style scoped>

</style>