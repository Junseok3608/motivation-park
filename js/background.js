const imgs = ["003.jpg", "004.jpg", "005.jpg", "006.jpg", "007.jpg", "008.jpg", "009.jpg", "010.jpg", "002.jpg", "001.jpg"];

const selectImg = imgs[Math.floor(Math.random() * imgs.length)];

const bgImg = document.getElementById("bg-img");
bgImg.innerHTML = `
<img src="img/${selectImg}">
`;
