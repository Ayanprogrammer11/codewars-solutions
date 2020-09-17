/*
  Given: an array containing hashes of names

  Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

  Example:

  list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
  // returns 'Bart, Lisa & Maggie'

  list([ {name: 'Bart'}, {name: 'Lisa'} ])
  // returns 'Bart & Lisa'

  list([ {name: 'Bart'} ])
  // returns 'Bart'

  list([])
  // returns ''
  Note: all the hashes are pre-validated and will only contain A-Z, a-z, '-' and '.'.
*/

const list = names => {
  let arr = names.map(n => n.name), len = arr.length;
  
  if (len === 0) return '';
  if (len === 1) return arr.join('');
  
  return arr.slice(0, -1).join(', ') + ' & ' + arr.slice(-1);
}
