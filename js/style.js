/**
 * Variables
 */
const svgElement = document.querySelectorAll(".center-center > div > svg");
const divImg = document.querySelector(".divImg");
const colonneLeftCenter = document.querySelector(".left-center");
const projectTab = [
    {
        id: 1,
        content: "SAN JOAQUIN"
    },
    {
        id: 2,
        content: "7NUITLÀ"
    },
    {
        id: 3,
        content: "ABRUPT"
    },
    {
        id: 4,
        content: "ABSTRACT"
    },
    {
        id: 5,
        content: "ARTISTES ASSOCIÉS"
    },
    {
        id: 6,
        content: "TURISM WEEK"
    },
    {
        id: 7,
        content: "SAN JOAQUIN"
    },
    {
        id: 8,
        content: "7NUITLÀ"
    },
    {
        id: 9,
        content: "ABRUPT"
    },
];

/**
 * Déclaration
 */
const setPosition = element => {
    let top = Math.round(Math.random() * window.innerHeight);
    let left = Math.round(Math.random() * window.innerWidth);
    element.style.top = `${top}px`;
    element.style.left = `${left}px`;
}
const addProjectTitle = (array, element) => {
    array.forEach(obj => {
        const div = document.createElement("div");
        if (obj.id === parseInt(element.id)) {
            div.innerHTML = `<h2>${obj.content}</h2>`;
            colonneLeftCenter.appendChild(div);            
        }
    });
}

/**
 * Éxecution
 */
svgElement.forEach(element => {
    element.addEventListener("mouseover", () => {
        element.querySelector("path").style.fill = "#ff4538";
        divImg.classList.remove("is__none");
        divImg.classList.add("is__img__lost");
        setPosition(divImg);
        addProjectTitle(projectTab, element);
        divImg.innerHTML = `
        <img src="http://localhost:8888/wordpress/wp-content/uploads/2019/01/${element.className.baseVal}.png"/>`;
    });
}); 
svgElement.forEach(element => {
    element.addEventListener("mouseout", () => {
        element.querySelector("path").style.fill = "";
        colonneLeftCenter.innerHTML = "";
        divImg.innerHTML = "";
        divImg.classList.add("is__none");
        divImg.classList.remove("is__img__lost");
    });
});