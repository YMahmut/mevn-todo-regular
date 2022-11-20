<template>
  <div id="header" class="m-0 p-2">
    <Transition name="bounce">
      <h1 v-if="!show">My Todo App</h1>
    </Transition>

  </div>
</template>

<script>
export default {
  name: "appHeader",
  data() {
    return {
      show: true,
      interval: null,
    }
  },
  mounted() {
    this.show = false;
  },

}
</script>

<style scoped>
#header {
  text-align: center;
  justify-content: center;
  align-items: center;
  background-color: #d9bcbc;
}

.bounce-enter-active {
  animation: bounce-in 1s reverse;
}

.bounce-leave-active {
  animation: bounce-out 1s;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>