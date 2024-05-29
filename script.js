$(document).ready(function() {
    function updateClock() {
        var now = new Date();
        var hours = now.getHours();
        var minutes = now.getMinutes();
        var seconds = now.getSeconds();
        $('#clock').text(hours + ':' + minutes + ':' + seconds);
    }
    setInterval(updateClock, 1000);
});
