class Contact {
  constructor(firstName) {
    this.firstName = firstName;
  }
  helloSync(p1, p2) {
    console.log(`Hello ${p1}, ${p2} my name is ${this.firstName}`);
  }
  helloAsync() {
    var that = this;
    setTimeout(() => {
      // console.log(this);
      /*
      Timeout {
      _idleTimeout: 1000,
      _idlePrev: null,
      _idleNext: null,
      _idleStart: 39,
      _onTimeout: [Function],

      timeout._onTimeout();
      https://github.com/nodejs/node/blob/v6.x/lib/timers.js#L386
      */
      console.log('Hello ' + this.firstName);
    }, 1000);
  }
}

const romain = new Contact('Romain');
romain.helloSync('Jean', 'Eric'); // Hello Romain
romain.helloAsync(); // Hello Romain

const contact = {
  firstName: 'Toto',
};

// Méthodes de l'objet Function (depuis ES1)
romain.helloSync('Jean', 'Eric'); // Hello Romain
romain.helloSync.call(contact, 'Jean', 'Eric'); // Hello Jean, Eric my name is Toto
romain.helloSync.apply(contact, ['Jean', 'Eric']); // Hello Jean, Eric my name is Toto
romain.helloSync.call(contact, ...['Jean', 'Eric']); // Hello Jean, Eric my name is Toto

// En ES5 :
const contactHello = romain.helloSync.bind(contact);
contactHello('Jean', 'Eric');