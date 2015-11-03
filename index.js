// prepares css rule from passed declarations
var declarationsToRule = function(declarations, selector) {
    if(!selector) { selector = '.dummy'; }
    return selector + '{' + declarations + '}';
};

var rxRuleDeclarations = /([\s\S]*?){([\s\S]*?)}/i; // \s\S instead . for dotall

// extracts declarations from passed css rule
var ruleToDeclarations = function(rule) {
    var matches = rule.match(rxRuleDeclarations);
    if(!matches || matches.length < 2) {
      throw Error('Error parsing rule ' + rule);
      return false;
    }
    return matches[2];
};

module.exports.rxRuleDeclarations = rxRuleDeclarations;
module.exports.declarationsToRule = declarationsToRule;
module.exports.ruleToDeclarations = ruleToDeclarations;
