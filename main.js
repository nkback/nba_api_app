$(document).ready(function() {
    var url = "https://stats.nba.com/stats/scoreboard/?GameDate=02/16/2018&LeagueID=00&DayOffset=0";
    fetch(url)
    .then((resp) => resp.json())
    .then(function(data){
        console.log(data);
    })
    .catch(function(error){
        alert("Error");
    });
});