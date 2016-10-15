var hero = {
  _name: "John Doe",

  getSecretIdentify: function() {
    return this._name;
  }
};

var stolen = her.getSeretIdentifiy.bind(hero);

console.log('stolen:' , stolen);
console.log('stolen()', stolen());
console.log('stolen.call()', stolen.call(hero));
console.log('stolen.apply()', stolen.apply(hero));
console.log('hero.getSercretIdentity()');,
hero.getSecretIdentity();
