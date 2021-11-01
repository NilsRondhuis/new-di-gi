import refs from "./refs/refs";

refs.btnMenu.addEventListener('click', handleMenu);
refs.listModal.addEventListener('click', navPage);

function handleMenu() {
    refs.iconBurger.classList.add('btn-menu__icon--is-hidden');
    refs.iconCross.classList.remove('btn-menu__icon--is-hidden');
    refs.backdrop.classList.toggle('backdrop--is-show');
    refs.modal.classList.toggle('modal-is-show');
    refs.body.classList.toggle('hidden-scroll');

    if(!refs.backdrop.classList.contains('backdrop--is-show')) {
        refs.iconBurger.classList.remove('btn-menu__icon--is-hidden');
        refs.iconCross.classList.add('btn-menu__icon--is-hidden');
    }
}

function navPage(e) {
    // e.preventDefault();
    if (!e.target.classList.contains('list-modal__link')) {
        return;
    }
    refs.iconBurger.classList.remove('btn-menu__icon--is-hidden');
    refs.iconCross.classList.add('btn-menu__icon--is-hidden');
    refs.backdrop.classList.remove('backdrop--is-show');
    refs.modal.classList.remove('modal-is-show');
    refs.body.classList.remove('hidden-scroll');
}

window.addEventListener('click', (e) => {
    if (!e.target.classList.contains('backdrop--is-show')) {
        return;
    }
    handleMenu();
});

window.addEventListener('keydown', (e) => {
    if (e.code === 'Escape') {
        refs.iconBurger.classList.remove('btn-menu__icon--is-hidden');
        refs.iconCross.classList.add('btn-menu__icon--is-hidden');
        refs.backdrop.classList.remove('backdrop--is-show');
        refs.modal.classList.remove('modal-is-show');
        refs.body.classList.remove('hidden-scroll');
    }
    return;
});