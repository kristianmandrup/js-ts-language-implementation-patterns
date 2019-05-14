# Language Implementation Patterns in JavaScript and TypeScript

Code extracted from the book and rewritten for use in JavaScript and TypeScript

- [Book - Language implementation patterns](./book)
- [Terrence Parr Presentation](https://www.youtube.com/watch?v=q8p1voEiu8Q&feature=youtu.be)

The goal is to make it much easier to write:

- Languages/DSLs
- Interpreters
- ...

Using JS based Parser Generator tools such as:

- [Chevrotain](https://sap.github.io/chevrotain/docs/)
- [PEG.js](https://pegjs.org)
- ...

## Source code

- [Javascript](#Javascript)
- [TypeScript](#TypeScript)

## Javascript

### Part I

- [01 - Basic Parser patterns](./src/01.js)
- [02 - Recursive descent analysis](./src/02.js) LL(1) and LL(k)
- [03 - Enhanced parsing patterns analysis](./src/03.js)

### Part II

- [04 - Intermediate form trees](./src/04.js) IRs, Parse Trees and ASTs
- [05 - Walking and Rewriting Trees](./src/05.js) Tree visitors
- [06 - Tracking and and Identifying Program symbols](./src/06.js) Tree visitors
- [07 - Managing Symbol Tables for Data aggregates](./src/07.js) Symbol table management
- [08 - Enforcing Static Typing rules](./src/08.js) Static typing rules

### Part III

TODO

## TypeScript

### Part I

- [Part I](./ts-src/part-1/)
- [01 - Basic Parser patterns](./ts-src/part-1/01)
- [02 - Recursive descent analysis](./ts-src/part-1/02) LL(1) and LL(k)
- [03 - Enhanced parsing patterns analysis](./ts-src/part-1/03)

### Part II

- [Part II](./ts-src/part-2/)
- [04 - Intermediate form trees](./ts-src/part-2/04) IRs, Parse Trees and ASTs
- [05 - Walking and Rewriting Trees](./ts-src/part-2/05) Tree visitors
- [06 - Tracking and and Identifying Program symbols](./ts-src/part-2/06) Tree visitors
- [07 - Managing Symbol Tables for Data aggregates](./ts-src/part-2/07) Symbol table management
- [08 - Enforcing Static Typing rules](./ts-src/part-2/08) Static typing rules

### scope

Extracted from [@ashmoran/language_implementation_patterns](https://github.com/ashmoran/language_implementation_patterns)

- Monolithic scope
- Nested scope

Note: Rough draft

### interpreter

See [Interpreter docs](./ts-src/interpreter/_Interpreter.md)

- TypeScript code converted from Java source code (referenced in book)

### semantics

See [Semantics docs](./ts-src/semantics/_Semantics.md)

- TypeScript code converted from Java source code (referenced in book)

### transformations

See [Transformations docs](./ts-src/trans/_Transformations.md)

- TypeScript code converted from Java source code (referenced in book)

### visitor

See [Visitor docs](./ts-src/visitor/_Visitor.md)

- TypeScript code converted from Java source code (referenced in book)

### Part III

- [Part III](./ts-src/part-3/) TODO

## Tests

Tests can be run using [Jest]() via [ts-jest]()

`$ npm test`

To run individual tests

`$ jest ts-src/part-1/01`
