dataSetVersion = "2023-09-03"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Season",
    key: "season",
    tooltip: "Check this to restrict to certain seasons/contestants.",
    checked: false,
    sub: [
	  { name: "Season 1 Finalists", key: "S1" },
      { name: "Season 2 Finalists", key: "S2" },
      { name: "Season 3 Finalists", key: "S3" },
      { name: "Season 4 Finalists", key: "S4" },
      { name: "Season 4 Contestants (Non-Finalists)", key: "S4all" }
    ]
  },
	{
    name: "Filter by Voice Type",
    key: "type",
    tooltip: "Check this to restrict to singers of a certain voice type/music background.",
    checked: false,
    sub: [ 
      { name: "Classical (성악가)", key: "classical" }, 
      { name: "Musical actor (뮤지컬배우)", key: "musical" }, 
      { name: "Sorikkun (소리꾼)", key: "gugak" }, 
      { name: "Rock/Pop (로커/팝 보컬)", key: "rockpop" }
    ]
  },
{
    name: "Filter by Vocal Range",
    key: "range",
    tooltip: "Check this to restrict to singers of a certain vocal range.",
    checked: false,
    sub: [ 
      { name: "Bass (베이스)", key: "bass" }, 
      { name: "Bass Baritone (베이스 바리톤)", key: "bb" }, 
      { name: "Baritone (바리톤)", key: "baritone" }, 
      { name: "Tenor (테너)", key: "tenor" }, 
      { name: "Countertenor (카운터테너)", key: "counter" }
    ]
  },
];

