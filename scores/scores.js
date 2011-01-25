var make_scores = function(){
	var obj = {};
	
	// async gets scores and feeds to callback
	var get_scores = function(callback){
		// ajax request to get scores
		if (g_user_id) {
			$.post("get_scores.php", {
				num: 10,
				uid : 1092540269 //g_user_id
			}, callback);
		}
		else {
			$.post("get_scores.php", {
				num: 10
			}, callback);
		}
	};
	
	var get_user_scores = function(callback) {
		$.post("get_scores.php", {
			num : 10
		}, callback);
	};
	
	// interprets json and displays it
	var display_scores = function(data){
		$("#scores").empty();
		var scores = jQuery.parseJSON(data);
		//console.log(scores);
		// scores is an array of row objects
		for_each(scores, function(row){
			// convert each row to an array for now
			var rowarr = [];
			for_each(keys(row), function(i){
				rowarr.push(row[i]);
			});
			$("#scores").append("<div>" + rowarr.join(", ") + "</div>");
		});
	};
	
	// gets and displays scores
	obj.do_scores = function(){
		//console.log("g_user_id: " + g_user_id);
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
			obj.do_scores;
		});
	};
	
	return obj;
}

scores = make_scores();
