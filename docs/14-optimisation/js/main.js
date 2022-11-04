'use strict';

document.addEventListener("readystatechange", e => {
  document.querySelector('body > .spinner').classList.remove('spinner');
  $('[data-slick-slider]').slick({
    "swipeToSlide": true,
    "prevArrow": "[data-slick-slider-left]",
    "nextArrow": "[data-slick-slider-right]"
  });

// 2. This code loads the IFrame Player API code asynchronously.
  const tag = document.createElement('script');

  tag.src = "https://www.youtube.com/player_api";
  const firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
  let player;

  window.onYouTubePlayerAPIReady = () => {
    window.player = new YT.Player('video', {
      autoplay: 1,
      enablejsapi: 1,
      loading: 'lazy',
      height: '390',
      width: '640',
      videoId: 'M7lc1UVf-VE'
    });
    window.player.addEventListener('onReady', window.onPlayerReady);
    window.player.addEventListener('onStateChange', window.onPlayerStateChange);
    window.player.getIframe().loading = 'lazy';
  }

// 4. The API will call this function when the video player is ready.
  window.onPlayerReady = event => event.target.playVideo();

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
  let done = false;

  window.onPlayerStateChange = event =>  {
    if (event.data === YT.PlayerState.PLAYING && !done) {
      setTimeout(stopVideo, 6000);
      done = true;
    }
  }

  window.stopVideo = () => window.player.stopVideo();
})