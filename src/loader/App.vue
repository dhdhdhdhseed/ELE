<template>
  <!-- 项目与打开窗口 -->
  <div class="scene">
    <div class="loader">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="text">正在准备资源中...</div>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
html {
  height: 100%;
  min-height: 100%;
  overflow: hidden;
  user-select: none;
  -webkit-app-region: no-drag;
}

html body {
  background-size: 163px;
  font: 14px/21px Monaco, sans-serif;
  color: #999;
  -webkit-font-smoothing: antialiased;
  -webkit-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  text-size-adjust: 100%;
  height: 100%;
  min-height: 100%;
  margin: 0px;
}

html body h4 {
  margin: 0;
}

.scene {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #222;
  position: relative;
}

.loader {
  position: relative;
  width: 15em;
  height: 15em;
  background: linear-gradient(-225deg, #ff3cac 0%, #562b7c 52%, #2b86c5 100%);
  border-radius: 50%;
  animation: spin 0.5s linear infinite;
}

span {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: inherit;
  background: inherit;
}

span:nth-child(1) {
  filter: blur(5px);
}

span:nth-child(2) {
  filter: blur(10px);
}

span:nth-child(3) {
  filter: blur(25px);
}

span:nth-child(4) {
  filter: blur(50px);
}

span::after {
  position: absolute;
  content: "";
  top: 10px;
  left: 10px;
  right: 10px;
  bottom: 10px;
  background: #222;
  border-radius: inherit;
}

.text {
  position: absolute;
  opacity: 0;
  animation: breath 3s ease-in-out infinite;
}

@keyframes breath {
  from {
    opacity: 0.05;
  }

  50% {
    opacity: 1;
  }

  to {
    opacity: 0.05;
  }
}

@keyframes spin {
  to {
    transform: rotate(1turn);
  }
}
</style>
