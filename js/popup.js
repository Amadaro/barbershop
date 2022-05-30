const link = document.querySelector(".login-link");
    const popup = document.querySelector(".modal-login");
    const closelog = document.querySelector(".modal-close");
    const login = popup.querySelector("[name=login]");
    const form = popup.querySelector("form");
    const password = popup.querySelector("[name=password]");
    
    const storage = localStorage.getItem("login");
    let isStoragesupport = true;

    try {
        storage = localStorage.getItem("login");
    } catch (err) {
        isStoragesupport = false;
    }

     link.addEventListener("click", function(evt){
        evt.preventDefault();
        popup.classList.add("modal-show")
        if (storage) {
            login.value = storage;
            password.focus();
        } else {
            login.focus();
        }
    });

     closelog.addEventListener("click",  function(evt){
        evt.preventDefault();
        popup.classList.remove("modal-show")
        popup.classList.remove("modal-error")
    });

    form.addEventListener("submit", function (evt){
        if (!login.value || !password.value) {
            evt.preventDefault();
            popup.classList.remove("modal-error")
            popup.offsetWidth = popup.offsetWidth;
            popup.classList.add("modal-error")
            
        } else {
            if(isStoragesupport){
             localStorage.setItem("login", login.value);
            }
        }
    })
    
    window.addEventListener("keydown",  function (evt) {
        if(evt.keyCode === 27) {
            if(popup.classList.contains("modal-show")){
                evt.preventDefault();
                
                popup.classList.remove("modal-error")
                popup.classList.remove("modal-show")
            }
        }
    });