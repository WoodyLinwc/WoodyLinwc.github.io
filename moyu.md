---
title: moyu
layout: sub
---

<!-- Header Start -->
<div class="container-fluid bg-primary d-flex align-items-center mb-5 py-5" id="home" style="min-height: 25vh;"></div>
<!-- Header End -->


<!-- Weather Start-->
<a class="weatherwidget-io" href="https://forecast7.com/zh/42d36n71d06/boston/" data-label_1="BOSTON" data-label_2="WEATHER" data-font="微软雅黑 (Microsoft Yahei)" data-theme="bright">BOSTON WEATHER</a>
<script>
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','weatherwidget-io-js');
</script>
<!-- Weather End-->


<!-- Testimonial Start -->
<div class="container-fluid py-5" id="testimonial">
    <div class="container">
        <div class="position-relative d-flex align-items-center justify-content-center">
            <h1 class="display-1 text-uppercase text-white" style="-webkit-text-stroke: 1px #dee2e6;font-size: 70px;">今晚又吃点啥呢</h1>
            <h1 class="position-absolute text-uppercase text-primary">今天胡思乱想些啥呢</h1>
    </div>
</div>
<!-- Testimonial End -->


<!-- Twitter Start-->
<div id="tweet-container"></div>
<button id="generate-button" onclick="generateRandomTweet()" class="btn btn-outline-primary nav-item">看看下一个</button>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
<script src="js/tweet.js"></script>
<br/>
<!-- Twitter End-->


<!-- Redpanda Start-->
<div class="container-fluid py-5" id="testimonial">
    <div class="container">
        <div class="position-relative d-flex align-items-center justify-content-center">
            <h1 class="position-absolute text-uppercase text-primary">不如看点小熊猫</h1>
        </div>
    </div>
</div>
<div id="image-container"><img id="random-image" src="" class="img-scale-down" onclick="generateRandomImage()"></div><br/>
<button id="generate-button" onclick="generateRandomImage()" class="btn btn-outline-primary nav-item">点击图片来看更多，电脑右键打开，手机长按直接拿图！</button>
<script src="js/meme.js"></script>
<br/>
<!-- Redpanda End-->



<!-- Kpop Start-->
<div class="container-fluid py-5" id="testimonial">
    <div class="container">
        <div class="position-relative d-flex align-items-center justify-content-center">
            <h1 class="position-absolute text-uppercase text-primary">或者(G)I-DLE</h1>
        </div>
    </div>
</div>
<img id="randomKpop" onclick="loadRandomImage()" class="img-scale-down" src="" alt="Kpop Image" style="cursor: pointer; max-width: 80vw; max-height: 80vh; display: block; margin: 0 auto;"><br/>
<button id="generate-button" onclick="loadRandomImage()" class="btn btn-outline-primary nav-item">目前有1000多张！</button>
<script src="js/kpop.js"></script>
<!-- Kpop End-->




<!-- Spinning Wheel Start-->
<!-- <div class="container-fluid py-5" id="testimonial">
    <div class="container">
        <div class="position-relative d-flex align-items-center justify-content-center">
            <h1 class="position-absolute text-uppercase text-primary">看看今天运势吧</h1>
        </div>
    </div>
</div> -->
<!--
<div class="wheelbody">
  <h1><center></center>
  <div id="mainbox" class="mainbox">
    <div id="box" class="box">
      <div class="box1">
        <span class="span1"><b>大吉</b></span>
        <span class="span2"><b>小吉</b></span>
        <span class="span3"><b>末吉</b></span>
        <span class="span4"><b>半凶</b></span>
      </div>
      <div class="box2">
        <span class="span1"><b>中吉</b></span>
        <span class="span2"><b>吉</b></span>
        <span class="span3"><b>凶</b></span>
        <span class="span4"><b>大凶</b></span>
      </div>
    </div>
    <button class="spin" onclick="myfunction()">转</button>
  </div>
  <script src="js/spinning.js"></script> -->

<!-- <div class="my-blog-container">
    <body>
        <iframe src="https://woodylinwc.github.io/Spinning-Wheel/" width="600" height="400" frameborder="0"></iframe>
    </body>
</div> -->
<!-- Spinning Wheel End-->

<!-- Countdown Start-->
<!-- <script src="https://cdn.logwork.com/widget/countdown.js"></script>
<a href="https://logwork.com/countdown-z4y4" class="countdown-timer" data-style="circles" data-timezone="America/New_York" data-date="2023-09-04 23:00">开学倒计时！</a>
<br/><br/> -->
<!-- Countdown End-->

<!-- <div class="container-fluid py-5" id="testimonial">
    <div class="container">
        <div class="position-relative d-flex align-items-center justify-content-center">
            <h1 class="position-absolute text-uppercase text-primary">随机照片</h1>
        </div>
    </div>
</div>
<div class="container">
    <div class="position-relative d-flex align-items-center justify-content-center">
      <a id="imageLink" href="#"> <img alt="" id="unsplashImage" /> </a>
    </div>
</div>
<p class="text-center">Photo by <a id="creator" href="#">NAME</a> on <a href="https://www.unsplash.com">Unsplash</a>!</p>
<script src="js/randomimage.js"></script> -->

<!-- iframe Start-->
<!-- <div id="my-iframe-container">
    <body>
        <iframe id="my-iframe" src="https://woodylinwc.github.io/Flow-Field-Art/"></iframe>
    </body>
</div>
<br />
<br /> -->
<!-- iframe Start-->

<!-- Rain/Wind Start-->
<div id="rain-container">
  <canvas id="rain-canvas"></canvas>
</div>
<div id="wind-container">
  <canvas id="wind-canvas"></canvas>
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
<script src="js/rain.js"></script>
<script src="js/wind.js"></script>
<script>
  var now = new Date();
  var hour = now.getHours();
  if (hour >= 3 && hour <= 15) {
    // Display wind effects
    document.getElementById("wind-container").style.display = "block";
    initWind();
  } else {
    // Hide wind effects
    document.getElementById("wind-container").style.display = "none";
    // Display rain effects
    initRain();
  }
</script>
<!-- Rain/Wind End-->

<!-- Live2D Widget Start -->
<script src="https://cdn.jsdelivr.net/gh/WoodyLinwc/live2d-widget@latest/autoload.js"></script>
<!-- Live2D Widget End -->

<!-- Chat Start-->
<div class="disqus">
  <div id="disqus_thread"></div>
  <script>
      /**
      *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
      *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables    */
      /*
      var disqus_config = function () {
      this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
      this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
      };
      */
      (function() { // DON'T EDIT BELOW THIS LINE
      var d = document, s = d.createElement('script');
      s.src = 'https://moyu-section.disqus.com/embed.js';
      s.setAttribute('data-timestamp', +new Date());
      (d.head || d.body).appendChild(s);
      })();
  </script>
  <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
</div>
<!-- Chat End-->
