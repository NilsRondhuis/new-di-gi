const refs = {
    listProject: document.querySelector('.list-project'),
    listService: document.querySelector('.list-service'),
    listNews: document.querySelector('.list-news'),
}

refs.listProject.addEventListener('click', noReset);
refs.listService.addEventListener('click', noReset);
refs.listNews.addEventListener('click', noReset);

function noReset(e) {
    e.preventDefault();
}