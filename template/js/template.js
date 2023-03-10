const DIV_ID_LEFT_NAV = 'leftNav';

window.onload = function () {
    highlightNavigation();

    if (document.URL.includes('index.html') || document.URL.includes('/search')) {
        updateLinkShowAllPosts();
    }
};

function updateLinkShowAllPosts() {
    Array.from(document.getElementsByTagName('a')).forEach((a) => {
        if (a.innerText == 'Show all posts') {
            a.href = window.location.origin + '/index.html';
        }
    });
}

function highlightNavigation() {
    var leftNavLinks = document.getElementById(DIV_ID_LEFT_NAV).getElementsByTagName('a');
    Array.from(leftNavLinks).forEach(link => {
        if (document.URL.includes(link.href)) {
            link.style.background = '#e0e0e0';
        }
    });
}