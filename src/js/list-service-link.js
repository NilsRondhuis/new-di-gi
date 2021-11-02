import refs from "./refs/refs";

refs.listService.addEventListener('click', onTargetLink);

function onTargetLink(e) {
    if (!e.target.classList.contains('list_service__more--text')) {
        e.preventDefault();
    }
}