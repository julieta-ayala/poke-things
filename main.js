
function getPokemonDataCallback() {
    if (this.status) {
        var data = JSON.parse(this.responseText);

        var img_src = data["sprites"]["front_default"];
        $("#pokemon-img").attr("src", img_src);
        
        $("#pokemon-id").text(data["id"]);

        var abilities = data["abilities"];
        abilities.forEach((item) => {
            console.log(item);
        });

    }
}

function getPokemonData(name) {
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", getPokemonDataCallback);
    url = "https://pokeapi.co/api/v2/pokemon/" + name;
    oReq.open("GET", url);
    oReq.send();
}

$(document).ready(function(){
    $("#search").click(function () {
        var name = $("#name").val();
        getPokemonData(name);
    });
});