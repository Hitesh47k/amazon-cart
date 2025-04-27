 
qty.addEventListener("change", () => {
    let qty = document.getElementById("qty").value;
    let rupee = 1700;
    var ans = document.querySelectorAll('.rupee');
    ans.forEach(e =>{
        return e.innerHTML = qty*rupee; 
    });
});