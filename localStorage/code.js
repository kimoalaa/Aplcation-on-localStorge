let lis = document.querySelectorAll("ul li");
let output = document.querySelector(".output");

if (window.localStorage.getItem("color")){
    output.style.backgroundColor = window.localStorage.getItem("color");
    lis.forEach((li) => {
        li.classList.remove("active");
    });
    document.querySelector(`[data-color="${window.localStorage.getItem("color")}"]`).classList.add("active");
}else{
    console.log("no");
}
lis.forEach((li) => {
    li.addEventListener("click" , (e) => {
        // console.log(e.currentTarget.dataset.color);
        lis.forEach((li) => {
            li.classList.remove("active");
        });
        // add active  
        e.currentTarget.classList.add("active");
        // add color to localstorage
        window.localStorage.setItem("color", e.currentTarget.dataset.color);
        // change output background
        output.style.backgroundColor = e.currentTarget.dataset.color;
    })
})