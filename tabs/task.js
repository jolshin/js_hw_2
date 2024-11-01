function contentToggle(target, tabIndex) {
    let tabs_content = target.closest('.tabs').children[1];

    for (let i = 0; i < tabs_content.children.length; i++) {
        if (i !== tabIndex){
            tabs_content.children[i].classList.remove('tab__content_active');
        } else {
            tabs_content.children[i].classList.add('tab__content_active');
        }
    }

}

let menuToggle = (e) => {
    let target = e.target;
    let tabs = target.closest('.tab__navigation');
    let tabIndex = 0;

    if (tabs !== null) {
        for (let tab of tabs.children){  
            if (tab.textContent !== target.textContent ) {
                tab.classList.remove('tab_active')
                ++tabIndex;
            } else if (!tab.className.includes('tab_active') & tab.textContent === target.textContent) {
                tab.classList.add('tab_active')
                contentToggle(target, tabIndex);
            }
        }

    }
}

document.addEventListener('click', menuToggle);