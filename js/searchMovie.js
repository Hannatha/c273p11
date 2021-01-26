$(document).ready(function () {
    $("#btnSearch").click(function () {
        var title = $("#sTitle").val();
        var year = $("#sYear").val();
        var plot = $("#sPlot").val();
        $.ajax({
            url: "http://www.omdbapi.com/",
            type: "GET",
            data: "t=" + title + "&y=" + year + "&plot=" + plot + "&apikey=19c0fc0b",
            dataType: 'jsonp',
            success: function (response) {
                if (localStorage.getItem("list") === null) {
                    var list = [];
                } else {
                    var list = JSON.parse(localStorage.getItem("list"));
                }
                console.log(response);
                var msg = "";
                msg += "Title: " + response.Title;
                msg += "<br/>Release: " + response.Released;
                msg += "<br/>Runtime: " + response.Runtime;
                msg += "<br/>Genre: " + response.Genre;
                msg += "<br/>Actors: " + response.Actors;
                msg += "<br/>Plot: " + response.Plot;
                $("#contents").html(msg);
                msg = "<img src='" + response.Poster + "'/>";
                $("#poster").html(msg);
                list.push(response);
                localStorage.setItem("list", JSON.stringify(list));
            },
            error: function (obj, textStatus, errorThrown) {
                console.log("Error " + textStatus + ": " + errorThrown);
            }
        });
    });
});