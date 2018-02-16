$(document).ready(function() {
    function nbaApiHit(url, callback) {
        var request = new XMLHttpRequest();

        request.addEventListener("load", onLoad);
        request.addEventListener("error", onFail);
        request.addEventListener("abort", onFail);

        request.open("GET", url);
        request.send();

        function onLoad(e) {
            if (request.status >= 400) {
                onFail(e);
            }
            else {
                var data = JSON.parse(this.responseText);
                callback(null, data);
            }
        }

        function onFail(e) {
            callback(new Error("Something went horribly wrong"));
        }
    }


    // Hit the api
    nbaApiHit("https://stats.nba.com/stats/scoreboard/?GameDate=02/16/2018&LeagueID=00&DayOffset=0", function(error, data) {
        if (error) {
            console.log("There was an error", error);
        }
        else {
            console.log("Data is ", data);
        }
    })
});