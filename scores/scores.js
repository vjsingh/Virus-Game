// async gets scores and feeds to callback
var get_scores = function(callback) {
    // ajax request to get scores
    $.post("get_scores.php", { num: 10 }, callback);
};

// interprets json and displays it
var display_scores = function(data) {
    var scores = jQuery.parseJSON(data);
    //console.log(scores);
    for_each(
        scores,
        function(row) {
            var rowarr = [];
            for_each(keys(row), function(i) { rowarr.push(row[i]); });
            $("#scores").append("<div>"+rowarr.join(", ")+"</div>");
        }
    );
};

// gets and displays scores
var do_scores = function() {
    get_scores(display_scores);
};
