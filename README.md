# Language Implementation Patterns in JavaScript and TypeScript

Create Your Own Domain-Specific and General Programming Languages.

"Learn to build configuration file readers, data readers, model-driven code generators, source-to-source translators, source analyzers, and interpreters. You don’t need a background in computer science—ANTLR creator Terence Parr demystifies language implementation by breaking it down into the most common design patterns. Pattern by pattern, you’ll learn the key skills you need to implement your own computer languages."

The code in this repo has been extracted/converted from the book [Language Implementation Patterns](https://pragprog.com/book/tpdsl/language-implementation-patterns) and rewritten for use in JavaScript and TypeScript

- [Terrence Parr Presentation](https://www.youtube.com/watch?v=q8p1voEiu8Q&feature=youtu.be)

The goal of this effort is to make it much easier to work with AST/CST in Javascript or TypeScrip i no rder to write:

- Languages/DSLs
- Interpreters
- Transformations (input to output)
- ...

Using JS based Parser Generator tools such as:

- [Chevrotain](https://sap.github.io/chevrotain/docs/)
- [PEG.js](https://pegjs.org)
- ...

## Goals

The main goal of this repo is to contain a set of templates and patterns that can be used when working with the AST (tree structure) generated from a Lexer->Parser pipeline.

ANTLR generates the Lexer and Parser from the Grammar itself. For an example see the `PieParser.ts` and `PieLexer.ts` in `interpreter/tree`. For reference, these have been mostly converted to syntactic TypeScript.

The ANTLR grammar files (`.g`) in this repo are for the old ANTLR 3.x, where code fragments were inserted as part of the grammar (actions inserted into the generated lexer/parser).
In the new ANTLR 4 grammars are no longer polluted (recommended) but separated (See [The Definitive ANTLR 4 2nd Edition](https://www.oreilly.com/library/view/the-definitive-antlr/9781941222621/)).

In chevrotain you currently have to hand-write the Lexer and Parser (more fine control).
It should be possible to generate a similar Lexer/Parser pair for an engine such as Chevrotain using the same ANTLR grammar DSL (please help upgrade or add grammar files to match ANTLR 4 conventions).

The templates here should be usable with any Lexer/Parser. We could even have adapters to various Lexer and Parser engines that implement a standard interface.

The current infrastructure contained in this repo sometimes references ANTLR specific classes.
These have not been implemented yet. Please help implement the basic functionality to make these examples work with Chevrotain and other popular Javascript/Typescript Lexer/Parser libraries.

## Full example - AppML

The repo [app-ml-proj](https://github.com/kristianmandrup/app-ml-proj) contains a full example of a Chevrotain based DSL under development. It allows you to declaratively specify the domain model and workflows for an application. It could then potentially generate most (if not all) of the application artifacts and infrastructure from this single source of truth.

This project also contains some helper libs for working with chevrotain

- [chevrotain-lexx](https://github.com/kristianmandrup/app-ml-proj/tree/master/packages/chevrotain-lexx) Wrapper API to facilitate working with the chevrotain lexer
- [chevrotain-parsx](https://github.com/kristianmandrup/app-ml-proj/tree/master/packages/chevrotain-parsx) Wrapper API to facilitate working with the chevrotain Parser

The main idea is to make for smoother APIs for the most common cases and allow composition of lexers and parsers.

This allows you to break you language up into smaller reusable parts that can be developed tested on their own and then composed into a full language.

The example DSL, is partioned into:

- [base-lang](https://github.com/kristianmandrup/app-ml-proj/tree/master/packages/base-lang) basic language constructs
- [process-lang](https://github.com/kristianmandrup/app-ml-proj/tree/master/packages/process-lang) language to specify processes
- [workflow-lang](https://github.com/kristianmandrup/app-ml-proj/tree/master/packages/workflow-lang) language to specify workflows
- [data-lang](https://github.com/kristianmandrup/app-ml-proj/tree/master/packages/data-lang) language to specify domain model (data structures, relationships and constraints)
- [app-ml-lang](https://github.com/kristianmandrup/app-ml-proj/tree/master/packages/app-ml-lang) full language composed from process, workflow and data language models

### VS code language extension

Preliminary work has also been done to document (and partially create) a VS Code language extension and some basic LSP infrastructure (which can be used with other Editors/IDEs)

- [extension](https://github.com/kristianmandrup/app-ml-proj/tree/master/packages/extension) VS Code extension
- [lsp](https://github.com/kristianmandrup/app-ml-proj/tree/master/packages/lsp) Language Server Protocol implementation (WIP)

## Source code

The source code in this repo consists of some Javascript from [@Lucifier129](https://github.com/Lucifier129/language-implementation-patterns). This has additionally been ported to TypeScript.

In addition much of the book code from Parts II and II have been ported to TypeScript.

- [Javascript](#Javascript) See [src](./src/)
- [TypeScript](#TypeScript) See [ts-src](./ts-src/)

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

### Part III

- [Part III](./ts-src/part-3/) TODO

Note that the following sections mostly fall into Part III of the book.

### scope

Rough draft code, extracted from [@ashmoran/language_implementation_patterns](https://github.com/ashmoran/language_implementation_patterns) (ruby)

- Monolithic scope
- Nested scope

## Working with the AST

The remaining code are templates designed mostly to work with the CST/AST (ie. after lexing and parsing). The code is still a WIP and a little rough on the edges or incomplete.

This code can be used as a good starting point (base) to implement your own solutions with a little more work. Please get the book and read the relevant chapter(s) to understand the reasoning behind the patterns/implementations/examples and how to fit it into your own scenario.

- Visitor
- Semantics
- Interpreter
- Transformations

### visitor

See [Visitor docs](./ts-src/visitor/_Visitor.md)

- TypeScript code converted from Java source code (referenced in book)

Different patterns for how to visit the AST/CST tree structure (f.ex either intrusive with visit methods in the CST/AST or via external visitor). The visitors can be used for all the following patterns (foundational for working with AST/CST trees)

### semantics

See [Semantics docs](./ts-src/semantics/_Semantics.md)

- TypeScript code converted from Java source code (referenced in book)

Semantics are f.ex used to figure out the types and symbols used to see if the parsed tree follows the semantic rules of the language. This can also include resolving scopes to see if a symbol reference references a symbol value in scope etc.

### interpreter

See [Interpreter docs](./ts-src/interpreter/_Interpreter.md)

- TypeScript code converted from Java source code (referenced in book)

How to interpret and run the code (in memory)

### transformations

See [Transformations docs](./ts-src/trans/_Transformations.md)

- TypeScript code converted from Java source code (referenced in book)

How to transform the parsed input into some output, such as different code, a schema/model etc.

The transformations use [StringTemplate for TypeScript](https://github.com/kristianmandrup/StringTemplate-js)

[Announcement StringTemplate v4](http://hardlikesoftware.com/weblog/2015/04/12/stringtemplate-for-javascript/)

`StringTemplate` is an excellent fit for generating output from an AST (it has been designed specifically for that purpose as part of ANTLR).

For simple scenarios, any template function will do.

## Tests

Tests can be run using [Jest]() via [ts-jest]()

`$ npm test`

To run individual tests

`$ jest ts-src/part-1/01`

## License

MIT @kristianmandrup 2019