dataSet[dataSetVersion].characterData = [
  {
    name: "고훈정 | Ko Hoonjeong",
    img: "PSAS LEFT.png",
    opts: {
      season: ["S1"],
      type: ["classical", "musical"],
      range: ["baritone"]
    }
  },
  {
    name: "김현수 | Kim Hyunsoo",
    img: "PSAS LEFT.png",
    opts: {
      season: ["S1"],
      type: ["classical"],
      range: ["tenor"]
    }
  },
  {
    name: "손태진 | Son Taejin",
    img: "PSAS LEFT.png",
    opts: {
     season: ["S1"],
      type: ["classical"],
      range: ["bb"]
    }
  },
  {
    name: "이벼리",
    img: "PSAS LEFT.png",
    opts: {
     season: ["S1"],
      type: ["classical"],
      range: ["tenor"]
    },
  },
	{
    name: "백인태 | Paek Intae",
    img: "PSAS LEFT.png",
    opts: {
season: ["S1"],
      type: ["classical"],
      range: ["tenor"]    
    }
  },
  {
    name: "유슬기 | Yoo Seulgi",
    img: "PSAS LEFT.png",
    opts: {
season: ["S1"],
      type: ["classical"],
      range: ["tenor"]    
    }
  },
  {
    name: "Yurina Hase",
    img: "PSAS LEFT.png",
    opts: {
      season: ["S1"]
    }
  },
  {
    name: "Azumi Asakura",
    img: "PSAS LEFT.png",
    opts: {
      season: ["S1"]
    },
  },
	{
    name: "Eriko Nakamura",
    img: "PSAS LEFT.jpg",
    opts: {
      season: ["S1"]
    }
  },
  {
    name: "Asami Imai",
    img: "PSAS LEFT.jpg",
    opts: {
      season: ["S1"]
    }
  },
  {
    name: "Yurina Hase",
    img: "PSAS LEFT.jpg",
    opts: {
      season: ["S1"]
    }
  },
  {
    name: "Azumi 12Asakura",
    img: "PSAS LEFT.jpg",
    opts: {
      season: ["S1"]
    },
  },
	{
    name: "Eriko Nakamura",
    img: "PSAS LEFT.jpg",
    opts: {
      season: ["S1"]
    }
  },
  {
    name: "Asami Imai",
    img: "PSAS LEFT.jpg",
    opts: {
      season: ["S1"]
    }
  },
  {
    name: "Yurina Hase",
    img: "PSAS LEFT.jpg",
    opts: {
      season: ["S1"]
    }
  },
  {
    name: "Azumi Asakura",
    img: "PSAS LEFT.jpg",
    opts: {
      season: ["S1"]
    },
  },
	{
    name: "Eriko Nakamura",
    img: "PSAS LEFT.jpg",
    opts: {
      season: ["S1"]
    }
  },
  {
    name: "Asami Imai",
    img: "PSAS LEFT.jpg",
    opts: {
      season: ["S1"]
    }
  },
  {
    name: "Yurina Hase",
    img: "PSAS LEFT.jpg",
    opts: {
      season: ["S1"]
    }
  },
  {
    name: "Azumi Asakura",
    img: "PSAS LEFT.jpg",
    opts: {
      season: ["S1"]
    },
  },
	{
    name: "Eriko Nakamura",
    img: "PSAS LEFT.jpg",
    opts: {
      season: ["S1"]
    }
  },
  {
    name: "Asami Imai",
    img: "PSAS LEFT.jpg",
    opts: {
      season: ["S1"]
    }
  },
  {
    name: "Yurina Hase",
    img: "PSAS LEFT.jpg",
    opts: {
      season: ["S1"]
    }
  },
  {
    name: "Azumi24 Asakura",
    img: "PSAS LEFT.jpg",
    opts: {
      season: ["S1"]
    },
  },
	{
    name: "Eriko Nakamura",
    img: "PSAS LEFT.jpg",
    opts: {
      season: ["S1"]
    }
  },
  {
    name: "Asami Imai",
    img: "PSAS LEFT.jpg",
    opts: {
      season: ["S1"]
    }
  },
  {
    name: "Yurina Hase",
    img: "PSAS LEFT.jpg",
    opts: {
      season: ["S1"]
    }
  },
  {
    name: "Azumi Asakura",
    img: "PSAS LEFT.jpg",
    opts: {
      season: ["S1"]
    },
  },
	{
    name: "Eriko Nakamura",
    img: "PSAS LEFT.jpg",
    opts: {
      season: ["S1"]
    }
  },
  {
    name: "Asami Imai",
    img: "PSAS LEFT.jpg",
    opts: {
      season: ["S1"]
    }
  },
  {
    name: "Yurina Hase",
    img: "PSAS LEFT.jpg",
    opts: {
      season: ["S1"]
    }
  },
  {
    name: "Azumi Asakura",
    img: "PSAS LEFT.jpg",
    opts: {
      season: ["S1"]
    },
  },
	{
    name: "Eriko Nakamura",
    img: "PSAS LEFT.jpg",
    opts: {
      season: ["S1"]
    }
  },
  {
    name: "Asami Imai",
    img: "PSAS LEFT.jpg",
    opts: {
      season: ["S1"]
    }
  },
  {
    name: "Yurina Hase",
    img: "PSAS LEFT.jpg",
    opts: {
      season: ["S1"]
    }
  },
  {
    name: "Azumi 36Asakura",
    img: "PSAS LEFT.jpg",
    opts: {
      season: ["S1"]
    },
  },
	{
    name: "Eriko Nakamura",
    img: "PSAS LEFT.jpg",
    opts: {
      season: ["S1"]
    }
  },
  {
    name: "Asami Imai",
    img: "PSAS LEFT.jpg",
    opts: {
      season: ["S1"]
    }
  },
  {
    name: "Yurina Hase",
    img: "PSAS LEFT.jpg",
    opts: {
      season: ["S1"]
    }
  },
  {
    name: "Azumi Asakura",
    img: "PSAS LEFT.jpg",
    opts: {
      season: ["S1"]
    },
  },
	{
    name: "Eriko Nakamura",
    img: "PSAS LEFT.jpg",
    opts: {
      season: ["S1"]
    }
  },
  {
    name: "Asami Imai",
    img: "PSAS LEFT.jpg",
    opts: {
      season: ["S1"]
    }
  },
  {
    name: "Yurina Hase",
    img: "PSAS LEFT.jpg",
    opts: {
      season: ["S1"]
    }
  },
  {
    name: "Azumi Asakura",
    img: "PSAS LEFT.jpg",
    opts: {
      season: ["S1"]
    },
  },
	{
    name: "Eriko Nakamura",
    img: "PSAS LEFT.jpg",
    opts: {
      season: ["S1"]
    }
  },
  {
    name: "Asami Imai",
    img: "PSAS LEFT.jpg",
    opts: {
      season: ["S1"]
    }
  },
  {
    name: "Yurina Hase",
    img: "PSAS LEFT.jpg",
    opts: {
      season: ["S1"]
    }
  },
  {
    name: "Azumi 48Asakura",
    img: "PSAS LEFT.jpg",
    opts: {
      season: ["S1"]
    },
  },
	{
    name: "Eriko Nakamura",
    img: "PSAS LEFT.jpg",
    opts: {
      season: ["S1"]
    }
  },
  {
    name: "Asami Imai",
    img: "PSAS LEFT.jpg",
    opts: {
      season: ["S1"]
    }
  },
  {
    name: "Yurina Hase",
    img: "PSAS LEFT.jpg",
    opts: {
      season: ["S1"]
    }
  },
  {
    name: "Azumi Asakura",
    img: "PSAS LEFT.jpg",
    opts: {
      season: ["S1"]
    },
  },
	{
    name: "Eriko Nakamura",
    img: "PSAS LEFT.jpg",
    opts: {
      season: ["S1"]
    }
  },
  {
    name: "Asami Imai",
    img: "PSAS LEFT.jpg",
    opts: {
      season: ["S1"]
    }
  },
  {
    name: "Yurina Hase",
    img: "PSAS LEFT.jpg",
    opts: {
      season: ["S1"]
    }
  },
  {
    name: "Azumi Asakura",
    img: "PSAS LEFT.jpg",
    opts: {
      season: ["S1"]
    },
  },
	{
    name: "Eriko Nakamura",
    img: "PSAS LEFT.jpg",
    opts: {
      season: ["S1"]
    }
  },
  {
    name: "Asami Imai",
    img: "PSAS LEFT.jpg",
    opts: {
      season: ["S1"]
    }
  },
  {
    name: "Yurina Hase",
    img: "PSAS LEFT.jpg",
    opts: {
      season: ["S1"]
    }
  },
  {
    name: "Azumi Asakura",
    img: "PSAS LEFT.jpg",
    opts: {
      season: ["S1"]
    },
  },
	{
    name: "Eriko Nakamura",
    img: "PSAS LEFT.jpg",
    opts: {
      season: ["S1"]
    }
  },
  {
    name: "Asami Imai",
    img: "PSAS LEFT.jpg",
    opts: {
      season: ["S1"]
    }
  },
  {
    name: "Yurina Hase",
    img: "PSAS LEFT.jpg",
    opts: {
      season: ["S1"]
    }
  },
  {
    name: "Azumi Asakura",
    img: "PSAS LEFT.jpg",
    opts: {
      season: ["S1"]
    },
  },

];
