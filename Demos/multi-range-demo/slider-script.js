function slider1(slider) {
    slider.value=Math.min(slider.value,slider.parentNode.children[2].value-1);
    
    var value=(100*(slider.value-slider.min)/(slider.max-slider.min));
    var children = slider.parentNode.childNodes[1].childNodes;
    children[1].style.width=value+'%';
    children[5].style.left=value+'%';
    children[7].style.left=value+'%';children[11].style.left=value+'%';
    children[11].childNodes[1].innerHTML=slider.value;
    return null;
}