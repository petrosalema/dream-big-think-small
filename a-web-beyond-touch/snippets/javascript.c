#include "link-includes.h"

Parse_Options opts;
Dictionary    dictionary;

int setup() {
	opts = parse_options_create();

    if (opts == NULL) {
		fprintf(stderr, "%s\n", lperrmsg);
		exit(-1);
    }

	parse_options_set_allow_null(opts, TRUE);

	dictionary = dictionary_create(
		"4.0.dict",
		"4.0.knowledge",
		"4.0.constituent-knowledge",
		"4.0.affix"
	);
	return 0;
}

int teardown() {
    parse_options_delete(opts);
    dictionary_delete(dictionary);
	return 0;
}

char * diagram(char * transcript) {
    Linkage  linkage;
	Sentence sentence;
	int      num_linkages;
    char *   sentence_diagram;

	sentence = sentence_create(transcript, dictionary);

	/* First parse with cost 0, 1 or 2 and no null links */
	parse_options_set_disjunct_cost(opts, 2);
	parse_options_set_min_null_count(opts, 0);
	parse_options_set_max_null_count(opts, 0);
	parse_options_reset_resources(opts);
	parse_options_set_linkage_limit(opts, 100);

	num_linkages = sentence_parse(sentence, opts);

	/* Now parse with null links */
	if ((num_linkages == 0)) {
	    fprintf(stdout, "No complete linkages found.\n");
	    if (parse_options_get_allow_null(opts)) {
			parse_options_set_min_null_count(opts, 1);
			parse_options_set_max_null_count(opts, sentence_length(sentence));
			num_linkages = sentence_parse(sentence, opts);
	    }
	}

	if (parse_options_timer_expired(opts)) {
	    fprintf(stdout, "Timer is expired!\n");
	}
	if (parse_options_memory_exhausted(opts)) {
	    fprintf(stdout, "Memory is exhausted!\n");
	}

	if (num_linkages > 0) {
	    linkage = linkage_create(0, sentence, opts);
		//sentence_diagram = linkage_print_diagram(linkage);
		sentence_diagram = linkage_print_constituent_tree(linkage, 2);
		linkage_delete(linkage);
	} else {
		printf("%s\n", "no linkages found");
	}

	sentence_delete(sentence);

	return sentence_diagram;
}
