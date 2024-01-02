<template>
  <div class="header">
    <div class="logos">
      <img src="https://i.imgur.com/k62V6mL.jpg" class="logo" />
      <div class="title">Dressup Girl</div>
    </div>
    <div>
      <img @click="handleClick" class="zoom" src="https://dressupgirl.online/zoom.png" alt="zoom"/>
    </div>
  </div>
</template>

<script>
var userAgent = navigator.userAgent.toLowerCase();
if (userAgent.indexOf("iphone") !== -1) {
  var button = document.getElementById("myButton");
  button.style.display = "none";
}
export default {
  name: "Header",
  methods: {
    handleClick() {
      console.log("handleClick");
      var div = document.getElementById("gameDiv");
      if (!document.fullscreenElement) {
        if (div.requestFullscreen) {
          div.requestFullscreen();
        } else if (div.mozRequestFullScreen) { /* Firefox */
          div.mozRequestFullScreen();
        } else if (div.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
          div.webkitRequestFullscreen();
        } else if (div.msRequestFullscreen) { /* IE/Edge */
          div.msRequestFullscreen();
        }
      } else {
        if (document.exitFullscreen) {
          // document.getElementById("GameDiv").style.position = "relative";
          document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
          /* Firefox */
          document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
          /* Chrome, Safari & Opera */
          document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
          /* IE/Edge */
          document.msExitFullscreen();
        }
      }
    },
  },
};



</script>


<style>
@import url(./header.css);
</style>

