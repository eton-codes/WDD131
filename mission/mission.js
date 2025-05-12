let selectElem = document.querySelector('select');

let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);


//HOME WORK SECTION

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        // change body to dark
        document.body.classList.add('dark');
        // change logo to dark logo
        logo.src = 'byui-logo_dark.png';
    } 
    else {
        // change body to light
        document.body.classList.remove('dark');
        // remove dark from body
        // change logo to light logo
        logo.src = 'byui-logo_blue.webp'
    }
}