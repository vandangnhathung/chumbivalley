// Banner section
// const fn = (trigger, speed) => {
//     ScrollSnooper.create({
//         trigger: trigger,
//         onScroll: data => {
//             window.addEventListener("scroll", () => {
//                 data.trigger.style.transform = speed;
//             })
//         },
//     });
// }

ScrollSnooper.create({
    trigger: document.querySelector(".cb-logo"),
    markers: true,
    start: `top top`,
    onScroll: data => {
        //data.trigger.style.transform = `translate(-50%, ${window.scrollY * 0.5}%)`;
        data.trigger.style.opacity = `${1 - data.progress}`;

        console.log("data: ", data)
        // window.addEventListener("scroll", () => {
        //     console.log(1)
        // })
    },
});
ScrollSnooper.create({
    trigger: document.querySelector(".cb-cute"),
    onScroll: data => {
        data.trigger.style.transform = `translateY(${window.scrollY * 0.15}%)`;
    },
});
ScrollSnooper.create({
    trigger: document.querySelector(".cb-forest"),
    onScroll: data => {
        console.log(data)
        data.trigger.style.transform = `translateY(${window.scrollY * 0.04}%)`;
    },
});
ScrollSnooper.create({
    trigger: document.querySelector(".cb-mountain"),
    onScroll: data => {
        data.trigger.style.transform = `translateY(${window.scrollY * 0.03}%)`;
    },
});
ScrollSnooper.create({
    trigger: document.querySelector(".cb-forest_black"),
    onScroll: data => {
        data.trigger.style.transform = `translateY(${-window.scrollY * 0.04}%)`;
    },
});
// fn(document.querySelector(".cb-logo"), `translate(-50%, ${window.scrollY * 0.2}%)`)
// fn(document.querySelector(".cb-cute"), `translateY(${window.scrollY * 0.15}%)`)
// fn(document.querySelector(".cb-forest"), `translateY(${window.scrollY * 0.04}%)`)
// fn(document.querySelector(".cb-mountain"), `translateY(${window.scrollY * 0.03}%)`)
// fn(document.querySelector(".cb-forest_black"), `translateY(${-window.scrollY * 0.04}%)`)

