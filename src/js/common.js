const refs = {
    listProject: document.querySelector('.list-project'),
    listService: document.querySelector('.list-service'),
}

refs.listProject.addEventListener('click', noReset);
refs.listService.addEventListener('click', noReset);

function noReset(e) {
    e.preventDefault();
}