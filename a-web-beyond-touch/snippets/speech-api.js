// Speech recognition using browser

function listen(callback) {

	var recognition = new webkitSpeechRecognition();

	recognition.continuous = true;

	recognition.interimResults = true;

	recognition.onerror = function (event) {
		console.error(event);
	};

	recognition.onresult = function (event) {
		var results = event.results;
		for (var i = event.resultIndex; i < results.length; i++) {
			var result = results[i];
			console.log(result[0].transcript);
			if (result.isFinal) {
				console.log('---------------------------------');
				return callback(result[0].transcript, result[0].confidence);
			}
		}
	};

	recognition.start();
}
