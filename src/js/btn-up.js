import refs from "./refs/refs";

refs.btnUp.addEventListener('click', scrollUp);

function scrollUp() {
    refs.target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
    });
}