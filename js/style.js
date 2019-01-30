const svgElement = document.querySelectorAll(".center-center > div > svg");
svgElement.forEach(element => {
   element.addEventListener("mouseover", () => element.querySelector("path").style.fill = "#FF4538");
}); 
svgElement.forEach(element => {
    element.addEventListener("mouseout", () => element.querySelector("path").style.fill = "");
});