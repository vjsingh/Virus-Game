var make_scores = function(){
	var obj = {};
	
	// async gets scores and feeds to callback
	var get_scores = function(callback){
		// ajax request to get scores
		
		// Personal high scores
		if (g_user_id) {
			$.post("scores/get_scores.php", {
				num: 10,
				uid :  g_user_id
			}, callback("Your Top High Scores"));
		}
		
		// Global High Scores
		$.post("scores/get_scores.php", {
			num: 10
		}, callback("Global Top High Scores"));
	};
	
	var get_user_scores = function(callback) {
		$.post("scores/get_scores.php", {
			num : 10
		}, callback);
	};
	
	// interprets json and displays it
	// Passing it a header returns the actual function
	// Must use this style so long as get_scores is async
	var display_scores = function(header) {
        var row_headers = [ "Score", "Level", "Name", "Date" ];
		return function(data){
            // con is the content to put in the scores div
            var con = "";
			con += "<div>" + header + "</div>";
			con += "<table>";

            // -- start header row --
            con += "<tr>";
            for_each(row_headers, function(header) {
                con += "<td>" + header + "</td>";
            });
            con += "</tr>";
            // -- end header row --
            
			var scores = jQuery.parseJSON(data);
			//console.log(scores);
			// scores is an array of row objects
			for_each(scores, function(row){
                con += "<tr>";
				for_each(keys(row), function(i){
                    con += "<td>" + row[i] + "</td>";
				});
                con += "</tr>";
			});

            // add it to page
			$("#scores").append(con);
		};
	};
	
	// gets and displays scores
	obj.do_scores = function(){
		$("#scores").empty();
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
		var score_obj = {
			/*
			 score: parseInt(score),
			 level: parseInt(level),
			 */
			score: score,
			level: level,
			name: name,
			userid: uid,
			date: new Date().f('yyyy-MM-dd')
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
