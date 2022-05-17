const toy = document.querySelector("#toy");
const obj = data[0];

const toyHeaderHTML = `<h3>${obj.name}</h3>`;
const toyFlexContainerHTML = `<div id="flex-container"></div>`;
const toyImageHTML = `<div id="img"><img src="./assets/toys/${obj.num}.png" alt="${obj.name}"></div>`;
let toyTextHTML = '';

const toyCountHTML = `<p>Количество: ${obj.count}</p>`;
const toyYearOfPurchaseHTML = `<p>Год покупки: ${obj.year}</p>`;
const toyShapeHTML = `<p>Форма: ${obj.shape}</p>`;
const toyColorHTML = `<p>Цвет: ${obj.color}</p>`;
const toySizeHTML = `<p>Размер: ${obj.size}</p>`;
const toyIsFavoriteHTML = `<p>Любимая: ${boolToRussian(obj.favorite)}</p>`;

toyTextHTML = `<div id="toy-text">` +
             toyCountHTML + 
             toyYearOfPurchaseHTML +
             toyShapeHTML +
             toyColorHTML +
             toySizeHTML +
             toyIsFavoriteHTML + `</div>`;

toy.innerHTML = toyHeaderHTML + toyFlexContainerHTML;

const toyFlexContainer = document.querySelector("#flex-container");
toyFlexContainer.innerHTML = toyImageHTML + toyTextHTML;


function boolToRussian(value) {
  if (value) return `да`;
  return `нет`;
}