$(document).ready(function() {
    $.ajax({
        url: "http://stats.nba.com/stats/scoreboard/?GameDate=02/08/2018&LeagueID=00&DayOffset=0",
        type: "GET",
        success: function(r) {
            console.log(r);
        }
    })
});