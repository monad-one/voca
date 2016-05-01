//import toString from '../utils/string/to_string';
//import nilDefault from '../utils/undefined/nil_default';
//import isNil from '../utils/object/is_nil';
//
///**
// * Splits `subject` into an array of chunks by `separator`.
// *
// * @function split
// * @static
// * @memberOf Split
// * @param {string} [subject=''] The string to split into characters.
// * @return {Array} Returns the array of characters.
// * @example
// * v.chars('cloud');
// * // => ['c', 'l', 'o', 'u', 'd']
// */
//export default function(subject) {
//  var subjectString = toString(nilDefault(subject, ''));
//  return subjectString.split('');
//}