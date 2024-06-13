<script></script>
<template>
<div class="container">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
    </div>
</template>
<style scope >
.container {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.dot {
  width: 100px;
  height: 100px;
  border: 5px solid rgb(255, 152, 0);
  border-radius: 50%;
  float: left;
  margin: 0 5px;
  transform: scale(0);
  animation: fx 1000ms ease infinite 0ms;
}
.dot:nth-child(2) {
  animation: fx 1000ms ease infinite 300ms;
}
.dot:nth-child(3) {
  animation: fx 1000ms ease infinite 600ms;
}
@keyframes fx {
  50% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>