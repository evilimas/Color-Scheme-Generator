const colorEl = document.getElementById('color-el');
const btn = document.getElementById('btn');
const optionsEl = document.getElementById('options-el');
const colorContainer = document.getElementById('color-container');

// ---Generate colors btn event listener  ---
btn.addEventListener('click', function () {
  generateColors();
});

// ---Function to fetch generate Colors---

function generateColors() {
  const color = colorEl.value.replace('#', '');

  fetch(
    `https://www.thecolorapi.com/scheme?hex=${color}&mode=${optionsEl.value}&count=5`
  )
    .then((response) => response.json())
    .then((data) => {
      const colorsArr = data.colors;
      colorsArr.forEach((color) => {
        colorContainer.innerHTML += `
         <div class="color-item">
        <img src="${color.image.bare}">
        <p>${color.hex.value}</p>
      </div>`;
      });
    });
}

generateColors();
