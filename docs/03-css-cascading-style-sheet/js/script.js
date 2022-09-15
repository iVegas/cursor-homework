document.addEventListener('DOMContentLoaded', () => {
    const banners = document.querySelectorAll('[data-banner]');
    document.querySelectorAll('a[href^="#b"]').forEach(l => {
        l.addEventListener('click', e => {
            e.preventDefault();
            let href = e.target.href.split('/');
            let targetBanner = document.querySelector(href[href.length - 1]);
            banners.forEach(banner => { if (banner.style.display !== 'none' && banner !== targetBanner) banner.classList.toggle('banner-init', true) });
            targetBanner.classList.toggle('banner-init');
        })
    })
})