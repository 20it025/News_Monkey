import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
articles = [
  {
  "source": {
  "id": "reuters",
  "name": "Reuters"
  },
  "author": null,
  "title": "Taiwan August exports seen up for 26th straight month - Reuters.com",
  "description": "Taiwan's exports likely rose for the 26th straight month in August although at a slower pace than in July, amid fears of a global recession, uncertainties due to the Ukraine conflict, and COVID-19 flare-ups in China, according to a Reuters poll.",
  "url": "https://www.reuters.com/markets/asia/taiwan-august-exports-seen-up-26th-straight-month-2022-09-02/",
  "urlToImage": "https://www.reuters.com/resizer/I5fKuRsyUxRWGEHoZWcO7EJ7vLY=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/WK63ERJNTZOFBKCDLDTRVG7HAM.jpg",
  "publishedAt": "2022-09-02T04:16:00Z",
  "content": "TAIPEI, Sept 2 (Reuters) - Taiwan's exports likely rose for the 26th straight month in August although at a slower pace than in July, amid fears of a global recession, uncertainties due to the Ukrain… [+1310 chars]"
  },
  {
  "source": {
  "id": null,
  "name": "The Guardian"
  },
  "author": "Phil Harrison and Alexi Duggins",
  "title": "Gutsy to Wedding Season: the seven best shows to stream this week",
  "description": "A former First Lady finds the funny side of being famous and female, while a nuptial nightmare adds murder to the usual long list of wedding party anxieties Continue reading...",
  "url": "https://amp.theguardian.com/tv-and-radio/2022/sep/02/gutsy-the-seven-best-shows-to-stream-this-week",
  "urlToImage": "https://i.guim.co.uk/img/media/533277e4dff4f0baba1158764c2676fb3ac27a1b/0_620_8280_4969/master/8280.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=66c141fb3054d233b79f2243fdef805d",
  "publishedAt": "2022-09-02T06:00:41Z",
  "content": "Pick of the week\r\nGutsy\r\nIn 2019, Hillary and Chelsea Clinton co-authored The Book of Gutsy Women. This eight-part series sees the mother and daughter bring their book to life, meeting women who, via… [+4550 chars]"
  },
  {
  "source": {
  "id": null,
  "name": "9to5Mac"
  },
  "author": "Filipe Espósito",
  "title": "Lenovo announces new AR glasses that work with iPhone ahead of Apple’s headset",
  "description": "We’ve been hearing a lot about Apple’s first mixed reality headset, which is expected to be introduced sometime next year. But while that day doesn’t come, Lenovo has announced its newest AR glasses “T1” which, surprisingly, work with iPhone, iPad, and even M…",
  "url": "https://9to5mac.com/2022/09/01/lenovo-ar-t1-glasses-work-with-iphone/",
  "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/09/Lenovo-Glasses-T1-AR.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
  "publishedAt": "2022-09-02T00:10:00Z",
  "content": "We’ve been hearing a lot about Apple’s first mixed reality headset, which is expected to be introduced sometime next year. But while that day doesn’t come, Lenovo has announced its newest AR glasses … [+2431 chars]"
  },
  {
  "source": {
  "id": null,
  "name": "9to5Mac"
  },
  "author": "Filipe Espósito",
  "title": "Doppler HiFi player for Mac now lets users import library from Music app",
  "description": "Doppler has become a popular app among users who prefer to have their own music library with HiFi audio support. The Mac version of the app was updated on Thursday with an important new feature that lets users import their music library from the Music app or …",
  "url": "https://9to5mac.com/2022/09/01/doppler-hifi-music-player-mac-import-library/",
  "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/09/Doppler-for-Mac-2.1-update-HiFi-music.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
  "publishedAt": "2022-09-02T00:52:56Z",
  "content": "Doppler has become a popular app among users who prefer to have their own music library with HiFi audio support. The Mac version of the app was updated on Thursday with an important new feature that … [+1907 chars]"
  },
  {
  "source": {
  "id": null,
  "name": "AppleInsider"
  },
  "author": "news@appleinsider.com (Christine McKee)",
  "title": "Deals: save up to $1,000 on LG OLED UltraFine monitors",
  "description": "These exclusive deals deliver the cheapest prices available on LG UltraFine OLED displays in your choice of 27-inch and 32-inch sizes.Exclusive LG UltraFine savings\r\nSave up to $1,000 instantly* with promo code APINSIDER and the pricing links below (you must …",
  "url": "https://appleinsider.com/articles/22/09/02/deals-save-up-to-1000-on-lg-oled-ultrafine-monitors",
  "urlToImage": "https://photos5.appleinsider.com/gallery/50189-98545-lg-oled-ultrafine-display-deals-xl.jpg",
  "publishedAt": "2022-09-02T01:17:11Z",
  "content": "AppleInsider is supported by its audience and may earn commission as an Amazon Associate and affiliate partner on qualifying purchases. These affiliate partnerships do not influence our editorial con… [+1627 chars]"
  },
  {
  "source": {
  "id": null,
  "name": "Gizmodo.jp"
  },
  "author": "小暮ひさのり",
  "title": "今のiPhone何年使った？ 今年どうしても買い替えたい僕の言い分を聞いてくれ！",
  "description": "僕の愛機、「iPhone 12 Pro Max」。毎年新モデルに乗り換えていたんですが、昨年は初めてのiPhoneを買わない年でした。まぁ、「コロナ禍で外出する機会も減ったから、毎年買い換えなくていいかな！」って強気のジャッジ。\n\nでも、2年サイクルってメジャーですし、僕みたいな人も多いはず。でも、さすがに2年使い続けると、気に入っているところもそうでないところも目立って来ません？",
  "url": "https://www.gizmodo.jp/2022/09/iphone-kaikaetai.html",
  "urlToImage": "https://assets.media-platform.com/gizmodo/dist/images/2022/09/01/2022-09-01ipkk00-w960.jpg",
  "publishedAt": "2022-09-02T03:00:00Z",
  "content": "iPhone 12 Pro MaxiPhone\r\n22\r\n2iPhone\r\nPhoto: \r\niPhone 12 Pro MaxiPhone\r\n2YouTube1\r\n2\r\nPhoto: \r\n2\r\nPhoto: \r\n2iPhone\r\n2\r\niPhone 12 Pro MaxiPhone 13 Pro120HzProMotion13 Pro\r\n1\r\n2iPhone\r\n 1\r\n2\r\niPhone 14… [+143 chars]"
  },
  {
  "source": {
  "id": null,
  "name": "Lifehacker.jp"
  },
  "author": "ガリレオ",
  "title": "iPhoneでSafari機能拡張を使う方法",
  "description": "Image:MakeUseOfライフハッカー［日本版］2021年10月1日掲載の記事より転載。記事中の情報は掲載時点でのものです。iOS15のアップデートで、Appleは、iPhone標準ブラウザであるSafariにいくつかの大きな変更を加えました。期待に応えてビジュアルがガラリと変わっただけでなく、いくつかの重要な機能も新たに追加されています。Macユーザーなら、恐らくもうSafariの機能拡張",
  "url": "https://www.lifehacker.jp/article/243106how-to-install-safari-extensions-ios/",
  "urlToImage": "https://assets.media-platform.com/gizmodo/dist/images/2022/09/01/1-3-w960.jpg",
  "publishedAt": "2022-09-02T05:30:00Z",
  "content": "2021101\r\niOS 15AppleiPhoneSafari\r\nMacSafariiPhoneiPad\r\nSafari\r\nApple\r\niOS 15iPhoneSafari\r\nSafari\r\nSafariiPhone\r\nSafari\r\niPhoneSafari\r\nAppleiOS 15SafariiPhoneiPad\r\nMacSafari\r\nImage: MakeUseOf\r\n4. \r\n5.… [+342 chars]"
  },
  {
  "source": {
  "id": null,
  "name": "Journal du geek"
  },
  "author": "Thomas Estimbre",
  "title": "Huawei MateBook X Pro 2022 : l’ultrabook gagne en puissance (et pas que)",
  "description": "Produit phare de Huawei, le MateBook X Pro revient dans une nouvelle version plus puissante. L’ultrabook gagne au passage un tout nouveau châssis… et une couleur bleue.\nHuawei MateBook X Pro 2022 : l’ultrabook gagne en puissance (et pas que)",
  "url": "https://www.journaldugeek.com/2022/09/02/huawei-matebook-x-pro-2022-lultrabook-gagne-en-puissance-et-pas-que/",
  "urlToImage": "https://www.journaldugeek.com/content/uploads/2022/09/huawei-matebook-x-pro-2022-logo.jpg",
  "publishedAt": "2022-09-02T06:15:06Z",
  "content": "Produit phare de Huawei, le MateBook X Pro revient dans une nouvelle version plus puissante. Lultrabook gagne au passage un tout nouveau châssis et une couleur bleue.Huawei renouvelle (déjà) son Mate… [+2565 chars]"
  },
  {
  "source": {
  "id": null,
  "name": "Applesfera.com"
  },
  "author": "Jesús Quesada",
  "title": "Apple Watch con rebaja a precio mínimo histórico, MacBook Air M2 con 200 euros de descuento y más: Cazando Gangas",
  "description": "Ya es septiembre. Para la mayoría se han terminado las vacaciones de verano y hay que volver a la rutina, ya sea en el trabajo o en la vuelta al cole. Si necesitas algún dispositivo de Apple para afrontarla mejor, te traemos las mejores ofertas de iPhone, iPa…",
  "url": "https://www.applesfera.com/general/apple-watch-rebaja-a-precio-minimo-historico-macbook-air-m2-200-euros-descuento-cazando-gangas",
  "urlToImage": "https://i.blogs.es/e7308d/cazando-gangas/840_560.jpg",
  "publishedAt": "2022-09-02T06:01:10Z",
  "content": "Ya es septiembre. Para la mayoría se han terminado las vacaciones de verano y hay que volver a la rutina, ya sea en el trabajo o en la vuelta al cole. Si necesitas algún dispositivo de Apple para afr… [+5221 chars]"
  },
  {
  "source": {
  "id": null,
  "name": "Applesfera.com"
  },
  "author": "David Bernal Raspall",
  "title": "Cómo pasar los mensajes y chats de WhatsApp de Android al iPhone",
  "description": "Cuando estrenamos un iPhone viniendo de Android, una de las primeras cosas en las que pensamos es en pasar toda la información de nuestro antiguo teléfono al nuevo. Y esto incluye pasar los mensajes y chats de WhatsApp. Algo que podemos hacer muy fácilmente.\n…",
  "url": "https://www.applesfera.com/tutoriales/como-pasar-mensajes-chats-whatsapp-android-al-iphone",
  "urlToImage": "https://i.blogs.es/3f4713/hero/840_560.jpeg",
  "publishedAt": "2022-09-02T07:10:15Z",
  "content": "Cuando estrenamos un iPhone viniendo de Android, una de las primeras cosas en las que pensamos es en pasar toda la información de nuestro antiguo teléfono al nuevo. Y esto incluye pasar los mensajes … [+2377 chars]"
  },
  {
  "source": {
  "id": null,
  "name": "Presse-citron"
  },
  "author": "Setra",
  "title": "iPhone 14 Pro : ces 2 petites modifications qui pourraient changer la donne",
  "description": "Apple aurait trouvé un moyen de rendre la façade de l’iPhone 14 Pro plus esthétique.",
  "url": "https://www.presse-citron.net/iphone-14-pro-ces-2-petites-modifications-qui-pourraient-changer-la-donne/",
  "urlToImage": "https://www.presse-citron.net/app/uploads/2021/09/iphone-13-pro-encoche.jpg",
  "publishedAt": "2022-09-02T06:00:30Z",
  "content": "Dans quelques jours, Apple présentera enfin les prochains iPhone. Normalement, il devrait y avoir 4 nouveaux modèles : liPhone 14, liPhone 14 Max, liPhone 14 Pro et liPhone 14 Pro Max.\r\nEt les deux m… [+3808 chars]"
  },
  {
  "source": {
  "id": null,
  "name": "HYPEBEAST"
  },
  "author": "info@hypebeast.com (HYPEBEAST), HYPEBEAST",
  "title": "Kali Uchis Doesn't Believe in The Rules of Love in New Single \"NO HAY LEY\"",
  "description": "Kali Uchis has dropped off her latest single, \"NO HAY LEY.\"Clocking in at just a little over two-and-a-half minutes, the track features production work from Ovy On The Drums, El Guincho, Jam City and Uchis herself, and is an ode to love that has no boundaries…",
  "url": "https://hypebeast.com/2022/9/kali-uchis-no-hay-ley-single-stream",
  "urlToImage": "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2022%2F09%2Fkali-uchis-no-hay-ley-single-stream-tw.jpg?w=960&cbr=1&q=90&fit=max",
  "publishedAt": "2022-09-02T04:07:43Z",
  "content": "Kali Uchis has dropped off her latest single, “NO HAY LEY.”\r\nClocking in at just a little over two-and-a-half minutes, the track features production work from Ovy On The Drums, El Guincho, Jam City a… [+801 chars]"
  },
  {
  "source": {
  "id": null,
  "name": "HYPEBEAST"
  },
  "author": "info@hypebeast.com (HYPEBEAST), HYPEBEAST",
  "title": "Pi'erre Bourne Debuts New Album 'Good Movie'",
  "description": "Pi'erre Bourne has delivered his latest solo album, Good Movie.Clocking in at approximately an hour and 10 minutes, the 23-track record features only two guest appearances from Don Toliver on the track \"Psane\" and Young Nudy on \"Moving Too Fast.\" Good Movie m…",
  "url": "https://hypebeast.com/2022/9/pierre-bourne-good-movie-album-stream",
  "urlToImage": "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2022%2F09%2Fpierre-bourne-good-movie-album-stream-tw.jpg?w=960&cbr=1&q=90&fit=max",
  "publishedAt": "2022-09-02T07:25:16Z",
  "content": "Clocking in at approximately an hour and 10 minutes, the 23-track record features only two guest appearances from Don Toliver on the track “Psane” and Young Nudy on “Moving Too Fast.” Good Movie mark… [+2567 chars]"
  },
  {
  "source": {
  "id": null,
  "name": "iMore"
  },
  "author": "heyimjoew@icloud.com (Joe Wituschek)",
  "title": "Apple Card doubles its Daily Cash at Nike for a limited time",
  "description": "Apple Card users can get six percent Daily Cash when making purchases using Apple Pay at Nike through October 15.",
  "url": "https://www.imore.com/apple/apple-card-doubles-its-daily-cash-at-nike-for-a-limited-time",
  "urlToImage": "https://cdn.mos.cms.futurecdn.net/45rmVGKgifnmSpkPjWEkXG-1200-80.jpg",
  "publishedAt": "2022-09-02T00:29:07Z",
  "content": "Apple has announced one of the best Daily Cash offers for Apple Card users we've seen yet.\r\nIn an email to Apple Card users, the company announced that cardholders can grab double the Daily Cash they… [+1661 chars]"
  },
  {
  "source": {
  "id": null,
  "name": "iMore"
  },
  "author": "heyimjoew@icloud.com (Joe Wituschek)",
  "title": "A ton of iPods are about to go on Apple's obsolete list",
  "description": "Apple has circulated a memo to authorized service providers announcing a number of iPod models are being moved to the company's list of obsolete devices.",
  "url": "https://www.imore.com/iphone/a-ton-of-ipods-are-about-to-go-on-apples-obsolete-list",
  "urlToImage": "https://cdn.mos.cms.futurecdn.net/mkGjKprwUj7neoQLBd8yY-1200-80.png",
  "publishedAt": "2022-09-02T00:08:22Z",
  "content": "A few more iPods are about to go the way of the dinosaur.\r\nAccording to a memo obtained by MacRumors, Apple is alerting authorized service providers that it is planning to add a number of iPod models… [+1633 chars]"
  },
  {
  "source": {
  "id": null,
  "name": "iMore"
  },
  "author": "heyimjoew@icloud.com (Joe Wituschek)",
  "title": "2022 iPad Pro shows up in retailer's inventory system",
  "description": "Australian wireless carrier Optus has already added 2022 iPad Pro models into its inventory system.",
  "url": "https://www.imore.com/ipad/2022-ipad-pro-shows-up-in-retailers-inventory-system",
  "urlToImage": "https://cdn.mos.cms.futurecdn.net/SH3iFkv4vM8beaNrQcigPm-1200-80.jpg",
  "publishedAt": "2022-09-02T00:51:14Z",
  "content": "We're at least a month away from Apple announcing the next generation of the iPad Pro, but that isn't stopping at least one retailer in the world from accidentally selling one to a customer.\r\nAs repo… [+1881 chars]"
  },
  {
  "source": {
  "id": null,
  "name": "tagesschau.de"
  },
  "author": "tagesschau",
  "title": "Serienstart: Mit \"Ringe der Macht\" zurück nach Mittelerde",
  "description": "Es ist das nächste spektakuläre Mammutprojekt eines Streamingdienstes: \"Der Herr der Ringe: Die Ringe der Macht\" läuft seit heute bei Amazon Prime. Eine Milliarde US-Dollar sollen die fünf Staffeln Amazon kosten. <em>Von Katharina Wilhelm.</em>",
  "url": "https://www.tagesschau.de/kultur/ringedermacht-101.html",
  "urlToImage": "https://www.tagesschau.de/multimedia/bilder/ringedermacht-105~_v-original.jpg",
  "publishedAt": "2022-09-02T06:17:10Z",
  "content": "Es ist das nächste spektakuläre Mammutprojekt eines Streamingdienstes: \"Der Herr der Ringe: Die Ringe der Macht\" läuft seit heute bei Amazon Prime. Eine Milliarde US-Dollar sollen die fünf Staffeln A… [+3964 chars]"
  },
  {
  "source": {
  "id": null,
  "name": "Sports Illustrated"
  },
  "author": "Wilton Jackson",
  "title": "Report: Knicks Made RJ Barrett-Centric Donovan Mitchell Offer in July",
  "description": "New York reportedly put together a significant initial offer in its pursuit of the three-time NBA All-Star.",
  "url": "https://www.si.com/nba/2022/09/02/knicks-made-rj-barrett-centric-donovan-mitchell-offer-in-july-per-report",
  "urlToImage": "https://www.si.com/.image/t_share/MTkyMDM2NTg0OTg2NTE4OTgz/donovan-mitchell-knicks.jpg",
  "publishedAt": "2022-09-02T02:46:57Z",
  "content": "From the moment Jazz general manager Justin Zanik refuted his statement that Donovan Mitchell was untouchable in a potential trade in July, discussions surrounding the Knicks’ interest in putting tog… [+2372 chars]"
  },
  {
  "source": {
  "id": null,
  "name": "Cnbeta.com"
  },
  "author": "raymon725",
  "title": "美国警方被曝利用Fog Reveal收集的应用数据展开大规模监视",
  "description": "Apple Insider 报道称：全美各地的警察，一直在使用从数千款应用程序中挑选出来的数据对嫌疑人展开监视，且通常未事先取得搜查令。据悉，这款名叫“Fog Reveal”的工具，汇集了来自星巴克和 Waze 等应用程序的广告识别码。它由 Fog Data Science LLC 出售，可根据个人的地理位置信息和兴趣爱好而投放有针对性的广告。 阅读全文",
  "url": "https://www.cnbeta.com/articles/tech/1311597.htm",
  "urlToImage": "https://static.cnbetacdn.com/article/2022/0902/76614e99c376c5b.jpg",
  "publishedAt": "2022-09-02T03:12:06Z",
  "content": "via Apple Insider\r\n Fog Reveal \r\nFog Data Science ·W· 2.5 \r\n 7500 \r\nFog Data Science Cenntel, Inc. \r\n Fog Reveal ID 180 \r\n Fog 2017 6 \r\nFog \r\nEFF\r\n Carpenter v. United States \r\nFog \r\nMegan Adams \r\n F… [+54 chars]"
  },
  {
  "source": {
  "id": null,
  "name": "Ifanr.com"
  },
  "author": "何, 嘉昕",
  "title": "早报｜iPhone 14 涨价或低于预期/有妖气漫画关停/国产《三体》9 月播出",
  "description": "· DALL-E 的新功能可以实现画外拓展\n· 为什么「互联网没有记忆」？#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。\n爱范儿 |\n原文链接 ·\n查看评论 ·\n新浪微博",
  "url": "https://www.ifanr.com/1509945",
  "urlToImage": "https://s3.ifanr.com/wp-content/uploads/2022/09/0812.020.jpeg",
  "publishedAt": "2022-09-02T00:29:33Z",
  "content": "<ul><li>iPhone 14 </li><li></li><li></li><li></li><li></li><li>Facebook Instagram </li><li>DALL-E </li><li></li><li>Apple Watch </li><li> iPad Hybrid OLED </li><li> Xperia 5 IV </li><li></li><li>B&am… [+1068 chars]"
  },
  {
  "source": {
  "id": null,
  "name": "Cnbeta.com"
  },
  "author": "teikaei",
  "title": "苹果与开发商者就App Store拒收和诈骗案达成诉讼和解",
  "description": "一名应用开发者关于App Store拒绝、诈骗和欺诈的诉讼以和解协议告终，此前法庭文件显示，今年夏天早些时候曾要求驳回该诉讼。原告、应用开发人员和前Pinterest工程师Kosta Eleftheriou在最近几个月里为自己赢得了名声并强调一些最令人震惊的App Store骗局。 阅读全文",
  "url": "https://www.cnbeta.com/articles/tech/1311505.htm",
  "urlToImage": "https://static.cnbetacdn.com/thumb/article/2022/0609/8e556b863210818.jpg",
  "publishedAt": "2022-09-02T00:23:40Z",
  "content": "20213App Store\r\nApp StoreApple Pay--Epic Games--App StoreEleftheriou\r\nApp StoreFlickType Apple WatchFlickTypeApp StoreFlickTypeRedditNanoTwitterChirpWhatsAppWatchChatInstagramLens\r\nApp StoreApp Store… [+324 chars]"
  },
  {
  "source": {
  "id": null,
  "name": "Touchlab.jp"
  },
  "author": "Nakimo",
  "title": "【最大20%OFF】SwitchBot製品が「スマートホーム 秋のセール特集」で値下げ中",
  "description": "Amazonの「スマートホーム 秋のセール特集」で、対象のSwitchbot製品が最大20%OFFで販売されています。 SwitchBotシリーズは、「Hub(ハブ)」を経由して家電製品やカーテンなどをコントロールするこ […]\nThe post 【最大20%OFF】SwitchBot製品が「スマートホーム 秋のセール特集」で値下げ中 first appeared on Touch Lab - タッチ ラボ.©2019 \"Touch Lab - タッチ ラボ\".",
  "url": "http://touchlab.jp/2022/09/amazon_swtichbot_smarthome_2022sept2/",
  "urlToImage": "http://touchlab.jp/wp-content/uploads/2022/09/switchbot_amazon_fall_2022sept2_0.jpg",
  "publishedAt": "2022-09-02T01:54:43Z",
  "content": "Amazonの「スマートホーム 秋のセール特集」で、対象のSwitchbot製品が最大20%OFFで販売されています。\nSwitchBotシリーズは、「Hub(ハブ)」を経由して家電製品やカーテンなどをコントロールすることができる製品です。\nSiri・Googleアシスタント・Alexaに対応し、音声による操作ができるほか、IFTTT(イフト)で他のサービスと連携してネット経由でコントロールする… [+7416 chars]"
  },
  {
  "source": {
  "id": null,
  "name": "GSMArena.com"
  },
  "author": "Enrique",
  "title": "Samsung takes a dig at Apple’s upcoming launch in latest ad",
  "description": "Next week, Apple will announce its next lineup of the iPhone 14 and Samsung is ready with an ad to tease prospective iPhone 14 buyers with what they are missing by not having a Samsung device.\n\n\n\nThe ad, titled “Buckle Up” only showcases the Samsung Galaxy Z …",
  "url": "https://www.gsmarena.com/samsung_pokes_at_apples_upcoming_launch_in_latest_ad-news-55622.php",
  "urlToImage": "https://fdn.gsmarena.com/imgroot/news/22/09/samsung-releases-ad-to-poke-fun-at-apple/-952x498w6/gsmarena_000.jpg",
  "publishedAt": "2022-09-02T06:45:01Z",
  "content": "Next week, Apple will announce its next lineup of the iPhone 14 and Samsung is ready with an ad to tease prospective iPhone 14 buyers with what they are missing by not having a Samsung device.\r\nThe a… [+540 chars]"
  },
  {
  "source": {
  "id": null,
  "name": "GSMArena.com"
  },
  "author": "Enrique",
  "title": "Google shifts production of Pixels to Vietnam, production of 2023 foldable may stay in China",
  "description": "In a new report from The New York Times, we get a look at some major tech companies and how their manufacturing of the world’s most popular tech is shifting from China to Vietnam. Google, Apple, and Microsoft are mentioned throughout the report so let’s start…",
  "url": "https://www.gsmarena.com/google_shifts_production_of_pixels_to_vietnam_production_of_2023_foldable_may_stay_in_china-news-55621.php",
  "urlToImage": "https://fdn.gsmarena.com/imgroot/news/22/09/google-apple-shift-production-to-vietnam/-952x498w6/gsmarena_000.jpg",
  "publishedAt": "2022-09-02T03:45:01Z",
  "content": "In a new report from The New York Times, we get a look at some major tech companies and how their manufacturing of the worlds most popular tech is shifting from China to Vietnam. Google, Apple, and M… [+1796 chars]"
  },
  {
  "source": {
  "id": null,
  "name": "Marketingdirecto.com"
  },
  "author": "Berta Jiménez",
  "title": "Los iPhone 14 están a punto de desembarcar: 5 características de los nuevos modelos",
  "description": "A menos de una semana de la próxima keynote de Apple, repasamos algunos de los detalles de los nuevos (y esperados) modelos de iPhone 14. \nLa entrada Los iPhone 14 están a punto de desembarcar: 5 características de los nuevos modelos se publicó primero en Mar…",
  "url": "https://www.marketingdirecto.com/digital-general/mobile-marketing/nuevos-iphone-14-caracteristicas",
  "urlToImage": "https://www.marketingdirecto.com/wp-content/uploads/2022/09/apple.jpg",
  "publishedAt": "2022-09-02T06:20:00Z",
  "content": "A menos de una semana de la próxima keynote de Apple, repasamos algunos de los detalles de los nuevos (y esperados) modelos de iPhone 14. Tim Cook, el CEO de Apple, presentará las novedades el iPhone… [+2969 chars]"
  },
  {
  "source": {
  "id": null,
  "name": "Impress.co.jp"
  },
  "author": null,
  "title": "iPhone買うなら料金プランも見直そう！　「povo2.0」でライフスタイルにあわせた通信プランを作成できる[Sponsored]",
  "description": "9月は、例年どおりならApple（アップル）からiPhoneシリーズの最新モデルが発表される時期。新型iPhoneの発売を機に、買い替えを検討するユーザーも多いはず。",
  "url": "https://k-tai.watch.impress.co.jp/docs/topic/special/1433145.html",
  "urlToImage": "https://k-tai.watch.impress.co.jp/img/ktw/list/1433/145/01.jpg",
  "publishedAt": "2022-09-02T00:00:00Z",
  "content": "povo2.01GB7/390/3GB30/990/20GB30/2700/60GB90/6490/150GB180/12980/24/330/6 \r\n 600020GB30/270039600 iPhone \r\n 3GB45005000povo2.03GB30/990 4 \r\n 20GB20GB30/2700 57600 \r\n 20GB25GB60GB90/6490150GB180/12980… [+111 chars]"
  },
  {
  "source": {
  "id": null,
  "name": "Clubic"
  },
  "author": "/auteur/407247-merouan-goumiri.html",
  "title": "Alors qu'il n'est pas encore sorti, des clones d'iPhone 14 Pro se vendent déjà en Chine",
  "description": "À l’approche de la Keynote d’Apple qui se déroulera le 7 septembre prochain, voilà que l’iPhone 14 Pro semble être tombé entre les mains de certains utilisateurs. Enfin, pas exactement…",
  "url": "https://www.clubic.com/pro/entreprises/apple/actualite-435951-alors-qu-il-n-est-pas-encore-sorti-des-clones-d-iphone-14-pro-se-vendent-deja-en-chine.html",
  "urlToImage": "https://pic.clubic.com/v1/images/2011386/raw",
  "publishedAt": "2022-09-02T06:45:00Z",
  "content": "À lapproche de la Keynote dApple qui se déroulera le 7 septembre prochain, voilà que liPhone 14 Pro semble être tombé entre les mains de certains utilisateurs. Enfin, pas exactement\r\nLa semaine derni… [+1877 chars]"
  },
  {
  "source": {
  "id": null,
  "name": "Appbank.net"
  },
  "author": "岩佐",
  "title": "サムスンがApple「iPhone 14」を公式動画で痛烈批判",
  "description": "「iPhnoe 14」が発表されるとみられる9月7日のAppleイベント「Far Out」を前にして、ライバルであるサムスンが同モデルを煽るCMを公開しました。 *Category：テクノロジー Technology｜* […]",
  "url": "https://www.appbank.net/2022/09/02/technology/2289588.php",
  "urlToImage": "https://www.appbank.net/wp-content/uploads/2022/09/2022-0902-iPhone-14-thumb-1.jpeg",
  "publishedAt": "2022-09-02T02:48:57Z",
  "content": "iPhnoe 1497AppleFar OutCM\r\n*Category\r\n Technology*SourceAppleinsider ,@mingchikuo ,Samsung US ,@mingchikuo\r\nCMGalaxy S22 UltraZ Flip4iPhone\r\n1001800\r\niPhone 14iPhone 14 Pro4800\r\nThe main reason for t… [+406 chars]"
  },
  {
  "source": {
  "id": null,
  "name": "ESPN"
  },
  "author": "NBA Insiders",
  "title": "What's going on in Utah? Breaking down the Donovan Mitchell deal",
  "description": "Will a Donovan Mitchell and Darius Garland backcourt take the Cavs to the next level? What's next for the Jazz? Our NBA insiders break down the Mitchell deal.",
  "url": "https://www.espn.com/nba/story/_/id/34503137/nba-5-5-does-trade-donovan-mitchell-make-cleveland-cavaliers-contenders-east",
  "urlToImage": "https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F0330%2Fr992982_1296x729_16%2D9.jpg",
  "publishedAt": "2022-09-02T00:23:35Z",
  "content": "What is going on in Utah? Two months to the day after the Utah Jazz sent three-time Defensive Player of the Year Rudy Gobert to the Minnesota Timberwolves, his former teammate Donovan Mitchell is on … [+10579 chars]"
  },
  {
  "source": {
  "id": null,
  "name": "DIE WELT"
  },
  "author": "Wim Orth",
  "title": "Billionen-Forderung aus Polen – Muss Deutschland nochmal für den Krieg zahlen?",
  "description": "77 Jahre nach Kriegsende fordert Polen neue Reparationen von Deutschland. Berlin sieht sämtliche Ansprüche hingegen als abgegolten. So oder so: Der Vorstoß ist Gift für das Verhältnis der Länder. Was die polnische Regierung mit dem Manöver bezweckt, analysier…",
  "url": "https://www.welt.de/podcasts/kick-off/article240817497/Billionen-Forderung-aus-Polen-Muss-Deutschland-nochmal-fuer-den-Krieg-zahlen-Podcast.html",
  "urlToImage": "https://img.welt.de/img/podcasts/kick-off/mobile240069467/8251352877-ci16x9-w1200/DWO-Podcast-Teaser-KickOffPolitik-Wim-1.jpg",
  "publishedAt": "2022-09-02T03:00:57Z",
  "content": "Abonnieren Sie den Podcast unter anderem bei Spotify, Apple Podcasts, Amazon Music oder direkt per RSS-Feed.\r\nUkraine-Krieg, Ampelregierung und Corona jeden Morgen gibt es neue Schlagzeilen. Im tägli… [+776 chars]"
  },
  {
  "source": {
  "id": null,
  "name": "DIE WELT"
  },
  "author": "WELT",
  "title": "Vollständiger Verzicht auf russisches Gas wäre „nicht so verantwortlich“",
  "description": "Deutschland ist laut Olaf Scholz gut für den Winter gewappnet. Selbst wenn aus Russland kein Gas mehr käme, sei man vorbereitet. Einen vollständigen Verzicht lehnt der Kanzler ab. Zur Entlastung stellt er eine weiter gesenkte Mehrwertsteuer in der Gastronomie…",
  "url": "https://www.welt.de/politik/deutschland/article240817301/Olaf-Scholz-Ganz-auf-russisches-Gas-zu-verzichten-waere-nicht-so-verantwortlich.html",
  "urlToImage": "https://img.welt.de/img/politik/deutschland/mobile240817297/9661359827-ci16x9-w1200/GERMANY-POLITICS-GOVERNMENT-SOCIAL.jpg",
  "publishedAt": "2022-09-02T07:45:00Z",
  "content": "Bundeskanzler Olaf Scholz will trotz des Ukraine-Kriegs und unzuverlässiger Lieferungen nicht vollständig auf russisches Gas verzichten. Das machen wir nicht von uns aus, das halte ich für nicht so v… [+2712 chars]"
  },
  {
  "source": {
  "id": null,
  "name": "DIE WELT"
  },
  "author": "Tobias Kaiser",
  "title": "Dieser Plan soll Europa vor dem Strompreis-Schock bewahren",
  "description": "Die EU-Kommission reagiert auf die explodierenden Strompreise und plant eine Deckelung. Zudem soll europaweit koordiniert Strom gespart und eine gezielte Unterstützung der Verbraucher eingeführt werden. In dem Papier, das WELT vorliegt, spielt die Übergewinns…",
  "url": "https://www.welt.de/wirtschaft/article240814245/Strompreis-Diese-Massnahmen-sollen-Europa-vor-dem-Schock-bewahren.html",
  "urlToImage": "https://img.welt.de/img/wirtschaft/mobile240814431/6921353867-ci16x9-w1200/Save-Gas-For-A-Safe-Winter.jpg",
  "publishedAt": "2022-09-02T07:10:00Z",
  "content": "Die Europäische Kommission setzt auf Stromsparen und einen Preisdeckel, um die Strompreise in der EU zu senken. Offenbar will sie auch hohe Übergewinne bei Stromerzeugern abschöpfen. Das geht aus ers… [+3483 chars]"
  },
  {
  "source": {
  "id": null,
  "name": "Gadgethacks.com"
  },
  "author": "Justin Meyers",
  "title": "This iPhone Setting Instantly Improves Video Quality When Shooting in Low Light",
  "description": "If you shoot videos with your iPhone in low-light situations, you may not always get the results you want. And that applies when recording video in 720p, 1080p, and even 4K resolutions. But there's an easy way to maximize your video's quality when filming in …",
  "url": "https://ios.gadgethacks.com/how-to/iphone-setting-instantly-improves-video-quality-when-shooting-low-light-0345671/",
  "urlToImage": "https://img.gadgethacks.com/img/65/43/63738962781437/0/iphone-setting-instantly-improves-video-quality-when-shooting-low-light.1280x600.jpg",
  "publishedAt": "2022-09-02T03:00:00Z",
  "content": "If you shoot videos with your iPhone in low-light situations, you may not always get the results you want. And that applies when recording video in 720p, 1080p, and even 4K resolutions. But there's a… [+3060 chars]"
  },
  {
  "source": {
  "id": "la-repubblica",
  "name": "La Repubblica"
  },
  "author": "repubblicawww@repubblica.it (Redazione Repubblica.it)",
  "title": "Suzuki S-Cross, settembre porta la variante Ibrida 1.5 140V",
  "description": "Una nuova motorizzazione per il brand giapponese, equipaggiata con un motore quattro cilindri aspirato",
  "url": "https://www.repubblica.it/motori/sezioni/prodotto/2022/09/02/news/suzuki_scross_settembre_porta_la_variante_ibrida_15_140v-363851163/",
  "urlToImage": "https://www.repstatic.it/content/nazionale/img/2022/09/02/065933053-59252aed-5ee7-43b1-b7bf-6859acbc00d5.jpg",
  "publishedAt": "2022-09-02T05:06:38Z",
  "content": "ROMA  - Il caldo non ferma Suzuki, con larrivo di una nuova motorizzazione ibrida sotto il cofano della S-Cross Hybrid. Si tratta della versione da 1.5 140V, equipaggiata con un motore quattro cilind… [+1418 chars]"
  },
  {
  "source": {
  "id": null,
  "name": "Techbang.com"
  },
  "author": "鄒弦憓",
  "title": "Apple Watch Pro即將全新亮相，預計帶來新的設計元素以及支援衛星通信功能",
  "description": "Apple Watch Pro 型號中，將使用平板顯示器，並配有金屬外殼，並只提供 47 mm 的尺寸。\n人們普遍預計，蘋果公司對 Apple Watch 8 系列的更新將包括一個新的 Apple Watch Pro 型號，新的傳言稱它將有一個平面螢幕和一個更新的外觀設計。\r\n\n眾多報導宣稱今年秋天會有新的 Apple Watch 型號出現， Apple Watch Pro 會加入 Apple Watch Series 8 的更新陣容。據信新的型號是 Apple Watch Pro ，預計將比其他型號更大、更堅固…",
  "url": "https://www.techbang.com/posts/99438-rumor-has-it-that-the-apple-watch-pro-will-bring-some-design",
  "urlToImage": "https://cdn1.techbang.com/system/excerpt_images/99438/original/882907fd24d058dc564c37695fa20f1d.jpg?1661763498",
  "publishedAt": "2022-09-02T02:30:00Z",
  "content": "Apple Watch 8 Apple Watch Pro \r\n Apple Watch Apple Watch Pro Apple Watch Series 8 Apple Watch Pro \r\nMacotakara Pro Apple Watch 7 % 1.99 \r\n Apple Watch Pro 8 Apple Watch Series 8 \r\n Pro 900 (28) S8 Ap… [+58 chars]"
  },
  {
  "source": {
  "id": null,
  "name": "Inside.com.tw"
  },
  "author": "Jocelyn",
  "title": "投身教育！Google 花費 2000 萬美元，協助美電腦科學教育普及化",
  "description": "Google 宣布將投入 2000 萬美元的資金，讓弱勢群體也能得到學習電腦科學的教育機會。",
  "url": "https://www.inside.com.tw/article/28805-google-computer-science-education-funding",
  "urlToImage": "https://inside-assets1.inside.com.tw/2022/9/76768cad-9aea-463e-843f-79ab7809dfa1.jpg?w=1200&h=630&fit=crop&q=80",
  "publishedAt": "2022-09-02T07:03:55Z",
  "content": "The Verge Google 2000 Computer Science 1100 \r\nGoogle CEO  ·Sundar Pichai\r\n Google Google 4-H 2017 Google 500 2015 Google Impact Challenge Hidden Genius Project \r\n 2024 20 Google \r\n CEO Jennifer Siran… [+224 chars]"
  },
  {
  "source": {
  "id": null,
  "name": "Numerama"
  },
  "author": "Bogdan Bodnar",
  "title": "Ce groupe de cyberespionnage mondial veut devenir le nouveau NSO (Pegasus)",
  "description": "Des documents ont fuité sur un forum de hacker présentant une offre d'infiltration de smartphone par l'entreprise Intellexa. Ce groupe de cyberespionnage composé de plusieurs entités, dont une Française, ambitionne de devenir le nouveau leader sur le marché. …",
  "url": "https://www.numerama.com/cyberguerre/1091992-ce-groupe-de-cyberespionnage-mondial-veut-devenir-le-nouveau-nso-pegasus.html",
  "urlToImage": "https://www.numerama.com/wp-content/uploads/2022/09/intellexa3.jpg",
  "publishedAt": "2022-09-02T06:11:00Z",
  "content": "Des documents ont fuité sur un forum de hacker présentant une offre d’infiltration de smartphone par l’entreprise Intellexa. Ce groupe de cyberespionnage composé de plusieurs entités, dont une França… [+3419 chars]"
  },
  {
  "source": {
  "id": null,
  "name": "Techinsider.ru"
  },
  "author": "Никита Шевцев",
  "title": "Как работает новая антивирусная система на компьютерах Apple Mac",
  "description": "Антивирусники на компьютерах Apple - лишняя и совершенно ненужная вещь. Все потому, что эти компьютеры имеют встроенную систему предотвращения заражения.",
  "url": "https://www.techinsider.ru/gadgets/1554147-kak-rabotaet-novaya-antivirusnaya-sistema-na-kompyuterah-apple-mac/",
  "urlToImage": "https://images.techinsider.ru/upload/img_cache/b70/b707945c5be9bdcb9d6e83c456311331_ce_720x480x0x0_cropped_720x377.jpg",
  "publishedAt": "2022-09-02T07:49:00Z",
  "content": "DubRobber, 15-35 , Mac   .    , ,  «»: subsystem == «com.apple.XProtectFramework.PluginAPI».    ,     macOS,  ,  .  Mac , ."
  },
  {
  "source": {
  "id": null,
  "name": "Cool3c.com"
  },
  "author": "Chevelle.fu",
  "title": "Sennheiser 推出全新單件式音響產品 AMBEO Soundbar Plus 與 AMBEO Sub ，預計 2023 年上市",
  "description": "Sennheiser 在公布其空間音訊技術 AMBEO 後，亦宣布進軍家庭劇院領域，推出 AMBEO Soundbar 單件式音響，今日 Sennheiser 再度公布 AMBEO 系列新成員 AMBEO Soundbar Plus 與 AMBEO Sub ，其中 AMBEO Soundbar Plus 不僅比 AMBEO Soundbar 小巧，更是全球首款 7.1.4 聲道單件式音響，也因應更小巧的 AMBEO Soundbar Plus 問世， AMBEO Soundbar 也更名為 AMBEO Sound…",
  "url": "https://www.cool3c.com/article/182102",
  "urlToImage": "https://sw.cool3c.com/user/29442/2022/45c7513b-8ae6-46f9-88cb-5a6815c0d088.jpg?auto=compress&fix=max&w=2560",
  "publishedAt": "2022-09-02T04:07:53Z",
  "content": "Sennheiser AMBEO AMBEO Soundbar Sennheiser AMBEO  AMBEO Soundbar Plus AMBEO Sub AMBEO Soundbar Plus  AMBEO Soundbar 7.1.4 AMBEO Soundbar Plus AMBEO Soundbar AMBEO Soundbar Max \r\nAMBEO Soundbar Plus A… [+465 chars]"
  },
  {
  "source": {
  "id": null,
  "name": "Olhardigital.com.br"
  },
  "author": "William Schendes",
  "title": "Dell e Logitech se juntam a lista de empresas que deixaram a Rússia",
  "description": "Com o início da invasão da Rússia no território ucraniano, diversas empresas consideraram o país como um ambiente hostil para se operar. Algumas companhias disseram que iriam interromper suas operações, outras anunciaram que encerrariam completamente as atuaç…",
  "url": "https://olhardigital.com.br/2022/09/01/pro/dell-logitech-empresas-sairam-da-russia/",
  "urlToImage": "https://img.olhardigital.com.br/wp-content/uploads/2022/08/shutterstock_1117278992.jpg",
  "publishedAt": "2022-09-02T02:00:00Z",
  "content": "Nesta semana a Dell informou que encerrou completamente suas operaÃ§Ãµes no territÃ³rio russo. No meio de agosto a empresa jÃ¡ tinha fechado seus escritÃ³rios. A Logitech anunciou que tambÃ©m encerra… [+2213 chars]"
  },
  {
  "source": {
  "id": null,
  "name": "Olhardigital.com.br"
  },
  "author": "Rodrigo Mozelli",
  "title": "Citroën C3: Confira novas versões e preços",
  "description": "A Citroën divulgou, na última terça-feira (30), os modelos e os respectivos preços do novo Citroën C3 no Brasil. A versão de entrada do hatchback é a 1.0 de até 75 cv e, a mais potente, 1.6 com até 120 cv. Já os valores vão de R$ 68 mil a R$ 97 mil. Leia mais…",
  "url": "https://olhardigital.com.br/2022/09/02/carros-e-tecnologia/citroen-c3-confira-novas-versoes-e-precos/",
  "urlToImage": "https://img.olhardigital.com.br/wp-content/uploads/2022/09/citroen-c3.jpg",
  "publishedAt": "2022-09-02T04:56:29Z",
  "content": "A CitroÃ«n divulgou, na Ãºltima terÃ§a-feira (30), os modelos e os respectivos preÃ§os do novo CitroÃ«n C3 no Brasil. A versÃ£o de entrada do hatchback Ã© a 1.0 de atÃ© 75 cv e, a mais potente, 1.6 c… [+4633 chars]"
  },
  {
  "source": {
  "id": null,
  "name": "Investor's Business Daily"
  },
  "author": "Investor's Business Daily",
  "title": "Market Gets Reprieve; The Key Metric In Friday's Jobs Report - Investor's Business Daily",
  "description": "<ol><li>Market Gets Reprieve; The Key Metric In Friday's Jobs Report  Investor's Business Daily\r\n</li><li>S&P 500 snaps four-session losing streak  Reuters\r\n</li><li>Stock futures fall slightly ahead of key August jobs report due Friday  CNBC\r\n</li><li>Wall S…",
  "url": "https://www.investors.com/market-trend/stock-market-today/dow-jones-futures-market-rally-gets-late-reprieve-the-key-metric-in-friday-jobs-report/",
  "urlToImage": "https://www.investors.com/wp-content/uploads/2016/07/stock-jobs-5-adobe.jpg",
  "publishedAt": "2022-09-02T02:17:00Z",
  "content": "Dow Jones futures were steady overnight, along with S&amp;P 500 futures and Nasdaq futures, with the August jobs report on tap. The stock market rally sold off again intraday Thursday, but rebounded … [+6989 chars]"
  },
  {
  "source": {
  "id": null,
  "name": "Tinhte.vn"
  },
  "author": "tieumitinhte@gmail.com (MinhTriND), MinhTriND",
  "title": "Cổng Lightning bước sang tuổi thứ 10: có vẻ đã đến lúc nghỉ ngơi!",
  "description": "Tháng 9/2012, Apple giới thiệu iPhone 5 với kích thước lớn hơn, mạnh mẽ hơn so với phiên bản tiền nhiệm. Nhưng có lẽ thay đổi mang tính cách mạng nhất đó chính là cách mà người dùng sạc thiết bị. Trên sân khấu giới thiệu sản phẩm…",
  "url": "https://tinhte.vn/thread/cong-lightning-buoc-sang-tuoi-thu-10-co-ve-da-den-luc-nghi-ngoi.3560500/",
  "urlToImage": "https://photo2.tinhte.vn/data/attachment-files/2022/09/6110270_cover-lightning.jpg",
  "publishedAt": "2022-09-02T01:03:09Z",
  "content": "V c bn, cng kt ni này có mt trên mi in thoi Android và ngày càng tr thành mt tiêu chun i vi hu ht các thit b in t khác t GoPro cho n máy chi game cm tay. Bn thân Apple cng ã s dng USB Type-C dành cho… [+1649 chars]"
  },
  {
  "source": {
  "id": null,
  "name": "Tinhte.vn"
  },
  "author": "khanh3kshop@hotmail.com (Knah), Knah",
  "title": "[IFA22] Sennheiser Ambeo Soundbar Plus và Ambeo Sub, thiết kế nhỏ gọn hơn, hỗ trợ Dolby Atmos, DTS:X",
  "description": "Sennheiser Ambeo Soundbar Plus là mẫu soundbar 7.1.4 cho khả năng tái hiện âm thanh vòng sống động đến người dùng. Sản phẩm có thể dễ dàng kết hợp Ambeo Sub thông qua kết nối không dây để mang lại trải nghiệm tốt nhất.",
  "url": "https://tinhte.vn/thread/ifa22-sennheiser-ambeo-soundbar-plus-va-ambeo-sub-thiet-ke-nho-gon-hon-ho-tro-dolby-atmos-dts-x.3560522/",
  "urlToImage": "https://photo2.tinhte.vn/data/attachment-files/2022/09/6110363_SE_Soundbar_Plus_Totale_Landscape_RGB__1_.0.jpg",
  "publishedAt": "2022-09-02T02:51:37Z",
  "content": "[IFA22] Sennheiser Ambeo Soundbar Plus và Ambeo Sub, thit k nh gn hn, h tr Dolby Atmos, DTS:X\r\nSennheiserAmbeo Soundbar Plus là mu soundbar 7.1.4 cho kh nng tái hin âm thanh vòng sng ng n ngi dùng. S… [+837 chars]"
  },
  {
  "source": {
  "id": null,
  "name": "Mobiltelefon.ru"
  },
  "author": null,
  "title": "Эта инновация не появится в iPhone 14: Samsung троллит Apple на видео - Mobiltelefon.Ru",
  "description": "<ol><li>Эта инновация не появится в iPhone 14: Samsung троллит Apple на видео  Mobiltelefon.Ru\r\n</li><li>Samsung троллит в новой рекламе iPhone 14 и Apple за отсутствие инноваций  iPhones.ru\r\n</li><li>Новые iPhone, Apple Watch и не только: чего ждать от презе…",
  "url": "https://mobiltelefon.ru/post_1662091614.html",
  "urlToImage": "https://mobiltelefon.ru/photo/september22/02/eta_innovacia_ne_poavitsa_v_iphone_14_samsung_trollit_apple_na_video_picture2_0_resize.JPG",
  "publishedAt": "2022-09-02T04:06:00Z",
  "content": ", Samsung , Apple: \" , \". , Apple iPhone 14. \", , \". Galaxy S22 Ultra 108- Space Zoom (100x) Galaxy Z Flip 4 -. Galaxy Z Fold 4 , Samsung Apple 2 iPhone.\r\n© . Mobiltelefon\r\n youtube.com"
  },
  {
  "source": {
  "id": null,
  "name": "Netafull.net"
  },
  "author": "コグレマサト",
  "title": "「iPhone 14 Pro」パンチホールの間にプライバシー表示を移動しカメラアプリのUIを刷新か",
  "description": "9to5Macが「iPhone 14 Pro」では画面上のパンチホールの間にプライバシー表示が移動し、カメラアプリのUIも刷新されるという情報を伝えています。What are the features of Apple&...\n投稿 「iPhone 14 Pro」パンチホールの間にプライバシー表示を移動しカメラアプリのUIを刷新か は ネタフル に最初に表示されました。",
  "url": "https://netafull.net/iphone-14/0119145.html",
  "urlToImage": "https://netafull.net/wp-content/uploads/2022/09/iphone-14-notch-camera-ui.jpg",
  "publishedAt": "2022-09-02T01:30:00Z",
  "content": "9to5MaciPhone 14 ProUIWhat are the features of Apple's iPhone 14 Pro display cutout?\r\nA source with knowledge of Apples plans tells 9to5Mac that the space between the two cutouts will be used to show… [+172 chars]"
  },
  {
  "source": {
  "id": null,
  "name": "3dnews.ru"
  },
  "author": null,
  "title": "Снижение спроса на чипы пока не сказывается на бизнесе Broadcom",
  "description": "Многие участники рынка полупроводниковых компонентов минувшим летом вынуждены были признать, что спрос на их продукцию в потребительском секторе снижается, а потому неизбежным будет и сокращение выручки. Руководство Broadcom в этом смысле пока само иронизируе…",
  "url": "https://3dnews.ru/1073400/snigenie-sprosa-na-chipi-poka-ne-skazivaetsya-na-biznese-broadcom",
  "urlToImage": "https://3dnews.ru/assets/external/illustrations/2022/09/02/1073400/broadcom_01.jpg",
  "publishedAt": "2022-09-02T04:15:00Z",
  "content": ", , . Broadcom , .\r\n: Broadcom\r\nBloomberg, Broadcom $8,9 , $8,72 . , (Hock Tan), , . , $31 , 50 . Broadcom , .\r\n 30 % , , . « », Broadcom Apple, , . Broadcom , , iPhone 13, . , Broadcom 31 , $8,46 , … [+37 chars]"
  },
  {
  "source": {
  "id": null,
  "name": "Sspai.com"
  },
  "author": "北鸮",
  "title": "具透 | 功能小更新，体验大升级：iOS 16 的新版专注模式有何变化",
  "description": "iOS 16 希望更多人学会善用专注模式，能在生活中少一些手机焦虑。查看全文",
  "url": "https://sspai.com/post/75499",
  "urlToImage": "https://cdn.sspai.com/article/ecd98221-af8d-df9b-df32-e5da15d1bbe0.jpg",
  "publishedAt": "2022-09-02T06:30:00Z",
  "content": "iPhone iOS 16 iOS 16 Focus Mode\r\n iOS 15 Apple Do Not Disturb\r\n app iMessage Apple \r\n iOS 16 iOS 16 \r\niOS 16 app \r\niOS 15 \r\n iOS 16 iOS 16 Apple Watch\r\nApp\r\niOS 15 \r\nSafari \r\nApple Focus Filter API a… [+55 chars]"
  },
  {
  "source": {
  "id": null,
  "name": "Sspai.com"
  },
  "author": "少数派编辑部",
  "title": "派早报：联想发布眼镜显示器、折叠屏笔记本电脑以及华硕折叠屏电脑等",
  "description": "USB4 ver2.0 标准正式公布，联发科成功完成 5G NTN 卫星手机实验室连线测试等查看全文",
  "url": "https://sspai.com/post/75497",
  "urlToImage": "article/f5b205b5-147c-c98d-ec8c-37ce165348a7.png",
  "publishedAt": "2022-09-02T01:00:51Z",
  "content": "9 1 IFA2022 Glasses T1 AR Micro OLED 1920*1080 60Hz 10000:1 USB-C 2022 \r\nIFA2022 ThinkPad X1 Fold 16.3 4:3 OLED 2560 x 2024SDR 400 HDR 600 100% DCI-P3 ThinkPad X1 Fold Gen 2 12 U 9W 32GB LPDDR5 1TB S… [+1085 chars]"
  },
  {
  "source": {
  "id": null,
  "name": "Telegraph.co.uk"
  },
  "author": "Christopher Hope, Louisa Wells",
  "title": "Chopper's Politics: How to be a successful Prime Minister",
  "description": "Matt Ridley joins Christopher Hope on the Telegraph's weekly political podcast to give some sage advice to the soon-to-be Tory leader and PM",
  "url": "https://www.telegraph.co.uk/politics/2022/09/02/choppers-politics-how-successful-prime-minister/",
  "urlToImage": "https://www.telegraph.co.uk/content/dam/politics/2022/08/31/TELEMMGLPICT000307304152_trans_NvBQzQNjv4Bqq26TX-rkvwwXA2f8oBGFwkZd6X9EDsON1MlQyu9Yxvg.jpeg?impolicy=logo-overlay",
  "publishedAt": "2022-09-02T06:00:00Z",
  "content": "Matt Ridley joins Christopher Hope ahead of Monday's leadership announcement to give his ten rules for the next Tory leader to live by, and, given the winter we have coming ahead, the Chopper's Polit… [+656 chars]"
  },
  {
  "source": {
  "id": null,
  "name": "Elespanol.com"
  },
  "author": "C�sar Rebolledo",
  "title": "FREE FIRE | Códigos de hoy viernes 2 de septiembre de 2022 - Recompensas gratis",
  "description": "<!--cache-->Estos son todos los códigos gratis de Garena Free Fire que podrás canjear hoy, viernes 2 de septiembre de 2022. Consigue recompensas como skins, diamantes y mucho más.<!--aa--->El éxito para móviles Android e iOS, Garena Free Fire, ha recibido nue…",
  "url": "https://vandal.elespanol.com/noticia/1350756227/free-fire-codigos-de-hoy-viernes-2-de-septiembre-de-2022-recompensas-gratis/",
  "urlToImage": "https://media.vandal.net/i/ivandal/1200x630/9-2022/2022928573862_1.jpg",
  "publishedAt": "2022-09-02T06:58:00Z",
  "content": "El xito para mviles Android e iOS, Garena Free Fire, ha recibido nuevos cdigos diarios para hoy viernes 2 de septiembre de 2022. Los jugadores pueden canjear estos cdigos para recibir recompensas var… [+2385 chars]"
  },
  {
  "source": {
  "id": null,
  "name": "Cool3c.com"
  },
  "author": "Chevelle.fu",
  "title": "因應數位學習教育的 Logitech For Education 三神器評測，將 iPad 化為小電腦與繪圖板",
  "description": "在新一代的教育改革當中，數位學習教育自然是目前教育型態轉型的重點，除了希藉借助數位技術與教育的結合縮減城鄉教育差距外，更由於 Covid-19 疫情影響，使遠距學習的需求提升，其中產品設計與系統成熟的 iPad 自然就成為重要的數位學習教育載體，羅技也看到以 iPad 為主體的數位教育周邊商機，在台灣嘖嘖平台推出 Logitech For Education 三款產品的限量活動，祭出超早鳥 63 折優惠，包括「Rugged Combo 3 iPad 鍵盤保護殼」、「Crayon iPad 數位筆」與「KEYS-T…",
  "url": "https://www.cool3c.com/article/182108",
  "urlToImage": "https://sw.cool3c.com/user/29442/2022/deb4045e-8e52-40ce-be42-d2e08146dbfc.jpg?auto=compress&fix=max&w=2560",
  "publishedAt": "2022-09-02T06:26:02Z",
  "content": "Covid-19 iPad iPad Logitech For Education 63 Rugged Combo 3 iPad Crayon iPad KEYS-TO-GO \r\nRugged Combo 3 iPad 4,690 Crayon iPad 2,290 KEYS-TO-GO 2,190 63 \r\n Rugged Combo 3 iPad Crayon iPad KEYS-TO-GO… [+623 chars]"
  },
  {
  "source": {
  "id": null,
  "name": "Seeking Alpha"
  },
  "author": null,
  "title": "Greenhaven Road Capital Q2 2022 Investor Letter",
  "description": "Greenhaven Road Capital Fund returned about -33% in Q2, bringing its total decline to ~-51% in 1H 2022. Click here to read the full fund letter.",
  "url": "https://seekingalpha.com/article/4538570-greenhaven-road-capital-q2-2022-investor-letter",
  "urlToImage": "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/1415078159/image_1415078159.jpg?io=getty-c-w750",
  "publishedAt": "2022-09-02T02:27:00Z",
  "content": "Editor's note: Seeking Alpha is proud to welcome Greenhaven Road Capital as a new contributor. It's easy to become a Seeking Alpha contributor and earn money for your best investment ideas. Active co… [+30752 chars]"
  },
  {
  "source": {
  "id": null,
  "name": "Macitynet.it"
  },
  "author": "Mauro Notarianni",
  "title": "Apple chiude con un accordo la causa con lo sviluppatore di FlickType",
  "description": "Lo sviluppatore Kosta Eleftheriou si è accordato con Apple nella causa che lo vedeva contrapposto alla Mela per l'app che mostra una tastiera virtuale su Apple Watch.\n- su macitynet.it Apple chiude con un accordo la causa con lo sviluppatore di FlickType",
  "url": "https://www.macitynet.it/apple-chiude-con-un-accordo-la-causa-con-lo-sviluppatore-di-flicktype/",
  "urlToImage": "https://www.macitynet.it/wp-content/uploads/2021/09/Apple-watch-series7-watchos-keyboard-09142021.jpg",
  "publishedAt": "2022-09-02T06:29:20Z",
  "content": "Lo sviluppatore Kosta Eleftheriou si è accordato con Apple nella causa che lo vedeva contrapposto alla Mela per presunte azioni che quest’ultima avrebbe intrapreso, ostacolando la distribuzione di un… [+1277 chars]"
  },
  {
  "source": {
  "id": null,
  "name": "Macitynet.it"
  },
  "author": "Mauro Notarianni",
  "title": "Lenovo T1 è un visore AR/VR che si collega a Mac e iPhone",
  "description": "Lenovo anticipa Apple presentando il visore Glasses T1 per realtà aumentata e virtuale che funziona anche con iPhone e Mac\n- su macitynet.it Lenovo T1 è un visore AR/VR che si collega a Mac e iPhone",
  "url": "https://www.macitynet.it/lenovo-t1-e-un-visore-ar-vr-che-si-collega-a-mac-e-iphone/",
  "urlToImage": "https://www.macitynet.it/wp-content/uploads/2022/09/VisoreLenovo.jpg",
  "publishedAt": "2022-09-02T06:59:01Z",
  "content": "Lenovo Glasses T1 è un visore AR/VR che è possibile collegare a moderni smartphone, tablet e laptop: iPhone e Mac inclusi; è un dispositivo leggero, con integrati speaker e una connessione USB-C, spe… [+2074 chars]"
  },
  {
  "source": {
  "id": null,
  "name": "Macitynet.it"
  },
  "author": "Mauro Notarianni",
  "title": "Samsung prova a mettere in ombra l’iPhone in un nuovo spot",
  "description": "Un nuovo spot di Samsung prova a mettere in ombra l'iPhone parlando di assenza di \"innovazioni\" ed evidenziando funzionalità negli ultimi prodotti dell'azienda sudcoreana.\n- su macitynet.it Samsung prova a mettere in ombra l’iPhone in un nuovo spot",
  "url": "https://www.macitynet.it/samsung-prova-a-mettere-in-ombra-liphone-in-un-nuovo-spot/",
  "urlToImage": "https://www.macitynet.it/wp-content/uploads/2022/09/spotSamsung.jpg",
  "publishedAt": "2022-09-02T05:29:39Z",
  "content": "Un nuovo spot di Samsung prova a mettere in ombra l’iPhone parlando di assenza di “innovazioni” promuovendo funzionalità quali la fotocamera da 108 megapixel e lo “Space Zoom” 100x degli ultimi dispo… [+1307 chars]"
  },
  {
  "source": {
  "id": null,
  "name": "Hwupgrade.it"
  },
  "author": null,
  "title": "Settembre manda in tilt Amazon: oltre 1000 di sconto su TV LG OLED, soundbar Samsung con sub 77, POCO M4 Pro a 199 e altri prezzi mai visti (aggiornamenti continui)",
  "description": "Super promozioni Amazon con sconti mai visti, come quelli sulle ottime soundbar Samsung, sui terminali POCO e senza parlare degli oltre 1000 Euro in meno per i nuovi TV LG OLED. Ma sono solo alcuni esempi, ecco tutte le offerte!",
  "url": "https://www.hwupgrade.it/news/multimedia/settembre-manda-in-tilt-amazon-oltre-1000-di-sconto-su-tv-lg-oled-soundbar-samsung-con-sub-77-poco-m4-pro-a-199-e-altri-prezzi-mai-visti-aggiornamenti-continui_109811.html",
  "urlToImage": "https://www.hwupgrade.it/i/n/amazon_money_720.jpg",
  "publishedAt": "2022-09-02T07:18:23Z",
  "content": "TOP: torna con uno sconto di quasi 400Apple MacBook Pro 16\" con chip Apple M1 Pro ( CPU 10-core e GPU 16‑core)\r\n16GB RAM, 1TB SSD!\r\nSconto di oltre 1.000 euro sulla nuovissima linea 2022 di televiso… [+4764 chars]"
  },
  {
  "source": {
  "id": null,
  "name": "Designtaxi.com"
  },
  "author": "Nicole Rodrigues",
  "title": "Lenovo Unveils An Extended Monitor For Your Face, In The Form Of Glasses",
  "description": "Image via Lenovo\n\n \nWhen one, two, or perhaps three monitors are not enough to handle your workload or your gaming setup, Lenovo is stepping in to chuck a screen right into your face.\n \nYes, that’s right. It’s worth pointing out that Lenovo’s entry into the a…",
  "url": "https://designtaxi.com/news/420228/Lenovo-Unveils-An-Extended-Monitor-For-Your-Face-In-The-Form-Of-Glasses/",
  "urlToImage": "https://editorial.designtaxi.com/images/lenovo-monitor-glasses-1662098224.jpeg",
  "publishedAt": "2022-09-02T07:08:50Z",
  "content": "Image via Lenovo\r\nWhen one, two, or perhaps three monitors are not enough to handle your workload or your gaming setup, Lenovo is stepping in to chuck a screen right into your face.\r\nYes, that’s righ… [+1608 chars]"
  },
  {
  "source": {
  "id": null,
  "name": "Sapo.pt"
  },
  "author": "Pedro Simões",
  "title": "O Android também vai permitir ligações por satélite e a Google já está a trabalhar nisso",
  "description": "O tema das ligações por satélite tem ganho uma relevância elevada nas últimas semanas. Com cada vez mais serviços destes acessíveis, é hora de garantir que a cobertura dos utilizadores é total e acessível...",
  "url": "https://pplware.sapo.pt/smartphones-tablets/android/o-android-tambem-vai-permitir-ligacoes-por-satelite-e-a-google-ja-esta-a-trabalhar-nisso/",
  "urlToImage": "https://pplware.sapo.pt/wp-content/uploads/2022/07/smartphone_android_2.jpg",
  "publishedAt": "2022-09-02T07:00:06Z",
  "content": "O tema das ligações por satélite tem ganho uma relevância elevada nas últimas semanas. Com cada vez mais serviços destes acessíveis, é hora de garantir que a cobertura dos utilizadores é total e aces… [+2511 chars]"
  },
  {
  "source": {
  "id": null,
  "name": "Macbidouille.com"
  },
  "author": "lionel@macbidouille.com (Lionel)",
  "title": "Samsung critique le manque d'évolutions de l'iPhone dans une publicité",
  "description": "Samsung a lancé un nouveau spot publicitaire pour ses smartphones S22 Ultra et Z Flip4.La campagne baptisée \"Buckle Up\" semble destinée aux possesseurs d'iPhone. Samsung y met en avant l'écran souple du Flip ainsi que l'appareil photo de 108 millions de pixel…",
  "url": "https://macbidouille.com/news/2022/09/02/samsung-critique-le-manque-devolutions-de-liphone-dans-une-publicite",
  "urlToImage": "http://macbidouille.com/img/touch/default-touch-icon.png",
  "publishedAt": "2022-09-02T07:44:22Z",
  "content": "Samsung a lancé un nouveau spot publicitaire pour ses smartphones S22 Ultra et Z Flip4.La campagne baptisée \"Buckle Up\" semble destinée aux possesseurs d'iPhone. Samsung y met en avant l'écran souple… [+554 chars]"
  },
  {
  "source": {
  "id": null,
  "name": "Unwire.hk"
  },
  "author": "唐美鳳",
  "title": "修復嚴重 WebKit 漏洞 Apple 推 iOS 12.5.6 更新",
  "description": "Apple 在 8 月 31 日突然向多款舊 iPhone 和 iPad 型號，推送 iOS 12 的系統更新以修正與 WebKit 有關的系統漏洞。根據 Apple 發出的支援文件，該漏洞容許惡意程式碼透過網頁內容導入裝置和執行，而 Apple 留意到有報告指流動已經被不法份子利用。The post 修復嚴重 WebKit 漏洞 Apple 推 iOS 12.5.6 更新 appeared first on 香港 unwire.hk 玩生活．樂科技.",
  "url": "https://unwire.hk/2022/09/02/apple-updates-ios-12/tech-secure/",
  "urlToImage": "https://cdn.unwire.hk/wp-content/uploads/2022/09/05-1.png",
  "publishedAt": "2022-09-02T03:19:51Z",
  "content": "Apple 8 31 iPhone iPad iOS 12 WebKit Apple Apple \r\n iOS 12.5.6 Build Number 16H71 CVE-2022-32893CVSS 8.8 Apple iOS 15.6.1 275MB iPhone 5SiPhone 6iPhone 6 PlusiPad AiriPad mini 2iPad mini 3 iPod Touch… [+87 chars]"
  },
  {
  "source": {
  "id": null,
  "name": "Unwire.hk"
  },
  "author": "唐美鳳",
  "title": "iPhone SE 傳明年推新款 第四代將改用 iPhone XR 設計",
  "description": "雖然現時發售中的第三代 iPhone SE 發表至今僅 5 個多月，但有消息指 Apple 計劃在明年推出第四代，新機的最大轉變將會是機身設計。著名爆料 YouTuber Jon Prosser 日前在《Geared Up》Podcast 節目中，透露了第四代 iPhone SE 的最新消息。The post iPhone SE 傳明年推新款 第四代將改用 iPhone XR 設計 appeared first on 香港 unwire.hk 玩生活．樂科技.",
  "url": "https://unwire.hk/2022/09/02/next-iphone-se-taking-iphone-xr-design/mobile-phone/",
  "urlToImage": "https://cdn.unwire.hk/wp-content/uploads/2022/09/02-1.png",
  "publishedAt": "2022-09-02T03:19:44Z",
  "content": "iPhone SE 5 Apple YouTuber Jon Prosser Geared UpPodcast iPhone SE \r\niPhone SE iPhone 5 iPhone 8 Prosser Apple iPhone SE 2018 iPhone XR \r\n iPhone XR 6.1 iPhone Home Touch ID Apple 2017 Face ID \r\nmacru… [+47 chars]"
  },
  {
  "source": {
  "id": null,
  "name": "Unwire.hk"
  },
  "author": "唐美鳳",
  "title": "OPPO 宣佈停止提供充電器 部份手機型號受影響明年生效",
  "description": "在日前舉行的 Reno8 系列手機歐洲發佈會上，OPPO 海外銷售及服務部副總裁 Billy Zhang 宣佈，廠方會由明年開始停止為多款產品隨包裝提供充電器。有別於 Apple 和 Samsung 等品牌以環保減廢的原因停止提供充電器，OPPO 則未有搬出環保作為理由。The post OPPO 宣佈停止提供充電器 部份手機型號受影響明年生效 appeared first on 香港 unwire.hk 玩生活．樂科技.",
  "url": "https://unwire.hk/2022/09/02/oppo-stop-providing-charger-next-year/mobile-phone/",
  "urlToImage": "https://cdn.unwire.hk/wp-content/uploads/2022/09/04-1.png",
  "publishedAt": "2022-09-02T03:19:48Z",
  "content": "Reno8 OPPO Billy Zhang Apple Samsung OPPO \r\nBilly Zhang SuperVOOC OPPO \r\n OPPO USB PD Apple Samsung 20W 45W VOOC OPPO OPPO \r\ngsmarena\r\nunwire.hk Mewe https://mewe.com/p/unwirehk"
  },
  {
  "source": {
  "id": null,
  "name": "Iphones.ru"
  },
  "author": "Илья Сидоров",
  "title": "Samsung троллит в новой рекламе iPhone 14 и Apple за отсутствие инноваций",
  "description": "Samsung заранее раскритиковала iPhone 14 за плохую камеру.",
  "url": "https://www.iphones.ru/iNotes/samsung-trollit-v-novoy-reklame-iphone-14-i-apple-za-otsutstvie-innovaciy-09-02-2022",
  "urlToImage": "https://www.iphones.ru/wp-content/plugins/wonderm00ns-simple-facebook-open-graph-tags/fbimg.php?img=https%3A%2F%2Fwww.iphones.ru%2Fwp-content%2Fuploads%2F2022%2F09%2F1614029795_704007_1614030083_noticia_normal.jpg",
  "publishedAt": "2022-09-02T05:40:02Z",
  "content": "iPhone 14 , Samsung , Apple.\r\n Samsung Galaxy S22 UltraZ Flip 4, iPhone 14. 108 100- .\r\n Apple , , . - . , , . iPhone . , Galaxy.\r\n, iPhone 14 Pro 48 8K.\r\nSamsung Apple , . [9to5Mac]"
  },
  {
  "source": {
  "id": null,
  "name": "Iphones.ru"
  },
  "author": "Артём Суровцев",
  "title": "15 полезных приложений для Mac с открытым исходным кодом. Все доступны абсолютно бесплатно",
  "description": "Как прокачать возможности macOS при помощи бесплатных утилит с GitHub",
  "url": "https://www.iphones.ru/iNotes/15-poleznyh-prilozheniy-dlya-mac-s-otkrytym-ishodnym-kodom-vse-dostupny-absolyutno-besplatno-08-25-2022",
  "urlToImage": "https://www.iphones.ru/wp-content/plugins/wonderm00ns-simple-facebook-open-graph-tags/fbimg.php?img=https%3A%2F%2Fwww.iphones.ru%2Fwp-content%2Fuploads%2F2022%2F08%2F17PN6H9U5A.jpg",
  "publishedAt": "2022-09-02T07:00:36Z",
  "content": "Mac . , .\r\nGitHub. , , . \r\n1. Aural\r\nWinampWindows. Mac . \r\n , . “” . \r\n , FLAC, Vorbis, Monkey’s Audio (APE), Opus . , . \r\nAural – GitHub\r\n2. Background Music\r\nBackground Music .\r\n , FaceTimeTelegra… [+976 chars]"
  },
  {
  "source": {
  "id": null,
  "name": "Bitcoin Magazine"
  },
  "author": "Taimur Ahmad",
  "title": "A Criticism Of The Current Bitcoin As Money Narrative",
  "description": "As it stands, the argument for Bitcoin as money has several components which could be called into question.",
  "url": "https://bitcoinmagazine.com/markets/criticism-of-bitcoin-as-money-narrative",
  "urlToImage": "https://bitcoinmagazine.com/.image/t_share/MTg3OTIyNzgyMzYzODUzODc1/bitcoin-portfolio-insurance-introductions-basics-and-bond-math.png",
  "publishedAt": "2022-09-02T00:00:00Z",
  "content": "This is an opinion editorial by Taimur Ahmad, a graduate student at Stanford University, focusing on energy, environmental policy and international politics.\r\nAuthor’s note: This is the first part of… [+22693 chars]"
  },
  {
  "source": {
  "id": null,
  "name": "Giga"
  },
  "author": "Peter Hryciuk",
  "title": "Heizkosten sparen: Amazon verkauft das perfekte Zubehör für die kalte Jahreszeit günstiger",
  "description": "Der anstehenden Winter wird für Deutschland zu einer echten Herausforderung, denn jeder von uns muss Energie sparen. Besonders wer mit Gas heizt, muss zwangsläufig dafür sogar, dass der Verbrauch sinkt, damit die nächste Abrechnung nicht zur Katastrophe wird.…",
  "url": "https://www.giga.de/artikel/heizkosten-sparen-amazon-verkauft-das-perfekte-zubehoer-fuer-die-kalte-jahreszeit-guenstiger-xyz/",
  "urlToImage": "https://crops.giga.de/dd/60/17/685884fbcbfb4dcdbe7c4de914_YyAxODgxeDk4Mys2MCs3MgJyZSAxMjAwIDYyNwNkMDY4ZmI0ZDdkMQ==.jpg",
  "publishedAt": "2022-09-02T07:37:42Z",
  "content": "Der anstehenden Winter wird für Deutschland zu einer echten Herausforderung, denn jeder von uns muss Energie sparen. Besonders wer mit Gas heizt, muss zwangsläufig dafür sogar, dass der Verbrauch sin… [+2122 chars]"
  },
  {
  "source": {
  "id": null,
  "name": "Expansion.com"
  },
  "author": "expansion.com",
  "title": "La Primera de Expansión sobre bajada del IVA en el gas, los otros Buffett y Aedas, Neinor, Metrovacesa y Vía Célere",
  "description": "Para hablar sobre las implicaciones de la bajada fiscal en el gas contaremos con la colaboración del periodista especializado de Expansión Juande Portillo. En la agenda del día d",
  "url": "https://www.expansion.com/podcasts/2022/09/02/6311929be5fdead5168b464f.html",
  "urlToImage": "https://phantom-expansion.unidadeditorial.es/ff28edf54b8244ba0b84877d978ef59a/f/jpg/assets/multimedia/imagenes/2022/09/02/16620956556551.jpg",
  "publishedAt": "2022-09-02T05:39:42Z",
  "content": "Para hablar sobre las implicaciones de la bajada fiscal en el gas contaremos con la colaboración del periodista especializado de Expansión Juande Portillo. \r\nEn la agenda del día destacan los datos d… [+313 chars]"
  },
  {
  "source": {
  "id": null,
  "name": "WinFuture"
  },
  "author": "Witold Pryjda",
  "title": "Samsung stichelt in Richtung iPhone 14 und fehlende Innovationen",
  "description": "Der koreanische Hersteller Samsung und die Kalifornier von Apple haben eine lange Rivalität, diese geht unter anderem auf die gerichtlichen Auseinandersetzungen zwischen den beiden Unternehmen zurück. Seither lässt Samsung kaum eine Gelegenheit aus, um gegen …",
  "url": "https://winfuture.de/videos/Werbespots/Samsung-stichelt-in-Richtung-iPhone-14-und-fehlende-Innovationen-24315.html",
  "urlToImage": "https://videos.winfuture.de/24315.jpg",
  "publishedAt": "2022-09-02T07:23:09Z",
  "content": "Der koreanische Hersteller Samsung und die Kalifornier von Apple haben eine lange Rivalität, diese geht unter anderem auf die gerichtlichen Auseinandersetzungen zwischen den beiden Unternehmen zurück… [+1787 chars]"
  },
  {
  "source": {
  "id": "cnn",
  "name": "CNN"
  },
  "author": "Alexandra Ferguson",
  "title": "Esto podría elevar el precio de la nueva línea del iPhone",
  "description": "Aunque se espera que Apple presente la nueva línea del iPhone 14 en su próximo evento del miércoles, todavía hay una gran incógnita en torno a cuánto cobrará el gigante tecnológico por la más reciente camada de smartphones.",
  "url": "https://cnnespanol.cnn.com/2022/09/01/precio-nueva-linea-iphone-14-trax/",
  "urlToImage": "https://cnnespanol.cnn.com/wp-content/uploads/2022/09/220829155414-file-apple-iphone-shopper-file-restricted-full-169.jpg?quality=100&strip=info",
  "publishedAt": "2022-09-02T01:03:01Z",
  "content": "Apple envía invitaciones para una presentación en septiembre 0:53\r\n(CNN) -- Aunque se espera que Apple presente la nueva línea del iPhone 14 en su próximo evento del miércoles, todavía hay una gran i… [+4213 chars]"
  },
  {
  "source": {
  "id": null,
  "name": "Screen Rant"
  },
  "author": "Hannah Saab",
  "title": "10 Best R-Rated Action Movies",
  "description": "From the neo-noir blockbuster, John Wick, to the latest entry in the Predator franchise, Hulu, there are numerous must-see R-rated action movies.",
  "url": "https://screenrant.com/best-r-rated-action-movies/",
  "urlToImage": "https://static1.srcdn.com/wordpress/wp-content/uploads/2022/08/Characters-from-Kill-Bill-Nobody-Prey-and-Dredd.jpg",
  "publishedAt": "2022-09-02T00:46:13Z",
  "content": "The latest entry in the Predator franchise, Hulu’s Prey, recently premiered to critical acclaim, in large part thanks to its flawless action sequences that don’t pull any punches when it comes to its… [+7323 chars]"
  },
  {
  "source": {
  "id": null,
  "name": "Screen Rant"
  },
  "author": "Hannah Saab",
  "title": "10 Best Movies Of All Time (According To Reddit)",
  "description": "From iconic classics like Pulp Fiction to riveting thrillers like Se7en, Redditors have shared their interesting picks for the best films ever made.",
  "url": "https://screenrant.com/best-movies-all-time-ever-made-reddit/",
  "urlToImage": "https://static1.srcdn.com/wordpress/wp-content/uploads/2022/08/Characters-from-How-to-Train-Your-Dragon-Eternal-Sunshine-of-the-Spotless-Mind-Parasite-and-Children-of-Men.jpg",
  "publishedAt": "2022-09-02T01:20:12Z",
  "content": "The latest entry in the Jurassic Park franchise, Jurassic World Dominion, premiered to mixed reviews earlier this year. It doesn’t live up to the original 1993 film, which is often cited among the be… [+7574 chars]"
  },
  {
  "source": {
  "id": null,
  "name": "iphone-ticker.de › iPhone-News seit 2007"
  },
  "author": "Nicolas",
  "title": "AirTags wieder verfügbar: Telekom mit Aktion",
  "description": "Nach längerer Phase der Vergriffenheit ist das 4er-Pack Apple Airtags jetzt wieder im Handel verfügbar. Amazon bietet das bei Apple mit 119 Euro ausgezeichnete Viererpack nun wieder für 112,99 Euro an, will mit der Auslieferung jedoch erst in knapp drei Woche…",
  "url": "https://www.iphone-ticker.de/airtags-wieder-verfuegbar-telekom-mit-aktion-197605/",
  "urlToImage": "https://images.iphone-ticker.de/wp-content/uploads/2022/02/airtags-ohne-ton-DxP49sBqyGA-unsplash.jpg",
  "publishedAt": "2022-09-02T05:57:20Z",
  "content": "Nach längerer Phase der Vergriffenheit ist das 4er-Pack Apple Airtags jetzt wieder im Handel verfügbar. Amazon bietet das bei Apple mit 119 Euro ausgezeichnete Viererpack nun wieder für 112,99 Euro a… [+592 chars]"
  },
  {
  "source": {
  "id": null,
  "name": "Iculture.nl"
  },
  "author": "Gonny van der Zwaag | iCulture.nl",
  "title": "Apple schikt met FlickType-ontwikkelaar",
  "description": "De mondige ontwikkelaar Kosta Eleftheriou spande in 2021 een rechtszaak aan tegen Apple, omdat hij vond dat updates van zijn app FlickType stelselmatig werden tegengewerkt. In plaats van een jarenlange strijd van David tegenover Goliath heeft hij nu een schik…",
  "url": "https://www.iculture.nl/nieuws/apple-flicktype-ontwikkelaar-schikking/",
  "urlToImage": "https://www.iculture.nl/wp-json/social-image-generator/v1/image/1335049/?v=12146211662106901",
  "publishedAt": "2022-09-02T06:21:41Z",
  "content": "Kosta Eleftheriou kreeg bekendheid omdat hij regelmatig App Store-scams aan het licht bracht. Het ging vaak om 1-op-1 kopieën van populaire apps die gewoon door het goedkeuringsproces van Apple kwame… [+2568 chars]"
  },
  {
  "source": {
  "id": null,
  "name": "MobileSyrup"
  },
  "author": "MobileSyrup",
  "title": "iPhone 14, Apple Watch Pro and AirPods Pro 2 rumour round-up [SyrupCast 263]",
  "description": "On this week’s SyrupCast, Patrick O’Rourke and Brad Bennett break down everything they expect to see revealed at Apple’s upcoming September 7th ‘Far Out’ event, including the iPhone 14, Apple Watch Pro, 2nd-gen AirPods Pro and more. For more on what we expect…",
  "url": "https://mobilesyrup.com/2022/09/01/iphone-14-apple-watch-pro-and-2nd-gen-airpods-pro-rumour-round-up-syrupcast-263/",
  "urlToImage": "https://cdn.mobilesyrup.com/wp-content/uploads/2022/09/apple-far-out-event.jpg",
  "publishedAt": "2022-09-02T00:05:30Z",
  "content": "On this weeks SyrupCast, Patrick ORourke and Brad Bennett break down everything they expect to see revealed at Apple’s upcoming September 7th ‘Far Out’ event, including the iPhone 14, Apple Watch Pro… [+225 chars]"
  },
  {
  "source": {
  "id": null,
  "name": "Pocket-lint"
  },
  "author": "Britta O'Boyle",
  "title": "Sennheiser Ambeo Soundbar Plus is cheaper, more compact and promises big sound",
  "description": "Sennheiser announced the Ambeo Soundbar Plus at technology show IFA in Berlin, bringing a cheaper and \"more compact\" alternative to the original - and",
  "url": "https://www.pocket-lint.com/speakers/news/sennheiser/162487-sennheiser-ambeo-soundbar-plus-announcement-price-features",
  "urlToImage": "https://cdn.pocket-lint.com/r/s/1200x630/assets/images/162487-speakers-news-sennheiser-ambeo-soundbar-plus-is-cheaper-more-compact-and-promises-big-sound-image2-ecmej0y8ah.jpg",
  "publishedAt": "2022-09-02T06:48:26Z",
  "content": "(Pocket-lint) - Sennheiser announced the Ambeo Soundbar Plus at technology show IFA in Berlin, bringing a cheaper and \"more compact\" alternative to the original - and excellent - Ambeo Soundbar that … [+1685 chars]"
  },
  {
  "source": {
  "id": null,
  "name": "Iculture.nl"
  },
  "author": "Gonny van der Zwaag | iCulture.nl",
  "title": "Lenovo’s nieuwe AR-bril werkt met de iPhone",
  "description": "Lenovo heeft een nieuwe AR-bril aangekondigd, die met de iPhone, iPad én Mac werkt. De Lenovo Glasses T1 laten zien waartoe een mogelijke mixed reality-bril van Apple in staat zou kunnen zijn.\nHet artikel Lenovo’s nieuwe AR-bril werkt met de iPhone verscheen …",
  "url": "https://www.iculture.nl/nieuws/lenovo-glasses-t1-ar-bril/",
  "urlToImage": "https://www.iculture.nl/wp-json/social-image-generator/v1/image/1335055/?v=13350571662107997",
  "publishedAt": "2022-09-02T06:39:57Z",
  "content": "Lenovo denkt dat AR-brillen klaar zijn voor de massa en brengt deze bril uit voor een breed publiek. Het design is vrij simpel: een zwarte bril met speciale lenzen, die dienst doet als een soort pers… [+1791 chars]"
  },
  {
  "source": {
  "id": null,
  "name": "Iculture.nl"
  },
  "author": "Gonny van der Zwaag | iCulture.nl",
  "title": "Usb4 versie 2.0 verdubbelt de snelheid en verslaat Thunderbolt",
  "description": "Met de nieuwe standaard usb4 2.0 kun je data met een snelheid van maar liefst 80 Gbps overzetten. Daarmee verdubbelt het de snelheid ten opzichte van usb4 1.0 én Thunderbolt, die beide maximaal 40 Gbps bieden.\nHet artikel Usb4 versie 2.0 verdubbelt de snelhei…",
  "url": "https://www.iculture.nl/nieuws/usb4-verdubbelt-snelheid-80-gbps/",
  "urlToImage": "https://www.iculture.nl/wp-json/social-image-generator/v1/image/1335061/?v=13308641662110142",
  "publishedAt": "2022-09-02T07:14:34Z",
  "content": "Usb4 wordt sneller, maar is je Mac er klaar voor?\r\nHet kan soms wat verwarrend zijn welke poort welke standaard ondersteunt, want ze gebruiken tegenwoordig bijna allemaal dezelfde connector: usb-c. Z… [+1818 chars]"
  },
  {
  "source": {
  "id": null,
  "name": "Www.nzz.ch"
  },
  "author": "Angelika Hardegger (haa)",
  "title": "KOMMENTAR - Bohne, bio oder Biochemie – das ist die Zukunft von Fleisch",
  "description": "Ganz unabhängig davon, ob die Massentierhaltungsinitiative angenommen wird oder nicht.",
  "url": "https://www.nzz.ch/meinung/die-massentierhaltung-und-fleisch-warum-es-sowieso-besser-wird-ld.1700508",
  "urlToImage": "https://img.nzz.ch/2022/08/31/8ac2d785-1251-4374-a682-e13350c63550.jpeg?width=1200&height=674&fit=bound&quality=75&auto=webp&crop=4971,2793,x0,y260&wmark=nzz",
  "publishedAt": "2022-09-02T03:30:00Z",
  "content": "Erst im Jahr 2050 müsste die Massentierhaltungsinitiative umgesetzt sein. Dann werden wir sowieso anders essen.\r\nUnsere Gewissheit, Fleisch zu essen, ist in den vergangenen Jahren unterspült worden, … [+8427 chars]"
  },
  {
  "source": {
  "id": null,
  "name": "DIE WELT"
  },
  "author": "Olaf Gersemann",
  "title": "„Schulbeginn mit Einmaleffekt“ – Die aktuellen Corona-Zahlen für Sie erklärt",
  "description": "Läuft die dritte Omikron-Welle wirklich aus? Olaf Gersemann erklärt und bewertet kurz und kompakt die aktuellen Zahlen. Alles, was Sie am 2. September wissen müssen.",
  "url": "https://www.welt.de/wirtschaft/article238812729/Die-aktuellen-Corona-Zahlen-im-Ueberblick-Schulbeginn-mit-Einmaleffekt.html",
  "urlToImage": "https://img.welt.de/img/wirtschaft/mobile238857427/4581352087-ci16x9-w1200/DWO-Teaser-30sek-Corona-Olaf-aw-jpg.jpg",
  "publishedAt": "2022-09-02T04:16:29Z",
  "content": "33.930 Corona-Fälle sind dem RKI gestern gemeldet worden.\r\nIm Vorwochenvergleich ergibt sich ein Minus von neun Prozent.\r\nDas ist nun der 32. Werktag mit einem Rückgang im Vorwochenvergleich in Folge… [+2318 chars]"
  },
  {
  "source": {
  "id": null,
  "name": "DIE WELT"
  },
  "author": "Tobias Kaiser, Karsten Seibel",
  "title": "G-7-Staaten machen Ernst mit Preisdeckel für russisches Öl",
  "description": "Am Freitag wollen die G-7-Finanzminister über eine Obergrenze beim Preis für russisches Öl beraten. Inzwischen haben sie Details dazu ausgearbeitet, wie diese durchgesetzt werden kann. Die Amerikaner drängten dazu, jetzt unterstützt auch Deutschland das Vorha…",
  "url": "https://www.welt.de/wirtschaft/article240813013/Russland-Sanktionen-G-7-Staaten-machen-Ernst-mit-Preisdeckel-fuer-russisches-Oel.html",
  "urlToImage": "https://img.welt.de/img/wirtschaft/mobile240819125/4971353037-ci16x9-w1200/Oil-production-by-Tatneft-in-Tatarstan-Russia.jpg",
  "publishedAt": "2022-09-02T06:31:00Z",
  "content": "Schon als Bundeskanzler Olaf Scholz (SPD) im Juni den amerikanischen Präsidenten Joe Biden und die anderen Staats- und Regierungschefs im bayerischen Schloss Elmau zum G-7-Gipfel empfing, war es ein … [+4641 chars]"
  },
  {
  "source": {
  "id": null,
  "name": "DIE WELT"
  },
  "author": "Tobias Kaiser, Karsten Seibel",
  "title": "G-7-Staaten machen Ernst mit Preisdeckel für russisches Öl",
  "description": "Am Freitag wollen die G-7-Finanzminister über eine Obergrenze beim Preis für russisches Öl beraten. Inzwischen haben sie Details dazu ausgearbeitet, wie diese durchgesetzt werden kann. Die Amerikaner drängten dazu, jetzt unterstützt auch Deutschland das Vorha…",
  "url": "https://www.welt.de/wirtschaft/article240813013/Sanktionen-G-7-Staaten-machen-Ernst-mit-Preisdeckel-fuer-russisches-Oel.html",
  "urlToImage": "https://img.welt.de/img/wirtschaft/mobile240813475/4381354037-ci16x9-w1200/Oil-production-by-Tatneft-in-Tatarstan-Russia.jpg",
  "publishedAt": "2022-09-02T06:03:33Z",
  "content": "Schon als Bundeskanzler Olaf Scholz (SPD) im Juni den amerikanischen Präsidenten Joe Biden und die anderen Staats- und Regierungschefs im bayerischen Schloss Elmau zum G-7-Gipfel empfing, war es ein … [+4641 chars]"
  },
  {
  "source": {
  "id": null,
  "name": "Just Jared"
  },
  "author": "Just Jared",
  "title": "Natalie Portman Takes Her Dog for a Walk After Production for Apple TV+ Series Gets Shut Down",
  "description": "Natalie Portman is enjoying an afternoon outing with her dog. The 41-year-old Thor: Love And Thunder actress took a phone call via her AirPods while taking her dog for a walk around the neighborhood on Monday afternoon (August 29) in Los Feliz, Calif. PHOTOS:…",
  "url": "http://www.justjared.com/2022/09/02/natalie-portman-takes-her-dog-for-a-walk-after-production-for-apple-tv-series-gets-shut-down/",
  "urlToImage": "https://cdn.justjared.com/wp-content/uploads/headlines/2022/09/nat-dog.jpg",
  "publishedAt": "2022-09-02T06:44:55Z",
  "content": "Natalie Portman is enjoying an afternoon outing with her dog.\r\nThe 41-year-old Thor: Love And Thunder actress took a phone call via her AirPods while taking her dog for a walk around the neighborhood… [+979 chars]"
  },
  {
  "source": {
  "id": null,
  "name": "Meduza"
  },
  "author": null,
  "title": "Из дела Ивана Сафронова стало понятнее, как именно российские силовики взламывают компьютеры и телефоны. Вот инструкция «Медузы» — как себя защитить",
  "description": "ДАННОЕ СООБЩЕНИЕ (МАТЕРИАЛ) СОЗДАНО И (ИЛИ) РАСПРОСТРАНЕНО ИНОСТРАННЫМ СРЕДСТВОМ МАССОВОЙ ИНФОРМАЦИИ, ВЫПОЛНЯЮЩИМ ФУНКЦИИ ИНОСТРАННОГО АГЕНТА, И (ИЛИ) РОССИЙСКИМ ЮРИДИЧЕСКИМ ЛИЦОМ, ВЫПОЛНЯЮЩИМ ФУНКЦИИ ИНОСТРАННОГО АГЕНТА.Спасите «Медузу»!https://support.meduz…",
  "url": "https://meduza.io/feature/2022/09/02/iz-dela-ivana-safronova-stalo-ponyatnee-kak-imenno-rossiyskie-siloviki-vzlamyvayut-kompyutery-i-telefony",
  "urlToImage": "https://meduza.io/image/attachments/images/008/173/821/original/fRtiWPCTu_JvQZru8GbYlw.png",
  "publishedAt": "2022-09-02T05:08:02Z",
  "content": "()  () , ,  () , .\r\nPDF  ,   . .\r\n,    ,   .  ,   . ,   «»  «»  24 , .   «»   . \r\n        ,  \r\n-   ,    ,   .    .\r\nFace ID  Touch ID  ,   .   .     , end-to-end (, Signal, WhatsApp   Telegram),    -… [+1567 chars]"
  },
  {
  "source": {
  "id": null,
  "name": "Tom's Guide"
  },
  "author": "Philip Michaels",
  "title": "iPhone 14 upgrade guide — who should upgrade from their current iPhone? - Tom's Guide",
  "description": "<ol><li>iPhone 14 upgrade guide — who should upgrade from their current iPhone?  Tom's Guide\r\n</li><li>Power On: Apple's iPhone 14  Bloomberg Technology\r\n</li><li>iPhone 14 series: Apple keeps most important new features a secret (10 wild cards to look out fo…",
  "url": "https://www.tomsguide.com/news/iphone-14-upgrade-guide-who-should-upgrade-from-their-current-iphone",
  "urlToImage": "https://cdn.mos.cms.futurecdn.net/drYWUJb3AjShuf49bstDS3-1200-80.jpg",
  "publishedAt": "2022-09-02T04:00:31Z",
  "content": "By this time next week, phone shoppers on the hunt for the best iPhone are going to have a decision to make — should they upgrade to any of the iPhone 14 models expected to appear next Wednesday at t… [+16750 chars]"
  },
  {
  "source": {
  "id": null,
  "name": "Itmedia.co.jp"
  },
  "author": "佐藤由紀子，ITmedia",
  "title": "Samsung、「iPhone 14」発表直前にパロディCM動画公開",
  "description": "Appleのスペシャルイベント開催を前に、SamsungがパロディCM動画を公開。「Appleの最新発表に向けて準備を整えよう」と言いつつ、Galaxyシリーズの高機能を紹介している。",
  "url": "https://www.itmedia.co.jp/mobile/articles/2209/02/news090.html",
  "urlToImage": "https://image.itmedia.co.jp/mobile/articles/2209/02/cover_news090.jpg",
  "publishedAt": "2022-09-02T02:14:00Z",
  "content": "Samsung Electronics91Buckle UpYouTubeApplebuckle up\r\nApple982Far Out\r\nSamsungApple\r\niPhoneGalaxy S22 UltraZ Flip41800100\r\niPhoneiPhoneGalaxy\r\nSamsungApple\r\nCopyright © ITmedia, Inc. All Rights Reserv… [+2 chars]"
  },
  {
  "source": {
  "id": null,
  "name": "Yahoo Entertainment"
  },
  "author": "Reuters",
  "title": "Taiwan August exports seen up for 26th straight month: Reuters poll",
  "description": "Taiwan, a global hub for chip production and a key supplier to Apple Inc, is one of Asia's leading exporters of technology goods.  Exports last month were...",
  "url": "https://finance.yahoo.com/news/taiwan-august-exports-seen-26th-041625084.html",
  "urlToImage": "https://s.yimg.com/uu/api/res/1.2/GZv4bwUYBqKgIo5hvhpBQA--~B/aD01MzM7dz04MDA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/reuters-finance.com/0f8ac62b0bdd7fd3f6bcefa90386aacd",
  "publishedAt": "2022-09-02T04:16:25Z",
  "content": "TAIPEI (Reuters) - Taiwan's exports likely rose for the 26th straight month in August although at a slower pace than in July, amid fears of a global recession, uncertainties due to the Ukraine confli… [+1100 chars]"
  },
  {
  "source": {
  "id": null,
  "name": "Yahoo Entertainment"
  },
  "author": "Kyungji Cho",
  "title": "Samsung Credit Risk Falls as Rating Raised to Government Level",
  "description": "(Bloomberg) -- Samsung Electronics Co.’s credit risk fell after Moody’s Investors Service lifted its rating to the same level as the South Korean government,...",
  "url": "https://finance.yahoo.com/news/samsung-electronics-debt-rating-raised-101253202.html",
  "urlToImage": "https://s.yimg.com/uu/api/res/1.2/6yL_cnqFJHc7x2m7IMRE2A--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/bloomberg_markets_842/11244810dbe4b3cfad56d3545d18f673",
  "publishedAt": "2022-09-02T02:08:14Z",
  "content": "(Bloomberg) -- Samsung Electronics Co.s credit risk fell after Moodys Investors Service lifted its rating to the same level as the South Korean government, citing the companys profitability and stron… [+1580 chars]"
  },
  {
  "source": {
  "id": null,
  "name": "Yahoo Entertainment"
  },
  "author": "PR Newswire",
  "title": "USD 26.42 billion Growth in BLE Module Market Size Due to the Growth of the IoT Market - 17,000+ Technavio Reports",
  "description": "The \"BLE Module Market Forecast and Analysis 2022-2026\" report has been added to Technavio's offering. With ISO 9001:2015 certification, Technavio is proudly...",
  "url": "https://finance.yahoo.com/news/usd-26-42-billion-growth-013000120.html",
  "urlToImage": "https://s.yimg.com/uu/api/res/1.2/lRpR35_On366qWOELJ92Gw--~B/aD0yMjU7dz00MDA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/prnewswire.com/405cb428efb49f7b9c7dee0dceea2746",
  "publishedAt": "2022-09-02T01:30:00Z",
  "content": "NEW YORK, Sept. 1, 2022 /PRNewswire/ -- The \"BLE Module Market\r\n Forecast and Analysis 2022-2026\" report has been added to Technavio's offering. With ISO 9001:2015 certification, Technavio is proudly… [+7482 chars]"
  },
  {
  "source": {
  "id": null,
  "name": "Lupa.cz"
  },
  "author": "redakce@lupa.cz (Lupa.cz: Jan Sedlák)",
  "title": "Chystá se Mafia 4, nové procesory AMD Ryzen jsou zde, grafiky jsou skladem a za dobrou cenu",
  "description": "LastPassu unikly zdrojáky. Nejvíce sleduje Google. Nvidia a AMD nesmí dodávat high-end grafiky do Číny. Starlink a T-Mobile se spojují. Zprávy z IT, každý pátek na Lupě.",
  "url": "https://www.lupa.cz/clanky/chysta-se-mafia-4-nove-procesory-amd-ryzen-jsou-zde-grafiky-jsou-skladem-a-za-dobrou-cenu/",
  "urlToImage": "https://i.iinfo.cz/images/346/t-mobile-a-elon-musk-ze-starlinku.png",
  "publishedAt": "2022-09-02T04:30:01Z",
  "content": "Vdy v pátek pipravuje reportér Jan Sedlák výbr zajímavých zpráv ze svta IT. Co se událo v tomto týdnu?\r\nAMD podle oekávání oznámila novou generaci procesor Ryzen. Zejm budou výkonov výrazn ped souasn… [+5154 chars]"
  },
  {
  "source": {
  "id": null,
  "name": "ifun.de › Apple-News seit 2001"
  },
  "author": "Nicolas",
  "title": "Serienstart: Der Herr der Ringe – Die Ringe der Macht",
  "description": "Mit unglaublich langem Vorlauf angekündigt hat Amazon zum Freitag jetzt die ersten beiden Teile des hauseigenen „Herr der Ringe“-Ablegers „Die Ringe der Macht“ bei Amazon Prime Video veröffentlicht. 2 Folgen, je 1 Stunde Laufzeit Die ersten beiden Episoden de…",
  "url": "https://www.ifun.de/serienstart-der-herr-der-ringe-die-ringe-der-macht-193908/",
  "urlToImage": "https://images.ifun.de/wp-content/uploads/2022/09/herr-der-ringe-feature.jpg",
  "publishedAt": "2022-09-02T05:32:01Z",
  "content": "Mit unglaublich langem Vorlauf angekündigt hat Amazon zum Freitag jetzt die ersten beiden Teile des hauseigenen „Herr der Ringe“-Ablegers „Die Ringe der Macht“ bei Amazon Prime Video veröffentlicht.\r… [+1907 chars]"
  },
  {
  "source": {
  "id": null,
  "name": "Technews.tw"
  },
  "author": "邱 倢芯",
  "title": "分析師：印度生產 iPhone 14 進度晚中國 6 週，明年有望同步生產",
  "description": "蘋果近年來轉移產品生產基地的動作頻頻，先是要求供應鏈廠商將 AirPods 產線移至越南，隨後也開始將 Apple Watch、MacBook 向越南挪移；先前中資天風證券分析師郭明錤也指出，富士康印度 iPhone 生產基地將在下半年首度與中國工廠幾乎同時出貨 6.1 吋 iPhone 14。\r\n...",
  "url": "https://technews.tw/2022/09/02/india-iphone-14-china/",
  "urlToImage": "https://img.technews.tw/wp-content/uploads/2022/08/26152946/iphone.jpg",
  "publishedAt": "2022-09-02T01:48:18Z",
  "content": "[Update] The iPhone 14’s mass production schedule in India this year is still about six weeks behind China, but the gap has improved significantly. Therefore, it is reasonable to expect that India an… [+149 chars]"
  },
  {
  "source": {
  "id": "usa-today",
  "name": "USA Today"
  },
  "author": "Celtics Wire",
  "title": "Ex-Boston Celtics big man Juancho Hernangomez gets 13 points, 7 boards vs. Bulgaria with Spain",
  "description": "It was a generally efficient night for the Spaniard, who only fouled once and did not turn the ball over in this game.",
  "url": "https://celticswire.usatoday.com/2022/09/01/nba-boston-celtics-juancho-bulgaria-spain-eurobasket-2022/",
  "urlToImage": "https://s.yimg.com/ny/api/res/1.2/Mb4bK6fW8190BJmQSRLQNw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD05MTc-/https://media.zenfs.com/en/celtics_wire_usa_today_sports_articles_699/fa41e5a87ddd53b47bc7c8f443ba4993",
  "publishedAt": "2022-09-02T00:55:52Z",
  "content": "Former Boston Celtics big man Juancho Hernangomez helped drive his Spanish National Team to a 114-87 blowout of the Bulgarian National Team on Thursday on day one of EuroBasket action. The star of th… [+1814 chars]"
  },
  {
  "source": {
  "id": "usa-today",
  "name": "USA Today"
  },
  "author": "Celtics Wire",
  "title": "Several Boston Celtics alumni faced off in Germany’s surprise 76-63 EuroBasket win over France",
  "description": "Guerschon Yabusele led France with 18 points, a block, and an assist in the loss.",
  "url": "https://celticswire.usatoday.com/2022/09/01/nba-boston-celtics-germany-france-eurobasket-2022/",
  "urlToImage": "https://s.yimg.com/uu/api/res/1.2/VZk2UAWSXxlmC.v.4W4cqA--~B/aD02ODA7dz0xMDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/celtics_wire_usa_today_sports_articles_699/5e10d77280b9880857b698218c4996c4",
  "publishedAt": "2022-09-02T01:32:31Z",
  "content": "Several Boston Celtics alumni faced off in the German National Teams surprise 76-63 win over the French National Team on Thursday, which saw former Celtics center Guerschon Yabusele led France with 1… [+1936 chars]"
  },
  {
  "source": {
  "id": "usa-today",
  "name": "USA Today"
  },
  "author": "Celtics Wire",
  "title": "Celtics Lab 139: Talking hoops and the Celtics season to come with Maura Healey",
  "description": "The hosts of the CLNS Media \"Celtics Lab\" podcast got a chance to sit down with Healey to talk about the Celtics of today and our past, the sport more broadly, as well as her platform.",
  "url": "https://celticswire.usatoday.com/2022/09/01/nba-boston-celtics-healey-lab/",
  "urlToImage": "https://s.yimg.com/ny/api/res/1.2/k7xLNOjnqsnO81TUztmymw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04NTc-/https://media.zenfs.com/en/celtics_wire_usa_today_sports_articles_699/53200d5166a824747aff4afcb5189d8d",
  "publishedAt": "2022-09-02T00:07:25Z",
  "content": "It isnt very often that a candidate for a major political office in the United States is also a huge fan of the sport of basketball, to say nothing of the Boston Celtics. Its even less common that th… [+2517 chars]"
  },
  {
  "source": {
  "id": null,
  "name": "Gizmodo Australia"
  },
  "author": "Asha Barbaschow",
  "title": "A Focus on Fitness and Health: What We’re Expecting From the Apple Watch Series 8",
  "description": "It's only a matter of days before Apple could announce yet another smartwatch. Here's what we're expecting from the Apple Watch Series 8.\nThe post A Focus on Fitness and Health: What We’re Expecting From the Apple Watch Series 8 appeared first on Gizmodo Aust…",
  "url": "https://www.gizmodo.com.au/2022/09/apple-watch-series-8-specs-pricing-availability/",
  "urlToImage": "https://www.gizmodo.com.au/wp-content/uploads/sites/2/2022/09/02/f6a7fb2a9f08532aed8258dae1e4edac.png?quality=80&resize=1280,720",
  "publishedAt": "2022-09-02T01:35:48Z",
  "content": "It’s only a matter of days before Apple could announce yet another smartwatch. While nothing has been confirmed as yet, here’s what we’re expecting from the Apple Watch Series 8.\r\nApple is expected t… [+3331 chars]"
  },
  {
  "source": {
  "id": null,
  "name": "Gizmodo Australia"
  },
  "author": "Chris Neill, Alex Choros",
  "title": "These Are the Best Cheap Mobile Plans in Australia Right Now",
  "description": "You might be surprised by just how affordable phone plans have become. Here are some of the best cheap mobile plans in Australia right now.\nThe post These Are the Best Cheap Mobile Plans in Australia Right Now appeared first on Gizmodo Australia.\n\n  Related S…",
  "url": "https://www.gizmodo.com.au/2022/09/the-best-cheap-mobile-plans-in-australia/",
  "urlToImage": "https://www.gizmodo.com.au/wp-content/uploads/sites/2/2022/09/02/futurama-shut-up-take-money.jpeg?quality=80&resize=1280,720",
  "publishedAt": "2022-09-02T02:30:45Z",
  "content": "At Gizmodo, we independently select and write about stuff we love and think you'll like too. We have affiliate and advertising partnerships, which means we may collect a share of sales or other compe… [+4580 chars]"
  },
  {
  "source": {
  "id": null,
  "name": "Moneycontrol"
  },
  "author": "Reuters",
  "title": "Broadcom looks to defy chip slowdown on data center, wireless strength",
  "description": "Shares of the company rose 2.4% to $503 in extended trading after third-quarter results also sailed past expectations.",
  "url": "https://www.moneycontrol.com/news/world/broadcom-looks-to-defy-chip-slowdown-on-data-center-wireless-strength-9119711.html",
  "urlToImage": "https://images.moneycontrol.com/static-mcnews/2022/04/broadcom-770x433.jpg",
  "publishedAt": "2022-09-02T01:04:57Z",
  "content": "Broadcom Inc forecast fourth-quarter revenue above estimates on Thursday as the semiconductor company expects resilient demand from businesses going digital to help it weather a likely chip industry … [+1585 chars]"
  },
  {
  "source": {
  "id": null,
  "name": "Ixbt.com"
  },
  "author": "jin@ixbt.com (Jin)",
  "title": "Samsung дерзко троллит Apple за отсутствие инноваций в iPhone 14 за несколько дней до анонса смартфона",
  "description": "Компания Samung опубликовала новый рекламный ролик своих флагманских смартфонов, в котором производитель не только перечисляет их преимущества, но и троллит Apple за отсутствие инноваций в iPhone. \r\n Пристегнитесь перед новейшей презентацией Apple, поскольку …",
  "url": "https://www.ixbt.com/news/2022/09/02/samsung-apple-iphone-14.html",
  "urlToImage": "https://www.ixbt.com/img/n1/news/2022/8/5/Joted47aAmMwYb9T4b7EyB_large.png",
  "publishedAt": "2022-09-02T07:10:00Z",
  "content": "Samung , , Apple iPhone. Apple, , . , - , , ... iPhone, , Galaxy.\r\nSamsung\r\n Samsung Galaxy S22 Ultra Galaxy Z Flip 4. iPhone 14 7 ."
  },
  {
  "source": {
  "id": null,
  "name": "Webnews.it"
  },
  "author": "Massimo Reina",
  "title": "Apple iPad Air (Wi-Fi, 64GB) improvviso calo di prezzo su Amazon (-100€)",
  "description": "L'iPad Air 2022 torna in offerta su Amazon, con uno sconto pari al 15%. L'occasione per fare tuo questo gioiello a un prezzo abbordabile.",
  "url": "https://www.webnews.it/apple-ipad-air-wi-fi-64gb-improvviso-calo-di-prezzo-su-amazon-100e/",
  "urlToImage": "https://cdn.webnews.it/MZGKLmX-f6PfDCFDX1syPEsQsCA=/160x160/https://www.webnews.it/app/uploads/2022/08/Apple-iPad-Airr-e1661444857273.jpg",
  "publishedAt": "2022-09-02T06:07:14Z",
  "content": "L’iPad non ha certo bisogno di presentazioni, soprattutto in questa versione 2022 che ha rilanciato quella che è la serie a metà strada tra l’economico iPad e il più sofisticato iPad Pro. L’Apple iPa… [+2443 chars]"
  }
  ]

  constructor(){
    super();
    console.log("Hello I am a constructor from news components.")
    this.state = {
      articles: this.articles,
      loading: false
    }
  }

  render() {
    return (
      <div className="container my-3">
        <h2>NewsMonkey - Top Headlines</h2>
        
        <div className='row'>
              <div className='col-md-3'>
                <NewsItem title="myTitle" description="mydesc" imageUrl=" " newsUrl="TOOO"/>
              </div>

              <div className='col-md-3'>
                <NewsItem title="myTitle" description="mydesc"/>
              </div>

              <div className='col-md-3'>
                <NewsItem title="myTitle" description="mydesc"/>
              </div>
        </div>
      </div>
    )
  }
}

export default News
