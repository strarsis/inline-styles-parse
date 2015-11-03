var test              = require('tape')
  , inlineStylesParse = require('../');

test('properly prepares a rule from passed declarations', function (t) {
  t.plan(5);

  t.equal(inlineStylesParse.declarationsToRule(
    'padding:1em;'),
    '.dummy{padding:1em;}'
  );

  t.equal(inlineStylesParse.declarationsToRule(
    'padding:1em;margin:1em;color:red '),
    '.dummy{padding:1em;margin:1em;color:red }'
  );

  t.equal(inlineStylesParse.declarationsToRule(
    " background:url('/images/test.jpg')"),
    ".dummy{ background:url('/images/test.jpg')}"
  );

  t.equal(inlineStylesParse.declarationsToRule(
    '  -webkit-transition: all 4s ease; '),
    '.dummy{  -webkit-transition: all 4s ease; }'
  );

  t.equal(inlineStylesParse.declarationsToRule(
'-webkit-transition: all 4s ease;' + "\n" + '-webkit-border-top-left-radius: 10px;'),
    '.dummy{-webkit-transition: all 4s ease;' + "\n" + '-webkit-border-top-left-radius: 10px;}'
  );

});

test('properly extracts declarations from a passed rule', function(t) {
  t.plan(5);

  t.equal(inlineStylesParse.ruleToDeclarations(
    '.dummy {background:blue;}'),
    'background:blue;'
  );

  t.equal(inlineStylesParse.ruleToDeclarations(
    '.dummy {-webkit-transition: all 4s ease;}'),
    '-webkit-transition: all 4s ease;'
  );

  t.equal(inlineStylesParse.ruleToDeclarations(
    '.dummy  { padding: 1em 2em 3em 4em; }'),
    ' padding: 1em 2em 3em 4em; '
  );

  t.equal(inlineStylesParse.ruleToDeclarations(
    '.dummy{padding:   1em 2em 3em 4em;}'),
    'padding:   1em 2em 3em 4em;'
  );

  t.equal(inlineStylesParse.ruleToDeclarations(
    '.dummy  {  padding:   1em 2em 3em 4em;}   '),
    '  padding:   1em 2em 3em 4em;'
  );
});

test('properly prepares a rule and reverses back to declarations', function(t) {
  t.plan(2);

  var test1 = '.dummy{padding:1em;}';
  t.equal(reverseRule(test1), test1);

  var test2 = '.dummy{  -webkit-transition: all 4s ease;' + "\n" + '-webkit-border-top-left-radius: 10px;}';
  t.equal(reverseRule(test2), test2);
});
var reverseRule = function(strRule) {
  return inlineStylesParse.declarationsToRule(
    inlineStylesParse.ruleToDeclarations(strRule)
  );
};
