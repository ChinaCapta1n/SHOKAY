<script setup>
import NavBar from './components/NavBar/NavBar.vue';
import NavFooter from './components/Footer/footer.vue';



</script>

<template>
  <header class="header">
    <nav-bar />
  </header>

  <router-view v-slot="{ Component, route }">
    <Transition name="fade">
      <component :is="Component" :key="route.path" />
    </Transition>
  </router-view>




  <footer class="footer">
    <nav-footer />
  </footer>
</template>

<style lang="scss">
.header {
  height: 6.3rem;
  // background-color: #313f51;
  background-color: rgba(0, 0, 0, .4);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
}

.footer {
  height: 4.3rem;
  line-height: 4.3rem;
  text-align: center;
  color: rgb(216, 225, 217);
  font-size: 1.3rem;
  background-color: rgb(117, 111, 99);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s linear;
}

.fade-enter-from {
  opacity: 1;
}

.fade-leave-to {
  opacity: 0;
}
</style>
