var hero = {

  _name : "John Doe",

  getSecretIdentify :  function() {
      return this._name;
  }
};

var stolen = hero.getSecretIdentify.bind(hero);

console.log('stolen: ', stolen);
console.log('stolen(): ', stolen() );
// console.log('stolen.call(): ', stolen.call(hero) );
// console.log('stolen.call(): ', stolen.apply(hero) );
console.log('hero.getSecretIdentify(): ', hero.getSecretIdentify());
