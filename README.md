# inline-styles-parse
Handles inline styles for consumption by a CSS parser that expects a full CSS rule instead.

[![NPM](https://nodei.co/npm/inline-styles-parse.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/inline-styles-parse/)

## Usage
````
npm install --save inline-styles-parse
````


Prepare CSS rule for parsing from declarations (inline styles):
````
inlineStylesParse.declarationsToRule('padding:1em;');
  => '.dummy{padding:1em;}'
````

Extract CSS declarations (inline styles) from stringified CSS rule:
````
inlineStylesParse.ruleToDeclarations('.dummy{padding:1em;}');
  => 'padding:1em;'
````


## Methods
### declarationsToRule
Prepares a CSS rule from passed declarations.
#### declarations
The string of the CSS declarations.
#### selector
Optional selector name. Default is '.dummy'.


### ruleToDeclarations
Extracts declarations from passed CSS rule.
#### rule
The string of the CSS rule.
