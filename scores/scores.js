var make_scores = function(){
	var obj = {};

    var num_rows = 15;
	
	// async gets scores and feeds to callback
	var get_scores = function(callback){
		// ajax request to get scores
        
        // want to do them sequentially so we
        // chain the callbacks
		
        // this comes third via callback
        var do_global = function() {
            // Global High Scores
            $.post("scores/get_scores.php", {
                num: num_rows, 
            }, callback("Global Scores",
                // at the end of last callback we need to
                // make the tabs
                function() {
                    console.log("making tabs");
                    $("#scores").tabs();

                    // remove the loading message
                    console.log("removing loading msg");
                    $("#scores-loading").remove();

                    $("#scores").show();
                }
            ));
        };

        // this comes second via callback
        var do_friends = function() {
            var friends = g_get_friends();
            if (friends.length !== 0) {
                // Global High Scores
                $.post("scores/get_scores.php", {
                    num: num_rows, 
                    uid: g_user_id,
                    friends: friends 
                }, callback("Friends' Scores", do_global));
                console.log("got friends scores");
            }
            else {
                do_global();
                console.log("skipped friends scores");
            }
        };
        
        // this comes first
		// Personal high scores
		if (g_user_id) {
			$.post("scores/get_scores.php", {
				num: num_rows,
				uid :  g_user_id
			}, callback("Your Scores", do_friends));
            console.log("getting user high scores");
		}
        else {
            do_global();
        }
	};
	
	var get_user_scores = function(callback) {
		$.post("scores/get_scores.php", {
			num : num_rows 
		}, callback);
	};
	
	// interprets json and displays it
	// Passing it a header returns the actual function
	// Must use this style so long as get_scores is async
    // Passing a function as do_more does it at the end of the callback
    var tab_count = 1;
	var display_scores = function(header, do_more) {
        var headers = [ "Rank", "Score", "Level", "Name", "Date" ];
        var formatters = {
            "score": add_commas,
            "date": function(date_str) { 
                //var d = new Date(date_str); 
                var d = new Date();
                // date_str must be of format yyyy-mm-dd
                var year = parseInt(date_str.substring(0, 4));
                var month = parseInt(date_str.substring(5, 7))-1;
                var day = parseInt(date_str.substring(8));
                d.setFullYear(year, month, day);
                //return d.f("NNN d, yyyy");
                return d.format("mmm d, yyyy");
            },
        };
		return function(data){
            //console.log(data);

			var link = "<li><a href='#tabs-"+tab_count+"'>"
                + header + "</a></li>";
            $("#tab-list").append(link);

            // con is the content to put in the score tab 
            var con = "<div id='tabs-"+tab_count+"'>";

            try {
			    var scores = jQuery.parseJSON(data);
                if (!scores) {
                    throw "No scores loaded";
                }
            }
            catch (e) {
                con += "<div style='padding:5;'>Error loading scores."
                   +" Please check your internet connection.";
            }
            if (scores) {

                con += "<table class='score-table' >";

                // -- start header row --
                con += "<tr>";
                for_each(headers, function(header) {
                    con += "<th class='"+header+"-header'>" + header + "</th>";
                });
                con += "</tr>";
                // -- end header row --
                
                //console.log(scores);
                // scores is an array of row objects
                var row_count = 1;
                for_each(scores, function(row){
                    con += "<tr>";
                    con += "<td>" + row_count + ".</td>";
                    for_each(keys(row), function(key){
                        var f = formatters[key] || function(x) { return x; };
                        // dont show uid
                        if (key !== "userid") {
                            con += "<td>" + f(row[key]) + "</td>";
                        }
                    });
                    con += "</tr>";
                    row_count += 1;
                });
                // fill up rest of table for beauty's sake
                while (row_count <= num_rows) {
                    con += "<tr>";
                    for_each(headers, function(header){
                        con += "<td>&nbsp;</td>";
                    });
                    con += "</tr>";
                    row_count += 1;
                }

                con += "</table>";
                con += "</div>";

            }

            // add it to page
			$("#scores").append(con);
            // update tab num
            tab_count += 1;

            // do some more stuff if necessary
            if (do_more) {
                do_more();
            }
		};
	};
	
	// gets and displays scores
	obj.do_scores = function(){
        console.log("trying to load scores");
		$("#scores").empty();
        $("#scores").hide();
		$("#scores").append("<ul id='tab-list'></ul>");
        // reset tab count
        tab_count = 1;
		get_scores(display_scores);
	};
	
	// inserts a score into the db
	// score_obj:
	//  - score: int score
	//  - level: mutation level
	//  - userid: unique id for the user (from fb?)
	var post_score = function(score_obj, callback){
		$.post("scores/post_score.php", score_obj, callback);
	};
	
	// testing function to use with form
	obj.submit_score = function(score, level, name, uid){
		/*
		 var form = document.forms[0];
		 var score = form.elements[0].value;
		 var level = form.elements[1].value;
		 var userid = form.elements[2].value;
		 */
        var date_str = (new Date()).format("yyyy-mm-dd");
        console.log(date_str);
 
		var score_obj = {
			/*
			 score: parseInt(score),
			 level: parseInt(level),
			 */
			score: score,
			level: level,
			name: name,
			userid: uid,
			//date: new Date().f('yyyy-MM-dd')
            date: date_str
        };
		console.log(score_obj);
		
		post_score(score_obj, function(data){
			console.log(data);
			//obj.do_scores();
		});
	};
	
	return obj;
}

var scores = make_scores();
