//JAVASCRIPT JUST FRONTEND
import languageSwitcher from './js/languageSwitcher';
import handleBreakpoint from './js/handleBreakpoint';
import handleActiveMenuLink from './js/handleActiveMenuLink';
import handleHideNav from './js/handleHideNav';
import searchFunction from './js/search-function';

//Breakpoint
document.addEventListener("DOMContentLoaded", function () {
    languageSwitcher();
    handleBreakpoint();
    handleActiveMenuLink();
    handleHideNav();
    searchFunction();
})





