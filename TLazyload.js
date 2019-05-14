document.addEventListener("DOMContentLoaded", function() {
    var lazyImages = [].slice.call(document.querySelectorAll("img.lazy, .lazy-bg"));
    lazyImages.forEach(function(lazyImage) {
        _ChangeAttrs(lazyImage);
    });

    // if ("IntersectionObserver" in window) {
    //     __LazyLoadByImgWithIntersectionObserver(lazyImages);
    // } else {
    //     __LazyLoadByImgWithoutIntersectionObserver(lazyImages);
    // }
});

function _ChangeAttrs(lazyImage){
    // если элемент - это img с атрибутом data-src,
    // img src = img data-src
    if (lazyImage.hasAttribute('data-src')) {
        lazyImage.src = lazyImage.dataset.src;
        lazyImage.classList.remove("lazy");
    }
    // если элемент - это блок, которому нужно установить background-image, присваиваем стиль
    if (lazyImage.hasAttribute('data-lazy_bg')) {
        lazyImage.style.backgroundImage = "url("+lazyImage.dataset.lazy_bg+")";
        lazyImage.classList.remove("lazy-bg");
    } 
}
// function __LazyLoadByImgWithIntersectionObserver(lazyImages){
//     var lazyImageObserver = new IntersectionObserver(function(entries, observer) {
//         entries.forEach(function(entry) {
//             if (entry.isIntersecting) {
//                 var lazyImage = entry.target;
//                 _ChangeAttrs(lazyImage);
//                 lazyImageObserver.unobserve(lazyImage);
//             }
//         });
//     });
//     lazyImages.forEach(function(lazyImage) {
//         lazyImageObserver.observe(lazyImage);
//     });
// };
// function __LazyLoadByImgWithoutIntersectionObserver(lazyImages){
//     var active = false;

//     const lazyLoad = function() {
//         if (active === false) {
//             active = true;

//             setTimeout(function() {
//                 lazyImages.forEach(function(lazyImage) {
//                     if ((lazyImage.getBoundingClientRect().top <= window.innerHeight  && lazyImage.getBoundingClientRect().bottom >= 0) && getComputedStyle(lazyImage).display !== "none") {
                        
//                         _ChangeAttrs(lazyImage);

//                         lazyImages = lazyImages.filter(function(image) {
//                             return image !== lazyImage;
//                         });

//                         if (lazyImages.length === 0) {
//                             document.removeEventListener("scroll", lazyLoad);
//                             window.removeEventListener("resize", lazyLoad);
//                             window.removeEventListener("orientationchange", lazyLoad);
//                         }
//                     }
//                 });

//                 active = false;
//             }, 200);
//         }
//     };
//     document.addEventListener("scroll", lazyLoad);
//     window.addEventListener("resize", lazyLoad);
//     window.addEventListener("orientationchange", lazyLoad);
//     // костыль для эмитации прокрутки
//     window.scrollBy(0,1);
//     window.scrollTo(0,0);
// };