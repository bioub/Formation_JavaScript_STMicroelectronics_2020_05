var porteeGlobaleOuDeModule = 'porteeGlobaleOuDeModule';

function externe() {
  var porteeDeClosure = 'porteeDeClosure';
  function interne() {
    var porteeLocale = 'porteeLocale';
    console.log(porteeLocale);
    console.log(porteeDeClosure);
    console.log(porteeGlobaleOuDeModule);
  }
  setTimeout(interne, 100);
}

externe();

// ^
// |
// |
// |
// |externe     interne
// +------------100----------------->
