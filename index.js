const colorEl = document.getElementById('color-el');
const btn = document.getElementById('btn');
const optionsEl = document.getElementById('options-el');
const colorContainer = document.getElementById('color-container');

btn.addEventListener('click', function () {
  generateColors();
});

// ---Function to generate Colors---

function generateColors() {
  const color = colorEl.value.replace('#', '');

  fetch(
    `https://www.thecolorapi.com/scheme?hex=${color}&mode=${optionsEl.value}&count=5`
  )
    .then((response) => response.json())
    .then((data) => {
      colorContainer.innerHTML = `
        <div>
        <img src="${data.colors[0].image.bare}">
        <p>${data.colors[0].hex.value}</p>
        </div>
        <div>
        <img src="${data.colors[1].image.bare}">
        <p>${data.colors[1].hex.value}</p>
        </div>
        <div>
        <img src="${data.colors[2].image.bare}">
        <p>${data.colors[2].hex.value}</p>
        </div>
        <div>
        <img src="${data.colors[3].image.bare}">
        <p>${data.colors[3].hex.value}</p>
        </div>
        <div>
        <img src="${data.colors[4].image.bare}">
        <p>${data.colors[4].hex.value}</p>
        </div>
        `;
    });
}

generateColors();
