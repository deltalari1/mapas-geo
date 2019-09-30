/* DROPDOWN */
jQuery(document).ready(function (e) {
    function t(t) {
        e(t).bind("click", function (t) {
            t.preventDefault();
            e(this).parent().fadeOut()
        })
    }
    e(".dropdown-toggle").click(function () {
        var t = e(this).parent(".button-dropdown").children(".dropdown-menu").is(":hidden");
        e(".button-dropdown .dropdown-menu").hide();
        e(".button-dropdown .dropdown-toggle").removeClass("active");
        if (t) {
            e(this).parent(".button-dropdown").children(".dropdown-menu").toggle().parent(".button-dropdown").children(".dropdown-toggle").addClass("active")
        }
    });
    e(document).bind("click", function (t) {
        var n = e(t.target);
        if (!n.parent().hasClass("button-dropdown")) e(".button-dropdown .dropdown-menu").hide();
    });
    e(document).bind("click", function (t) {
        var n = e(t.target);
        if (!n.parent().hasClass("button-dropdown")) e(".button-dropdown .dropdown-toggle").removeClass("active");
    })
});

/* MOSTRAR E ESCONDER OS MAPAS */
function funcverao(){ 
var div = document.getElementById('verao') 
/* se conteúdo está escondido, mostra e troca o valor do botão para: esconde */ 
if (div.style.display == 'none') { 
div.style.display = 'block' 
} else { 
/* se conteúdo está a mostra, esconde o conteúdo e troca o valor do botão para: mostra */ 
div.style.display = 'none' 
} 
}

function funcoutono(){ 
var div = document.getElementById('outono') 
if (div.style.display == 'none') { 
div.style.display = 'block' 
} else { 
div.style.display = 'none' 
} 
}

function funcinverno(){ 
var div = document.getElementById('inverno') 
if (div.style.display == 'none') {
div.style.display = 'block' 
} else { 
div.style.display = 'none' 
} 
}

function funcprimavera(){ 
var div = document.getElementById('primavera') 
if (div.style.display == 'none') { 
div.style.display = 'block' 
} else { 
div.style.display = 'none' 
} 
}
function funcprecipitaçaomedia(){ 
var div = document.getElementById('precipitaçaomedia') 
if (div.style.display == 'none') { 
div.style.display = 'block' 
} else { 
div.style.display = 'none' 
} 
}

function functemperaturamedia(){ 
var div = document.getElementById('temperaturamedia') 
if (div.style.display == 'none') { 
div.style.display = 'block' 
} else { 
div.style.display = 'none' 
} 
}

function funcaltura(){ 
var div = document.getElementById('Altura') 
if (div.style.display == 'none') { 
div.style.display = 'block' 
} else { 
div.style.display = 'none' 
} 
}
function funhidografia(){ 
var div = document.getElementById('hidrografias') 
if (div.style.display == 'none') { 
div.style.display = 'block' 
} else { 
div.style.display = 'none' 
} 
}
function funmorfologicas(){ 
var div = document.getElementById('morfológicas') 
if (div.style.display == 'none') { 
div.style.display = 'block' 
} else { 
div.style.display = 'none' 
} 
}
function funcunidades(){ 
var div = document.getElementById('unidade') 
if (div.style.display == 'none') { 
div.style.display = 'block' 
} else { 
div.style.display = 'none' 
} 
}
function funcdemografia(){ 
var div = document.getElementById('demografia') 
if (div.style.display == 'none') { 
div.style.display = 'block' 
} else { 
div.style.display = 'none' 
} 
}
function funcpopulaçao(){ 
var div = document.getElementById('população') 
if (div.style.display == 'none') { 
div.style.display = 'block' 
} else { 
div.style.display = 'none' 
} 
}
function funcdivisao(){ 
var div = document.getElementById('Divisão') 
if (div.style.display == 'none') { 
div.style.display = 'block' 
} else { 
div.style.display = 'none' 
} 
}
function funatmosfericos(){ 
var div = document.getElementById('atmosféricos') 
if (div.style.display == 'none') { 
div.style.display = 'block' 
} else { 
div.style.display = 'none' 
} 
}
