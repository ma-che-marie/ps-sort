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
    name: "이벼리 | Lee Byeori",
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
    name: "곽동현 | Kwak Donghyun",
    img: "PSAS LEFT.png",
    opts: {
      season: ["S1"],
      type: ["rockpop"],
      range: ["tenor"]    
    }
  },
  {
    name: "박상돈 | Park Sangdon",
    img: "PSAS LEFT.png",
    opts: {
      season: ["S1"],
      type: ["classical"],
      range: ["baritone"]      },
  },
	{
    name: "권서겅 | Kwon Seokyung",
    img: "PSAS LEFT.jpg",
    opts: {
      season: ["S1"],
      type: ["classical"],
      range: ["bb"]    }
  },
  {
    name: "이동신 | Lee Dongshin",
    img: "PSAS LEFT.jpg",
    opts: {
      season: ["S1"],
      type: ["classical"],
      range: ["tenor"] 
    }
  },
  {
    name: "백형훈 | Baek Hyeonghun",
    img: "PSAS LEFT.jpg",
    opts: {
      season: ["S1"],
      type: ["musical"],
      range: ["tenor"]   
    }
  },
  {
    name: "고은성 | Ko Eunsung",
    img: "PSAS LEFT.jpg",
    opts: {
      season: ["S1"],
      type: ["musical"],
      range: ["tenor"]   
},
  },
	{
    name: "조민규 | Cho Mingyu",
    img: "PSAS LEFT.jpg",
    opts: {
      season: ["S2"],
      type: ["classical"],
      range: ["tenor"]     
    }
  },
  {
    name: "배두훈 | Bae Doohoon",
    img: "PSAS LEFT.jpg",
    opts: {
      season: ["S2"],
      type: ["musical"],
      range: ["tenor"]   
    }
  },
  {
    name: "강형호 | Kang Hyungho",
    img: "PSAS LEFT.jpg",
    opts: {
      season: ["S2"],
      type: ["rockpop"],
      range: ["tenor", "counter"]   
    }
  },
  {
    name: "고우림 | Ko Woorim",
    img: "PSAS LEFT.jpg",
    opts: {
      season: ["S2"],
      type: ["classical"],
      range: ["bass"]     
    },
  },
	{
    name: "김주택 | Kim Jootaek",
    img: "PSAS LEFT.jpg",
    opts: {
      season: ["S2"],
      type: ["classical"],
      range: ["baritone"]    
    }
  },
  {
    name: "정필립 | Jeong Phillip",
    img: "PSAS LEFT.jpg",
    opts: {
      season: ["S2"],
      type: ["classical"],
      range: ["tenor"]    
    }
  },
  {
    name: "박강현 | Park Kanghyun",
    img: "PSAS LEFT.jpg",
    opts: {
      season: ["S2"],
      type: ["musical"],
      range: ["tenor"]    
    }
  },
  {
    name: "한태인 | Han Taein",
    img: "PSAS LEFT.jpg",
    opts: {
      season: ["S2"],
      type: ["classical"],
      range: ["bass"]    
    },
  },
	{
    name: "조형균 | Zo Hyunggyun",
    img: "PSAS LEFT.jpg",
    opts: {
      season: ["S2"],
      type: ["musical"],
      range: ["baritone"]    
    }
  },
  {
    name: "이충주 | Lee Choongjoo",
    img: "PSAS LEFT.jpg",
    opts: {
      season: ["S2"],
      type: ["classical", "musical"],
      range: ["baritone"]    
    }
  },
  {
    name: "김동현 | Kim Donghyun",
    img: "PSAS LEFT.jpg",
    opts: {
      season: ["S2"],
      type: ["classical"],
      range: ["bb"]    
    }
  },
  {
    name: "안세권 | Ahn Sekwon",
    img: "PSAS LEFT.jpg",
    opts: {
      season: ["S2"],
      type: ["classical"],
      range: ["tenor"]    
    },
  },
	{
    name: "유채훈 | You Chaehoon",
    img: "PSAS LEFT.jpg",
    opts: {
      season: ["S3"],
      type: ["classical"],
      range: ["tenor"]      
    }
  },
  {
    name: "최성훈 | Choi Sunghoon",
    img: "PSAS LEFT.jpg",
    opts: {
      season: ["S3"],
      type: ["classical"],
      range: ["counter"]    
    }
  },
  {
    name: "정민성 | Jeong Minseong",
    img: "PSAS LEFT.jpg",
    opts: {
      season: ["S3"],
      type: ["classical"],
      range: ["baritone"]    
    }
  },
  {
    name: "박기훈 | Park Kihun",
    img: "PSAS LEFT.jpg",
    opts: {
      season: ["S3"],
      type: ["classical"],
      range: ["tenor"]    
    },
  },
	{
    name: "김바울 | Kim Paul",
    img: "PSAS LEFT.jpg",
    opts: {
      season: ["S3"],
      type: ["classical"],
      range: ["bass"]    
    }
  },
  {
    name: "존노 | John Noh",
    img: "PSAS LEFT.jpg",
    opts: {
      season: ["S3"],
      type: ["classical"],
      range: ["tenor"]    
    }
  },
  {
    name: "고영열 | Ko Yeongyeol",
    img: "PSAS LEFT.jpg",
    opts: {
      season: ["S3"],
      type: ["gugak"],
      range: ["tenor"]    
    }
  },
  {
    name: "황건하 | Hwang Gunha",
    img: "PSAS LEFT.jpg",
    opts: {
      season: ["S3"],
      type: ["musical"],
      range: ["baritone"]    
    },
  },
	{
    name: "길병민 | Gil Byeongmin",
    img: "PSAS LEFT.jpg",
    opts: {
      season: ["S3"],
      type: ["classical"],
      range: ["bb"]    
    }
  },
  {
    name: "김성식 | Kim Sungsik",
    img: "PSAS LEFT.jpg",
    opts: {
      season: ["S3"],
      type: ["musical"],
      range: ["baritone"]    
    }
  },
  {
    name: "김민석 | Kim Minseok",
    img: "PSAS LEFT.jpg",
    opts: {
      season: ["S3"],
      type: ["classical"],
      range: ["tenor"]    
    }
  },
  {
    name: "박현수 | Park Hyunsoo",
    img: "PSAS LEFT.jpg",
    opts: {
      season: ["S3"],
      type: ["classical"],
      range: ["baritone"]    
    },
  },
	{
    name: "김지훈 | Kim Jihoon",
    img: "PSAS LEFT.jpg",
    opts: {
      season: ["S4"],
      type: ["classical", "musical"],
      range: ["baritone"]    
    }
  },
  {
    name: "진원 | Jin Won",
    img: "PSAS LEFT.jpg",
    opts: {
      season: ["S4"],
      type: ["classical"],
      range: ["tenor"]    
    }
  },
  {
    name: "정승원 | Jung Seungwon",
    img: "PSAS LEFT.jpg",
    opts: {
      season: ["S4"],
      type: ["classical"],
      range: ["tenor"]    
    }
  },
  {
    name: "노현우 | Roh Hyunwoo",
    img: "PSAS LEFT.jpg",
    opts: {
      season: ["S4"],
      type: ["classical"],
      range: ["baritone"]    
    },
  },
	{
    name: "오스틴킴 | Austin Kim",
    img: "PSAS LEFT.jpg",
    opts: {
      season: ["S4"],
      type: ["classical"],
      range: ["counter"]    
    }
  },
  {
    name: "이동규 | Lee Dongqyu",
    img: "PSAS LEFT.jpg",
    opts: {
      season: ["S4"],
      type: ["classical"],
      range: ["counter"]    
    }
  },
  {
    name: "서영택 | Seo Yeongtaek",
    img: "PSAS LEFT.jpg",
    opts: {
      season: ["S4"],
      type: ["classical"],
      range: ["tenor"]    
    }
  },
  {
    name: "김성현 | Kim Seonghyeon",
    img: "PSAS LEFT.jpg",
    opts: {
      season: ["S4"],
      type: ["classical"],
      range: ["tenor"]    
    },
  },
	{
    name: "임규형 | Lim Kyuhyung",
    img: "PSAS LEFT.jpg",
    opts: {
      season: ["S4"],
      type: ["musical"],
      range: ["tenor"]    
    }
  },
  {
    name: "조진호 | Jo Jinho",
    img: "PSAS LEFT.jpg",
    opts: {
      season: ["S4"],
      type: ["rockpop"],
      range: ["tenor"]    
    }
  },
  {
    name: "김수인 | Kim Suin",
    img: "PSAS LEFT.jpg",
    opts: {
      season: ["S4"],
      type: ["gugak"],
      range: ["tenor"]    
    }
  },
  {
    name: "이승민 | Lee Seungmin",
    img: "PSAS LEFT.jpg",
    opts: {
      season: ["S4"],
      type: ["classical"],
      range: ["baritone"]    
    },
  },
	{
    name: "박준범 | Park Junbeom",
    img: "PSAS LEFT.jpg",
    opts: {
      season: ["S4all"],
      type: ["classical"],
      range: ["baritone"]    
    }
  },
  {
    name: "김우성 | Kim Wooseong",
    img: "PSAS LEFT.jpg",
    opts: {
      season: ["S4all"],
      type: ["musical"],
      range: ["baritone"]    
    }
  },
  {
    name: "이해준 | Lee Haejun",
    img: "PSAS LEFT.jpg",
    opts: {
      season: ["S4all"],
      type: ["musical"],
      range: ["tenor"]    
    }
  },
  {
    name: "이기현 | Lee Kihyun",
    img: "PSAS LEFT.jpg",
    opts: {
      season: ["S4all"],
      type: ["classical"],
      range: ["bass"]    
    },
  },
	{
    name: "김광진 | Kim Kwangjin",
    img: "PSAS LEFT.jpg",
    opts: {
      season: ["S4all"],
      type: ["rockpop"],
      range: ["tenor"]    
    }
  },
  {
    name: "림팍 | Rim Park",
    img: "PSAS LEFT.jpg",
    opts: {
      season: ["S4all"],
      type: ["classical"],
      range: ["tenor"]    
    }
  },
  {
    name: "신은총 | Shin Eunchong",
    img: "PSAS LEFT.jpg",
    opts: {
      season: ["S4all"],
      type: ["musical"],
      range: ["tenor"]    
    }
  },
  {
    name: "안민수 | Ahn Minsoo",
    img: "PSAS LEFT.jpg",
    opts: {
      season: ["S4all"],
      type: ["classical"],
      range: ["bb"]    
    },
  },
	{
    name: "이한범 | Lee Hanbeom",
    img: "PSAS LEFT.jpg",
    opts: {
      season: ["S4all"],
      type: ["classical"],
      range: ["baritone"]    
    }
  },
  {
    name: "안혜찬 | Ahn Hyechan",
    img: "PSAS LEFT.jpg",
    opts: {
      season: ["S4all"],
      type: ["classical"],
      range: ["tenor"]    
    }
  },
  {
    name: "김모세 | Kim Mose",
    img: "PSAS LEFT.jpg",
    opts: {
      season: ["S4all"],
      type: ["classical"],
      range: ["tenor"]    
    }
  },
  {
    name: "홍준기 | Hong Jungi",
    img: "PSAS LEFT.jpg",
    opts: {
      season: ["S4all"],
      type: ["musical"],
      range: ["tenor"]    
    },
  },
	{
    name: "이홍석 | Lee Hongseok",
    img: "PSAS LEFT.jpg",
    opts: {
      season: ["S4all"],
      type: ["classical"],
      range: ["baritone"]    
    }
  },
  {
    name: "이세헌 | Lee Seheon",
    img: "PSAS LEFT.jpg",
    opts: {
      season: ["S4all"],
      type: ["musical"],
      range: ["tenor"]    
    }
  },
  {
    name: "윤현선 | Yun Hyunsun",
    img: "PSAS LEFT.jpg",
    opts: {
      season: ["S4all"],
      type: ["musical"],
      range: ["tenor"]    
    }
  },
  {
    name: "임현준 | Lim Hyunjoon",
    img: "PSAS LEFT.jpg",
    opts: {
      season: ["S4all"],
      type: ["classical"],
      range: ["bass"]    
    },
  },

];
