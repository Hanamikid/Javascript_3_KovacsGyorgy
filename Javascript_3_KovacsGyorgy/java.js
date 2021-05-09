function szamolas() {
    let k = document.getElementById("kvaff").value * 10;
    let c = document.getElementById("cikesz").value * 150;
    let a = +k + +c;

    document.getElementById("osszeg").innerHTML = a;

    if(document.getElementById("kvaff").value < 0){
        alert("Az érték nem lehet negatív");
        document.getElementById("kvaff").value = 0;
    }
    if(document.getElementById("cikesz").value < 0){
        alert("Az érték nem lehet negatív");
        document.getElementById("cikesz").value = 0;
    }
    if(document.getElementById("cikesz").value > 1){
        alert("Az aranycikeszt csak egyszer lehet elkapni");
        document.getElementById("cikesz").value = 1;
    }
}