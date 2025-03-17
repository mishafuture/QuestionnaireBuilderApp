export default function menu() {
    const nav = document.createElement('nav');
    nav.classList.add('navbar');

    nav.innerHTML = `
        <div class="navbar__logo">
            <img src="../assets/images/logo.jpg" alt="logo" class="navbar__logo-img">
        </div>
        <ul class="navbar__menu">
            <li class="navbar__item"><a href="../pages/quiz-catalog.html" class="navbar__link">Quiz catalog</a></li>
            <li class="navbar__item"><a href="../pages/quiz-builder-page.html" class="navbar__link">Create quiz</a></li>
        </ul>
    `;

    return nav;
}
