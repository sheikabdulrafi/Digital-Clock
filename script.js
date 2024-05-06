const spans = document.querySelectorAll(".minute");
const secSpans = document.querySelectorAll(".second");
const hourSpans = document.querySelectorAll(".hour");
const bTags = document.querySelectorAll("b");
const hrsBTgs = document.querySelectorAll(".hoursB");

function rotater(data, angle) {
  data.forEach((span, index) => {
    const rotation = index * angle;
    span.style.transform = `rotate(${rotation}deg)`;
  });
}

rotater(secSpans, 6);
rotater(spans, 6);
rotater(hourSpans, 30);

const secDail = document.querySelector(".minutes");
const minDail = document.querySelector(".seconds");
const hrDail = document.querySelector(".hours");

function dailRotator() {
  const date = new Date();
  const seconds = date.getSeconds();
  const minutes = date.getMinutes();
  const hours = date.getHours() % 12;

  const secondDegrees = seconds * -6;
  const minuteDegrees = minutes * -6;
  const hourDegrees = hours * -30;

  secDail.style.transform = `rotate(${secondDegrees}deg)`;
  minDail.style.transform = `rotate(${minuteDegrees}deg)`;
  hrDail.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(dailRotator, 1000);
