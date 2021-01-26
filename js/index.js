
$(document).ready(function () {
    if (JSON.parse(localStorage.getItem("list")) !== null) {
        console.log(JSON.parse(localStorage.getItem("list")));
        var array = JSON.parse(localStorage.getItem("list"));
        var message = "";
        for (var i = 0; i < array.length; i++) {
            message += "<div class='card bg-light'>";
            var movie = array[i];
            message += "<img class='card-img-top' src='" + movie.Poster + "' alt='Card image'>";
            message += "<div class='card-header'>Title: " + movie.Title + "</div>";
            message += "<div class='card-body'><p class='card-text'>" + movie.Plot + "</p></div>"
            message += "</div>";
        }

        $("#contents").html(message);
    }
});