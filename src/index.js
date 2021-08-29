// ----------------------------------------------------------------------------
// ------------------------------- ВСЕ ИМПОРТЫ --------------------------------
// ----------------------------------------------------------------------------

import './css/styles.scss'
import foodGallery from './menu.json'
import foodTamplate from './tamplates/food-gallery.hbs'

// ----------------------------------------------------------------------------
// ------------------------------- ВСЕ ДОСТУПЫ --------------------------------
// ----------------------------------------------------------------------------
const body = document.querySelector('body')
const foodList = document.querySelector(".js-menu")
const foodMarkup = foodTamplate(foodGallery)
foodList.insertAdjacentHTML('beforeend', foodMarkup)
const lightControl = document.getElementById("theme-switch-toggle")




// ----------------------------------------------------------------------------
// ------------------------------- ВСЕ ФУНКЦИИ --------------------------------
// ----------------------------------------------------------------------------

//

// ----------------------------------------------------------------------------
// ------------------------------ ВСЕ СЛУШАТЕЛИ -------------------------------
// ----------------------------------------------------------------------------

lightControl.addEventListener('click', (e) => {
    console.log(e)
    if(e.target.checked === true){
    body.classList.add('dark-theme');
    localStorage.setItem("class", "dark")
    } else {
   body.classList.add('light-theme')
   body.classList.remove('dark-theme')}
   let className = localStorage.getItem('class');
   body.classList.add(className);
})

