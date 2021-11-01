import refs from './refs/refs';

refs.btnCallback.addEventListener('click', openModalCallback);
refs.btnCloseCallback.addEventListener('click', closeModalCallback);
refs.modalCallbackInput.addEventListener('focus', onFocusFormShowNum);
// refs.modalCallbackForm.addEventListener('submit', onSubmit);
// refs.modalCallbackInput.addEventListener('change', onChangeInput);

let number = 30;
let intervalId;

function openModalCallback() {
    refs.backdropCallback.classList.add('backdrop-callback-is-show');
    refs.modalCallback.classList.add('modal-callback__scale');
    refs.body.classList.add('hidden-scroll');

    refs.timerNum.textContent = number;
    intervalId = setInterval(substracTime, 1000);
}

function closeModalCallback() {
    refs.backdropCallback.classList.remove('backdrop-callback-is-show');
    refs.modalCallback.classList.remove('modal-callback__scale');
    refs.body.classList.remove('hidden-scroll');
    clearInterval(intervalId);
    refs.modalCallbackInput.value = '';
}

function substracTime() {
    refs.timerNum.innerHTML--;
    if (refs.timerNum.textContent < 1) {
        clearInterval(intervalId);
    }
}

window.addEventListener('click', (e) => {
    if (e.target.classList.contains('backdrop-callback')) {
        closeModalCallback();
    }
    return;
});

window.addEventListener('keydown', (e) => {
    if (e.code === 'Escape') {
        closeModalCallback();
    }
    return;
});

function onFocusFormShowNum() {
    refs.modalCallbackInput.value = '+380';
}