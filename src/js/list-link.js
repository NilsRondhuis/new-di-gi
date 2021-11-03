import refs from "./refs/refs";

refs.listProject.addEventListener('click', onClickTargetLink);
refs.listNews.addEventListener('click', onClickTargetLink);

function onClickTargetLink(e) {
    if (e.target.nodeName === 'svg' || e.target.nodeName === 'use') {
        return;
    } else {
        e.preventDefault();
    }
}