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


