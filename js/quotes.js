const quotes = [
  {
    quote: "간단함이 훌륭함의 열쇠다.",
    author: "이소룡",
  },
  {
    quote: "말만 하고 행동하지 않는 사람은 잡초로 가득 찬 정원과 같다.",
    author: "하우얼",
  },
  {
    quote: "바람이 불지 않으면 노를 저어라.",
    author: "윈스턴 처칠",
  },
  {
    quote: "낭비한 시간에 대한 후회는 더 큰 시간 낭비이다.",
    author: "메이슨 쿨리",
  },
  {
    quote: "산을 움직이려 하는 이는 작은 돌을 들어내는 일로 시작한다.",
    author: "공자",
  },
  {
    quote: "아이디어의 좋고 나쁨은 어떻게 실행하느냐에 따라 결정된다.",
    author: "카를로스 곤",
  },
  {
    quote: "다리를 움직이지 않고는 작은 도랑도 건널 수 없다.",
    author: "알랭",
  },
  {
    quote: "휴식은 게으름도, 멈춤도 아니다.",
    author: "헨리 포드",
  },
  {
    quote: "당신이 허락하지 않으면 아무도 당신이 열등감을 느끼게 만들 수 없다.",
    author: "엘리너 루즈벨트",
  },
  {
    quote: "나는 내가 더 노력할수록 운이 더 좋아진다는 걸 발견했다.",
    author: "토마스 제퍼슨",
  },
  {
    quote: "미래는 현재 우리가 무엇을 하는가에 달려 있다.",
    author: "마하트마 간디",
  },
  {
    quote: "미래를 예측하는 최선의 방법은 미래를 창조하는 것이다.",
    author: "엘런 케이",
  },
  {
    quote: "기운과 끈기는 모든 것을 이겨낸다.",
    author: "벤자민 프랭클린",
  },
  {
    quote: "자기 신뢰는 성공의 첫번째 비결이다.",
    author: "랄프 왈도 에머슨",
  },
  {
    quote: "최대한의 삶을 살고, 최대한 긍정적인 것에 집중하자.",
    author: "매트 카메론",
  },
  {
    quote: "20년 후, 당신은 했던 일보다 하지 않았던 일로 인해 더 실망을 할 것이다.",
    author: "마크 드웨인",
  },
  {
    quote: "기회는 일어나는 것이 아니라 만들어내는 것이다.",
    author: "크리스 그로서",
  },
  {
    quote: "잘못된 것들을 쫓아다니는 것을 그만두면 옳은 일들이 당신을 따라잡을 기회가 생긴다.",
    author: "롤리다스칼",
  },
  {
    quote: "간단하게 설명할 수 없으면 제대로 이해하지 못하는 것이다.",
    author: "알버트 아인슈타인",
  },
  {
    quote: "성공은 매일 반복한 작은 노력들의 합이다.",
    author: "로버트 콜리어",
  },
];

const quote = document.getElementById("quote");
const author = document.getElementById("author");

const randomQuotes = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = randomQuotes.quote;
author.innerText = randomQuotes.author;
