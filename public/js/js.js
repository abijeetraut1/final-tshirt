// rgb(238, 39, 97) = box background color
// white = font color

const choose_size = document.querySelectorAll('.size');
const quantity = document.querySelectorAll('.qty');
const colors = document.querySelectorAll('.colors');


// function to change color and remove the previous color 
buttonColor = (onlyClick, className) => {
    onlyClick.forEach(el => {
        el.addEventListener('click', e => {
            onlyClick.forEach(ele => {
                if (ele.classList.contains(className)) {
                    ele.classList.remove(className)
                }
            })
            return el.classList.toggle(className);
        })
    })
}

buttonColor(choose_size, 'changeColor');
buttonColor(quantity, 'changeSizeColor');
buttonColor(colors, 'applyBorder');

storageItemStyle = (classs, sessionName) => {
    document.querySelectorAll(`.${classs}`).forEach(el => {
        el.addEventListener('click', ele => {
            sessionStorage.setItem(`${sessionName}`, el.style.background);
        })
    })
}

storageItem = (classs, sessionName) => {
    document.querySelectorAll(`.${classs}`).forEach(el => {
        el.addEventListener('click', ele => {
            sessionStorage.setItem(`${sessionName}`, el.innerText);
        })
    })
}

storageItemStyle('colors', 'tshirt_color');

document.querySelectorAll(`.size`).forEach(el => {
    el.addEventListener('click', ele => {
        sessionStorage.setItem(`tshirt_size`, el.innerText);
    })
})

document.querySelectorAll(`.qty`).forEach(el => {
    el.addEventListener('click', ele => {
        sessionStorage.setItem(`tshirt_qty`, el.innerText);
    })
})

sessionStorage.setItem('productId', $('#productid')[0].innerText);

if(window.location.pathname.split('/')[1] === "product"){
    $('.bi-list, .bi-bag').css('font-size', '2.3rem');
    $('.add-cart, .ham-menu').css('overflow', 'hidden');
}