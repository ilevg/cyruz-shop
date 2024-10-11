/**add footer/header */

async function includeHTML(callback) {
    const elements = document.querySelectorAll('[w3-include-html]');
    for (const element of elements) {
      const file = element.getAttribute('w3-include-html');
      try {
        const response = await fetch(file);
        if (response.ok) {
          const html = await response.text();
          element.innerHTML = html;
        } else {
          throw new Error('Page not found.');
        }
      } catch (error) {
        console.error('Error:', error.message);
        element.innerHTML = 'Error occurred while fetching the page.';
      }
      element.removeAttribute('w3-include-html');
    }
    if (typeof callback === 'function') {
        callback(); // Вызываем обратный вызов после завершения загрузки хедера и футера
    }
}
/** scroll to catalog*/
const buttonCatalog = document.querySelector('.intro__button');

buttonCatalog.addEventListener("click", onHeaderLinkClick);

function onHeaderLinkClick() {
    let catalogSection = document.querySelector('.katalog__section');
    let gotoBlockValue = catalogSection.getBoundingClientRect().top +  scrollY;
    window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth"
    });
    e.preventDefault();
}
/** Change opacity with scroll */
let timeoutId;
let targetArr = document.querySelectorAll('[data-opacity]')


targetArr.forEach(function(target) {
    document.addEventListener('scroll', function() {
        let targetCoordsTop = target.getBoundingClientRect().top
        let targetCoordsBottom = target.getBoundingClientRect().bottom
        console.log(targetCoordsTop)
        let windowHeight = window.innerHeight
        console.log(windowHeight)
        if (windowHeight > (targetCoordsTop + (windowHeight/2)) ) {
            target.style.opacity = '1'
        } else target.style.opacity = '0.2'

        if (targetCoordsBottom < windowHeight - (windowHeight/2)) {
            target.style.opacity = '0.2';
        }
    })
})

/** burger */

function burgerFunc() {
    const burgerButton = document.querySelector(".burger__icon")
    const burgerMenu = document.querySelector(".header__burger")
    const burgerCross = burgerMenu.querySelector(".header__burger_cross")
    const burgerLinks = document.querySelectorAll('.header__burger_item')
    const burgerContainerBg = document.querySelector('.burger__container_bg')
    const burgerNavPanel = document.querySelector('.header__nav_panel')
    console.log(burgerCross)
    document.addEventListener('click', function(e){
        let target = e.target
        if(target == burgerNavPanel || target == burgerButton) {
            burgerMenu.style.left = '0'
            burgerMenu.style.width = '100%'
            burgerContainerBg.style.width = '100%'
        } else {
            burgerMenu.style.left = '-300px'
            burgerMenu.style.width = '0'
            burgerContainerBg.style.width = '0'
        }
        burgerLinks.forEach((link) => {
            if(target == link) {
                link.active()
            }
        })
    })
}
