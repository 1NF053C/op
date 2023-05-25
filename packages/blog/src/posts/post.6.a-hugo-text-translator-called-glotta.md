---
title: (Project) a hugo text translator called "glotta"
description: glotta translates from hugo markdown files in english, to hugo markdown files in other languages
date: 2023-05-14
tags:
  - project
  - text translation
  - hugo
  - lexer
  - regex
  - parser
  - visitor
  - javascript
  - google translate api
  - deepl translate api
---

# <u> Project Takeaways </u>

- glotta helps developers translate hugo files from english into other languages
- glotta npm url: <a target="_blank" ref="noopener noreferrer" href="https://www.npmjs.com/package/glotta">https://www.npmjs.com/package/glotta</a>
- glotta github url: <a target="_blank" ref="noopener noreferrer" href="https://github.com/simeononsecurity/glotta">https://github.com/simeononsecurity/glotta</a>

NOTE: 
- `glotta` is experimental and is shared with no security guarantees. Be sure to rigorously test that each of your possible inputs do not result in unexpected bugs nor security vulnerabilities.

# <u> The Problem </u>

This was a fun one. A client of mine, <a href="https://simeononsecurity.ch">simeononsecurity</a>, asked me to help them translate their static website content from English into a number of other languages for global outreach. They use `hugo` to build their website, and they had ~250 **article** pages and ~2600 <i>**"...posts written in \[tag\].."**</i> pages, all of which required translations. The API translation providers they were sending content to does not differentiate between text that should be translated and hugo markdown syntax (which should not be translated), so some preprocessing was needed.

To solve this, I created `glotta`, a node.js program that scans and parses hugo content, tracks which parts of the file should be translated, translates those parts with the specified translation API, and then reconstructs a hugo file in a set of target languages without mangling hugo file syntax.

# <u> Outcomes Achieved for Simeononsecurity: </u>
- **~3,800** pages from ~250 pages (including only articles)
- **~43,000** pages from ~2,800 pages (including articles as well as generated tag pages, rss, sitemap, etc)
- **Total Website Traffic/Revenue Increase: PENDING**, (Waiting to hear back from Simeononsecurity for these details)

# <u> Companion Article: </u>
**Simeononsecurity** wrote a companion article for this project here: <a href="https://simeononsecurity.ch/other/glotta-streamlining-hugo-text-translation-for-global-reach/">https://simeononsecurity.ch/other/glotta-streamlining-hugo-text-translation-for-global-reach/</a>

# <u> Technical Concepts Used During Development </u>
- chevrotain.js:  helps developers define lexers, parsers, and visitors: <a target="_blank" ref="noopener noreferrer" href="https://github.com/Chevrotain/chevrotain">https://github.com/Chevrotain/chevrotain</a>
- lexer: (aka scanner) helps developers group text characters into "tokens"
- regex pattern: (aka regular expression) helps developers apply logic to text which match a certain pattern
- parser: helps developers generate syntax trees (aka concrete syntax tree or abstract syntax tree) using grammar rules and tokens
- visitor pattern: helps developers apply logic to datatypes in a (concrete or abstract) syntax tree
- hugo: helps developers generate static web pages: <a target="_blank" ref="noopener noreferrer" href="https://gohugo.io/">https://gohugo.io/</a>

# <u>Resources</u>
- <a target="_blank" ref="noopener noreferrer" href="https://en.wikipedia.org/wiki/Lexical_analysis">https://en.wikipedia.org/wiki/Lexical_analysis</a>
- <a target="_blank" ref="noopener noreferrer" href="https://en.wikipedia.org/wiki/Recursive_descent_parser">https://en.wikipedia.org/wiki/Recursive_descent_parser</a>
- <a target="_blank" ref="noopener noreferrer" href="https://en.wikipedia.org/wiki/Visitor_pattern">https://en.wikipedia.org/wiki/Visitor_pattern</a>
- <a target="_blank" ref="noopener noreferrer" href="https://en.wikipedia.org/wiki/Regular_expression">https://en.wikipedia.org/wiki/Regular_expression</a>
- <a target="_blank" ref="noopener noreferrer" href="https://cloud.google.com/translate/">https://cloud.google.com/translate/</a>
- <a target="_blank" ref="noopener noreferrer" href="https://www.deepl.com/en/docs-api/">https://www.deepl.com/en/docs-api/</a>
- <a target="_blank" ref="noopener noreferrer" href="https://github.com/Chevrotain/chevrotain">https://github.com/Chevrotain/chevrotain</a>
- <a target="_blank" ref="noopener noreferrer" href="https://gohugo.io/">https://gohugo.io/</a>
