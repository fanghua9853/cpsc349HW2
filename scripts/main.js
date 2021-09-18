var DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
var DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
var DETAIL_FRAME_SELECTOR = '[data-image-role="frame"]';
var THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';
var HIDDEN_DETAIL_CLASS = 'hidden-detail';
var TINY_EFFECT_CLASS = 'is-tiny';
var ESC_KEY = 27;

var images = ['img/otter1.jpg','img/otter2.jpg','img/otter3.jpg','img/otter4.jpg','img/otter5.jpg'];
var titles = ["Stayin' Alive","How Deep Is Your Love","You Should Be Dancing","Night Fever","To Love Someone"];
var i =0;

function setDetails(imageUrl, titleText){
    'use strict';

    var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
    detailImage.setAttribute('src',imageUrl);

    var detailTitile = document.querySelector(DETAIL_TITLE_SELECTOR);
    detailTitile.textContent = titleText;

}

function imageFromThumb(thumb) {
    'use strict';
    return thumb.getAttribute('data-image-url');
  }

function titleFromThumb(thumb) {
    'use strict';
    return thumb.getAttribute('data-image-title');
}


function setDetailsFromThumb(thumb) {
  'use strict';
  setDetails(imageFromThumb(thumb), titleFromThumb(thumb));
}

function addThumbClickHandler(thumb) {
    'use strict';
    thumb.addEventListener('click', function(event) {
        event.preventDefault();
        console.log('clicked');
        setDetailsFromThumb(thumb);
        showDetails();
    });
}

function getThumbnailsArray() {
    'use strict';
    var thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
    var thumbnailArray = [].slice.call(thumbnails);
    return thumbnailArray;
}

function hideDetails() {
    'use strict'
    document.body.classList.add(HIDDEN_DETAIL_CLASS);
}

function showDetails() {
    'use strict'
    var frame = document.querySelector(DETAIL_FRAME_SELECTOR);
    document.body.classList.remove(HIDDEN_DETAIL_CLASS);
    frame.classList.add(TINY_EFFECT_CLASS);
    setTimeout(function(){
        frame.classList.remove(TINY_EFFECT_CLASS);
    },50);
}

function addKeyPressHandler() {
    'use script'
    document.body.addEventListener('keyup', function(event) {
        event.preventDefault();
        console.log(event.keyCode);
        if (event.keyCode === ESC_KEY) {
            hideDetails();
        }
    });
}

function initializedEvents() {
    'use strict';
    var thumbnails = getThumbnailsArray();
    thumbnails.forEach(addThumbClickHandler);
    addKeyPressHandler();
}

function prev() {
    if(i <= 0) i = images.length; 
    i--;
    setImg();
    setTitle();
    
}

function next(){
    if(i >= images.length-1) i = -1;
    i++;
    setImg();
    setTitle();
    
}

function setImg() {
    var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
    detailImage.setAttribute('src',images[i]);
}
function setTitle() {
    var detailTitile = document.querySelector(DETAIL_TITLE_SELECTOR);
    return detailTitile.textContent = titles[i];
    
}


initializedEvents();