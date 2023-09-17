const bgArr = ["img0.jpg","img1.jpg","img2.jpg"];

const chosenBg = bgArr[Math.floor(Math.random() * bgArr.length)];

document.body.style.backgroundImage = `url(img/${chosenBg})`;