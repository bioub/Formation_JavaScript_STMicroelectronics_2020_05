var porteeGlobaleOuDeModule = 'porteeGlobaleOuDeModule';

function externe() {
  var porteeDeClosure = 'porteeDeClosure';
  function interne() {
    var porteeLocale = 'porteeLocale';
    console.log(porteeLocale);
    console.log(porteeDeClosure);
    console.log(porteeGlobaleOuDeModule);
  }
  interne();
}

externe();

// ^
// |
// |
// |interne
// |externe
// +----------------------------->
