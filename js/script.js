var suit = ['clubs','spades','diamonds','hearts'];
var picture = ['jack','queen','king','ace'];
var cards = [];

for(var i = 2; i <= 10; i++) {
    for(var j = 0; j < suit.length; j++) {
        cardInfo=`<div class="card__info">${i}<img src="images/${suit[j]}.svg" alt="${suit[j]}"></div>`;

    cards.push(`<div class="card">
        ${cardInfo}
        ${cardInfo}
    </div>`);
    }
}

for(var i = 0; i < picture.length; i++) {
    for(var j = 0; j < suit.length; j++) {
        cardInfo=`<div class="card__info">
            ${picture[i][0].toUpperCase() }
            <img src="images/${suit[j]}.svg" alt="${suit[j]}">
    </div>`;

    centerImg = picture[i] !== 'ace' ? picture[i] : suit[j];
    cards.push(`<div class="card card--person">
        ${cardInfo}
        <img class="person" src="images/${centerImg}.svg" alt="${centerImg}">
        ${cardInfo}
        </div>`);
    }
}
document.write(`<div class = wrapper>${cards.join(``)}</div>`);