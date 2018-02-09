$(document).ready(function() {
    $.ajax({
        url: "proxy.php",
        type: "POST",
        data: {
            address: "http://stats.nba.com/stats/scoreboard/?GameDate=02/08/2018&LeagueID=00&DayOffset=0"
        },
        success: function(r) {
            console.log(r);
        }
    })
});