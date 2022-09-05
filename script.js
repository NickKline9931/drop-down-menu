function useMenu() {
    let items = document.querySelectorAll('a');

  items.forEach(item => {
    if (item.classList.contains("item")) {
        item.classList.remove("item"); 
    }else {
    item.classList.add("item");
    }
    
});
};
;



let dropButton = document.getElementById("dropbutton");
dropButton.addEventListener("click", useMenu);
