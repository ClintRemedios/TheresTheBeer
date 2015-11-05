var text = 1;
var url = "https://hooks.slack.com/services/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";
var verb = "POST";

while (true){
	//update text (location)
	text = text + 1;
	
	var data = JSON.stringify({
		"channel": "#wtb",
		"username": "here is the beer",
		"text": text,
		"icon_emoji": ":beers:"
	});

	var xhr = new XMLHttpRequest();
	xhr.open(verb, url, true);

	console.log(text);
	//xhr.send(data);

	//pause for 5 seconds
	wait(5000);
}

function wait(millis)
{
	var date = new Date();
	var curDate = null;
	do { curDate = new Date(); }
	while(curDate-date < millis);
}