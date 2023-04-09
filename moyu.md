---
title: moyu
layout: sub
---

<!-- Header Start -->
<div class="container-fluid bg-primary d-flex align-items-center mb-5 py-5" id="home" style="min-height: 25vh;"></div>
<!-- Header End -->

<!-- Testimonial Start -->
<div class="container-fluid py-5" id="testimonial">
    <div class="container">
        <div class="position-relative d-flex align-items-center justify-content-center">
            <h1 class="display-1 text-uppercase text-white" style="-webkit-text-stroke: 1px #dee2e6;">今晚又吃点啥呢</h1>
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
<div id="image-container"><img id="random-image" src="img/redpanda/red1-min.JPG" class="img-scale-down" onclick="generateRandomImage()"></div><br/>
<button id="generate-button" onclick="generateRandomImage()" class="btn btn-outline-primary nav-item">点击图片来看更多！</button>
<script src="js/meme.js"></script>
<!-- Redpanda End-->

