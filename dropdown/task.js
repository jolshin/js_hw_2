let targetMenu; ///for memoriziation which menu is an active one

function openMenu(e) {
    e.target.nextElementSibling.classList.add("dropdown__list_active");
};

function closeMenu(e, targetMenu) {
    targetMenu.textContent = e.target.textContent; ///chnages value of the choosen menu
    e.target.closest('ul').classList.remove("dropdown__list_active");
};


function closeAll() { ///function closes all menus in case of existences identical menus in the document
    for (let el of document.querySelectorAll('.dropdown__list_active')) {
        el.classList.remove("dropdown__list_active");
    }
};

document.addEventListener('click', function(e) {

    if (e.target.className.includes("dropdown__value" )) {
        targetMenu = e.target;
    }

    if (e.target.className.includes('dropdown__value')) {
        closeAll();
        openMenu(e);
    } else if (e.target.className.includes('dropdown__link')) {
        closeMenu(e, targetMenu);
    }

})