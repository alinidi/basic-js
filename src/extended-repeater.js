const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const repeat = options.repeatTimes || 1;
  const sep = options.separator || "+";

  const addWord =
    options.addition !== undefined ? String(options.addition) : "";
  const addWordRepTime = options.additionRepeatTimes || 1;
  const addWordSep = options.additionSeparator || "|";
  const addWordFull = Array(addWordRepTime).fill(addWord).join(addWordSep);

  const result = Array(repeat)
    .fill(str + addWordFull)
    .join(sep);
  return result;
}

module.exports = {
  repeater,
};
