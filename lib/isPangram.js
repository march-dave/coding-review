function isPangram(strings) {
  return strings.map(str => {
    str = str.replace(/ /g, '');
    var dict = {};

    str.split('').forEach(char => {
      dict[char] = true;
    });

    return Object.keys(dict).length === 26 ? 1 : 0;
  }).join('');
}
