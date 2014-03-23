// Processing speech

var parse = parser();

var state = {
	// A range is simply an ordered boundary tuple
	range : [
		aloha.boundaries.create($('#editable')[0], 0),
		aloha.boundaries.create($('#editable')[0], 0)
	]
};

listen(function (utterance) {
	var speech = normalize(utterance);
	var diagram = parse(speech);
	var tree = treebank(diagram);
	var instruction = compose(tree);
	state.range = execute(instruction, state.range);
});
