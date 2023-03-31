const tweets = [
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[衣帽间]：emo时的专属房间。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/1615083286086254602?ref_src=twsrc%5Etfw">January 16, 2023</a></blockquote>',
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[不会说粤语的广州人]：Can’tonese。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/1618274853265764352?ref_src=twsrc%5Etfw">January 25, 2023</a></blockquote>',
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[清仓大甩卖]：花钱买教训，结果买一送一。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/1551985181334052864?ref_src=twsrc%5Etfw">July 26, 2022</a></blockquote>',
    '<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">[中药拌沙拉]：麝香味俱全。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/1633691748311486465?ref_src=twsrc%5Etfw">March 9, 2023</a></blockquote>', 
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[最好吃和最难吃的食物]：新鲜出锅的薯条和冰箱过夜的薯条。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/1594731920214163458?ref_src=twsrc%5Etfw">November 21, 2022</a></blockquote>', 
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[操场大比赛]：各有秋千。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/1575339113720565761?ref_src=twsrc%5Etfw">September 29, 2022</a></blockquote>', 
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[补品打人啦]：人参攻击。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/1556306170658361344?ref_src=twsrc%5Etfw">August 7, 2022</a></blockquote>', 
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[爱豆讲相声]：满是偶像包袱。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/1543803705920724993?ref_src=twsrc%5Etfw">July 4, 2022</a></blockquote>', 
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[今晚我们都是熬夜冠军]：嗷耶！</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/1528089048379797508?ref_src=twsrc%5Etfw">May 21, 2022</a></blockquote>', 
    '<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">[夏天快到了]：知了知了。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/1528004304065417217?ref_src=twsrc%5Etfw">May 21, 2022</a></blockquote>', 
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[吊在路灯上的资本家]：事不关己，高高挂起。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/1519892252511948800?ref_src=twsrc%5Etfw">April 29, 2022</a></blockquote>', 
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[新鲜出炉]：全麦面包店全卖面包。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/1514330784672452610?ref_src=twsrc%5Etfw">April 13, 2022</a></blockquote>', 
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[遇到分歧要就事论事]：就是就是。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/1503966991002046464?ref_src=twsrc%5Etfw">March 16, 2022</a></blockquote>', 
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[蝙蝠的睡眠质量超好]：每一晚都是倒头就睡。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/1500300955887280128?ref_src=twsrc%5Etfw">March 6, 2022</a></blockquote>', 
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[一不留神]：财神爷被人拐跑了。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/1490392709680541702?ref_src=twsrc%5Etfw">February 6, 2022</a></blockquote>', 
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[钱包空空如也]：理财专家不理睬我。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/1487585072714821635?ref_src=twsrc%5Etfw">January 30, 2022</a></blockquote>', 
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[星空]：没有星光的夜空。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/1470828559753175051?ref_src=twsrc%5Etfw">December 14, 2021</a></blockquote>', 
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[暴躁的销售老哥]：优质服务是我们的中指。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/1464287009195937793?ref_src=twsrc%5Etfw">November 26, 2021</a></blockquote>',
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[分针走快了谁懂]：秒懂。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/1462514783626969094?ref_src=twsrc%5Etfw">November 21, 2021</a></blockquote>',
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[沉没的羔羊]：一部讲述涮羊肉历史的美食纪录片。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/1461478405061419011?ref_src=twsrc%5Etfw">November 18, 2021</a></blockquote>', 
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[如梗在喉]：想讲笑话但是说不出来。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/1460676426227662855?ref_src=twsrc%5Etfw">November 16, 2021</a></blockquote>', 
    '<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">[七步诗]：啊，步步步，步，步步步。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/1456020961199800326?ref_src=twsrc%5Etfw">November 3, 2021</a></blockquote>', 
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[一气呵成]：当你被气到无法说话只能呵呵时。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/1454100773139329035?ref_src=twsrc%5Etfw">October 29, 2021</a></blockquote>', 
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[烤全羊店暂停营业]：打烊。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/1450666990348156929?ref_src=twsrc%5Etfw">October 20, 2021</a></blockquote>', 
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[接肿而至]：麻烦就像拔手指上的毛刺。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/1449594089448562693?ref_src=twsrc%5Etfw">October 17, 2021</a></blockquote>', 
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[阿淦正传]：人生就像一盒巧克力，你永远不知道下一颗到底是狗屎味的巧克力还是巧克力味的狗屎。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/1448142886822887425?ref_src=twsrc%5Etfw">October 13, 2021</a></blockquote>', 
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[山顶洞人的心声]：很少人问我为什么住在山下，其实是因为山顶冻人。 <a href="https://t.co/3ZqZKklaGL">https://t.co/3ZqZKklaGL</a></p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/1445760049415024644?ref_src=twsrc%5Etfw">October 6, 2021</a></blockquote>',
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[开普勒22b]：地球压力好大啊，上面住满了焦虑的人类。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/1444769210517893121?ref_src=twsrc%5Etfw">October 3, 2021</a></blockquote>', 
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[一名潜水员失踪了]：不遵守潜规则的下场。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/1444769093354131459?ref_src=twsrc%5Etfw">October 3, 2021</a></blockquote>', 
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[仿佛听见一声饱嗝]：微胖的人都是被喂胖的。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/1442907184237477889?ref_src=twsrc%5Etfw">September 28, 2021</a></blockquote>', 
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[闽南人看到一栋坐北朝南的别墅]：靠北啦，太贵买不起。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/1442159523247108100?ref_src=twsrc%5Etfw">September 26, 2021</a></blockquote>', 
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">（建议这位师傅多看看轮语。 <a href="https://t.co/kiZ5KEcQPL">https://t.co/kiZ5KEcQPL</a></p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/1441974468591734786?ref_src=twsrc%5Etfw">September 26, 2021</a></blockquote>', 
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[轮语]：一本由许多知名汽车修理工共同撰写的著作。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/1441973364290109446?ref_src=twsrc%5Etfw">September 26, 2021</a></blockquote>',
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[蟲曰]：三虫行，必有我师焉。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/1441902791732056070?ref_src=twsrc%5Etfw">September 25, 2021</a></blockquote>',
    '<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">[𠃊口𠃊]：打哈哈也是一种打哈哈，哈哈。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/1440766009447649280?ref_src=twsrc%5Etfw">September 22, 2021</a></blockquote>',
    '<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">[咋最近都不去健身了呢]：可能健忘了。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/1438160103191072777?ref_src=twsrc%5Etfw">September 15, 2021</a></blockquote>', 
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[都市疫情传说]：会不会我们都曾经与“裂口女”擦肩而过，但因为大家都带着口罩所以没有认出来。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/1437235045870325762?ref_src=twsrc%5Etfw">September 13, 2021</a></blockquote>', 
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[魔术师的鸽子]：住在胳肢窝里。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/1435277857035595777?ref_src=twsrc%5Etfw">September 7, 2021</a></blockquote>', 
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[逃离万有引力]：见到月亮的第一眼就想和它一起私奔。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/1434739766189248513?ref_src=twsrc%5Etfw">September 6, 2021</a></blockquote>', 
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[经常卖萌的课本答案]：略略略。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/1434563118735273988?ref_src=twsrc%5Etfw">September 5, 2021</a></blockquote>', 
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[买一送一的笔记本]：赔本买卖。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/1434562020213497862?ref_src=twsrc%5Etfw">September 5, 2021</a></blockquote>', 
    '<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">[哺乳人]：Mammalian。 <a href="https://t.co/4LvfbCHMiJ">https://t.co/4LvfbCHMiJ</a></p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/1504995432635805705?ref_src=twsrc%5Etfw">March 19, 2022</a></blockquote>', 
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[黄鼠狼给鸡做心脏移植]：没安好心。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/1431819526434443266?ref_src=twsrc%5Etfw">August 29, 2021</a></blockquote>', 
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[货架底的一包味精]：鲜为人知。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/1431743342178717699?ref_src=twsrc%5Etfw">August 28, 2021</a></blockquote>', 
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[酥脆白噪音]：可能人类喜欢听雨声是因为它和油炸鸡腿的声音有点像。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/1430335564964892676?ref_src=twsrc%5Etfw">August 25, 2021</a></blockquote>', 
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[素食主义者的做事风格]：我行我素。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/1426995747162103811?ref_src=twsrc%5Etfw">August 15, 2021</a></blockquote>', 
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[暂时性断片儿]：特指刷剧时无法记起上一集发生故事的状态。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/1426976659144650758?ref_src=twsrc%5Etfw">August 15, 2021</a></blockquote>', 
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[八十九]：八九不离十。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/1426910685645180929?ref_src=twsrc%5Etfw">August 15, 2021</a></blockquote>', 
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[三天打鱼两天晒网]：指把全部课程安排在一三五的大学学生。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/1421201968140361733?ref_src=twsrc%5Etfw">July 30, 2021</a></blockquote>', 
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[蒸汽火车补充煤炭]：我要开动啦。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/1416072733293694981?ref_src=twsrc%5Etfw">July 16, 2021</a></blockquote>', 
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[愿你夜夜好梦]：失眠的时候不妨想想“马丁·路德金”。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/1413149128876466195?ref_src=twsrc%5Etfw">July 8, 2021</a></blockquote>', 
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[初来乍到的太阳能板]：请多多光照！</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/1410984366822600713?ref_src=twsrc%5Etfw">July 2, 2021</a></blockquote>', 
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[毕业季结束]：正式从大学生变成无业人员。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/1397966206473322504?ref_src=twsrc%5Etfw">May 27, 2021</a></blockquote>', 
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[绿巨人开派对]：热情浩克。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/1393999338850951169?ref_src=twsrc%5Etfw">May 16, 2021</a></blockquote>', 
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[癞蛤蟆吃到了天鹅肉]：不赖啊。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/1393998658396381194?ref_src=twsrc%5Etfw">May 16, 2021</a></blockquote>', 
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[圆形毕露]：当π想同时和两个半径交朋友时。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/1389033717063196678?ref_src=twsrc%5Etfw">May 3, 2021</a></blockquote>', 
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[脚踏自行车张嘴]：兜风。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/1384242897420132352?ref_src=twsrc%5Etfw">April 19, 2021</a></blockquote>', 
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[嚯从口出]：哟呵。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/1384011141341356032?ref_src=twsrc%5Etfw">April 19, 2021</a></blockquote>', 
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[不言而喻的快乐]：吃独食。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/1380927298858278916?ref_src=twsrc%5Etfw">April 10, 2021</a></blockquote>', 
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[矿洞恐惧症]：深井病。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/1377400875367477251?ref_src=twsrc%5Etfw">March 31, 2021</a></blockquote>', 
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[刻板印象]：用楔形文字记录生活。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/1369075017527554053?ref_src=twsrc%5Etfw">March 8, 2021</a></blockquote>', 
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[洗碗池前的猜想]：会不会有两根筷子自始至终都没有配在一起。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/1368705741561999362?ref_src=twsrc%5Etfw">March 7, 2021</a></blockquote>', 
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[熊猫大闹菜市场]：夺笋呐。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/1363860298193600512?ref_src=twsrc%5Etfw">February 22, 2021</a></blockquote>', 
    '<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">[第五元素]：水银是汞，水金是淦。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/1357371117363728389?ref_src=twsrc%5Etfw">February 4, 2021</a></blockquote> ',
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[带着肚子周游世界]：我肚子里藏着人间烟火。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/1353901642308079618?ref_src=twsrc%5Etfw">January 26, 2021</a></blockquote>', 
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[天道好轮回]：我坐在摩天轮里如此感叹到。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/1348664212176982018?ref_src=twsrc%5Etfw">January 11, 2021</a></blockquote>', 
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[不对劲的木板]：蹊跷板。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/1338306735744888834?ref_src=twsrc%5Etfw">December 14, 2020</a></blockquote>', 
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[一个怕冷的南方人]：冬天不开暖气治好了我晚上睡觉踢被子的坏习惯。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/1328146685357404164?ref_src=twsrc%5Etfw">November 16, 2020</a></blockquote>', 
    '<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">[一列停靠在美食街的火车]：逛吃逛吃逛吃。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/1319087292158496769?ref_src=twsrc%5Etfw">October 22, 2020</a></blockquote>',
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[相机上的逃生出口]：快门。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/1311818286259146754?ref_src=twsrc%5Etfw">October 2, 2020</a></blockquote>',
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[躲在树后的闰土]：暗中观猹。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/1305296609752895488?ref_src=twsrc%5Etfw">September 14, 2020</a></blockquote>', 
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[网课焦虑症]：时不时移动鼠标检查自己是否闭麦。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/1304051699305385985?ref_src=twsrc%5Etfw">September 10, 2020</a></blockquote>', 
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[一只赞不绝口的猫]：喵啊。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/1300909531304726528?ref_src=twsrc%5Etfw">September 1, 2020</a></blockquote>', 
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[草坪下的西瓜]：艹艹茜苽艹艹。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/1296220730900840455?ref_src=twsrc%5Etfw">August 19, 2020</a></blockquote>', 
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[回笼教]：一个不需要教徒准时来参加活动的宗教。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/1292856521706082306?ref_src=twsrc%5Etfw">August 10, 2020</a></blockquote>', 
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[开罐器]：每次手指被易拉罐弄疼的时候，就觉得“易拉罐”不配叫这个名字。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/1286709488024793088?ref_src=twsrc%5Etfw">July 24, 2020</a></blockquote>', 
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[颜艺大师]：怀念那些占满朋友相机内存的日子。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/1290130415731187712?ref_src=twsrc%5Etfw">August 3, 2020</a></blockquote>', 
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[买不起健身器材怎么办]：请你自重。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/1286476294205710336?ref_src=twsrc%5Etfw">July 24, 2020</a></blockquote>',
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[偶遇海风]：踉踉跄跄，一头撞进夏天的怀抱里。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/1280905364913913856?ref_src=twsrc%5Etfw">July 8, 2020</a></blockquote>', 
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[废品收购站的环保标语]：塑料恒久远，一袋永流传。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/1277021782613143554?ref_src=twsrc%5Etfw">June 27, 2020</a></blockquote>', 
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[卖报的小行家]：啦啦啦！啦啦啦！</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/1275424519084290051?ref_src=twsrc%5Etfw">June 23, 2020</a></blockquote>', 
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[自学量子力学]：不自量力。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/1272683980727476224?ref_src=twsrc%5Etfw">June 16, 2020</a></blockquote>', 
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[比人类登上月球更难的事]：协助父母解决他们手机上的一个小问题。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/1270540425342976001?ref_src=twsrc%5Etfw">June 10, 2020</a></blockquote>', 
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[瓜子和开心果探讨工作心得]：唠嗑。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/1267493915696996354?ref_src=twsrc%5Etfw">June 1, 2020</a></blockquote>', 
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[冰箱是什么味道的]：把开封后的小面包放一个晚上就知道了。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/1260338284460478465?ref_src=twsrc%5Etfw">May 12, 2020</a></blockquote>',
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[吃货国王]：我需要有人来继承我的王胃。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/1245471230792273920?ref_src=twsrc%5Etfw">April 1, 2020</a></blockquote>', 
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[阴天打伞的人]：“有些人能感受雨，而其他人则只是被淋湿。”</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/1244003415698653184?ref_src=twsrc%5Etfw">March 28, 2020</a></blockquote>', 
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[绿茵场上的耳朵]：罗纳尔多。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/1234271802014289921?ref_src=twsrc%5Etfw">March 2, 2020</a></blockquote>', 
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[杠杆原理]：给我一个阿基米德，我就能撬动地球。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/1230340417377492992?ref_src=twsrc%5Etfw">February 20, 2020</a></blockquote>', 
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[我对房间乱的定义]：找不到之前放的东西了。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/1225229548104626177?ref_src=twsrc%5Etfw">February 6, 2020</a></blockquote>', 
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[我们为什么不起床]：都赖床。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/1223651730115768321?ref_src=twsrc%5Etfw">February 1, 2020</a></blockquote>', 
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[郁闷的卖酒老板]：那些说借酒消愁的人，没有一个还的。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/1208955807074836482?ref_src=twsrc%5Etfw">December 23, 2019</a></blockquote>', 
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[星旅少女]：天边划过的流星是她递给银河的情书。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/1206016737113726976?ref_src=twsrc%5Etfw">December 15, 2019</a></blockquote>', 
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[肉信誓旦旦的对饺子皮说]：包在我身上。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/1200959615833382912?ref_src=twsrc%5Etfw">December 1, 2019</a></blockquote>', 
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[多亏了你]：我对打折的商品如是说道。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/1198399741605957632?ref_src=twsrc%5Etfw">November 24, 2019</a></blockquote>', 
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[夜间漫步]：兜住月亮，揣进口袋里。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/1191015329230704645?ref_src=twsrc%5Etfw">November 3, 2019</a></blockquote>', 
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[到此一游]：博物馆好有意思啊，但是没人想住在里面。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/1190339097686167554?ref_src=twsrc%5Etfw">November 1, 2019</a></blockquote>', 
    '<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">[你这笑话好直接啊]：梗(耿)直。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/1188147171583057920?ref_src=twsrc%5Etfw">October 26, 2019</a></blockquote>', 
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[扶小伙子过马路]：乐于助人未遂。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/1183765440193073152?ref_src=twsrc%5Etfw">October 14, 2019</a></blockquote>', 
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[十七岁那年的雨季]：小时候的我很喜欢雨，喜欢它从屋檐滴落下的声音，喜欢它倒映城市的夜景，更喜欢路人被它突然降临而惊慌的表情。不过现在的话...咳咳，还是很喜欢。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/1182069893879009280?ref_src=twsrc%5Etfw">October 9, 2019</a></blockquote>', 
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[夏天向冬天表达爱意]：暗送秋波。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/1178419092916707328?ref_src=twsrc%5Etfw">September 29, 2019</a></blockquote>', 
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[夏末微凉]：想与你分享被捕捉的黄昏，然后带入下一个夏天。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/1165432157810188288?ref_src=twsrc%5Etfw">August 25, 2019</a></blockquote>', 
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[空调下演讲]：尽说风凉话。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/1165432062809202689?ref_src=twsrc%5Etfw">August 25, 2019</a></blockquote>', 
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[烤箱对微波炉说]：你不能做啥事都只有三分钟热度。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/1159848044185174026?ref_src=twsrc%5Etfw">August 9, 2019</a></blockquote>', 
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[盗窃可耻]：但偷懒不算。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/1158536038370951169?ref_src=twsrc%5Etfw">August 6, 2019</a></blockquote>', 
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[最富有创造力的金鱼]：灵感大王。 <a href="https://t.co/5eQiNd2kps">pic.twitter.com/5eQiNd2kps</a></p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/1152600186033754112?ref_src=twsrc%5Etfw">July 20, 2019</a></blockquote>', 
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[夏日沐歌]：我喜欢你就像夏天悸动的风，热忱而令人琢磨不透。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/1150085412804845573?ref_src=twsrc%5Etfw">July 13, 2019</a></blockquote>', 
    '<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">[漫画人]：Mangalian <a href="https://t.co/4LvfbCHMiJ">https://t.co/4LvfbCHMiJ</a></p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/1146788612513644544?ref_src=twsrc%5Etfw">July 4, 2019</a></blockquote>', 
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[栖息在南山上的风]：和煦的阳光洒向大地，我站在半山腰上俯瞰着这广袤无垠的田野。她轻轻贴在我耳边，向我诉说山那头的故事。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/1140367005687734273?ref_src=twsrc%5Etfw">June 16, 2019</a></blockquote>', 
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[窃影者]：当个偷影子的人，偷走半个你。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/1134271693525069824?ref_src=twsrc%5Etfw">May 31, 2019</a></blockquote>', 
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[特色小吃]：谁能想到西安的肉夹馍其实是“馍夹肉”🥙。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/1117952015785709570?ref_src=twsrc%5Etfw">April 16, 2019</a></blockquote>', 
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[整理房间的动力]：亲戚来串门。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/1107409481955192832?ref_src=twsrc%5Etfw">March 17, 2019</a></blockquote>', 
    '<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">[缸里的米坏了]：好糗啊。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/1037157170847121413?ref_src=twsrc%5Etfw">September 5, 2018</a></blockquote>', 
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[煤窑工人]：一切看我脸色行事。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/1025432327231623168?ref_src=twsrc%5Etfw">August 3, 2018</a></blockquote>', 
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[二郎神的坐姿]：翘着二郎腿。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/1018641114751004677?ref_src=twsrc%5Etfw">July 15, 2018</a></blockquote>', 
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[梦见食物追着你跑]：饿梦。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/1010417165869174784?ref_src=twsrc%5Etfw">June 23, 2018</a></blockquote>', 
    '<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">[脚踩香蕉皮]：溜了溜了。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/1008503852625260546?ref_src=twsrc%5Etfw">June 18, 2018</a></blockquote>',
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[马上让自己变胖的口诀]：奶奶，我饿了。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/1001170716681756673?ref_src=twsrc%5Etfw">May 28, 2018</a></blockquote>', 
    '<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">[谁在煎东西]：我在煎熬。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/1000733602496335876?ref_src=twsrc%5Etfw">May 27, 2018</a></blockquote>', 
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[口无遮拦的人]：爱的绝缘体。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/996895346029748225?ref_src=twsrc%5Etfw">May 16, 2018</a></blockquote>',
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[自称有幽默细胞的人]：完全没有幽默感。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/994780294040387584?ref_src=twsrc%5Etfw">May 11, 2018</a></blockquote>', 
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[葬礼上穿着礼服和礼裤]：没有礼貌。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/993309285219266560?ref_src=twsrc%5Etfw">May 7, 2018</a></blockquote>',
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[哑巴不给瞎子让座]：无语了。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/991465953723584513?ref_src=twsrc%5Etfw">May 1, 2018</a></blockquote>',
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[脚部截肢手术前]：在马桶上玩一会儿手机。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/979772432541192192?ref_src=twsrc%5Etfw">March 30, 2018</a></blockquote>',
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[自知之明]：黑夜给我披上一件外衣，但是这不是我裸体的理由。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/979141796151296003?ref_src=twsrc%5Etfw">March 28, 2018</a></blockquote>',
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[鳄鱼先生看新闻流泪了]：因为它是洋葱新闻。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/972720448478830592?ref_src=twsrc%5Etfw">March 11, 2018</a></blockquote>',
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[一无是处]：拿到驾照的人鱼。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/968664167505956865?ref_src=twsrc%5Etfw">February 28, 2018</a></blockquote>',
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[睡前冷知识]：其实梦里人们根本听不见冲马桶的声音。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/966560953650343936?ref_src=twsrc%5Etfw">February 22, 2018</a></blockquote>',
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[青春永驻的球]：保龄球。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/966526223244562432?ref_src=twsrc%5Etfw">February 22, 2018</a></blockquote>',
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[安全小贴士]：地震过后，请立即不要打开碳酸饮料。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/963937649802215424?ref_src=twsrc%5Etfw">February 15, 2018</a></blockquote>',
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[安慰自己]：不要紧的，只是世界末日而已。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/958547154338963456?ref_src=twsrc%5Etfw">January 31, 2018</a></blockquote>',
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[在夏天最适合说的话]：你哪凉快哪呆着吧。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/954187489828368384?ref_src=twsrc%5Etfw">January 19, 2018</a></blockquote>',
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[常识性错误]：我免贵姓张。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/953834917569409024?ref_src=twsrc%5Etfw">January 18, 2018</a></blockquote>',
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[虚伪的人]：怎么样我才能让人觉得我很真诚呢？</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/952582230962049024?ref_src=twsrc%5Etfw">January 14, 2018</a></blockquote>',
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[不停绕圈的病毒]：旋转木马。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/950211998813507584?ref_src=twsrc%5Etfw">January 8, 2018</a></blockquote>',
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[看到一只小猪在读书]：喔，他原来在看“动物庄园”！</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/950091416545488897?ref_src=twsrc%5Etfw">January 7, 2018</a></blockquote>',
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[夜归人]：飘零的雪花落在我身上，仔细一闻，月亮的味道。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/949492872650387457?ref_src=twsrc%5Etfw">January 6, 2018</a></blockquote>',
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[把聪明写在脸上的人]：看起来很聪明。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/946265448743624704?ref_src=twsrc%5Etfw">December 28, 2017</a></blockquote>',
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[外面传来敲门声]：你好，我叫木鱼。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/946077216395415552?ref_src=twsrc%5Etfw">December 27, 2017</a></blockquote>',
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[放假后做的第一件坏事]：熬夜。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/944439801897472000?ref_src=twsrc%5Etfw">December 23, 2017</a></blockquote>',
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[洁癖的人洗澡]：觉得水脏。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/941460459273834497?ref_src=twsrc%5Etfw">December 15, 2017</a></blockquote>',
    '<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">[贾斯汀比伯的表舅]：Justin Case。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/939859825101623296?ref_src=twsrc%5Etfw">December 10, 2017</a></blockquote>',
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[睡觉前制定的人生计划]：只在睡梦中实行。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/939726668243046400?ref_src=twsrc%5Etfw">December 10, 2017</a></blockquote>',
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[去钟表店问老师傅]：打扰一下，请问怎么才能修好我的生物钟？</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/938615128655826944?ref_src=twsrc%5Etfw">December 7, 2017</a></blockquote>',
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[下雨天边打孩子边浇花]：闲着也是闲着。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/933189655893118976?ref_src=twsrc%5Etfw">November 22, 2017</a></blockquote>',
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[图书馆里的电]：静电。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/930967872045748225?ref_src=twsrc%5Etfw">November 16, 2017</a></blockquote>',
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[闹钟指着旁边的手表]：呐，这是我表姐。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/930967664729739264?ref_src=twsrc%5Etfw">November 16, 2017</a></blockquote>',
    '<blockquote class="twitter-tweet"><p lang="zh" dir="ltr">[如何判断失眠]：关灯前去了一趟厕所，睡着前又去了一趟。</p>&mdash; 住在山下的山顶洞人 (@Linwo_OCh) <a href="https://twitter.com/Linwo_OCh/status/1614786219161829376?ref_src=twsrc%5Etfw">January 16, 2023</a></blockquote>'
];

//   function generateRandomTweet() {
//     const tweetContainer = document.getElementById('tweet-container');
//     const randomIndex = Math.floor(Math.random() * tweets.length);
//     tweetContainer.innerHTML = tweets[randomIndex];
//     twttr.widgets.load();
//   }
//   generateRandomTweet(); // generate a random tweet on page load

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
