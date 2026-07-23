const cat = document.querySelector(".cat");

cat.addEventListener("click", () => {

    cat.animate([
        {transform:"rotate(0deg)"},
        {transform:"rotate(-15deg)"},
        {transform:"rotate(15deg)"},
        {transform:"rotate(0deg)"}
    ],{
        duration:600
    });

});