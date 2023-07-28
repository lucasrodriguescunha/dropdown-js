const botaoSubir = document.querySelector("#voltar-ao-topo");

window.addEventListener("scroll", function() {
    const scrollTop = document.documentElement.scrollTop;

    if (scrollTop > 500)
        botaoSubir.style.display = "block";
    else {
        botaoSubir.style.display = "none";
    }
});

botaoSubir.addEventListener("click", function (e) {
    e.preventDefault();

    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});