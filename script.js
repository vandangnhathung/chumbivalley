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

const contentItems = document.querySelectorAll(".cb-content-item");

const scrollIntoActiveContentArea = (el, i) => {
    const viewportHeight = window.innerHeight;
    const convertImagePoint = viewportHeight * 60 / 100;

    let isInContentItemArea = false;
    const imgItem = document.querySelectorAll(".cb-img-item");
    window.addEventListener("scroll", () => {


        let windowTopDocument = window.scrollY;
        let contentItemTopDocument = el.getBoundingClientRect().top + document.documentElement.scrollTop;
        const contentItemTopViewPort = contentItemTopDocument - windowTopDocument;


        console.log("convertImagePoint: ", convertImagePoint, "contentItemTopViewPort: ", contentItemTopViewPort, el)

        if(contentItemTopViewPort <= convertImagePoint && contentItemTopViewPort >= 0){

            imgItem.forEach(el => {
                el.classList.remove("active");
            })

            contentItems.forEach(el => {
                el.classList.remove("active");
            })

            imgItem[i].classList.add("active");
            contentItems[i].classList.add("active");
            console.log(i, true);


            isInContentItemArea = true;
        }else if(contentItemTopViewPort > convertImagePoint || contentItemTopViewPort < 0){
            console.log(false);

            isInContentItemArea = false;

        }
        // console.log(contentItemTopViewPort, el);
    })
}

document.querySelectorAll(".cb-content-item").forEach((el, i) => {
    scrollIntoActiveContentArea(el, i)
})

