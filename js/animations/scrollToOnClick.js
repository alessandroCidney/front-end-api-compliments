const $headerAnchors = document.querySelectorAll('.anchor-animated a[href^="#"]');

function scrollToIdOnClick(event) {
    event.preventDefault(); 
    const destiny = document.querySelector(event.target.getAttribute('href')).offsetTop;

    window.scroll({
        top: destiny,
        behavior: 'smooth'
    });
}

$headerAnchors.forEach((item) => {
    item.addEventListener("click", scrollToIdOnClick)
});
