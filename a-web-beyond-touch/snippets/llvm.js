// Consuming a C API in JavaScript

function parser() {

	Module.ccall(
		'setup',    // function name
		'number',   // return type
		[],         // argument(s) type(s)
		[]          // parameter value(s)
	);

	return Module.cwrap(
		'diagram',  // function name
		'string',   // return type
		['string']  // argument(s) type(s)
	);

}
