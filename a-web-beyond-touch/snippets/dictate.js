define([
	'../../src/aloha'
], function (
	aloha
) {
	'use strict';

	function $(selector, context) {
		return aloha.arrays.coerce((context || document).querySelectorAll(selector));
	}

	var growl = $('.growl')[0];
	var output = {
		error: function(msg) {
			growl.innerHTML = msg;
			window.console.error(msg);
		},
		warn: function(msg) {
			growl.innerHTML = msg;
			window.console.warn(msg);
		},
		log: function(msg) {
			growl.innerHTML = msg;
			window.console.log(msg);
		},
		debug: function (msg) {
			window.console.log(msg);
		}
	};

	function commonContainer(start, end) {
		return aloha.ranges.fromBoundaries(start, end).commonAncestorContainer;
	}

	// http://www.kaisdukes.com/papers/spatial-ltc2013.pdf */
	// http://en.wikipedia.org/wiki/Brown_Corpus#Part-of-speech_tags_used
	// http://www.link.cs.cmu.edu/link/dict/summarize-links.html

	// We can even use machine learning to train our algorithm using crowdsourcing game-with-a-purpose.
	// We will need to pair editing commands with word-aligned semantic trees.
	// The input is uncontrained--being only bound to english.
	// We will be using a very well defined domain (editing).
	// What about voice strain/
	//
	// There are four types of sentences in the english grammer (declerative,
	// imperative, interrogative, and exlamatory).  To build a instruction
	// system we only need to use the imperative type.

	/* https://dvcs.w3.org/hg/speech-api/raw-file/tip/speechapi.html#dfn-utteranceonend */
	if (!('webkitSpeechRecognition' in window)) {
		output.error('no speech recognition support');
		return;
	}

	var timestamp;
	function speechRecognition() {
		var recognition = new webkitSpeechRecognition();
		recognition.continuous = true;
		recognition.interimResults = true;

		recognition.onstart = function () {
			output.log('listening...');
		};

		recognition.onerror = function (event) {
			if ('no-speech' === event.error) {
				output.error('hello, you there? no speech detected');
			}
			if ('audio-capture' === event.error) {
				output.error('cannot capture speech. please check your microphone');
			}
			if ('not-allowed' == event.error) {
				if (event.timeStamp - timestamp < 100) {
					output.error('speech recognition blocked');
				} else {
					output.error('speech recognition denied');
				}
			}
			output.error(event.type);
		};

		recognition.onend = function () {
			output.warn('speech recognition ending');
			recognition.start();
		};
		return recognition;
	}

	function listen(publish) {
		var recognition = speechRecognition();
		timestamp = +new Date();
		recognition.onresult = function (event /* ?? */) {
			var results = event.results;
			var result;
			for (var i = event.resultIndex; i < results.length; i++) {
				result = results[i];
				if (result.isFinal) {
					return publish(result[0].transcript, result[0].confidence);
				}
			}
		};
		recognition.start();
	}

	var FORMAT_ACTIONS = {
		'underline-style' : 'format',
		'emphasis'        : 'format',
		'strike'          : 'format',
		'enlarge'         : 'format',
		'shrink'          : 'format',
		'justify'         : 'format',
		'center'          : 'format',
		'right align'     : 'format',
		'left align'      : 'format'
	};

	var SIGNALS = [
		'aloha', 'mahalo'
	];

	var VERBS = [
		'align',
		'enter',
		'insert',
		'emphasis', 'italicize', 'underline-style', 'strike', 'strike-through',
		'delete', 'remove', 'clear', 'erase',
		'cut', 'copy', 'paste',
		'enlarge', 'shrink',
		'undo', 'redo',
		'repeat',
		'dictate',
		'goto', 'move', 'select', 'skip',
		'expand', 'collapse',
		'prepend', 'append',
		'format', 'make'
	];

	var NOUNS = [
		// remove color
		'color',

		// clear fomatting
		'formatting',

		'block',
		'paragraph',
		'sentence',
		'word',
		'character',

		'image',
		'table',
		'list',
		'item',
		'element',
		'header',
		'link',

		'selection',
		'range',
		'boundary',

		'content',
		'editable'
	];

	var formatting = [
		'bold', 'italic', 'underline-style', 'struck-through'
	];

	/**
	 * A map of phrases commonly miss-recognized.
	 */
	var PHRASE_CORRECTIONS = {
		''            : /\b(now|then|let's)\b/,
		'skip the'    : /^the\b/ig,
		'skip the next' : /^(skeptics|pheonix)\b/ig,
		'it'          : /\ba\b/ig,
		'header'      : /\b(head|heading|nether|feather|redder|cheddar|deader|shredder|spreader)\b/,
		'first header' : /\bfurther\b/ig,
		'italic'      : /\bitalics\b/,
		'move'        : /\bwho\b/ig,
		'make it bold' : /(^bold)|(\bmacbook\b)/ig,
		'next'        : /\b(necks|nets|nest|sex|nicks|x|knex)\b/ig,
		'move the'    : /\bmovie\b/ig,
		'move it'     : /\bmoving\b/ig,
		'next word'   : /\b(network|xword|expert)\b/ig,
		'select'      : /\b(electra|selective|sled|selecting|electronics)\b/ig,
		'select this' : /\bsylectus\b/ig,
		'select the next' : /\b(lactinex|celeste)\b/ig,
		'the next'    : /\balexis\b/ig,
		'selection'   : /\be[lr]ection\b/ig,
		'word'        : /\b(worth|work|world)\b/ig,
		'cut'         : /\b(cause|caught)\b/ig,
		'paste'       : /\btaste\b/ig,
		'insert'      : /\bsearch\b/ig,
		'at the'      : /\bof the\b/ig,
		'current'     : /\bcards\b/ig,
		'delete'      : /\bdenise\b/ig,
		'caret'       : /\bcar\b/ig,
		'make it'     : /\b(making|magen|naked|fake|bacon)\b/ig,
		'red'         : /\b(bread|bed)\b/ig,
		'blue'        : /\bboobs\b/ig,
		'color'       : /\bcall in\b/ig,
		'bold'        : /\b(full|bolt|bald|pole|bowl|brawl|ball|told|trolled|polled|bowl|pulled|bowled|doled|tolled|hold|hold|gold|sold|fold|rolled|mould|mold|holed)\b/ig,
		'paragraph'   : /\bparagraph\b/ig,
		'delete it'   : /\bdeleted\b/ig,

		// substitutes for words that are not in the stanford english corpse
		// "make" is a better substitue for "format" than "decorate" is
		'move to '     : /\bskip\b/,
		'move to $1'       : /^(first|second|third|[a-z]+?th|last|left|right|start|end|beginning|next|previous)\b/ig,
		'the $1'           : /\b(first|second|third|[a-z]+?th|last|left|right|start|end|beginning|next|previous)\b/ig,
		'make'             : /^(format|color)\b/ig,
		'$1-align'         : /\b(right|left) align(ed)?\b/ig,
		' underline-style' : / underlined?\b/ig,
		'paste clipboard'  : /\bpaste\b/ig
	};

	var MISSING_PRONOUN = new RegExp('(' + VERBS.join('|') + ')\\s+(' + NOUNS.join('|') + ')', 'g');

	/**
	 * Normalizes the given utterance by correcting common slurred words.
	 *
	 * @param  {String} speech
	 * @return {String}
	 */
	function normalize(speech) {
		for (var replacement in PHRASE_CORRECTIONS) {
			if (PHRASE_CORRECTIONS.hasOwnProperty(replacement)) {
				speech = speech.replace(PHRASE_CORRECTIONS[replacement], replacement);
			}
		}
		speech = speech.replace(/ the\s+the /g, ' the ')
		               .replace(/ to the\s+to the /, ' to the ')
		               .replace(/ clipboard\s+(from )?(the )?clipboard /, ' clipboard ');
		// insert "the" between verb and subject if pronoun is missing
		return speech.replace(MISSING_PRONOUN, '$1 the $2');
	}

	// https://developer.mozilla.org/en-US/docs/Web/CSS/color_value
	var colors = {
		'black'      : 'black',
		'silver'     : 'silver',
		'gray'       : 'gray',
		'white'      : 'white',
		'maroon'     : 'maroon',
		'red'        : 'red',
		'purple'     : 'purple',
		'fuchsia'    : 'fuchsia',
		'green'      : 'green',
		'lime'       : 'lime',
		'olive'      : 'olive',
		'yellow'     : 'yellow',
		'navy'       : 'navy',
		'blue'       : 'blue',
		'teal'       : 'teal',
		'aqua'       : 'aqua',
		'orange'     : 'orange',
		'aquamarine' : 'aquamarine',
		'azure'      : 'azure',
		'beige'      : 'beige',
		'brown'      : 'brown',
		'chocolate'  : 'chocolate',
		'coral'      : 'coral',
		'crimson'    : 'crimson',
		'gold'       : 'gold',
		'grey'       : 'grey',
		'indigo'     : 'indigo',
		'ivory'      : 'ivory',
		'khaki'      : 'khaki',
		'lavender'   : 'lavender',
		'pink'       : 'pink',
		'plum'       : 'plum',
		'skyblue'    : 'skyblue',
		'turquoise'  : 'turquoise',
		'violet'     : 'violet'
	};

	var buckets = {
		'color': colors
	};

	function isAdjective(phrase) {
		return !!phrase.ADJP;
	}

	function isAdverb(phrase) {
		return !!phrase.ADVP;
	}

	function isPreposition(phrase) {
		return !!phrase.PP;
	}

	function isNoun(phrase) {
		return !!phrase.NP;
	}

	function getBucket(noun) {
		noun = noun.replace('the ', '');
		switch (noun) {
		// indefinite pronoun
		case 'color': 
			return buckets.color;

		// subject pronoun
		default:
			return null;
		}
	}

	/**
	 * Given a verb phrase object, determine what action name (and perhaps
	 * object) of the imperative are.
	 *
	 * @param  {Object} phrase
	 * @return {Object} action
	 */
	function extractAction(phrase) {
		var action = phrase[0]['#text'];
		if (FORMAT_ACTIONS[action]) {
			// Because format actions require an object
			// eg: action: format, object: red, subject: word
			return {
				action: FORMAT_ACTIONS[action],
				object: action
			};
		}
		return {
			action: action
		};
	}

	function extractNoun(phrases) {
		for (var i = 0; i < phrases.length; i++) {
			if (!isNoun(phrases[i])) {
				continue;
			}
			var noun = PARTS.NP(phrases[i]);
			if (i + 1 === phrases.length || !isAdjective(phrases[i + 1])) {
				return noun;
			}
			// which `noun`
			var bucket = getBucket(noun);
			if (bucket) {
				var adj = PARTS.ADJP(phrases[i + 1]);
				return noun + ':' + adj;
			}
			return noun;
		}
	}

	function extractPreposition(phrases) {
		for (var i = 0; i < phrases.length; i++) {
			if (isPreposition(phrases[i])) {
				return PARTS.PP(phrases[i]);
			}
		}
	}

	function extractAdjective(phrases) {
		for (var i = 0; i < phrases.length; i++) {
			if (isAdjective(phrases[i])) {
				return PARTS.ADJP(phrases[i]);
			}
		}
	}

	function adjective(phrase) {
		return phrase.ADJP[0]['#text'];
	}

	function adverb(phrase) {
		return phrase.ADVP[0]['#text'];
	}

	function noun(phrase) {
		var nouns = [];
		var ads = [];
		var conjunctions = phrase.NP;
		for (var i = 0; i < conjunctions.length; i++) {
			if (isAdjective(conjunctions[i])) {
				ads.push(PARTS.ADJP(conjunctions[i]));
			} else if (isAdverb(conjunctions[i])) {
				ads.push(PARTS.ADVP(conjunctions[i]));
			} else {
				nouns.push(conjunctions[i]['#text']);
			}
		}
		nouns = nouns.join('');
		ads = ads.join('');
		var ret = nouns;
		if (nouns && ads) {
			return nouns + ':' + ads;
		}
		return nouns;
	}

	// http://www.chompchomp.com/terms/prepositionalphrase.htm
	//
	// form =  preposition  +               +  noun|pronoun|gerund|clause
	// form = [preposition] + [modifier(s)] + [noun|pronoun|gerund|clause]
	//
	// pronoun (reference) = he, it, they, them, those, that
	// http://www.chompchomp.com/terms/pronounreference.htm
	//
	// answers the question "which one"
	// will never contain the subject
	function preposition(phrase) {
		var parts = phrase.PP;
		var head = parts[0]['#text'];
		var constituents = parts.slice(1);
		var object = extractNoun(constituents);
		// "forwards"
		if (!object) {
			return head;
		}
		return object;
	}

	function sentence(phrase) {
		return compose(phrase.S);
	}

	/**
	 * Extracts action, subject, and (optional) object.
	 * do(action) -> to(subject) * object?
	 *
	 * http://www.chompchomp.com/terms/verbphrase.htm
	 * https://en.wikipedia.org/wiki/Verb_phrase
	 * https://en.wikipedia.org/wiki/Linguistic_typology
	 *
	 * delete -> word
	 * [VP delete [NP selection NP] VP]
	 *
	 * format -> selection * bold
	 * [VP paint [NP the selection NP] [PP with [NP the color NP] [ADJP red ADJP] PP] VP]
	 *
	 * process("add squares to words")
	 * [S [VP add [NP squares NP] [PP to [NP words NP] PP] VP] S] 
	 */
	function verb(phrase) {
		var parts = phrase.VP;
		var action = extractAction(parts);
		var constituents = parts.slice(1);
		var subject = extractNoun(constituents);
		// Because the subject may be implied (eg:"align to the left")
		if (!subject) {
			subject = 'selection';
		}
		var object = action.object;
		if (!object) {
			object = extractPreposition(constituents);
		}
		if (!object) {
			object = extractAdjective(constituents);
		}
		action = action.action;
		return {
			action  : action,
			subject : subject,
			object  : object
		};
	}

	/**
	 * Parts of speech tags mapped to functions to parse phrases.
	 *
	 * @type {string, function}
	 */
	var PARTS = {
		'ADJP' : adjective,
		'ADVP' : adverb,
		'NP'   : noun,
		'PP'   : preposition,
		'S'    : sentence,
		'VP'   : verb
	};

	/**
	 * A list of parts of speech tags.
	 *
	 * @type {Array.<string>}
	 */
	var TAGS = [

		// adjective phrase:
		// headed (https://en.wikipedia.org/wiki/Head_(linguistics)) by adjective
		// answers the questions
		// What kind? How many? or Which one?
		//
		// yields a qualifier which must used against a noun to determine
		// which exact entity the noun denotes
		'ADJP',

		// adverb phrase:
		'ADVP',

		// noun phrase:
		// https://en.wikipedia.org/wiki/Noun_phrase
		// headed by noun or pronoun
		// functions as subject(s) or object(s) in sentence
		// yields entity like places (boundary positions) or objects
		// (selection), image, paragraph, words
		'NP',

		// prepositional phrase
		// headed by preposition, followed by a noun phrase
		// yields location
		'PP',

		// sentence
		// every sentence must have a verb
		// yields stack of lambdas
		'S',

		// verb phrase:
		// contains verb as head along with complements such as noun phrases or prepositional phrases
		// yields action
		'VP',

		// participle
		'PRT'
	];

	/**
	 * Determine the given part's speech part tag.
	 *
	 * @param  {Object} part
	 * @return {string}
	 */
	function getTag(part) {
		for (var i = 0; i < TAGS.length; i++) {
			if (part.hasOwnProperty(TAGS[i])) {
				return TAGS[i];
			}
		}
	}

	function compose(phrases) {
		for (var i = 0; i < phrases.length; i++) {
			var phrase = phrases[i];
			var tag = getTag(phrase);
			var parse = PARTS[tag];
			if (parse) {
				var command = parse(phrase);
				if (!command.object && i + 1 < phrases.length && phrases[i + 1].hasOwnProperty('#text')) {
					command.object = phrases[i + 1]['#text'];
				}
				return command;
			}
		}
	}

	/**
	 * Given a DOM node, returns its structure in the form of an array of it's
	 * text data.
	 *
	 * @param  {Node} dom
	 * @return {Array}
	 */
	function xmlToArray(dom) {
		if (3 === dom.nodeType) {
			return dom.nodeValue;
		}
		var arr = [];
		if (dom.hasChildNodes()) {
			for (var i = 0, l = dom.childNodes.length; i < l; i++) {
				var item = dom.childNodes.item(i);
				var obj = {};
				obj[item.nodeName] = xmlToArray(item);
				arr.push(obj);
			}
		}
		return arr;
	}

	var tags = '(' + TAGS.join('|') + ')';
	var START_TAGS = new RegExp(' ?\\[' + tags + ' ', 'g');
	var END_TAGS   = new RegExp(' ' + tags + '\\]',   'g');

	/**
	 * Parses the given constituent tree diagram from a string into an array of
	 * data structures that map various parts of speech.
	 *
	 * @param  {string} diagram
	 * @return {Array}
	 */
	function treebank(diagram) {
		var div = document.createElement('div');
		div.innerHTML = diagram.replace(START_TAGS, '<$1>').replace(END_TAGS, '<\/$1>');
		return xmlToArray(div.firstChild);
	}

	var positionalAdj = {
		'first'   : 0,
		'second'  : 1,
		'third'   : 2,
		'fourth'  : 3,
		'fifth'   : 4,
		'sixth'   : 5,
		'seventh' : 6,
		'eigth'   : 7,
		'ninth'   : 8
	};

	function determineIndex(part) {
		return positionalAdj[part];
	}

	/**
	 * A list of selectable entities.
	 *
	 * @type {string, function(node):boolean}
	 */
	var SELECTORS = {
		'paragraph' : aloha.html.hasLinebreakingStyle,
		'block'     : aloha.html.hasLinebreakingStyle,
		'header'    : ['H1', 'H2', 'H3', 'H4', 'H5', 'H6'],
		'link'      : ['A'],
		'image'     : ['IMG'],
		// First list item in list
		'list'      : function (node) {
			return aloha.html.isListItem(node)
			    && (1 === aloha.dom.prevSiblings(node).filter(aloha.html.isListItem).length);
		},
		'list item' : ['LI'],
		'word'      : 'word',
		'character' : 'char'
	}

	function prevContainer(selector, boundary) {
		var reference = aloha.boundaries.prevNode(boundary);
		return aloha.traversing.nextNonAncestor(reference, false, function (node) {
			return reference !== node && !aloha.html.isGroupContainer(node) && selector(node);
		}, aloha.dom.isEditingHost);
	}

	function nextContainer(selector, boundary) {
		var reference = aloha.boundaries.nextNode(boundary);
		return aloha.traversing.nextNonAncestor(reference, true, function (node) {
			return reference !== node && !aloha.html.isGroupContainer(node) && selector(node);
		}, aloha.dom.isEditingHost);
	}

	function determineSelector(part) {
		var selector = SELECTORS[part];
		if (!selector) {
			return;
		};
		var type = typeof selector;
		if ('function' === type || 'string' === type) {
			return selector;
		}
		return function (node) {
			return aloha.arrays.contains(selector, node.nodeName);
		};
	}

	function removeArticle(subject) {
		return subject.replace(/^(a|the|this|that|those) /, '').trim();
	}

	function parsePosition(where, state) {
		where = removeArticle(where);
		var parts = where.split(':');
		if (1 === parts.length) {
			parts = where.split(' ');
		}
		var unit;
		var direction;
		var index;
		var selector;
		for (var i = 0; i < parts.length; i++) {
			var part = parts[i];
			index = determineIndex(parts[i]);
			switch (parts[i]) {
			case 'next':
				direction = 'forward';
				break;
			case 'previous':
				direction = 'backward';
				break;
			default: 
				if (!unit) {
					selector = determineSelector(part);
					if (selector) {
						unit = selector;
					}
				}
			}
			if (direction && unit) {
				break;
			}
		}
		if (!unit) {
			return 'backward' === direction ? state.start : state.end;
		}
		if ('number' === typeof index) {
			var boundary = state.end
			if ('word' === unit) {
				do {
					boundary = aloha.html.next(boundary, 'word');
				} while (index--);
				return boundary;
			}
			var editable = aloha.dom.upWhile(
				aloha.boundaries.container(boundary),
				aloha.fn.complement(aloha.dom.isEditingHost)
			);
			var containers = $('*', editable).filter(unit);
			return (containers.length > index)
			     ? aloha.boundaries.create(containers[index], 0)
			     : state.end;
		}
		switch (unit) {
		case 'word':
			var boundary = 'backward' === direction
				 ? aloha.html.prev(state.start, 'word')
				 : aloha.html.next(state.end, 'word');
			if (aloha.boundaries.isAtStart(boundary) || aloha.boundaries.isAtEnd(boundary)) {
				return boundary;
			}
			var container = aloha.boundaries.container(boundary);
			var offset = aloha.boundaries.offset(boundary)
			if (aloha.dom.isTextNode(container)) {
				var chr = 'backward' === direction
				        ? container.data.charAt(offset + 1)
				        : container.data.charAt(offset - 1);
				if (aloha.strings.WHITE_SPACE.test(chr)) {
					return 'backward' === direction
						 ? aloha.html.prev(boundary, 'word')
						 : aloha.html.next(boundary, 'word');
				}
			}
			return boundary;
		case 'character':
			return 'backward' === direction
				 ? aloha.html.prev(state.start, 'char')
				 : aloha.html.next(state.end, 'char');
		default:
			var container = 'backward' === direction
						  ? prevContainer(unit, state.start)
						  : nextContainer(unit, state.end);
			if (container) {
				return aloha.boundaries.create(container, 0);
			}
		}
		return 'backward' === direction ? state.start : state.end;
	}

	function selectNode(node) {
		var start;
		var end;
		if (aloha.predicates.isVoidNode(node)) {
			start = aloha.boundaries.fromNode(node); 
			end = aloha.boundaries.create(
				aloha.boundaries.container(start), 
				aloha.boundaries.offset(start) + 1
			);
		} else {
			start = aloha.boundaries.create(node, 0);
			end = aloha.boundaries.fromEndOfNode(node);
		}
		return [start, end];
	}

	function resolveSubject(subject, state) {
		if (state.subject === subject) {
			return state.resolved;
		}
		var selector =  SELECTORS[subject];
		if (selector) {
			return selectNode($(selector, commonContainer(state.start, state.end))[0]);
		}
		switch (subject) {
		case 'next':
			return selectNode(nextContainer(state.resolved.nodeName, state.end));
		case 'previous':
			return selectNode(prevContainer(state.resolved.nodeName, state.start));
		case 'it':
		case 'them':
		case 'them all':
		case 'this':
		case 'that':

		case 'selection':

		default:
			return aloha.boundaries.get();
		}
	}

	var caret = document.querySelector('.aloha-caret');
	aloha.dom.addClass(caret, 'aloha-caret-blink');


	/**
	 * Moves `subject` to `where`.
	 */
	function move(subject, where, state) {
		if (!subject) {
			output.error('cannot determine what to move. please speak english.');
		}
		if (!where) {
			output.error('cannot determine where to move. please speak english.');
		}
		subject = removeArticle(subject).trim();
		if ('selection' !== subject) {
			output.warn('subject "' + subject + '" not found');
			return;
		}
		var position = parsePosition(where, state);
		return {
			start : position,
			end   : position
		};
	}

	function determineStyling(style) {
		var formats = {
			'underline-style' : 'underline',
			'emphasis'        : 'italic',
			'italic'          : 'italic',
			'bold'            : 'bold',
		}
		var format = formats[style];
		if (format) {
			return function (start, end) {
				var range = aloha.ranges.fromBoundaries(start, end);
				aloha.editing.format(range, format, true);
				return aloha.boundaries.fromRange(range);
			};
		}
		var color = colors[style];
		if (color) {
			return function (start, end) {
				var range = aloha.ranges.fromBoundaries(start, end);
				aloha.editing.format(range, style, true);
				aloha.colors.setTextColor(range, color);
				return aloha.boundaries.fromRange(range);
			};
		}
	}

	function make(subject, formatting, state) {
		subject = removeArticle(subject);
		var boundaries = [state.start, state.end];
		var style = determineStyling(formatting);
		if (style) {
			boundaries = style(boundaries[0], boundaries[1]);
		}
		return {
			start : boundaries[0],
			end   : boundaries[1]
		};
	}

	function _delete(subject) {
		subject = removeArticle(subject);
		var object = resolveSubject(subject, state);
		var boundaries;
		if (object.nodeName) {
			boundaries = [
				aloha.boundaries.fromNode(object),
				aloha.boundaries.fromEndOfNode(object)
			];
		} else {
			boundaries = object;
		}
		var range = aloha.ranges.fromBoundaries(boundaries[0], boundaries[1]);
		var editable = aloha.editables.fromBoundary(aloha.editor, boundaries[0]);
		aloha.boundarymarkers.hint(range);
		aloha.editing.delete(range, editable);
	}

	// this word
	// the next 2 words
	// the previous paragraph
	function select(subject, where, state) {
		where = removeArticle(subject);
		var parts = where.split(':');
		if (1 === parts.length) {
			parts = where.split(' ');
		}
		var start, end;
		if (aloha.arrays.contains(parts, 'word')) {
			var direction = aloha.arrays.contains(parts, 'previous') ? 'backwards' : 'forwards';
			if ('forwards' === direction) {
				start = aloha.html.prev(state.end);
				end = parsePosition(subject, state);
			} else {
				start = parsePosition(subject, state);
				end = state.start;
			}
		} else {
			start = parsePosition(subject, state);
			end = aloha.boundaries.fromEndOfNode(aloha.boundaries.container(start));
		}
		return {
			start : start,
			end   : end
		};
	}

	var ACTIONS = {
		'go'     : move,
		'move'   : move,
		'skip'   : move,
		'make'   : make,
		'delete' : _delete,
		'select' : select
	};

	function execute(instruction, state) {
		var action = ACTIONS[instruction.action];
		if (!action) {
			output.error('action "' + instruction.action + '" not supported');
			return state;
		}
		var range = action(instruction.subject, instruction.object, state);
		return {
			last  : instruction,
			start : range.start,
			end   : range.end
		};
	}

	var initialized = false;

	function repeat(state) {
		return (state.last) ? execute(state.last, state) : state;
	}

	var QUICK_ACTIONS = {
		'again'     : repeat,
		'repeat'    : repeat,
		'once more' : repeat
	};

	function showSelection(state) {
		console.warn(aloha.boundarymarkers.hint([state.start, state.end]));
		aloha.boundaries.select(state.start, state.end);
		var container = aloha.boundaries.container(state.end);
		if (aloha.dom.isTextNode(container)) {
			container = container.parentNode;
		}
		container.focus();
		aloha.selections.show(
			$('.aloha-caret')[0],
			state.end,
			aloha.selections.stylesFromOverrides(aloha.overrides.map(aloha.overrides.harvest(container)))
		);
	}

	function init() {
		if (initialized) {
			return;
		}

		initialized = true;

		Module.ccall('init', 'number', [], []);

		var parse = Module.cwrap('diagram', 'string', ['string']);

		var process = function (utterance, state) {
			var speech = normalize(utterance.trim());

			if (!state) {
				var range = aloha.boundaries.get();
				if (range) {
					state = {
						start: range[0],
						end:   range[1]
					};
				} else {
					var editable = document.querySelector('.aloha-editable');
					state = {
						range : {
							start : aloha.boundaries.create(editable, 0),
							end   : aloha.boundaries.create(editable, 0)
						}
					};
				}
			}

			var action = QUICK_ACTIONS[speech];
			if (action) {
				output.log(speech);
				state = action(state);
				showSelection(state);
				return state;
			}

			var diagram = parse(speech).trim();
			var tree = treebank(diagram);
			var instruction = compose(tree);
			if (!instruction) {
				output.error(speech, diagram);
				return;
			}
			output.log(diagram + ' ⇒ ' + JSON.stringify(instruction));
			state = execute(instruction, state);

			var start = state.start;
			var next = aloha.boundaries.nextNode(start);
			if (aloha.dom.isTextNode(next)) {
				state.start = aloha.html.next(start);
			}

			showSelection(state);
			return state;
		};

		var editable = document.querySelector('.aloha-editable');
		var state = {
			range : {
				start : aloha.boundaries.create(editable, 0),
				end   : aloha.boundaries.create(editable, 0)
			}
		};

		window.listen = function () {
			listen(function (utterance) {
				state.range = process(utterance, state.range);
			});
		};
	}

	Module.postRun.push(init);
	init();

});
