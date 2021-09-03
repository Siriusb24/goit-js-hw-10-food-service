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
const lightControl = document.getElementById("theme-switch-toggle")

const foodMarkup = foodTamplate(foodGallery)

foodList.insertAdjacentHTML('beforeend', foodMarkup)

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

const {DARK, LIGHT} = Theme

// ----------------------------------------------------------------------------
// ------------------------------- ВСЕ ФУНКЦИИ --------------------------------
// ----------------------------------------------------------------------------
    function onTargetImput(e){
            if(e.target.checked === true){
            body.classList.add(DARK);
            localStorage.setItem("class", "dark")
            } else {
           body.classList.add(LIGHT)
           body.classList.remove(DARK)
           localStorage.removeItem("class", "dark")}
    }

    if(localStorage.getItem('class')){
        lightControl.checked = true
        body.classList.add(DARK);
    }
// ----------------------------------------------------------------------------
// ------------------------------ ВСЕ СЛУШАТЕЛИ -------------------------------
// ----------------------------------------------------------------------------
lightControl.addEventListener('change', onTargetImput)
   


   
