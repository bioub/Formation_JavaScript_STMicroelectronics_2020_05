function save(val) {
  return () => {
    console.log(val);
  };
}

for (var i=1; i<=5; i++) {
  setTimeout(save(i), 0);
}

/*
6
6
6
6
6
*/

function Contact(firstName) {
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