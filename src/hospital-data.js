const tel = "電話";
const contact = "窓口";
const internet = "ネット";
const webReserve = "WEB予約抽選フォーム";
const callCenter = "コールセンター";

const selfReserve = "病院予約";
const cityReserve = "市予約";
const selfAndCityReserve = "病院or市予約";

const selfReserveHospitals = [
  {
    hospitalName: "岡内科クリニック",
    address: {
      name: "加古川町溝ノ口728",
      url: "https://goo.gl/maps/iSt5sXcCicGiYjyDA",
    },
    reserveType: selfReserve,
    reserveStart: "6/14",
    vaccineStart: "6/29",
    reserveWay: tel + "," + contact,
    homePageUrl:
      "https://www.kakogawa.hyogo.med.or.jp/medical/%E5%B2%A1%E5%86%85%E7%A7%91%E3%82%AF%E3%83%AA%E3%83%8B%E3%83%83%E3%82%AF",
    tel: "079-454-7002",
  },
  {
    hospitalName: "奥窪医院",
    address: {
      name: "加古川町本町27-3",
      url: "https://goo.gl/maps/aoFd1x44UL871VEz9",
    },
    reserveType: selfReserve,
    reserveStart: "6/12",
    vaccineStart: "6/23",
    reserveWay: contact,
    homePageUrl:
      "https://www.kakogawa.hyogo.med.or.jp/medical/%e5%a5%a5%e7%aa%aa%e5%8c%bb%e9%99%a2",
    tel: "079-422-3208",
  },
  {
    hospitalName: "住吉医院",
    address: {
      name: "加古川町寺家町40",
      url: "https://goo.gl/maps/ZVFazeeUKgSUECBTA",
    },
    reserveType: selfReserve,
    reserveStart: "6/11",
    vaccineStart: "6/21",
    reserveWay: tel + "," + contact,
    homePageUrl:
      "https://www.kakogawa.hyogo.med.or.jp/medical/%E4%BD%8F%E5%90%89%E5%8C%BB%E9%99%A2",
    tel: "079-420-7333",
  },
  {
    hospitalName: "順心リハビリテーション病院",
    address: {
      name: "神野町石守1632",
      url: "https://goo.gl/maps/2qWEH7w1UpuPM9Ms7",
    },
    reserveType: selfReserve,
    reserveStart: "6/14",
    vaccineStart: "6/22",
    reserveWay: tel + "," + contact,
    homePageUrl: "https://www.junshin.or.jp/kousei.html",
    tel: "079-438-2200",
  },
  {
    hospitalName: "大西医院",
    address: {
      name: "新神野5-5-6",
      url: "https://goo.gl/maps/3VMvoXSFh7ZsFeaL7",
    },
    reserveType: selfReserve,
    reserveStart: "6/12",
    vaccineStart: "6/21",
    reserveWay: "定期診療日",
    homePageUrl:
      "https://www.kakogawa.hyogo.med.or.jp/medical/%E5%A4%A7%E8%A5%BF%E5%8C%BB%E9%99%A2-s",
    tel: "079-438-5800",
  },
  {
    hospitalName: "きたうらクリニック",
    address: {
      name: "野口町野口220-1",
      url: "https://goo.gl/maps/oDbj4JLkE5GLBzsd7",
    },
    reserveType: selfReserve,
    reserveStart: "6/11",
    vaccineStart: "6/21",
    reserveWay: contact,
    homePageUrl: "https://kitauraclinic.jp/",
    tel: "079-453-5888",
  },
  {
    hospitalName: "中岡クリニック",
    address: {
      name: "野口町良野375-5",
      url: "https://goo.gl/maps/mvjQRK7P7GsSJUe4A",
    },
    reserveType: selfReserve,
    reserveStart: "6/14",
    vaccineStart: "6/21",
    reserveWay: internet + "," + contact,
    homePageUrl: "https://nakaoka-clinic.jp/",
    tel: "",
  },
  {
    hospitalName: "川西内科医院",
    address: {
      name: "平岡町二俣761-1",
      url: "https://goo.gl/maps/RRvjRaMvmcNy3cey6",
    },
    reserveType: selfReserve,
    reserveStart: "6/12",
    vaccineStart: "6/21",
    reserveWay: tel + "," + contact,
    homePageUrl:
      "https://www.kakogawa.hyogo.med.or.jp/medical/%E5%B7%9D%E8%A5%BF%E5%86%85%E7%A7%91%E5%8C%BB%E9%99%A2",
    tel: "079-435-1600",
  },
  {
    hospitalName: "つむら循環器内科クリニック",
    address: {
      name: "平岡町新在家2-268-1",
      url: "https://goo.gl/maps/Meghz5keqvDXKxmj6",
    },
    reserveType: selfReserve,
    reserveStart: "6/12",
    vaccineStart: "6/21",
    reserveWay: tel + "," + contact,
    homePageUrl: "http://www.tsumuraclinic.com/",
    tel: "090-7885-1400",
  },
  {
    hospitalName: "二宮内科クリニック",
    address: {
      name: "新神野5-5-6",
      url: "https://goo.gl/maps/jyU1m7dMgTetp3vB8",
    },
    reserveType: selfReserve,
    reserveStart: "6/12",
    vaccineStart: "6/21",
    reserveWay: tel + "," + contact,
    homePageUrl: "http://www.ninomiya-naika-cl.jp/",
    tel: "079-456-0311",
  },
  {
    hospitalName: "こだま医院",
    address: {
      name: "尾上町今福467-2",
      url: "https://goo.gl/maps/HUSpr2yFQko4L8Cz5",
    },
    reserveType: selfReserve,
    reserveStart: "6/12",
    vaccineStart: "6/22",
    reserveWay: tel,
    homePageUrl:
      "https://www.kakogawa.hyogo.med.or.jp/medical/%E3%81%93%E3%81%A0%E3%81%BE%E5%8C%BB%E9%99%A2",
    tel: "080-7698-8318",
  },
  {
    hospitalName: "山崎記念クリニック",
    address: {
      name: "上荘町井ノ口390-2",
      url: "https://goo.gl/maps/G8FRRbWf7vES5YnL6",
    },
    reserveType: selfReserve,
    reserveStart: "6/12",
    vaccineStart: "6/21",
    reserveWay: tel + "," + contact,
    homePageUrl:
      "https://www.kakogawa.hyogo.med.or.jp/medical/%E5%B1%B1%EF%A8%91%E8%A8%98%E5%BF%B5%E3%82%AF%E3%83%AA%E3%83%8B%E3%83%83%E3%82%AF",
    tel: "079-428-0025",
  },
  {
    hospitalName: "伴内科医院",
    address: {
      name: "米田町平津446-10",
      url: "https://goo.gl/maps/LMVMPUatAMEpmArA8",
    },
    reserveType: selfReserve,
    reserveStart: "6/14",
    vaccineStart: "6/21",
    reserveWay: tel,
    homePageUrl: "https://ban-kids.com/",
    tel: "079-434-6711",
  },
  {
    hospitalName: "平井内科クリニック",
    address: {
      name: "志方町上冨木481-1",
      url: "https://goo.gl/maps/9fX66Rtdaik9ShQC8",
    },
    reserveType: selfReserve,
    reserveStart: "6/14",
    vaccineStart: "6/21",
    reserveWay: contact,
    homePageUrl: "http://hirai-naika.jp/",
    tel: "079-452-5811",
  },
  {
    hospitalName: "加古川ともながクリニック",
    address: {
      name: "加古川町寺家町47-1 ファーミンインテリジェントビル4階",
      url: "https://goo.gl/maps/mkcftFffCcVgXZC39",
    },
    reserveType: selfReserve,
    reserveStart: "6/14",
    vaccineStart: "6/22",
    reserveWay: tel + "," + internet,
    homePageUrl: "http://kakogawa-tomonaga-clinic.net/",
    tel: "079-456-1388",
  },
  {
    hospitalName: "ファミリークリニック加古川",
    address: {
      name: "加古川町北在家2447",
      url: "https://goo.gl/maps/43DyrQEvajoMmkew8",
    },
    reserveType: selfReserve,
    reserveStart: "6/12",
    vaccineStart: "6/29",
    reserveWay: tel + "," + contact,
    homePageUrl: "https://www.familyclinic-kakogawa.jp/",
    tel: "079-427-2200",
  },
  {
    hospitalName: "もとやまペインクリニック・小児科",
    address: {
      name: "加古川町粟津32-1",
      url: "https://goo.gl/maps/wdgUcWnA5SrfHBKU9",
    },
    reserveType: selfReserve,
    reserveStart: "6/11",
    vaccineStart: "6/28",
    reserveWay: tel + "," + contact,
    homePageUrl: "https://motoyama-cl.jp/",
    tel: "079-422-0037",
  },
  {
    hospitalName: "あきもとクリニック",
    address: {
      name: "野口町北野1139-4",
      url: "https://goo.gl/maps/v7mezzQznEhKfDjFA",
    },
    reserveType: selfReserve,
    reserveStart: "6/11",
    vaccineStart: "6/21",
    reserveWay: tel + "," + contact,
    homePageUrl:
      "https://www.kakogawa.hyogo.med.or.jp/medical/%E3%81%82%E3%81%8D%E3%82%82%E3%81%A8%E3%82%AF%E3%83%AA%E3%83%8B%E3%83%83%E3%82%AF",
    tel: "079-426-2252",
  },
  {
    hospitalName: "河合外科胃腸科",
    address: {
      name: "平岡町中野775-1",
      url: "https://goo.gl/maps/xytC5a9SUtdEXgWKA",
    },
    reserveType: selfReserve,
    reserveStart: "6/11",
    vaccineStart: "6/28",
    reserveWay: contact,
    homePageUrl: "http://www.kawai-geka.jp/",
    tel: "079-435-8800",
  },
  {
    hospitalName: "塩津外科胃腸科",
    address: {
      name: "平岡町土山字東山-1-20",
      url: "https://goo.gl/maps/f8AGT52XoWm79ckc8",
    },
    reserveType: selfReserve,
    reserveStart: "6/11",
    vaccineStart: "6/21",
    reserveWay: tel + "," + contact,
    homePageUrl:
      "https://www.kakogawa.hyogo.med.or.jp/medical/%E5%A1%A9%E6%B4%A5%E5%A4%96%E7%A7%91%E8%83%83%E8%85%B8%E7%A7%91",
    tel: "078-942-0333",
  },
  {
    hospitalName: "島内科クリニック",
    address: {
      name: "平岡町山之上228-2",
      url: "https://goo.gl/maps/WkeLcTpDrecPaRrMA",
    },
    reserveType: selfReserve,
    reserveStart: "6/14",
    vaccineStart: "6/23",
    reserveWay: tel + "," + contact,
    homePageUrl: "http://www.shima-naika.com/",
    tel: "079-441-1557",
  },
  {
    hospitalName: "なかむら内科・循環器内科医院",
    address: {
      name: "平岡町新在家1386-1",
      url: "https://goo.gl/maps/Fdj8EUSMB46F9SvD6",
    },
    reserveType: selfReserve,
    reserveStart: "6/11",
    vaccineStart: "6/21",
    reserveWay: tel + "," + contact,
    homePageUrl: "http://www.nakamura-cl.info/",
    tel: "079-426-8229",
  },
  {
    hospitalName: "若藤クリニック",
    address: {
      name: "平岡町山之上662-2",
      url: "https://goo.gl/maps/9ZLa4ZZZxAURu4rD9",
    },
    reserveType: selfReserve,
    reserveStart: "6/14",
    vaccineStart: "7/3",
    reserveWay: tel + "," + contact,
    homePageUrl:
      "https://www.kakogawa.hyogo.med.or.jp/medical/%E8%8B%A5%E8%97%A4%E3%82%AF%E3%83%AA%E3%83%8B%E3%83%83%E3%82%AF",
    tel: "079-425-8615",
  },
  {
    hospitalName: "医療法人社団仙齢会はりまクリニック",
    address: {
      name: "尾上町池田621-1",
      url: "https://goo.gl/maps/kpHZpL8m6C4w1bbv9",
    },
    reserveType: selfReserve,
    reserveStart: "6/19のみ",
    vaccineStart: "6/28",
    reserveWay: "予約専用窓口",
    homePageUrl: "https://harima-cl.senreikai.org/",
    tel: "",
  },
  {
    hospitalName: "加古川磯病院",
    address: {
      name: "八幡町下村1353",
      url: "https://goo.gl/maps/NYr5DfHscJ1QpoXj8",
    },
    reserveType: selfReserve,
    reserveStart: "6/11",
    vaccineStart: "6/21",
    reserveWay: contact,
    homePageUrl: "http://isohosp.com/",
    tel: "",
  },
  {
    hospitalName: "長谷川医院",
    address: {
      name: "八幡町下村1353",
      url: "https://goo.gl/maps/QZEMm7k2k2QS5ADg6",
    },
    reserveType: selfReserve,
    reserveStart: "6/15",
    vaccineStart: "6/28",
    reserveWay: tel + "," + contact,
    homePageUrl:
      "https://www.kakogawa.hyogo.med.or.jp/medical/%E9%95%B7%E8%B0%B7%E5%B7%9D%E5%8C%BB%E9%99%A2",
    tel: "079-432-7088",
  },
  {
    hospitalName: "フェニックス加古川記念病院",
    address: {
      name: "米田町平津384-1",
      url: "https://goo.gl/maps/vJorZxyfJ4zUefaP6",
    },
    reserveType: selfReserve,
    reserveStart: "6/12",
    vaccineStart: "6/28",
    reserveWay: tel + "," + contact + "," + internet,
    homePageUrl: "http://www.ikkoukai.jp/kakogawa/444.html",
    tel: "079-432-7088",
  },
  {
    hospitalName: "笠井医院",
    address: {
      name: "志方町志方町1482",
      url: "https://goo.gl/maps/ycMHHN4M8Yudi1jq9",
    },
    reserveType: selfReserve,
    reserveStart: "6/11",
    vaccineStart: "6/28",
    reserveWay: contact,
    homePageUrl:
      "https://www.kakogawa.hyogo.med.or.jp/medical/%E7%AC%A0%E4%BA%95%E5%8C%BB%E9%99%A2",
    tel: "",
  },
];

