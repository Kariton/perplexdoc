/* let toggle = document.querySelector('.toggle');

let toggleInterface = document.querySelector('.toggle-interface');

function handleToggle(e) {
    if(e.keyCode == 32 || e.keyCode == 13){
        toggleControl.checked = !toggleControl.checked;
    }
}

toggleInterface.addEventListener('keydown', handleToggle); */

/*
 * Sidebar
 */
let sidebarBtn = document.querySelector('#toggle-sidebar');
let closeBtn = document.querySelector('#close-sidebar');
let sidebar = document.querySelector('#sidebar');
let menu = document.querySelector('#menutop');

if( sidebarBtn ) {
    sidebarBtn.addEventListener('click', function () {
        if( menu ) {
            menu.classList.toggle('is-visible');
        }
        sidebarBtn.classList.toggle('is-visible');
        sidebar.classList.toggle('is-visible');
    })
}

closeBtn.addEventListener('click', function() {
    menu.classList.toggle('is-visible');
    sidebarBtn.classList.toggle('is-visible');
    sidebar.classList.toggle('is-visible');
})

/*
 * Page TOC
 */
let tocBtn = document.querySelector('#toggle-toc');
let toc = document.querySelector('#toc');

if ( tocBtn ) {
    tocBtn.addEventListener('click', function () {
        tocBtn.classList.toggle( 'is-visible' );
        toc.classList.toggle('is-closed');
    })
}
