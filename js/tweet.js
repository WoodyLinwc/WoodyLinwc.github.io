const tweets = [
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[衣帽间]：emo时的专属房间。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/1615083286086254602?ref_src=twsrc%5Etfw">January 16, 2023</a></blockquote>',
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[不会说粤语的广州人]：Can’tonese。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/1618274853265764352?ref_src=twsrc%5Etfw">January 25, 2023</a></blockquote>',
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[清仓大甩卖]：花钱买教训，结果买一送一。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/1551985181334052864?ref_src=twsrc%5Etfw">July 26, 2022</a></blockquote>',
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[如何判断失眠]：关灯前去了一趟厕所，睡着前又去了一趟。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/1614786219161829376?ref_src=twsrc%5Etfw">January 16, 2023</a></blockquote>'
  ];

let currentTweetIndex = -1;

function generateRandomTweet() {
  const tweetContainer = document.getElementById('tweet-container');
  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * tweets.length);
  } while (randomIndex === currentTweetIndex);
  currentTweetIndex = randomIndex;
  tweetContainer.innerHTML = tweets[randomIndex];
  twttr.widgets.load();
}

generateRandomTweet(); // generate a random tweet on page load
