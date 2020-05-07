function save(val) {
  return () => {
    console.log(val);
  };
}

// for (var i=1; i<=5; i++) {
//   setTimeout(save(i), 0);
// }

for (let i=1; i<=5; i++) {
  setTimeout(() => {
    console.log(i);
  }, 0);
}

/*
6
6
6
6
6
*/

function Contact(firstName) {
  // Mauvaise pratique (getFirstName et setFirstName seront dupliquées)
  // préférer la convetion this._firstName pour
  // les propriétés privées
  this.getFirstName = function() {
    return firstName;
  }
  this.setFirstName = function(localFirstName) {
    firstName = localFirstName;
  }
}

const romain = new Contact('Romain');
console.log(romain.firstName); // undefined
console.log(romain.getFirstName()); // Romain