SRC        = src
INC        = include
OBJ        = obj
BIN        = .

CC         = /path/to/emscripten/emcc
CFLAGS     = -c
CLDFLAGS   = -O

# INCLUDES = ...
# OBJECTS  = ...

${BIN}/parse: ${OBJECTS} ${CC} ${CLDFLAGS} ${OBJECTS}\
        -o ${BIN}/index.html\
        -s EXPORTED_FUNCTIONS="['_setup', '_teardown', '_diagram']"\
        --preload-file data

${OBJ}/parse.o: ${SRC}/javascript.c
                ${INCLUDES} ${INC}/command-line.h
                ${CC} ${CFLAGS}
                -I${INC}
                ${SRC}/javascript.c
                -o ${OBJ}/parse.o
