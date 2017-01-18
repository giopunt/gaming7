function get(url) {
  // Return a new promise.
  return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff
    var req = new XMLHttpRequest();
    req.open('GET', url);

    req.onload = function() {
      // This is called even on 404 etc
      // so check the status
      if (req.status == 200) {
        // Resolve the promise with the response text
        resolve(req.response);
      }
      else {
        // Otherwise reject with the status text
        // which will hopefully be a meaningful error
        reject(Error(req.statusText));
      }
    };

    // Handle network errors
    req.onerror = function() {
      reject(Error("Network Error"));
    };

    // Make the request
    req.send();
  });
}

function getJSON(url) {
  return get(url).then(JSON.parse);
}

function getParameterByName(name, url) {
    if (!url) {
      url = window.location.href;
    }
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

// Utils for localstorage

var Storage = function () {};

Storage.prototype.get = function ( key ) {
    try {
        return JSON.parse( localStorage.getItem( key ) );
    }
    catch (e) {
        return localStorage.getItem( key );
    }
};

Storage.prototype.set = function ( key, value ) { // key[String], value[Object or String]
    //console.log('val is type: ' + typeof value);
    if ( typeof value === 'function' ) {
        throw new TypeError('Functions can not be saved');
    }
    localStorage[key] = typeof value === 'object' ? JSON.stringify(value) : value;
};

Storage.prototype.remove = function ( key ) {
    localStorage.removeItem(key);
};

var storage = new Storage();
