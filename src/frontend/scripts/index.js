import '../css/menu-style.css';
import '../css/site-view-style.css';
import '../css/questions.css';
import menu from '../components/menu.js';
import question from "./modules/question";

document.addEventListener('DOMContentLoaded', () => {
   const body = document.body;
   const navMenu = menu();

   body.prepend(navMenu);
   question();
});