function slider1(slider) {
    // to prevent thumb from going past the other
    slider.value=Math.min(slider.value,slider.parentNode.children[2].value-1);
    
    let value=(100*(slider.value-slider.min)/(slider.max-slider.min));
    let children = slider.parentNode.childNodes[1].childNodes;
    children[1].style.width=value+'%';
    children[5].style.left=value+'%';
    children[7].style.left=value+'%';children[11].style.left=value+'%';
    children[11].childNodes[1].innerHTML=slider.value;
    return null;
}

function slider2(slider) {
    // to prevent thumb from going past the other
    slider.value=Math.max(slider.value,slider.parentNode.children[1].value-(-1));

    let value=(100/(parseInt(slider.max)-parseInt(slider.min)))*parseInt(slider.value)-(100/(parseInt(slider.max)-parseInt(slider.min)))*parseInt(slider.min);
    let children = slider.parentNode.childNodes[1].childNodes;
    children[3].style.width=(100-value)+'%';
    children[5].style.right=(100-value)+'%';
    children[9].style.left=value+'%';children[13].style.left=value+'%';
    children[13].childNodes[1].innerHTML=slider.value;
    return null;
}