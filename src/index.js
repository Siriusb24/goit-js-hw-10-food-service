// ----------------------------------------------------------------------------
// ------------------------------- ВСЕ ИМПОРТЫ --------------------------------
// ----------------------------------------------------------------------------

import './css/styles.scss'
import foodGallery from './menu.json'
import foodTamplate from './tamplates/food-gallery.hbs'
import theme from './js/Theme.js'

// ----------------------------------------------------------------------------
// ------------------------------- ВСЕ ДОСТУПЫ --------------------------------
// ----------------------------------------------------------------------------
const body = document.querySelector('body')
const foodList = document.querySelector(".js-menu")
const foodMarkup = foodTamplate(foodGallery)
foodList.insertAdjacentHTML('beforeend', foodMarkup)
const lightControl = document.getElementById("theme-switch-toggle")

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };


// ----------------------------------------------------------------------------
// ------------------------------- ВСЕ ФУНКЦИИ --------------------------------
// ----------------------------------------------------------------------------
    function onTargetImput(e){
            if(e.target.checked === true){
            body.classList.add(Theme.DARK);
            localStorage.setItem("class", "dark")
            } else {
           body.classList.add(Theme.LIGHT)
           body.classList.remove(Theme.DARK)
           localStorage.removeItem("class", "dark")}
    }
// ----------------------------------------------------------------------------
// ------------------------------ ВСЕ СЛУШАТЕЛИ -------------------------------
// ----------------------------------------------------------------------------
lightControl.addEventListener('change', onTargetImput)
   
if(localStorage.getItem('class')){
    lightControl.checked = true
    body.classList.add(Theme.DARK);
}

   
