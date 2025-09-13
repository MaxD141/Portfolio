function fitText(element, defaultSize = 20){
    let parent = element.parentElement;
    let fontSize = defaultSize;
    element.style.fontSize = fontSize + "px";
    while(((element.scrollWidth > parent.clientWidth) || (element.scrollHeight > parent.clientHeight)) && fontSize > 5){
        fontSize--;
        element.style.fontSize = fontSize + "px";
    }
}

function applyFitText(selector){
    const element = document.querySelector(selector);
    if(!element) return;
    fitText(element);
    window.addEventListener("resize", () => fitText(element));
}