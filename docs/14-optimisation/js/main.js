'use strict';

document.addEventListener("readystatechange", e => {
  document.querySelector('body > .spinner').classList.remove('spinner');
  $('[data-slick-slider]').slick({
    "swipeToSlide": true,
    "prevArrow": "[data-slick-slider-left]",
    "nextArrow": "[data-slick-slider-right]"
  });
});

document.addEventListener("DOMContentLoaded", e => {

// 2. This code loads the IFrame Player API code asynchronously.
  const tag = document.createElement('script');

  tag.src = "https://www.youtube.com/iframe_api";
  const firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
  let player;

  function onYouTubeIframeAPIReady() {
    player = new YT.Player('video', {
      height: '390',
      width: '640',
      videoId: 'M7lc1UVf-VE',
      loading: "lazy",
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
    });
  }

// 4. The API will call this function when the video player is ready.
  function onPlayerReady(event) {
    event.target.playVideo();
  }

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
  let done = false;

  function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.PLAYING && !done) {
      setTimeout(stopVideo, 6000);
      done = true;
    }
  }

  function stopVideo() {
    player.stopVideo();
  }
})