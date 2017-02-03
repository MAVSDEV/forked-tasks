document.addEventListener("DOMContentLoaded", loadOtherResources);

function loadOtherResources(){
    loadStyleSheets();
    document.getElementById("pizza-image").src = "views/images/pizzeria-min_100x75.jpg";
    document.getElementById("project-mobile-image").src = "img/lh5_100x61.jpg";
    document.getElementById("project-webperf-image").src = "img/lh6_111x69.jpg";
    document.getElementById("project-2048-image").src = "img/unnamed_111x56.jpg";

    document.getElementsByClassName("jullphoto")[0].src = "img/julia-min_70x70.jpg";
    document.getElementById("cameron-image").src = "img/profilepic_70x70.jpg";

}

function loadStyleSheets() {
    var head = document.getElementsByTagName('head')[0];

    var asyncStyleSheets = [
        'css/style.min.css'
    ];

    for (var i = 0; i < asyncStyleSheets.length; i++) {
        var link = document.createElement('link');
        var rel = document.createAttribute('rel');
        var href = document.createAttribute('href');

        rel.value = 'stylesheet';
        href.value = asyncStyleSheets[i];

        link.setAttributeNode(rel);
        link.setAttributeNode(href);

        head.appendChild(link);
    }
}