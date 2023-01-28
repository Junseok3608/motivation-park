const API_KEY = "bf65b801f95e520704b74f91bba4597d";
const geoTemp = document.getElementById("geo-temp");

const onGeoPass = function (position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  console.log(lat, lon);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  console.log(position);
  fetch(url).then((Response) =>
    Response.json().then((data) => {
      geoTemp.innerText = `
    ${data.name}, 오늘의 날씨는 ${data.weather[0].main} 체감온도${data.main.feels_like}도
    `;
    })
  );
};
const onGeoError = function () {
  geoTemp.innerText = `🙇‍♂️위치 정보를 가져올 수 없습니다🙇‍♂️`;
};

navigator.geolocation.getCurrentPosition(onGeoPass, onGeoError);
