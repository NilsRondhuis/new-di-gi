import refs from './refs/refs';

refs.btnCallback.addEventListener('click', openModalCallback);
refs.btnCloseCallback.addEventListener('click', closeModalCallback);

function openModalCallback() {
    refs.backdropCallback.classList.add('backdrop-callback-is-show');
    refs.modalCallback.classList.add('modal-callback__scale');
    refs.body.classList.add('hidden-scroll');
}

function closeModalCallback() {
    refs.backdropCallback.classList.remove('backdrop-callback-is-show');
    refs.modalCallback.classList.remove('modal-callback__scale');
    refs.body.classList.remove('hidden-scroll');
}