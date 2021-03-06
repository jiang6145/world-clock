const timeZoneData = [
  {
    "region": "台灣/台北",
    "latlng": [25.036305152649263, 121.56166076660158],
    "timeZone": "Asia/Taipei",
    "id": 0
  },
  {
    "region": "日本/東京",
    "latlng": [35.68198003744061, 139.7579383850098],
    "timeZone": "Asia/Tokyo",
    "id": 1
  },
  {
    "region": "韓國/首爾",
    "latlng": [37.56539874977266, 126.97826385498048],
    "timeZone": "Asia/Seoul",
    "id": 2
  },
  {
    "region": "中國/上海",
    "latlng": [31.22491276617224, 121.48887634277345],
    "timeZone": "Asia/Shanghai",
    "id": 3
  },
  {
    "region": "香港",
    "latlng": [22.27901002174767, 114.16348457336427],
    "timeZone": "Asia/Hong_Kong",
    "id": 4
  },
  {
    "region": "越南/胡志明市",
    "latlng": [10.774289459083697, 106.70248031616211],
    "timeZone": "Asia/Ho_Chi_Minh",
    "id": 5
  },
  {
    "region": "泰國/曼谷",
    "latlng": [13.753058144112908, 100.49228668212892],
    "timeZone": "Asia/Bangkok",
    "id": 6
  },
  {
    "region": "馬來西亞/吉隆坡",
    "latlng": [3.1504574638092673, 101.69477462768556],
    "timeZone": "Asia/Kuala_Lumpur",
    "id": 7
  },
  {
    "region": "新加坡",
    "latlng": [1.289068176683197, 103.84963989257812],
    "timeZone": "Asia/Singapore",
    "id": 8
  },
  {
    "region": "印度/加爾各答",
    "latlng": [22.553147478403194, 88.3465576171875],
    "timeZone": "Asia/Kolkata",
    "id": 9
  },
  {
    "region": "澳大利亞/雪梨",
    "latlng": [-33.898916884371395, 151.21719360351565],
    "timeZone": "Australia/Sydney",
    "id": 10
  },
  {
    "region": "西班牙/馬德里",
    "latlng": [40.41245043754496, -3.697586059570313],
    "timeZone": "Europe/Madrid",
    "id": 11
  },
  {
    "region": "葡萄牙/里斯本",
    "latlng": [38.70935723235625, -9.138221740722658],
    "timeZone": "Europe/Lisbon",
    "id": 12
  },
  {
    "region": "義大利/羅馬",
    "latlng": [41.89282173182968, 12.483386993408205],
    "timeZone": "Europe/Rome",
    "id": 13
  },
  {
    "region": "瑞典/斯德哥爾摩",
    "latlng": [59.324170066285326, 18.072166442871097],
    "timeZone": "Europe/Stockholm",
    "id": 14
  },
  {
    "region": "芬蘭/赫爾辛基",
    "latlng": [60.16627974697341, 24.938621520996097],
    "timeZone": "Europe/Helsinki",
    "id": 15
  },
  {
    "region": "丹麥/哥本哈根",
    "latlng": [55.686488181491896, 12.570247650146484],
    "timeZone": "Europe/Copenhagen",
    "id": 16
  },
  {
    "region": "克羅埃西亞",
    "latlng": [45.521743896993634, 16.831054687500004],
    "timeZone": "CET",
    "id": 17
  },
  {
    "region": "保加利亞/索菲亞",
    "latlng": [42.6895017559477, 23.34182739257813],
    "timeZone": "Europe/Sofia",
    "id": 18
  },
  {
    "region": "希臘/雅典",
    "latlng": [37.9837836901681, 23.728408813476566],
    "timeZone": "Europe/Athens",
    "id": 19
  },
  {
    "region": "土耳其/伊斯坦堡",
    "latlng": [41.00943888076626, 28.965625762939457],
    "timeZone": "Europe/Istanbul",
    "id": 20
  },
  {
    "region": "烏克蘭/基輔",
    "latlng": [50.447011182312195, 30.54473876953125],
    "timeZone": "Europe/Kiev",
    "id": 21
  },
  {
    "region": "俄羅斯/莫斯科",
    "latlng": [55.74972397348254, 37.61838912963868],
    "timeZone": "Europe/Moscow",
    "id": 22
  },
  {
    "region": "阿拉伯聯合大公國/杜拜",
    "latlng": [25.06414222811336, 55.17059326171875],
    "timeZone": "Asia/Dubai",
    "id": 23
  },
  {
    "region": "沙烏地阿拉伯/利雅得",
    "latlng": [24.62954147281562, 46.71524047851563],
    "timeZone": "Asia/Riyadh",
    "id": 24
  },
  {
    "region": "英國/倫敦",
    "latlng": [51.509865, -0.118092],
    "timeZone": "Europe/London",
    "id": 25
  },
  {
    "region": "愛爾蘭/都柏林",
    "latlng": [53.349804, -6.26031],
    "timeZone": "Europe/Dublin",
    "id": 26
  },
  {
    "region": "法國/巴黎",
    "latlng": [48.856613, 2.352222],
    "timeZone": "Europe/Paris",
    "id": 27
  },
  {
    "region": "比利時/布魯塞爾",
    "latlng": [50.850346, 4.351721],
    "timeZone": "Europe/Brussels",
    "id": 28
  },
  {
    "region": "荷蘭/阿姆斯特丹",
    "latlng": [52.370216, 4.895168],
    "timeZone": "Europe/Amsterdam",
    "id": 29
  },
  {
    "region": "德國/柏林",
    "latlng": [52.520008, 13.404954],
    "timeZone": "Europe/Berlin",
    "id": 30
  },
  {
    "region": "瑞士/蘇黎世",
    "latlng": [47.376888, 8.541694],
    "timeZone": "Europe/Zurich",
    "id": 31
  },
  {
    "region": "匈牙利/布達佩斯",
    "latlng": [47.497913, 19.040236],
    "timeZone": "Europe/Budapest",
    "id": 32
  },
  {
    "region": "奧地利/維也納",
    "latlng": [48.208176, 16.373819],
    "timeZone": "Europe/Vienna",
    "id": 33
  },
  {
    "region": "捷克共和國/布拉格",
    "latlng": [50.075539, 14.4378],
    "timeZone": "Europe/Prague",
    "id": 34
  },
  {
    "region": "波蘭/華沙",
    "latlng": [52.229675, 21.01223],
    "timeZone": "Europe/Warsaw",
    "id": 35
  },
  {
    "region": "摩洛哥/卡薩布蘭卡",
    "latlng": [33.573109, -7.589843],
    "timeZone": "Africa/Casablanca",
    "id": 36
  },
  {
    "region": "埃及/開羅",
    "latlng": [30.043489, 31.235291],
    "timeZone": "Africa/Cairo",
    "id": 37
  },
  {
    "region": "南非/約翰內斯堡",
    "latlng": [-26.20145, 28.04549],
    "timeZone": "Africa/Johannesburg",
    "id": 38
  },
  {
    "region": "加拿大/多倫多",
    "latlng": [43.653225, -79.383186],
    "timeZone": "America/Toronto",
    "id": 39
  },
  {
    "region": "亞利桑那州",
    "latlng": [34.048927, -111.093735],
    "timeZone": "US/Arizona",
    "id": 40
  },
  {
    "region": "阿拉斯加州",
    "latlng": [64.200844, -149.493668],
    "timeZone": "US/Alaska",
    "id": 41
  },
  {
    "region": "夏威夷",
    "latlng": [19.896767, -155.582779],
    "timeZone": "US/Hawaii",
    "id": 42
  },
  {
    "region": "墨西哥",
    "latlng": [23.634501, -102.552788],
    "timeZone": "America/Mexico_City",
    "id": 43
  },
  {
    "region": "巴西/聖保羅",
    "latlng": [-23.55052, -46.633308],
    "timeZone": "America/Sao_Paulo",
    "id": 44
  },
  {
    "region": "阿根廷/布宜諾斯艾利斯",
    "latlng": [-34.603683, -58.381557],
    "timeZone": "America/Buenos_Aires",
    "id": 45
  }
]
