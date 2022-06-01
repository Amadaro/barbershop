
var maplink = document.querySelector(".footer-address");
var mappopup = document.querySelector(".modal-map");
var mapclose = document.querySelector(".modal-close-map");
var overlayMapModal = document.querySelector(".modal-overlay-map");

    maplink.addEventListener('click',function(evt){
        evt.preventDefault();
        mappopup.classList.add('modal-show');
        overlayMapModal.classList.add('overlay-show');
    })


mapclose.addEventListener("click", function(evt){
    evt.preventDefault();
    mappopup.classList.remove("modal-show")
    overlayMapModal.classList.remove('overlay-show');
    });

overlayMapModal.addEventListener('click',function(evt){
    evt.preventDefault();
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