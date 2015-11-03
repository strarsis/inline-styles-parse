// prepares css rule from passed declarations
var declarationsToRule = function(strDeclarations, selectorName) {
    if(!selectorName) { selectorName = '.dummy'; }
    return selectorName + '{' + strDeclarations + '}';
};

var rxRuleDeclarations = /([\s\S]*?){([\s\S]*?)}/i; // \s\S instead . for dotall

// extracts declarations from passed css rule
var ruleToDeclarations = function(strRule) {
    var matches = strRule.match(rxRuleDeclarations);
    if(!matches || matches.length < 2) {
      throw Error('Error parsing rule ' + strRule);
      return false;
    }
    return matches[2];
};

module.exports.rxRuleDeclarations = rxRuleDeclarations;
module.exports.declarationsToRule = declarationsToRule;
module.exports.ruleToDeclarations = ruleToDeclarations;
