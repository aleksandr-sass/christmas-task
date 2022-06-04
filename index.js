initDivMaker(data);
dataToDivGrid(data)

function dataToDivGrid(array) {
  for (let i=1; i<=array.length; i +=1) {
    makeTheToy(array[i-1], i);
  }
}

function initDivMaker(array) {
  let text = '';
  let length = array.length;
  for (let i=1; i<=length; i += 1) {
    text += `<div id="toy${i}" class="toy"></div>`;
  };
  const grid = document.querySelector('#grid');
  grid.innerHTML = text;
}

function makeTheToy(obj, index) {
  const toy = document.querySelector(`#toy${index}`);

  const toyHeaderHTML = `<h3>${obj.name}</h3>`;
  const toyFlexContainerHTML = `<div class="flex-container"></div>`;
  const toyImageHTML = `<div class="img"><img src="./assets/toys/${obj.num}.png" alt="${obj.name}"></div>`;
  let toyTextHTML = '';

  const toyCountHTML = `<p>Количество: ${obj.count}</p>`;
  const toyYearOfPurchaseHTML = `<p>Год покупки: ${obj.year}</p>`;
  const toyShapeHTML = `<p>Форма: ${obj.shape}</p>`;
  const toyColorHTML = `<p>Цвет: ${obj.color}</p>`;
  const toySizeHTML = `<p>Размер: ${obj.size}</p>`;
  const toyIsFavoriteHTML = `<p>Любимая: ${boolToRussian(obj.favorite)}</p>`;

  toyTextHTML = `<div class="toy-text">` +
               toyCountHTML + 
               toyYearOfPurchaseHTML +
               toyShapeHTML +
               toyColorHTML +
               toySizeHTML +
               toyIsFavoriteHTML + `</div>`;

  toy.innerHTML = toyHeaderHTML + toyFlexContainerHTML;

  const toyFlexContainer = document.querySelectorAll(".flex-container")[index-1];
  toyFlexContainer.innerHTML = toyImageHTML + toyTextHTML;
}

/* Some helpful JavaScript functions */

function boolToRussian(value) {
  if (value) return `да`;
  return `нет`;
}