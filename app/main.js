
// Variável de escopo global desta aplicação
var elrond = {};

(function () {

    var url = 'api/session',
        xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            elrond.session = JSON.parse(xhttp.responseText);

            // Inicia o legolas já com a sessão do usuário recuperada
            legolas.start();
        }
    };

    xhttp.open('GET', url, true);
    xhttp.send();

})();