const maplink = document.querySelector(".contacts-button-map");
const mappopup = document.querySelector(".modal-map");
const mapclose = document.querySelector(".modal-close-map");

     maplink.addEventListener("click", function(evt){
        evt.preventDefault();
        mappopup.classList.add("modal-show")
    });

     mapclose.addEventListener("click",  function(evt){
        evt.preventDefault();
        mappopup.classList.remove("modal-show")
    });

    window.addEventListener("keydown",  function (evt) {
        if(evt.keyCode === 27) {
            if(mappopup.classList.contains("modal-show")){
                evt.preventDefault();
                mappopup.classList.remove("modal-show")
            }
        }
    })