const cityReserveHospitals = [
  {
    hospitalName: "加古川皮膚科クリニック",
    address: {
      name: "加古川町粟津218-1",
      url: "https://goo.gl/maps/JBqX3SufknkH6Z7h7",
    },
    reserveType: cityReserve,
    reserveStart: "6/14",
    vaccineStart: "6/28",
    reserveWay: webReserve + "," + callCenter,
    homePageUrl: "https://kakogawa-hifuka.com/",
    tel: "",
  },
  {
    hospitalName: "友藤内科医院",
    address: {
      name: "加古川町平野537-1",
      url: "https://goo.gl/maps/a4MF8MrBANp7SMHBA",
    },
    reserveType: cityReserve,
    reserveStart: "6/14",
    vaccineStart: "6/29",
    reserveWay: webReserve + "," + callCenter,
    homePageUrl:
      "https://www.kakogawa.hyogo.med.or.jp/medical/%E5%8F%8B%E8%97%A4%E5%86%85%E7%A7%91%E5%8C%BB%E9%99%A2",
    tel: "",
  },
  {
    hospitalName: "松本病院",
    address: {
      name: "加古川町粟津232-1",
      url: "https://goo.gl/maps/uX5huJvzUJ4cURFw6",
    },
    reserveType: cityReserve,
    reserveStart: "6/14",
    vaccineStart: "6/28",
    reserveWay: webReserve + "," + callCenter,
    homePageUrl: "http://www.matsumoto-hosp.or.jp/",
    tel: "",
  },
  {
    hospitalName: "甲南加古川病院",
    address: {
      name: "神野町西条1545-1",
      url: "https://goo.gl/maps/xpK58PZipszs9qYm9",
    },
    reserveType: cityReserve,
    reserveStart: "6/14",
    vaccineStart: "6/29",
    reserveWay: webReserve + "," + callCenter,
    homePageUrl: "http://www.kohnan.or.jp/kakogawa/",
    tel: "",
  },
  {
    hospitalName: "西村医院",
    address: {
      name: "野口町水足1850-1",
      url: "https://goo.gl/maps/Y9sCuRduw8AxMSRi9",
    },
    reserveType: cityReserve,
    reserveStart: "6/14",
    vaccineStart: "6/28",
    reserveWay: webReserve + "," + callCenter,
    homePageUrl: "http://www.nishimura-clinic.jp/",
    tel: "",
  },
  {
    hospitalName: "たずみ病院",
    address: {
      name: "尾上町口里790-66",
      url: "https://goo.gl/maps/55P9xv7FUgxdVtk16",
    },
    reserveType: cityReserve,
    reserveStart: "6/14",
    vaccineStart: "6/28",
    reserveWay: webReserve + "," + callCenter,
    homePageUrl: "http://www.tazumi-hp.com/",
    tel: "",
  },
  {
    hospitalName: "加古川ともながクリニック",
    address: {
      name: "加古川町寺家町47-1 ファーミンインテリジェントビル4階",
      url: "https://goo.gl/maps/mkcftFffCcVgXZC39",
    },
    reserveType: cityReserve,
    reserveStart: "6/14",
    vaccineStart: "6/28",
    reserveWay: webReserve + "," + callCenter,
    homePageUrl: "http://kakogawa-tomonaga-clinic.net/",
    tel: "",
  },
  {
    hospitalName: "ファミリークリニック加古川",
    address: {
      name: "加古川町北在家2447",
      url: "https://goo.gl/maps/43DyrQEvajoMmkew8",
    },
    reserveType: cityReserve,
    reserveStart: "6/14",
    vaccineStart: "6/29",
    reserveWay: webReserve + "," + callCenter,
    homePageUrl: "https://www.familyclinic-kakogawa.jp/",
    tel: "079-427-2200",
  },
  {
    hospitalName: "もとやまペインクリニック・小児科",
    address: {
      name: "加古川町粟津32-1",
      url: "https://goo.gl/maps/wdgUcWnA5SrfHBKU9",
    },
    reserveType: cityReserve,
    reserveStart: "6/14",
    vaccineStart: "6/28",
    reserveWay: webReserve + "," + callCenter,
    homePageUrl: "https://motoyama-cl.jp/",
    tel: "079-422-0037",
  },
  {
    hospitalName: "あきもとクリニック",
    address: {
      name: "野口町北野1139-4",
      url: "https://goo.gl/maps/v7mezzQznEhKfDjFA",
    },
    reserveType: cityReserve,
    reserveStart: "6/14",
    vaccineStart: "6/28",
    reserveWay: webReserve + "," + callCenter,
    homePageUrl:
      "https://www.kakogawa.hyogo.med.or.jp/medical/%E3%81%82%E3%81%8D%E3%82%82%E3%81%A8%E3%82%AF%E3%83%AA%E3%83%8B%E3%83%83%E3%82%AF",
    tel: "079-426-2252",
  },
  {
    hospitalName: "河合外科胃腸科",
    address: {
      name: "平岡町中野775-1",
      url: "https://goo.gl/maps/xytC5a9SUtdEXgWKA",
    },
    reserveType: cityReserve,
    reserveStart: "6/14",
    vaccineStart: "6/28",
    reserveWay: contact,
    reserveWay: webReserve + "," + callCenter,
    tel: "079-435-8800",
  },
  {
    hospitalName: "塩津外科胃腸科",
    address: {
      name: "平岡町土山字東山-1-20",
      url: "https://goo.gl/maps/f8AGT52XoWm79ckc8",
    },
    reserveType: cityReserve,
    reserveStart: "6/14",
    vaccineStart: "6/30",
    reserveWay: webReserve + "," + callCenter,
    homePageUrl:
      "https://www.kakogawa.hyogo.med.or.jp/medical/%E5%A1%A9%E6%B4%A5%E5%A4%96%E7%A7%91%E8%83%83%E8%85%B8%E7%A7%91",
    tel: "078-942-0333",
  },
  {
    hospitalName: "島内科クリニック",
    address: {
      name: "平岡町山之上228-2",
      url: "https://goo.gl/maps/WkeLcTpDrecPaRrMA",
    },
    reserveType: cityReserve,
    reserveStart: "6/14",
    vaccineStart: "6/30",
    reserveWay: webReserve + "," + callCenter,
    homePageUrl: "http://www.shima-naika.com/",
    tel: "079-441-1557",
  },
  {
    hospitalName: "なかむら内科・循環器内科医院",
    address: {
      name: "平岡町新在家1386-1",
      url: "https://goo.gl/maps/Fdj8EUSMB46F9SvD6",
    },
    reserveType: cityReserve,
    reserveStart: "6/14",
    vaccineStart: "6/28",
    reserveWay: webReserve + "," + callCenter,
    homePageUrl: "http://www.nakamura-cl.info/",
    tel: "079-426-8229",
  },
  {
    hospitalName: "若藤クリニック",
    address: {
      name: "平岡町山之上662-2",
      url: "https://goo.gl/maps/9ZLa4ZZZxAURu4rD9",
    },
    reserveType: cityReserve,
    reserveStart: "6/14",
    vaccineStart: "7/3",
    reserveWay: webReserve + "," + callCenter,
    homePageUrl:
      "https://www.kakogawa.hyogo.med.or.jp/medical/%E8%8B%A5%E8%97%A4%E3%82%AF%E3%83%AA%E3%83%8B%E3%83%83%E3%82%AF",
    tel: "079-425-8615",
  },
  {
    hospitalName: "医療法人社団仙齢会はりまクリニック",
    address: {
      name: "尾上町池田621-1",
      url: "https://goo.gl/maps/kpHZpL8m6C4w1bbv9",
    },
    reserveType: cityReserve,
    reserveStart: "6/14",
    vaccineStart: "6/28",
    reserveWay: webReserve + "," + callCenter,
    homePageUrl: "https://harima-cl.senreikai.org/",
    tel: "",
  },
  {
    hospitalName: "加古川磯病院",
    address: {
      name: "八幡町下村1353",
      url: "https://goo.gl/maps/NYr5DfHscJ1QpoXj8",
    },
    reserveType: cityReserve,
    reserveStart: "6/14",
    vaccineStart: "6/28",
    reserveWay: webReserve + "," + callCenter,
    homePageUrl: "http://isohosp.com/",
    tel: "",
  },
  {
    hospitalName: "長谷川医院",
    address: {
      name: "八幡町下村1353",
      url: "https://goo.gl/maps/QZEMm7k2k2QS5ADg6",
    },
    reserveType: cityReserve,
    reserveStart: "6/14",
    vaccineStart: "6/28",
    reserveWay: webReserve + "," + callCenter,
    homePageUrl:
      "https://www.kakogawa.hyogo.med.or.jp/medical/%E9%95%B7%E8%B0%B7%E5%B7%9D%E5%8C%BB%E9%99%A2",
    tel: "079-432-7088",
  },
  {
    hospitalName: "フェニックス加古川記念病院",
    address: {
      name: "米田町平津384-1",
      url: "https://goo.gl/maps/vJorZxyfJ4zUefaP6",
    },
    reserveType: cityReserve,
    reserveStart: "6/14",
    vaccineStart: "6/28",
    reserveWay: webReserve + "," + callCenter,
    homePageUrl: "http://www.ikkoukai.jp/kakogawa/444.html",
    tel: "079-432-7088",
  },
  {
    hospitalName: "笠井医院",
    address: {
      name: "志方町志方町1482",
      url: "https://goo.gl/maps/ycMHHN4M8Yudi1jq9",
    },
    reserveType: cityReserve,
    reserveStart: "6/14",
    vaccineStart: "6/28",
    reserveWay: webReserve + "," + callCenter,
    homePageUrl:
      "https://www.kakogawa.hyogo.med.or.jp/medical/%E7%AC%A0%E4%BA%95%E5%8C%BB%E9%99%A2",
    tel: "",
  },
];

export const hospitalDatas = selfReserveHospitals.concat(cityReserveHospitals);
// const hospitalDatas = selfReserveHospitals;
