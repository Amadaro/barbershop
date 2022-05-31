(function(){
var maplink = document.querySelector(".contacts-button-map");
var mappopup = document.querySelector(".modal-map");
var mapclose = document.querySelector(".modal-close-map");
var overlayMapModal = document.querySelector('.modal-overlay-map');

for(var i = 0; i < maplink.length; i++){

    maplink[i].addEventListener('click',function(evt){
        evt.preventDefault();
        mappopup.classList.add('modal-show');
        overlayMapModal.classList.add('overlay-show');
    })
}

mapclose.addEventListener("click",  function(evt){
    evt.preventDefault();
    mappopup.classList.remove("modal-show")
    overlayMapModal.classList.remove('overlay-show');
    });

overlayMapModal.addEventListener('click',function(event){
    mappopup.classList.remove('modal-show');
    this.classList.remove('overlay-show');
})

    maplink.addEventListener("click", function(evt){
        evt.preventDefault();
        mappopup.classList.add("modal-show");
        });
    
    document.addEventListener('keydown',function(evt){
		if(evt.keyCode === 27){
			mappopup.classList.remove('modal-show');
			overlayMapModal.classList.remove('overlay-show');
		}
	})
})()