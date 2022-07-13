function slider_left(slider, step=1) {
    // to prevent thumb from going past the other
    slider.value=Math.min(slider.value,slider.parentNode.children[2].value-step);
    
    // value conversion from min-max of slider to 0-100% for style properties
    let value=(100*(slider.value-slider.min)/(slider.max-slider.min));

    // selecting slider-style-container div - then its children
    var children = slider.parentNode.children[0].children;

    // bg-left
    children[0].style.width=value+'%';
    //bg-middle
    children[2].style.left=value+'%';
    // thumb-left
    children[3].style.left=value+'%';
    // tt-left-div
    children[5].style.left=value+'%';
    // tt-left-div > span > tt-content-span
    children[5].children[0].children[1].innerHTML=slider.value;

    return null;
}

function slider_right(slider, step=1) {
    // to prevent thumb from going past the other
    slider.value=Math.max(slider.value,slider.parentNode.children[1].value-(-step));

    // value conversion from min-max of slider to 0-100% for style properties
    let value=(100/(parseInt(slider.max)-parseInt(slider.min)))*parseInt(slider.value)-(100/(parseInt(slider.max)-parseInt(slider.min)))*parseInt(slider.min);

    // selecting slider-style-container div - then its children
    var children = slider.parentNode.children[0].children;

    // bg-right
    children[1].style.width=(100-value)+'%';
    // bg-middle
    children[2].style.right=(100-value)+'%';
    // thumb-right
    children[4].style.left=value+'%';
    // tt-right-div
    children[6].style.left=value+'%';
    // tt-right-div > span > tt-content-span
    children[6].children[0].children[1].innerHTML=slider.value;

    return null;
}

function update_slider_styles() {
    var left_sliders = document.getElementsByClassName('slider-left');
    for(let i=0; i<left_sliders.length; i++) {
        slider_left(left_sliders.item(i));
    }

    var left_maps = document.getElementsByClassName('left-map');
    for(let m=0; m<left_maps.length; m++){
        left_map(left_maps.item(m));
    }

    var right_sliders = document.getElementsByClassName('slider-right');
    for(let j=0; j<right_sliders.length; j++) {
        slider_right(right_sliders.item(j));
    }

    var right_maps = document.getElementsByClassName('right-map');
    for(let n=0; n<right_maps.length; n++){
        right_map(right_maps.item(n));
    }
}

function left_map(slider) {
    let physical_activity = ['None', 'Low', 'Moderate', 'High', 'Extreme'];
    slider_left(slider);
    let tt_content_span = slider.parentNode.children[0].children[5].children[0].children[1];
    console.log(tt_content_span);
    let i = parseInt(tt_content_span.innerHTML);
    console.log(i);
    tt_content_span.innerHTML = physical_activity[i];
}

function right_map(slider) {
    let physical_activity = ['None', 'Low', 'Moderate', 'High', 'Extreme'];
    slider_right(slider);
    let tt_content_span = slider.parentNode.children[0].children[6].children[0].children[1];
    console.log(tt_content_span);
    let i = parseInt(tt_content_span.innerHTML);
    console.log(i);
    tt_content_span.innerHTML = physical_activity[i];
}