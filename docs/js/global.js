const historyBack = (e) => {
    e.preventDefault()
    history.back()
}

document.addEventListener('DOMContentLoaded', () => {
    const backlink = document.querySelector('[data-backlink]')
    if (backlink) {
        if (document.referrer === '') {
            backlink.style.display = 'none';
        }
        else {
            backlink.addEventListener('click', historyBack);
        }
    }
});

