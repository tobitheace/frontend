"use strict";

const data = [
{
    slackUserName: "tobi",
    imgSrc: "tobi.jpg",
    day: new Date().toLocaleString("en-US", { weekday: "long" }),
    time: new Date().getTime(),
    track: "Frontend",
},
];

const card = document.querySelector(".container");

console.log(card);

function displayUI(data) {
    const html = `
    <div>
        <img
            data-testid="slackDisplayImage"
            src=${data.imgSrc}
            alt=${data.slackUserName}
        />
    </div
    <div class="flex-info">
        <h1 data-testid="slackUserName">${data.slackUserName}</h1>
        <h1 data-testid="currentDayOfTheWeek">${data.day}</h1>
        <h1 data-testid="currentUTCTime">${data.time}</h1>
        <h1 data-testid="myTrack">${data.track}</h1>
    </div>

    `;

    card.insertAdjacentHTML("afterbegin", html);
}

displayUI(data[0]);