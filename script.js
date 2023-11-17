// Banner section
const parallax = (target, speed = 1, cb = () => {
}) => {

    // update when scrolling
    window.addEventListener("scroll", () => {
        cb(window.scrollY * speed);
    });
};

// init
document.querySelectorAll(".cb-logo").forEach((element) => {
    parallax(element, 0.2, (parallaxValue) => {
        element.style.transform = `translate(-50%,${parallaxValue}%)`;
    });
});

document.querySelectorAll(".cb-cute").forEach((element) => {
    parallax(element, 0.15, (parallaxValue) => {
        element.style.transform = `translateY(${parallaxValue}%)`;
    });
});

document.querySelectorAll(".cb-forest").forEach((element) => {
    parallax(element, 0.04, (parallaxValue) => {
        element.style.transform = `translateY(${parallaxValue}%)`;
    });
});

document.querySelectorAll(".cb-mountain").forEach((element) => {
    parallax(element, 0.03, (parallaxValue) => {
        element.style.transform = `translateY(${parallaxValue}%)`;
    });
});

document.querySelectorAll(".cb-forest_black").forEach((element) => {
    parallax(element, 0.02, (parallaxValue) => {
        element.style.transform = `translateY(${-parallaxValue}%)`;
    });
});

// Main section

// const convertImageScroll = (el, itemHeight, index) => {
//     const cbImages = document.querySelector(".cb-images");
//
//
//     const cbImg = document.querySelector(".cb-img");
//     const cbImgStyle = window.getComputedStyle(cbImg);
//     const cbImgTopString = cbImgStyle.getPropertyValue('top').split("px")[0];
//     const cbImgTopNumber = Number(cbImgTopString);
//
//     const singleImageHeight = document.querySelector(".cb-img-1").clientHeight;
//
//     let isGreaterItemHeight = false;
//     let isLessItemHeight = true;
//
//     const imageItem = document.querySelectorAll(".cb-img-item");
//
//     window.addEventListener("scroll", () => {
//             // console.log(index)
//
//             if(isGreaterItemHeight || !isLessItemHeight){
//                 return;
//             }
//
//             let rectImages = cbImages.getBoundingClientRect();
//
//             if(rectImages.top < 0){
//                 let convertImagePoint = cbImgTopNumber + (rectImages.top * -1) + singleImageHeight;
//                 console.log(convertImagePoint)
//                 if(convertImagePoint >= itemHeight && isGreaterItemHeight === false){
//                     console.log("isGreaterItemHeight: ", isGreaterItemHeight, index + 1)
//                     imageItem.forEach(el => {
//                         el.classList.remove("active");
//                     })
//                     imageItem[index + 1].classList.add("active");
//                     isGreaterItemHeight = true;
//                 }
//             }
//         }
//     )
// }
//
// let totalContentHeight = 0;
// document.querySelectorAll(".cb-content-item").forEach((el, i) => {
//     totalContentHeight += el.clientHeight;
//     convertImageScroll(el, totalContentHeight, i);
// })

window.addEventListener("scroll", () => {
    console.log(window.scrollY);
    console.log(document.querySelector("body").offsetHeight)
})
