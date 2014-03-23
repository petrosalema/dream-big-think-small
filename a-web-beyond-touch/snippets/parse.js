
var Module;
if (typeof Module === 'undefined') Module = eval('(function() { try { return Module || {} } catch(e) { return {} } })()');
if (!Module.expectedDataFileDownloads) {
  Module.expectedDataFileDownloads = 0;
  Module.finishedDataFileDownloads = 0;
}
Module.expectedDataFileDownloads++;
(function() {
    function fetchRemotePackage(packageName, callback, errback) {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', packageName, true);
      xhr.responseType = 'arraybuffer';
      xhr.onprogress = function(event) {
        var url = packageName;
        if (event.loaded && event.total) {
          if (!xhr.addedTotal) {
            xhr.addedTotal = true;
            if (!Module.dataFileDownloads) Module.dataFileDownloads = {};
            Module.dataFileDownloads[url] = {
              loaded: event.loaded,
              total: event.total
            };
          } else {
            Module.dataFileDownloads[url].loaded = event.loaded;
          }
          var total = 0;
          var loaded = 0;
          var num = 0;
          for (var download in Module.dataFileDownloads) {
          var data = Module.dataFileDownloads[download];
            total += data.total;
            loaded += data.loaded;
            num++;
          }
          total = Math.ceil(total * Module.expectedDataFileDownloads/num);
          if (Module['setStatus']) Module['setStatus']('Downloading data... (' + loaded + '/' + total + ')');
        } else if (!Module.dataFileDownloads) {
          if (Module['setStatus']) Module['setStatus']('Downloading data...');
        }
      };
      xhr.onload = function(event) {
        var packageData = xhr.response;
        callback(packageData);
      };
      xhr.send(null);
    };
    function handleError(error) {
      console.error('package error:', error);
    };
      var fetched = null, fetchedCallback = null;
      fetchRemotePackage('parse.data', function(data) {
        if (fetchedCallback) {
          fetchedCallback(data);
          fetchedCallback = null;
        } else {
          fetched = data;
        }
      }, handleError);
  function runWithFS() {
function assert(check, msg) {
  if (!check) throw msg + new Error().stack;
}
Module['FS_createPath']('/', 'data', true, true);
Module['FS_createPath']('/data', 'words', true, true);
    function DataRequest(start, end, crunched, audio) {
      this.start = start;
      this.end = end;
      this.crunched = crunched;
      this.audio = audio;
    }
    DataRequest.prototype = {
      requests: {},
      open: function(mode, name) {
        this.name = name;
        this.requests[name] = this;
        Module['addRunDependency']('fp ' + this.name);
      },
      send: function() {},
      onload: function() {
        var byteArray = this.byteArray.subarray(this.start, this.end);
          this.finish(byteArray);
      },
      finish: function(byteArray) {
        var that = this;
        Module['FS_createPreloadedFile'](this.name, null, byteArray, true, true, function() {
          Module['removeRunDependency']('fp ' + that.name);
        }, function() {
          if (that.audio) {
            Module['removeRunDependency']('fp ' + that.name); // workaround for chromium bug 124926 (still no audio with this, but at least we don't hang)
          } else {
            Module.printErr('Preloading file ' + that.name + ' failed');
          }
        }, false, true); // canOwn this data in the filesystem, it is a slide into the heap that will never change
        this.requests[this.name] = null;
      },
    };
      new DataRequest(0, 1594, 0, 0).open('GET', '/data/4.0.constituent-knowledge');
    new DataRequest(1594, 13977, 0, 0).open('GET', '/data/4.0.knowledge');
    new DataRequest(13977, 19660, 0, 0).open('GET', '/data/tiny.dict');
    new DataRequest(19660, 19757, 0, 0).open('GET', '/data/4.0.affix');
    new DataRequest(19757, 62958, 0, 0).open('GET', '/data/4.0.batch');
    new DataRequest(62958, 211974, 0, 0).open('GET', '/data/4.0.dict');
    new DataRequest(211974, 212324, 0, 0).open('GET', '/data/words/words.n.p');
    new DataRequest(212324, 239032, 0, 0).open('GET', '/data/words/words.v.4.3');
    new DataRequest(239032, 268631, 0, 0).open('GET', '/data/words/words.v.4.4');
    new DataRequest(268631, 269660, 0, 0).open('GET', '/data/words/words.v.5.3');
    new DataRequest(269660, 277915, 0, 0).open('GET', '/data/words/words.v.2.3');
    new DataRequest(277915, 286893, 0, 0).open('GET', '/data/words/words.v.1.3');
    new DataRequest(286893, 287086, 0, 0).open('GET', '/data/words/words.n.c.2');
    new DataRequest(287086, 380842, 0, 0).open('GET', '/data/words/words.n.1');
    new DataRequest(380842, 384225, 0, 0).open('GET', '/data/words/words.v.6.5');
    new DataRequest(384225, 387008, 0, 0).open('GET', '/data/words/words.v.6.2');
    new DataRequest(387008, 395666, 0, 0).open('GET', '/data/words/words.v.1.2');
    new DataRequest(395666, 396809, 0, 0).open('GET', '/data/words/words.v.5.4');
    new DataRequest(396809, 434664, 0, 0).open('GET', '/data/words/words.n.3');
    new DataRequest(434664, 435654, 0, 0).open('GET', '/data/words/words.adv.3');
    new DataRequest(435654, 495518, 0, 0).open('GET', '/data/words/words.adj.1');
    new DataRequest(495518, 504678, 0, 0).open('GET', '/data/words/words.v.2.4');
    new DataRequest(504678, 504981, 0, 0).open('GET', '/data/words/words.s');
    new DataRequest(504981, 514139, 0, 0).open('GET', '/data/words/words.v.2.5');
    new DataRequest(514139, 514679, 0, 0).open('GET', '/data/words/words.n.2.x');
    new DataRequest(514679, 515663, 0, 0).open('GET', '/data/words/words.v.1.p');
    new DataRequest(515663, 516919, 0, 0).open('GET', '/data/words/words.v.8.4');
    new DataRequest(516919, 517118, 0, 0).open('GET', '/data/words/words.n.c.1');
    new DataRequest(517118, 526601, 0, 0).open('GET', '/data/words/words.v.1.4');
    new DataRequest(526601, 527403, 0, 0).open('GET', '/data/words/words.adv.2');
    new DataRequest(527403, 528351, 0, 0).open('GET', '/data/words/words.v.5.2');
    new DataRequest(528351, 529538, 0, 0).open('GET', '/data/words/words.n.t');
    new DataRequest(529538, 537291, 0, 0).open('GET', '/data/words/words.v.1.1');
    new DataRequest(537291, 538118, 0, 0).open('GET', '/data/words/words.v.5.1');
    new DataRequest(538118, 541511, 0, 0).open('GET', '/data/words/words.v.6.4');
    new DataRequest(541511, 542627, 0, 0).open('GET', '/data/words/words.v.10.4');
    new DataRequest(542627, 572300, 0, 0).open('GET', '/data/words/words.v.4.5');
    new DataRequest(572300, 595648, 0, 0).open('GET', '/data/words/words.v.4.1');
    new DataRequest(595648, 596714, 0, 0).open('GET', '/data/words/words.v.8.3');
    new DataRequest(596714, 597606, 0, 0).open('GET', '/data/words/words.v.8.1');
    new DataRequest(597606, 598485, 0, 0).open('GET', '/data/words/words.v.10.1');
    new DataRequest(598485, 615565, 0, 0).open('GET', '/data/words/words.adv.1');
    new DataRequest(615565, 616560, 0, 0).open('GET', '/data/words/words.v.10.3');
    new DataRequest(616560, 617534, 0, 0).open('GET', '/data/words/words.v.10.2');
    new DataRequest(617534, 747117, 0, 0).open('GET', '/data/words/words.n.2.s');
    new DataRequest(747117, 750018, 0, 0).open('GET', '/data/words/words.v.6.3');
    new DataRequest(750018, 753499, 0, 0).open('GET', '/data/words/words.adj.2');
    new DataRequest(753499, 776904, 0, 0).open('GET', '/data/words/words.n.4');
    new DataRequest(776904, 802935, 0, 0).open('GET', '/data/words/words.v.4.2');
    new DataRequest(802935, 810013, 0, 0).open('GET', '/data/words/words.v.2.1');
    new DataRequest(810013, 810563, 0, 0).open('GET', '/data/words/words.y');
    new DataRequest(810563, 814585, 0, 0).open('GET', '/data/words/words.adj.3');
    new DataRequest(814585, 815618, 0, 0).open('GET', '/data/words/words.v.8.2');
    new DataRequest(815618, 816874, 0, 0).open('GET', '/data/words/words.v.8.5');
    new DataRequest(816874, 824745, 0, 0).open('GET', '/data/words/words.v.2.2');
    new DataRequest(824745, 827128, 0, 0).open('GET', '/data/words/words.v.6.1');
    var PACKAGE_PATH;
    if (typeof window === 'object') {
      PACKAGE_PATH = window['encodeURIComponent'](window.location.pathname.toString().substring(0, window.location.pathname.toString().lastIndexOf('/')) + '/');
    } else {
      // worker
      PACKAGE_PATH = encodeURIComponent(location.pathname.toString().substring(0, location.pathname.toString().lastIndexOf('/')) + '/');
    }
    var PACKAGE_NAME = './parse.data';
    var REMOTE_PACKAGE_NAME = 'parse.data';
    var PACKAGE_UUID = '9af91dfc-ed94-420a-abd9-cd881a45c424';
    function processPackageData(arrayBuffer) {
      Module.finishedDataFileDownloads++;
      assert(arrayBuffer, 'Loading data file failed.');
      var byteArray = new Uint8Array(arrayBuffer);
      var curr;
      // copy the entire loaded file into a spot in the heap. Files will refer to slices in that. They cannot be freed though.
      var ptr = Module['_malloc'](byteArray.length);
      Module['HEAPU8'].set(byteArray, ptr);
      DataRequest.prototype.byteArray = Module['HEAPU8'].subarray(ptr, ptr+byteArray.length);
          DataRequest.prototype.requests["/data/4.0.constituent-knowledge"].onload();
          DataRequest.prototype.requests["/data/4.0.knowledge"].onload();
          DataRequest.prototype.requests["/data/tiny.dict"].onload();
          DataRequest.prototype.requests["/data/4.0.affix"].onload();
          DataRequest.prototype.requests["/data/4.0.batch"].onload();
          DataRequest.prototype.requests["/data/4.0.dict"].onload();
          DataRequest.prototype.requests["/data/words/words.n.p"].onload();
          DataRequest.prototype.requests["/data/words/words.v.4.3"].onload();
          DataRequest.prototype.requests["/data/words/words.v.4.4"].onload();
          DataRequest.prototype.requests["/data/words/words.v.5.3"].onload();
          DataRequest.prototype.requests["/data/words/words.v.2.3"].onload();
          DataRequest.prototype.requests["/data/words/words.v.1.3"].onload();
          DataRequest.prototype.requests["/data/words/words.n.c.2"].onload();
          DataRequest.prototype.requests["/data/words/words.n.1"].onload();
          DataRequest.prototype.requests["/data/words/words.v.6.5"].onload();
          DataRequest.prototype.requests["/data/words/words.v.6.2"].onload();
          DataRequest.prototype.requests["/data/words/words.v.1.2"].onload();
          DataRequest.prototype.requests["/data/words/words.v.5.4"].onload();
          DataRequest.prototype.requests["/data/words/words.n.3"].onload();
          DataRequest.prototype.requests["/data/words/words.adv.3"].onload();
          DataRequest.prototype.requests["/data/words/words.adj.1"].onload();
          DataRequest.prototype.requests["/data/words/words.v.2.4"].onload();
          DataRequest.prototype.requests["/data/words/words.s"].onload();
          DataRequest.prototype.requests["/data/words/words.v.2.5"].onload();
          DataRequest.prototype.requests["/data/words/words.n.2.x"].onload();
          DataRequest.prototype.requests["/data/words/words.v.1.p"].onload();
          DataRequest.prototype.requests["/data/words/words.v.8.4"].onload();
          DataRequest.prototype.requests["/data/words/words.n.c.1"].onload();
          DataRequest.prototype.requests["/data/words/words.v.1.4"].onload();
          DataRequest.prototype.requests["/data/words/words.adv.2"].onload();
          DataRequest.prototype.requests["/data/words/words.v.5.2"].onload();
          DataRequest.prototype.requests["/data/words/words.n.t"].onload();
          DataRequest.prototype.requests["/data/words/words.v.1.1"].onload();
          DataRequest.prototype.requests["/data/words/words.v.5.1"].onload();
          DataRequest.prototype.requests["/data/words/words.v.6.4"].onload();
          DataRequest.prototype.requests["/data/words/words.v.10.4"].onload();
          DataRequest.prototype.requests["/data/words/words.v.4.5"].onload();
          DataRequest.prototype.requests["/data/words/words.v.4.1"].onload();
          DataRequest.prototype.requests["/data/words/words.v.8.3"].onload();
          DataRequest.prototype.requests["/data/words/words.v.8.1"].onload();
          DataRequest.prototype.requests["/data/words/words.v.10.1"].onload();
          DataRequest.prototype.requests["/data/words/words.adv.1"].onload();
          DataRequest.prototype.requests["/data/words/words.v.10.3"].onload();
          DataRequest.prototype.requests["/data/words/words.v.10.2"].onload();
          DataRequest.prototype.requests["/data/words/words.n.2.s"].onload();
          DataRequest.prototype.requests["/data/words/words.v.6.3"].onload();
          DataRequest.prototype.requests["/data/words/words.adj.2"].onload();
          DataRequest.prototype.requests["/data/words/words.n.4"].onload();
          DataRequest.prototype.requests["/data/words/words.v.4.2"].onload();
          DataRequest.prototype.requests["/data/words/words.v.2.1"].onload();
          DataRequest.prototype.requests["/data/words/words.y"].onload();
          DataRequest.prototype.requests["/data/words/words.adj.3"].onload();
          DataRequest.prototype.requests["/data/words/words.v.8.2"].onload();
          DataRequest.prototype.requests["/data/words/words.v.8.5"].onload();
          DataRequest.prototype.requests["/data/words/words.v.2.2"].onload();
          DataRequest.prototype.requests["/data/words/words.v.6.1"].onload();
          Module['removeRunDependency']('datafile_./parse.data');
    };
    Module['addRunDependency']('datafile_./parse.data');
    if (!Module.preloadResults) Module.preloadResults = {};
      Module.preloadResults[PACKAGE_NAME] = {fromCache: false};
      if (fetched) {
        processPackageData(fetched);
        fetched = null;
      } else {
        fetchedCallback = processPackageData;
      }
  }
  if (Module['calledRun']) {
    runWithFS();
  } else {
    if (!Module['preRun']) Module['preRun'] = [];
    Module["preRun"].push(runWithFS); // FS is not initialized yet, wait for it
  }
})();
// Note: For maximum-speed code, see "Optimizing Code" on the Emscripten wiki, https://github.com/kripken/emscripten/wiki/Optimizing-Code
// Note: Some Emscripten settings may limit the speed of the generated code.
// The Module object: Our interface to the outside world. We import
// and export values on it, and do the work to get that through
// closure compiler if necessary. There are various ways Module can be used:
// 1. Not defined. We create it here
// 2. A function parameter, function(Module) { ..generated code.. }
// 3. pre-run appended it, var Module = {}; ..generated code..
// 4. External script tag defines var Module.
// We need to do an eval in order to handle the closure compiler
// case, where this code here is minified but Module was defined
// elsewhere (e.g. case 4 above). We also need to check if Module
// already exists (e.g. case 3 above).
// Note that if you want to run closure, and also to use Module
// after the generated code, you will need to define   var Module = {};
// before the code. Then that object will be used in the code, and you
// can continue to use Module afterwards as well.
var Module;
if (!Module) Module = eval('(function() { try { return Module || {} } catch(e) { return {} } })()');
// Sometimes an existing Module object exists with properties
// meant to overwrite the default module functionality. Here
// we collect those properties and reapply _after_ we configure
// the current environment's defaults to avoid having to be so
// defensive during initialization.
var moduleOverrides = {};
for (var key in Module) {
  if (Module.hasOwnProperty(key)) {
    moduleOverrides[key] = Module[key];
  }
}
// The environment setup code below is customized to use Module.
// *** Environment setup code ***
var ENVIRONMENT_IS_NODE = typeof process === 'object' && typeof require === 'function';
var ENVIRONMENT_IS_WEB = typeof window === 'object';
var ENVIRONMENT_IS_WORKER = typeof importScripts === 'function';
var ENVIRONMENT_IS_SHELL = !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_NODE && !ENVIRONMENT_IS_WORKER;
if (ENVIRONMENT_IS_NODE) {
  // Expose functionality in the same simple way that the shells work
  // Note that we pollute the global namespace here, otherwise we break in node
  Module['print'] = function print(x) {
    process['stdout'].write(x + '\n');
  };
  Module['printErr'] = function printErr(x) {
    process['stderr'].write(x + '\n');
  };
  var nodeFS = require('fs');
  var nodePath = require('path');
  Module['read'] = function read(filename, binary) {
    filename = nodePath['normalize'](filename);
    var ret = nodeFS['readFileSync'](filename);
    // The path is absolute if the normalized version is the same as the resolved.
    if (!ret && filename != nodePath['resolve'](filename)) {
      filename = path.join(__dirname, '..', 'src', filename);
      ret = nodeFS['readFileSync'](filename);
    }
    if (ret && !binary) ret = ret.toString();
    return ret;
  };
  Module['readBinary'] = function readBinary(filename) { return Module['read'](filename, true) };
  Module['load'] = function load(f) {
    globalEval(read(f));
  };
  Module['arguments'] = process['argv'].slice(2);
  module['exports'] = Module;
}
else if (ENVIRONMENT_IS_SHELL) {
  Module['print'] = print;
  if (typeof printErr != 'undefined') Module['printErr'] = printErr; // not present in v8 or older sm
  if (typeof read != 'undefined') {
    Module['read'] = read;
  } else {
    Module['read'] = function read() { throw 'no read() available (jsc?)' };
  }
  Module['readBinary'] = function readBinary(f) {
    return read(f, 'binary');
  };
  if (typeof scriptArgs != 'undefined') {
    Module['arguments'] = scriptArgs;
  } else if (typeof arguments != 'undefined') {
    Module['arguments'] = arguments;
  }
  this['Module'] = Module;
  eval("if (typeof gc === 'function' && gc.toString().indexOf('[native code]') > 0) var gc = undefined"); // wipe out the SpiderMonkey shell 'gc' function, which can confuse closure (uses it as a minified name, and it is then initted to a non-falsey value unexpectedly)
}
else if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
  Module['read'] = function read(url) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, false);
    xhr.send(null);
    return xhr.responseText;
  };
  if (typeof arguments != 'undefined') {
    Module['arguments'] = arguments;
  }
  if (typeof console !== 'undefined') {
    Module['print'] = function print(x) {
      console.log(x);
    };
    Module['printErr'] = function printErr(x) {
      console.log(x);
    };
  } else {
    // Probably a worker, and without console.log. We can do very little here...
    var TRY_USE_DUMP = false;
    Module['print'] = (TRY_USE_DUMP && (typeof(dump) !== "undefined") ? (function(x) {
      dump(x);
    }) : (function(x) {
      // self.postMessage(x); // enable this if you want stdout to be sent as messages
    }));
  }
  if (ENVIRONMENT_IS_WEB) {
    this['Module'] = Module;
  } else {
    Module['load'] = importScripts;
  }
}
else {
  // Unreachable because SHELL is dependant on the others
  throw 'Unknown runtime environment. Where are we?';
}
function globalEval(x) {
  eval.call(null, x);
}
if (!Module['load'] == 'undefined' && Module['read']) {
  Module['load'] = function load(f) {
    globalEval(Module['read'](f));
  };
}
if (!Module['print']) {
  Module['print'] = function(){};
}
if (!Module['printErr']) {
  Module['printErr'] = Module['print'];
}
if (!Module['arguments']) {
  Module['arguments'] = [];
}
// *** Environment setup code ***
// Closure helpers
Module.print = Module['print'];
Module.printErr = Module['printErr'];
// Callbacks
Module['preRun'] = [];
Module['postRun'] = [];
// Merge back in the overrides
for (var key in moduleOverrides) {
  if (moduleOverrides.hasOwnProperty(key)) {
    Module[key] = moduleOverrides[key];
  }
}
// === Auto-generated preamble library stuff ===
//========================================
// Runtime code shared with compiler
//========================================
var Runtime = {
  stackSave: function () {
    return STACKTOP;
  },
  stackRestore: function (stackTop) {
    STACKTOP = stackTop;
  },
  forceAlign: function (target, quantum) {
    quantum = quantum || 4;
    if (quantum == 1) return target;
    if (isNumber(target) && isNumber(quantum)) {
      return Math.ceil(target/quantum)*quantum;
    } else if (isNumber(quantum) && isPowerOfTwo(quantum)) {
      return '(((' +target + ')+' + (quantum-1) + ')&' + -quantum + ')';
    }
    return 'Math.ceil((' + target + ')/' + quantum + ')*' + quantum;
  },
  isNumberType: function (type) {
    return type in Runtime.INT_TYPES || type in Runtime.FLOAT_TYPES;
  },
  isPointerType: function isPointerType(type) {
  return type[type.length-1] == '*';
},
  isStructType: function isStructType(type) {
  if (isPointerType(type)) return false;
  if (isArrayType(type)) return true;
  if (/<?{ ?[^}]* ?}>?/.test(type)) return true; // { i32, i8 } etc. - anonymous struct types
  // See comment in isStructPointerType()
  return type[0] == '%';
},
  INT_TYPES: {"i1":0,"i8":0,"i16":0,"i32":0,"i64":0},
  FLOAT_TYPES: {"float":0,"double":0},
  or64: function (x, y) {
    var l = (x | 0) | (y | 0);
    var h = (Math.round(x / 4294967296) | Math.round(y / 4294967296)) * 4294967296;
    return l + h;
  },
  and64: function (x, y) {
    var l = (x | 0) & (y | 0);
    var h = (Math.round(x / 4294967296) & Math.round(y / 4294967296)) * 4294967296;
    return l + h;
  },
  xor64: function (x, y) {
    var l = (x | 0) ^ (y | 0);
    var h = (Math.round(x / 4294967296) ^ Math.round(y / 4294967296)) * 4294967296;
    return l + h;
  },
  getNativeTypeSize: function (type) {
    switch (type) {
      case 'i1': case 'i8': return 1;
      case 'i16': return 2;
      case 'i32': return 4;
      case 'i64': return 8;
      case 'float': return 4;
      case 'double': return 8;
      default: {
        if (type[type.length-1] === '*') {
          return Runtime.QUANTUM_SIZE; // A pointer
        } else if (type[0] === 'i') {
          var bits = parseInt(type.substr(1));
          assert(bits % 8 === 0);
          return bits/8;
        } else {
          return 0;
        }
      }
    }
  },
  getNativeFieldSize: function (type) {
    return Math.max(Runtime.getNativeTypeSize(type), Runtime.QUANTUM_SIZE);
  },
  dedup: function dedup(items, ident) {
  var seen = {};
  if (ident) {
    return items.filter(function(item) {
      if (seen[item[ident]]) return false;
      seen[item[ident]] = true;
      return true;
    });
  } else {
    return items.filter(function(item) {
      if (seen[item]) return false;
      seen[item] = true;
      return true;
    });
  }
},
  set: function set() {
  var args = typeof arguments[0] === 'object' ? arguments[0] : arguments;
  var ret = {};
  for (var i = 0; i < args.length; i++) {
    ret[args[i]] = 0;
  }
  return ret;
},
  STACK_ALIGN: 8,
  getAlignSize: function (type, size, vararg) {
    // we align i64s and doubles on 64-bit boundaries, unlike x86
    if (vararg) return 8;
    if (!vararg && (type == 'i64' || type == 'double')) return 8;
    if (!type) return Math.min(size, 8); // align structures internally to 64 bits
    return Math.min(size || (type ? Runtime.getNativeFieldSize(type) : 0), Runtime.QUANTUM_SIZE);
  },
  calculateStructAlignment: function calculateStructAlignment(type) {
    type.flatSize = 0;
    type.alignSize = 0;
    var diffs = [];
    var prev = -1;
    var index = 0;
    type.flatIndexes = type.fields.map(function(field) {
      index++;
      var size, alignSize;
      if (Runtime.isNumberType(field) || Runtime.isPointerType(field)) {
        size = Runtime.getNativeTypeSize(field); // pack char; char; in structs, also char[X]s.
        alignSize = Runtime.getAlignSize(field, size);
      } else if (Runtime.isStructType(field)) {
        if (field[1] === '0') {
          // this is [0 x something]. When inside another structure like here, it must be at the end,
          // and it adds no size
          // XXX this happens in java-nbody for example... assert(index === type.fields.length, 'zero-length in the middle!');
          size = 0;
          if (Types.types[field]) {
            alignSize = Runtime.getAlignSize(null, Types.types[field].alignSize);
          } else {
            alignSize = type.alignSize || QUANTUM_SIZE;
          }
        } else {
          size = Types.types[field].flatSize;
          alignSize = Runtime.getAlignSize(null, Types.types[field].alignSize);
        }
      } else if (field[0] == 'b') {
        // bN, large number field, like a [N x i8]
        size = field.substr(1)|0;
        alignSize = 1;
      } else if (field[0] === '<') {
        // vector type
        size = alignSize = Types.types[field].flatSize; // fully aligned
      } else if (field[0] === 'i') {
        // illegal integer field, that could not be legalized because it is an internal structure field
        // it is ok to have such fields, if we just use them as markers of field size and nothing more complex
        size = alignSize = parseInt(field.substr(1))/8;
        assert(size % 1 === 0, 'cannot handle non-byte-size field ' + field);
      } else {
        assert(false, 'invalid type for calculateStructAlignment');
      }
      if (type.packed) alignSize = 1;
      type.alignSize = Math.max(type.alignSize, alignSize);
      var curr = Runtime.alignMemory(type.flatSize, alignSize); // if necessary, place this on aligned memory
      type.flatSize = curr + size;
      if (prev >= 0) {
        diffs.push(curr-prev);
      }
      prev = curr;
      return curr;
    });
    if (type.name_ && type.name_[0] === '[') {
      // arrays have 2 elements, so we get the proper difference. then we scale here. that way we avoid
      // allocating a potentially huge array for [999999 x i8] etc.
      type.flatSize = parseInt(type.name_.substr(1))*type.flatSize/2;
    }
    type.flatSize = Runtime.alignMemory(type.flatSize, type.alignSize);
    if (diffs.length == 0) {
      type.flatFactor = type.flatSize;
    } else if (Runtime.dedup(diffs).length == 1) {
      type.flatFactor = diffs[0];
    }
    type.needsFlattening = (type.flatFactor != 1);
    return type.flatIndexes;
  },
  generateStructInfo: function (struct, typeName, offset) {
    var type, alignment;
    if (typeName) {
      offset = offset || 0;
      type = (typeof Types === 'undefined' ? Runtime.typeInfo : Types.types)[typeName];
      if (!type) return null;
      if (type.fields.length != struct.length) {
        printErr('Number of named fields must match the type for ' + typeName + ': possibly duplicate struct names. Cannot return structInfo');
        return null;
      }
      alignment = type.flatIndexes;
    } else {
      var type = { fields: struct.map(function(item) { return item[0] }) };
      alignment = Runtime.calculateStructAlignment(type);
    }
    var ret = {
      __size__: type.flatSize
    };
    if (typeName) {
      struct.forEach(function(item, i) {
        if (typeof item === 'string') {
          ret[item] = alignment[i] + offset;
        } else {
          // embedded struct
          var key;
          for (var k in item) key = k;
          ret[key] = Runtime.generateStructInfo(item[key], type.fields[i], alignment[i]);
        }
      });
    } else {
      struct.forEach(function(item, i) {
        ret[item[1]] = alignment[i];
      });
    }
    return ret;
  },
  dynCall: function (sig, ptr, args) {
    if (args && args.length) {
      if (!args.splice) args = Array.prototype.slice.call(args);
      args.splice(0, 0, ptr);
      return Module['dynCall_' + sig].apply(null, args);
    } else {
      return Module['dynCall_' + sig].call(null, ptr);
    }
  },
  functionPointers: [],
  addFunction: function (func) {
    for (var i = 0; i < Runtime.functionPointers.length; i++) {
      if (!Runtime.functionPointers[i]) {
        Runtime.functionPointers[i] = func;
        return 2*(1 + i);
      }
    }
    throw 'Finished up all reserved function pointers. Use a higher value for RESERVED_FUNCTION_POINTERS.';
  },
  removeFunction: function (index) {
    Runtime.functionPointers[(index-2)/2] = null;
  },
  getAsmConst: function (code, numArgs) {
    // code is a constant string on the heap, so we can cache these
    if (!Runtime.asmConstCache) Runtime.asmConstCache = {};
    var func = Runtime.asmConstCache[code];
    if (func) return func;
    var args = [];
    for (var i = 0; i < numArgs; i++) {
      args.push(String.fromCharCode(36) + i); // $0, $1 etc
    }
    return Runtime.asmConstCache[code] = eval('(function(' + args.join(',') + '){ ' + Pointer_stringify(code) + ' })'); // new Function does not allow upvars in node
  },
  warnOnce: function (text) {
    if (!Runtime.warnOnce.shown) Runtime.warnOnce.shown = {};
    if (!Runtime.warnOnce.shown[text]) {
      Runtime.warnOnce.shown[text] = 1;
      Module.printErr(text);
    }
  },
  funcWrappers: {},
  getFuncWrapper: function (func, sig) {
    assert(sig);
    if (!Runtime.funcWrappers[func]) {
      Runtime.funcWrappers[func] = function dynCall_wrapper() {
        return Runtime.dynCall(sig, func, arguments);
      };
    }
    return Runtime.funcWrappers[func];
  },
  UTF8Processor: function () {
    var buffer = [];
    var needed = 0;
    this.processCChar = function (code) {
      code = code & 0xFF;
      if (buffer.length == 0) {
        if ((code & 0x80) == 0x00) {        // 0xxxxxxx
          return String.fromCharCode(code);
        }
        buffer.push(code);
        if ((code & 0xE0) == 0xC0) {        // 110xxxxx
          needed = 1;
        } else if ((code & 0xF0) == 0xE0) { // 1110xxxx
          needed = 2;
        } else {                            // 11110xxx
          needed = 3;
        }
        return '';
      }
      if (needed) {
        buffer.push(code);
        needed--;
        if (needed > 0) return '';
      }
      var c1 = buffer[0];
      var c2 = buffer[1];
      var c3 = buffer[2];
      var c4 = buffer[3];
      var ret;
      if (buffer.length == 2) {
        ret = String.fromCharCode(((c1 & 0x1F) << 6)  | (c2 & 0x3F));
      } else if (buffer.length == 3) {
        ret = String.fromCharCode(((c1 & 0x0F) << 12) | ((c2 & 0x3F) << 6)  | (c3 & 0x3F));
      } else {
        // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
        var codePoint = ((c1 & 0x07) << 18) | ((c2 & 0x3F) << 12) |
                        ((c3 & 0x3F) << 6)  | (c4 & 0x3F);
        ret = String.fromCharCode(
          Math.floor((codePoint - 0x10000) / 0x400) + 0xD800,
          (codePoint - 0x10000) % 0x400 + 0xDC00);
      }
      buffer.length = 0;
      return ret;
    }
    this.processJSString = function processJSString(string) {
      string = unescape(encodeURIComponent(string));
      var ret = [];
      for (var i = 0; i < string.length; i++) {
        ret.push(string.charCodeAt(i));
      }
      return ret;
    }
  },
  stackAlloc: function (size) { var ret = STACKTOP;STACKTOP = (STACKTOP + size)|0;STACKTOP = (((STACKTOP)+7)&-8); return ret; },
  staticAlloc: function (size) { var ret = STATICTOP;STATICTOP = (STATICTOP + size)|0;STATICTOP = (((STATICTOP)+7)&-8); return ret; },
  dynamicAlloc: function (size) { var ret = DYNAMICTOP;DYNAMICTOP = (DYNAMICTOP + size)|0;DYNAMICTOP = (((DYNAMICTOP)+7)&-8); if (DYNAMICTOP >= TOTAL_MEMORY) enlargeMemory();; return ret; },
  alignMemory: function (size,quantum) { var ret = size = Math.ceil((size)/(quantum ? quantum : 8))*(quantum ? quantum : 8); return ret; },
  makeBigInt: function (low,high,unsigned) { var ret = (unsigned ? ((+((low>>>0)))+((+((high>>>0)))*(+4294967296))) : ((+((low>>>0)))+((+((high|0)))*(+4294967296)))); return ret; },
  GLOBAL_BASE: 8,
  QUANTUM_SIZE: 4,
  __dummy__: 0
}
//========================================
// Runtime essentials
//========================================
var __THREW__ = 0; // Used in checking for thrown exceptions.
var ABORT = false; // whether we are quitting the application. no code should run after this. set in exit() and abort()
var EXITSTATUS = 0;
var undef = 0;
// tempInt is used for 32-bit signed values or smaller. tempBigInt is used
// for 32-bit unsigned values or more than 32 bits. TODO: audit all uses of tempInt
var tempValue, tempInt, tempBigInt, tempInt2, tempBigInt2, tempPair, tempBigIntI, tempBigIntR, tempBigIntS, tempBigIntP, tempBigIntD, tempDouble, tempFloat;
var tempI64, tempI64b;
var tempRet0, tempRet1, tempRet2, tempRet3, tempRet4, tempRet5, tempRet6, tempRet7, tempRet8, tempRet9;
function assert(condition, text) {
  if (!condition) {
    abort('Assertion failed: ' + text);
  }
}
var globalScope = this;
// C calling interface. A convenient way to call C functions (in C files, or
// defined with extern "C").
//
// Note: LLVM optimizations can inline and remove functions, after which you will not be
//       able to call them. Closure can also do so. To avoid that, add your function to
//       the exports using something like
//
//         -s EXPORTED_FUNCTIONS='["_main", "_myfunc"]'
//
// @param ident      The name of the C function (note that C++ functions will be name-mangled - use extern "C")
// @param returnType The return type of the function, one of the JS types 'number', 'string' or 'array' (use 'number' for any C pointer, and
//                   'array' for JavaScript arrays and typed arrays; note that arrays are 8-bit).
// @param argTypes   An array of the types of arguments for the function (if there are no arguments, this can be ommitted). Types are as in returnType,
//                   except that 'array' is not possible (there is no way for us to know the length of the array)
// @param args       An array of the arguments to the function, as native JS values (as in returnType)
//                   Note that string arguments will be stored on the stack (the JS string will become a C string on the stack).
// @return           The return value, as a native JS value (as in returnType)
function ccall(ident, returnType, argTypes, args) {
  return ccallFunc(getCFunc(ident), returnType, argTypes, args);
}
Module["ccall"] = ccall;
// Returns the C function with a specified identifier (for C++, you need to do manual name mangling)
function getCFunc(ident) {
  try {
    var func = Module['_' + ident]; // closure exported function
    if (!func) func = eval('_' + ident); // explicit lookup
  } catch(e) {
  }
  assert(func, 'Cannot call unknown function ' + ident + ' (perhaps LLVM optimizations or closure removed it?)');
  return func;
}
// Internal function that does a C call using a function, not an identifier
function ccallFunc(func, returnType, argTypes, args) {
  var stack = 0;
  function toC(value, type) {
    if (type == 'string') {
      if (value === null || value === undefined || value === 0) return 0; // null string
      value = intArrayFromString(value);
      type = 'array';
    }
    if (type == 'array') {
      if (!stack) stack = Runtime.stackSave();
      var ret = Runtime.stackAlloc(value.length);
      writeArrayToMemory(value, ret);
      return ret;
    }
    return value;
  }
  function fromC(value, type) {
    if (type == 'string') {
      return Pointer_stringify(value);
    }
    assert(type != 'array');
    return value;
  }
  var i = 0;
  var cArgs = args ? args.map(function(arg) {
    return toC(arg, argTypes[i++]);
  }) : [];
  var ret = fromC(func.apply(null, cArgs), returnType);
  if (stack) Runtime.stackRestore(stack);
  return ret;
}
// Returns a native JS wrapper for a C function. This is similar to ccall, but
// returns a function you can call repeatedly in a normal way. For example:
//
//   var my_function = cwrap('my_c_function', 'number', ['number', 'number']);
//   alert(my_function(5, 22));
//   alert(my_function(99, 12));
//
function cwrap(ident, returnType, argTypes) {
  var func = getCFunc(ident);
  return function() {
    return ccallFunc(func, returnType, argTypes, Array.prototype.slice.call(arguments));
  }
}
Module["cwrap"] = cwrap;
// Sets a value in memory in a dynamic way at run-time. Uses the
// type data. This is the same as makeSetValue, except that
// makeSetValue is done at compile-time and generates the needed
// code then, whereas this function picks the right code at
// run-time.
// Note that setValue and getValue only do *aligned* writes and reads!
// Note that ccall uses JS types as for defining types, while setValue and
// getValue need LLVM types ('i8', 'i32') - this is a lower-level operation
function setValue(ptr, value, type, noSafe) {
  type = type || 'i8';
  if (type.charAt(type.length-1) === '*') type = 'i32'; // pointers are 32-bit
    switch(type) {
      case 'i1': HEAP8[(ptr)]=value; break;
      case 'i8': HEAP8[(ptr)]=value; break;
      case 'i16': HEAP16[((ptr)>>1)]=value; break;
      case 'i32': HEAP32[((ptr)>>2)]=value; break;
      case 'i64': (tempI64 = [value>>>0,(tempDouble=value,(+(Math_abs(tempDouble))) >= (+1) ? (tempDouble > (+0) ? ((Math_min((+(Math_floor((tempDouble)/(+4294967296)))), (+4294967295)))|0)>>>0 : (~~((+(Math_ceil((tempDouble - +(((~~(tempDouble)))>>>0))/(+4294967296))))))>>>0) : 0)],HEAP32[((ptr)>>2)]=tempI64[0],HEAP32[(((ptr)+(4))>>2)]=tempI64[1]); break;
      case 'float': HEAPF32[((ptr)>>2)]=value; break;
      case 'double': HEAPF64[((ptr)>>3)]=value; break;
      default: abort('invalid type for setValue: ' + type);
    }
}
Module['setValue'] = setValue;
// Parallel to setValue.
function getValue(ptr, type, noSafe) {
  type = type || 'i8';
  if (type.charAt(type.length-1) === '*') type = 'i32'; // pointers are 32-bit
    switch(type) {
      case 'i1': return HEAP8[(ptr)];
      case 'i8': return HEAP8[(ptr)];
      case 'i16': return HEAP16[((ptr)>>1)];
      case 'i32': return HEAP32[((ptr)>>2)];
      case 'i64': return HEAP32[((ptr)>>2)];
      case 'float': return HEAPF32[((ptr)>>2)];
      case 'double': return HEAPF64[((ptr)>>3)];
      default: abort('invalid type for setValue: ' + type);
    }
  return null;
}
Module['getValue'] = getValue;
var ALLOC_NORMAL = 0; // Tries to use _malloc()
var ALLOC_STACK = 1; // Lives for the duration of the current function call
var ALLOC_STATIC = 2; // Cannot be freed
var ALLOC_DYNAMIC = 3; // Cannot be freed except through sbrk
var ALLOC_NONE = 4; // Do not allocate
Module['ALLOC_NORMAL'] = ALLOC_NORMAL;
Module['ALLOC_STACK'] = ALLOC_STACK;
Module['ALLOC_STATIC'] = ALLOC_STATIC;
Module['ALLOC_DYNAMIC'] = ALLOC_DYNAMIC;
Module['ALLOC_NONE'] = ALLOC_NONE;
// allocate(): This is for internal use. You can use it yourself as well, but the interface
//             is a little tricky (see docs right below). The reason is that it is optimized
//             for multiple syntaxes to save space in generated code. So you should
//             normally not use allocate(), and instead allocate memory using _malloc(),
//             initialize it with setValue(), and so forth.
// @slab: An array of data, or a number. If a number, then the size of the block to allocate,
//        in *bytes* (note that this is sometimes confusing: the next parameter does not
//        affect this!)
// @types: Either an array of types, one for each byte (or 0 if no type at that position),
//         or a single type which is used for the entire block. This only matters if there
//         is initial data - if @slab is a number, then this does not matter at all and is
//         ignored.
// @allocator: How to allocate memory, see ALLOC_*
function allocate(slab, types, allocator, ptr) {
  var zeroinit, size;
  if (typeof slab === 'number') {
    zeroinit = true;
    size = slab;
  } else {
    zeroinit = false;
    size = slab.length;
  }
  var singleType = typeof types === 'string' ? types : null;
  var ret;
  if (allocator == ALLOC_NONE) {
    ret = ptr;
  } else {
    ret = [_malloc, Runtime.stackAlloc, Runtime.staticAlloc, Runtime.dynamicAlloc][allocator === undefined ? ALLOC_STATIC : allocator](Math.max(size, singleType ? 1 : types.length));
  }
  if (zeroinit) {
    var ptr = ret, stop;
    assert((ret & 3) == 0);
    stop = ret + (size & ~3);
    for (; ptr < stop; ptr += 4) {
      HEAP32[((ptr)>>2)]=0;
    }
    stop = ret + size;
    while (ptr < stop) {
      HEAP8[((ptr++)|0)]=0;
    }
    return ret;
  }
  if (singleType === 'i8') {
    if (slab.subarray || slab.slice) {
      HEAPU8.set(slab, ret);
    } else {
      HEAPU8.set(new Uint8Array(slab), ret);
    }
    return ret;
  }
  var i = 0, type, typeSize, previousType;
  while (i < size) {
    var curr = slab[i];
    if (typeof curr === 'function') {
      curr = Runtime.getFunctionIndex(curr);
    }
    type = singleType || types[i];
    if (type === 0) {
      i++;
      continue;
    }
    if (type == 'i64') type = 'i32'; // special case: we have one i32 here, and one i32 later
    setValue(ret+i, curr, type);
    // no need to look up size unless type changes, so cache it
    if (previousType !== type) {
      typeSize = Runtime.getNativeTypeSize(type);
      previousType = type;
    }
    i += typeSize;
  }
  return ret;
}
Module['allocate'] = allocate;
function Pointer_stringify(ptr, /* optional */ length) {
  // TODO: use TextDecoder
  // Find the length, and check for UTF while doing so
  var hasUtf = false;
  var t;
  var i = 0;
  while (1) {
    t = HEAPU8[(((ptr)+(i))|0)];
    if (t >= 128) hasUtf = true;
    else if (t == 0 && !length) break;
    i++;
    if (length && i == length) break;
  }
  if (!length) length = i;
  var ret = '';
  if (!hasUtf) {
    var MAX_CHUNK = 1024; // split up into chunks, because .apply on a huge string can overflow the stack
    var curr;
    while (length > 0) {
      curr = String.fromCharCode.apply(String, HEAPU8.subarray(ptr, ptr + Math.min(length, MAX_CHUNK)));
      ret = ret ? ret + curr : curr;
      ptr += MAX_CHUNK;
      length -= MAX_CHUNK;
    }
    return ret;
  }
  var utf8 = new Runtime.UTF8Processor();
  for (i = 0; i < length; i++) {
    t = HEAPU8[(((ptr)+(i))|0)];
    ret += utf8.processCChar(t);
  }
  return ret;
}
Module['Pointer_stringify'] = Pointer_stringify;
// Given a pointer 'ptr' to a null-terminated UTF16LE-encoded string in the emscripten HEAP, returns
// a copy of that string as a Javascript String object.
function UTF16ToString(ptr) {
  var i = 0;
  var str = '';
  while (1) {
    var codeUnit = HEAP16[(((ptr)+(i*2))>>1)];
    if (codeUnit == 0)
      return str;
    ++i;
    // fromCharCode constructs a character from a UTF-16 code unit, so we can pass the UTF16 string right through.
    str += String.fromCharCode(codeUnit);
  }
}
Module['UTF16ToString'] = UTF16ToString;
// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in UTF16LE form. The copy will require at most (str.length*2+1)*2 bytes of space in the HEAP.
function stringToUTF16(str, outPtr) {
  for(var i = 0; i < str.length; ++i) {
    // charCodeAt returns a UTF-16 encoded code unit, so it can be directly written to the HEAP.
    var codeUnit = str.charCodeAt(i); // possibly a lead surrogate
    HEAP16[(((outPtr)+(i*2))>>1)]=codeUnit;
  }
  // Null-terminate the pointer to the HEAP.
  HEAP16[(((outPtr)+(str.length*2))>>1)]=0;
}
Module['stringToUTF16'] = stringToUTF16;
// Given a pointer 'ptr' to a null-terminated UTF32LE-encoded string in the emscripten HEAP, returns
// a copy of that string as a Javascript String object.
function UTF32ToString(ptr) {
  var i = 0;
  var str = '';
  while (1) {
    var utf32 = HEAP32[(((ptr)+(i*4))>>2)];
    if (utf32 == 0)
      return str;
    ++i;
    // Gotcha: fromCharCode constructs a character from a UTF-16 encoded code (pair), not from a Unicode code point! So encode the code point to UTF-16 for constructing.
    if (utf32 >= 0x10000) {
      var ch = utf32 - 0x10000;
      str += String.fromCharCode(0xD800 | (ch >> 10), 0xDC00 | (ch & 0x3FF));
    } else {
      str += String.fromCharCode(utf32);
    }
  }
}
Module['UTF32ToString'] = UTF32ToString;
// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in UTF32LE form. The copy will require at most (str.length+1)*4 bytes of space in the HEAP,
// but can use less, since str.length does not return the number of characters in the string, but the number of UTF-16 code units in the string.
function stringToUTF32(str, outPtr) {
  var iChar = 0;
  for(var iCodeUnit = 0; iCodeUnit < str.length; ++iCodeUnit) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! We must decode the string to UTF-32 to the heap.
    var codeUnit = str.charCodeAt(iCodeUnit); // possibly a lead surrogate
    if (codeUnit >= 0xD800 && codeUnit <= 0xDFFF) {
      var trailSurrogate = str.charCodeAt(++iCodeUnit);
      codeUnit = 0x10000 + ((codeUnit & 0x3FF) << 10) | (trailSurrogate & 0x3FF);
    }
    HEAP32[(((outPtr)+(iChar*4))>>2)]=codeUnit;
    ++iChar;
  }
  // Null-terminate the pointer to the HEAP.
  HEAP32[(((outPtr)+(iChar*4))>>2)]=0;
}
Module['stringToUTF32'] = stringToUTF32;
function demangle(func) {
  try {
    // Special-case the entry point, since its name differs from other name mangling.
    if (func == 'Object._main' || func == '_main') {
      return 'main()';
    }
    if (typeof func === 'number') func = Pointer_stringify(func);
    if (func[0] !== '_') return func;
    if (func[1] !== '_') return func; // C function
    if (func[2] !== 'Z') return func;
    switch (func[3]) {
      case 'n': return 'operator new()';
      case 'd': return 'operator delete()';
    }
    var i = 3;
    // params, etc.
    var basicTypes = {
      'v': 'void',
      'b': 'bool',
      'c': 'char',
      's': 'short',
      'i': 'int',
      'l': 'long',
      'f': 'float',
      'd': 'double',
      'w': 'wchar_t',
      'a': 'signed char',
      'h': 'unsigned char',
      't': 'unsigned short',
      'j': 'unsigned int',
      'm': 'unsigned long',
      'x': 'long long',
      'y': 'unsigned long long',
      'z': '...'
    };
    function dump(x) {
      //return;
      if (x) Module.print(x);
      Module.print(func);
      var pre = '';
      for (var a = 0; a < i; a++) pre += ' ';
      Module.print (pre + '^');
    }
    var subs = [];
    function parseNested() {
      i++;
      if (func[i] === 'K') i++; // ignore const
      var parts = [];
      while (func[i] !== 'E') {
        if (func[i] === 'S') { // substitution
          i++;
          var next = func.indexOf('_', i);
          var num = func.substring(i, next) || 0;
          parts.push(subs[num] || '?');
          i = next+1;
          continue;
        }
        if (func[i] === 'C') { // constructor
          parts.push(parts[parts.length-1]);
          i += 2;
          continue;
        }
        var size = parseInt(func.substr(i));
        var pre = size.toString().length;
        if (!size || !pre) { i--; break; } // counter i++ below us
        var curr = func.substr(i + pre, size);
        parts.push(curr);
        subs.push(curr);
        i += pre + size;
      }
      i++; // skip E
      return parts;
    }
    var first = true;
    function parse(rawList, limit, allowVoid) { // main parser
      limit = limit || Infinity;
      var ret = '', list = [];
      function flushList() {
        return '(' + list.join(', ') + ')';
      }
      var name;
      if (func[i] === 'N') {
        // namespaced N-E
        name = parseNested().join('::');
        limit--;
        if (limit === 0) return rawList ? [name] : name;
      } else {
        // not namespaced
        if (func[i] === 'K' || (first && func[i] === 'L')) i++; // ignore const and first 'L'
        var size = parseInt(func.substr(i));
        if (size) {
          var pre = size.toString().length;
          name = func.substr(i + pre, size);
          i += pre + size;
        }
      }
      first = false;
      if (func[i] === 'I') {
        i++;
        var iList = parse(true);
        var iRet = parse(true, 1, true);
        ret += iRet[0] + ' ' + name + '<' + iList.join(', ') + '>';
      } else {
        ret = name;
      }
      paramLoop: while (i < func.length && limit-- > 0) {
        //dump('paramLoop');
        var c = func[i++];
        if (c in basicTypes) {
          list.push(basicTypes[c]);
        } else {
          switch (c) {
            case 'P': list.push(parse(true, 1, true)[0] + '*'); break; // pointer
            case 'R': list.push(parse(true, 1, true)[0] + '&'); break; // reference
            case 'L': { // literal
              i++; // skip basic type
              var end = func.indexOf('E', i);
              var size = end - i;
              list.push(func.substr(i, size));
              i += size + 2; // size + 'EE'
              break;
            }
            case 'A': { // array
              var size = parseInt(func.substr(i));
              i += size.toString().length;
              if (func[i] !== '_') throw '?';
              i++; // skip _
              list.push(parse(true, 1, true)[0] + ' [' + size + ']');
              break;
            }
            case 'E': break paramLoop;
            default: ret += '?' + c; break paramLoop;
          }
        }
      }
      if (!allowVoid && list.length === 1 && list[0] === 'void') list = []; // avoid (void)
      return rawList ? list : ret + flushList();
    }
    return parse();
  } catch(e) {
    return func;
  }
}
function demangleAll(text) {
  return text.replace(/__Z[\w\d_]+/g, function(x) { var y = demangle(x); return x === y ? x : (x + ' [' + y + ']') });
}
function stackTrace() {
  var stack = new Error().stack;
  return stack ? demangleAll(stack) : '(no stack trace available)'; // Stack trace is not available at least on IE10 and Safari 6.
}
// Memory management
var PAGE_SIZE = 4096;
function alignMemoryPage(x) {
  return (x+4095)&-4096;
}
var HEAP;
var HEAP8, HEAPU8, HEAP16, HEAPU16, HEAP32, HEAPU32, HEAPF32, HEAPF64;
var STATIC_BASE = 0, STATICTOP = 0, staticSealed = false; // static area
var STACK_BASE = 0, STACKTOP = 0, STACK_MAX = 0; // stack area
var DYNAMIC_BASE = 0, DYNAMICTOP = 0; // dynamic area handled by sbrk
function enlargeMemory() {
  abort('Cannot enlarge memory arrays in asm.js. Either (1) compile with -s TOTAL_MEMORY=X with X higher than the current value ' + TOTAL_MEMORY + ', or (2) set Module.TOTAL_MEMORY before the program runs.');
}
var TOTAL_STACK = Module['TOTAL_STACK'] || 5242880;
var TOTAL_MEMORY = Module['TOTAL_MEMORY'] || 16777216;
var FAST_MEMORY = Module['FAST_MEMORY'] || 2097152;
var totalMemory = 4096;
while (totalMemory < TOTAL_MEMORY || totalMemory < 2*TOTAL_STACK) {
  if (totalMemory < 16*1024*1024) {
    totalMemory *= 2;
  } else {
    totalMemory += 16*1024*1024
  }
}
if (totalMemory !== TOTAL_MEMORY) {
  Module.printErr('increasing TOTAL_MEMORY to ' + totalMemory + ' to be more reasonable');
  TOTAL_MEMORY = totalMemory;
}
// Initialize the runtime's memory
// check for full engine support (use string 'subarray' to avoid closure compiler confusion)
assert(typeof Int32Array !== 'undefined' && typeof Float64Array !== 'undefined' && !!(new Int32Array(1)['subarray']) && !!(new Int32Array(1)['set']),
       'Cannot fallback to non-typed array case: Code is too specialized');
var buffer = new ArrayBuffer(TOTAL_MEMORY);
HEAP8 = new Int8Array(buffer);
HEAP16 = new Int16Array(buffer);
HEAP32 = new Int32Array(buffer);
HEAPU8 = new Uint8Array(buffer);
HEAPU16 = new Uint16Array(buffer);
HEAPU32 = new Uint32Array(buffer);
HEAPF32 = new Float32Array(buffer);
HEAPF64 = new Float64Array(buffer);
// Endianness check (note: assumes compiler arch was little-endian)
HEAP32[0] = 255;
assert(HEAPU8[0] === 255 && HEAPU8[3] === 0, 'Typed arrays 2 must be run on a little-endian system');
Module['HEAP'] = HEAP;
Module['HEAP8'] = HEAP8;
Module['HEAP16'] = HEAP16;
Module['HEAP32'] = HEAP32;
Module['HEAPU8'] = HEAPU8;
Module['HEAPU16'] = HEAPU16;
Module['HEAPU32'] = HEAPU32;
Module['HEAPF32'] = HEAPF32;
Module['HEAPF64'] = HEAPF64;
function callRuntimeCallbacks(callbacks) {
  while(callbacks.length > 0) {
    var callback = callbacks.shift();
    if (typeof callback == 'function') {
      callback();
      continue;
    }
    var func = callback.func;
    if (typeof func === 'number') {
      if (callback.arg === undefined) {
        Runtime.dynCall('v', func);
      } else {
        Runtime.dynCall('vi', func, [callback.arg]);
      }
    } else {
      func(callback.arg === undefined ? null : callback.arg);
    }
  }
}
var __ATPRERUN__  = []; // functions called before the runtime is initialized
var __ATINIT__    = []; // functions called during startup
var __ATMAIN__    = []; // functions called when main() is to be run
var __ATEXIT__    = []; // functions called during shutdown
var __ATPOSTRUN__ = []; // functions called after the runtime has exited
var runtimeInitialized = false;
function preRun() {
  // compatibility - merge in anything from Module['preRun'] at this time
  if (Module['preRun']) {
    if (typeof Module['preRun'] == 'function') Module['preRun'] = [Module['preRun']];
    while (Module['preRun'].length) {
      addOnPreRun(Module['preRun'].shift());
    }
  }
  callRuntimeCallbacks(__ATPRERUN__);
}
function ensureInitRuntime() {
  if (runtimeInitialized) return;
  runtimeInitialized = true;
  callRuntimeCallbacks(__ATINIT__);
}
function preMain() {
  callRuntimeCallbacks(__ATMAIN__);
}
function exitRuntime() {
  callRuntimeCallbacks(__ATEXIT__);
}
function postRun() {
  // compatibility - merge in anything from Module['postRun'] at this time
  if (Module['postRun']) {
    if (typeof Module['postRun'] == 'function') Module['postRun'] = [Module['postRun']];
    while (Module['postRun'].length) {
      addOnPostRun(Module['postRun'].shift());
    }
  }
  callRuntimeCallbacks(__ATPOSTRUN__);
}
function addOnPreRun(cb) {
  __ATPRERUN__.unshift(cb);
}
Module['addOnPreRun'] = Module.addOnPreRun = addOnPreRun;
function addOnInit(cb) {
  __ATINIT__.unshift(cb);
}
Module['addOnInit'] = Module.addOnInit = addOnInit;
function addOnPreMain(cb) {
  __ATMAIN__.unshift(cb);
}
Module['addOnPreMain'] = Module.addOnPreMain = addOnPreMain;
function addOnExit(cb) {
  __ATEXIT__.unshift(cb);
}
Module['addOnExit'] = Module.addOnExit = addOnExit;
function addOnPostRun(cb) {
  __ATPOSTRUN__.unshift(cb);
}
Module['addOnPostRun'] = Module.addOnPostRun = addOnPostRun;
// Tools
// This processes a JS string into a C-line array of numbers, 0-terminated.
// For LLVM-originating strings, see parser.js:parseLLVMString function
function intArrayFromString(stringy, dontAddNull, length /* optional */) {
  var ret = (new Runtime.UTF8Processor()).processJSString(stringy);
  if (length) {
    ret.length = length;
  }
  if (!dontAddNull) {
    ret.push(0);
  }
  return ret;
}
Module['intArrayFromString'] = intArrayFromString;
function intArrayToString(array) {
  var ret = [];
  for (var i = 0; i < array.length; i++) {
    var chr = array[i];
    if (chr > 0xFF) {
      chr &= 0xFF;
    }
    ret.push(String.fromCharCode(chr));
  }
  return ret.join('');
}
Module['intArrayToString'] = intArrayToString;
// Write a Javascript array to somewhere in the heap
function writeStringToMemory(string, buffer, dontAddNull) {
  var array = intArrayFromString(string, dontAddNull);
  var i = 0;
  while (i < array.length) {
    var chr = array[i];
    HEAP8[(((buffer)+(i))|0)]=chr;
    i = i + 1;
  }
}
Module['writeStringToMemory'] = writeStringToMemory;
function writeArrayToMemory(array, buffer) {
  for (var i = 0; i < array.length; i++) {
    HEAP8[(((buffer)+(i))|0)]=array[i];
  }
}
Module['writeArrayToMemory'] = writeArrayToMemory;
function writeAsciiToMemory(str, buffer, dontAddNull) {
  for (var i = 0; i < str.length; i++) {
    HEAP8[(((buffer)+(i))|0)]=str.charCodeAt(i);
  }
  if (!dontAddNull) HEAP8[(((buffer)+(str.length))|0)]=0;
}
Module['writeAsciiToMemory'] = writeAsciiToMemory;
function unSign(value, bits, ignore, sig) {
  if (value >= 0) {
    return value;
  }
  return bits <= 32 ? 2*Math.abs(1 << (bits-1)) + value // Need some trickery, since if bits == 32, we are right at the limit of the bits JS uses in bitshifts
                    : Math.pow(2, bits)         + value;
}
function reSign(value, bits, ignore, sig) {
  if (value <= 0) {
    return value;
  }
  var half = bits <= 32 ? Math.abs(1 << (bits-1)) // abs is needed if bits == 32
                        : Math.pow(2, bits-1);
  if (value >= half && (bits <= 32 || value > half)) { // for huge values, we can hit the precision limit and always get true here. so don't do that
                                                       // but, in general there is no perfect solution here. With 64-bit ints, we get rounding and errors
                                                       // TODO: In i64 mode 1, resign the two parts separately and safely
    value = -2*half + value; // Cannot bitshift half, as it may be at the limit of the bits JS uses in bitshifts
  }
  return value;
}
if (!Math['imul']) Math['imul'] = function imul(a, b) {
  var ah  = a >>> 16;
  var al = a & 0xffff;
  var bh  = b >>> 16;
  var bl = b & 0xffff;
  return (al*bl + ((ah*bl + al*bh) << 16))|0;
};
Math.imul = Math['imul'];
var Math_abs = Math.abs;
var Math_cos = Math.cos;
var Math_sin = Math.sin;
var Math_tan = Math.tan;
var Math_acos = Math.acos;
var Math_asin = Math.asin;
var Math_atan = Math.atan;
var Math_atan2 = Math.atan2;
var Math_exp = Math.exp;
var Math_log = Math.log;
var Math_sqrt = Math.sqrt;
var Math_ceil = Math.ceil;
var Math_floor = Math.floor;
var Math_pow = Math.pow;
var Math_imul = Math.imul;
var Math_fround = Math.fround;
var Math_min = Math.min;
// A counter of dependencies for calling run(). If we need to
// do asynchronous work before running, increment this and
// decrement it. Incrementing must happen in a place like
// PRE_RUN_ADDITIONS (used by emcc to add file preloading).
// Note that you can add dependencies in preRun, even though
// it happens right before run - run will be postponed until
// the dependencies are met.
var runDependencies = 0;
var runDependencyWatcher = null;
var dependenciesFulfilled = null; // overridden to take different actions when all run dependencies are fulfilled
function addRunDependency(id) {
  runDependencies++;
  if (Module['monitorRunDependencies']) {
    Module['monitorRunDependencies'](runDependencies);
  }
}
Module['addRunDependency'] = addRunDependency;
function removeRunDependency(id) {
  runDependencies--;
  if (Module['monitorRunDependencies']) {
    Module['monitorRunDependencies'](runDependencies);
  }
  if (runDependencies == 0) {
    if (runDependencyWatcher !== null) {
      clearInterval(runDependencyWatcher);
      runDependencyWatcher = null;
    }
    if (dependenciesFulfilled) {
      var callback = dependenciesFulfilled;
      dependenciesFulfilled = null;
      callback(); // can add another dependenciesFulfilled
    }
  }
}
Module['removeRunDependency'] = removeRunDependency;
Module["preloadedImages"] = {}; // maps url to image data
Module["preloadedAudios"] = {}; // maps url to audio data
var memoryInitializer = null;
// === Body ===
STATIC_BASE = 8;
STATICTOP = STATIC_BASE + 221248;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var _stdout;
var _stdout=_stdout=allocate([0,0,0,0,0,0,0,0], "i8", ALLOC_STATIC);
var _stdin;
var _stdin=_stdin=allocate([0,0,0,0,0,0,0,0], "i8", ALLOC_STATIC);
var _stderr;
var _stderr=_stderr=allocate([0,0,0,0,0,0,0,0], "i8", ALLOC_STATIC);
/* memory initializer */ allocate([0,0,6,0,7,0,8,0,7,0,9,0,10,0,6,0,11,0,12,0,16,0,12,0,26,0,16,0,13,0,10,0,16,0,16,0,27,0,10,0,27,0,10,0,10,0,12,0,27,0,12,0,27,0,27,0,14,0,20,0,17,0,20,0,27,0,27,0,21,0,22,0,23,0,24,0,23,0,23,0,25,0,22,0,22,0,23,0,27,0,27,0,27,0,27,0,23,0,23,0,23,0,15,0,27,0,27,0,27,0,15,0,17,0,17,0,18,0,27,0,18,0,19,0,27,0,27,0,27,0,19,0,5,0,27,0,27,0,27,0,27,0,27,0,27,0,27,0,27,0,0,0,0,0,0,0,1,0,0,0,2,0,0,0,2,0,0,0,3,0,0,0,4,0,0,0,5,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,2,0,0,0,3,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,4,0,0,0,1,0,0,0,5,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,6,0,0,0,7,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,8,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,27,0,1,0,1,0,3,0,27,0,28,0,29,0,29,0,30,0,27,0,31,0,27,0,27,0,13,0,28,0,27,0,29,0,30,0,31,0,12,0,14,0,13,0,14,0,27,0,14,0,27,0,0,0,27,0,27,0,27,0,27,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,2,0,19,0,2,0,18,0,15,0,2,0,3,0,11,0,6,0,5,0,3,0,0,0,3,0,3,0,4,0,0,0,4,0,0,0,0,0,4,0,12,0,12,0,12,0,0,0,0,0,12,0,13,0,13,0,13,0,13,0,13,0,13,0,13,0,13,0,14,0,0,0,0,0,0,0,0,0,14,0,14,0,14,0,28,0,0,0,0,0,0,0,28,0,29,0,29,0,30,0,0,0,30,0,31,0,0,0,0,0,0,0,31,0,27,0,27,0,27,0,27,0,27,0,27,0,27,0,27,0,27,0,0,0,0,0,0,0,7,0,14,0,21,0,18,0,11,0,0,0,0,0,0,0,66,0,10,0,27,0,34,0,42,0,7,0,66,0,0,0,7,0,4,0,0,0,0,0,0,0,0,0,66,0,0,0,66,0,66,0,50,0,54,0,57,0,60,0,0,0,2,0,2,0,2,0,2,0,9,0,5,0,7,0,8,0,2,0,7,0,8,0,2,0,8,0,7,0,8,0,7,0,8,0,5,0,7,0,8,0,2,0,7,0,8,0,5,0,7,0,8,0,7,0,8,0,5,0,3,0,2,0,4,0,5,0,2,0,5,0,1,0,3,0,6,0,0,0,0,0,1,0,2,0,3,0,4,0,5,0,6,0,9,0,12,0,14,0,16,0,18,0,21,0,24,0,27,0,29,0,30,0,31,0,32,0,32,0,34,0,35,0,35,0,36,0,36,0,37,0,38,0,39,0,39,0,0,0,0,0,0,0,83,84,65,82,84,73,78,71,95,76,73,78,75,95,84,89,80,69,95,84,65,66,76,69,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,65,65,65,65,65,65,65,65,0,0,0,0,0,0,0,0,114,0,0,0,0,0,0,0,67,111,110,115,116,105,116,117,101,110,116,32,116,114,101,101,58,32,73,108,108,101,103,97,108,32,116,111,107,101,110,32,116,121,112,101,0,0,0,0,101,105,116,104,101,114,0,0,112,112,95,108,101,120,101,114,58,32,105,110,118,97,108,105,100,32,115,121,110,116,97,120,32,40,108,105,110,101,32,37,105,41,0,0,0,0,0,0,32,32,99,32,37,50,100,32,37,52,115,32,91,37,99,93,32,40,37,50,100,45,37,50,100,41,58,32,0,0,0,0,78,111,110,101,32,111,102,32,116,104,101,32,108,105,110,107,97,103,101,115,32,105,115,32,99,97,110,111,110,105,99,97,108,0,0,0,0,0,0,0,49,32,0,0,0,0,0,0,66,117,105,108,116,32,100,105,115,106,117,110,99,116,115,0,48,32,0,0,0,0,0,0,65,108,108,32,108,101,116,116,101,114,115,32,111,102,32,97,32,99,111,110,110,101,99,116,111,114,32,109,117,115,116,32,98,101,32,97,108,112,104,97,45,110,117,109,101,114,105,99,46,0,0,0,0,0,0,0,97,110,100,0,0,0,0,0,76,89,45,87,79,82,68,83,0,0,0,0,0,0,0,0,83,117,98,108,105,110,107,97,103,101,32,37,100,58,32,0,112,111,119,101,114,32,112,114,117,110,101,100,32,40,103,101,110,116,108,101,41,0,0,0,32,32,32,79,112,101,110,105,110,103,32,37,115,10,0,0,10,0,0,0,0,0,0,0,80,80,32,119,97,114,110,105,110,103,58,32,78,111,116,32,117,115,105,110,103,32,97,110,121,32,39,98,111,117,110,100,101,100,39,32,114,117,108,101,115,10,0,0,0,0,0,0,78,117,109,98,101,114,32,111,102,32,115,117,98,108,105,110,107,97,103,101,115,32,61,32,37,100,10,0,0,0,0,0,68,35,35,119,0,0,0,0,65,115,115,101,114,116,105,111,110,32,102,97,105,108,101,100,58,32,37,115,10,0,0,0,81,73,35,100,0,0,0,0,80,118,0,0,0,0,0,0,73,0,0,0,0,0,0,0,67,111,110,115,116,105,116,117,101,110,116,32,116,114,101,101,58,32,76,97,98,101,108,115,32,100,111,32,110,111,116,32,109,97,116,99,104,46,0,0,67,111,117,108,100,110,39,116,32,103,101,116,32,97,32,114,97,110,100,111,109,32,112,97,114,115,101,32,99,104,111,105,99,101,0,0,0,0,0,0,80,103,35,98,0,0,0,0,110,111,114,0,0,0,0,0,44,0,0,0,0,0,0,0,110,101,103,97,116,105,118,101,32,99,111,110,115,116,105,116,117,101,110,116,32,108,101,110,103,116,104,33,0,0,0,0,65,115,115,101,114,116,105,111,110,32,102,97,105,108,101,100,58,32,37,115,10,0,0,0,73,108,108,101,103,97,108,32,100,111,109,97,105,110,0,0,65,102,116,101,114,32,101,120,112,97,110,100,105,110,103,32,101,120,112,114,101,115,115,105,111,110,115,32,105,110,116,111,32,100,105,115,106,117,110,99,116,115,58,0,0,0,0,0,73,108,108,101,103,97,108,32,100,111,109,97,105,110,58,32,37,99,10,0,0,0,0,0,112,112,95,108,105,110,107,115,101,116,32,105,110,116,101,114,110,97,108,32,101,114,114,111,114,58,32,84,114,121,105,110,103,32,116,111,32,97,100,100,32,116,111,32,97,32,110,117,108,108,32,115,101,116,0,0,67,111,110,110,101,99,116,111,114,115,32,98,101,103,105,110,110,105,110,103,32,119,105,116,104,32,34,73,68,34,32,97,114,101,32,102,111,114,98,105,100,100,101,110,0,0,0,0,44,0,0,0,0,0,0,0,69,68,45,87,79,82,68,83,0,0,0,0,0,0,0,0,80,82,84,0,0,0,0,0,112,111,119,101,114,32,112,114,117,110,101,100,32,40,114,117,116,104,108,101,115,115,41,0,46,58,46,47,100,97,116,97,58,0,0,0,0,0,0,0,80,65,82,83,69,82,45,65,80,73,58,32,37,115,0,0,112,111,115,116,95,112,114,111,99,101,115,115,58,32,73,110,118,97,108,105,100,32,115,121,110,116,97,120,32,105,110,32,37,115,32,40,114,117,108,101,32,37,105,41,0,0,0,0,65,68,86,80,0,0,0,0,81,80,0,0,0,0,0,0,110,111,32,108,105,110,107,97,103,101,115,32,102,111,117,110,100,0,0,0,0,0,0,0,65,68,74,80,0,0,0,0,78,111,32,99,111,110,115,116,105,116,117,101,110,116,32,97,100,100,101,100,44,32,98,101,99,97,117,115,101,32,110,111,32,108,97,114,103,101,114,32,37,115,32,32,119,97,115,32,102,111,117,110,100,10,0,0,76,97,114,103,101,114,32,99,32,102,111,117,110,100,58,32,99,32,37,100,32,40,37,115,41,59,32,0,0,0,0,0,65,115,115,101,114,116,105,111,110,32,102,97,105,108,101,100,58,32,37,115,10,0,0,0,119,97,108,107,101,100,32,111,102,102,32,116,104,101,32,101,110,100,32,105,110,32,108,105,115,116,95,108,105,110,107,115,0,0,0,0,0,0,0,0,88,88,0,0,0,0,0,0,110,101,105,116,104,101,114,0,71,101,110,101,114,97,116,105,110,103,32,99,111,109,112,108,101,109,101,110,116,32,99,111,110,115,116,105,116,117,101,110,116,32,102,111,114,32,99,32,37,100,32,111,102,32,116,121,112,101,32,37,115,10,0,0,112,112,95,108,101,120,101,114,58,32,99,117,114,114,101,110,116,32,108,97,98,101,108,32,105,115,32,105,110,118,97,108,105,100,0,0,0,0,0,0,65,115,115,101,114,116,105,111,110,32,102,97,105,108,101,100,58,32,37,115,10,0,0,0,80,111,115,116,112,114,111,99,101,115,115,101,100,32,97,108,108,32,108,105,110,107,97,103,101,115,0,0,0,0,0,0,67,79,112,0,0,0,0,0,111,110,108,121,0,0,0,0,77,0,0,0,0,0,0,0,84,104,101,32,102,105,114,115,116,32,108,101,116,116,101,114,32,111,102,32,97,32,99,111,110,110,101,99,116,111,114,32,109,117,115,116,32,98,101,32,105,110,32,91,65,45,45,90,93,46,0,0,0,0,0,0,83,73,0,0,0,0,0,0,65,32,100,105,115,106,117,110,99,116,32,73,32,105,110,115,101,114,116,101,100,32,119,97,115,32,110,111,116,32,116,104,101,114,101,46,32,40,50,41,0,0,0,0,0,0,0,0,83,45,87,79,82,68,83,0,65,115,115,101,114,116,105,111,110,32,102,97,105,108,101,100,58,32,37,115,10,0,0,0,37,100,32,112,111,119,101,114,32,112,114,117,110,101,32,99,111,115,116,58,10,0,0,0,80,80,32,119,97,114,110,105,110,103,58,32,78,111,116,32,117,115,105,110,103,32,97,110,121,32,37,115,32,114,117,108,101,115,10,0,0,0,0,0,83,35,35,119,0,0,0,0,83,70,0,0,0,0,0,0,77,101,109,111,114,121,32,105,115,32,101,120,104,97,117,115,116,101,100,33,10,0,0,0,83,88,0,0,0,0,0,0,77,88,35,42,0,0,0,0,77,86,115,0,0,0,0,0,65,100,106,117,115,116,105,110,103,32,99,32,37,100,32,116,111,32,102,105,120,32,99,111,109,109,97,32,111,118,101,114,108,97,112,10,0,0,0,0,32,0,0,0,0,0,0,0,65,100,106,117,115,116,105,110,103,32,37,100,32,116,111,32,102,105,120,32,99,111,109,109,97,32,111,118,101,114,108,97,112,10,0,0,0,0,0,0,84,111,111,32,109,97,110,121,32,108,105,110,107,115,0,0,65,115,115,101,114,116,105,111,110,32,102,97,105,108,101,100,58,32,37,115,10,0,0,0,98,117,116,0,0,0,0,0,82,73,71,72,84,45,87,65,76,76,0,0,0,0,0,0,112,112,95,108,101,120,101,114,95,111,112,101,110,58,32,112,97,115,115,101,100,32,97,32,78,85,76,76,32,102,105,108,101,32,112,111,105,110,116,101,114,0,0,0,0,0,0,0,83,73,78,86,0,0,0,0,87,97,114,110,105,110,103,58,32,67,111,110,115,105,100,101,114,105,110,103,32,97,32,114,97,110,100,111,109,32,115,117,98,115,101,116,32,111,102,32,37,100,32,111,102,32,37,100,32,108,105,110,107,97,103,101,115,10,0,0,0,0,0,0,110,111,116,0,0,0,0,0,86,80,0,0,0,0,0,0,65,115,115,101,114,116,105,111,110,32,102,97,105,108,101,100,58,32,37,115,10,0,0,0,65,32,99,111,110,110,101,99,116,111,114,32,109,117,115,116,32,101,110,100,32,105,110,32,97,32,34,43,34,32,111,114,32,34,45,34,46,0,0,0,80,80,0,0,0,0,0,0,65,32,100,105,115,106,117,110,99,116,32,73,32,105,110,115,101,114,116,101,100,32,119,97,115,32,110,111,116,32,116,104,101,114,101,46,32,40,49,41,0,0,0,0,0,0,0,0,73,78,71,45,87,79,82,68,83,0,0,0,0,0,0,0,43,43,43,43,0,0,0,0,67,111,110,115,116,105,116,117,101,110,116,115,32,97,100,100,101,100,32,97,116,32,102,105,114,115,116,32,115,116,97,103,101,32,102,111,114,32,115,117,98,108,32,37,100,58,10,0,114,45,62,108,32,112,97,115,115,32,99,104,97,110,103,101,100,32,37,100,32,97,110,100,32,100,101,108,101,116,101,100,32,37,100,10,0,0,0,0,65,115,115,101,114,116,105,111,110,32,102,97,105,108,101,100,58,32,37,115,10,0,0,0,73,110,116,101,114,110,97,108,32,101,114,114,111,114,46,32,32,83,101,110,100,32,109,97,105,108,32,116,111,32,108,105,110,107,64,106,117,110,111,46,99,111,109,32,0,0,0,0,67,79,78,84,65,73,78,83,95,78,79,78,69,95,82,85,76,69,83,0,0,0,0,0,69,114,114,111,114,58,32,110,111,32,116,121,112,101,32,97,115,115,105,103,110,101,100,32,116,111,32,99,111,110,115,116,105,116,117,101,110,116,10,0,37,100,32,77,97,116,99,104,32,99,111,115,116,10,0,0,84,105,109,101,114,32,105,115,32,101,120,112,105,114,101,100,33,10,0,0,0,0,0,0,69,114,114,111,114,58,32,110,111,32,100,111,109,97,105,110,32,116,121,112,101,32,97,115,115,105,103,110,101,100,32,116,111,32,99,111,110,115,116,105,116,117,101,110,116,10,0,0,46,73,37,100,0,0,0,0,85,110,101,120,112,101,99,116,101,100,32,119,111,114,100,32,116,121,112,101,0,0,0,0,77,88,35,100,0,0,0,0,44,0,0,0,0,0,0,0,44,0,0,0,0,0,0,0,77,114,0,0,0,0,0,0,99,97,108,108,101,100,32,118,101,114,105,102,121,95,115,101,116,32,119,104,101,110,32,120,95,116,97,98,108,101,61,61,78,85,76,76,0,0,0,0,111,110,108,121,0,0,0,0,81,73,0,0,0,0,0,0,87,72,65,68,86,80,0,0,87,97,114,110,105,110,103,58,32,67,111,117,110,116,32,111,118,101,114,102,108,111,119,46,10,67,111,110,115,105,100,101,114,105,110,103,32,97,32,114,97,110,100,111,109,32,115,117,98,115,101,116,32,111,102,32,37,100,32,111,102,32,97,110,32,117,110,107,110,111,119,110,32,97,110,100,32,108,97,114,103,101,32,110,117,109,98,101,114,32,111,102,32,108,105,110,107,97,103,101,115,10,0,0,9,112,111,115,116,95,112,114,111,99,101,115,115,58,32,78,101,101,100,32,97,110,32,101,110,116,114,121,32,102,111,114,32,37,115,32,105,110,32,76,73,78,75,95,84,89,80,69,95,84,65,66,76,69,0,0,98,111,116,104,0,0,0,0,119,104,101,110,0,0,0,0,69,120,112,101,99,116,105,110,103,32,97,32,99,111,110,110,101,99,116,111,114,46,0,0,66,35,100,0,0,0,0,0,65,115,115,101,114,116,105,111,110,32,102,97,105,108,101,100,58,32,37,115,10,0,0,0,72,89,80,72,69,78,65,84,69,68,45,87,79,82,68,83,0,0,0,0,0,0,0,0,83,115,35,100,0,0,0,0,110,111,114,0,0,0,0,0,108,45,62,114,32,112,97,115,115,32,99,104,97,110,103,101,100,32,37,100,32,97,110,100,32,100,101,108,101,116,101,100,32,37,100,10,0,0,0,0,67,111,117,108,100,32,110,111,116,32,98,117,105,108,100,32,115,101,110,116,101,110,99,101,32,101,120,112,114,101,115,115,105,111,110,115,32,0,0,0,67,79,78,84,65,73,78,83,95,79,78,69,95,82,85,76,69,83,0,0,0,0,0,0,87,72,80,80,0,0,0,0,78,111,32,99,111,109,112,108,101,116,101,32,108,105,110,107,97,103,101,115,32,102,111,117,110,100,46,10,0,0,0,0,77,106,0,0,0,0,0,0,46,32,37,115,10,9,32,108,105,110,101,32,37,100,44,32,116,111,107,101,110,115,32,61,32,37,115,10,0,0,0,0,87,72,78,80,0,0,0,0,34,37,115,34,32,0,0,0,77,88,35,114,0,0,0,0,65,100,106,117,115,116,105,110,103,32,99,111,110,115,116,105,116,117,101,110,116,32,37,100,58,10,0,0,0,0,0,0,82,42,0,0,0,0,0,0,87,65,82,78,73,78,71,58,32,79,118,101,114,102,108,111,119,32,105,110,32,99,111,117,110,116,33,10,0,0,0,0,118,101,114,105,102,121,95,115,101,116,32,102,97,105,108,101,100,0,0,0,0,0,0,0,73,100,105,111,109,32,115,116,114,105,110,103,32,119,105,116,104,32,111,110,108,121,32,111,110,101,32,99,111,110,110,101,99,116,111,114,32,45,45,32,115,104,111,117,108,100,32,104,97,118,101,32,98,101,101,110,32,99,97,117,103,104,116,0,110,111,116,0,0,0,0,0,83,66,65,82,0,0,0,0,82,110,0,0,0,0,0,0,66,117,105,108,116,32,112,97,114,115,101,32,115,101,116,0,114,97,105,115,101,32,80,80,95,77,65,88,95,68,79,77,65,73,78,83,32,118,97,108,117,101,0,0,0,0,0,0,110,101,105,116,104,101,114,0,67,101,42,0,0,0,0,0,112,112,95,108,101,120,101,114,58,32,117,110,97,98,108,101,32,116,111,32,112,97,114,115,101,32,107,110,111,119,108,101,100,103,101,32,102,105,108,101,32,40,108,105,110,101,32,37,105,41,46,10,0,0,0,0,87,104,105,116,101,32,115,112,97,99,101,32,105,110,115,105,100,101,32,111,102,32,116,111,107,101,110,0,0,0,0,0,65,100,100,105,110,103,32,99,111,110,115,116,105,116,117,101,110,116,58,10,0,0,0,0,78,117,109,98,101,114,32,111,102,32,101,113,117,97,108,105,116,121,32,116,101,115,116,115,58,32,37,100,10,0,0,0,78,85,77,66,69,82,83,0,65,110,100,45,108,105,115,116,115,32,97,102,116,101,114,32,112,114,117,110,105,110,103,58,10,0,0,0,0,0,0,0,98,117,116,0,0,0,0,0,114,0,0,0,0,0,0,0,83,101,110,116,101,110,99,101,32,110,111,116,32,105,110,32,100,105,99,116,105,111,110,97,114,121,32,0,0,0,0,0,107,105,108,108,101,100,32,37,100,32,100,117,112,108,105,99,97,116,101,115,10,0,0,0,66,79,85,78,68,69,68,95,82,85,76,69,83,0,0,0,69,108,105,109,105,110,97,116,105,110,103,32,97,110,100,108,105,115,116,44,32,110,61,37,100,44,32,97,61,37,100,44,32,110,50,61,37,100,44,32,97,50,61,37,100,58,32,0,52,46,48,46,97,102,102,105,120,0,0,0,0,0,0,0,70,111,117,110,100,32,116,104,97,116,32,99,37,100,32,105,110,32,108,105,115,116,32,37,100,32,105,115,32,98,105,103,103,101,114,32,116,104,97,110,32,99,37,100,32,105,110,32,108,105,115,116,32,37,100,10,0,0,0,0,0,0,0,0,37,100,32,0,0,0,0,0,65,115,115,101,114,116,105,111,110,32,102,97,105,108,101,100,58,32,37,115,10,0,0,0,32,32,37,100,58,32,0,0,46,32,84,104,101,32,115,101,110,116,101,110,99,101,32,104,97,115,32,116,111,111,32,109,97,110,121,32,119,111,114,100,115,46,10,0,0,0,0,0,78,80,0,0,0,0,0,0,65,110,100,45,108,105,115,116,115,58,10,0,0,0,0,0,84,111,116,97,108,32,99,111,117,110,116,32,119,105,116,104,32,37,100,32,110,117,108,108,32,108,105,110,107,115,58,32,32,32,37,100,10,0,0,0,112,97,114,115,101,95,115,101,116,40,41,32,99,97,108,108,101,100,32,119,105,116,104,32,99,111,115,116,32,60,32,48,46,0,0,0,0,0,0,0,46,32,84,104,101,32,119,111,114,100,32,34,37,115,34,32,105,115,32,116,111,111,32,108,111,110,103,46,10,65,32,119,111,114,100,32,99,97,110,32,104,97,118,101,32,97,32,109,97,120,105,109,117,109,32,111,102,32,37,100,32,99,104,97,114,97,99,116,101,114,115,46,10,0,0,0,0,0,0,0,32,32,32,32,84,104,105,115,32,119,111,114,100,32,119,105,108,108,32,98,101,32,105,103,110,111,114,101,100,10,0,0,97,110,100,0,0,0,0,0,87,65,82,78,73,78,71,58,32,67,111,110,115,116,105,116,117,101,110,116,32,37,100,32,104,97,115,32,110,101,103,97,116,105,118,101,32,108,101,110,103,116,104,46,32,68,101,108,101,116,105,110,103,32,105,116,46,10,0,0,0,0,0,0,83,112,108,105,116,116,105,110,103,32,119,111,114,100,32,105,110,116,111,32,116,104,114,101,101,58,32,37,115,45,37,115,45,37,115,10,0,0,0,0,83,97,119,32,37,105,32,117,110,105,113,117,101,32,108,105,110,107,32,110,97,109,101,115,32,105,110,32,97,108,108,32,108,105,110,107,97,103,101,115,46,10,0,0,0,0,0,0,87,65,82,78,73,78,71,58,32,116,104,101,32,99,111,110,115,116,105,116,117,101,110,116,115,32,97,114,101,110,39,116,32,110,101,115,116,101,100,33,32,65,100,106,117,115,116,105,110,103,32,116,104,101,109,46,40,37,100,44,32,37,100,41,10,0,0,0,0,0,0,0,70,114,101,101,105,110,103,32,100,105,99,116,105,111,110,97,114,121,32,37,115,10,0,0,83,112,108,105,116,116,105,110,103,32,119,111,114,100,32,105,110,116,111,32,116,119,111,58,32,37,115,45,37,115,10,0,101,105,116,104,101,114,0,0,114,97,105,115,101,32,118,97,108,117,101,32,111,102,32,80,80,95,77,65,88,95,68,79,77,65,73,78,83,0,0,0,65,100,100,105,110,103,32,103,108,111,98,97,108,32,115,101,110,116,101,110,99,101,32,99,111,110,115,116,105,116,117,101,110,116,58,10,0,0,0,0,82,73,71,72,84,45,87,65,76,76,0,0,0,0,0,0,80,82,69,0,0,0,0,0,84,111,107,101,110,32,116,111,111,32,108,111,110,103,0,0,46,0,0,0,0,0,0,0,37,115,91,37,100,93,32,0,67,65,80,73,84,65,76,73,90,69,68,45,87,79,82,68,83,0,0,0,0,0,0,0,97,118,101,114,97,103,101,32,108,105,115,116,32,108,101,110,103,116,104,58,32,37,102,10,0,0,0,0,0,0,0,0,83,85,70,0,0,0,0,0,88,0,0,0,0,0,0,0,111,114,0,0,0,0,0,0,85,78,76,73,77,73,84,69,68,45,67,79,78,78,69,67,84,79,82,83,0,0,0,0,10,10,0,0,0,0,0,0,69,114,114,111,114,32,115,101,112,97,114,97,116,105,110,103,32,115,101,110,116,101,110,99,101,32,0,0,0,0,0,0,114,45,62,108,32,112,97,115,115,32,114,101,109,111,118,101,100,32,37,100,10,0,0,0,67,79,78,78,69,67,84,69,68,95,82,85,76,69,83,0,76,80,85,78,67,0,0,0,36,0,0,0,0,0,0,0,65,78,68,65,66,76,69,45,67,79,78,78,69,67,84,79,82,83,0,0,0,0,0,0,37,115,40,37,100,41,32,0,82,80,85,78,67,0,0,0,52,46,48,46,99,111,110,115,116,105,116,117,101,110,116,45,107,110,111,119,108,101,100,103,101,0,0,0,0,0,0,0,65,0,0,0,0,0,0,0,76,89,45,87,79,82,68,83,0,0,0,0,0,0,0,0,105,110,103,0,0,0,0,0,87,100,99,0,0,0,0,0,10,87,97,114,110,105,110,103,58,32,37,115,10,0,0,0,69,68,45,87,79,82,68,83,0,0,0,0,0,0,0,0,69,120,112,101,99,116,105,110,103,32,34,59,34,32,97,116,32,116,104,101,32,101,110,100,32,111,102,32,97,110,32,101,110,116,114,121,46,0,0,0,46,10,32,84,111,32,112,114,111,99,101,115,115,32,116,104,105,115,32,115,101,110,116,101,110,99,101,32,121,111,117,114,32,100,105,99,116,105,111,110,97,114,121,32,110,101,101,100,115,32,116,104,101,32,119,111,114,100,32,34,37,115,34,46,10,0,0,0,0,0,0,0,77,112,110,0,0,0,0,0,83,45,87,79,82,68,83,0,44,0,0,0,0,0,0,0,32,37,115,10,0,0,0,0,37,46,53,48,115,91,33,93,46,101,0,0,0,0,0,0,112,111,115,116,95,112,114,111,99,101,115,115,58,32,68,111,109,97,105,110,32,40,37,115,41,32,109,117,115,116,32,98,101,32,97,32,115,105,110,103,108,101,32,99,104,97,114,97,99,116,101,114,0,0,0,0,83,0,0,0,0,0,0,0,67,79,110,0,0,0,0,0,97,110,32,101,120,112,114,101,115,115,105,111,110,32,110,111,100,101,32,119,105,116,104,32,110,111,32,116,121,112,101,0,73,78,71,45,87,79,82,68,83,0,0,0,0,0,0,0,37,55,46,50,102,32,115,101,99,111,110,100,115,10,0,0,91,37,115,93,0,0,0,0,84,104,105,115,32,101,110,116,114,121,32,105,115,32,115,117,112,112,111,115,101,100,32,116,111,32,98,101,32,105,110,32,116,104,101,32,116,97,98,108,101,46,0,0,0,0,0,0,73,32,101,120,112,101,99,116,101,100,32,97,32,119,111,114,100,32,98,117,116,32,100,105,100,110,39,116,32,103,101,116,32,105,116,46,0,0,0,0,37,46,53,48,115,91,33,93,46,103,0,0,0,0,0,0,112,111,115,116,95,112,114,111,99,101,115,115,58,32,76,105,110,107,32,116,97,98,108,101,32,109,117,115,116,32,104,97,118,101,32,102,111,114,109,97,116,32,91,60,108,105,110,107,62,32,60,100,111,109,97,105,110,32,110,97,109,101,62,93,43,0,0,0,0,0,0,0,32,97,32,99,111,114,114,101,99,116,108,121,32,102,111,114,109,101,100,32,105,100,105,111,109,32,115,116,114,105,110,103,46,10,0,0,0,0,0,0,98,111,116,104,0,0,0,0,77,86,112,110,0,0,0,0,78,85,77,66,69,82,83,0,10,32,32,32,32,84,104,105,115,32,119,111,114,100,32,119,105,108,108,32,98,101,32,105,103,110,111,114,101,100,46,10,0,0,0,0,0,0,0,0,37,46,53,48,115,91,33,93,46,118,0,0,0,0,0,0,112,111,115,116,95,112,114,111,99,101,115,115,58,32,67,111,117,108,100,110,39,116,32,102,105,110,100,32,115,116,97,114,116,105,110,103,32,108,105,110,107,32,116,97,98,108,101,32,37,115,0,0,0,0,0,0,89,80,0,0,0,0,0,0,111,117,116,32,111,102,32,100,121,110,97,109,105,99,32,109,101,109,111,114,121,32,105,110,32,121,121,95,99,114,101,97,116,101,95,98,117,102,102,101,114,40,41,0,0,0,0,0,72,89,80,72,69,78,65,84,69,68,45,87,79,82,68,83,0,0,0,0,0,0,0,0,32,37,115,0,0,0,0,0,37,46,53,48,115,91,33,93,0,0,0,0,0,0,0,0,80,80,32,119,97,114,110,105,110,103,58,32,76,105,110,107,32,115,101,116,32,37,115,32,110,111,116,32,100,101,102,105,110,101,100,58,32,97,115,115,117,109,105,110,103,32,101,109,112,116,121,46,10,0,0,0,83,104,111,117,108,100,32,104,97,118,101,32,102,111,117,110,100,32,116,104,105,115,32,99,111,110,110,101,99,116,111,114,32,115,116,114,105,110,103,0,44,0,0,0,0,0,0,0,89,83,0,0,0,0,0,0,65,115,115,101,114,116,105,111,110,32,102,97,105,108,101,100,58,32,37,115,10,0,0,0,80,76,45,67,65,80,73,84,65,76,73,90,69,68,45,87,79,82,68,83,0,0,0,0,32,102,111,117,110,100,32,110,101,97,114,32,108,105,110,101,32,37,100,32,109,97,116,99,104,101,115,32,116,104,101,32,102,111,108,108,111,119,105,110,103,32,119,111,114,100,115,58,10,0,0,0,0,0,0,0,37,46,53,48,115,91,33,93,46,37,46,53,115,0,0,0,76,69,70,84,95,68,79,77,65,73,78,95,83,84,65,82,84,69,82,95,76,73,78,75,83,0,0,0,0,0,0,0,84,104,101,114,101,32,115,104,111,117,108,100,32,98,101,32,97,32,102,97,116,32,85,80,32,108,105,110,107,32,104,101,114,101,0,0,0,0,0,0,40,41,123,125,59,91,93,38,124,58,0,0,0,0,0,0,67,80,0,0,0,0,0,0,67,65,80,73,84,65,76,73,90,69,68,45,87,79,82,68,83,0,0,0,0,0,0,0,42,42,42,32,84,104,101,32,119,111,114,100,32,34,37,115,34,0,0,0,0,0,0,0,101,100,0,0,0,0,0,0,80,76,45,67,65,80,73,84,65,76,73,90,69,68,45,87,79,82,68,83,0,0,0,0,85,82,70,76,95,79,78,76,89,95,68,79,77,65,73,78,95,83,84,65,82,84,69,82,95,76,73,78,75,83,0,0,78,117,109,98,101,114,32,111,102,32,100,105,115,106,117,110,99,116,115,32,105,110,32,116,104,101,32,116,97,98,108,101,58,32,37,100,10,0,0,0,116,104,105,110,32,108,105,110,107,58,32,91,37,100,44,32,37,100,93,10,0,0,0,0,37,115,37,99,32,0,0,0,76,69,70,84,45,87,65,76,76,0,0,0,0,0,0,0,97,110,100,0,0,0,0,0,37,115,10,0,0,0,0,0,85,78,75,78,79,87,78,45,87,79,82,68,0,0,0,0,32,32,32,32,84,104,105,115,32,119,111,114,100,32,119,105,108,108,32,98,101,32,105,103,110,111,114,101,100,46,10,0,69,114,114,111,114,32,111,112,101,110,105,110,103,32,119,111,114,100,32,102,105,108,101,32,0,0,0,0,0,0,0,0,108,121,0,0,0,0,0,0,77,85,83,84,95,70,79,82,77,95,65,95,67,89,67,76,69,95,76,73,78,75,83,0,108,45,62,114,32,112,97,115,115,32,114,101,109,111,118,101,100,32,37,100,10,0,0,0,70,79,82,77,95,65,95,67,89,67,76,69,95,82,85,76,69,83,0,0,0,0,0,0,102,97,116,32,108,105,110,107,58,32,91,37,100,44,32,37,100,93,10,0,0,0,0,0,37,115,32,0,0,0,0,0,82,73,71,72,84,45,87,65,76,76,0,0,0,0,0,0,32,32,32,32,87,111,114,100,115,32,101,110,100,105,110,103,32,34,46,73,120,34,32,40,120,32,97,32,110,117,109,98,101,114,41,32,97,114,101,32,114,101,115,101,114,118,101,100,32,102,111,114,32,105,100,105,111,109,115,46,10,0,0,0,37,46,53,48,115,91,63,93,0,0,0,0,0,0,0,0,82,69,83,84,82,73,67,84,69,68,95,76,73,78,75,83,0,0,0,0,0,0,0,0,119,111,114,100,32,61,32,37,100,10,0,0,0,0,0,0,52,46,48,46,107,110,111,119,108,101,100,103,101,0,0,0,67,111,117,108,100,110,39,116,32,102,105,110,100,32,112,111,115,116,45,112,114,111,99,101,115,115,32,107,110,111,119,108,101,100,103,101,32,102,105,108,101,32,37,115,0,0,0,0,37,99,37,115,32,0,0,0,76,69,70,84,45,87,65,76,76,0,0,0,0,0,0,0,73,110,105,116,105,97,108,105,122,101,100,32,102,97,115,116,32,109,97,116,99,104,101,114,32,97,110,100,32,104,97,115,104,32,116,97,98,108,101,0,83,104,111,117,108,100,32,104,97,118,101,32,102,111,117,110,100,32,97,110,32,117,112,32,108,105,110,107,0,0,0,0,42,42,42,32,87,111,114,100,32,34,37,115,34,32,102,111,117,110,100,32,110,101,97,114,32,108,105,110,101,32,37,100,46,10,0,0,0,0,0,0,37,46,53,48,115,91,63,93,46,37,46,53,115,0,0,0,73,71,78,79,82,69,95,84,72,69,83,69,95,76,73,78,75,83,0,0,0,0,0,0,82,97,110,32,111,117,116,32,111,102,32,115,112,97,99,101,32,114,101,97,108,108,111,99,105,110,103,32,116,104,101,32,108,97,98,101,108,32,116,97,98,108,101,10,0,0,0,0,84,111,111,32,109,97,110,121,32,99,111,110,115,116,105,116,117,101,110,116,115,0,0,0,105,110,112,117,116,32,105,110,32,102,108,101,120,32,115,99,97,110,110,101,114,32,102,97,105,108,101,100,0,0,0,0,37,99,0,0,0,0,0,0,69,108,105,109,105,110,97,116,101,100,32,100,117,112,108,105,99,97,116,101,32,100,105,115,106,117,110,99,116,115,32,40,97,103,97,105,110,41,0,0,84,104,101,32,119,111,114,100,32,34,37,115,34,32,104,97,115,32,98,101,101,110,32,109,117,108,116,105,112,108,121,32,100,101,102,105,110,101,100,10,0,0,0,0,0,0,0,0,85,78,75,78,79,87,78,95,87,79,82,68,32,115,104,111,117,108,100,32,104,97,118,101,32,98,101,101,110,32,116,104,101,114,101,0,0,0,0,0,68,79,77,65,73,78,95,67,79,78,84,65,73,78,83,95,76,73,78,75,83,0,0,0,83,104,111,117,108,100,32,104,97,118,101,32,102,111,117,110,100,32,116,104,101,32,100,111,119,110,32,108,105,110,107,46,0,0,0,0,0,0,0,0,78,117,109,98,101,114,32,111,102,32,115,117,98,108,105,110,107,97,103,101,115,32,101,120,99,101,101,100,115,32,109,97,120,105,109,117,109,58,32,111,110,108,121,32,99,111,110,115,105,100,101,114,105,110,103,32,102,105,114,115,116,32,37,100,32,115,117,98,108,105,110,107,97,103,101,115,10,0,0,0,105,110,112,117,116,32,98,117,102,102,101,114,32,111,118,101,114,102,108,111,119,44,32,99,97,110,39,116,32,101,110,108,97,114,103,101,32,98,117,102,102,101,114,32,98,101,99,97,117,115,101,32,115,99,97,110,110,101,114,32,117,115,101,115,32,82,69,74,69,67,84,0,83,84,82,73,78,71,95,83,69,84,58,32,67,97,110,39,116,32,105,110,115,101,114,116,32,97,32,110,117,108,108,32,115,116,114,105,110,103,0,0,105,110,100,101,120,32,111,117,116,32,111,102,32,114,97,110,103,101,0,0,0,0,0,0,65,102,116,101,114,32,112,114,117,110,105,110,103,32,97,110,100,32,100,117,112,108,105,99,97,116,101,32,101,108,105,109,105,110,97,116,105,111,110,58,10,0,0,0,0,0,0,0,111,114,0,0,0,0,0,0,84,111,111,32,109,97,110,121,32,108,105,110,107,115,0,0,85,78,75,78,79,87,78,45,87,79,82,68,0,0,0,0,85,82,70,76,95,68,79,77,65,73,78,95,83,84,65,82,84,69,82,95,76,73,78,75,83,0,0,0,0,0,0,0,78,101,118,101,114,32,102,111,117,110,100,32,115,117,98,100,105,115,106,117,110,99,116,0,77,86,103,0,0,0,0,0,41,0,0,0,0,0,0,0,98,117,105,108,100,95,99,108,97,117,115,101,32,99,97,108,108,101,100,32,119,105,116,104,32,110,117,108,108,32,112,97,114,97,109,101,116,101,114,0,102,97,116,97,108,32,102,108,101,120,32,115,99,97,110,110,101,114,32,105,110,116,101,114,110,97,108,32,101,114,114,111,114,45,45,101,110,100,32,111,102,32,98,117,102,102,101,114,32,109,105,115,115,101,100,0,70,105,110,105,115,104,101,100,32,112,97,114,115,101,0,0,80,114,117,110,101,100,32,102,97,116,32,100,105,115,106,117,110,99,116,115,0,0,0,0,109,97,116,99,104,40,41,32,100,105,100,32,110,111,116,32,114,101,99,101,105,118,101,32,112,97,114,97,109,115,32,105,110,32,116,104,101,32,110,97,116,117,114,97,108,32,111,114,100,101,114,46,0,0,0,0,34,97,110,100,34,32,97,110,100,32,34,111,114,34,32,97,116,32,116,104,101,32,115,97,109,101,32,108,101,118,101,108,32,105,110,32,97,110,32,101,120,112,114,101,115,115,105,111,110,0,0,0,0,0,0,0,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,0,0,0,0,0,10,37,115,10,0,0,0,0,80,97,114,115,101,95,105,110,102,111,32,105,115,32,110,111,116,32,78,85,76,76,0,0,68,79,77,65,73,78,95,83,84,65,82,84,69,82,95,76,73,78,75,83,0,0,0,0,115,32,97,110,100,32,116,32,115,104,111,117,108,100,32,98,101,32,116,104,101,32,115,97,109,101,32,108,101,110,103,116,104,33,0,0,0,0,0,0,42,42,42,32,87,111,114,100,32,34,37,115,34,32,111,110,32,108,105,110,101,32,37,100,32,105,115,32,110,111,116,0,82,97,110,32,111,117,116,32,111,102,32,115,112,97,99,101,46,10,0,0,0,0,0,0,37,115,0,0,0,0,0,0,37,115,10,0,0,0,0,0,67,111,117,110,116,101,100,32,112,97,114,115,101,115,0,0,67,111,110,115,116,114,117,99,116,101,100,32,102,97,116,32,100,105,115,106,117,110,99,116,115,0,0,0,0,0,0,0,97,110,100,0,0,0,0,0,34,0,0,0,0,0,0,0,112,111,115,116,95,112,114,111,99,101,115,115,58,32,73,110,118,97,108,105,100,32,115,121,110,116,97,120,32,40,114,117,108,101,32,37,105,32,111,102,32,37,115,41,0,0,0,0,83,73,0,0,0,0,0,0,40,37,115,32,0,0,0,0,112,112,95,108,101,120,101,114,58,32,116,111,111,32,109,97,110,121,32,108,97,98,101,108,115,46,32,82,97,105,115,101,32,80,80,95,76,69,88,69,82,95,77,65,88,95,76,65,66,69,76,83,0,0,0,0,70,105,110,105,115,104,101,100,32,101,120,112,114,101,115,115,105,111,110,32,112,114,117,110,105,110,103,0,0,0,0,0,102,97,116,97,108,32,102,108,101,120,32,115,99,97,110,110,101,114,32,105,110,116,101,114,110,97,108,32,101,114,114,111,114,45,45,110,111,32,97,99,116,105,111,110,32,102,111,117,110,100,0,0,0,0,0,0,65,102,116,101,114,32,99,111,110,106,117,110,99,116,105,111,110,115,44,32,100,105,115,106,117,110,99,116,115,32,99,111,117,110,116,115,58,10,0,0,83,0,0,0,0,0,0,0,67,111,110,110,101,99,116,111,114,44,32,34,40,34,44,32,34,91,34,44,32,111,114,32,34,123,34,32,101,120,112,101,99,116,101,100,46,0,0,0,84,104,101,32,100,105,99,116,105,111,110,97,114,121,32,99,111,110,116,97,105,110,115,32,97,32,119,111,114,100,32,116,104,97,116,32,105,115,32,116,111,111,32,108,111,110,103,46,0,0,0,0,0,0,0,0,32,34,0,0,0,0,0,0,82,97,110,100,111,109,32,110,117,109,98,101,114,32,103,101,110,101,114,97,116,111,114,32,110,111,116,32,105,110,105,116,105,97,108,105,122,101,100,46,0,0,0,0,0,0,0,0,115,121,110,116,97,120,32,101,114,114,111,114,32,105,110,32,107,110,111,119,108,101,100,103,101,32,102,105,108,101,0,0,112,112,32,112,114,117,110,105,110,103,0,0,0,0,0,0,115,101,110,116,45,62,108,101,110,103,116,104,32,116,111,111,32,98,105,103,0,0,0,0,73,108,108,101,103,97,108,32,109,111,100,101,32,105,110,32,108,105,110,107,97,103,101,95,112,114,105,110,116,95,99,111,110,115,116,105,116,117,101,110,116,95,116,114,101,101,0,0,85,115,105,110,103,32,37,105,32,39,99,111,110,116,97,105,110,115,32,111,110,101,39,32,114,117,108,101,115,32,97,110,100,32,37,105,32,39,99,111,110,116,97,105,110,115,32,110,111,110,101,39,32,114,117,108,101,115,10,0,0,0,0,0,112,112,95,108,101,120,101,114,58,32,108,97,98,101,108,32,37,115,32,109,117,108,116,105,112,108,121,32,100,101,102,105,110,101,100,33,0,0,0,0,101,120,97,117,115,116,101,100,0,0,0,0,0,0,0,0,76,69,70,84,45,87,65,76,76,0,0,0,0,0,0,0,68,111,110,101,32,99,111,110,106,117,110,99,116,105,111,110,32,112,114,117,110,105,110,103,0,0,0,0,0,0,0,0,111,114,0,0,0,0,0,0,69,120,112,101,99,116,105,110,103,32,97,32,34,93,34,46,0,0,0,0,0,0,0,0,84,104,101,32,102,111,108,108,111,119,105,110,103,32,119,111,114,100,115,32,97,114,101,32,110,111,116,32,105,110,32,116].concat([104,101,32,100,105,99,116,105,111,110,97,114,121,58,0,0,82,97,110,100,111,109,32,110,117,109,98,101,114,32,103,101,110,101,114,97,116,111,114,32,110,111,116,32,102,105,110,97,108,105,122,101,100,46,0,0,80,80,32,119,97,114,110,105,110,103,58,32,78,111,116,32,117,115,105,110,103,32,97,110,121,32,39,102,111,114,109,32,97,32,99,121,99,108,101,39,32,114,117,108,101,115,10,0,10,65,102,116,101,114,32,112,112,95,112,114,117,110,105,110,103,58,10,0,0,0,0,0,108,105,110,101,32,37,100,44,32,99,117,114,114,101,110,116,32,116,111,107,101,110,32,61,32,34,37,115,34,10,0,0,67,111,117,108,100,32,110,111,116,32,111,112,101,110,32,100,105,99,116,105,111,110,97,114,121,32,0,0,0,0,0,0,10,0,0,0,0,0,0,0,76,97,98,101,108,32,37,115,32,109,117,115,116,32,101,110,100,32,119,105,116,104,32,58,0,0,0,0,0,0,0,0,37,115,10,0,0,0,0,0,10,65,102,116,101,114,32,99,111,110,106,117,110,99,116,105,111,110,32,112,114,117,110,105,110,103,58,10,0,0,0,0,110,111,114,0,0,0,0,0,69,120,112,101,99,116,105,110,103,32,97,32,34,125,34,46,0,0,0,0,0,0,0,0,58,0,0,0,0,0,0,0,82,73,71,72,84,45,87,65,76,76,0,0,0,0,0,0,65,115,115,101,114,116,105,111,110,32,102,97,105,108,101,100,58,32,37,115,10,0,0,0,112,111,115,116,95,112,114,111,99,101,115,115,58,32,73,110,118,97,108,105,100,32,115,121,110,116,97,120,32,105,110,32,37,115,0,0,0,0,0,0,78,117,109,98,101,114,32,111,102,32,100,105,115,106,117,110,99,116,32,116,121,112,101,115,32,40,108,97,98,101,108,115,41,58,32,37,100,10,0,0,112,112,95,112,114,117,110,101,32,112,97,115,115,32,100,101,108,101,116,101,100,32,37,100,10,0,0,0,0,0,0,0,73,108,108,101,103,97,108,32,98,101,103,105,110,110,105,110,103,32,111,102,32,115,116,114,105,110,103,0,0,0,0,0,37,99,0,0,0,0,0,0,112,112,95,108,101,120,101,114,58,32,115,116,114,105,110,103,32,37,115,32,99,111,110,116,97,105,110,115,32,97,32,99,111,109,109,97,44,32,119,104,105,99,104,32,105,115,32,97,32,110,111,45,110,111,46,0,114,0,0,0,0,0,0,0,83,111,114,116,101,100,32,97,108,108,32,108,105,110,107,97,103,101,115,0,0,0,0,0,10,65,102,116,101,114,32,101,120,112,114,101,115,115,105,111,110,32,112,114,117,110,105,110,103,32,97,110,100,32,100,117,112,108,105,99,97,116,101,32,101,108,105,109,105,110,97,116,105,111,110,58,10,0,0,0,83,73,112,0,0,0,0,0,69,120,112,101,99,116,105,110,103,32,97,32,34,41,34,46,0,0,0,0,0,0,0,0,69,114,114,111,114,32,112,97,114,115,105,110,103,32,100,105,99,116,105,111,110,97,114,121,32,0,0,0,0,0,0,0,73,32,115,104,111,117,108,100,32,104,97,118,101,32,102,111,117,110,100,32,116,104,97,116,32,119,111,114,100,46,0,0,37,115,37,115,37,115,0,0,80,97,114,115,101,114,32,113,117,105,116,116,105,110,103,46,10,0,0,0,0,0,0,0,80,80,32,119,97,114,110,105,110,103,58,32,78,111,116,32,117,115,105,110,103,32,39,108,105,110,107,32,105,115,32,99,111,110,110,101,99,116,101,100,39,32,114,117,108,101,10,0,112,114,117,110,101,95,109,97,116,99,104,40,41,32,100,105,100,32,110,111,116,32,114,101,99,101,105,118,101,32,112,97,114,97,109,115,32,105,110,32,116,104,101,32,110,97,116,117,114,97,108,32,111,114,100,101,114,46,0,0,0,0,0,0,10,65,102,116,101,114,32,112,111,119,101,114,95,112,114,117,110,105,110,103,32,40,103,101,110,116,108,101,41,58,10,0,67,111,110,115,116,105,116,117,101,110,116,32,116,114,101,101,58,32,67,111,110,115,116,105,116,117,101,110,116,32,100,105,100,32,110,111,116,32,99,108,111,115,101,0,0,0,0,0,111,114,0,0,0,0,0,0,112,112,95,108,101,120,101,114,58,32,108,97,98,101,108,32,37,115,32,109,117,115,116,32,98,101,32,100,101,102,105,110,101,100,32,98,101,102,111,114,101,32,105,116,39,115,32,114,101,102,101,114,114,101,100,32,116,111,32,40,108,105,110,101,32,37,105,41,0,0,0,0,37,100,32,111,102,32,37,100,32,108,105,110,107,97,103,101,115,32,119,105,116,104,32,110,111,32,80,46,80,46,32,118,105,111,108,97,116,105,111,110,115,10,0,0,0,0,0,0,69,108,105,109,105,110,97,116,101,100,32,100,117,112,108,105,99,97,116,101,32,100,105,115,106,117,110,99,116,115,0,0,10,80,101,114,104,97,112,115,32,109,105,115,115,105,110,103,32,43,32,111,114,32,45,32,105,110,32,97,32,99,111,110,110,101,99,116,111,114,46,10,79,114,32,112,101,114,104,97,112,115,32,121,111,117,32,102,111,114,103,111,116,32,116,104,101,32,115,117,102,102,105,120,32,111,110,32,97,32,119,111,114,100,46,10,79,114,32,112,101,114,104,97,112,115,32,97,32,119,111,114,100,32,105,115,32,117,115,101,100,32,98,101,102,111,114,101,32,105,116,32,105,115,32,100,101,102,105,110,101,100,46,10,0,0,0,0,83,112,0,0,0,0,0,0,65,115,115,101,114,116,105,111,110,32,102,97,105,108,101,100,58,32,37,115,10,0,0,0,101,114,114,110,111,61,37,100,10,0,0,0,0,0,0,0,112,111,115,116,95,112,114,111,99,101,115,115,58,32,73,110,118,97,108,105,100,32,115,121,110,116,97,120,58,32,114,117,108,101,32,37,105,32,111,102,32,37,115,0,0,0,0,0,10,65,102,116,101,114,32,112,111,119,101,114,95,112,114,117,110,105,110,103,32,40,114,117,116,104,108,101,115,115,41,58,10,0,0,0,0,0,0,0,52,46,48,46,100,105,99,116,0,0,0,0,0,0,0,0,37,115,10,0,0,0,0,0])
, "i8", ALLOC_NONE, Runtime.GLOBAL_BASE)
var tempDoublePtr = Runtime.alignMemory(allocate(12, "i8", ALLOC_STATIC), 8);
assert(tempDoublePtr % 8 == 0);
function copyTempFloat(ptr) { // functions, because inlining this code increases code size too much
  HEAP8[tempDoublePtr] = HEAP8[ptr];
  HEAP8[tempDoublePtr+1] = HEAP8[ptr+1];
  HEAP8[tempDoublePtr+2] = HEAP8[ptr+2];
  HEAP8[tempDoublePtr+3] = HEAP8[ptr+3];
}
function copyTempDouble(ptr) {
  HEAP8[tempDoublePtr] = HEAP8[ptr];
  HEAP8[tempDoublePtr+1] = HEAP8[ptr+1];
  HEAP8[tempDoublePtr+2] = HEAP8[ptr+2];
  HEAP8[tempDoublePtr+3] = HEAP8[ptr+3];
  HEAP8[tempDoublePtr+4] = HEAP8[ptr+4];
  HEAP8[tempDoublePtr+5] = HEAP8[ptr+5];
  HEAP8[tempDoublePtr+6] = HEAP8[ptr+6];
  HEAP8[tempDoublePtr+7] = HEAP8[ptr+7];
}
  var ERRNO_CODES={EPERM:1,ENOENT:2,ESRCH:3,EINTR:4,EIO:5,ENXIO:6,E2BIG:7,ENOEXEC:8,EBADF:9,ECHILD:10,EAGAIN:11,EWOULDBLOCK:11,ENOMEM:12,EACCES:13,EFAULT:14,ENOTBLK:15,EBUSY:16,EEXIST:17,EXDEV:18,ENODEV:19,ENOTDIR:20,EISDIR:21,EINVAL:22,ENFILE:23,EMFILE:24,ENOTTY:25,ETXTBSY:26,EFBIG:27,ENOSPC:28,ESPIPE:29,EROFS:30,EMLINK:31,EPIPE:32,EDOM:33,ERANGE:34,ENOMSG:42,EIDRM:43,ECHRNG:44,EL2NSYNC:45,EL3HLT:46,EL3RST:47,ELNRNG:48,EUNATCH:49,ENOCSI:50,EL2HLT:51,EDEADLK:35,ENOLCK:37,EBADE:52,EBADR:53,EXFULL:54,ENOANO:55,EBADRQC:56,EBADSLT:57,EDEADLOCK:35,EBFONT:59,ENOSTR:60,ENODATA:61,ETIME:62,ENOSR:63,ENONET:64,ENOPKG:65,EREMOTE:66,ENOLINK:67,EADV:68,ESRMNT:69,ECOMM:70,EPROTO:71,EMULTIHOP:72,EDOTDOT:73,EBADMSG:74,ENOTUNIQ:76,EBADFD:77,EREMCHG:78,ELIBACC:79,ELIBBAD:80,ELIBSCN:81,ELIBMAX:82,ELIBEXEC:83,ENOSYS:38,ENOTEMPTY:39,ENAMETOOLONG:36,ELOOP:40,EOPNOTSUPP:95,EPFNOSUPPORT:96,ECONNRESET:104,ENOBUFS:105,EAFNOSUPPORT:97,EPROTOTYPE:91,ENOTSOCK:88,ENOPROTOOPT:92,ESHUTDOWN:108,ECONNREFUSED:111,EADDRINUSE:98,ECONNABORTED:103,ENETUNREACH:101,ENETDOWN:100,ETIMEDOUT:110,EHOSTDOWN:112,EHOSTUNREACH:113,EINPROGRESS:115,EALREADY:114,EDESTADDRREQ:89,EMSGSIZE:90,EPROTONOSUPPORT:93,ESOCKTNOSUPPORT:94,EADDRNOTAVAIL:99,ENETRESET:102,EISCONN:106,ENOTCONN:107,ETOOMANYREFS:109,EUSERS:87,EDQUOT:122,ESTALE:116,ENOTSUP:95,ENOMEDIUM:123,EILSEQ:84,EOVERFLOW:75,ECANCELED:125,ENOTRECOVERABLE:131,EOWNERDEAD:130,ESTRPIPE:86};
  var ERRNO_MESSAGES={0:"Success",1:"Not super-user",2:"No such file or directory",3:"No such process",4:"Interrupted system call",5:"I/O error",6:"No such device or address",7:"Arg list too long",8:"Exec format error",9:"Bad file number",10:"No children",11:"No more processes",12:"Not enough core",13:"Permission denied",14:"Bad address",15:"Block device required",16:"Mount device busy",17:"File exists",18:"Cross-device link",19:"No such device",20:"Not a directory",21:"Is a directory",22:"Invalid argument",23:"Too many open files in system",24:"Too many open files",25:"Not a typewriter",26:"Text file busy",27:"File too large",28:"No space left on device",29:"Illegal seek",30:"Read only file system",31:"Too many links",32:"Broken pipe",33:"Math arg out of domain of func",34:"Math result not representable",35:"File locking deadlock error",36:"File or path name too long",37:"No record locks available",38:"Function not implemented",39:"Directory not empty",40:"Too many symbolic links",42:"No message of desired type",43:"Identifier removed",44:"Channel number out of range",45:"Level 2 not synchronized",46:"Level 3 halted",47:"Level 3 reset",48:"Link number out of range",49:"Protocol driver not attached",50:"No CSI structure available",51:"Level 2 halted",52:"Invalid exchange",53:"Invalid request descriptor",54:"Exchange full",55:"No anode",56:"Invalid request code",57:"Invalid slot",59:"Bad font file fmt",60:"Device not a stream",61:"No data (for no delay io)",62:"Timer expired",63:"Out of streams resources",64:"Machine is not on the network",65:"Package not installed",66:"The object is remote",67:"The link has been severed",68:"Advertise error",69:"Srmount error",70:"Communication error on send",71:"Protocol error",72:"Multihop attempted",73:"Cross mount point (not really error)",74:"Trying to read unreadable message",75:"Value too large for defined data type",76:"Given log. name not unique",77:"f.d. invalid for this operation",78:"Remote address changed",79:"Can   access a needed shared lib",80:"Accessing a corrupted shared lib",81:".lib section in a.out corrupted",82:"Attempting to link in too many libs",83:"Attempting to exec a shared library",84:"Illegal byte sequence",86:"Streams pipe error",87:"Too many users",88:"Socket operation on non-socket",89:"Destination address required",90:"Message too long",91:"Protocol wrong type for socket",92:"Protocol not available",93:"Unknown protocol",94:"Socket type not supported",95:"Not supported",96:"Protocol family not supported",97:"Address family not supported by protocol family",98:"Address already in use",99:"Address not available",100:"Network interface is not configured",101:"Network is unreachable",102:"Connection reset by network",103:"Connection aborted",104:"Connection reset by peer",105:"No buffer space available",106:"Socket is already connected",107:"Socket is not connected",108:"Can't send after socket shutdown",109:"Too many references",110:"Connection timed out",111:"Connection refused",112:"Host is down",113:"Host is unreachable",114:"Socket already connected",115:"Connection already in progress",116:"Stale file handle",122:"Quota exceeded",123:"No medium (in tape drive)",125:"Operation canceled",130:"Previous owner died",131:"State not recoverable"};
  var ___errno_state=0;function ___setErrNo(value) {
      // For convenient setting and returning of errno.
      HEAP32[((___errno_state)>>2)]=value
      return value;
    }
  var PATH={splitPath:function (filename) {
        var splitPathRe = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
        return splitPathRe.exec(filename).slice(1);
      },normalizeArray:function (parts, allowAboveRoot) {
        // if the path tries to go above the root, `up` ends up > 0
        var up = 0;
        for (var i = parts.length - 1; i >= 0; i--) {
          var last = parts[i];
          if (last === '.') {
            parts.splice(i, 1);
          } else if (last === '..') {
            parts.splice(i, 1);
            up++;
          } else if (up) {
            parts.splice(i, 1);
            up--;
          }
        }
        // if the path is allowed to go above the root, restore leading ..s
        if (allowAboveRoot) {
          for (; up--; up) {
            parts.unshift('..');
          }
        }
        return parts;
      },normalize:function (path) {
        var isAbsolute = path.charAt(0) === '/',
            trailingSlash = path.substr(-1) === '/';
        // Normalize the path
        path = PATH.normalizeArray(path.split('/').filter(function(p) {
          return !!p;
        }), !isAbsolute).join('/');
        if (!path && !isAbsolute) {
          path = '.';
        }
        if (path && trailingSlash) {
          path += '/';
        }
        return (isAbsolute ? '/' : '') + path;
      },dirname:function (path) {
        var result = PATH.splitPath(path),
            root = result[0],
            dir = result[1];
        if (!root && !dir) {
          // No dirname whatsoever
          return '.';
        }
        if (dir) {
          // It has a dirname, strip trailing slash
          dir = dir.substr(0, dir.length - 1);
        }
        return root + dir;
      },basename:function (path) {
        // EMSCRIPTEN return '/'' for '/', not an empty string
        if (path === '/') return '/';
        var lastSlash = path.lastIndexOf('/');
        if (lastSlash === -1) return path;
        return path.substr(lastSlash+1);
      },extname:function (path) {
        return PATH.splitPath(path)[3];
      },join:function () {
        var paths = Array.prototype.slice.call(arguments, 0);
        return PATH.normalize(paths.join('/'));
      },join2:function (l, r) {
        return PATH.normalize(l + '/' + r);
      },resolve:function () {
        var resolvedPath = '',
          resolvedAbsolute = false;
        for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
          var path = (i >= 0) ? arguments[i] : FS.cwd();
          // Skip empty and invalid entries
          if (typeof path !== 'string') {
            throw new TypeError('Arguments to path.resolve must be strings');
          } else if (!path) {
            continue;
          }
          resolvedPath = path + '/' + resolvedPath;
          resolvedAbsolute = path.charAt(0) === '/';
        }
        // At this point the path should be resolved to a full absolute path, but
        // handle relative paths to be safe (might happen when process.cwd() fails)
        resolvedPath = PATH.normalizeArray(resolvedPath.split('/').filter(function(p) {
          return !!p;
        }), !resolvedAbsolute).join('/');
        return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
      },relative:function (from, to) {
        from = PATH.resolve(from).substr(1);
        to = PATH.resolve(to).substr(1);
        function trim(arr) {
          var start = 0;
          for (; start < arr.length; start++) {
            if (arr[start] !== '') break;
          }
          var end = arr.length - 1;
          for (; end >= 0; end--) {
            if (arr[end] !== '') break;
          }
          if (start > end) return [];
          return arr.slice(start, end - start + 1);
        }
        var fromParts = trim(from.split('/'));
        var toParts = trim(to.split('/'));
        var length = Math.min(fromParts.length, toParts.length);
        var samePartsLength = length;
        for (var i = 0; i < length; i++) {
          if (fromParts[i] !== toParts[i]) {
            samePartsLength = i;
            break;
          }
        }
        var outputParts = [];
        for (var i = samePartsLength; i < fromParts.length; i++) {
          outputParts.push('..');
        }
        outputParts = outputParts.concat(toParts.slice(samePartsLength));
        return outputParts.join('/');
      }};
  var TTY={ttys:[],init:function () {
        // https://github.com/kripken/emscripten/pull/1555
        // if (ENVIRONMENT_IS_NODE) {
        //   // currently, FS.init does not distinguish if process.stdin is a file or TTY
        //   // device, it always assumes it's a TTY device. because of this, we're forcing
        //   // process.stdin to UTF8 encoding to at least make stdin reading compatible
        //   // with text files until FS.init can be refactored.
        //   process['stdin']['setEncoding']('utf8');
        // }
      },shutdown:function () {
        // https://github.com/kripken/emscripten/pull/1555
        // if (ENVIRONMENT_IS_NODE) {
        //   // inolen: any idea as to why node -e 'process.stdin.read()' wouldn't exit immediately (with process.stdin being a tty)?
        //   // isaacs: because now it's reading from the stream, you've expressed interest in it, so that read() kicks off a _read() which creates a ReadReq operation
        //   // inolen: I thought read() in that case was a synchronous operation that just grabbed some amount of buffered data if it exists?
        //   // isaacs: it is. but it also triggers a _read() call, which calls readStart() on the handle
        //   // isaacs: do process.stdin.pause() and i'd think it'd probably close the pending call
        //   process['stdin']['pause']();
        // }
      },register:function (dev, ops) {
        TTY.ttys[dev] = { input: [], output: [], ops: ops };
        FS.registerDevice(dev, TTY.stream_ops);
      },stream_ops:{open:function (stream) {
          var tty = TTY.ttys[stream.node.rdev];
          if (!tty) {
            throw new FS.ErrnoError(ERRNO_CODES.ENODEV);
          }
          stream.tty = tty;
          stream.seekable = false;
        },close:function (stream) {
          // flush any pending line data
          if (stream.tty.output.length) {
            stream.tty.ops.put_char(stream.tty, 10);
          }
        },read:function (stream, buffer, offset, length, pos /* ignored */) {
          if (!stream.tty || !stream.tty.ops.get_char) {
            throw new FS.ErrnoError(ERRNO_CODES.ENXIO);
          }
          var bytesRead = 0;
          for (var i = 0; i < length; i++) {
            var result;
            try {
              result = stream.tty.ops.get_char(stream.tty);
            } catch (e) {
              throw new FS.ErrnoError(ERRNO_CODES.EIO);
            }
            if (result === undefined && bytesRead === 0) {
              throw new FS.ErrnoError(ERRNO_CODES.EAGAIN);
            }
            if (result === null || result === undefined) break;
            bytesRead++;
            buffer[offset+i] = result;
          }
          if (bytesRead) {
            stream.node.timestamp = Date.now();
          }
          return bytesRead;
        },write:function (stream, buffer, offset, length, pos) {
          if (!stream.tty || !stream.tty.ops.put_char) {
            throw new FS.ErrnoError(ERRNO_CODES.ENXIO);
          }
          for (var i = 0; i < length; i++) {
            try {
              stream.tty.ops.put_char(stream.tty, buffer[offset+i]);
            } catch (e) {
              throw new FS.ErrnoError(ERRNO_CODES.EIO);
            }
          }
          if (length) {
            stream.node.timestamp = Date.now();
          }
          return i;
        }},default_tty_ops:{get_char:function (tty) {
          if (!tty.input.length) {
            var result = null;
            if (ENVIRONMENT_IS_NODE) {
              result = process['stdin']['read']();
              if (!result) {
                if (process['stdin']['_readableState'] && process['stdin']['_readableState']['ended']) {
                  return null;  // EOF
                }
                return undefined;  // no data available
              }
            } else if (typeof window != 'undefined' &&
              typeof window.prompt == 'function') {
              // Browser.
              result = window.prompt('Input: ');  // returns null on cancel
              if (result !== null) {
                result += '\n';
              }
            } else if (typeof readline == 'function') {
              // Command line.
              result = readline();
              if (result !== null) {
                result += '\n';
              }
            }
            if (!result) {
              return null;
            }
            tty.input = intArrayFromString(result, true);
          }
          return tty.input.shift();
        },put_char:function (tty, val) {
          if (val === null || val === 10) {
            Module['print'](tty.output.join(''));
            tty.output = [];
          } else {
            tty.output.push(TTY.utf8.processCChar(val));
          }
        }},default_tty1_ops:{put_char:function (tty, val) {
          if (val === null || val === 10) {
            Module['printErr'](tty.output.join(''));
            tty.output = [];
          } else {
            tty.output.push(TTY.utf8.processCChar(val));
          }
        }}};
  var MEMFS={ops_table:null,CONTENT_OWNING:1,CONTENT_FLEXIBLE:2,CONTENT_FIXED:3,mount:function (mount) {
        return MEMFS.createNode(null, '/', 16384 | 0777, 0);
      },createNode:function (parent, name, mode, dev) {
        if (FS.isBlkdev(mode) || FS.isFIFO(mode)) {
          // no supported
          throw new FS.ErrnoError(ERRNO_CODES.EPERM);
        }
        if (!MEMFS.ops_table) {
          MEMFS.ops_table = {
            dir: {
              node: {
                getattr: MEMFS.node_ops.getattr,
                setattr: MEMFS.node_ops.setattr,
                lookup: MEMFS.node_ops.lookup,
                mknod: MEMFS.node_ops.mknod,
                mknod: MEMFS.node_ops.mknod,
                rename: MEMFS.node_ops.rename,
                unlink: MEMFS.node_ops.unlink,
                rmdir: MEMFS.node_ops.rmdir,
                readdir: MEMFS.node_ops.readdir,
                symlink: MEMFS.node_ops.symlink
              },
              stream: {
                llseek: MEMFS.stream_ops.llseek
              }
            },
            file: {
              node: {
                getattr: MEMFS.node_ops.getattr,
                setattr: MEMFS.node_ops.setattr
              },
              stream: {
                llseek: MEMFS.stream_ops.llseek,
                read: MEMFS.stream_ops.read,
                write: MEMFS.stream_ops.write,
                allocate: MEMFS.stream_ops.allocate,
                mmap: MEMFS.stream_ops.mmap
              }
            },
            link: {
              node: {
                getattr: MEMFS.node_ops.getattr,
                setattr: MEMFS.node_ops.setattr,
                readlink: MEMFS.node_ops.readlink
              },
              stream: {}
            },
            chrdev: {
              node: {
                getattr: MEMFS.node_ops.getattr,
                setattr: MEMFS.node_ops.setattr
              },
              stream: FS.chrdev_stream_ops
            },
          };
        }
        var node = FS.createNode(parent, name, mode, dev);
        if (FS.isDir(node.mode)) {
          node.node_ops = MEMFS.ops_table.dir.node;
          node.stream_ops = MEMFS.ops_table.dir.stream;
          node.contents = {};
        } else if (FS.isFile(node.mode)) {
          node.node_ops = MEMFS.ops_table.file.node;
          node.stream_ops = MEMFS.ops_table.file.stream;
          node.contents = [];
          node.contentMode = MEMFS.CONTENT_FLEXIBLE;
        } else if (FS.isLink(node.mode)) {
          node.node_ops = MEMFS.ops_table.link.node;
          node.stream_ops = MEMFS.ops_table.link.stream;
        } else if (FS.isChrdev(node.mode)) {
          node.node_ops = MEMFS.ops_table.chrdev.node;
          node.stream_ops = MEMFS.ops_table.chrdev.stream;
        }
        node.timestamp = Date.now();
        // add the new node to the parent
        if (parent) {
          parent.contents[name] = node;
        }
        return node;
      },ensureFlexible:function (node) {
        if (node.contentMode !== MEMFS.CONTENT_FLEXIBLE) {
          var contents = node.contents;
          node.contents = Array.prototype.slice.call(contents);
          node.contentMode = MEMFS.CONTENT_FLEXIBLE;
        }
      },node_ops:{getattr:function (node) {
          var attr = {};
          // device numbers reuse inode numbers.
          attr.dev = FS.isChrdev(node.mode) ? node.id : 1;
          attr.ino = node.id;
          attr.mode = node.mode;
          attr.nlink = 1;
          attr.uid = 0;
          attr.gid = 0;
          attr.rdev = node.rdev;
          if (FS.isDir(node.mode)) {
            attr.size = 4096;
          } else if (FS.isFile(node.mode)) {
            attr.size = node.contents.length;
          } else if (FS.isLink(node.mode)) {
            attr.size = node.link.length;
          } else {
            attr.size = 0;
          }
          attr.atime = new Date(node.timestamp);
          attr.mtime = new Date(node.timestamp);
          attr.ctime = new Date(node.timestamp);
          // NOTE: In our implementation, st_blocks = Math.ceil(st_size/st_blksize),
          //       but this is not required by the standard.
          attr.blksize = 4096;
          attr.blocks = Math.ceil(attr.size / attr.blksize);
          return attr;
        },setattr:function (node, attr) {
          if (attr.mode !== undefined) {
            node.mode = attr.mode;
          }
          if (attr.timestamp !== undefined) {
            node.timestamp = attr.timestamp;
          }
          if (attr.size !== undefined) {
            MEMFS.ensureFlexible(node);
            var contents = node.contents;
            if (attr.size < contents.length) contents.length = attr.size;
            else while (attr.size > contents.length) contents.push(0);
          }
        },lookup:function (parent, name) {
          throw FS.genericErrors[ERRNO_CODES.ENOENT];
        },mknod:function (parent, name, mode, dev) {
          return MEMFS.createNode(parent, name, mode, dev);
        },rename:function (old_node, new_dir, new_name) {
          // if we're overwriting a directory at new_name, make sure it's empty.
          if (FS.isDir(old_node.mode)) {
            var new_node;
            try {
              new_node = FS.lookupNode(new_dir, new_name);
            } catch (e) {
            }
            if (new_node) {
              for (var i in new_node.contents) {
                throw new FS.ErrnoError(ERRNO_CODES.ENOTEMPTY);
              }
            }
          }
          // do the internal rewiring
          delete old_node.parent.contents[old_node.name];
          old_node.name = new_name;
          new_dir.contents[new_name] = old_node;
          old_node.parent = new_dir;
        },unlink:function (parent, name) {
          delete parent.contents[name];
        },rmdir:function (parent, name) {
          var node = FS.lookupNode(parent, name);
          for (var i in node.contents) {
            throw new FS.ErrnoError(ERRNO_CODES.ENOTEMPTY);
          }
          delete parent.contents[name];
        },readdir:function (node) {
          var entries = ['.', '..']
          for (var key in node.contents) {
            if (!node.contents.hasOwnProperty(key)) {
              continue;
            }
            entries.push(key);
          }
          return entries;
        },symlink:function (parent, newname, oldpath) {
          var node = MEMFS.createNode(parent, newname, 0777 | 40960, 0);
          node.link = oldpath;
          return node;
        },readlink:function (node) {
          if (!FS.isLink(node.mode)) {
            throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
          }
          return node.link;
        }},stream_ops:{read:function (stream, buffer, offset, length, position) {
          var contents = stream.node.contents;
          if (position >= contents.length)
            return 0;
          var size = Math.min(contents.length - position, length);
          assert(size >= 0);
          if (size > 8 && contents.subarray) { // non-trivial, and typed array
            buffer.set(contents.subarray(position, position + size), offset);
          } else
          {
            for (var i = 0; i < size; i++) {
              buffer[offset + i] = contents[position + i];
            }
          }
          return size;
        },write:function (stream, buffer, offset, length, position, canOwn) {
          var node = stream.node;
          node.timestamp = Date.now();
          var contents = node.contents;
          if (length && contents.length === 0 && position === 0 && buffer.subarray) {
            // just replace it with the new data
            if (canOwn && offset === 0) {
              node.contents = buffer; // this could be a subarray of Emscripten HEAP, or allocated from some other source.
              node.contentMode = (buffer.buffer === HEAP8.buffer) ? MEMFS.CONTENT_OWNING : MEMFS.CONTENT_FIXED;
            } else {
              node.contents = new Uint8Array(buffer.subarray(offset, offset+length));
              node.contentMode = MEMFS.CONTENT_FIXED;
            }
            return length;
          }
          MEMFS.ensureFlexible(node);
          var contents = node.contents;
          while (contents.length < position) contents.push(0);
          for (var i = 0; i < length; i++) {
            contents[position + i] = buffer[offset + i];
          }
          return length;
        },llseek:function (stream, offset, whence) {
          var position = offset;
          if (whence === 1) {  // SEEK_CUR.
            position += stream.position;
          } else if (whence === 2) {  // SEEK_END.
            if (FS.isFile(stream.node.mode)) {
              position += stream.node.contents.length;
            }
          }
          if (position < 0) {
            throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
          }
          stream.ungotten = [];
          stream.position = position;
          return position;
        },allocate:function (stream, offset, length) {
          MEMFS.ensureFlexible(stream.node);
          var contents = stream.node.contents;
          var limit = offset + length;
          while (limit > contents.length) contents.push(0);
        },mmap:function (stream, buffer, offset, length, position, prot, flags) {
          if (!FS.isFile(stream.node.mode)) {
            throw new FS.ErrnoError(ERRNO_CODES.ENODEV);
          }
          var ptr;
          var allocated;
          var contents = stream.node.contents;
          // Only make a new copy when MAP_PRIVATE is specified.
          if ( !(flags & 2) &&
                (contents.buffer === buffer || contents.buffer === buffer.buffer) ) {
            // We can't emulate MAP_SHARED when the file is not backed by the buffer
            // we're mapping to (e.g. the HEAP buffer).
            allocated = false;
            ptr = contents.byteOffset;
          } else {
            // Try to avoid unnecessary slices.
            if (position > 0 || position + length < contents.length) {
              if (contents.subarray) {
                contents = contents.subarray(position, position + length);
              } else {
                contents = Array.prototype.slice.call(contents, position, position + length);
              }
            }
            allocated = true;
            ptr = _malloc(length);
            if (!ptr) {
              throw new FS.ErrnoError(ERRNO_CODES.ENOMEM);
            }
            buffer.set(contents, ptr);
          }
          return { ptr: ptr, allocated: allocated };
        }}};
  var IDBFS={dbs:{},indexedDB:function () {
        return window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
      },DB_VERSION:20,DB_STORE_NAME:"FILE_DATA",mount:function (mount) {
        return MEMFS.mount.apply(null, arguments);
      },syncfs:function (mount, populate, callback) {
        IDBFS.getLocalSet(mount, function(err, local) {
          if (err) return callback(err);
          IDBFS.getRemoteSet(mount, function(err, remote) {
            if (err) return callback(err);
            var src = populate ? remote : local;
            var dst = populate ? local : remote;
            IDBFS.reconcile(src, dst, callback);
          });
        });
      },reconcile:function (src, dst, callback) {
        var total = 0;
        var create = {};
        for (var key in src.files) {
          if (!src.files.hasOwnProperty(key)) continue;
          var e = src.files[key];
          var e2 = dst.files[key];
          if (!e2 || e.timestamp > e2.timestamp) {
            create[key] = e;
            total++;
          }
        }
        var remove = {};
        for (var key in dst.files) {
          if (!dst.files.hasOwnProperty(key)) continue;
          var e = dst.files[key];
          var e2 = src.files[key];
          if (!e2) {
            remove[key] = e;
            total++;
          }
        }
        if (!total) {
          // early out
          return callback(null);
        }
        var completed = 0;
        function done(err) {
          if (err) return callback(err);
          if (++completed >= total) {
            return callback(null);
          }
        };
        // create a single transaction to handle and IDB reads / writes we'll need to do
        var db = src.type === 'remote' ? src.db : dst.db;
        var transaction = db.transaction([IDBFS.DB_STORE_NAME], 'readwrite');
        transaction.onerror = function transaction_onerror() { callback(this.error); };
        var store = transaction.objectStore(IDBFS.DB_STORE_NAME);
        for (var path in create) {
          if (!create.hasOwnProperty(path)) continue;
          var entry = create[path];
          if (dst.type === 'local') {
            // save file to local
            try {
              if (FS.isDir(entry.mode)) {
                FS.mkdir(path, entry.mode);
              } else if (FS.isFile(entry.mode)) {
                var stream = FS.open(path, 'w+', 0666);
                FS.write(stream, entry.contents, 0, entry.contents.length, 0, true /* canOwn */);
                FS.close(stream);
              }
              done(null);
            } catch (e) {
              return done(e);
            }
          } else {
            // save file to IDB
            var req = store.put(entry, path);
            req.onsuccess = function req_onsuccess() { done(null); };
            req.onerror = function req_onerror() { done(this.error); };
          }
        }
        for (var path in remove) {
          if (!remove.hasOwnProperty(path)) continue;
          var entry = remove[path];
          if (dst.type === 'local') {
            // delete file from local
            try {
              if (FS.isDir(entry.mode)) {
                // TODO recursive delete?
                FS.rmdir(path);
              } else if (FS.isFile(entry.mode)) {
                FS.unlink(path);
              }
              done(null);
            } catch (e) {
              return done(e);
            }
          } else {
            // delete file from IDB
            var req = store.delete(path);
            req.onsuccess = function req_onsuccess() { done(null); };
            req.onerror = function req_onerror() { done(this.error); };
          }
        }
      },getLocalSet:function (mount, callback) {
        var files = {};
        function isRealDir(p) {
          return p !== '.' && p !== '..';
        };
        function toAbsolute(root) {
          return function(p) {
            return PATH.join2(root, p);
          }
        };
        var check = FS.readdir(mount.mountpoint)
          .filter(isRealDir)
          .map(toAbsolute(mount.mountpoint));
        while (check.length) {
          var path = check.pop();
          var stat, node;
          try {
            var lookup = FS.lookupPath(path);
            node = lookup.node;
            stat = FS.stat(path);
          } catch (e) {
            return callback(e);
          }
          if (FS.isDir(stat.mode)) {
            check.push.apply(check, FS.readdir(path)
              .filter(isRealDir)
              .map(toAbsolute(path)));
            files[path] = { mode: stat.mode, timestamp: stat.mtime };
          } else if (FS.isFile(stat.mode)) {
            files[path] = { contents: node.contents, mode: stat.mode, timestamp: stat.mtime };
          } else {
            return callback(new Error('node type not supported'));
          }
        }
        return callback(null, { type: 'local', files: files });
      },getDB:function (name, callback) {
        // look it up in the cache
        var db = IDBFS.dbs[name];
        if (db) {
          return callback(null, db);
        }
        var req;
        try {
          req = IDBFS.indexedDB().open(name, IDBFS.DB_VERSION);
        } catch (e) {
          return onerror(e);
        }
        req.onupgradeneeded = function req_onupgradeneeded() {
          db = req.result;
          db.createObjectStore(IDBFS.DB_STORE_NAME);
        };
        req.onsuccess = function req_onsuccess() {
          db = req.result;
          // add to the cache
          IDBFS.dbs[name] = db;
          callback(null, db);
        };
        req.onerror = function req_onerror() {
          callback(this.error);
        };
      },getRemoteSet:function (mount, callback) {
        var files = {};
        IDBFS.getDB(mount.mountpoint, function(err, db) {
          if (err) return callback(err);
          var transaction = db.transaction([IDBFS.DB_STORE_NAME], 'readonly');
          transaction.onerror = function transaction_onerror() { callback(this.error); };
          var store = transaction.objectStore(IDBFS.DB_STORE_NAME);
          store.openCursor().onsuccess = function store_openCursor_onsuccess(event) {
            var cursor = event.target.result;
            if (!cursor) {
              return callback(null, { type: 'remote', db: db, files: files });
            }
            files[cursor.key] = cursor.value;
            cursor.continue();
          };
        });
      }};
  var NODEFS={isWindows:false,staticInit:function () {
        NODEFS.isWindows = !!process.platform.match(/^win/);
      },mount:function (mount) {
        assert(ENVIRONMENT_IS_NODE);
        return NODEFS.createNode(null, '/', NODEFS.getMode(mount.opts.root), 0);
      },createNode:function (parent, name, mode, dev) {
        if (!FS.isDir(mode) && !FS.isFile(mode) && !FS.isLink(mode)) {
          throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
        }
        var node = FS.createNode(parent, name, mode);
        node.node_ops = NODEFS.node_ops;
        node.stream_ops = NODEFS.stream_ops;
        return node;
      },getMode:function (path) {
        var stat;
        try {
          stat = fs.lstatSync(path);
          if (NODEFS.isWindows) {
            // On Windows, directories return permission bits 'rw-rw-rw-', even though they have 'rwxrwxrwx', so 
            // propagate write bits to execute bits.
            stat.mode = stat.mode | ((stat.mode & 146) >> 1);
          }
        } catch (e) {
          if (!e.code) throw e;
          throw new FS.ErrnoError(ERRNO_CODES[e.code]);
        }
        return stat.mode;
      },realPath:function (node) {
        var parts = [];
        while (node.parent !== node) {
          parts.push(node.name);
          node = node.parent;
        }
        parts.push(node.mount.opts.root);
        parts.reverse();
        return PATH.join.apply(null, parts);
      },flagsToPermissionStringMap:{0:"r",1:"r+",2:"r+",64:"r",65:"r+",66:"r+",129:"rx+",193:"rx+",514:"w+",577:"w",578:"w+",705:"wx",706:"wx+",1024:"a",1025:"a",1026:"a+",1089:"a",1090:"a+",1153:"ax",1154:"ax+",1217:"ax",1218:"ax+",4096:"rs",4098:"rs+"},flagsToPermissionString:function (flags) {
        if (flags in NODEFS.flagsToPermissionStringMap) {
          return NODEFS.flagsToPermissionStringMap[flags];
        } else {
          return flags;
        }
      },node_ops:{getattr:function (node) {
          var path = NODEFS.realPath(node);
          var stat;
          try {
            stat = fs.lstatSync(path);
          } catch (e) {
            if (!e.code) throw e;
            throw new FS.ErrnoError(ERRNO_CODES[e.code]);
          }
          // node.js v0.10.20 doesn't report blksize and blocks on Windows. Fake them with default blksize of 4096.
          // See http://support.microsoft.com/kb/140365
          if (NODEFS.isWindows && !stat.blksize) {
            stat.blksize = 4096;
          }
          if (NODEFS.isWindows && !stat.blocks) {
            stat.blocks = (stat.size+stat.blksize-1)/stat.blksize|0;
          }
          return {
            dev: stat.dev,
            ino: stat.ino,
            mode: stat.mode,
            nlink: stat.nlink,
            uid: stat.uid,
            gid: stat.gid,
            rdev: stat.rdev,
            size: stat.size,
            atime: stat.atime,
            mtime: stat.mtime,
            ctime: stat.ctime,
            blksize: stat.blksize,
            blocks: stat.blocks
          };
        },setattr:function (node, attr) {
          var path = NODEFS.realPath(node);
          try {
            if (attr.mode !== undefined) {
              fs.chmodSync(path, attr.mode);
              // update the common node structure mode as well
              node.mode = attr.mode;
            }
            if (attr.timestamp !== undefined) {
              var date = new Date(attr.timestamp);
              fs.utimesSync(path, date, date);
            }
            if (attr.size !== undefined) {
              fs.truncateSync(path, attr.size);
            }
          } catch (e) {
            if (!e.code) throw e;
            throw new FS.ErrnoError(ERRNO_CODES[e.code]);
          }
        },lookup:function (parent, name) {
          var path = PATH.join2(NODEFS.realPath(parent), name);
          var mode = NODEFS.getMode(path);
          return NODEFS.createNode(parent, name, mode);
        },mknod:function (parent, name, mode, dev) {
          var node = NODEFS.createNode(parent, name, mode, dev);
          // create the backing node for this in the fs root as well
          var path = NODEFS.realPath(node);
          try {
            if (FS.isDir(node.mode)) {
              fs.mkdirSync(path, node.mode);
            } else {
              fs.writeFileSync(path, '', { mode: node.mode });
            }
          } catch (e) {
            if (!e.code) throw e;
            throw new FS.ErrnoError(ERRNO_CODES[e.code]);
          }
          return node;
        },rename:function (oldNode, newDir, newName) {
          var oldPath = NODEFS.realPath(oldNode);
          var newPath = PATH.join2(NODEFS.realPath(newDir), newName);
          try {
            fs.renameSync(oldPath, newPath);
          } catch (e) {
            if (!e.code) throw e;
            throw new FS.ErrnoError(ERRNO_CODES[e.code]);
          }
        },unlink:function (parent, name) {
          var path = PATH.join2(NODEFS.realPath(parent), name);
          try {
            fs.unlinkSync(path);
          } catch (e) {
            if (!e.code) throw e;
            throw new FS.ErrnoError(ERRNO_CODES[e.code]);
          }
        },rmdir:function (parent, name) {
          var path = PATH.join2(NODEFS.realPath(parent), name);
          try {
            fs.rmdirSync(path);
          } catch (e) {
            if (!e.code) throw e;
            throw new FS.ErrnoError(ERRNO_CODES[e.code]);
          }
        },readdir:function (node) {
          var path = NODEFS.realPath(node);
          try {
            return fs.readdirSync(path);
          } catch (e) {
            if (!e.code) throw e;
            throw new FS.ErrnoError(ERRNO_CODES[e.code]);
          }
        },symlink:function (parent, newName, oldPath) {
          var newPath = PATH.join2(NODEFS.realPath(parent), newName);
          try {
            fs.symlinkSync(oldPath, newPath);
          } catch (e) {
            if (!e.code) throw e;
            throw new FS.ErrnoError(ERRNO_CODES[e.code]);
          }
        },readlink:function (node) {
          var path = NODEFS.realPath(node);
          try {
            return fs.readlinkSync(path);
          } catch (e) {
            if (!e.code) throw e;
            throw new FS.ErrnoError(ERRNO_CODES[e.code]);
          }
        }},stream_ops:{open:function (stream) {
          var path = NODEFS.realPath(stream.node);
          try {
            if (FS.isFile(stream.node.mode)) {
              stream.nfd = fs.openSync(path, NODEFS.flagsToPermissionString(stream.flags));
            }
          } catch (e) {
            if (!e.code) throw e;
            throw new FS.ErrnoError(ERRNO_CODES[e.code]);
          }
        },close:function (stream) {
          try {
            if (FS.isFile(stream.node.mode) && stream.nfd) {
              fs.closeSync(stream.nfd);
            }
          } catch (e) {
            if (!e.code) throw e;
            throw new FS.ErrnoError(ERRNO_CODES[e.code]);
          }
        },read:function (stream, buffer, offset, length, position) {
          // FIXME this is terrible.
          var nbuffer = new Buffer(length);
          var res;
          try {
            res = fs.readSync(stream.nfd, nbuffer, 0, length, position);
          } catch (e) {
            throw new FS.ErrnoError(ERRNO_CODES[e.code]);
          }
          if (res > 0) {
            for (var i = 0; i < res; i++) {
              buffer[offset + i] = nbuffer[i];
            }
          }
          return res;
        },write:function (stream, buffer, offset, length, position) {
          // FIXME this is terrible.
          var nbuffer = new Buffer(buffer.subarray(offset, offset + length));
          var res;
          try {
            res = fs.writeSync(stream.nfd, nbuffer, 0, length, position);
          } catch (e) {
            throw new FS.ErrnoError(ERRNO_CODES[e.code]);
          }
          return res;
        },llseek:function (stream, offset, whence) {
          var position = offset;
          if (whence === 1) {  // SEEK_CUR.
            position += stream.position;
          } else if (whence === 2) {  // SEEK_END.
            if (FS.isFile(stream.node.mode)) {
              try {
                var stat = fs.fstatSync(stream.nfd);
                position += stat.size;
              } catch (e) {
                throw new FS.ErrnoError(ERRNO_CODES[e.code]);
              }
            }
          }
          if (position < 0) {
            throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
          }
          stream.position = position;
          return position;
        }}};
  var _stdin=allocate(1, "i32*", ALLOC_STATIC);
  var _stdout=allocate(1, "i32*", ALLOC_STATIC);
  var _stderr=allocate(1, "i32*", ALLOC_STATIC);
  function _fflush(stream) {
      // int fflush(FILE *stream);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/fflush.html
      // we don't currently perform any user-space buffering of data
    }var FS={root:null,mounts:[],devices:[null],streams:[null],nextInode:1,nameTable:null,currentPath:"/",initialized:false,ignorePermissions:true,ErrnoError:null,genericErrors:{},handleFSError:function (e) {
        if (!(e instanceof FS.ErrnoError)) throw e + ' : ' + stackTrace();
        return ___setErrNo(e.errno);
      },lookupPath:function (path, opts) {
        path = PATH.resolve(FS.cwd(), path);
        opts = opts || { recurse_count: 0 };
        if (opts.recurse_count > 8) {  // max recursive lookup of 8
          throw new FS.ErrnoError(ERRNO_CODES.ELOOP);
        }
        // split the path
        var parts = PATH.normalizeArray(path.split('/').filter(function(p) {
          return !!p;
        }), false);
        // start at the root
        var current = FS.root;
        var current_path = '/';
        for (var i = 0; i < parts.length; i++) {
          var islast = (i === parts.length-1);
          if (islast && opts.parent) {
            // stop resolving
            break;
          }
          current = FS.lookupNode(current, parts[i]);
          current_path = PATH.join2(current_path, parts[i]);
          // jump to the mount's root node if this is a mountpoint
          if (FS.isMountpoint(current)) {
            current = current.mount.root;
          }
          // follow symlinks
          // by default, lookupPath will not follow a symlink if it is the final path component.
          // setting opts.follow = true will override this behavior.
          if (!islast || opts.follow) {
            var count = 0;
            while (FS.isLink(current.mode)) {
              var link = FS.readlink(current_path);
              current_path = PATH.resolve(PATH.dirname(current_path), link);
              var lookup = FS.lookupPath(current_path, { recurse_count: opts.recurse_count });
              current = lookup.node;
              if (count++ > 40) {  // limit max consecutive symlinks to 40 (SYMLOOP_MAX).
                throw new FS.ErrnoError(ERRNO_CODES.ELOOP);
              }
            }
          }
        }
        return { path: current_path, node: current };
      },getPath:function (node) {
        var path;
        while (true) {
          if (FS.isRoot(node)) {
            var mount = node.mount.mountpoint;
            if (!path) return mount;
            return mount[mount.length-1] !== '/' ? mount + '/' + path : mount + path;
          }
          path = path ? node.name + '/' + path : node.name;
          node = node.parent;
        }
      },hashName:function (parentid, name) {
        var hash = 0;
        for (var i = 0; i < name.length; i++) {
          hash = ((hash << 5) - hash + name.charCodeAt(i)) | 0;
        }
        return ((parentid + hash) >>> 0) % FS.nameTable.length;
      },hashAddNode:function (node) {
        var hash = FS.hashName(node.parent.id, node.name);
        node.name_next = FS.nameTable[hash];
        FS.nameTable[hash] = node;
      },hashRemoveNode:function (node) {
        var hash = FS.hashName(node.parent.id, node.name);
        if (FS.nameTable[hash] === node) {
          FS.nameTable[hash] = node.name_next;
        } else {
          var current = FS.nameTable[hash];
          while (current) {
            if (current.name_next === node) {
              current.name_next = node.name_next;
              break;
            }
            current = current.name_next;
          }
        }
      },lookupNode:function (parent, name) {
        var err = FS.mayLookup(parent);
        if (err) {
          throw new FS.ErrnoError(err);
        }
        var hash = FS.hashName(parent.id, name);
        for (var node = FS.nameTable[hash]; node; node = node.name_next) {
          var nodeName = node.name;
          if (node.parent.id === parent.id && nodeName === name) {
            return node;
          }
        }
        // if we failed to find it in the cache, call into the VFS
        return FS.lookup(parent, name);
      },createNode:function (parent, name, mode, rdev) {
        if (!FS.FSNode) {
          FS.FSNode = function(parent, name, mode, rdev) {
            this.id = FS.nextInode++;
            this.name = name;
            this.mode = mode;
            this.node_ops = {};
            this.stream_ops = {};
            this.rdev = rdev;
            this.parent = null;
            this.mount = null;
            if (!parent) {
              parent = this;  // root node sets parent to itself
            }
            this.parent = parent;
            this.mount = parent.mount;
            FS.hashAddNode(this);
          };
          // compatibility
          var readMode = 292 | 73;
          var writeMode = 146;
          FS.FSNode.prototype = {};
          // NOTE we must use Object.defineProperties instead of individual calls to
          // Object.defineProperty in order to make closure compiler happy
          Object.defineProperties(FS.FSNode.prototype, {
            read: {
              get: function() { return (this.mode & readMode) === readMode; },
              set: function(val) { val ? this.mode |= readMode : this.mode &= ~readMode; }
            },
            write: {
              get: function() { return (this.mode & writeMode) === writeMode; },
              set: function(val) { val ? this.mode |= writeMode : this.mode &= ~writeMode; }
            },
            isFolder: {
              get: function() { return FS.isDir(this.mode); },
            },
            isDevice: {
              get: function() { return FS.isChrdev(this.mode); },
            },
          });
        }
        return new FS.FSNode(parent, name, mode, rdev);
      },destroyNode:function (node) {
        FS.hashRemoveNode(node);
      },isRoot:function (node) {
        return node === node.parent;
      },isMountpoint:function (node) {
        return node.mounted;
      },isFile:function (mode) {
        return (mode & 61440) === 32768;
      },isDir:function (mode) {
        return (mode & 61440) === 16384;
      },isLink:function (mode) {
        return (mode & 61440) === 40960;
      },isChrdev:function (mode) {
        return (mode & 61440) === 8192;
      },isBlkdev:function (mode) {
        return (mode & 61440) === 24576;
      },isFIFO:function (mode) {
        return (mode & 61440) === 4096;
      },isSocket:function (mode) {
        return (mode & 49152) === 49152;
      },flagModes:{"r":0,"rs":1052672,"r+":2,"w":577,"wx":705,"xw":705,"w+":578,"wx+":706,"xw+":706,"a":1089,"ax":1217,"xa":1217,"a+":1090,"ax+":1218,"xa+":1218},modeStringToFlags:function (str) {
        var flags = FS.flagModes[str];
        if (typeof flags === 'undefined') {
          throw new Error('Unknown file open mode: ' + str);
        }
        return flags;
      },flagsToPermissionString:function (flag) {
        var accmode = flag & 2097155;
        var perms = ['r', 'w', 'rw'][accmode];
        if ((flag & 512)) {
          perms += 'w';
        }
        return perms;
      },nodePermissions:function (node, perms) {
        if (FS.ignorePermissions) {
          return 0;
        }
        // return 0 if any user, group or owner bits are set.
        if (perms.indexOf('r') !== -1 && !(node.mode & 292)) {
          return ERRNO_CODES.EACCES;
        } else if (perms.indexOf('w') !== -1 && !(node.mode & 146)) {
          return ERRNO_CODES.EACCES;
        } else if (perms.indexOf('x') !== -1 && !(node.mode & 73)) {
          return ERRNO_CODES.EACCES;
        }
        return 0;
      },mayLookup:function (dir) {
        return FS.nodePermissions(dir, 'x');
      },mayCreate:function (dir, name) {
        try {
          var node = FS.lookupNode(dir, name);
          return ERRNO_CODES.EEXIST;
        } catch (e) {
        }
        return FS.nodePermissions(dir, 'wx');
      },mayDelete:function (dir, name, isdir) {
        var node;
        try {
          node = FS.lookupNode(dir, name);
        } catch (e) {
          return e.errno;
        }
        var err = FS.nodePermissions(dir, 'wx');
        if (err) {
          return err;
        }
        if (isdir) {
          if (!FS.isDir(node.mode)) {
            return ERRNO_CODES.ENOTDIR;
          }
          if (FS.isRoot(node) || FS.getPath(node) === FS.cwd()) {
            return ERRNO_CODES.EBUSY;
          }
        } else {
          if (FS.isDir(node.mode)) {
            return ERRNO_CODES.EISDIR;
          }
        }
        return 0;
      },mayOpen:function (node, flags) {
        if (!node) {
          return ERRNO_CODES.ENOENT;
        }
        if (FS.isLink(node.mode)) {
          return ERRNO_CODES.ELOOP;
        } else if (FS.isDir(node.mode)) {
          if ((flags & 2097155) !== 0 ||  // opening for write
              (flags & 512)) {
            return ERRNO_CODES.EISDIR;
          }
        }
        return FS.nodePermissions(node, FS.flagsToPermissionString(flags));
      },MAX_OPEN_FDS:4096,nextfd:function (fd_start, fd_end) {
        fd_start = fd_start || 1;
        fd_end = fd_end || FS.MAX_OPEN_FDS;
        for (var fd = fd_start; fd <= fd_end; fd++) {
          if (!FS.streams[fd]) {
            return fd;
          }
        }
        throw new FS.ErrnoError(ERRNO_CODES.EMFILE);
      },getStream:function (fd) {
        return FS.streams[fd];
      },createStream:function (stream, fd_start, fd_end) {
        if (!FS.FSStream) {
          FS.FSStream = function(){};
          FS.FSStream.prototype = {};
          // compatibility
          Object.defineProperties(FS.FSStream.prototype, {
            object: {
              get: function() { return this.node; },
              set: function(val) { this.node = val; }
            },
            isRead: {
              get: function() { return (this.flags & 2097155) !== 1; }
            },
            isWrite: {
              get: function() { return (this.flags & 2097155) !== 0; }
            },
            isAppend: {
              get: function() { return (this.flags & 1024); }
            }
          });
        }
        if (stream.__proto__) {
          // reuse the object
          stream.__proto__ = FS.FSStream.prototype;
        } else {
          var newStream = new FS.FSStream();
          for (var p in stream) {
            newStream[p] = stream[p];
          }
          stream = newStream;
        }
        var fd = FS.nextfd(fd_start, fd_end);
        stream.fd = fd;
        FS.streams[fd] = stream;
        return stream;
      },closeStream:function (fd) {
        FS.streams[fd] = null;
      },chrdev_stream_ops:{open:function (stream) {
          var device = FS.getDevice(stream.node.rdev);
          // override node's stream ops with the device's
          stream.stream_ops = device.stream_ops;
          // forward the open call
          if (stream.stream_ops.open) {
            stream.stream_ops.open(stream);
          }
        },llseek:function () {
          throw new FS.ErrnoError(ERRNO_CODES.ESPIPE);
        }},major:function (dev) {
        return ((dev) >> 8);
      },minor:function (dev) {
        return ((dev) & 0xff);
      },makedev:function (ma, mi) {
        return ((ma) << 8 | (mi));
      },registerDevice:function (dev, ops) {
        FS.devices[dev] = { stream_ops: ops };
      },getDevice:function (dev) {
        return FS.devices[dev];
      },syncfs:function (populate, callback) {
        if (typeof(populate) === 'function') {
          callback = populate;
          populate = false;
        }
        var completed = 0;
        var total = FS.mounts.length;
        function done(err) {
          if (err) {
            return callback(err);
          }
          if (++completed >= total) {
            callback(null);
          }
        };
        // sync all mounts
        for (var i = 0; i < FS.mounts.length; i++) {
          var mount = FS.mounts[i];
          if (!mount.type.syncfs) {
            done(null);
            continue;
          }
          mount.type.syncfs(mount, populate, done);
        }
      },mount:function (type, opts, mountpoint) {
        var lookup;
        if (mountpoint) {
          lookup = FS.lookupPath(mountpoint, { follow: false });
          mountpoint = lookup.path;  // use the absolute path
        }
        var mount = {
          type: type,
          opts: opts,
          mountpoint: mountpoint,
          root: null
        };
        // create a root node for the fs
        var root = type.mount(mount);
        root.mount = mount;
        mount.root = root;
        // assign the mount info to the mountpoint's node
        if (lookup) {
          lookup.node.mount = mount;
          lookup.node.mounted = true;
          // compatibility update FS.root if we mount to /
          if (mountpoint === '/') {
            FS.root = mount.root;
          }
        }
        // add to our cached list of mounts
        FS.mounts.push(mount);
        return root;
      },lookup:function (parent, name) {
        return parent.node_ops.lookup(parent, name);
      },mknod:function (path, mode, dev) {
        var lookup = FS.lookupPath(path, { parent: true });
        var parent = lookup.node;
        var name = PATH.basename(path);
        var err = FS.mayCreate(parent, name);
        if (err) {
          throw new FS.ErrnoError(err);
        }
        if (!parent.node_ops.mknod) {
          throw new FS.ErrnoError(ERRNO_CODES.EPERM);
        }
        return parent.node_ops.mknod(parent, name, mode, dev);
      },create:function (path, mode) {
        mode = mode !== undefined ? mode : 0666;
        mode &= 4095;
        mode |= 32768;
        return FS.mknod(path, mode, 0);
      },mkdir:function (path, mode) {
        mode = mode !== undefined ? mode : 0777;
        mode &= 511 | 512;
        mode |= 16384;
        return FS.mknod(path, mode, 0);
      },mkdev:function (path, mode, dev) {
        if (typeof(dev) === 'undefined') {
          dev = mode;
          mode = 0666;
        }
        mode |= 8192;
        return FS.mknod(path, mode, dev);
      },symlink:function (oldpath, newpath) {
        var lookup = FS.lookupPath(newpath, { parent: true });
        var parent = lookup.node;
        var newname = PATH.basename(newpath);
        var err = FS.mayCreate(parent, newname);
        if (err) {
          throw new FS.ErrnoError(err);
        }
        if (!parent.node_ops.symlink) {
          throw new FS.ErrnoError(ERRNO_CODES.EPERM);
        }
        return parent.node_ops.symlink(parent, newname, oldpath);
      },rename:function (old_path, new_path) {
        var old_dirname = PATH.dirname(old_path);
        var new_dirname = PATH.dirname(new_path);
        var old_name = PATH.basename(old_path);
        var new_name = PATH.basename(new_path);
        // parents must exist
        var lookup, old_dir, new_dir;
        try {
          lookup = FS.lookupPath(old_path, { parent: true });
          old_dir = lookup.node;
          lookup = FS.lookupPath(new_path, { parent: true });
          new_dir = lookup.node;
        } catch (e) {
          throw new FS.ErrnoError(ERRNO_CODES.EBUSY);
        }
        // need to be part of the same mount
        if (old_dir.mount !== new_dir.mount) {
          throw new FS.ErrnoError(ERRNO_CODES.EXDEV);
        }
        // source must exist
        var old_node = FS.lookupNode(old_dir, old_name);
        // old path should not be an ancestor of the new path
        var relative = PATH.relative(old_path, new_dirname);
        if (relative.charAt(0) !== '.') {
          throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
        }
        // new path should not be an ancestor of the old path
        relative = PATH.relative(new_path, old_dirname);
        if (relative.charAt(0) !== '.') {
          throw new FS.ErrnoError(ERRNO_CODES.ENOTEMPTY);
        }
        // see if the new path already exists
        var new_node;
        try {
          new_node = FS.lookupNode(new_dir, new_name);
        } catch (e) {
          // not fatal
        }
        // early out if nothing needs to change
        if (old_node === new_node) {
          return;
        }
        // we'll need to delete the old entry
        var isdir = FS.isDir(old_node.mode);
        var err = FS.mayDelete(old_dir, old_name, isdir);
        if (err) {
          throw new FS.ErrnoError(err);
        }
        // need delete permissions if we'll be overwriting.
        // need create permissions if new doesn't already exist.
        err = new_node ?
          FS.mayDelete(new_dir, new_name, isdir) :
          FS.mayCreate(new_dir, new_name);
        if (err) {
          throw new FS.ErrnoError(err);
        }
        if (!old_dir.node_ops.rename) {
          throw new FS.ErrnoError(ERRNO_CODES.EPERM);
        }
        if (FS.isMountpoint(old_node) || (new_node && FS.isMountpoint(new_node))) {
          throw new FS.ErrnoError(ERRNO_CODES.EBUSY);
        }
        // if we are going to change the parent, check write permissions
        if (new_dir !== old_dir) {
          err = FS.nodePermissions(old_dir, 'w');
          if (err) {
            throw new FS.ErrnoError(err);
          }
        }
        // remove the node from the lookup hash
        FS.hashRemoveNode(old_node);
        // do the underlying fs rename
        try {
          old_dir.node_ops.rename(old_node, new_dir, new_name);
        } catch (e) {
          throw e;
        } finally {
          // add the node back to the hash (in case node_ops.rename
          // changed its name)
          FS.hashAddNode(old_node);
        }
      },rmdir:function (path) {
        var lookup = FS.lookupPath(path, { parent: true });
        var parent = lookup.node;
        var name = PATH.basename(path);
        var node = FS.lookupNode(parent, name);
        var err = FS.mayDelete(parent, name, true);
        if (err) {
          throw new FS.ErrnoError(err);
        }
        if (!parent.node_ops.rmdir) {
          throw new FS.ErrnoError(ERRNO_CODES.EPERM);
        }
        if (FS.isMountpoint(node)) {
          throw new FS.ErrnoError(ERRNO_CODES.EBUSY);
        }
        parent.node_ops.rmdir(parent, name);
        FS.destroyNode(node);
      },readdir:function (path) {
        var lookup = FS.lookupPath(path, { follow: true });
        var node = lookup.node;
        if (!node.node_ops.readdir) {
          throw new FS.ErrnoError(ERRNO_CODES.ENOTDIR);
        }
        return node.node_ops.readdir(node);
      },unlink:function (path) {
        var lookup = FS.lookupPath(path, { parent: true });
        var parent = lookup.node;
        var name = PATH.basename(path);
        var node = FS.lookupNode(parent, name);
        var err = FS.mayDelete(parent, name, false);
        if (err) {
          // POSIX says unlink should set EPERM, not EISDIR
          if (err === ERRNO_CODES.EISDIR) err = ERRNO_CODES.EPERM;
          throw new FS.ErrnoError(err);
        }
        if (!parent.node_ops.unlink) {
          throw new FS.ErrnoError(ERRNO_CODES.EPERM);
        }
        if (FS.isMountpoint(node)) {
          throw new FS.ErrnoError(ERRNO_CODES.EBUSY);
        }
        parent.node_ops.unlink(parent, name);
        FS.destroyNode(node);
      },readlink:function (path) {
        var lookup = FS.lookupPath(path, { follow: false });
        var link = lookup.node;
        if (!link.node_ops.readlink) {
          throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
        }
        return link.node_ops.readlink(link);
      },stat:function (path, dontFollow) {
        var lookup = FS.lookupPath(path, { follow: !dontFollow });
        var node = lookup.node;
        if (!node.node_ops.getattr) {
          throw new FS.ErrnoError(ERRNO_CODES.EPERM);
        }
        return node.node_ops.getattr(node);
      },lstat:function (path) {
        return FS.stat(path, true);
      },chmod:function (path, mode, dontFollow) {
        var node;
        if (typeof path === 'string') {
          var lookup = FS.lookupPath(path, { follow: !dontFollow });
          node = lookup.node;
        } else {
          node = path;
        }
        if (!node.node_ops.setattr) {
          throw new FS.ErrnoError(ERRNO_CODES.EPERM);
        }
        node.node_ops.setattr(node, {
          mode: (mode & 4095) | (node.mode & ~4095),
          timestamp: Date.now()
        });
      },lchmod:function (path, mode) {
        FS.chmod(path, mode, true);
      },fchmod:function (fd, mode) {
        var stream = FS.getStream(fd);
        if (!stream) {
          throw new FS.ErrnoError(ERRNO_CODES.EBADF);
        }
        FS.chmod(stream.node, mode);
      },chown:function (path, uid, gid, dontFollow) {
        var node;
        if (typeof path === 'string') {
          var lookup = FS.lookupPath(path, { follow: !dontFollow });
          node = lookup.node;
        } else {
          node = path;
        }
        if (!node.node_ops.setattr) {
          throw new FS.ErrnoError(ERRNO_CODES.EPERM);
        }
        node.node_ops.setattr(node, {
          timestamp: Date.now()
          // we ignore the uid / gid for now
        });
      },lchown:function (path, uid, gid) {
        FS.chown(path, uid, gid, true);
      },fchown:function (fd, uid, gid) {
        var stream = FS.getStream(fd);
        if (!stream) {
          throw new FS.ErrnoError(ERRNO_CODES.EBADF);
        }
        FS.chown(stream.node, uid, gid);
      },truncate:function (path, len) {
        if (len < 0) {
          throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
        }
        var node;
        if (typeof path === 'string') {
          var lookup = FS.lookupPath(path, { follow: true });
          node = lookup.node;
        } else {
          node = path;
        }
        if (!node.node_ops.setattr) {
          throw new FS.ErrnoError(ERRNO_CODES.EPERM);
        }
        if (FS.isDir(node.mode)) {
          throw new FS.ErrnoError(ERRNO_CODES.EISDIR);
        }
        if (!FS.isFile(node.mode)) {
          throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
        }
        var err = FS.nodePermissions(node, 'w');
        if (err) {
          throw new FS.ErrnoError(err);
        }
        node.node_ops.setattr(node, {
          size: len,
          timestamp: Date.now()
        });
      },ftruncate:function (fd, len) {
        var stream = FS.getStream(fd);
        if (!stream) {
          throw new FS.ErrnoError(ERRNO_CODES.EBADF);
        }
        if ((stream.flags & 2097155) === 0) {
          throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
        }
        FS.truncate(stream.node, len);
      },utime:function (path, atime, mtime) {
        var lookup = FS.lookupPath(path, { follow: true });
        var node = lookup.node;
        node.node_ops.setattr(node, {
          timestamp: Math.max(atime, mtime)
        });
      },open:function (path, flags, mode, fd_start, fd_end) {
        flags = typeof flags === 'string' ? FS.modeStringToFlags(flags) : flags;
        mode = typeof mode === 'undefined' ? 0666 : mode;
        if ((flags & 64)) {
          mode = (mode & 4095) | 32768;
        } else {
          mode = 0;
        }
        var node;
        if (typeof path === 'object') {
          node = path;
        } else {
          path = PATH.normalize(path);
          try {
            var lookup = FS.lookupPath(path, {
              follow: !(flags & 131072)
            });
            node = lookup.node;
          } catch (e) {
            // ignore
          }
        }
        // perhaps we need to create the node
        if ((flags & 64)) {
          if (node) {
            // if O_CREAT and O_EXCL are set, error out if the node already exists
            if ((flags & 128)) {
              throw new FS.ErrnoError(ERRNO_CODES.EEXIST);
            }
          } else {
            // node doesn't exist, try to create it
            node = FS.mknod(path, mode, 0);
          }
        }
        if (!node) {
          throw new FS.ErrnoError(ERRNO_CODES.ENOENT);
        }
        // can't truncate a device
        if (FS.isChrdev(node.mode)) {
          flags &= ~512;
        }
        // check permissions
        var err = FS.mayOpen(node, flags);
        if (err) {
          throw new FS.ErrnoError(err);
        }
        // do truncation if necessary
        if ((flags & 512)) {
          FS.truncate(node, 0);
        }
        // we've already handled these, don't pass down to the underlying vfs
        flags &= ~(128 | 512);
        // register the stream with the filesystem
        var stream = FS.createStream({
          node: node,
          path: FS.getPath(node),  // we want the absolute path to the node
          flags: flags,
          seekable: true,
          position: 0,
          stream_ops: node.stream_ops,
          // used by the file family libc calls (fopen, fwrite, ferror, etc.)
          ungotten: [],
          error: false
        }, fd_start, fd_end);
        // call the new stream's open function
        if (stream.stream_ops.open) {
          stream.stream_ops.open(stream);
        }
        if (Module['logReadFiles'] && !(flags & 1)) {
          if (!FS.readFiles) FS.readFiles = {};
          if (!(path in FS.readFiles)) {
            FS.readFiles[path] = 1;
            Module['printErr']('read file: ' + path);
          }
        }
        return stream;
      },close:function (stream) {
        try {
          if (stream.stream_ops.close) {
            stream.stream_ops.close(stream);
          }
        } catch (e) {
          throw e;
        } finally {
          FS.closeStream(stream.fd);
        }
      },llseek:function (stream, offset, whence) {
        if (!stream.seekable || !stream.stream_ops.llseek) {
          throw new FS.ErrnoError(ERRNO_CODES.ESPIPE);
        }
        return stream.stream_ops.llseek(stream, offset, whence);
      },read:function (stream, buffer, offset, length, position) {
        if (length < 0 || position < 0) {
          throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
        }
        if ((stream.flags & 2097155) === 1) {
          throw new FS.ErrnoError(ERRNO_CODES.EBADF);
        }
        if (FS.isDir(stream.node.mode)) {
          throw new FS.ErrnoError(ERRNO_CODES.EISDIR);
        }
        if (!stream.stream_ops.read) {
          throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
        }
        var seeking = true;
        if (typeof position === 'undefined') {
          position = stream.position;
          seeking = false;
        } else if (!stream.seekable) {
          throw new FS.ErrnoError(ERRNO_CODES.ESPIPE);
        }
        var bytesRead = stream.stream_ops.read(stream, buffer, offset, length, position);
        if (!seeking) stream.position += bytesRead;
        return bytesRead;
      },write:function (stream, buffer, offset, length, position, canOwn) {
        if (length < 0 || position < 0) {
          throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
        }
        if ((stream.flags & 2097155) === 0) {
          throw new FS.ErrnoError(ERRNO_CODES.EBADF);
        }
        if (FS.isDir(stream.node.mode)) {
          throw new FS.ErrnoError(ERRNO_CODES.EISDIR);
        }
        if (!stream.stream_ops.write) {
          throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
        }
        var seeking = true;
        if (typeof position === 'undefined') {
          position = stream.position;
          seeking = false;
        } else if (!stream.seekable) {
          throw new FS.ErrnoError(ERRNO_CODES.ESPIPE);
        }
        if (stream.flags & 1024) {
          // seek to the end before writing in append mode
          FS.llseek(stream, 0, 2);
        }
        var bytesWritten = stream.stream_ops.write(stream, buffer, offset, length, position, canOwn);
        if (!seeking) stream.position += bytesWritten;
        return bytesWritten;
      },allocate:function (stream, offset, length) {
        if (offset < 0 || length <= 0) {
          throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
        }
        if ((stream.flags & 2097155) === 0) {
          throw new FS.ErrnoError(ERRNO_CODES.EBADF);
        }
        if (!FS.isFile(stream.node.mode) && !FS.isDir(node.mode)) {
          throw new FS.ErrnoError(ERRNO_CODES.ENODEV);
        }
        if (!stream.stream_ops.allocate) {
          throw new FS.ErrnoError(ERRNO_CODES.EOPNOTSUPP);
        }
        stream.stream_ops.allocate(stream, offset, length);
      },mmap:function (stream, buffer, offset, length, position, prot, flags) {
        // TODO if PROT is PROT_WRITE, make sure we have write access
        if ((stream.flags & 2097155) === 1) {
          throw new FS.ErrnoError(ERRNO_CODES.EACCES);
        }
        if (!stream.stream_ops.mmap) {
          throw new FS.ErrnoError(ERRNO_CODES.ENODEV);
        }
        return stream.stream_ops.mmap(stream, buffer, offset, length, position, prot, flags);
      },ioctl:function (stream, cmd, arg) {
        if (!stream.stream_ops.ioctl) {
          throw new FS.ErrnoError(ERRNO_CODES.ENOTTY);
        }
        return stream.stream_ops.ioctl(stream, cmd, arg);
      },readFile:function (path, opts) {
        opts = opts || {};
        opts.flags = opts.flags || 'r';
        opts.encoding = opts.encoding || 'binary';
        var ret;
        var stream = FS.open(path, opts.flags);
        var stat = FS.stat(path);
        var length = stat.size;
        var buf = new Uint8Array(length);
        FS.read(stream, buf, 0, length, 0);
        if (opts.encoding === 'utf8') {
          ret = '';
          var utf8 = new Runtime.UTF8Processor();
          for (var i = 0; i < length; i++) {
            ret += utf8.processCChar(buf[i]);
          }
        } else if (opts.encoding === 'binary') {
          ret = buf;
        } else {
          throw new Error('Invalid encoding type "' + opts.encoding + '"');
        }
        FS.close(stream);
        return ret;
      },writeFile:function (path, data, opts) {
        opts = opts || {};
        opts.flags = opts.flags || 'w';
        opts.encoding = opts.encoding || 'utf8';
        var stream = FS.open(path, opts.flags, opts.mode);
        if (opts.encoding === 'utf8') {
          var utf8 = new Runtime.UTF8Processor();
          var buf = new Uint8Array(utf8.processJSString(data));
          FS.write(stream, buf, 0, buf.length, 0);
        } else if (opts.encoding === 'binary') {
          FS.write(stream, data, 0, data.length, 0);
        } else {
          throw new Error('Invalid encoding type "' + opts.encoding + '"');
        }
        FS.close(stream);
      },cwd:function () {
        return FS.currentPath;
      },chdir:function (path) {
        var lookup = FS.lookupPath(path, { follow: true });
        if (!FS.isDir(lookup.node.mode)) {
          throw new FS.ErrnoError(ERRNO_CODES.ENOTDIR);
        }
        var err = FS.nodePermissions(lookup.node, 'x');
        if (err) {
          throw new FS.ErrnoError(err);
        }
        FS.currentPath = lookup.path;
      },createDefaultDirectories:function () {
        FS.mkdir('/tmp');
      },createDefaultDevices:function () {
        // create /dev
        FS.mkdir('/dev');
        // setup /dev/null
        FS.registerDevice(FS.makedev(1, 3), {
          read: function() { return 0; },
          write: function() { return 0; }
        });
        FS.mkdev('/dev/null', FS.makedev(1, 3));
        // setup /dev/tty and /dev/tty1
        // stderr needs to print output using Module['printErr']
        // so we register a second tty just for it.
        TTY.register(FS.makedev(5, 0), TTY.default_tty_ops);
        TTY.register(FS.makedev(6, 0), TTY.default_tty1_ops);
        FS.mkdev('/dev/tty', FS.makedev(5, 0));
        FS.mkdev('/dev/tty1', FS.makedev(6, 0));
        // we're not going to emulate the actual shm device,
        // just create the tmp dirs that reside in it commonly
        FS.mkdir('/dev/shm');
        FS.mkdir('/dev/shm/tmp');
      },createStandardStreams:function () {
        // TODO deprecate the old functionality of a single
        // input / output callback and that utilizes FS.createDevice
        // and instead require a unique set of stream ops
        // by default, we symlink the standard streams to the
        // default tty devices. however, if the standard streams
        // have been overwritten we create a unique device for
        // them instead.
        if (Module['stdin']) {
          FS.createDevice('/dev', 'stdin', Module['stdin']);
        } else {
          FS.symlink('/dev/tty', '/dev/stdin');
        }
        if (Module['stdout']) {
          FS.createDevice('/dev', 'stdout', null, Module['stdout']);
        } else {
          FS.symlink('/dev/tty', '/dev/stdout');
        }
        if (Module['stderr']) {
          FS.createDevice('/dev', 'stderr', null, Module['stderr']);
        } else {
          FS.symlink('/dev/tty1', '/dev/stderr');
        }
        // open default streams for the stdin, stdout and stderr devices
        var stdin = FS.open('/dev/stdin', 'r');
        HEAP32[((_stdin)>>2)]=stdin.fd;
        assert(stdin.fd === 1, 'invalid handle for stdin (' + stdin.fd + ')');
        var stdout = FS.open('/dev/stdout', 'w');
        HEAP32[((_stdout)>>2)]=stdout.fd;
        assert(stdout.fd === 2, 'invalid handle for stdout (' + stdout.fd + ')');
        var stderr = FS.open('/dev/stderr', 'w');
        HEAP32[((_stderr)>>2)]=stderr.fd;
        assert(stderr.fd === 3, 'invalid handle for stderr (' + stderr.fd + ')');
      },ensureErrnoError:function () {
        if (FS.ErrnoError) return;
        FS.ErrnoError = function ErrnoError(errno) {
          this.errno = errno;
          for (var key in ERRNO_CODES) {
            if (ERRNO_CODES[key] === errno) {
              this.code = key;
              break;
            }
          }
          this.message = ERRNO_MESSAGES[errno];
          this.stack = stackTrace();
        };
        FS.ErrnoError.prototype = new Error();
        FS.ErrnoError.prototype.constructor = FS.ErrnoError;
        // Some errors may happen quite a bit, to avoid overhead we reuse them (and suffer a lack of stack info)
        [ERRNO_CODES.ENOENT].forEach(function(code) {
          FS.genericErrors[code] = new FS.ErrnoError(code);
          FS.genericErrors[code].stack = '<generic error, no stack>';
        });
      },staticInit:function () {
        FS.ensureErrnoError();
        FS.nameTable = new Array(4096);
        FS.root = FS.createNode(null, '/', 16384 | 0777, 0);
        FS.mount(MEMFS, {}, '/');
        FS.createDefaultDirectories();
        FS.createDefaultDevices();
      },init:function (input, output, error) {
        assert(!FS.init.initialized, 'FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)');
        FS.init.initialized = true;
        FS.ensureErrnoError();
        // Allow Module.stdin etc. to provide defaults, if none explicitly passed to us here
        Module['stdin'] = input || Module['stdin'];
        Module['stdout'] = output || Module['stdout'];
        Module['stderr'] = error || Module['stderr'];
        FS.createStandardStreams();
      },quit:function () {
        FS.init.initialized = false;
        for (var i = 0; i < FS.streams.length; i++) {
          var stream = FS.streams[i];
          if (!stream) {
            continue;
          }
          FS.close(stream);
        }
      },getMode:function (canRead, canWrite) {
        var mode = 0;
        if (canRead) mode |= 292 | 73;
        if (canWrite) mode |= 146;
        return mode;
      },joinPath:function (parts, forceRelative) {
        var path = PATH.join.apply(null, parts);
        if (forceRelative && path[0] == '/') path = path.substr(1);
        return path;
      },absolutePath:function (relative, base) {
        return PATH.resolve(base, relative);
      },standardizePath:function (path) {
        return PATH.normalize(path);
      },findObject:function (path, dontResolveLastLink) {
        var ret = FS.analyzePath(path, dontResolveLastLink);
        if (ret.exists) {
          return ret.object;
        } else {
          ___setErrNo(ret.error);
          return null;
        }
      },analyzePath:function (path, dontResolveLastLink) {
        // operate from within the context of the symlink's target
        try {
          var lookup = FS.lookupPath(path, { follow: !dontResolveLastLink });
          path = lookup.path;
        } catch (e) {
        }
        var ret = {
          isRoot: false, exists: false, error: 0, name: null, path: null, object: null,
          parentExists: false, parentPath: null, parentObject: null
        };
        try {
          var lookup = FS.lookupPath(path, { parent: true });
          ret.parentExists = true;
          ret.parentPath = lookup.path;
          ret.parentObject = lookup.node;
          ret.name = PATH.basename(path);
          lookup = FS.lookupPath(path, { follow: !dontResolveLastLink });
          ret.exists = true;
          ret.path = lookup.path;
          ret.object = lookup.node;
          ret.name = lookup.node.name;
          ret.isRoot = lookup.path === '/';
        } catch (e) {
          ret.error = e.errno;
        };
        return ret;
      },createFolder:function (parent, name, canRead, canWrite) {
        var path = PATH.join2(typeof parent === 'string' ? parent : FS.getPath(parent), name);
        var mode = FS.getMode(canRead, canWrite);
        return FS.mkdir(path, mode);
      },createPath:function (parent, path, canRead, canWrite) {
        parent = typeof parent === 'string' ? parent : FS.getPath(parent);
        var parts = path.split('/').reverse();
        while (parts.length) {
          var part = parts.pop();
          if (!part) continue;
          var current = PATH.join2(parent, part);
          try {
            FS.mkdir(current);
          } catch (e) {
            // ignore EEXIST
          }
          parent = current;
        }
        return current;
      },createFile:function (parent, name, properties, canRead, canWrite) {
        var path = PATH.join2(typeof parent === 'string' ? parent : FS.getPath(parent), name);
        var mode = FS.getMode(canRead, canWrite);
        return FS.create(path, mode);
      },createDataFile:function (parent, name, data, canRead, canWrite, canOwn) {
        var path = name ? PATH.join2(typeof parent === 'string' ? parent : FS.getPath(parent), name) : parent;
        var mode = FS.getMode(canRead, canWrite);
        var node = FS.create(path, mode);
        if (data) {
          if (typeof data === 'string') {
            var arr = new Array(data.length);
            for (var i = 0, len = data.length; i < len; ++i) arr[i] = data.charCodeAt(i);
            data = arr;
          }
          // make sure we can write to the file
          FS.chmod(node, mode | 146);
          var stream = FS.open(node, 'w');
          FS.write(stream, data, 0, data.length, 0, canOwn);
          FS.close(stream);
          FS.chmod(node, mode);
        }
        return node;
      },createDevice:function (parent, name, input, output) {
        var path = PATH.join2(typeof parent === 'string' ? parent : FS.getPath(parent), name);
        var mode = FS.getMode(!!input, !!output);
        if (!FS.createDevice.major) FS.createDevice.major = 64;
        var dev = FS.makedev(FS.createDevice.major++, 0);
        // Create a fake device that a set of stream ops to emulate
        // the old behavior.
        FS.registerDevice(dev, {
          open: function(stream) {
            stream.seekable = false;
          },
          close: function(stream) {
            // flush any pending line data
            if (output && output.buffer && output.buffer.length) {
              output(10);
            }
          },
          read: function(stream, buffer, offset, length, pos /* ignored */) {
            var bytesRead = 0;
            for (var i = 0; i < length; i++) {
              var result;
              try {
                result = input();
              } catch (e) {
                throw new FS.ErrnoError(ERRNO_CODES.EIO);
              }
              if (result === undefined && bytesRead === 0) {
                throw new FS.ErrnoError(ERRNO_CODES.EAGAIN);
              }
              if (result === null || result === undefined) break;
              bytesRead++;
              buffer[offset+i] = result;
            }
            if (bytesRead) {
              stream.node.timestamp = Date.now();
            }
            return bytesRead;
          },
          write: function(stream, buffer, offset, length, pos) {
            for (var i = 0; i < length; i++) {
              try {
                output(buffer[offset+i]);
              } catch (e) {
                throw new FS.ErrnoError(ERRNO_CODES.EIO);
              }
            }
            if (length) {
              stream.node.timestamp = Date.now();
            }
            return i;
          }
        });
        return FS.mkdev(path, mode, dev);
      },createLink:function (parent, name, target, canRead, canWrite) {
        var path = PATH.join2(typeof parent === 'string' ? parent : FS.getPath(parent), name);
        return FS.symlink(target, path);
      },forceLoadFile:function (obj) {
        if (obj.isDevice || obj.isFolder || obj.link || obj.contents) return true;
        var success = true;
        if (typeof XMLHttpRequest !== 'undefined') {
          throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
        } else if (Module['read']) {
          // Command-line.
          try {
            // WARNING: Can't read binary files in V8's d8 or tracemonkey's js, as
            //          read() will try to parse UTF8.
            obj.contents = intArrayFromString(Module['read'](obj.url), true);
          } catch (e) {
            success = false;
          }
        } else {
          throw new Error('Cannot load without read() or XMLHttpRequest.');
        }
        if (!success) ___setErrNo(ERRNO_CODES.EIO);
        return success;
      },createLazyFile:function (parent, name, url, canRead, canWrite) {
        if (typeof XMLHttpRequest !== 'undefined') {
          if (!ENVIRONMENT_IS_WORKER) throw 'Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc';
          // Lazy chunked Uint8Array (implements get and length from Uint8Array). Actual getting is abstracted away for eventual reuse.
          function LazyUint8Array() {
            this.lengthKnown = false;
            this.chunks = []; // Loaded chunks. Index is the chunk number
          }
          LazyUint8Array.prototype.get = function LazyUint8Array_get(idx) {
            if (idx > this.length-1 || idx < 0) {
              return undefined;
            }
            var chunkOffset = idx % this.chunkSize;
            var chunkNum = Math.floor(idx / this.chunkSize);
            return this.getter(chunkNum)[chunkOffset];
          }
          LazyUint8Array.prototype.setDataGetter = function LazyUint8Array_setDataGetter(getter) {
            this.getter = getter;
          }
          LazyUint8Array.prototype.cacheLength = function LazyUint8Array_cacheLength() {
              // Find length
              var xhr = new XMLHttpRequest();
              xhr.open('HEAD', url, false);
              xhr.send(null);
              if (!(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304)) throw new Error("Couldn't load " + url + ". Status: " + xhr.status);
              var datalength = Number(xhr.getResponseHeader("Content-length"));
              var header;
              var hasByteServing = (header = xhr.getResponseHeader("Accept-Ranges")) && header === "bytes";
              var chunkSize = 1024*1024; // Chunk size in bytes
              if (!hasByteServing) chunkSize = datalength;
              // Function to get a range from the remote URL.
              var doXHR = (function(from, to) {
                if (from > to) throw new Error("invalid range (" + from + ", " + to + ") or no bytes requested!");
                if (to > datalength-1) throw new Error("only " + datalength + " bytes available! programmer error!");
                // TODO: Use mozResponseArrayBuffer, responseStream, etc. if available.
                var xhr = new XMLHttpRequest();
                xhr.open('GET', url, false);
                if (datalength !== chunkSize) xhr.setRequestHeader("Range", "bytes=" + from + "-" + to);
                // Some hints to the browser that we want binary data.
                if (typeof Uint8Array != 'undefined') xhr.responseType = 'arraybuffer';
                if (xhr.overrideMimeType) {
                  xhr.overrideMimeType('text/plain; charset=x-user-defined');
                }
                xhr.send(null);
                if (!(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304)) throw new Error("Couldn't load " + url + ". Status: " + xhr.status);
                if (xhr.response !== undefined) {
                  return new Uint8Array(xhr.response || []);
                } else {
                  return intArrayFromString(xhr.responseText || '', true);
                }
              });
              var lazyArray = this;
              lazyArray.setDataGetter(function(chunkNum) {
                var start = chunkNum * chunkSize;
                var end = (chunkNum+1) * chunkSize - 1; // including this byte
                end = Math.min(end, datalength-1); // if datalength-1 is selected, this is the last block
                if (typeof(lazyArray.chunks[chunkNum]) === "undefined") {
                  lazyArray.chunks[chunkNum] = doXHR(start, end);
                }
                if (typeof(lazyArray.chunks[chunkNum]) === "undefined") throw new Error("doXHR failed!");
                return lazyArray.chunks[chunkNum];
              });
              this._length = datalength;
              this._chunkSize = chunkSize;
              this.lengthKnown = true;
          }
          var lazyArray = new LazyUint8Array();
          Object.defineProperty(lazyArray, "length", {
              get: function() {
                  if(!this.lengthKnown) {
                      this.cacheLength();
                  }
                  return this._length;
              }
          });
          Object.defineProperty(lazyArray, "chunkSize", {
              get: function() {
                  if(!this.lengthKnown) {
                      this.cacheLength();
                  }
                  return this._chunkSize;
              }
          });
          var properties = { isDevice: false, contents: lazyArray };
        } else {
          var properties = { isDevice: false, url: url };
        }
        var node = FS.createFile(parent, name, properties, canRead, canWrite);
        // This is a total hack, but I want to get this lazy file code out of the
        // core of MEMFS. If we want to keep this lazy file concept I feel it should
        // be its own thin LAZYFS proxying calls to MEMFS.
        if (properties.contents) {
          node.contents = properties.contents;
        } else if (properties.url) {
          node.contents = null;
          node.url = properties.url;
        }
        // override each stream op with one that tries to force load the lazy file first
        var stream_ops = {};
        var keys = Object.keys(node.stream_ops);
        keys.forEach(function(key) {
          var fn = node.stream_ops[key];
          stream_ops[key] = function forceLoadLazyFile() {
            if (!FS.forceLoadFile(node)) {
              throw new FS.ErrnoError(ERRNO_CODES.EIO);
            }
            return fn.apply(null, arguments);
          };
        });
        // use a custom read function
        stream_ops.read = function stream_ops_read(stream, buffer, offset, length, position) {
          if (!FS.forceLoadFile(node)) {
            throw new FS.ErrnoError(ERRNO_CODES.EIO);
          }
          var contents = stream.node.contents;
          if (position >= contents.length)
            return 0;
          var size = Math.min(contents.length - position, length);
          assert(size >= 0);
          if (contents.slice) { // normal array
            for (var i = 0; i < size; i++) {
              buffer[offset + i] = contents[position + i];
            }
          } else {
            for (var i = 0; i < size; i++) { // LazyUint8Array from sync binary XHR
              buffer[offset + i] = contents.get(position + i);
            }
          }
          return size;
        };
        node.stream_ops = stream_ops;
        return node;
      },createPreloadedFile:function (parent, name, url, canRead, canWrite, onload, onerror, dontCreateFile, canOwn) {
        Browser.init();
        // TODO we should allow people to just pass in a complete filename instead
        // of parent and name being that we just join them anyways
        var fullname = name ? PATH.resolve(PATH.join2(parent, name)) : parent;
        function processData(byteArray) {
          function finish(byteArray) {
            if (!dontCreateFile) {
              FS.createDataFile(parent, name, byteArray, canRead, canWrite, canOwn);
            }
            if (onload) onload();
            removeRunDependency('cp ' + fullname);
          }
          var handled = false;
          Module['preloadPlugins'].forEach(function(plugin) {
            if (handled) return;
            if (plugin['canHandle'](fullname)) {
              plugin['handle'](byteArray, fullname, finish, function() {
                if (onerror) onerror();
                removeRunDependency('cp ' + fullname);
              });
              handled = true;
            }
          });
          if (!handled) finish(byteArray);
        }
        addRunDependency('cp ' + fullname);
        if (typeof url == 'string') {
          Browser.asyncLoad(url, function(byteArray) {
            processData(byteArray);
          }, onerror);
        } else {
          processData(url);
        }
      },indexedDB:function () {
        return window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
      },DB_NAME:function () {
        return 'EM_FS_' + window.location.pathname;
      },DB_VERSION:20,DB_STORE_NAME:"FILE_DATA",saveFilesToDB:function (paths, onload, onerror) {
        onload = onload || function(){};
        onerror = onerror || function(){};
        var indexedDB = FS.indexedDB();
        try {
          var openRequest = indexedDB.open(FS.DB_NAME(), FS.DB_VERSION);
        } catch (e) {
          return onerror(e);
        }
        openRequest.onupgradeneeded = function openRequest_onupgradeneeded() {
          console.log('creating db');
          var db = openRequest.result;
          db.createObjectStore(FS.DB_STORE_NAME);
        };
        openRequest.onsuccess = function openRequest_onsuccess() {
          var db = openRequest.result;
          var transaction = db.transaction([FS.DB_STORE_NAME], 'readwrite');
          var files = transaction.objectStore(FS.DB_STORE_NAME);
          var ok = 0, fail = 0, total = paths.length;
          function finish() {
            if (fail == 0) onload(); else onerror();
          }
          paths.forEach(function(path) {
            var putRequest = files.put(FS.analyzePath(path).object.contents, path);
            putRequest.onsuccess = function putRequest_onsuccess() { ok++; if (ok + fail == total) finish() };
            putRequest.onerror = function putRequest_onerror() { fail++; if (ok + fail == total) finish() };
          });
          transaction.onerror = onerror;
        };
        openRequest.onerror = onerror;
      },loadFilesFromDB:function (paths, onload, onerror) {
        onload = onload || function(){};
        onerror = onerror || function(){};
        var indexedDB = FS.indexedDB();
        try {
          var openRequest = indexedDB.open(FS.DB_NAME(), FS.DB_VERSION);
        } catch (e) {
          return onerror(e);
        }
        openRequest.onupgradeneeded = onerror; // no database to load from
        openRequest.onsuccess = function openRequest_onsuccess() {
          var db = openRequest.result;
          try {
            var transaction = db.transaction([FS.DB_STORE_NAME], 'readonly');
          } catch(e) {
            onerror(e);
            return;
          }
          var files = transaction.objectStore(FS.DB_STORE_NAME);
          var ok = 0, fail = 0, total = paths.length;
          function finish() {
            if (fail == 0) onload(); else onerror();
          }
          paths.forEach(function(path) {
            var getRequest = files.get(path);
            getRequest.onsuccess = function getRequest_onsuccess() {
              if (FS.analyzePath(path).exists) {
                FS.unlink(path);
              }
              FS.createDataFile(PATH.dirname(path), PATH.basename(path), getRequest.result, true, true, true);
              ok++;
              if (ok + fail == total) finish();
            };
            getRequest.onerror = function getRequest_onerror() { fail++; if (ok + fail == total) finish() };
          });
          transaction.onerror = onerror;
        };
        openRequest.onerror = onerror;
      }};
  var _mkport=undefined;var SOCKFS={mount:function (mount) {
        return FS.createNode(null, '/', 16384 | 0777, 0);
      },createSocket:function (family, type, protocol) {
        var streaming = type == 1;
        if (protocol) {
          assert(streaming == (protocol == 6)); // if SOCK_STREAM, must be tcp
        }
        // create our internal socket structure
        var sock = {
          family: family,
          type: type,
          protocol: protocol,
          server: null,
          peers: {},
          pending: [],
          recv_queue: [],
          sock_ops: SOCKFS.websocket_sock_ops
        };
        // create the filesystem node to store the socket structure
        var name = SOCKFS.nextname();
        var node = FS.createNode(SOCKFS.root, name, 49152, 0);
        node.sock = sock;
        // and the wrapping stream that enables library functions such
        // as read and write to indirectly interact with the socket
        var stream = FS.createStream({
          path: name,
          node: node,
          flags: FS.modeStringToFlags('r+'),
          seekable: false,
          stream_ops: SOCKFS.stream_ops
        });
        // map the new stream to the socket structure (sockets have a 1:1
        // relationship with a stream)
        sock.stream = stream;
        return sock;
      },getSocket:function (fd) {
        var stream = FS.getStream(fd);
        if (!stream || !FS.isSocket(stream.node.mode)) {
          return null;
        }
        return stream.node.sock;
      },stream_ops:{poll:function (stream) {
          var sock = stream.node.sock;
          return sock.sock_ops.poll(sock);
        },ioctl:function (stream, request, varargs) {
          var sock = stream.node.sock;
          return sock.sock_ops.ioctl(sock, request, varargs);
        },read:function (stream, buffer, offset, length, position /* ignored */) {
          var sock = stream.node.sock;
          var msg = sock.sock_ops.recvmsg(sock, length);
          if (!msg) {
            // socket is closed
            return 0;
          }
          buffer.set(msg.buffer, offset);
          return msg.buffer.length;
        },write:function (stream, buffer, offset, length, position /* ignored */) {
          var sock = stream.node.sock;
          return sock.sock_ops.sendmsg(sock, buffer, offset, length);
        },close:function (stream) {
          var sock = stream.node.sock;
          sock.sock_ops.close(sock);
        }},nextname:function () {
        if (!SOCKFS.nextname.current) {
          SOCKFS.nextname.current = 0;
        }
        return 'socket[' + (SOCKFS.nextname.current++) + ']';
      },websocket_sock_ops:{createPeer:function (sock, addr, port) {
          var ws;
          if (typeof addr === 'object') {
            ws = addr;
            addr = null;
            port = null;
          }
          if (ws) {
            // for sockets that've already connected (e.g. we're the server)
            // we can inspect the _socket property for the address
            if (ws._socket) {
              addr = ws._socket.remoteAddress;
              port = ws._socket.remotePort;
            }
            // if we're just now initializing a connection to the remote,
            // inspect the url property
            else {
              var result = /ws[s]?:\/\/([^:]+):(\d+)/.exec(ws.url);
              if (!result) {
                throw new Error('WebSocket URL must be in the format ws(s)://address:port');
              }
              addr = result[1];
              port = parseInt(result[2], 10);
            }
          } else {
            // create the actual websocket object and connect
            try {
              var url = 'ws://' + addr + ':' + port;
              // the node ws library API is slightly different than the browser's
              var opts = ENVIRONMENT_IS_NODE ? {headers: {'websocket-protocol': ['binary']}} : ['binary'];
              // If node we use the ws library.
              var WebSocket = ENVIRONMENT_IS_NODE ? require('ws') : window['WebSocket'];
              ws = new WebSocket(url, opts);
              ws.binaryType = 'arraybuffer';
            } catch (e) {
              throw new FS.ErrnoError(ERRNO_CODES.EHOSTUNREACH);
            }
          }
          var peer = {
            addr: addr,
            port: port,
            socket: ws,
            dgram_send_queue: []
          };
          SOCKFS.websocket_sock_ops.addPeer(sock, peer);
          SOCKFS.websocket_sock_ops.handlePeerEvents(sock, peer);
          // if this is a bound dgram socket, send the port number first to allow
          // us to override the ephemeral port reported to us by remotePort on the
          // remote end.
          if (sock.type === 2 && typeof sock.sport !== 'undefined') {
            peer.dgram_send_queue.push(new Uint8Array([
                255, 255, 255, 255,
                'p'.charCodeAt(0), 'o'.charCodeAt(0), 'r'.charCodeAt(0), 't'.charCodeAt(0),
                ((sock.sport & 0xff00) >> 8) , (sock.sport & 0xff)
            ]));
          }
          return peer;
        },getPeer:function (sock, addr, port) {
          return sock.peers[addr + ':' + port];
        },addPeer:function (sock, peer) {
          sock.peers[peer.addr + ':' + peer.port] = peer;
        },removePeer:function (sock, peer) {
          delete sock.peers[peer.addr + ':' + peer.port];
        },handlePeerEvents:function (sock, peer) {
          var first = true;
          var handleOpen = function () {
            try {
              var queued = peer.dgram_send_queue.shift();
              while (queued) {
                peer.socket.send(queued);
                queued = peer.dgram_send_queue.shift();
              }
            } catch (e) {
              // not much we can do here in the way of proper error handling as we've already
              // lied and said this data was sent. shut it down.
              peer.socket.close();
            }
          };
          function handleMessage(data) {
            assert(typeof data !== 'string' && data.byteLength !== undefined);  // must receive an ArrayBuffer
            data = new Uint8Array(data);  // make a typed array view on the array buffer
            // if this is the port message, override the peer's port with it
            var wasfirst = first;
            first = false;
            if (wasfirst &&
                data.length === 10 &&
                data[0] === 255 && data[1] === 255 && data[2] === 255 && data[3] === 255 &&
                data[4] === 'p'.charCodeAt(0) && data[5] === 'o'.charCodeAt(0) && data[6] === 'r'.charCodeAt(0) && data[7] === 't'.charCodeAt(0)) {
              // update the peer's port and it's key in the peer map
              var newport = ((data[8] << 8) | data[9]);
              SOCKFS.websocket_sock_ops.removePeer(sock, peer);
              peer.port = newport;
              SOCKFS.websocket_sock_ops.addPeer(sock, peer);
              return;
            }
            sock.recv_queue.push({ addr: peer.addr, port: peer.port, data: data });
          };
          if (ENVIRONMENT_IS_NODE) {
            peer.socket.on('open', handleOpen);
            peer.socket.on('message', function(data, flags) {
              if (!flags.binary) {
                return;
              }
              handleMessage((new Uint8Array(data)).buffer);  // copy from node Buffer -> ArrayBuffer
            });
            peer.socket.on('error', function() {
              // don't throw
            });
          } else {
            peer.socket.onopen = handleOpen;
            peer.socket.onmessage = function peer_socket_onmessage(event) {
              handleMessage(event.data);
            };
          }
        },poll:function (sock) {
          if (sock.type === 1 && sock.server) {
            // listen sockets should only say they're available for reading
            // if there are pending clients.
            return sock.pending.length ? (64 | 1) : 0;
          }
          var mask = 0;
          var dest = sock.type === 1 ?  // we only care about the socket state for connection-based sockets
            SOCKFS.websocket_sock_ops.getPeer(sock, sock.daddr, sock.dport) :
            null;
          if (sock.recv_queue.length ||
              !dest ||  // connection-less sockets are always ready to read
              (dest && dest.socket.readyState === dest.socket.CLOSING) ||
              (dest && dest.socket.readyState === dest.socket.CLOSED)) {  // let recv return 0 once closed
            mask |= (64 | 1);
          }
          if (!dest ||  // connection-less sockets are always ready to write
              (dest && dest.socket.readyState === dest.socket.OPEN)) {
            mask |= 4;
          }
          if ((dest && dest.socket.readyState === dest.socket.CLOSING) ||
              (dest && dest.socket.readyState === dest.socket.CLOSED)) {
            mask |= 16;
          }
          return mask;
        },ioctl:function (sock, request, arg) {
          switch (request) {
            case 21531:
              var bytes = 0;
              if (sock.recv_queue.length) {
                bytes = sock.recv_queue[0].data.length;
              }
              HEAP32[((arg)>>2)]=bytes;
              return 0;
            default:
              return ERRNO_CODES.EINVAL;
          }
        },close:function (sock) {
          // if we've spawned a listen server, close it
          if (sock.server) {
            try {
              sock.server.close();
            } catch (e) {
            }
            sock.server = null;
          }
          // close any peer connections
          var peers = Object.keys(sock.peers);
          for (var i = 0; i < peers.length; i++) {
            var peer = sock.peers[peers[i]];
            try {
              peer.socket.close();
            } catch (e) {
            }
            SOCKFS.websocket_sock_ops.removePeer(sock, peer);
          }
          return 0;
        },bind:function (sock, addr, port) {
          if (typeof sock.saddr !== 'undefined' || typeof sock.sport !== 'undefined') {
            throw new FS.ErrnoError(ERRNO_CODES.EINVAL);  // already bound
          }
          sock.saddr = addr;
          sock.sport = port || _mkport();
          // in order to emulate dgram sockets, we need to launch a listen server when
          // binding on a connection-less socket
          // note: this is only required on the server side
          if (sock.type === 2) {
            // close the existing server if it exists
            if (sock.server) {
              sock.server.close();
              sock.server = null;
            }
            // swallow error operation not supported error that occurs when binding in the
            // browser where this isn't supported
            try {
              sock.sock_ops.listen(sock, 0);
            } catch (e) {
              if (!(e instanceof FS.ErrnoError)) throw e;
              if (e.errno !== ERRNO_CODES.EOPNOTSUPP) throw e;
            }
          }
        },connect:function (sock, addr, port) {
          if (sock.server) {
            throw new FS.ErrnoError(ERRNO_CODS.EOPNOTSUPP);
          }
          // TODO autobind
          // if (!sock.addr && sock.type == 2) {
          // }
          // early out if we're already connected / in the middle of connecting
          if (typeof sock.daddr !== 'undefined' && typeof sock.dport !== 'undefined') {
            var dest = SOCKFS.websocket_sock_ops.getPeer(sock, sock.daddr, sock.dport);
            if (dest) {
              if (dest.socket.readyState === dest.socket.CONNECTING) {
                throw new FS.ErrnoError(ERRNO_CODES.EALREADY);
              } else {
                throw new FS.ErrnoError(ERRNO_CODES.EISCONN);
              }
            }
          }
          // add the socket to our peer list and set our
          // destination address / port to match
          var peer = SOCKFS.websocket_sock_ops.createPeer(sock, addr, port);
          sock.daddr = peer.addr;
          sock.dport = peer.port;
          // always "fail" in non-blocking mode
          throw new FS.ErrnoError(ERRNO_CODES.EINPROGRESS);
        },listen:function (sock, backlog) {
          if (!ENVIRONMENT_IS_NODE) {
            throw new FS.ErrnoError(ERRNO_CODES.EOPNOTSUPP);
          }
          if (sock.server) {
             throw new FS.ErrnoError(ERRNO_CODES.EINVAL);  // already listening
          }
          var WebSocketServer = require('ws').Server;
          var host = sock.saddr;
          sock.server = new WebSocketServer({
            host: host,
            port: sock.sport
            // TODO support backlog
          });
          sock.server.on('connection', function(ws) {
            if (sock.type === 1) {
              var newsock = SOCKFS.createSocket(sock.family, sock.type, sock.protocol);
              // create a peer on the new socket
              var peer = SOCKFS.websocket_sock_ops.createPeer(newsock, ws);
              newsock.daddr = peer.addr;
              newsock.dport = peer.port;
              // push to queue for accept to pick up
              sock.pending.push(newsock);
            } else {
              // create a peer on the listen socket so calling sendto
              // with the listen socket and an address will resolve
              // to the correct client
              SOCKFS.websocket_sock_ops.createPeer(sock, ws);
            }
          });
          sock.server.on('closed', function() {
            sock.server = null;
          });
          sock.server.on('error', function() {
            // don't throw
          });
        },accept:function (listensock) {
          if (!listensock.server) {
            throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
          }
          var newsock = listensock.pending.shift();
          newsock.stream.flags = listensock.stream.flags;
          return newsock;
        },getname:function (sock, peer) {
          var addr, port;
          if (peer) {
            if (sock.daddr === undefined || sock.dport === undefined) {
              throw new FS.ErrnoError(ERRNO_CODES.ENOTCONN);
            }
            addr = sock.daddr;
            port = sock.dport;
          } else {
            // TODO saddr and sport will be set for bind()'d UDP sockets, but what
            // should we be returning for TCP sockets that've been connect()'d?
            addr = sock.saddr || 0;
            port = sock.sport || 0;
          }
          return { addr: addr, port: port };
        },sendmsg:function (sock, buffer, offset, length, addr, port) {
          if (sock.type === 2) {
            // connection-less sockets will honor the message address,
            // and otherwise fall back to the bound destination address
            if (addr === undefined || port === undefined) {
              addr = sock.daddr;
              port = sock.dport;
            }
            // if there was no address to fall back to, error out
            if (addr === undefined || port === undefined) {
              throw new FS.ErrnoError(ERRNO_CODES.EDESTADDRREQ);
            }
          } else {
            // connection-based sockets will only use the bound
            addr = sock.daddr;
            port = sock.dport;
          }
          // find the peer for the destination address
          var dest = SOCKFS.websocket_sock_ops.getPeer(sock, addr, port);
          // early out if not connected with a connection-based socket
          if (sock.type === 1) {
            if (!dest || dest.socket.readyState === dest.socket.CLOSING || dest.socket.readyState === dest.socket.CLOSED) {
              throw new FS.ErrnoError(ERRNO_CODES.ENOTCONN);
            } else if (dest.socket.readyState === dest.socket.CONNECTING) {
              throw new FS.ErrnoError(ERRNO_CODES.EAGAIN);
            }
          }
          // create a copy of the incoming data to send, as the WebSocket API
          // doesn't work entirely with an ArrayBufferView, it'll just send
          // the entire underlying buffer
          var data;
          if (buffer instanceof Array || buffer instanceof ArrayBuffer) {
            data = buffer.slice(offset, offset + length);
          } else {  // ArrayBufferView
            data = buffer.buffer.slice(buffer.byteOffset + offset, buffer.byteOffset + offset + length);
          }
          // if we're emulating a connection-less dgram socket and don't have
          // a cached connection, queue the buffer to send upon connect and
          // lie, saying the data was sent now.
          if (sock.type === 2) {
            if (!dest || dest.socket.readyState !== dest.socket.OPEN) {
              // if we're not connected, open a new connection
              if (!dest || dest.socket.readyState === dest.socket.CLOSING || dest.socket.readyState === dest.socket.CLOSED) {
                dest = SOCKFS.websocket_sock_ops.createPeer(sock, addr, port);
              }
              dest.dgram_send_queue.push(data);
              return length;
            }
          }
          try {
            // send the actual data
            dest.socket.send(data);
            return length;
          } catch (e) {
            throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
          }
        },recvmsg:function (sock, length) {
          // http://pubs.opengroup.org/onlinepubs/7908799/xns/recvmsg.html
          if (sock.type === 1 && sock.server) {
            // tcp servers should not be recv()'ing on the listen socket
            throw new FS.ErrnoError(ERRNO_CODES.ENOTCONN);
          }
          var queued = sock.recv_queue.shift();
          if (!queued) {
            if (sock.type === 1) {
              var dest = SOCKFS.websocket_sock_ops.getPeer(sock, sock.daddr, sock.dport);
              if (!dest) {
                // if we have a destination address but are not connected, error out
                throw new FS.ErrnoError(ERRNO_CODES.ENOTCONN);
              }
              else if (dest.socket.readyState === dest.socket.CLOSING || dest.socket.readyState === dest.socket.CLOSED) {
                // return null if the socket has closed
                return null;
              }
              else {
                // else, our socket is in a valid state but truly has nothing available
                throw new FS.ErrnoError(ERRNO_CODES.EAGAIN);
              }
            } else {
              throw new FS.ErrnoError(ERRNO_CODES.EAGAIN);
            }
          }
          // queued.data will be an ArrayBuffer if it's unadulterated, but if it's
          // requeued TCP data it'll be an ArrayBufferView
          var queuedLength = queued.data.byteLength || queued.data.length;
          var queuedOffset = queued.data.byteOffset || 0;
          var queuedBuffer = queued.data.buffer || queued.data;
          var bytesRead = Math.min(length, queuedLength);
          var res = {
            buffer: new Uint8Array(queuedBuffer, queuedOffset, bytesRead),
            addr: queued.addr,
            port: queued.port
          };
          // push back any unread data for TCP connections
          if (sock.type === 1 && bytesRead < queuedLength) {
            var bytesRemaining = queuedLength - bytesRead;
            queued.data = new Uint8Array(queuedBuffer, queuedOffset + bytesRead, bytesRemaining);
            sock.recv_queue.unshift(queued);
          }
          return res;
        }}};function _send(fd, buf, len, flags) {
      var sock = SOCKFS.getSocket(fd);
      if (!sock) {
        ___setErrNo(ERRNO_CODES.EBADF);
        return -1;
      }
      // TODO honor flags
      return _write(fd, buf, len);
    }
  function _pwrite(fildes, buf, nbyte, offset) {
      // ssize_t pwrite(int fildes, const void *buf, size_t nbyte, off_t offset);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/write.html
      var stream = FS.getStream(fildes);
      if (!stream) {
        ___setErrNo(ERRNO_CODES.EBADF);
        return -1;
      }
      try {
        var slab = HEAP8;
        return FS.write(stream, slab, buf, nbyte, offset);
      } catch (e) {
        FS.handleFSError(e);
        return -1;
      }
    }function _write(fildes, buf, nbyte) {
      // ssize_t write(int fildes, const void *buf, size_t nbyte);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/write.html
      var stream = FS.getStream(fildes);
      if (!stream) {
        ___setErrNo(ERRNO_CODES.EBADF);
        return -1;
      }
      try {
        var slab = HEAP8;
        return FS.write(stream, slab, buf, nbyte);
      } catch (e) {
        FS.handleFSError(e);
        return -1;
      }
    }function _fwrite(ptr, size, nitems, stream) {
      // size_t fwrite(const void *restrict ptr, size_t size, size_t nitems, FILE *restrict stream);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/fwrite.html
      var bytesToWrite = nitems * size;
      if (bytesToWrite == 0) return 0;
      var bytesWritten = _write(stream, ptr, bytesToWrite);
      if (bytesWritten == -1) {
        var streamObj = FS.getStream(stream);
        if (streamObj) streamObj.error = true;
        return 0;
      } else {
        return Math.floor(bytesWritten / size);
      }
    }
  Module["_strlen"] = _strlen;
  function __reallyNegative(x) {
      return x < 0 || (x === 0 && (1/x) === -Infinity);
    }function __formatString(format, varargs) {
      var textIndex = format;
      var argIndex = 0;
      function getNextArg(type) {
        // NOTE: Explicitly ignoring type safety. Otherwise this fails:
        //       int x = 4; printf("%c\n", (char)x);
        var ret;
        if (type === 'double') {
          ret = HEAPF64[(((varargs)+(argIndex))>>3)];
        } else if (type == 'i64') {
          ret = [HEAP32[(((varargs)+(argIndex))>>2)],
                 HEAP32[(((varargs)+(argIndex+8))>>2)]];
          argIndex += 8; // each 32-bit chunk is in a 64-bit block
        } else {
          type = 'i32'; // varargs are always i32, i64, or double
          ret = HEAP32[(((varargs)+(argIndex))>>2)];
        }
        argIndex += Math.max(Runtime.getNativeFieldSize(type), Runtime.getAlignSize(type, null, true));
        return ret;
      }
      var ret = [];
      var curr, next, currArg;
      while(1) {
        var startTextIndex = textIndex;
        curr = HEAP8[(textIndex)];
        if (curr === 0) break;
        next = HEAP8[((textIndex+1)|0)];
        if (curr == 37) {
          // Handle flags.
          var flagAlwaysSigned = false;
          var flagLeftAlign = false;
          var flagAlternative = false;
          var flagZeroPad = false;
          var flagPadSign = false;
          flagsLoop: while (1) {
            switch (next) {
              case 43:
                flagAlwaysSigned = true;
                break;
              case 45:
                flagLeftAlign = true;
                break;
              case 35:
                flagAlternative = true;
                break;
              case 48:
                if (flagZeroPad) {
                  break flagsLoop;
                } else {
                  flagZeroPad = true;
                  break;
                }
              case 32:
                flagPadSign = true;
                break;
              default:
                break flagsLoop;
            }
            textIndex++;
            next = HEAP8[((textIndex+1)|0)];
          }
          // Handle width.
          var width = 0;
          if (next == 42) {
            width = getNextArg('i32');
            textIndex++;
            next = HEAP8[((textIndex+1)|0)];
          } else {
            while (next >= 48 && next <= 57) {
              width = width * 10 + (next - 48);
              textIndex++;
              next = HEAP8[((textIndex+1)|0)];
            }
          }
          // Handle precision.
          var precisionSet = false;
          if (next == 46) {
            var precision = 0;
            precisionSet = true;
            textIndex++;
            next = HEAP8[((textIndex+1)|0)];
            if (next == 42) {
              precision = getNextArg('i32');
              textIndex++;
            } else {
              while(1) {
                var precisionChr = HEAP8[((textIndex+1)|0)];
                if (precisionChr < 48 ||
                    precisionChr > 57) break;
                precision = precision * 10 + (precisionChr - 48);
                textIndex++;
              }
            }
            next = HEAP8[((textIndex+1)|0)];
          } else {
            var precision = 6; // Standard default.
          }
          // Handle integer sizes. WARNING: These assume a 32-bit architecture!
          var argSize;
          switch (String.fromCharCode(next)) {
            case 'h':
              var nextNext = HEAP8[((textIndex+2)|0)];
              if (nextNext == 104) {
                textIndex++;
                argSize = 1; // char (actually i32 in varargs)
              } else {
                argSize = 2; // short (actually i32 in varargs)
              }
              break;
            case 'l':
              var nextNext = HEAP8[((textIndex+2)|0)];
              if (nextNext == 108) {
                textIndex++;
                argSize = 8; // long long
              } else {
                argSize = 4; // long
              }
              break;
            case 'L': // long long
            case 'q': // int64_t
            case 'j': // intmax_t
              argSize = 8;
              break;
            case 'z': // size_t
            case 't': // ptrdiff_t
            case 'I': // signed ptrdiff_t or unsigned size_t
              argSize = 4;
              break;
            default:
              argSize = null;
          }
          if (argSize) textIndex++;
          next = HEAP8[((textIndex+1)|0)];
          // Handle type specifier.
          switch (String.fromCharCode(next)) {
            case 'd': case 'i': case 'u': case 'o': case 'x': case 'X': case 'p': {
              // Integer.
              var signed = next == 100 || next == 105;
              argSize = argSize || 4;
              var currArg = getNextArg('i' + (argSize * 8));
              var origArg = currArg;
              var argText;
              // Flatten i64-1 [low, high] into a (slightly rounded) double
              if (argSize == 8) {
                currArg = Runtime.makeBigInt(currArg[0], currArg[1], next == 117);
              }
              // Truncate to requested size.
              if (argSize <= 4) {
                var limit = Math.pow(256, argSize) - 1;
                currArg = (signed ? reSign : unSign)(currArg & limit, argSize * 8);
              }
              // Format the number.
              var currAbsArg = Math.abs(currArg);
              var prefix = '';
              if (next == 100 || next == 105) {
                if (argSize == 8 && i64Math) argText = i64Math.stringify(origArg[0], origArg[1], null); else
                argText = reSign(currArg, 8 * argSize, 1).toString(10);
              } else if (next == 117) {
                if (argSize == 8 && i64Math) argText = i64Math.stringify(origArg[0], origArg[1], true); else
                argText = unSign(currArg, 8 * argSize, 1).toString(10);
                currArg = Math.abs(currArg);
              } else if (next == 111) {
                argText = (flagAlternative ? '0' : '') + currAbsArg.toString(8);
              } else if (next == 120 || next == 88) {
                prefix = (flagAlternative && currArg != 0) ? '0x' : '';
                if (argSize == 8 && i64Math) {
                  if (origArg[1]) {
                    argText = (origArg[1]>>>0).toString(16);
                    var lower = (origArg[0]>>>0).toString(16);
                    while (lower.length < 8) lower = '0' + lower;
                    argText += lower;
                  } else {
                    argText = (origArg[0]>>>0).toString(16);
                  }
                } else
                if (currArg < 0) {
                  // Represent negative numbers in hex as 2's complement.
                  currArg = -currArg;
                  argText = (currAbsArg - 1).toString(16);
                  var buffer = [];
                  for (var i = 0; i < argText.length; i++) {
                    buffer.push((0xF - parseInt(argText[i], 16)).toString(16));
                  }
                  argText = buffer.join('');
                  while (argText.length < argSize * 2) argText = 'f' + argText;
                } else {
                  argText = currAbsArg.toString(16);
                }
                if (next == 88) {
                  prefix = prefix.toUpperCase();
                  argText = argText.toUpperCase();
                }
              } else if (next == 112) {
                if (currAbsArg === 0) {
                  argText = '(nil)';
                } else {
                  prefix = '0x';
                  argText = currAbsArg.toString(16);
                }
              }
              if (precisionSet) {
                while (argText.length < precision) {
                  argText = '0' + argText;
                }
              }
              // Add sign if needed
              if (currArg >= 0) {
                if (flagAlwaysSigned) {
                  prefix = '+' + prefix;
                } else if (flagPadSign) {
                  prefix = ' ' + prefix;
                }
              }
              // Move sign to prefix so we zero-pad after the sign
              if (argText.charAt(0) == '-') {
                prefix = '-' + prefix;
                argText = argText.substr(1);
              }
              // Add padding.
              while (prefix.length + argText.length < width) {
                if (flagLeftAlign) {
                  argText += ' ';
                } else {
                  if (flagZeroPad) {
                    argText = '0' + argText;
                  } else {
                    prefix = ' ' + prefix;
                  }
                }
              }
              // Insert the result into the buffer.
              argText = prefix + argText;
              argText.split('').forEach(function(chr) {
                ret.push(chr.charCodeAt(0));
              });
              break;
            }
            case 'f': case 'F': case 'e': case 'E': case 'g': case 'G': {
              // Float.
              var currArg = getNextArg('double');
              var argText;
              if (isNaN(currArg)) {
                argText = 'nan';
                flagZeroPad = false;
              } else if (!isFinite(currArg)) {
                argText = (currArg < 0 ? '-' : '') + 'inf';
                flagZeroPad = false;
              } else {
                var isGeneral = false;
                var effectivePrecision = Math.min(precision, 20);
                // Convert g/G to f/F or e/E, as per:
                // http://pubs.opengroup.org/onlinepubs/9699919799/functions/printf.html
                if (next == 103 || next == 71) {
                  isGeneral = true;
                  precision = precision || 1;
                  var exponent = parseInt(currArg.toExponential(effectivePrecision).split('e')[1], 10);
                  if (precision > exponent && exponent >= -4) {
                    next = ((next == 103) ? 'f' : 'F').charCodeAt(0);
                    precision -= exponent + 1;
                  } else {
                    next = ((next == 103) ? 'e' : 'E').charCodeAt(0);
                    precision--;
                  }
                  effectivePrecision = Math.min(precision, 20);
                }
                if (next == 101 || next == 69) {
                  argText = currArg.toExponential(effectivePrecision);
                  // Make sure the exponent has at least 2 digits.
                  if (/[eE][-+]\d$/.test(argText)) {
                    argText = argText.slice(0, -1) + '0' + argText.slice(-1);
                  }
                } else if (next == 102 || next == 70) {
                  argText = currArg.toFixed(effectivePrecision);
                  if (currArg === 0 && __reallyNegative(currArg)) {
                    argText = '-' + argText;
                  }
                }
                var parts = argText.split('e');
                if (isGeneral && !flagAlternative) {
                  // Discard trailing zeros and periods.
                  while (parts[0].length > 1 && parts[0].indexOf('.') != -1 &&
                         (parts[0].slice(-1) == '0' || parts[0].slice(-1) == '.')) {
                    parts[0] = parts[0].slice(0, -1);
                  }
                } else {
                  // Make sure we have a period in alternative mode.
                  if (flagAlternative && argText.indexOf('.') == -1) parts[0] += '.';
                  // Zero pad until required precision.
                  while (precision > effectivePrecision++) parts[0] += '0';
                }
                argText = parts[0] + (parts.length > 1 ? 'e' + parts[1] : '');
                // Capitalize 'E' if needed.
                if (next == 69) argText = argText.toUpperCase();
                // Add sign.
                if (currArg >= 0) {
                  if (flagAlwaysSigned) {
                    argText = '+' + argText;
                  } else if (flagPadSign) {
                    argText = ' ' + argText;
                  }
                }
              }
              // Add padding.
              while (argText.length < width) {
                if (flagLeftAlign) {
                  argText += ' ';
                } else {
                  if (flagZeroPad && (argText[0] == '-' || argText[0] == '+')) {
                    argText = argText[0] + '0' + argText.slice(1);
                  } else {
                    argText = (flagZeroPad ? '0' : ' ') + argText;
                  }
                }
              }
              // Adjust case.
              if (next < 97) argText = argText.toUpperCase();
              // Insert the result into the buffer.
              argText.split('').forEach(function(chr) {
                ret.push(chr.charCodeAt(0));
              });
              break;
            }
            case 's': {
              // String.
              var arg = getNextArg('i8*');
              var argLength = arg ? _strlen(arg) : '(null)'.length;
              if (precisionSet) argLength = Math.min(argLength, precision);
              if (!flagLeftAlign) {
                while (argLength < width--) {
                  ret.push(32);
                }
              }
              if (arg) {
                for (var i = 0; i < argLength; i++) {
                  ret.push(HEAPU8[((arg++)|0)]);
                }
              } else {
                ret = ret.concat(intArrayFromString('(null)'.substr(0, argLength), true));
              }
              if (flagLeftAlign) {
                while (argLength < width--) {
                  ret.push(32);
                }
              }
              break;
            }
            case 'c': {
              // Character.
              if (flagLeftAlign) ret.push(getNextArg('i8'));
              while (--width > 0) {
                ret.push(32);
              }
              if (!flagLeftAlign) ret.push(getNextArg('i8'));
              break;
            }
            case 'n': {
              // Write the length written so far to the next parameter.
              var ptr = getNextArg('i32*');
              HEAP32[((ptr)>>2)]=ret.length
              break;
            }
            case '%': {
              // Literal percent sign.
              ret.push(curr);
              break;
            }
            default: {
              // Unknown specifiers remain untouched.
              for (var i = startTextIndex; i < textIndex + 2; i++) {
                ret.push(HEAP8[(i)]);
              }
            }
          }
          textIndex += 2;
          // TODO: Support a/A (hex float) and m (last error) specifiers.
          // TODO: Support %1${specifier} for arg selection.
        } else {
          ret.push(curr);
          textIndex += 1;
        }
      }
      return ret;
    }function _fprintf(stream, format, varargs) {
      // int fprintf(FILE *restrict stream, const char *restrict format, ...);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/printf.html
      var result = __formatString(format, varargs);
      var stack = Runtime.stackSave();
      var ret = _fwrite(allocate(result, 'i8', ALLOC_STACK), 1, result.length, stream);
      Runtime.stackRestore(stack);
      return ret;
    }
  function __exit(status) {
      // void _exit(int status);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/exit.html
      Module['exit'](status);
    }function _exit(status) {
      __exit(status);
    }
  function _printf(format, varargs) {
      // int printf(const char *restrict format, ...);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/printf.html
      var stdout = HEAP32[((_stdout)>>2)];
      return _fprintf(stdout, format, varargs);
    }
  function _isupper(chr) {
      return chr >= 65 && chr <= 90;
    }
  function _strncmp(px, py, n) {
      var i = 0;
      while (i < n) {
        var x = HEAPU8[(((px)+(i))|0)];
        var y = HEAPU8[(((py)+(i))|0)];
        if (x == y && x == 0) return 0;
        if (x == 0) return -1;
        if (y == 0) return 1;
        if (x == y) {
          i ++;
          continue;
        } else {
          return x > y ? 1 : -1;
        }
      }
      return 0;
    }function _strcmp(px, py) {
      return _strncmp(px, py, TOTAL_MEMORY);
    }
  Module["_memcpy"] = _memcpy;var _llvm_memcpy_p0i8_p0i8_i32=_memcpy;
  Module["_strncpy"] = _strncpy;
  function _strchr(ptr, chr) {
      ptr--;
      do {
        ptr++;
        var val = HEAP8[(ptr)];
        if (val == chr) return ptr;
      } while (val);
      return 0;
    }
  Module["_strcpy"] = _strcpy;
  Module["_memset"] = _memset;var _llvm_memset_p0i8_i32=_memset;
  function _qsort(base, num, size, cmp) {
      if (num == 0 || size == 0) return;
      // forward calls to the JavaScript sort method
      // first, sort the items logically
      var keys = [];
      for (var i = 0; i < num; i++) keys.push(i);
      keys.sort(function(a, b) {
        return Module['dynCall_iii'](cmp, base+a*size, base+b*size);
      });
      // apply the sort
      var temp = _malloc(num*size);
      _memcpy(temp, base, num*size);
      for (var i = 0; i < num; i++) {
        if (keys[i] == i) continue; // already in place
        _memcpy(base+i*size, temp+keys[i]*size, size);
      }
      _free(temp);
    }
  function _isatty(fildes) {
      // int isatty(int fildes);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/isatty.html
      var stream = FS.getStream(fildes);
      if (!stream) {
        ___setErrNo(ERRNO_CODES.EBADF);
        return 0;
      }
      // HACK - implement tcgetattr
      if (!stream.tty) {
        ___setErrNo(ERRNO_CODES.ENOTTY);
        return 0;
      }
      return 1;
    }
  function _fileno(stream) {
      // int fileno(FILE *stream);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/fileno.html
      // We use file descriptor numbers and FILE* streams interchangeably.
      return stream;
    }
  function _strdup(ptr) {
      var len = _strlen(ptr);
      var newStr = _malloc(len + 1);
      (_memcpy(newStr, ptr, len)|0);
      HEAP8[(((newStr)+(len))|0)]=0;
      return newStr;
    }
  function _recv(fd, buf, len, flags) {
      var sock = SOCKFS.getSocket(fd);
      if (!sock) {
        ___setErrNo(ERRNO_CODES.EBADF);
        return -1;
      }
      // TODO honor flags
      return _read(fd, buf, len);
    }
  function _pread(fildes, buf, nbyte, offset) {
      // ssize_t pread(int fildes, void *buf, size_t nbyte, off_t offset);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/read.html
      var stream = FS.getStream(fildes);
      if (!stream) {
        ___setErrNo(ERRNO_CODES.EBADF);
        return -1;
      }
      try {
        var slab = HEAP8;
        return FS.read(stream, slab, buf, nbyte, offset);
      } catch (e) {
        FS.handleFSError(e);
        return -1;
      }
    }function _read(fildes, buf, nbyte) {
      // ssize_t read(int fildes, void *buf, size_t nbyte);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/read.html
      var stream = FS.getStream(fildes);
      if (!stream) {
        ___setErrNo(ERRNO_CODES.EBADF);
        return -1;
      }
      try {
        var slab = HEAP8;
        return FS.read(stream, slab, buf, nbyte);
      } catch (e) {
        FS.handleFSError(e);
        return -1;
      }
    }function _fread(ptr, size, nitems, stream) {
      // size_t fread(void *restrict ptr, size_t size, size_t nitems, FILE *restrict stream);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/fread.html
      var bytesToRead = nitems * size;
      if (bytesToRead == 0) {
        return 0;
      }
      var bytesRead = 0;
      var streamObj = FS.getStream(stream);
      if (!streamObj) {
        ___setErrNo(ERRNO_CODES.EBADF);
        return 0;
      }
      while (streamObj.ungotten.length && bytesToRead > 0) {
        HEAP8[((ptr++)|0)]=streamObj.ungotten.pop()
        bytesToRead--;
        bytesRead++;
      }
      var err = _read(stream, ptr, bytesToRead);
      if (err == -1) {
        if (streamObj) streamObj.error = true;
        return 0;
      }
      bytesRead += err;
      if (bytesRead < bytesToRead) streamObj.eof = true;
      return Math.floor(bytesRead / size);
    }function _fgetc(stream) {
      // int fgetc(FILE *stream);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/fgetc.html
      var streamObj = FS.getStream(stream);
      if (!streamObj) return -1;
      if (streamObj.eof || streamObj.error) return -1;
      var ret = _fread(_fgetc.ret, 1, 1, stream);
      if (ret == 0) {
        return -1;
      } else if (ret == -1) {
        streamObj.error = true;
        return -1;
      } else {
        return HEAPU8[((_fgetc.ret)|0)];
      }
    }var _getc=_fgetc;
  function _ferror(stream) {
      // int ferror(FILE *stream);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/ferror.html
      stream = FS.getStream(stream);
      return Number(stream && stream.error);
    }
  function _getrusage(resource, rlp) {
      // int getrusage(int resource, struct rusage *rlp);
      HEAP32[((rlp)>>2)]=1
      HEAP32[(((rlp)+(4))>>2)]=2
      HEAP32[(((rlp)+(8))>>2)]=3
      HEAP32[(((rlp)+(12))>>2)]=4
      return 0;
    }
  function _close(fildes) {
      // int close(int fildes);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/close.html
      var stream = FS.getStream(fildes);
      if (!stream) {
        ___setErrNo(ERRNO_CODES.EBADF);
        return -1;
      }
      try {
        FS.close(stream);
        return 0;
      } catch (e) {
        FS.handleFSError(e);
        return -1;
      }
    }
  function _fsync(fildes) {
      // int fsync(int fildes);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/fsync.html
      var stream = FS.getStream(fildes);
      if (stream) {
        // We write directly to the file system, so there's nothing to do here.
        return 0;
      } else {
        ___setErrNo(ERRNO_CODES.EBADF);
        return -1;
      }
    }function _fclose(stream) {
      // int fclose(FILE *stream);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/fclose.html
      _fsync(stream);
      return _close(stream);
    }
  var _llvm_va_start=undefined;
  function _snprintf(s, n, format, varargs) {
      // int snprintf(char *restrict s, size_t n, const char *restrict format, ...);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/printf.html
      var result = __formatString(format, varargs);
      var limit = (n === undefined) ? result.length
                                    : Math.min(result.length, Math.max(n - 1, 0));
      if (s < 0) {
        s = -s;
        var buf = _malloc(limit+1);
        HEAP32[((s)>>2)]=buf;
        s = buf;
      }
      for (var i = 0; i < limit; i++) {
        HEAP8[(((s)+(i))|0)]=result[i];
      }
      if (limit < n || (n === undefined)) HEAP8[(((s)+(i))|0)]=0;
      return result.length;
    }function _sprintf(s, format, varargs) {
      // int sprintf(char *restrict s, const char *restrict format, ...);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/printf.html
      return _snprintf(s, undefined, format, varargs);
    }
  function _vsprintf(s, format, va_arg) {
      return _sprintf(s, format, HEAP32[((va_arg)>>2)]);
    }
  Module["_strcat"] = _strcat;
  function _llvm_va_end() {}
  function _vfprintf(s, f, va_arg) {
      return _fprintf(s, f, HEAP32[((va_arg)>>2)]);
    }
  function ___errno_location() {
      return ___errno_state;
    }
  function _fputs(s, stream) {
      // int fputs(const char *restrict s, FILE *restrict stream);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/fputs.html
      return _write(stream, s, _strlen(s));
    }
  function _fputc(c, stream) {
      // int fputc(int c, FILE *stream);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/fputc.html
      var chr = unSign(c & 0xFF);
      HEAP8[((_fputc.ret)|0)]=chr
      var ret = _write(stream, _fputc.ret, 1);
      if (ret == -1) {
        var streamObj = FS.getStream(stream);
        if (streamObj) streamObj.error = true;
        return -1;
      } else {
        return chr;
      }
    }function _puts(s) {
      // int puts(const char *s);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/puts.html
      // NOTE: puts() always writes an extra newline.
      var stdout = HEAP32[((_stdout)>>2)];
      var ret = _fputs(s, stdout);
      if (ret < 0) {
        return ret;
      } else {
        var newlineRet = _fputc(10, stdout);
        return (newlineRet < 0) ? -1 : ret + 1;
      }
    }
  function _strerror_r(errnum, strerrbuf, buflen) {
      if (errnum in ERRNO_MESSAGES) {
        if (ERRNO_MESSAGES[errnum].length > buflen - 1) {
          return ___setErrNo(ERRNO_CODES.ERANGE);
        } else {
          var msg = ERRNO_MESSAGES[errnum];
          writeAsciiToMemory(msg, strerrbuf);
          return 0;
        }
      } else {
        return ___setErrNo(ERRNO_CODES.EINVAL);
      }
    }function _strerror(errnum) {
      if (!_strerror.buffer) _strerror.buffer = _malloc(256);
      _strerror_r(errnum, _strerror.buffer, 256);
      return _strerror.buffer;
    }function _perror(s) {
      // void perror(const char *s);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/perror.html
      var stdout = HEAP32[((_stdout)>>2)];
      if (s) {
        _fputs(s, stdout);
        _fputc(58, stdout);
        _fputc(32, stdout);
      }
      var errnum = HEAP32[((___errno_location())>>2)];
      _puts(_strerror(errnum));
    }
  function _isspace(chr) {
      return (chr == 32) || (chr >= 9 && chr <= 13);
    }
  function _open(path, oflag, varargs) {
      // int open(const char *path, int oflag, ...);
      // http://pubs.opengroup.org/onlinepubs/009695399/functions/open.html
      var mode = HEAP32[((varargs)>>2)];
      path = Pointer_stringify(path);
      try {
        var stream = FS.open(path, oflag, mode);
        return stream.fd;
      } catch (e) {
        FS.handleFSError(e);
        return -1;
      }
    }function _fopen(filename, mode) {
      // FILE *fopen(const char *restrict filename, const char *restrict mode);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/fopen.html
      var flags;
      mode = Pointer_stringify(mode);
      if (mode[0] == 'r') {
        if (mode.indexOf('+') != -1) {
          flags = 2;
        } else {
          flags = 0;
        }
      } else if (mode[0] == 'w') {
        if (mode.indexOf('+') != -1) {
          flags = 2;
        } else {
          flags = 1;
        }
        flags |= 64;
        flags |= 512;
      } else if (mode[0] == 'a') {
        if (mode.indexOf('+') != -1) {
          flags = 2;
        } else {
          flags = 1;
        }
        flags |= 64;
        flags |= 1024;
      } else {
        ___setErrNo(ERRNO_CODES.EINVAL);
        return 0;
      }
      var ret = _open(filename, flags, allocate([0x1FF, 0, 0, 0], 'i32', ALLOC_STACK));  // All creation permissions.
      return (ret == -1) ? 0 : ret;
    }
  function _strncat(pdest, psrc, num) {
      var len = _strlen(pdest);
      var i = 0;
      while(1) {
        HEAP8[((pdest+len+i)|0)]=HEAP8[((psrc+i)|0)];
        if (HEAP8[(((pdest)+(len+i))|0)] == 0) break;
        i ++;
        if (i == num) {
          HEAP8[(((pdest)+(len+i))|0)]=0
          break;
        }
      }
      return pdest;
    }
  function _srand(seed) {}
  function _rand() {
      return Math.floor(Math.random()*0x80000000);
    }
  function _abort() {
      Module['abort']();
    }
  function _strrchr(ptr, chr) {
      var ptr2 = ptr + _strlen(ptr);
      do {
        if (HEAP8[(ptr2)] == chr) return ptr2;
        ptr2--;
      } while (ptr2 >= ptr);
      return 0;
    }
  Module["_tolower"] = _tolower;
  function _isalpha(chr) {
      return (chr >= 97 && chr <= 122) ||
             (chr >= 65 && chr <= 90);
    }
  function _isdigit(chr) {
      return chr >= 48 && chr <= 57;
    }
  function _toupper(chr) {
      if (chr >= 97 && chr <= 122) {
        return chr - 97 + 65;
      } else {
        return chr;
      }
    }
  function __parseInt(str, endptr, base, min, max, bits, unsign) {
      // Skip space.
      while (_isspace(HEAP8[(str)])) str++;
      // Check for a plus/minus sign.
      var multiplier = 1;
      if (HEAP8[(str)] == 45) {
        multiplier = -1;
        str++;
      } else if (HEAP8[(str)] == 43) {
        str++;
      }
      // Find base.
      var finalBase = base;
      if (!finalBase) {
        if (HEAP8[(str)] == 48) {
          if (HEAP8[((str+1)|0)] == 120 ||
              HEAP8[((str+1)|0)] == 88) {
            finalBase = 16;
            str += 2;
          } else {
            finalBase = 8;
            str++;
          }
        }
      } else if (finalBase==16) {
        if (HEAP8[(str)] == 48) {
          if (HEAP8[((str+1)|0)] == 120 ||
              HEAP8[((str+1)|0)] == 88) {
            str += 2;
          }
        }
      }
      if (!finalBase) finalBase = 10;
      // Get digits.
      var chr;
      var ret = 0;
      while ((chr = HEAP8[(str)]) != 0) {
        var digit = parseInt(String.fromCharCode(chr), finalBase);
        if (isNaN(digit)) {
          break;
        } else {
          ret = ret * finalBase + digit;
          str++;
        }
      }
      // Apply sign.
      ret *= multiplier;
      // Set end pointer.
      if (endptr) {
        HEAP32[((endptr)>>2)]=str
      }
      // Unsign if needed.
      if (unsign) {
        if (Math.abs(ret) > max) {
          ret = max;
          ___setErrNo(ERRNO_CODES.ERANGE);
        } else {
          ret = unSign(ret, bits);
        }
      }
      // Validate range.
      if (ret > max || ret < min) {
        ret = ret > max ? max : min;
        ___setErrNo(ERRNO_CODES.ERANGE);
      }
      if (bits == 64) {
        return ((asm["setTempRet0"]((tempDouble=ret,(+(Math_abs(tempDouble))) >= (+1) ? (tempDouble > (+0) ? ((Math_min((+(Math_floor((tempDouble)/(+4294967296)))), (+4294967295)))|0)>>>0 : (~~((+(Math_ceil((tempDouble - +(((~~(tempDouble)))>>>0))/(+4294967296))))))>>>0) : 0)),ret>>>0)|0);
      }
      return ret;
    }function _strtol(str, endptr, base) {
      return __parseInt(str, endptr, base, -2147483648, 2147483647, 32);  // LONG_MIN, LONG_MAX.
    }function _atoi(ptr) {
      return _strtol(ptr, null, 10);
    }
  function _isalnum(chr) {
      return (chr >= 48 && chr <= 57) ||
             (chr >= 97 && chr <= 122) ||
             (chr >= 65 && chr <= 90);
    }
  var ___strtok_state=0;
  function _strtok_r(s, delim, lasts) {
      var skip_leading_delim = 1;
      var spanp;
      var c, sc;
      var tok;
      if (s == 0 && (s = getValue(lasts, 'i8*')) == 0) {
        return 0;
      }
      cont: while (1) {
        c = getValue(s++, 'i8');
        for (spanp = delim; (sc = getValue(spanp++, 'i8')) != 0;) {
          if (c == sc) {
            if (skip_leading_delim) {
              continue cont;
            } else {
              setValue(lasts, s, 'i8*');
              setValue(s - 1, 0, 'i8');
              return s - 1;
            }
          }
        }
        break;
      }
      if (c == 0) {
        setValue(lasts, 0, 'i8*');
        return 0;
      }
      tok = s - 1;
      for (;;) {
        c = getValue(s++, 'i8');
        spanp = delim;
        do {
          if ((sc = getValue(spanp++, 'i8')) == c) {
            if (c == 0) {
              s = 0;
            } else {
              setValue(s - 1, 0, 'i8');
            }
            setValue(lasts, s, 'i8*');
            return tok;
          }
        } while (sc != 0);
      }
      abort('strtok_r error!');
    }function _strtok(s, delim) {
      return _strtok_r(s, delim, ___strtok_state);
    }
  function _sbrk(bytes) {
      // Implement a Linux-like 'memory area' for our 'process'.
      // Changes the size of the memory area by |bytes|; returns the
      // address of the previous top ('break') of the memory area
      // We control the "dynamic" memory - DYNAMIC_BASE to DYNAMICTOP
      var self = _sbrk;
      if (!self.called) {
        DYNAMICTOP = alignMemoryPage(DYNAMICTOP); // make sure we start out aligned
        self.called = true;
        assert(Runtime.dynamicAlloc);
        self.alloc = Runtime.dynamicAlloc;
        Runtime.dynamicAlloc = function() { abort('cannot dynamically allocate, sbrk now has control') };
      }
      var ret = DYNAMICTOP;
      if (bytes != 0) self.alloc(bytes);
      return ret;  // Previous break location.
    }
  function _sysconf(name) {
      // long sysconf(int name);
      // http://pubs.opengroup.org/onlinepubs/009695399/functions/sysconf.html
      switch(name) {
        case 30: return PAGE_SIZE;
        case 132:
        case 133:
        case 12:
        case 137:
        case 138:
        case 15:
        case 235:
        case 16:
        case 17:
        case 18:
        case 19:
        case 20:
        case 149:
        case 13:
        case 10:
        case 236:
        case 153:
        case 9:
        case 21:
        case 22:
        case 159:
        case 154:
        case 14:
        case 77:
        case 78:
        case 139:
        case 80:
        case 81:
        case 79:
        case 82:
        case 68:
        case 67:
        case 164:
        case 11:
        case 29:
        case 47:
        case 48:
        case 95:
        case 52:
        case 51:
        case 46:
          return 200809;
        case 27:
        case 246:
        case 127:
        case 128:
        case 23:
        case 24:
        case 160:
        case 161:
        case 181:
        case 182:
        case 242:
        case 183:
        case 184:
        case 243:
        case 244:
        case 245:
        case 165:
        case 178:
        case 179:
        case 49:
        case 50:
        case 168:
        case 169:
        case 175:
        case 170:
        case 171:
        case 172:
        case 97:
        case 76:
        case 32:
        case 173:
        case 35:
          return -1;
        case 176:
        case 177:
        case 7:
        case 155:
        case 8:
        case 157:
        case 125:
        case 126:
        case 92:
        case 93:
        case 129:
        case 130:
        case 131:
        case 94:
        case 91:
          return 1;
        case 74:
        case 60:
        case 69:
        case 70:
        case 4:
          return 1024;
        case 31:
        case 42:
        case 72:
          return 32;
        case 87:
        case 26:
        case 33:
          return 2147483647;
        case 34:
        case 1:
          return 47839;
        case 38:
        case 36:
          return 99;
        case 43:
        case 37:
          return 2048;
        case 0: return 2097152;
        case 3: return 65536;
        case 28: return 32768;
        case 44: return 32767;
        case 75: return 16384;
        case 39: return 1000;
        case 89: return 700;
        case 71: return 256;
        case 40: return 255;
        case 2: return 100;
        case 180: return 64;
        case 25: return 20;
        case 5: return 16;
        case 6: return 6;
        case 73: return 4;
        case 84: return 1;
      }
      ___setErrNo(ERRNO_CODES.EINVAL);
      return -1;
    }
  function _time(ptr) {
      var ret = Math.floor(Date.now()/1000);
      if (ptr) {
        HEAP32[((ptr)>>2)]=ret
      }
      return ret;
    }
  var Browser={mainLoop:{scheduler:null,shouldPause:false,paused:false,queue:[],pause:function () {
          Browser.mainLoop.shouldPause = true;
        },resume:function () {
          if (Browser.mainLoop.paused) {
            Browser.mainLoop.paused = false;
            Browser.mainLoop.scheduler();
          }
          Browser.mainLoop.shouldPause = false;
        },updateStatus:function () {
          if (Module['setStatus']) {
            var message = Module['statusMessage'] || 'Please wait...';
            var remaining = Browser.mainLoop.remainingBlockers;
            var expected = Browser.mainLoop.expectedBlockers;
            if (remaining) {
              if (remaining < expected) {
                Module['setStatus'](message + ' (' + (expected - remaining) + '/' + expected + ')');
              } else {
                Module['setStatus'](message);
              }
            } else {
              Module['setStatus']('');
            }
          }
        }},isFullScreen:false,pointerLock:false,moduleContextCreatedCallbacks:[],workers:[],init:function () {
        if (!Module["preloadPlugins"]) Module["preloadPlugins"] = []; // needs to exist even in workers
        if (Browser.initted || ENVIRONMENT_IS_WORKER) return;
        Browser.initted = true;
        try {
          new Blob();
          Browser.hasBlobConstructor = true;
        } catch(e) {
          Browser.hasBlobConstructor = false;
          console.log("warning: no blob constructor, cannot create blobs with mimetypes");
        }
        Browser.BlobBuilder = typeof MozBlobBuilder != "undefined" ? MozBlobBuilder : (typeof WebKitBlobBuilder != "undefined" ? WebKitBlobBuilder : (!Browser.hasBlobConstructor ? console.log("warning: no BlobBuilder") : null));
        Browser.URLObject = typeof window != "undefined" ? (window.URL ? window.URL : window.webkitURL) : undefined;
        if (!Module.noImageDecoding && typeof Browser.URLObject === 'undefined') {
          console.log("warning: Browser does not support creating object URLs. Built-in browser image decoding will not be available.");
          Module.noImageDecoding = true;
        }
        // Support for plugins that can process preloaded files. You can add more of these to
        // your app by creating and appending to Module.preloadPlugins.
        //
        // Each plugin is asked if it can handle a file based on the file's name. If it can,
        // it is given the file's raw data. When it is done, it calls a callback with the file's
        // (possibly modified) data. For example, a plugin might decompress a file, or it
        // might create some side data structure for use later (like an Image element, etc.).
        var imagePlugin = {};
        imagePlugin['canHandle'] = function imagePlugin_canHandle(name) {
          return !Module.noImageDecoding && /\.(jpg|jpeg|png|bmp)$/i.test(name);
        };
        imagePlugin['handle'] = function imagePlugin_handle(byteArray, name, onload, onerror) {
          var b = null;
          if (Browser.hasBlobConstructor) {
            try {
              b = new Blob([byteArray], { type: Browser.getMimetype(name) });
              if (b.size !== byteArray.length) { // Safari bug #118630
                // Safari's Blob can only take an ArrayBuffer
                b = new Blob([(new Uint8Array(byteArray)).buffer], { type: Browser.getMimetype(name) });
              }
            } catch(e) {
              Runtime.warnOnce('Blob constructor present but fails: ' + e + '; falling back to blob builder');
            }
          }
          if (!b) {
            var bb = new Browser.BlobBuilder();
            bb.append((new Uint8Array(byteArray)).buffer); // we need to pass a buffer, and must copy the array to get the right data range
            b = bb.getBlob();
          }
          var url = Browser.URLObject.createObjectURL(b);
          var img = new Image();
          img.onload = function img_onload() {
            assert(img.complete, 'Image ' + name + ' could not be decoded');
            var canvas = document.createElement('canvas');
            canvas.width = img.width;
            canvas.height = img.height;
            var ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0);
            Module["preloadedImages"][name] = canvas;
            Browser.URLObject.revokeObjectURL(url);
            if (onload) onload(byteArray);
          };
          img.onerror = function img_onerror(event) {
            console.log('Image ' + url + ' could not be decoded');
            if (onerror) onerror();
          };
          img.src = url;
        };
        Module['preloadPlugins'].push(imagePlugin);
        var audioPlugin = {};
        audioPlugin['canHandle'] = function audioPlugin_canHandle(name) {
          return !Module.noAudioDecoding && name.substr(-4) in { '.ogg': 1, '.wav': 1, '.mp3': 1 };
        };
        audioPlugin['handle'] = function audioPlugin_handle(byteArray, name, onload, onerror) {
          var done = false;
          function finish(audio) {
            if (done) return;
            done = true;
            Module["preloadedAudios"][name] = audio;
            if (onload) onload(byteArray);
          }
          function fail() {
            if (done) return;
            done = true;
            Module["preloadedAudios"][name] = new Audio(); // empty shim
            if (onerror) onerror();
          }
          if (Browser.hasBlobConstructor) {
            try {
              var b = new Blob([byteArray], { type: Browser.getMimetype(name) });
            } catch(e) {
              return fail();
            }
            var url = Browser.URLObject.createObjectURL(b); // XXX we never revoke this!
            var audio = new Audio();
            audio.addEventListener('canplaythrough', function() { finish(audio) }, false); // use addEventListener due to chromium bug 124926
            audio.onerror = function audio_onerror(event) {
              if (done) return;
              console.log('warning: browser could not fully decode audio ' + name + ', trying slower base64 approach');
              function encode64(data) {
                var BASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
                var PAD = '=';
                var ret = '';
                var leftchar = 0;
                var leftbits = 0;
                for (var i = 0; i < data.length; i++) {
                  leftchar = (leftchar << 8) | data[i];
                  leftbits += 8;
                  while (leftbits >= 6) {
                    var curr = (leftchar >> (leftbits-6)) & 0x3f;
                    leftbits -= 6;
                    ret += BASE[curr];
                  }
                }
                if (leftbits == 2) {
                  ret += BASE[(leftchar&3) << 4];
                  ret += PAD + PAD;
                } else if (leftbits == 4) {
                  ret += BASE[(leftchar&0xf) << 2];
                  ret += PAD;
                }
                return ret;
              }
              audio.src = 'data:audio/x-' + name.substr(-3) + ';base64,' + encode64(byteArray);
              finish(audio); // we don't wait for confirmation this worked - but it's worth trying
            };
            audio.src = url;
            // workaround for chrome bug 124926 - we do not always get oncanplaythrough or onerror
            Browser.safeSetTimeout(function() {
              finish(audio); // try to use it even though it is not necessarily ready to play
            }, 10000);
          } else {
            return fail();
          }
        };
        Module['preloadPlugins'].push(audioPlugin);
        // Canvas event setup
        var canvas = Module['canvas'];
        canvas.requestPointerLock = canvas['requestPointerLock'] ||
                                    canvas['mozRequestPointerLock'] ||
                                    canvas['webkitRequestPointerLock'];
        canvas.exitPointerLock = document['exitPointerLock'] ||
                                 document['mozExitPointerLock'] ||
                                 document['webkitExitPointerLock'] ||
                                 function(){}; // no-op if function does not exist
        canvas.exitPointerLock = canvas.exitPointerLock.bind(document);
        function pointerLockChange() {
          Browser.pointerLock = document['pointerLockElement'] === canvas ||
                                document['mozPointerLockElement'] === canvas ||
                                document['webkitPointerLockElement'] === canvas;
        }
        document.addEventListener('pointerlockchange', pointerLockChange, false);
        document.addEventListener('mozpointerlockchange', pointerLockChange, false);
        document.addEventListener('webkitpointerlockchange', pointerLockChange, false);
        if (Module['elementPointerLock']) {
          canvas.addEventListener("click", function(ev) {
            if (!Browser.pointerLock && canvas.requestPointerLock) {
              canvas.requestPointerLock();
              ev.preventDefault();
            }
          }, false);
        }
      },createContext:function (canvas, useWebGL, setInModule, webGLContextAttributes) {
        var ctx;
        try {
          if (useWebGL) {
            var contextAttributes = {
              antialias: false,
              alpha: false
            };
            if (webGLContextAttributes) {
              for (var attribute in webGLContextAttributes) {
                contextAttributes[attribute] = webGLContextAttributes[attribute];
              }
            }
            var errorInfo = '?';
            function onContextCreationError(event) {
              errorInfo = event.statusMessage || errorInfo;
            }
            canvas.addEventListener('webglcontextcreationerror', onContextCreationError, false);
            try {
              ['experimental-webgl', 'webgl'].some(function(webglId) {
                return ctx = canvas.getContext(webglId, contextAttributes);
              });
            } finally {
              canvas.removeEventListener('webglcontextcreationerror', onContextCreationError, false);
            }
          } else {
            ctx = canvas.getContext('2d');
          }
          if (!ctx) throw ':(';
        } catch (e) {
          Module.print('Could not create canvas: ' + [errorInfo, e]);
          return null;
        }
        if (useWebGL) {
          // Set the background of the WebGL canvas to black
          canvas.style.backgroundColor = "black";
          // Warn on context loss
          canvas.addEventListener('webglcontextlost', function(event) {
            alert('WebGL context lost. You will need to reload the page.');
          }, false);
        }
        if (setInModule) {
          Module.ctx = ctx;
          Module.useWebGL = useWebGL;
          Browser.moduleContextCreatedCallbacks.forEach(function(callback) { callback() });
          Browser.init();
        }
        return ctx;
      },destroyContext:function (canvas, useWebGL, setInModule) {},fullScreenHandlersInstalled:false,lockPointer:undefined,resizeCanvas:undefined,requestFullScreen:function (lockPointer, resizeCanvas) {
        Browser.lockPointer = lockPointer;
        Browser.resizeCanvas = resizeCanvas;
        if (typeof Browser.lockPointer === 'undefined') Browser.lockPointer = true;
        if (typeof Browser.resizeCanvas === 'undefined') Browser.resizeCanvas = false;
        var canvas = Module['canvas'];
        function fullScreenChange() {
          Browser.isFullScreen = false;
          if ((document['webkitFullScreenElement'] || document['webkitFullscreenElement'] ||
               document['mozFullScreenElement'] || document['mozFullscreenElement'] ||
               document['fullScreenElement'] || document['fullscreenElement']) === canvas) {
            canvas.cancelFullScreen = document['cancelFullScreen'] ||
                                      document['mozCancelFullScreen'] ||
                                      document['webkitCancelFullScreen'];
            canvas.cancelFullScreen = canvas.cancelFullScreen.bind(document);
            if (Browser.lockPointer) canvas.requestPointerLock();
            Browser.isFullScreen = true;
            if (Browser.resizeCanvas) Browser.setFullScreenCanvasSize();
          } else if (Browser.resizeCanvas){
            Browser.setWindowedCanvasSize();
          }
          if (Module['onFullScreen']) Module['onFullScreen'](Browser.isFullScreen);
        }
        if (!Browser.fullScreenHandlersInstalled) {
          Browser.fullScreenHandlersInstalled = true;
          document.addEventListener('fullscreenchange', fullScreenChange, false);
          document.addEventListener('mozfullscreenchange', fullScreenChange, false);
          document.addEventListener('webkitfullscreenchange', fullScreenChange, false);
        }
        canvas.requestFullScreen = canvas['requestFullScreen'] ||
                                   canvas['mozRequestFullScreen'] ||
                                   (canvas['webkitRequestFullScreen'] ? function() { canvas['webkitRequestFullScreen'](Element['ALLOW_KEYBOARD_INPUT']) } : null);
        canvas.requestFullScreen();
      },requestAnimationFrame:function requestAnimationFrame(func) {
        if (typeof window === 'undefined') { // Provide fallback to setTimeout if window is undefined (e.g. in Node.js)
          setTimeout(func, 1000/60);
        } else {
          if (!window.requestAnimationFrame) {
            window.requestAnimationFrame = window['requestAnimationFrame'] ||
                                           window['mozRequestAnimationFrame'] ||
                                           window['webkitRequestAnimationFrame'] ||
                                           window['msRequestAnimationFrame'] ||
                                           window['oRequestAnimationFrame'] ||
                                           window['setTimeout'];
          }
          window.requestAnimationFrame(func);
        }
      },safeCallback:function (func) {
        return function() {
          if (!ABORT) return func.apply(null, arguments);
        };
      },safeRequestAnimationFrame:function (func) {
        return Browser.requestAnimationFrame(function() {
          if (!ABORT) func();
        });
      },safeSetTimeout:function (func, timeout) {
        return setTimeout(function() {
          if (!ABORT) func();
        }, timeout);
      },safeSetInterval:function (func, timeout) {
        return setInterval(function() {
          if (!ABORT) func();
        }, timeout);
      },getMimetype:function (name) {
        return {
          'jpg': 'image/jpeg',
          'jpeg': 'image/jpeg',
          'png': 'image/png',
          'bmp': 'image/bmp',
          'ogg': 'audio/ogg',
          'wav': 'audio/wav',
          'mp3': 'audio/mpeg'
        }[name.substr(name.lastIndexOf('.')+1)];
      },getUserMedia:function (func) {
        if(!window.getUserMedia) {
          window.getUserMedia = navigator['getUserMedia'] ||
                                navigator['mozGetUserMedia'];
        }
        window.getUserMedia(func);
      },getMovementX:function (event) {
        return event['movementX'] ||
               event['mozMovementX'] ||
               event['webkitMovementX'] ||
               0;
      },getMovementY:function (event) {
        return event['movementY'] ||
               event['mozMovementY'] ||
               event['webkitMovementY'] ||
               0;
      },mouseX:0,mouseY:0,mouseMovementX:0,mouseMovementY:0,calculateMouseEvent:function (event) { // event should be mousemove, mousedown or mouseup
        if (Browser.pointerLock) {
          // When the pointer is locked, calculate the coordinates
          // based on the movement of the mouse.
          // Workaround for Firefox bug 764498
          if (event.type != 'mousemove' &&
              ('mozMovementX' in event)) {
            Browser.mouseMovementX = Browser.mouseMovementY = 0;
          } else {
            Browser.mouseMovementX = Browser.getMovementX(event);
            Browser.mouseMovementY = Browser.getMovementY(event);
          }
          // check if SDL is available
          if (typeof SDL != "undefined") {
          	Browser.mouseX = SDL.mouseX + Browser.mouseMovementX;
          	Browser.mouseY = SDL.mouseY + Browser.mouseMovementY;
          } else {
          	// just add the mouse delta to the current absolut mouse position
          	// FIXME: ideally this should be clamped against the canvas size and zero
          	Browser.mouseX += Browser.mouseMovementX;
          	Browser.mouseY += Browser.mouseMovementY;
          }        
        } else {
          // Otherwise, calculate the movement based on the changes
          // in the coordinates.
          var rect = Module["canvas"].getBoundingClientRect();
          var x, y;
          if (event.type == 'touchstart' ||
              event.type == 'touchend' ||
              event.type == 'touchmove') {
            var t = event.touches.item(0);
            if (t) {
              x = t.pageX - (window.scrollX + rect.left);
              y = t.pageY - (window.scrollY + rect.top);
            } else {
              return;
            }
          } else {
            x = event.pageX - (window.scrollX + rect.left);
            y = event.pageY - (window.scrollY + rect.top);
          }
          // the canvas might be CSS-scaled compared to its backbuffer;
          // SDL-using content will want mouse coordinates in terms
          // of backbuffer units.
          var cw = Module["canvas"].width;
          var ch = Module["canvas"].height;
          x = x * (cw / rect.width);
          y = y * (ch / rect.height);
          Browser.mouseMovementX = x - Browser.mouseX;
          Browser.mouseMovementY = y - Browser.mouseY;
          Browser.mouseX = x;
          Browser.mouseY = y;
        }
      },xhrLoad:function (url, onload, onerror) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = 'arraybuffer';
        xhr.onload = function xhr_onload() {
          if (xhr.status == 200 || (xhr.status == 0 && xhr.response)) { // file URLs can return 0
            onload(xhr.response);
          } else {
            onerror();
          }
        };
        xhr.onerror = onerror;
        xhr.send(null);
      },asyncLoad:function (url, onload, onerror, noRunDep) {
        Browser.xhrLoad(url, function(arrayBuffer) {
          assert(arrayBuffer, 'Loading data file "' + url + '" failed (no arrayBuffer).');
          onload(new Uint8Array(arrayBuffer));
          if (!noRunDep) removeRunDependency('al ' + url);
        }, function(event) {
          if (onerror) {
            onerror();
          } else {
            throw 'Loading data file "' + url + '" failed.';
          }
        });
        if (!noRunDep) addRunDependency('al ' + url);
      },resizeListeners:[],updateResizeListeners:function () {
        var canvas = Module['canvas'];
        Browser.resizeListeners.forEach(function(listener) {
          listener(canvas.width, canvas.height);
        });
      },setCanvasSize:function (width, height, noUpdates) {
        var canvas = Module['canvas'];
        canvas.width = width;
        canvas.height = height;
        if (!noUpdates) Browser.updateResizeListeners();
      },windowedWidth:0,windowedHeight:0,setFullScreenCanvasSize:function () {
        var canvas = Module['canvas'];
        this.windowedWidth = canvas.width;
        this.windowedHeight = canvas.height;
        canvas.width = screen.width;
        canvas.height = screen.height;
        // check if SDL is available   
        if (typeof SDL != "undefined") {
        	var flags = HEAPU32[((SDL.screen+Runtime.QUANTUM_SIZE*0)>>2)];
        	flags = flags | 0x00800000; // set SDL_FULLSCREEN flag
        	HEAP32[((SDL.screen+Runtime.QUANTUM_SIZE*0)>>2)]=flags
        }
        Browser.updateResizeListeners();
      },setWindowedCanvasSize:function () {
        var canvas = Module['canvas'];
        canvas.width = this.windowedWidth;
        canvas.height = this.windowedHeight;
        // check if SDL is available       
        if (typeof SDL != "undefined") {
        	var flags = HEAPU32[((SDL.screen+Runtime.QUANTUM_SIZE*0)>>2)];
        	flags = flags & ~0x00800000; // clear SDL_FULLSCREEN flag
        	HEAP32[((SDL.screen+Runtime.QUANTUM_SIZE*0)>>2)]=flags
        }
        Browser.updateResizeListeners();
      }};
FS.staticInit();__ATINIT__.unshift({ func: function() { if (!Module["noFSInit"] && !FS.init.initialized) FS.init() } });__ATMAIN__.push({ func: function() { FS.ignorePermissions = false } });__ATEXIT__.push({ func: function() { FS.quit() } });Module["FS_createFolder"] = FS.createFolder;Module["FS_createPath"] = FS.createPath;Module["FS_createDataFile"] = FS.createDataFile;Module["FS_createPreloadedFile"] = FS.createPreloadedFile;Module["FS_createLazyFile"] = FS.createLazyFile;Module["FS_createLink"] = FS.createLink;Module["FS_createDevice"] = FS.createDevice;
___errno_state = Runtime.staticAlloc(4); HEAP32[((___errno_state)>>2)]=0;
__ATINIT__.unshift({ func: function() { TTY.init() } });__ATEXIT__.push({ func: function() { TTY.shutdown() } });TTY.utf8 = new Runtime.UTF8Processor();
if (ENVIRONMENT_IS_NODE) { var fs = require("fs"); NODEFS.staticInit(); }
__ATINIT__.push({ func: function() { SOCKFS.root = FS.mount(SOCKFS, {}, null); } });
_fgetc.ret = allocate([0], "i8", ALLOC_STATIC);
_fputc.ret = allocate([0], "i8", ALLOC_STATIC);
___strtok_state = Runtime.staticAlloc(4);
Module["requestFullScreen"] = function Module_requestFullScreen(lockPointer, resizeCanvas) { Browser.requestFullScreen(lockPointer, resizeCanvas) };
  Module["requestAnimationFrame"] = function Module_requestAnimationFrame(func) { Browser.requestAnimationFrame(func) };
  Module["setCanvasSize"] = function Module_setCanvasSize(width, height, noUpdates) { Browser.setCanvasSize(width, height, noUpdates) };
  Module["pauseMainLoop"] = function Module_pauseMainLoop() { Browser.mainLoop.pause() };
  Module["resumeMainLoop"] = function Module_resumeMainLoop() { Browser.mainLoop.resume() };
  Module["getUserMedia"] = function Module_getUserMedia() { Browser.getUserMedia() }
STACK_BASE = STACKTOP = Runtime.alignMemory(STATICTOP);
staticSealed = true; // seal the static portion of memory
STACK_MAX = STACK_BASE + 5242880;
DYNAMIC_BASE = DYNAMICTOP = Runtime.alignMemory(STACK_MAX);
assert(DYNAMIC_BASE < TOTAL_MEMORY, "TOTAL_MEMORY not big enough for stack");
var Math_min = Math.min;
function invoke_iiii(index,a1,a2,a3) {
  try {
    return Module["dynCall_iiii"](index,a1,a2,a3);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_vi(index,a1) {
  try {
    Module["dynCall_vi"](index,a1);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_ii(index,a1) {
  try {
    return Module["dynCall_ii"](index,a1);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_v(index) {
  try {
    Module["dynCall_v"](index);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_iii(index,a1,a2) {
  try {
    return Module["dynCall_iii"](index,a1,a2);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function asmPrintInt(x, y) {
  Module.print('int ' + x + ',' + y);// + ' ' + new Error().stack);
}
function asmPrintFloat(x, y) {
  Module.print('float ' + x + ',' + y);// + ' ' + new Error().stack);
}
// EMSCRIPTEN_START_ASM
var asm=(function(global,env,buffer){"use asm";var a=new global.Int8Array(buffer);var b=new global.Int16Array(buffer);var c=new global.Int32Array(buffer);var d=new global.Uint8Array(buffer);var e=new global.Uint16Array(buffer);var f=new global.Uint32Array(buffer);var g=new global.Float32Array(buffer);var h=new global.Float64Array(buffer);var i=env.STACKTOP|0;var j=env.STACK_MAX|0;var k=env.tempDoublePtr|0;var l=env.ABORT|0;var m=env._stdin|0;var n=env._stderr|0;var o=env._stdout|0;var p=+env.NaN;var q=+env.Infinity;var r=0;var s=0;var t=0;var u=0;var v=0,w=0,x=0,y=0,z=0.0,A=0,B=0,C=0,D=0.0;var E=0;var F=0;var G=0;var H=0;var I=0;var J=0;var K=0;var L=0;var M=0;var N=0;var O=global.Math.floor;var P=global.Math.abs;var Q=global.Math.sqrt;var R=global.Math.pow;var S=global.Math.cos;var T=global.Math.sin;var U=global.Math.tan;var V=global.Math.acos;var W=global.Math.asin;var X=global.Math.atan;var Y=global.Math.atan2;var Z=global.Math.exp;var _=global.Math.log;var $=global.Math.ceil;var aa=global.Math.imul;var ab=env.abort;var ac=env.assert;var ad=env.asmPrintInt;var ae=env.asmPrintFloat;var af=env.min;var ag=env.invoke_iiii;var ah=env.invoke_vi;var ai=env.invoke_ii;var aj=env.invoke_v;var ak=env.invoke_iii;var al=env._strncmp;var am=env._llvm_va_end;var an=env._snprintf;var ao=env._rand;var ap=env._fgetc;var aq=env._fclose;var ar=env._strtok_r;var as=env._isdigit;var at=env._abort;var au=env._fprintf;var av=env._toupper;var aw=env._printf;var ax=env._close;var ay=env._pread;var az=env._fflush;var aA=env._fopen;var aB=env.__reallyNegative;var aC=env._strchr;var aD=env._fputc;var aE=env._sysconf;var aF=env._puts;var aG=env._strtol;var aH=env.___setErrNo;var aI=env._fwrite;var aJ=env._qsort;var aK=env._send;var aL=env._write;var aM=env._fputs;var aN=env._isalpha;var aO=env._exit;var aP=env._sprintf;var aQ=env._strrchr;var aR=env._strdup;var aS=env._srand;var aT=env._isspace;var aU=env._strncat;var aV=env._fread;var aW=env._isatty;var aX=env._read;var aY=env._ferror;var aZ=env.__formatString;var a_=env._atoi;var a$=env._vfprintf;var a0=env._recv;var a1=env._fileno;var a2=env._pwrite;var a3=env._perror;var a4=env._isalnum;var a5=env._fsync;var a6=env._strerror_r;var a7=env._strtok;var a8=env.___errno_location;var a9=env._strerror;var ba=env._getrusage;var bb=env._open;var bc=env._sbrk;var bd=env.__parseInt;var be=env._time;var bf=env.__exit;var bg=env._isupper;var bh=env._vsprintf;var bi=env._strcmp;var bj=0.0;
// EMSCRIPTEN_START_FUNCS
function bp(a){a=a|0;var b=0;b=i;i=i+a|0;i=i+7&-8;return b|0}function bq(){return i|0}function br(a){a=a|0;i=a}function bs(a,b){a=a|0;b=b|0;if((r|0)==0){r=a;s=b}}function bt(b){b=b|0;a[k]=a[b];a[k+1|0]=a[b+1|0];a[k+2|0]=a[b+2|0];a[k+3|0]=a[b+3|0]}function bu(b){b=b|0;a[k]=a[b];a[k+1|0]=a[b+1|0];a[k+2|0]=a[b+2|0];a[k+3|0]=a[b+3|0];a[k+4|0]=a[b+4|0];a[k+5|0]=a[b+5|0];a[k+6|0]=a[b+6|0];a[k+7|0]=a[b+7|0]}function bv(a){a=a|0;E=a}function bw(a){a=a|0;F=a}function bx(a){a=a|0;G=a}function by(a){a=a|0;H=a}function bz(a){a=a|0;I=a}function bA(a){a=a|0;J=a}function bB(a){a=a|0;K=a}function bC(a){a=a|0;L=a}function bD(a){a=a|0;M=a}function bE(a){a=a|0;N=a}function bF(){}function bG(){var a=0,b=0;a=i;c[27462]=g1()|0;if((c[27462]|0)==0){au(c[n>>2]|0,11664,(b=i,i=i+8|0,c[b>>2]=109952,b)|0)|0;i=b;aO(-1|0);return 0}else{g8(c[27462]|0,1);c[29338]=he(11648,8040,6304,5264)|0;i=a;return 0}return 0}function bH(){g2(c[27462]|0)|0;hg(c[29338]|0)|0;return 0}function bI(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,j=0;b=i;d=hh(a,c[29338]|0)|0;g4(c[27462]|0,2);g5(c[27462]|0,0);g6(c[27462]|0,0);hd(c[27462]|0);g3(c[27462]|0,100);a=hn(d,c[27462]|0)|0;if((a|0)==0){au(c[o>>2]|0,4600,(e=i,i=i+1|0,i=i+7&-8,c[e>>2]=0,e)|0)|0;i=e;if((g9(c[27462]|0)|0)!=0){g5(c[27462]|0,1);f=c[27462]|0;g6(f,hl(d)|0);a=hn(d,c[27462]|0)|0}}if((ha(c[27462]|0)|0)!=0){au(c[o>>2]|0,4016,(e=i,i=i+1|0,i=i+7&-8,c[e>>2]=0,e)|0)|0;i=e}if((hb(c[27462]|0)|0)!=0){au(c[o>>2]|0,3296,(e=i,i=i+1|0,i=i+7&-8,c[e>>2]=0,e)|0)|0;i=e}if((a|0)>0){a=ho(0,d,c[27462]|0)|0;g=i5(a,2)|0;hs(a);h=d;hi(h);j=g;i=b;return j|0}else{aw(11664,(e=i,i=i+8|0,c[e>>2]=2696,e)|0)|0;i=e;h=d;hi(h);j=g;i=b;return j|0}return 0}function bJ(a,b){a=a|0;b=b|0;var c=0,d=0;c=i;d=bK(a,b,0,0)|0;i=c;return d|0}function bK(e,f,g,h){e=e|0;f=f|0;g=g|0;h=h|0;var j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0;j=i;k=e;e=f;f=g;g=h;if((b[k>>1]|0)!=(b[e>>1]|0)){l=0;m=l;i=j;return m|0}h=a[k+4|0]|0;n=a[e+4|0]|0;o=c[k+12>>2]|0;p=c[e+12>>2]|0;while(1){if((bg(a[o]|0)|0)!=0){q=1}else{q=(bg(a[p]|0)|0)!=0}if(!q){break}if((a[o]|0)!=(a[p]|0)){r=8;break}o=o+1|0;p=p+1|0}if((r|0)==8){l=0;m=l;i=j;return m|0}do{if((f|0)==0){if((g|0)!=0){r=13;break}s=0}else{r=13}}while(0);do{if((r|0)==13){if((f|0)<(g|0)){s=a[(c[(c[29328]|0)+(f<<2)>>2]|0)+g|0]|0;break}else{aw(2144,(q=i,i=i+8|0,c[q>>2]=11072,q)|0)|0;i=q;aO(1);return 0}}}while(0);do{if((s|0)<=(d[k+3|0]|0)){if((s|0)>(d[e+3|0]|0)){break}do{if((h|0)==0){if((n|0)!=0){break}do{if((a[c[k+12>>2]|0]|0)==83){if((a[o]|0)!=115){if((a[o]|0)!=112){break}}if((a[p]|0)!=112){if((a[p]|0)!=115){break}}if((o-1|0)!=(c[k+12>>2]|0)){if((o-2|0)!=(c[k+12>>2]|0)){break}if((a[o-1|0]|0)!=73){break}}l=1;m=l;i=j;return m|0}}while(0);L45:while(1){if((a[o]|0)!=0){t=(a[p]|0)!=0}else{t=0}if(!t){r=41;break}do{if((a[o]|0)!=42){if((a[p]|0)==42){break}if((a[o]|0)!=(a[p]|0)){r=39;break L45}if((a[o]|0)==94){r=39;break L45}}}while(0);o=o+1|0;p=p+1|0}if((r|0)==39){l=0;m=l;i=j;return m|0}else if((r|0)==41){l=1;m=l;i=j;return m|0}}}while(0);do{if((h|0)==1){if((n|0)!=2){break}L66:while(1){if((a[o]|0)!=0){u=(a[p]|0)!=0}else{u=0}if(!u){r=54;break}do{if((a[o]|0)!=(a[p]|0)){if((a[o]|0)==42){break}if((a[p]|0)!=94){r=52;break L66}}}while(0);o=o+1|0;p=p+1|0}if((r|0)==52){l=0;m=l;i=j;return m|0}else if((r|0)==54){l=1;m=l;i=j;return m|0}}}while(0);do{if((n|0)==1){if((h|0)!=2){break}L86:while(1){if((a[o]|0)!=0){v=(a[p]|0)!=0}else{v=0}if(!v){r=67;break}do{if((a[o]|0)!=(a[p]|0)){if((a[p]|0)==42){break}if((a[o]|0)!=94){r=65;break L86}}}while(0);o=o+1|0;p=p+1|0}if((r|0)==65){l=0;m=l;i=j;return m|0}else if((r|0)==67){l=1;m=l;i=j;return m|0}}}while(0);l=0;m=l;i=j;return m|0}}while(0);l=0;m=l;i=j;return m|0}function bL(){var a=0,b=0;a=i;b=0;while(1){if((b|0)>=(c[24184]|0)){break}if((c[(c[24178]|0)+(b<<2)>>2]|0)!=0){fp(c[(c[24178]|0)+(b<<2)>>2]|0);c[(c[24178]|0)+(b<<2)>>2]=0}b=b+1|0}i=a;return}function bM(d){d=d|0;var e=0,f=0,g=0;e=i;f=d;d=b[f>>1]|0;g=c[f+12>>2]|0;while(1){if((bg(a[g]|0)|0)==0){break}d=d+(d<<1)+(c[96744+(((a[g]|0)+d&255)<<2)>>2]|0)|0;g=g+1|0}i=e;return d&(c[24184]|0)-1|0}function bN(d){d=d|0;var e=0,f=0,g=0,h=0,j=0;e=i;f=d;d=bM(f)|0;g=c[(c[24178]|0)+(d<<2)>>2]|0;L1:while(1){if((g|0)==0){h=9;break}do{if((bi(c[f+12>>2]|0,c[g+12>>2]|0)|0)==0){if((b[f>>1]|0)!=(b[g>>1]|0)){break}if((a[f+4|0]|0)==(a[g+4|0]|0)){h=6;break L1}}}while(0);g=c[g+8>>2]|0}if((h|0)==6){i=e;return}else if((h|0)==9){g=fs(fz(16)|0)|0;h=g;j=f;c[h>>2]=c[j>>2];c[h+4>>2]=c[j+4>>2];c[h+8>>2]=c[j+8>>2];c[h+12>>2]=c[j+12>>2];c[g+8>>2]=c[(c[24178]|0)+(d<<2)>>2];c[(c[24178]|0)+(d<<2)>>2]=g;i=e;return}}function bO(){var a=0,b=0;a=i;b=0;while(1){if((b|0)>=(c[24184]|0)){break}c[(c[24178]|0)+(b<<2)>>2]=0;b=b+1|0}i=a;return}function bP(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0,j=0;d=i;e=a;a=bM(e)|0;do{if((b|0)==45){f=c[(c[24178]|0)+(a<<2)>>2]|0;while(1){if((f|0)==0){g=8;break}if((bJ(f,e)|0)!=0){break}f=c[f+8>>2]|0}if((g|0)==8){break}h=1;j=h;i=d;return j|0}else{f=c[(c[24178]|0)+(a<<2)>>2]|0;while(1){if((f|0)==0){g=15;break}if((bJ(e,f)|0)!=0){break}f=c[f+8>>2]|0}if((g|0)==15){break}h=1;j=h;i=d;return j|0}}while(0);h=0;j=h;i=d;return j|0}function bQ(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0;d=i;i=i+24|0;e=d|0;f=a;a=b;b=e;c[b>>2]=c[f+8+(a*76|0)+68>>2];while(1){if((c[b>>2]|0)==0){break}do{if((c[(c[b>>2]|0)+12>>2]|0)==0){if((c[(c[b>>2]|0)+16>>2]|0)!=0){g=6;break}h=c[b>>2]|0;c[b>>2]=c[h>>2];fq(h,20)}else{g=6}}while(0);if((g|0)==6){g=0;b=c[b>>2]|0}}c[f+8+(a*76|0)+68>>2]=c[e>>2];i=d;return}function bR(a){a=a|0;var b=0,d=0;b=i;d=a;a=0;while(1){if((d|0)==0){break}a=a+1|0;d=c[d>>2]|0}i=b;return a|0}function bS(a){a=a|0;var b=0,d=0,e=0;b=i;d=a;a=0;e=0;while(1){if((e|0)>=(c[d+4>>2]|0)){break}a=a+(bR(c[d+8+(e*76|0)+68>>2]|0)|0)|0;e=e+1|0}i=b;return a|0}function bT(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0,n=0;b=i;d=a;c[24184]=fL(bS(d)|0)|0;c[24178]=fz(c[24184]<<2)|0;bO();a=1;iv(d);while(1){e=0;while(1){if((e|0)>=(c[d+4>>2]|0)){break}f=c[d+8+(e*76|0)+68>>2]|0;while(1){if((f|0)==0){break}g=c[f+12>>2]|0;while(1){if((g|0)==0){break}if((bP(g,45)|0)==0){h=9;break}g=c[g+8>>2]|0}if((h|0)==9){h=0}if((g|0)!=0){a=a+1|0;fp(c[f+12>>2]|0);fp(c[f+16>>2]|0);c[f+16>>2]=0;c[f+12>>2]=0}f=c[f>>2]|0}bQ(d,e);f=c[d+8+(e*76|0)+68>>2]|0;while(1){if((f|0)==0){break}g=c[f+16>>2]|0;while(1){if((g|0)==0){break}bN(g);g=c[g+8>>2]|0}f=c[f>>2]|0}e=e+1|0}if((c[24072]|0)>2){aw(7824,(j=i,i=i+8|0,c[j>>2]=a,j)|0)|0;i=j;gP(d)}bL();if((a|0)==0){h=29;break}a=0;e=(c[d+4>>2]|0)-1|0;while(1){if((e|0)<0){break}f=c[d+8+(e*76|0)+68>>2]|0;while(1){if((f|0)==0){break}g=c[f+16>>2]|0;while(1){if((g|0)==0){break}if((bP(g,43)|0)==0){h=37;break}g=c[g+8>>2]|0}if((h|0)==37){h=0}if((g|0)!=0){a=a+1|0;fp(c[f+12>>2]|0);fp(c[f+16>>2]|0);c[f+16>>2]=0;c[f+12>>2]=0}f=c[f>>2]|0}bQ(d,e);f=c[d+8+(e*76|0)+68>>2]|0;while(1){if((f|0)==0){break}g=c[f+12>>2]|0;while(1){if((g|0)==0){break}bN(g);g=c[g+8>>2]|0}f=c[f>>2]|0}e=e-1|0}if((c[24072]|0)>2){aw(6208,(j=i,i=i+8|0,c[j>>2]=a,j)|0)|0;i=j;gP(d)}bL();if((a|0)==0){h=57;break}a=0}if((h|0)==57){k=c[24178]|0;l=k;m=c[24184]|0;n=m<<2;fq(l,n);i=b;return}else if((h|0)==29){k=c[24178]|0;l=k;m=c[24184]|0;n=m<<2;fq(l,n);i=b;return}}function bU(b,d){b=b|0;d=d|0;var e=0,f=0;e=i;f=b;b=d;while(1){if((a[f]|0)==0){break}b=b+(b<<1)+(c[96744+(((a[f]|0)+b&255)<<2)>>2]|0)|0;f=f+1|0}i=e;return b&(c[29330]|0)-1|0}function bV(a){a=a|0;var b=0,d=0,e=0;b=i;d=a;a=0;e=c[d+12>>2]|0;while(1){if((e|0)==0){break}a=bU(c[e+12>>2]|0,a)|0;e=c[e+8>>2]|0}e=c[d+16>>2]|0;while(1){if((e|0)==0){break}a=bU(c[e+12>>2]|0,a)|0;e=c[e+8>>2]|0}e=bU(c[d+8>>2]|0,a)|0;i=b;return e|0}function bW(d,e){d=d|0;e=e|0;var f=0,g=0,h=0,j=0;f=i;g=d;d=e;if((b[g>>1]|0)!=(b[d>>1]|0)){h=0;j=h&1;i=f;return j|0}if((a[g+5|0]|0)!=(a[d+5|0]|0)){h=0;j=h&1;i=f;return j|0}if((a[g+4|0]|0)!=(a[d+4|0]|0)){h=0;j=h&1;i=f;return j|0}h=(bi(c[g+12>>2]|0,c[d+12>>2]|0)|0)==0;j=h&1;i=f;return j|0}function bX(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0,j=0,k=0,l=0;d=i;e=a;a=b;b=c[e+12>>2]|0;f=c[a+12>>2]|0;while(1){if((b|0)!=0){g=(f|0)!=0}else{g=0}if(!g){break}if((bW(b,f)|0)==0){h=6;break}b=c[b+8>>2]|0;f=c[f+8>>2]|0}do{if((b|0)==0){if((f|0)!=0){break}b=c[e+16>>2]|0;f=c[a+16>>2]|0;while(1){if((b|0)!=0){j=(f|0)!=0}else{j=0}if(!j){break}if((bW(b,f)|0)==0){h=16;break}b=c[b+8>>2]|0;f=c[f+8>>2]|0}do{if((b|0)==0){if((f|0)!=0){break}k=(bi(c[e+8>>2]|0,c[a+8>>2]|0)|0)==0|0;l=k;i=d;return l|0}}while(0);k=0;l=k;i=d;return l|0}}while(0);k=0;l=k;i=d;return l|0}function bY(a){a=a|0;var d=0,e=0,f=0,g=0,h=0,j=0,k=0,l=0;d=i;e=a;a=0;c[29330]=fL((bR(e)|0)<<1)|0;c[29332]=fz(c[29330]<<2)|0;f=0;while(1){if((f|0)>=(c[29330]|0)){break}c[(c[29332]|0)+(f<<2)>>2]=0;f=f+1|0}while(1){if((e|0)==0){break}g=c[e>>2]|0;h=bV(e)|0;j=c[(c[29332]|0)+(h<<2)>>2]|0;while(1){if((j|0)==0){break}if((bX(j,e)|0)!=0){k=10;break}j=c[j>>2]|0}if((k|0)==10){k=0}if((j|0)==0){c[e>>2]=c[(c[29332]|0)+(h<<2)>>2];c[(c[29332]|0)+(h<<2)>>2]=e}else{c[e>>2]=0;if((b[e+4>>1]|0)<(b[j+4>>1]|0)){b[j+4>>1]=b[e+4>>1]|0}fr(e);a=a+1|0}e=g}f=0;while(1){if((f|0)>=(c[29330]|0)){break}g=c[(c[29332]|0)+(f<<2)>>2]|0;while(1){if((g|0)==0){break}j=c[g>>2]|0;c[g>>2]=e;e=g;g=j}f=f+1|0}fq(c[29332]|0,c[29330]<<2);if((c[24072]|0)<=2){l=e;i=d;return l|0}if((a|0)==0){l=e;i=d;return l|0}aw(5176,(f=i,i=i+8|0,c[f>>2]=a,f)|0)|0;i=f;l=e;i=d;return l|0}function bZ(a){a=a|0;var b=0,d=0,e=0,f=0;b=i;d=a;a=0;e=0;while(1){if((e|0)>=(c[d+4>>2]|0)){break}f=c[d+8+(e*76|0)+64>>2]|0;while(1){if((f|0)==0){break}a=a+(fw(c[f+4>>2]|0)|0)|0;f=c[f+8>>2]|0}e=e+1|0}i=b;return a|0}function b_(b){b=b|0;var d=0,e=0,f=0,g=0;d=i;e=b;if((a[e|0]|0)==2){if((c[e+4>>2]|0)==0){fq(e,12);f=0;g=f;i=d;return g|0}else{f=e;g=f;i=d;return g|0}}do{if((a[e|0]|0)==1){if((b$(c[e+4>>2]|0)|0)!=0){break}fq(e,12);f=0;g=f;i=d;return g|0}else{c[e+4>>2]=b0(c[e+4>>2]|0)|0;if((c[e+4>>2]|0)!=0){break}fq(e,12);f=0;g=f;i=d;return g|0}}while(0);f=e;g=f;i=d;return g|0}function b$(a){a=a|0;var b=0,d=0,e=0;b=i;d=a;do{if((d|0)==0){e=1}else{a=b_(c[d+4>>2]|0)|0;c[d+4>>2]=a;if((a|0)==0){fv(c[d>>2]|0);fq(d,8);e=0;break}if((b$(c[d>>2]|0)|0)==0){fu(c[d+4>>2]|0);fq(d,8);e=0;break}else{e=1;break}}}while(0);i=b;return e|0}function b0(a){a=a|0;var b=0,d=0,e=0,f=0;b=i;d=a;if((d|0)==0){e=0;f=e;i=b;return f|0}a=b_(c[d+4>>2]|0)|0;c[d+4>>2]=a;if((a|0)==0){a=b0(c[d>>2]|0)|0;fq(d,8);e=a;f=e;i=b;return f|0}else{c[d>>2]=b0(c[d>>2]|0)|0;e=d;f=e;i=b;return f|0}return 0}function b1(d,e){d=d|0;e=e|0;var f=0,g=0,h=0,j=0;f=i;i=i+16|0;g=f|0;h=d;d=e;fs(g)|0;b[g>>1]=-1;a[g+4|0]=0;e=0;if((a[h|0]|0)==2){if((a[h+2|0]|0)==(d|0)){c[g+12>>2]=c[h+4>>2];if((bP(g,d)|0)==0){c[h+4>>2]=0;e=e+1|0}}j=e;i=f;return j|0}else{g=c[h+4>>2]|0;while(1){if((g|0)==0){break}e=e+(b1(c[g+4>>2]|0,d)|0)|0;g=c[g>>2]|0}j=e;i=f;return j|0}return 0}function b2(d,e){d=d|0;e=e|0;var f=0,g=0,h=0;f=i;i=i+16|0;g=f|0;h=d;d=e;fs(g)|0;b[g>>1]=-1;a[g+4|0]=0;if((a[h|0]|0)==2){if((a[h+2|0]|0)==(d|0)){c[g+12>>2]=c[h+4>>2];bN(g)}i=f;return}g=c[h+4>>2]|0;while(1){if((g|0)==0){break}b2(c[g+4>>2]|0,d);g=c[g>>2]|0}i=f;return}function b3(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0;d=i;i=i+16|0;e=d|0;f=a;a=b;b=e;c[b+8>>2]=c[f+8+(a*76|0)+64>>2];while(1){if((c[b+8>>2]|0)==0){break}if((c[(c[b+8>>2]|0)+4>>2]|0)==0){g=c[b+8>>2]|0;c[b+8>>2]=c[g+8>>2];fq(g,12)}else{b=c[b+8>>2]|0}}c[f+8+(a*76|0)+64>>2]=c[e+8>>2];i=d;return}function b4(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0;b=i;d=a;c[24184]=fL(bZ(d)|0)|0;c[24178]=fz(c[24184]<<2)|0;bO();a=1;while(1){e=0;while(1){if((e|0)>=(c[d+4>>2]|0)){break}f=c[d+8+(e*76|0)+64>>2]|0;while(1){if((f|0)==0){break}a=a+(b1(c[f+4>>2]|0,45)|0)|0;f=c[f+8>>2]|0}f=c[d+8+(e*76|0)+64>>2]|0;while(1){if((f|0)==0){break}c[f+4>>2]=b_(c[f+4>>2]|0)|0;f=c[f+8>>2]|0}b3(d,e);f=c[d+8+(e*76|0)+64>>2]|0;while(1){if((f|0)==0){break}b2(c[f+4>>2]|0,43);f=c[f+8>>2]|0}e=e+1|0}if((c[24072]|0)>2){aw(7824,(g=i,i=i+8|0,c[g>>2]=a,g)|0)|0;i=g;gQ(d)}bL();if((a|0)==0){h=21;break}a=0;e=(c[d+4>>2]|0)-1|0;while(1){if((e|0)<0){break}f=c[d+8+(e*76|0)+64>>2]|0;while(1){if((f|0)==0){break}a=a+(b1(c[f+4>>2]|0,43)|0)|0;f=c[f+8>>2]|0}f=c[d+8+(e*76|0)+64>>2]|0;while(1){if((f|0)==0){break}c[f+4>>2]=b_(c[f+4>>2]|0)|0;f=c[f+8>>2]|0}b3(d,e);f=c[d+8+(e*76|0)+64>>2]|0;while(1){if((f|0)==0){break}b2(c[f+4>>2]|0,45);f=c[f+8>>2]|0}e=e-1|0}if((c[24072]|0)>2){aw(6208,(g=i,i=i+8|0,c[g>>2]=a,g)|0)|0;i=g;gQ(d)}bL();if((a|0)==0){h=41;break}a=0}if((h|0)==41){j=c[24178]|0;k=j;l=c[24184]|0;m=l<<2;fq(k,m);i=b;return}else if((h|0)==21){j=c[24178]|0;k=j;l=c[24184]|0;m=l<<2;fq(k,m);i=b;return}}function b5(a){a=a|0;var b=0,d=0,e=0;b=i;d=a;a=0;while(1){if((d|0)==0){break}e=c[d+12>>2]|0;while(1){if((e|0)==0){break}a=a+1|0;e=c[e+8>>2]|0}d=c[d>>2]|0}i=b;return a|0}function b6(a){a=a|0;var b=0,d=0,e=0;b=i;d=a;a=0;while(1){if((d|0)==0){break}e=c[d+16>>2]|0;while(1){if((e|0)==0){break}a=a+1|0;e=c[e+8>>2]|0}d=c[d>>2]|0}i=b;return a|0}function b7(a){a=a|0;var b=0,d=0;b=i;d=a;while(1){if((d|0)==0){break}a=c[d+8>>2]|0;fq(d,12);d=a}i=b;return}function b8(a){a=a|0;var b=0,d=0,e=0;b=i;d=a;a=0;while(1){if((a|0)>=(c[d+4>>2]|0)){break}e=0;while(1){if((e|0)>=(c[112016+(a<<2)>>2]|0)){break}b7(c[(c[114016+(a<<2)>>2]|0)+(e<<2)>>2]|0);e=e+1|0}fq(c[114016+(a<<2)>>2]|0,c[112016+(a<<2)>>2]<<2);e=0;while(1){if((e|0)>=(c[98792+(a<<2)>>2]|0)){break}b7(c[(c[100792+(a<<2)>>2]|0)+(e<<2)>>2]|0);e=e+1|0}fq(c[100792+(a<<2)>>2]|0,c[98792+(a<<2)>>2]<<2);a=a+1|0}i=b;return}function b9(d){d=d|0;var e=0,f=0,g=0;e=i;f=d;d=c[96744+((b[f>>1]&255)<<2)>>2]|0;g=c[f+12>>2]|0;while(1){if((bg(a[g]|0)|0)==0){break}d=d+(d<<1)+(c[96744+(((a[g]|0)+d&255)<<2)>>2]|0)|0;g=g+1|0}i=e;return d|0}function ca(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,g=0;f=i;g=b;b=d;d=(b9(b)|0)&a-1;a=fz(12)|0;c[a+8>>2]=c[g+(d<<2)>>2];c[g+(d<<2)>>2]=a;c[a>>2]=b;c[a+4>>2]=e;i=f;return}function cb(b,d,e){b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,j=0;f=i;g=b;b=d;d=e;if((g|0)==0){h=b;j=h;i=f;return j|0}else{e=(cb(c[g+8>>2]|0,b,d)|0)+d|0;a[g+2|0]=e;h=e;j=h;i=f;return j|0}return 0}function cc(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0;b=i;d=a;c[29842]=c[d+19012>>2];c[29328]=c[d+19016>>2];a=0;while(1){if((a|0)>=(c[d+4>>2]|0)){break}e=0;f=c[d+8+(a*76|0)+68>>2]|0;while(1){if((f|0)==0){break}g=c[f>>2]|0;do{if((cb(c[f+12>>2]|0,a,-1)|0)<0){h=7}else{j=cb(c[f+16>>2]|0,a,1)|0;if((j|0)>=(c[d+4>>2]|0)){h=7;break}c[f>>2]=e;e=f}}while(0);if((h|0)==7){h=0;c[f>>2]=0;fr(f)}f=g}c[d+8+(a*76|0)+68>>2]=e;a=a+1|0}a=0;while(1){if((a|0)>=(c[d+4>>2]|0)){break}h=b5(c[d+8+(a*76|0)+68>>2]|0)|0;j=fL(h)|0;c[112016+(a<<2)>>2]=j;k=fz(j<<2)|0;c[114016+(a<<2)>>2]=k;l=k;k=0;while(1){if((k|0)>=(j|0)){break}c[l+(k<<2)>>2]=0;k=k+1|0}f=c[d+8+(a*76|0)+68>>2]|0;while(1){if((f|0)==0){break}m=c[f+12>>2]|0;if((m|0)!=0){ca(j,l,m,1);m=c[m+8>>2]|0;while(1){if((m|0)==0){break}ca(j,l,m,0);m=c[m+8>>2]|0}}f=c[f>>2]|0}h=b6(c[d+8+(a*76|0)+68>>2]|0)|0;j=fL(h)|0;c[98792+(a<<2)>>2]=j;g=fz(j<<2)|0;c[100792+(a<<2)>>2]=g;l=g;k=0;while(1){if((k|0)>=(j|0)){break}c[l+(k<<2)>>2]=0;k=k+1|0}f=c[d+8+(a*76|0)+68>>2]|0;while(1){if((f|0)==0){break}m=c[f+16>>2]|0;if((m|0)!=0){ca(j,l,m,1);m=c[m+8>>2]|0;while(1){if((m|0)==0){break}ca(j,l,m,0);m=c[m+8>>2]|0}}f=c[f>>2]|0}a=a+1|0}i=b;return}function cd(a,b){a=a|0;b=b|0;var e=0,f=0,g=0,h=0,j=0;e=i;f=a;a=b;b=0;while(1){if((b|0)>=(f|0)){break}g=0;h=c[a+(b<<2)>>2]|0;while(1){if((h|0)==0){break}j=c[h+8>>2]|0;if((d[(c[h>>2]|0)+2|0]|0|0)!=251){c[h+8>>2]=g;g=h}else{fq(h,12)}h=j}c[a+(b<<2)>>2]=g;b=b+1|0}i=e;return}function ce(b,e,f,g,h,j){b=b|0;e=e|0;f=f|0;g=g|0;h=h|0;j=j|0;var k=0,l=0,m=0,n=0;k=i;l=b;b=e;e=h;h=j;do{if((f|0)==0){if((g|0)!=0){break}m=0;n=m;i=k;return n|0}}while(0);do{if((d[l+2|0]|0)<=(h|0)){if((d[b+2|0]|0)<(e|0)){break}if((c[25464]|0)==0){L11:do{if((e|0)==(h-1|0)){do{if((c[l+8>>2]|0)==0){if((c[b+8>>2]|0)!=0){break}break L11}}while(0);m=0;n=m;i=k;return n|0}else{do{if((c[27468]|0)==0){if((c[l+8>>2]|0)!=0){break}if((c[b+8>>2]|0)!=0){break}if((a[l+5|0]|0)!=0){break}if((a[b+5|0]|0)!=0){break}m=0;n=m;i=k;return n|0}}while(0)}}while(0);m=iu(l,b,e,h)|0;n=m;i=k;return n|0}L30:do{if((e|0)==(h-1|0)){do{if((c[l+8>>2]|0)==0){if((c[b+8>>2]|0)!=0){break}break L30}}while(0);m=0;n=m;i=k;return n|0}else{do{if((c[27468]|0)==0){if((c[l+8>>2]|0)!=0){break}if((c[b+8>>2]|0)!=0){break}if((a[l+5|0]|0)!=0){break}if((a[b+5|0]|0)!=0){break}if((a[(c[(c[29842]|0)+(e<<2)>>2]|0)+h|0]|0)!=0){break}m=0;n=m;i=k;return n|0}}while(0)}}while(0);m=bK(l,b,e,h)|0;n=m;i=k;return n|0}}while(0);m=0;n=m;i=k;return n|0}function cf(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,j=0,k=0,l=0;f=i;g=a;a=b;b=d;d=e;e=c[98792+(g<<2)>>2]|0;h=(b9(a)|0)&e-1;e=c[(c[100792+(g<<2)>>2]|0)+(h<<2)>>2]|0;while(1){if((e|0)==0){j=7;break}if((ce(c[e>>2]|0,a,c[e+4>>2]|0,b,g,d)|0)!=0){j=4;break}e=c[e+8>>2]|0}if((j|0)==4){k=1;l=k;i=f;return l|0}else if((j|0)==7){k=0;l=k;i=f;return l|0}return 0}function cg(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,j=0,k=0,l=0;f=i;g=a;a=b;b=d;d=e;e=c[112016+(g<<2)>>2]|0;h=(b9(a)|0)&e-1;e=c[(c[114016+(g<<2)>>2]|0)+(h<<2)>>2]|0;while(1){if((e|0)==0){j=7;break}if((ce(a,c[e>>2]|0,b,c[e+4>>2]|0,d,g)|0)!=0){j=4;break}e=c[e+8>>2]|0}if((j|0)==4){k=1;l=k;i=f;return l|0}else if((j|0)==7){k=0;l=k;i=f;return l|0}return 0}function ch(b,e,f,g){b=b|0;e=e|0;f=f|0;g=g|0;var h=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0;h=i;j=b;b=e;e=f;f=g;if((j|0)==0){k=e;l=k;i=h;return l|0}g=(ch(c[j+8>>2]|0,b,e,0)|0)-1|0;if((d[j+2|0]|0|0)<(g|0)){g=d[j+2|0]|0}m=0;while(1){if((g|0)>=0){n=(e-g|0)<=250}else{n=0}if(!n){break}c[25466]=(c[25466]|0)+1;if((cf(g,j,f,b)|0)!=0){o=10;break}g=g-1|0}if((o|0)==10){m=1}if((g|0)<(d[j+2|0]|0|0)){a[j+2|0]=g;c[55310]=(c[55310]|0)+1}if((m|0)!=0){p=g}else{p=-1}k=p;l=k;i=h;return l|0}function ci(b,e,f,g,h){b=b|0;e=e|0;f=f|0;g=g|0;h=h|0;var j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0;j=i;k=b;b=e;e=f;f=g;g=h;if((b|0)==0){l=f;m=l;i=j;return m|0}h=(ci(k,c[b+8>>2]|0,e,f,0)|0)+1|0;if((d[b+2|0]|0|0)>(h|0)){h=d[b+2|0]|0}n=0;while(1){if((h|0)<(c[k+4>>2]|0)){o=(h-f|0)<=250}else{o=0}if(!o){break}c[25466]=(c[25466]|0)+1;if((cg(h,b,g,e)|0)!=0){p=10;break}h=h+1|0}if((p|0)==10){n=1}if((h|0)>(d[b+2|0]|0|0)){a[b+2|0]=h;c[55310]=(c[55310]|0)+1}if((n|0)!=0){q=h}else{q=c[k+4>>2]|0}l=q;m=l;i=j;return m|0}function cj(b,e,f){b=b|0;e=e|0;f=f|0;var g=0,h=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0;g=i;h=b;b=e;e=f;c[25464]=b;c[27468]=(c[e+12>>2]|0)>0;iv(h);cc(h);c[25466]=0;f=0;c[55310]=1;j=0;k=0;while(1){if(!((hc(e)|0)!=0^1)){break}l=0;while(1){if((l|0)<(c[h+4>>2]|0)){m=(hc(e)|0)!=0^1}else{m=0}if(!m){break}if((hc(e)|0)!=0){n=8;break}o=c[h+8+(l*76|0)+68>>2]|0;while(1){if((o|0)==0){break}if((c[o+12>>2]|0)!=0){if((ch(c[o+12>>2]|0,l,l,1)|0)<0){p=c[o+12>>2]|0;while(1){if((p|0)==0){break}a[p+2|0]=-5;p=c[p+8>>2]|0}p=c[o+16>>2]|0;while(1){if((p|0)==0){break}a[p+2|0]=-5;p=c[p+8>>2]|0}j=j+1|0;k=k+1|0}}o=c[o>>2]|0}cd(c[98792+(l<<2)>>2]|0,c[100792+(l<<2)>>2]|0);q=0;o=c[h+8+(l*76|0)+68>>2]|0;while(1){if((o|0)==0){break}r=c[o>>2]|0;do{if((c[o+12>>2]|0)!=0){if((d[(c[o+12>>2]|0)+2|0]|0|0)!=251){n=30;break}c[o>>2]=f;f=o}else{n=30}}while(0);if((n|0)==30){n=0;c[o>>2]=q;q=o}o=r}c[h+8+(l*76|0)+68>>2]=q;l=l+1|0}if((n|0)==8){n=0}if((c[24072]|0)>2){aw(4488,(s=i,i=i+16|0,c[s>>2]=c[55310],c[s+8>>2]=j,s)|0)|0;i=s}if((c[55310]|0)==0){n=38;break}j=0;c[55310]=0;l=(c[h+4>>2]|0)-1|0;while(1){if((l|0)>=0){t=(hc(e)|0)!=0^1}else{t=0}if(!t){break}o=c[h+8+(l*76|0)+68>>2]|0;while(1){if((o|0)==0){break}if((c[o+16>>2]|0)!=0){u=ci(h,c[o+16>>2]|0,l,l,1)|0;if((u|0)>=(c[h+4>>2]|0)){p=c[o+16>>2]|0;while(1){if((p|0)==0){break}a[p+2|0]=-5;p=c[p+8>>2]|0}p=c[o+12>>2]|0;while(1){if((p|0)==0){break}a[p+2|0]=-5;p=c[p+8>>2]|0}j=j+1|0;k=k+1|0}}o=c[o>>2]|0}cd(c[112016+(l<<2)>>2]|0,c[114016+(l<<2)>>2]|0);q=0;o=c[h+8+(l*76|0)+68>>2]|0;while(1){if((o|0)==0){break}r=c[o>>2]|0;do{if((c[o+16>>2]|0)!=0){if((d[(c[o+16>>2]|0)+2|0]|0|0)!=251){n=64;break}c[o>>2]=f;f=o}else{n=64}}while(0);if((n|0)==64){n=0;c[o>>2]=q;q=o}o=r}c[h+8+(l*76|0)+68>>2]=q;l=l-1|0}if((c[24072]|0)>2){aw(3824,(s=i,i=i+16|0,c[s>>2]=c[55310],c[s+8>>2]=j,s)|0)|0;i=s}if((c[55310]|0)==0){n=72;break}j=0;c[55310]=0}fr(f);b8(h);if((c[24072]|0)>2){aw(3216,(s=i,i=i+8|0,c[s>>2]=c[25466],s)|0)|0;i=s}if((b|0)==0){d4(e,2576)}else{d4(e,2008)}if((c[24072]|0)<=2){v=k;i=g;return v|0}if((b|0)==0){aw(11608,(s=i,i=i+1|0,i=i+7&-8,c[s>>2]=0,s)|0)|0;i=s}else{aw(11136,(s=i,i=i+1|0,i=i+7&-8,c[s>>2]=0,s)|0)|0;i=s}gP(h);v=k;i=g;return v|0}function ck(){var a=0,b=0;a=i;b=0;while(1){if((b|0)>=2048){break}c[160344+(b<<2)>>2]=0;b=b+1|0}i=a;return}function cl(){var a=0,b=0,d=0,e=0;a=i;b=0;while(1){if((b|0)>=2048){break}d=c[160344+(b<<2)>>2]|0;while(1){if((d|0)==0){break}e=c[d>>2]|0;fq(d,12);d=e}b=b+1|0}i=a;return}function cm(b){b=b|0;var d=0,e=0;d=i;e=b;b=0;while(1){if((bg(a[e]|0)|0)==0){break}b=b+(b<<1)+(c[96744+(((a[e]|0)+b&255)<<2)>>2]|0)|0;e=e+1|0}i=d;return b&2047|0}function cn(a){a=a|0;var b=0,d=0,e=0,f=0,g=0;b=i;d=a;a=c[160344+((cm(d)|0)<<2)>>2]|0;while(1){if((a|0)==0){e=7;break}if((df(d,c[a+4>>2]|0)|0)!=0){e=4;break}a=c[a>>2]|0}if((e|0)==7){f=0;g=f;i=b;return g|0}else if((e|0)==4){f=1;g=f;i=b;return g|0}return 0}function co(a){a=a|0;var b=0,d=0,e=0,f=0,g=0;b=i;d=a;a=c[160344+((cm(d)|0)<<2)>>2]|0;while(1){if((a|0)==0){e=7;break}if((bi(d|0,c[a+4>>2]|0)|0)==0){e=4;break}a=c[a>>2]|0}if((e|0)==7){f=0;g=f;i=b;return g|0}else if((e|0)==4){f=a;g=f;i=b;return g|0}return 0}function cp(a){a=a|0;var b=0,d=0,e=0;b=i;d=a;a=co(d)|0;if((a|0)!=0){e=a+8|0;c[e>>2]=(c[e>>2]|0)+1;i=b;return}else{a=fz(12)|0;c[a+4>>2]=d;c[a+8>>2]=1;e=cm(d)|0;c[a>>2]=c[160344+(e<<2)>>2];c[160344+(e<<2)>>2]=a;i=b;return}}function cq(a){a=a|0;var b=0,d=0,e=0,f=0;b=i;d=co(a)|0;do{if((d|0)!=0){if((c[d+8>>2]|0)<=0){break}a=d+8|0;c[a>>2]=(c[a>>2]|0)-1;e=(c[d+8>>2]|0)==0|0;f=e;i=b;return f|0}}while(0);e=0;f=e;i=b;return f|0}function cr(b){b=b|0;var d=0,e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0;d=i;i=i+24|0;e=d|0;f=b;b=0;L1:while(1){if((b|0)>=(c[f>>2]|0)){g=39;break}h=c[(c[f+8>>2]|0)+(b<<2)>>2]|0;while(1){if((h|0)==0){break}jt(e|0,c[h>>2]|0,19)|0;a[e+19|0]=0;j=e|0;while(1){if((bg(a[j]|0)|0)==0){break}j=j+1|0}while(1){if((a[j]|0)==0){break}if((a[j]|0)!=42){a[j]=35}j=j+1|0}j=e|0;k=c[h>>2]|0;while(1){if((bg(a[j]|0)|0)==0){break}j=j+1|0;k=k+1|0}l=0;m=0;while(1){if((a[j]|0)!=0){n=(l|0)==0}else{n=0}if(!n){break}if((a[j]|0)!=42){m=m+1|0;a[j]=a[k]|0;if((cn(e|0)|0)==0){l=l+1|0}a[j]=35}j=j+1|0;k=k+1|0}if((m|0)==0){if((cn(e|0)|0)==0){l=l+1|0}}if((l|0)==0){g=34;break L1}h=c[h+4>>2]|0}b=b+1|0}if((g|0)==39){o=0;p=o;i=d;return p|0}else if((g|0)==34){o=1;p=o;i=d;return p|0}return 0}function cs(b,d){b=b|0;d=d|0;var e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0;e=i;i=i+24|0;f=e|0;g=b;b=d;if((c[(c[g>>2]|0)+56>>2]|0)==0){h=0;j=h;i=e;return j|0}d=c[c[(c[g>>2]|0)+56>>2]>>2]|0;ck();k=0;while(1){if((k|0)>=(c[g+4>>2]|0)){break}l=c[g+8+(k*76|0)+68>>2]|0;while(1){if((l|0)==0){break}a[l+6|0]=1;m=0;while(1){if((m|0)>=2){break}if((m|0)!=0){n=c[l+12>>2]|0}else{n=c[l+16>>2]|0}o=n;while(1){if((o|0)==0){break}cp(c[o+12>>2]|0);o=c[o+8>>2]|0}m=m+1|0}l=c[l>>2]|0}k=k+1|0}n=0;p=1;while(1){if((p|0)<=0){break}p=0;q=0;k=0;while(1){if((k|0)>=(c[g+4>>2]|0)){break}l=c[g+8+(k*76|0)+68>>2]|0;while(1){if((l|0)==0){break}if((a[l+6|0]|0)!=0){r=0;m=0;while(1){if((m|0)>=2){break}if((m|0)!=0){s=c[l+12>>2]|0}else{s=c[l+16>>2]|0}o=s;while(1){if((o|0)==0){break}t=0;L51:while(1){if((t|0)>=(c[d+68>>2]|0)){break}u=f;v=(c[d+48>>2]|0)+(t*24|0)|0;c[u>>2]=c[v>>2];c[u+4>>2]=c[v+4>>2];c[u+8>>2]=c[v+8>>2];c[u+12>>2]=c[v+12>>2];c[u+16>>2]=c[v+16>>2];c[u+20>>2]=c[v+20>>2];v=c[f>>2]|0;u=c[f+8>>2]|0;do{if((aC(v|0,42)|0)==0){if((df(v,c[o+12>>2]|0)|0)==0){break}if((cr(u)|0)==0){r=1}if((r|0)!=0){w=46;break L51}}}while(0);t=t+1|0}if((w|0)==46){w=0}if((r|0)!=0){w=50;break}o=c[o+8>>2]|0}if((w|0)==50){w=0}if((r|0)!=0){w=54;break}m=m+1|0}if((w|0)==54){w=0}if((r|0)!=0){q=q+1|0;n=n+1|0;a[l+6|0]=0;m=0;while(1){if((m|0)>=2){break}if((m|0)!=0){x=c[l+12>>2]|0}else{x=c[l+16>>2]|0}o=x;while(1){if((o|0)==0){break}p=p+(cq(c[o+12>>2]|0)|0)|0;o=c[o+8>>2]|0}m=m+1|0}}}l=c[l>>2]|0}k=k+1|0}if((c[24072]|0)>2){aw(10680,(y=i,i=i+8|0,c[y>>2]=q,y)|0)|0;i=y}}iJ(g);cl();if((c[24072]|0)>2){aw(10352,(y=i,i=i+1|0,i=i+7&-8,c[y>>2]=0,y)|0)|0;i=y;gP(g)}d4(b,9928);h=n;j=h;i=e;return j|0}function ct(a,b,c){a=a|0;b=b|0;c=c|0;var d=0,e=0,f=0;d=i;e=a;a=b;b=c;cj(e,a,b)|0;while(1){if((hc(b)|0)!=0){f=3;break}if((cs(e,b)|0)==0){f=5;break}if((hc(b)|0)!=0){f=7;break}if((cj(e,a,b)|0)==0){f=9;break}}if((f|0)==7){i=d;return}else if((f|0)==5){i=d;return}else if((f|0)==9){i=d;return}else if((f|0)==3){i=d;return}}function cu(a){a=a|0;var b=0,d=0;b=i;d=a;c[d+19052>>2]=20;c[d+19056>>2]=0;c[d+19060>>2]=fz(c[d+19052>>2]<<2)|0;i=b;return}function cv(a){a=a|0;var b=0,d=0;b=i;d=a;c[24182]=(c[24182]|0)-(c[d+19052>>2]<<2);c[d+19052>>2]=((c[d+19052>>2]|0)*3|0|0)/2|0;c[d+19060>>2]=jo(c[d+19060>>2]|0,c[d+19052>>2]<<2)|0;c[24182]=(c[24182]|0)+(c[d+19052>>2]<<2);if((c[24182]|0)>(c[27480]|0)){c[27480]=c[24182]}if((c[d+19060>>2]|0)==0){aw(8280,(d=i,i=i+1|0,i=i+7&-8,c[d>>2]=0,d)|0)|0;i=d;aO(1)}else{i=b;return}}function cw(a){a=a|0;var b=0,d=0;b=i;d=a;a=0;while(1){if((a|0)>=1024){break}c[d+19064+(a<<2)>>2]=0;a=a+1|0}i=b;return}function cx(a){a=a|0;var b=0,d=0,e=0,f=0;b=i;d=a;a=0;while(1){if((a|0)>=1024){break}e=c[d+19064+(a<<2)>>2]|0;while(1){if((e|0)==0){break}f=c[e+4>>2]|0;fq(e,8);e=f}c[d+19064+(a<<2)>>2]=0;a=a+1|0}i=b;return}function cy(a){a=a|0;var b=0,d=0;b=i;d=a;a=0;while(1){if((a|0)>=(c[d+19056>>2]|0)){break}fr(c[(c[d+19060>>2]|0)+(a<<2)>>2]|0);a=a+1|0}fq(c[d+19060>>2]|0,c[d+19052>>2]<<2);c[d+19052>>2]=0;c[d+19056>>2]=0;c[d+19060>>2]=0;i=b;return}function cz(a){a=a|0;var b=0,c=0;b=i;c=a;cy(c);cx(c);i=b;return}function cA(a){a=a|0;var b=0,d=0;b=i;d=a;c[d+19052>>2]=0;c[d+19056>>2]=0;c[d+19060>>2]=0;a=0;while(1){if((a|0)>=1024){break}c[d+19064+(a<<2)>>2]=0;a=a+1|0}i=b;return}function cB(d,e){d=d|0;e=e|0;var f=0,g=0;f=i;g=d;d=e;e=c[g+12>>2]|0;d=d+(d<<1)+(c[96744+(((b[g>>1]|0)+d&255)<<2)>>2]|0)|0;while(1){if((bg(a[e]|0)|0)==0){break}d=d+(d<<1)+(c[96744+(((a[e]|0)+d&255)<<2)>>2]|0)|0;e=e+1|0}i=f;return d&1023|0}function cC(a){a=a|0;var b=0,d=0,e=0;b=i;d=a;a=0;e=c[d+12>>2]|0;while(1){if((e|0)==0){break}a=cB(e,a)|0;e=c[e+8>>2]|0}a=a+(a<<1)+(c[96744+((a&255)<<2)>>2]|0)|0;e=c[d+16>>2]|0;while(1){if((e|0)==0){break}a=cB(e,a)|0;e=c[e+8>>2]|0}i=b;return a&1023|0}function cD(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0;d=i;e=a;a=b;if((c[(c[e>>2]|0)+72>>2]|0)==0){f=1;g=f;i=d;return g|0}b=c[a+16>>2]|0;while(1){if((b|0)==0){break}if((f_(c[(c[e>>2]|0)+72>>2]|0,b,43)|0)==0){h=6;break}b=c[b+8>>2]|0}if((h|0)==6){f=0;g=f;i=d;return g|0}b=c[a+12>>2]|0;while(1){if((b|0)==0){h=15;break}if((f_(c[(c[e>>2]|0)+72>>2]|0,b,45)|0)==0){h=12;break}b=c[b+8>>2]|0}if((h|0)==15){f=1;g=f;i=d;return g|0}else if((h|0)==12){f=0;g=f;i=d;return g|0}return 0}function cE(d,e){d=d|0;e=e|0;var f=0,g=0,h=0,j=0,k=0,l=0;f=i;g=d;d=e;if((b[g>>1]|0)!=(b[d>>1]|0)){h=0;j=h;i=f;return j|0}e=c[g+12>>2]|0;g=c[d+12>>2]|0;while(1){if((bg(a[e]|0)|0)!=0){k=1}else{k=(bg(a[g]|0)|0)!=0}if(!k){l=10;break}if((a[e]|0)!=(a[g]|0)){l=8;break}e=e+1|0;g=g+1|0}if((l|0)==10){h=1;j=h;i=f;return j|0}else if((l|0)==8){h=0;j=h;i=f;return j|0}return 0}function cF(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0,j=0,k=0,l=0;d=i;e=a;a=b;b=c[e+12>>2]|0;f=c[a+12>>2]|0;while(1){if((b|0)!=0){g=(f|0)!=0}else{g=0}if(!g){break}if((cE(b,f)|0)==0){h=6;break}b=c[b+8>>2]|0;f=c[f+8>>2]|0}do{if((b|0)==0){if((f|0)!=0){break}b=c[e+16>>2]|0;f=c[a+16>>2]|0;while(1){if((b|0)!=0){j=(f|0)!=0}else{j=0}if(!j){break}if((cE(b,f)|0)==0){h=16;break}b=c[b+8>>2]|0;f=c[f+8>>2]|0}do{if((b|0)==0){if((f|0)!=0){break}k=1;l=k;i=d;return l|0}}while(0);k=0;l=k;i=d;return l|0}}while(0);k=0;l=k;i=d;return l|0}function cG(b,d,e){b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,j=0,k=0,l=0,m=0,n=0,o=0;f=i;g=b;b=d;d=e;if((bi(b|0,d|0)|0)==0){h=b;j=h;i=f;return j|0}e=jr(b|0)|0;k=jr(d|0)|0;if((k|0)>(e|0)){l=b;b=d;d=l;m=k}else{m=e}e=fz(m+1|0)|0;l=e;k=e;e=0;n=b;while(1){if((a[d]|0)==0){break}do{if((a[b]|0)==(a[d]|0)){o=10}else{if((a[d]|0)==42){o=10;break}e=e+1|0;if((a[b]|0)==42){a[l]=a[d]|0}else{a[l]=94}}}while(0);if((o|0)==10){o=0;a[l]=a[b]|0}b=b+1|0;d=d+1|0;l=l+1|0}if((e|0)==0){fq(k,m+1|0);h=n;j=h;i=f;return j|0}else{ju(l|0,b|0)|0;l=eT(k,c[g+19048>>2]|0)|0;fq(k,m+1|0);h=l;j=h;i=f;return j|0}return 0}function cH(d,e){d=d|0;e=e|0;var f=0,g=0,h=0,j=0;f=i;g=d;d=e;if((b[g>>1]|0)!=(b[d>>1]|0)){h=0;j=h&1;i=f;return j|0}if((a[g+5|0]|0)!=(a[d+5|0]|0)){h=0;j=h&1;i=f;return j|0}h=(bi(c[g+12>>2]|0,c[d+12>>2]|0)|0)==0;j=h&1;i=f;return j|0}function cI(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0,j=0,k=0,l=0;d=i;e=a;a=b;c[55304]=(c[55304]|0)+1;b=c[e+12>>2]|0;f=c[a+12>>2]|0;while(1){if((b|0)!=0){g=(f|0)!=0}else{g=0}if(!g){break}if((cH(b,f)|0)==0){h=6;break}b=c[b+8>>2]|0;f=c[f+8>>2]|0}do{if((b|0)==0){if((f|0)!=0){break}b=c[e+16>>2]|0;f=c[a+16>>2]|0;while(1){if((b|0)!=0){j=(f|0)!=0}else{j=0}if(!j){break}if((cH(b,f)|0)==0){h=16;break}b=c[b+8>>2]|0;f=c[f+8>>2]|0}do{if((b|0)==0){if((f|0)!=0){break}k=1;l=k;i=d;return l|0}}while(0);k=0;l=k;i=d;return l|0}}while(0);k=0;l=k;i=d;return l|0}function cJ(b,d,e){b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,j=0,k=0,l=0,m=0;f=i;g=b;b=d;d=e;e=fC(b)|0;h=c[e+12>>2]|0;j=c[b+12>>2]|0;k=c[d+12>>2]|0;while(1){if((j|0)==0){break}c[h+12>>2]=cG(g,c[j+12>>2]|0,c[k+12>>2]|0)|0;if((a[j+5|0]|0)!=0){l=(a[k+5|0]|0)!=0}else{l=0}a[h+5|0]=l&1;h=c[h+8>>2]|0;j=c[j+8>>2]|0;k=c[k+8>>2]|0}h=c[e+16>>2]|0;j=c[b+16>>2]|0;k=c[d+16>>2]|0;while(1){if((j|0)==0){break}c[h+12>>2]=cG(g,c[j+12>>2]|0,c[k+12>>2]|0)|0;if((a[j+5|0]|0)!=0){m=(a[k+5|0]|0)!=0}else{m=0}a[h+5|0]=m&1;h=c[h+8>>2]|0;j=c[j+8>>2]|0;k=c[k+8>>2]|0}i=f;return e|0}function cK(a,d){a=a|0;d=d|0;var e=0,f=0,g=0,h=0,j=0,k=0,l=0;e=i;f=a;a=d;d=0;g=cC(a)|0;h=c[f+19064+(g<<2)>>2]|0;while(1){if((h|0)==0){break}d=c[(c[f+19060>>2]|0)+(c[h>>2]<<2)>>2]|0;if((cF(a,d)|0)!=0){j=4;break}h=c[h+4>>2]|0}if((h|0)==0){k=fC(a)|0;b[k+4>>1]=0;c[k>>2]=0;if((c[f+19056>>2]|0)==(c[f+19052>>2]|0)){cv(f)}h=fz(8)|0;c[h+4>>2]=c[f+19064+(g<<2)>>2];c[f+19064+(g<<2)>>2]=h;c[h>>2]=c[f+19056>>2];c[(c[f+19060>>2]|0)+(c[f+19056>>2]<<2)>>2]=k;g=f+19056|0;c[g>>2]=(c[g>>2]|0)+1;c[55306]=(c[55306]|0)+1;i=e;return}while(1){if((d|0)==0){break}if((cI(d,a)|0)!=0){j=11;break}d=c[d>>2]|0}if((j|0)==11){i=e;return}k=fC(a)|0;b[k+4>>1]=0;a=c[h>>2]|0;h=0;d=c[(c[f+19060>>2]|0)+(a<<2)>>2]|0;while(1){if((d|0)==0){break}l=cJ(f,k,d)|0;c[l>>2]=h;h=l;d=c[d>>2]|0}c[k>>2]=c[(c[f+19060>>2]|0)+(a<<2)>>2];c[(c[f+19060>>2]|0)+(a<<2)>>2]=k;while(1){if((h|0)==0){break}l=c[h>>2]|0;d=c[(c[f+19060>>2]|0)+(a<<2)>>2]|0;while(1){if((d|0)==0){break}if((cI(d,h)|0)!=0){j=22;break}d=c[d>>2]|0}if((j|0)==22){j=0}if((d|0)==0){c[55306]=(c[55306]|0)+1;c[h>>2]=c[(c[f+19060>>2]|0)+(a<<2)>>2];c[(c[f+19060>>2]|0)+(a<<2)>>2]=h}else{c[h>>2]=0;fr(h)}h=l}i=e;return}function cL(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0;d=i;e=a;a=b;b=c[a+12>>2]|0;c[a+12>>2]=0;f=c[a+16>>2]|0;while(1){if((f|0)==0){break}g=c[f+8>>2]|0;c[f+8>>2]=0;if((cD(e,a)|0)!=0){cK(e,a)}c[f+8>>2]=g;f=c[f+8>>2]|0}c[a+12>>2]=b;g=c[a+16>>2]|0;c[a+16>>2]=0;h=c[a+12>>2]|0;while(1){if((h|0)==0){break}b=c[h+8>>2]|0;c[h+8>>2]=0;if((cD(e,a)|0)!=0){cK(e,a)}c[h+8>>2]=b;h=c[h+8>>2]|0}c[a+16>>2]=g;h=c[a+12>>2]|0;while(1){if((h|0)==0){break}f=c[a+16>>2]|0;while(1){if((f|0)==0){break}b=c[h+8>>2]|0;g=c[f+8>>2]|0;c[f+8>>2]=0;c[h+8>>2]=0;if((cD(e,a)|0)!=0){cK(e,a)}c[h+8>>2]=b;c[f+8>>2]=g;f=c[f+8>>2]|0}h=c[h+8>>2]|0}i=d;return}function cM(b,d,e){b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,j=0,k=0,l=0;f=i;g=b;b=d;d=e;e=c[b+12>>2]|0;while(1){if((bg(a[e]|0)|0)==0){break}e=e+1|0}while(1){if((a[e]|0)==0){break}h=e;e=h+1|0;j=g;g=j+1|0;a[j]=a[h]|0;d=d-1|0}while(1){if((d|0)<=0){break}e=g;g=e+1|0;a[e]=42;d=d-1|0}if((a[b+5|0]|0)!=0){b=g;g=b+1|0;a[b]=42;k=g;a[k]=0;l=g;i=f;return l|0}else{b=g;g=b+1|0;a[b]=94;k=g;a[k]=0;l=g;i=f;return l|0}return 0}function cN(b,d){b=b|0;d=d|0;var e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0,n=0;e=i;f=b;b=d;d=c[(c[f+19060>>2]|0)+(b<<2)>>2]|0;g=0;h=c[d+12>>2]|0;while(1){if((h|0)==0){break}g=g+1|0;h=c[h+8>>2]|0}h=c[d+16>>2]|0;while(1){if((h|0)==0){break}g=g+1|0;h=c[h+8>>2]|0}j=fz(g<<2)|0;k=0;while(1){if((k|0)>=(g|0)){break}c[j+(k<<2)>>2]=0;k=k+1|0}while(1){if((d|0)==0){break}k=0;h=c[d+12>>2]|0;while(1){if((h|0)==0){break}l=c[h+12>>2]|0;while(1){if((bg(a[l]|0)|0)==0){break}l=l+1|0}m=jr(l|0)|0;if((m|0)>(c[j+(k<<2)>>2]|0)){c[j+(k<<2)>>2]=m}k=k+1|0;h=c[h+8>>2]|0}h=c[d+16>>2]|0;while(1){if((h|0)==0){break}l=c[h+12>>2]|0;while(1){if((bg(a[l]|0)|0)==0){break}l=l+1|0}m=jr(l|0)|0;if((m|0)>(c[j+(k<<2)>>2]|0)){c[j+(k<<2)>>2]=m}k=k+1|0;h=c[h+8>>2]|0}d=c[d>>2]|0}m=0;k=0;while(1){if((k|0)>=(g|0)){break}m=m+((c[j+(k<<2)>>2]|0)+1)|0;k=k+1|0}d=c[(c[f+19060>>2]|0)+(b<<2)>>2]|0;while(1){if((d|0)==0){break}k=0;b=fz(m+1|0)|0;l=b;n=b;h=c[d+12>>2]|0;while(1){if((h|0)==0){break}l=cM(l,h,c[j+(k<<2)>>2]|0)|0;k=k+1|0;h=c[h+8>>2]|0}h=c[d+16>>2]|0;while(1){if((h|0)==0){break}l=cM(l,h,c[j+(k<<2)>>2]|0)|0;k=k+1|0;h=c[h+8>>2]|0}l=eT(n,c[f+19048>>2]|0)|0;fq(n,m+1|0);c[d+8>>2]=l;d=c[d>>2]|0}fq(j,g<<2);i=e;return}function cO(a){a=a|0;var b=0,d=0,e=0;b=i;d=a;cw(d);cu(d);c[55304]=0;c[55306]=0;a=0;while(1){if((a|0)>=(c[d+4>>2]|0)){break}e=c[d+8+(a*76|0)+68>>2]|0;while(1){if((e|0)==0){break}cL(d,e);e=c[e>>2]|0}a=a+1|0}a=0;while(1){if((a|0)>=(c[d+19056>>2]|0)){break}cN(d,a);a=a+1|0}i=b;return}function cP(a){a=a|0;var b=0,d=0,e=0,f=0;b=i;d=a;aw(10640,(a=i,i=i+8|0,c[a>>2]=c[d+19056>>2],a)|0)|0;i=a;aw(7608,(a=i,i=i+8|0,c[a>>2]=c[55306],a)|0)|0;i=a;if((c[d+19056>>2]|0)==0){e=c[55304]|0;f=aw(5056,(a=i,i=i+8|0,c[a>>2]=e,a)|0)|0;i=a;i=b;return}aw(6088,(a=i,i=i+8|0,h[a>>3]=+(c[55306]|0)/+(c[d+19056>>2]|0),a)|0)|0;i=a;e=c[55304]|0;f=aw(5056,(a=i,i=i+8|0,c[a>>2]=e,a)|0)|0;i=a;i=b;return}function cQ(d,e,f){d=d|0;e=e|0;f=f|0;var g=0,h=0,j=0,k=0,l=0;g=i;h=d;d=e;e=f;f=0;j=c[h+19064+((cC(d)|0)<<2)>>2]|0;while(1){if((j|0)==0){break}f=c[(c[h+19060>>2]|0)+(c[j>>2]<<2)>>2]|0;if((cF(d,f)|0)!=0){k=4;break}j=c[j+4>>2]|0}if((j|0)==0){aw(4424,(l=i,i=i+8|0,c[l>>2]=3704,l)|0)|0;i=l;aO(1)}while(1){if((f|0)==0){break}if((cI(f,d)|0)!=0){k=12;break}f=c[f>>2]|0}if((f|0)!=0){b[e>>1]=c[j>>2];c[e+12>>2]=c[f+8>>2];a[e+4|0]=1;a[e+5|0]=0;i=g;return}else{aw(4424,(l=i,i=i+8|0,c[l>>2]=3136,l)|0)|0;i=l;aO(1)}}function cR(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0,n=0,o=0;d=i;i=i+40|0;e=a;a=b;if((a|0)==0){f=0;g=f;i=d;return g|0}b=d+16|0;h=fs(d|0)|0;j=0;k=b;l=a;c[k>>2]=c[l>>2];c[k+4>>2]=c[l+4>>2];c[k+8>>2]=c[l+8>>2];c[k+12>>2]=c[l+12>>2];c[k+16>>2]=c[l+16>>2];l=c[a+12>>2]|0;c[a+12>>2]=0;k=c[a+16>>2]|0;while(1){if((k|0)==0){break}m=c[k+8>>2]|0;c[k+8>>2]=0;if((cD(e,a)|0)!=0){cQ(e,a,h);c[b+12>>2]=l;c[b+16>>2]=h;c[h+8>>2]=m;n=fC(b)|0;c[n>>2]=j;j=n;c[b+12>>2]=h;c[h+8>>2]=l;c[b+16>>2]=m;n=fC(b)|0;c[n>>2]=j;j=n}c[k+8>>2]=m;k=c[k+8>>2]|0}c[a+12>>2]=l;m=c[a+16>>2]|0;c[a+16>>2]=0;o=c[a+12>>2]|0;while(1){if((o|0)==0){break}l=c[o+8>>2]|0;c[o+8>>2]=0;if((cD(e,a)|0)!=0){cQ(e,a,h);c[b+12>>2]=l;c[b+16>>2]=h;c[h+8>>2]=m;n=fC(b)|0;c[n>>2]=j;j=n;c[b+12>>2]=h;c[h+8>>2]=l;c[b+16>>2]=m;n=fC(b)|0;c[n>>2]=j;j=n}c[o+8>>2]=l;o=c[o+8>>2]|0}c[a+16>>2]=m;o=c[a+12>>2]|0;while(1){if((o|0)==0){break}k=c[a+16>>2]|0;while(1){if((k|0)==0){break}l=c[o+8>>2]|0;m=c[k+8>>2]|0;c[k+8>>2]=0;c[o+8>>2]=0;if((cD(e,a)|0)!=0){cQ(e,a,h);c[b+12>>2]=l;c[b+16>>2]=h;c[h+8>>2]=m;n=fC(b)|0;c[n>>2]=j;j=n;c[b+12>>2]=h;c[h+8>>2]=l;c[b+16>>2]=m;n=fC(b)|0;c[n>>2]=j;j=n}c[o+8>>2]=l;c[k+8>>2]=m;k=c[k+8>>2]|0}o=c[o+8>>2]|0}f=j;g=f;i=d;return g|0}function cS(a,b){a=a|0;b=b|0;var d=0,e=0;d=i;e=a;a=b;b=0;while(1){if((a|0)==0){break}b=fJ(b,cR(e,a)|0)|0;a=c[a>>2]|0}i=d;return b|0}function cT(d){d=d|0;var e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0,n=0;e=i;i=i+72|0;f=d;d=fs(e+24|0)|0;g=fs(e+40|0)|0;h=fs(e+56|0)|0;j=e|0;k=0;c[d+8>>2]=0;c[g+8>>2]=h;c[h+8>>2]=0;a[h+4|0]=2;a[d+4|0]=2;a[g+4|0]=1;a[h+5|0]=0;a[g+5|0]=0;a[d+5|0]=0;c[j+12>>2]=d;c[j+16>>2]=g;c[j+8>>2]=2544;c[j>>2]=0;b[j+4>>1]=0;l=0;while(1){if((l|0)>=(c[f+19056>>2]|0)){break}m=c[(c[f+19060>>2]|0)+(l<<2)>>2]|0;while(1){if((m|0)==0){break}n=c[m+8>>2]|0;c[h+12>>2]=n;c[g+12>>2]=n;c[d+12>>2]=n;n=l&65535;b[h>>1]=n;b[g>>1]=n;b[d>>1]=n;n=fC(j)|0;c[n>>2]=k;k=n;m=c[m>>2]|0}l=l+1|0}i=e;return k|0}function cU(d,e){d=d|0;e=e|0;var f=0,g=0,h=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0;f=i;g=d;d=e;e=0;h=0;while(1){if((h|0)>=(c[g+19056>>2]|0)){break}j=c[(c[g+19060>>2]|0)+(h<<2)>>2]|0;while(1){if((j|0)==0){break}k=cR(g,j)|0;l=fC(j)|0;c[l>>2]=k;k=l;while(1){if((k|0)==0){break}l=c[k>>2]|0;m=fs(fz(16)|0)|0;n=fs(fz(16)|0)|0;c[m+8>>2]=0;c[n+8>>2]=0;a[n+4|0]=2;a[m+4|0]=2;a[n+5|0]=0;a[m+5|0]=0;o=c[j+8>>2]|0;c[n+12>>2]=o;c[m+12>>2]=o;o=h&65535;b[n>>1]=o;b[m>>1]=o;c[k+8>>2]=d;if((c[k+16>>2]|0)==0){c[k+16>>2]=n}else{p=c[k+16>>2]|0;while(1){if((c[p+8>>2]|0)==0){break}p=c[p+8>>2]|0}c[p+8>>2]=n}if((c[k+12>>2]|0)==0){c[k+12>>2]=m}else{p=c[k+12>>2]|0;while(1){if((c[p+8>>2]|0)==0){break}p=c[p+8>>2]|0}c[p+8>>2]=m}c[k>>2]=e;e=k;k=l}j=c[j>>2]|0}h=h+1|0}if((bi(d|0,1968)|0)==0){k=e;while(1){if((k|0)==0){break}m=c[k+16>>2]|0;while(1){if((m|0)==0){break}L42:do{if((a[c[m+12>>2]|0]|0)==83){do{if((a[(c[m+12>>2]|0)+1|0]|0)!=94){if((a[(c[m+12>>2]|0)+1|0]|0)==115){break}if((a[(c[m+12>>2]|0)+1|0]|0)==112){break}if((a[(c[m+12>>2]|0)+1|0]|0)!=0){break L42}}}while(0);c[m+12>>2]=11512}}while(0);m=c[m+8>>2]|0}m=c[k+12>>2]|0;while(1){if((m|0)==0){break}L55:do{if((a[c[m+12>>2]|0]|0)==83){if((a[(c[m+12>>2]|0)+1|0]|0)!=73){break}do{if((a[(c[m+12>>2]|0)+2|0]|0)!=94){if((a[(c[m+12>>2]|0)+2|0]|0)==115){break}if((a[(c[m+12>>2]|0)+2|0]|0)==112){break}if((a[(c[m+12>>2]|0)+2|0]|0)!=0){break L55}}}while(0);c[m+12>>2]=10896}}while(0);m=c[m+8>>2]|0}k=c[k>>2]|0}q=e;i=f;return q|0}if((bi(d|0,10520)|0)==0){r=56}else{if((bi(d|0,10184)|0)==0){r=56}}if((r|0)==56){k=e;while(1){if((k|0)==0){break}m=c[k+16>>2]|0;while(1){if((m|0)==0){break}L80:do{if((a[c[m+12>>2]|0]|0)==83){do{if((a[(c[m+12>>2]|0)+1|0]|0)!=94){if((a[(c[m+12>>2]|0)+1|0]|0)==115){break}if((a[(c[m+12>>2]|0)+1|0]|0)!=112){break L80}}}while(0);c[m+12>>2]=9736}}while(0);m=c[m+8>>2]|0}m=c[k+12>>2]|0;while(1){if((m|0)==0){break}L92:do{if((a[c[m+12>>2]|0]|0)==83){if((a[(c[m+12>>2]|0)+1|0]|0)!=73){break}do{if((a[(c[m+12>>2]|0)+2|0]|0)!=94){if((a[(c[m+12>>2]|0)+2|0]|0)==115){break}if((a[(c[m+12>>2]|0)+2|0]|0)!=112){break L92}}}while(0);c[m+12>>2]=9536}}while(0);m=c[m+8>>2]|0}k=c[k>>2]|0}}q=e;i=f;return q|0}function cV(b){b=b|0;var d=0,e=0,f=0;d=i;e=c[b+19040>>2]|0;b=0;f=0;while(1){if((f|0)>=(c[e+12>>2]|0)){break}a[117040+f|0]=0;f=f+1|0}f=0;while(1){if((f|0)>=(c[e+1016>>2]|0)){break}if((a[(c[e+1020+(f*20|0)+8>>2]|0)+4|0]|0)==2){b=b+1|0;a[117040+(c[e+1020+(f*20|0)>>2]|0)|0]=1}else{if((a[(c[e+1020+(f*20|0)+12>>2]|0)+4|0]|0)==2){b=b+1|0;a[117040+(c[e+1020+(f*20|0)+4>>2]|0)|0]=1}}f=f+1|0}i=d;return(b|0)>0|0}function cW(a){a=a|0;var b=0,d=0,e=0,f=0;b=i;d=a;a=0;while(1){if((a|0)>=(c[d+12>>2]|0)){break}e=c[115040+(a<<2)>>2]|0;while(1){if((e|0)==0){break}f=c[e>>2]|0;fq(e,12);e=f}a=a+1|0}i=b;return}function cX(d){d=d|0;var e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0;e=i;f=d;d=c[f+19040>>2]|0;g=0;while(1){if((g|0)>=(c[d+12>>2]|0)){break}c[115040+(g<<2)>>2]=0;g=g+1|0}h=-1;while(1){if((h|0)>1){break}j=0;while(1){if((j|0)>=(c[d+1016>>2]|0)){break}do{if((h|0)<0){g=c[d+1020+(j*20|0)>>2]|0;if((a[117040+g|0]|0)!=0){k=c[d+1020+(j*20|0)+8>>2]|0;l=c[d+1020+(j*20|0)+12>>2]|0;m=c[d+16+(g<<2)>>2]|0;n=c[m+16>>2]|0;o=16;break}else{break}}else{g=c[d+1020+(j*20|0)+4>>2]|0;if((a[117040+g|0]|0)!=0){k=c[d+1020+(j*20|0)+12>>2]|0;l=c[d+1020+(j*20|0)+8>>2]|0;m=c[d+16+(g<<2)>>2]|0;n=c[m+12>>2]|0;o=16;break}else{break}}}while(0);L21:do{if((o|0)==16){o=0;if((a[k+4|0]|0)==2){break}do{if((b[k>>1]|0)!=-1){if((b[k>>1]|0)>=0){break}break L21}}while(0);p=fz(12)|0;c[p>>2]=c[115040+(g<<2)>>2];c[115040+(g<<2)>>2]=p;c[p+4>>2]=l;if((a[k+4|0]|0)==1){c[p+8>>2]=0}else{c[p+8>>2]=1;do{if((c[m+12>>2]|0)!=0){if((a[(c[m+12>>2]|0)+4|0]|0)!=1){o=26;break}q=c[m+12>>2]|0}else{o=26}}while(0);if((o|0)==26){o=0;do{if((c[m+16>>2]|0)!=0){if((a[(c[m+16>>2]|0)+4|0]|0)!=1){o=29;break}q=c[m+16>>2]|0}else{o=29}}while(0);if((o|0)==29){o=0;q=0}}if((q|0)!=0){r=c[(c[f+19060>>2]|0)+(b[q>>1]<<2)>>2]|0;if((h|0)>0){s=c[r+12>>2]|0}else{s=c[r+16>>2]|0}while(1){if((s|0)==0){break}r=p+8|0;c[r>>2]=(c[r>>2]|0)+1;s=c[s+8>>2]|0}}while(1){if((n|0)==(k|0)){break}if((b[n>>1]|0)<0){r=p+8|0;c[r>>2]=(c[r>>2]|0)+1}n=c[n+8>>2]|0}c[p+8>>2]=aa(c[p+8>>2]|0,-h|0)|0}}}while(0);j=j+1|0}h=h+2|0}i=e;return}function cY(b,d){b=b|0;d=d|0;var e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0;e=i;f=b;b=d;d=0;while(1){if((a[f]|0)!=0){g=(a[b]|0)!=0}else{g=0}if(!g){break}if((a[f]|0)!=(a[b]|0)){if((a[b]|0)!=42){if((a[f]|0)!=94){h=10;break}}d=d+1|0}f=f+1|0;b=b+1|0}if((h|0)==10){j=0;k=j;i=e;return k|0}if((a[f]|0)!=0){l=aw(4424,(m=i,i=i+8|0,c[m>>2]=9312,m)|0)|0;i=m;aO(1);return 0}if((a[b]|0)!=0){l=aw(4424,(m=i,i=i+8|0,c[m>>2]=9312,m)|0)|0;i=m;aO(1);return 0}j=(d|0)>0|0;k=j;i=e;return k|0}function cZ(b,d,e){b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0;f=i;g=d;d=c[(c[b+19060>>2]|0)+(e<<2)>>2]|0;while(1){if((d|0)==0){break}e=c[d+12>>2]|0;b=c[g+12>>2]|0;while(1){if((e|0)==0){break}if((bi(c[e+12>>2]|0,c[b+12>>2]|0)|0)!=0){h=7;break}if((a[e+5|0]|0)!=(a[b+5|0]|0)){h=7;break}e=c[e+8>>2]|0;b=c[b+8>>2]|0}if((h|0)==7){h=0}if((e|0)==0){e=c[d+16>>2]|0;b=c[g+16>>2]|0;while(1){if((e|0)==0){break}if((bi(c[e+12>>2]|0,c[b+12>>2]|0)|0)!=0){h=16;break}if((a[e+5|0]|0)!=(a[b+5|0]|0)){h=16;break}e=c[e+8>>2]|0;b=c[b+8>>2]|0}if((h|0)==16){h=0}if((e|0)==0){h=20;break}}d=c[d>>2]|0}if((d|0)!=0){i=f;return d|0}else{aw(4424,(d=i,i=i+8|0,c[d>>2]=8920,d)|0)|0;i=d;aO(1);return 0}return 0}function c_(d){d=d|0;var e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0;e=i;i=i+16|0;f=e|0;g=d;d=0;h=c[g+19040>>2]|0;a[f+4|0]=1;fs(f)|0;cX(g);j=0;L1:while(1){if((j|0)>=(c[h+12>>2]|0)){k=63;break}if((a[117040+j|0]|0)!=0){l=c[h+16+(j<<2)>>2]|0;m=c[l+12>>2]|0;while(1){if((m|0)==0){break}if((a[m+4|0]|0)==2){k=8;break}m=c[m+8>>2]|0}if((k|0)==8){k=0;d=b[m>>1]|0}if((m|0)==0){k=12;break}do{if((c[l+12>>2]|0)!=0){if((a[(c[l+12>>2]|0)+4|0]|0)!=1){k=16;break}n=c[l+12>>2]|0}else{k=16}}while(0);if((k|0)==16){k=0;do{if((c[l+16>>2]|0)!=0){if((a[(c[l+16>>2]|0)+4|0]|0)!=1){k=19;break}n=c[l+16>>2]|0}else{k=19}}while(0);if((k|0)==19){k=0;n=0}}l=c[(c[g+19060>>2]|0)+(d<<2)>>2]|0;while(1){if((l|0)==0){break}if((cY(c[l+8>>2]|0,c[m+12>>2]|0)|0)!=0){o=c[115040+(j<<2)>>2]|0;while(1){if((o|0)==0){break}p=c[o+8>>2]|0;if((p|0)==0){if((n|0)==0){k=29;break L1}b[f>>1]=b[n>>1]|0;if((b[n>>1]|0)==(d|0)){c[f+12>>2]=c[l+8>>2]}else{c[f+12>>2]=c[(cZ(g,l,b[n>>1]|0)|0)+8>>2]}if((it(f,c[o+4>>2]|0)|0)==0){k=34;break}}else{if((p|0)>0){q=c[l+16>>2]|0;while(1){if((p|0)<=1){break}q=c[q+8>>2]|0;p=p-1|0}if((it(q,c[o+4>>2]|0)|0)==0){k=42;break}}else{q=c[l+12>>2]|0;while(1){if((p|0)>=-1){break}q=c[q+8>>2]|0;p=p+1|0}if((it(q,c[o+4>>2]|0)|0)==0){k=49;break}}}o=c[o>>2]|0}if((k|0)==42){k=0}else if((k|0)==34){k=0}else if((k|0)==49){k=0}if((o|0)==0){k=55;break}}l=c[l>>2]|0}if((k|0)==55){k=0}if((l|0)!=0){k=59;break}}j=j+1|0}if((k|0)==29){aw(4424,(r=i,i=i+8|0,c[r>>2]=8168,r)|0)|0;i=r;aO(1);return 0}else if((k|0)==63){s=h;cW(s);t=j;u=h;v=u+12|0;w=c[v>>2]|0;x=(t|0)==(w|0);y=x&1;i=e;return y|0}else if((k|0)==12){aw(4424,(r=i,i=i+8|0,c[r>>2]=8544,r)|0)|0;i=r;aO(1);return 0}else if((k|0)==59){s=h;cW(s);t=j;u=h;v=u+12|0;w=c[v>>2]|0;x=(t|0)==(w|0);y=x&1;i=e;return y|0}return 0}function c$(d,e){d=d|0;e=e|0;var f=0,g=0,h=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,A=0,B=0,C=0,D=0,E=0,F=0,G=0,H=0,I=0,J=0,K=0,L=0,M=0,N=0,O=0,P=0,Q=0,R=0,S=0,T=0,U=0,V=0,W=0,X=0,Y=0,Z=0,_=0,$=0,aa=0,ab=0;f=i;g=d;d=e;e=c[g+19040>>2]|0;h=-1;L1:while(1){if((h|0)>1){j=70;break}k=0;while(1){if((k|0)>=(c[e+1016>>2]|0)){break}L7:do{if((c[c[(c[d+4>>2]|0)+(k<<2)>>2]>>2]|0)!=-1){do{if((h|0)<0){l=c[e+1020+(k*20|0)>>2]|0;if((a[117040+l|0]|0)!=0){m=c[e+1020+(k*20|0)+8>>2]|0;n=c[e+16+(l<<2)>>2]|0;o=c[e+16+(c[c[(c[d+4>>2]|0)+(k<<2)>>2]>>2]<<2)>>2]|0;p=c[n+16>>2]|0;break}else{break L7}}else{l=c[e+1020+(k*20|0)+4>>2]|0;if((a[117040+l|0]|0)!=0){m=c[e+1020+(k*20|0)+12>>2]|0;n=c[e+16+(l<<2)>>2]|0;o=c[e+16+(c[(c[(c[d+4>>2]|0)+(k<<2)>>2]|0)+4>>2]<<2)>>2]|0;p=c[n+12>>2]|0;break}else{break L7}}}while(0);if((b[m>>1]|0)!=-1){break}q=0;do{if((c[n+12>>2]|0)!=0){if((a[(c[n+12>>2]|0)+4|0]|0)!=1){j=19;break}r=c[n+12>>2]|0}else{j=19}}while(0);if((j|0)==19){j=0;do{if((c[n+16>>2]|0)!=0){if((a[(c[n+16>>2]|0)+4|0]|0)!=1){j=22;break}r=c[n+16>>2]|0}else{j=22}}while(0);if((j|0)==22){j=0;r=0}}if((r|0)!=0){s=c[(c[g+19060>>2]|0)+(b[r>>1]<<2)>>2]|0;if((h|0)>0){t=c[s+12>>2]|0}else{t=c[s+16>>2]|0}while(1){if((t|0)==0){break}q=q+1|0;t=c[t+8>>2]|0}}while(1){if((p|0)==(m|0)){break}if((b[p>>1]|0)<0){q=q+1|0}p=c[p+8>>2]|0}do{if((c[o+12>>2]|0)!=0){if((a[(c[o+12>>2]|0)+4|0]|0)!=1){j=42;break}u=c[o+12>>2]|0}else{j=42}}while(0);if((j|0)==42){j=0;if((c[o+16>>2]|0)==0){j=72;break L1}if((a[(c[o+16>>2]|0)+4|0]|0)!=1){j=71;break L1}u=c[o+16>>2]|0}n=c[(c[g+19060>>2]|0)+(b[u>>1]<<2)>>2]|0;while(1){if((n|0)==0){break}if((c[n+8>>2]|0)==(c[u+12>>2]|0)){j=50;break}n=c[n>>2]|0}if((j|0)==50){j=0}if((n|0)==0){j=54;break L1}if((h|0)<0){v=c[n+16>>2]|0;while(1){if((q|0)<=0){break}q=q-1|0;v=c[v+8>>2]|0}fF(c[(c[(c[d+4>>2]|0)+(k<<2)>>2]|0)+8>>2]|0);s=fG(v)|0;c[(c[(c[d+4>>2]|0)+(k<<2)>>2]|0)+8>>2]=s}else{v=c[n+12>>2]|0;while(1){if((q|0)<=0){break}q=q-1|0;v=c[v+8>>2]|0}fF(c[(c[(c[d+4>>2]|0)+(k<<2)>>2]|0)+12>>2]|0);q=fG(v)|0;c[(c[(c[d+4>>2]|0)+(k<<2)>>2]|0)+12>>2]=q}}}while(0);k=k+1|0}h=h+2|0}if((j|0)==54){aw(4424,(w=i,i=i+8|0,c[w>>2]=7224,w)|0)|0;i=w;aO(1)}else if((j|0)==70){i=f;return}else if((j|0)==71){x=l;y=aw(8024,(w=i,i=i+8|0,c[w>>2]=x,w)|0)|0;i=w;z=k;A=e;B=A+1020|0;C=B+(z*20|0)|0;D=C|0;E=c[D>>2]|0;F=k;G=e;H=G+1020|0;I=H+(F*20|0)|0;J=I+4|0;K=c[J>>2]|0;L=aw(7872,(w=i,i=i+16|0,c[w>>2]=E,c[w+8>>2]=K,w)|0)|0;i=w;M=k;N=d;O=N+4|0;P=c[O>>2]|0;Q=P+(M<<2)|0;R=c[Q>>2]|0;S=R|0;T=c[S>>2]|0;U=k;V=d;W=V+4|0;X=c[W>>2]|0;Y=X+(U<<2)|0;Z=c[Y>>2]|0;_=Z+4|0;$=c[_>>2]|0;aa=aw(7648,(w=i,i=i+16|0,c[w>>2]=T,c[w+8>>2]=$,w)|0)|0;i=w;ab=aw(4424,(w=i,i=i+8|0,c[w>>2]=7432,w)|0)|0;i=w;aO(1)}else if((j|0)==72){x=l;y=aw(8024,(w=i,i=i+8|0,c[w>>2]=x,w)|0)|0;i=w;z=k;A=e;B=A+1020|0;C=B+(z*20|0)|0;D=C|0;E=c[D>>2]|0;F=k;G=e;H=G+1020|0;I=H+(F*20|0)|0;J=I+4|0;K=c[J>>2]|0;L=aw(7872,(w=i,i=i+16|0,c[w>>2]=E,c[w+8>>2]=K,w)|0)|0;i=w;M=k;N=d;O=N+4|0;P=c[O>>2]|0;Q=P+(M<<2)|0;R=c[Q>>2]|0;S=R|0;T=c[S>>2]|0;U=k;V=d;W=V+4|0;X=c[W>>2]|0;Y=X+(U<<2)|0;Z=c[Y>>2]|0;_=Z+4|0;$=c[_>>2]|0;aa=aw(7648,(w=i,i=i+16|0,c[w>>2]=T,c[w+8>>2]=$,w)|0)|0;i=w;ab=aw(4424,(w=i,i=i+8|0,c[w>>2]=7432,w)|0)|0;i=w;aO(1)}}function c0(a){a=a|0;var b=0,d=0;b=i;d=a;a=0;while(1){if((a|0)>=(c[d+14924>>2]|0)){break}c1(c[d+4+(a<<2)>>2]|0);a=a+1|0}a=0;while(1){if((a|0)>=(c[d>>2]|0)){break}c1(c[d+1008+(a*28|0)+8>>2]|0);c2(c[d+1008+(a*28|0)+20>>2]|0);a=a+1|0}c1(c[d+1004>>2]|0);c[d+1004>>2]=0;i=b;return}function c1(a){a=a|0;var b=0,d=0;b=i;d=a;while(1){if((d|0)==0){break}a=c[d+12>>2]|0;fq(d,16);d=a}i=b;return}function c2(a){a=a|0;var b=0,d=0;b=i;d=a;while(1){if((d|0)==0){break}a=c[d+8>>2]|0;fq(d,12);d=a}i=b;return}function c3(a){a=a|0;var b=0,d=0;b=i;d=a;while(1){if((d|0)==0){break}a=c[d>>2]|0;fq(d,8);d=a}i=b;return}function c4(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0;b=i;d=a;a=0;e=0;while(1){if((d|0)==0){break}f=fz(8)|0;g=f;h=d;c[g>>2]=c[h>>2];c[g+4>>2]=c[h+4>>2];if((e|0)==0){e=f;a=f}else{c[a>>2]=f;a=f}d=c[d>>2]|0}i=b;return e|0}function c5(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0;b=i;d=a;a=0;e=0;if((e3(c[d+12>>2]|0)|0)==0){i=b;return}f=0;while(1){g=(c[(c[d>>2]|0)+48>>2]|0)+(f*24|0)|0;if((c[g+20>>2]|0)==0){break}if((e2(c[d+12>>2]|0,c[g>>2]|0)|0)!=0){h=a;a=h+1|0;c[(c[d+20>>2]|0)+(h<<2)>>2]=f;e_(c[d+16>>2]|0,c[g>>2]|0)|0}f=f+1|0}c[(c[d+20>>2]|0)+(a<<2)>>2]=-1;f=0;while(1){g=(c[(c[d>>2]|0)+52>>2]|0)+(f*24|0)|0;if((c[g+20>>2]|0)==0){break}if((e2(c[d+12>>2]|0,c[g>>2]|0)|0)!=0){h=e;e=h+1|0;c[(c[d+24>>2]|0)+(h<<2)>>2]=f;e_(c[d+16>>2]|0,c[g>>2]|0)|0}f=f+1|0}c[(c[d+24>>2]|0)+(e<<2)>>2]=-1;if((c[24072]|0)<=1){i=b;return}f=e3(c[d+12>>2]|0)|0;aw(5752,(d=i,i=i+8|0,c[d>>2]=f,d)|0)|0;i=d;aw(10016,(d=i,i=i+16|0,c[d>>2]=a,c[d+8>>2]=e,d)|0)|0;i=d;i=b;return}function c6(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0;d=i;e=b;if((e|0)==0){f=0;g=f;i=d;return g|0}else{b=fz(15964)|0;c[b>>2]=e4(a,e)|0;c[b+28>>2]=eQ()|0;c[b+12>>2]=eV(1024)|0;c[b+16>>2]=eV(1024)|0;c[b+20>>2]=fz((c[(c[b>>2]|0)+68>>2]|0)+1<<2)|0;c[b+24>>2]=fz((c[(c[b>>2]|0)+72>>2]|0)+1<<2)|0;c[c[b+20>>2]>>2]=-1;c[c[b+24>>2]>>2]=-1;c[b+1032>>2]=0;c[b+2040>>2]=0;c[b+8>>2]=0;c[b+4>>2]=0;f=b;g=f;i=d;return g|0}return 0}function c7(a){a=a|0;var b=0,d=0;b=i;d=a;if((d|0)==0){i=b;return}else{eU(c[d+28>>2]|0);eX(c[d+12>>2]|0);eX(c[d+16>>2]|0);fq(c[d+20>>2]|0,(c[(c[d>>2]|0)+68>>2]|0)+1<<2);fq(c[d+24>>2]|0,(c[(c[d>>2]|0)+72>>2]|0)+1<<2);e9(c[d>>2]|0);c8(d);fq(d,15964);i=b;return}}function c8(a){a=a|0;var b=0,d=0;b=i;d=a;if((c[d+1032>>2]|0)==0){i=b;return}a=0;while(1){if((a|0)>=497){break}c3(c[(c[d+1032>>2]|0)+(a<<2)>>2]|0);a=a+1|0}fq(c[d+1032>>2]|0,1992);c[d+1032>>2]=0;i=b;return}function c9(a){a=a|0;var b=0,d=0;b=i;d=a;if((d|0)==0){i=b;return}else{eY(c[d+12>>2]|0);eY(c[d+16>>2]|0);eU(c[d+28>>2]|0);c[d+28>>2]=eQ()|0;c[d+8>>2]=0;c[d+4>>2]=0;c[c[d+20>>2]>>2]=-1;c[c[d+24>>2]>>2]=-1;c8(d);i=b;return}}function da(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,g=0;f=i;g=a;a=e;if((g|0)==0){i=f;return}if((c[d+4>>2]|0)<(c[b+28>>2]|0)){i=f;return}b=0;while(1){if((b|0)>=(c[a>>2]|0)){break}if((c[c[(c[a+4>>2]|0)+(b<<2)>>2]>>2]|0)!=-1){d=eT(c[(c[(c[a+4>>2]|0)+(b<<2)>>2]|0)+16>>2]|0,c[g+28>>2]|0)|0;e_(c[g+12>>2]|0,d)|0}b=b+1|0}i=f;return}function db(b,d,e,f,g){b=b|0;d=d|0;e=e|0;f=f|0;g=g|0;var h=0,j=0,k=0,l=0,m=0;h=i;i=i+8|0;j=h|0;k=b;b=e;e=f;f=g;if((k|0)==0){l=0;m=l;i=h;return m|0}c[k+2040>>2]=0;c[k+15960>>2]=c[b+4>>2];dc(k);do{if((a[b+23160|0]|0)==0){if((c[b+4>>2]|0)<(c[d+28>>2]|0)){break}c5(k)}}while(0);a[b+23160|0]=1;b=dd(k,e,j)|0;if((b|0)==(-1|0)){e=k+4|0;c[e>>2]=(c[e>>2]|0)+1;c[(c[k+1032>>2]|0)+1988>>2]=c[j>>2];l=c[k+1032>>2]|0;m=l;i=h;return m|0}else if((b|0)==0){c[(c[k+1032>>2]|0)+1988>>2]=0}else if((b|0)==1){b=k+8|0;c[b>>2]=(c[b>>2]|0)+1;c[(c[k+1032>>2]|0)+1988>>2]=c[j>>2]}de(k);if((f|0)!=0){c0(k+1036|0)}l=c[k+1032>>2]|0;m=l;i=h;return m|0}function dc(a){a=a|0;var b=0,c=0;b=i;c=a;c8(c);dG(c);i=b;return}function dd(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0;e=i;f=a;a=b;b=d;if((dg(f,8,a,c[(c[f>>2]|0)+48>>2]|0,c[f+20>>2]|0,b)|0)==0){d=0;while(1){if((d|0)>=(c[f+15960>>2]|0)){break}c[f+1040+(d<<2)>>2]=0;d=d+1|0}c[f+1036>>2]=0;g=-1;h=g;i=e;return h|0}di(f,a);dj(f,a);dk(f,a);if((dg(f,12,a,c[(c[f>>2]|0)+48>>2]|0,c[f+20>>2]|0,b)|0)==0){g=1;h=g;i=e;return h|0}if((dg(f,2,a,c[(c[f>>2]|0)+52>>2]|0,c[f+24>>2]|0,b)|0)==0){g=1;h=g;i=e;return h|0}if((dn(f,6,a,c[(c[f>>2]|0)+44>>2]|0,b)|0)==0){g=1;h=g;i=e;return h|0}if((dn(f,4,a,c[(c[f>>2]|0)+40>>2]|0,b)|0)==0){g=1;h=g;i=e;return h|0}if((dn(f,10,a,c[(c[f>>2]|0)+56>>2]|0,b)|0)!=0){g=0;h=g;i=e;return h|0}else{g=1;h=g;i=e;return h|0}return 0}function de(a){a=a|0;var b=0,d=0,e=0,f=0;b=i;d=a;a=0;while(1){if((a|0)>=(c[d+1036>>2]|0)){break}e=c[d+2044+(a*28|0)+8>>2]|0;while(1){if((e|0)==0){break}f=fz(8)|0;c[f>>2]=c[(c[d+1032>>2]|0)+(c[e>>2]<<2)>>2];c[(c[d+1032>>2]|0)+(c[e>>2]<<2)>>2]=f;c[f+4>>2]=c[d+2044+(a*28|0)+16>>2];e=c[e+12>>2]|0}a=a+1|0}i=b;return}function df(b,c){b=b|0;c=c|0;var d=0,e=0,f=0,g=0,h=0,j=0,k=0;d=i;e=b;b=c;while(1){if((bg(a[e]|0)|0)!=0){f=1}else{f=(bg(a[b]|0)|0)!=0}if(!f){break}if((a[e]|0)!=(a[b]|0)){g=6;break}e=e+1|0;b=b+1|0}if((g|0)==6){h=0;j=h;i=d;return j|0}while(1){if((a[e]|0)==0){g=20;break}if((a[e]|0)!=35){if((a[b]|0)==0){k=42}else{k=a[b]|0}if((a[e]|0)!=(k<<24>>24|0)){g=15;break}}e=e+1|0;if((a[b]|0)!=0){b=b+1|0}}if((g|0)==20){h=1;j=h;i=d;return j|0}else if((g|0)==15){h=0;j=h;i=d;return j|0}return 0}function dg(a,b,d,e,f,g){a=a|0;b=b|0;d=d|0;e=e|0;f=f|0;g=g|0;var h=0,j=0,k=0,l=0,m=0,n=0,o=0;h=i;j=a;a=b;b=d;d=e;e=f;f=g;if((e3(c[j+12>>2]|0)|0)==0){k=dn(j,a,b,d,f)|0;l=k;i=h;return l|0}g=0;while(1){m=c[e+(g<<2)>>2]|0;n=m;if((m|0)==-1){o=9;break}c[f>>2]=c[d+(n*24|0)+20>>2];if((bk[a&15](j,b,d+(n*24|0)|0)|0)==0){o=6;break}g=g+1|0}if((o|0)==6){k=0;l=k;i=h;return l|0}else if((o|0)==9){k=1;l=k;i=h;return l|0}return 0}function dh(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,j=0,k=0;a=i;e=b;b=d;d=0;while(1){if((d|0)>=(c[e>>2]|0)){break}if((c[c[(c[e+4>>2]|0)+(d<<2)>>2]>>2]|0)!=-1){if((df(c[b>>2]|0,c[(c[(c[e+4>>2]|0)+(d<<2)>>2]|0)+16>>2]|0)|0)!=0){f=6;break}}d=d+1|0}if((d|0)==(c[e>>2]|0)){g=1;h=g;i=a;return h|0}d=0;j=0;while(1){if((j|0)<(c[e>>2]|0)){k=(d|0)==0}else{k=0}if(!k){break}if((c[c[(c[e+4>>2]|0)+(j<<2)>>2]>>2]|0)!=-1){if((dv(c[(c[(c[e+4>>2]|0)+(j<<2)>>2]|0)+16>>2]|0,c[b+16>>2]|0)|0)!=0){f=18;break}}j=j+1|0}if((f|0)==18){d=1}if((d|0)==0){g=0;h=g;i=a;return h|0}else{g=1;h=g;i=a;return h|0}return 0}function di(a,b){a=a|0;b=b|0;var d=0,e=0,f=0;d=i;e=a;a=b;b=0;while(1){if((b|0)>=(c[e+15960>>2]|0)){break}c[e+1040+(b<<2)>>2]=0;b=b+1|0}b=0;while(1){if((b|0)>=(c[a>>2]|0)){break}do{if((c[c[(c[a+4>>2]|0)+(b<<2)>>2]>>2]|0)!=-1){if((e0(c[(c[e>>2]|0)+32>>2]|0,c[(c[(c[a+4>>2]|0)+(b<<2)>>2]|0)+16>>2]|0)|0)!=0){f=fz(16)|0;c[f+12>>2]=c[e+2040>>2];c[e+2040>>2]=f;c[f>>2]=b;c[f+4>>2]=c[(c[(c[a+4>>2]|0)+(b<<2)>>2]|0)+4>>2];break}else{f=fz(16)|0;c[f+12>>2]=c[e+1040+(c[c[(c[a+4>>2]|0)+(b<<2)>>2]>>2]<<2)>>2];c[e+1040+(c[c[(c[a+4>>2]|0)+(b<<2)>>2]>>2]<<2)>>2]=f;c[f>>2]=b;c[f+4>>2]=c[(c[(c[a+4>>2]|0)+(b<<2)>>2]|0)+4>>2];f=fz(16)|0;c[f+12>>2]=c[e+1040+(c[(c[(c[a+4>>2]|0)+(b<<2)>>2]|0)+4>>2]<<2)>>2];c[e+1040+(c[(c[(c[a+4>>2]|0)+(b<<2)>>2]|0)+4>>2]<<2)>>2]=f;c[f>>2]=b;c[f+4>>2]=c[c[(c[a+4>>2]|0)+(b<<2)>>2]>>2];break}}}while(0);b=b+1|0}i=d;return}function dj(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0,j=0;d=i;e=a;a=b;c[e+1036>>2]=0;b=0;L1:while(1){if((b|0)>=(c[a>>2]|0)){f=30;break}do{if((c[c[(c[a+4>>2]|0)+(b<<2)>>2]>>2]|0)!=-1){g=c[(c[(c[a+4>>2]|0)+(b<<2)>>2]|0)+16>>2]|0;if((e0(c[(c[e>>2]|0)+32>>2]|0,g)|0)!=0){break}if((e0(c[(c[e>>2]|0)+8>>2]|0,g)|0)!=0){dy(e,c[e+1036>>2]|0,g,b);if((e0(c[(c[e>>2]|0)+20>>2]|0,g)|0)!=0){dz(e,b)}dA(e,a,c[(c[(c[a+4>>2]|0)+(b<<2)>>2]|0)+4>>2]|0,c[c[(c[a+4>>2]|0)+(b<<2)>>2]>>2]|0,b);h=e+1036|0;c[h>>2]=(c[h>>2]|0)+1;if((c[e+1036>>2]|0)>=128){f=11;break L1}}else{if((e0(c[(c[e>>2]|0)+12>>2]|0,g)|0)!=0){dy(e,c[e+1036>>2]|0,g,b);dz(e,b);dB(e,a,c[(c[(c[a+4>>2]|0)+(b<<2)>>2]|0)+4>>2]|0,c[c[(c[a+4>>2]|0)+(b<<2)>>2]>>2]|0,b);h=e+1036|0;c[h>>2]=(c[h>>2]|0)+1;if((c[e+1036>>2]|0)>=128){f=15;break L1}}else{if((e0(c[(c[e>>2]|0)+16>>2]|0,g)|0)!=0){dy(e,c[e+1036>>2]|0,g,b);dC(e,a,c[c[(c[a+4>>2]|0)+(b<<2)>>2]>>2]|0,c[c[(c[a+4>>2]|0)+(b<<2)>>2]>>2]|0,c[(c[(c[a+4>>2]|0)+(b<<2)>>2]|0)+4>>2]|0,b);h=e+1036|0;c[h>>2]=(c[h>>2]|0)+1;if((c[e+1036>>2]|0)>=128){f=19;break L1}}else{if((e0(c[(c[e>>2]|0)+36>>2]|0,g)|0)!=0){dy(e,c[e+1036>>2]|0,g,b);dD(e,a,c[c[(c[a+4>>2]|0)+(b<<2)>>2]>>2]|0,c[(c[(c[a+4>>2]|0)+(b<<2)>>2]|0)+4>>2]|0,b);g=e+1036|0;c[g>>2]=(c[g>>2]|0)+1;if((c[e+1036>>2]|0)>=128){f=23;break L1}}}}}}}while(0);b=b+1|0}if((f|0)==30){aJ(e+2044|0,c[e+1036>>2]|0,28,6);b=0;while(1){if((b|0)>=(c[e+1036>>2]|0)){break}a=dF(e,c[e+2044+(b*28|0)>>2]|0)|0;if((a|0)==-1){fk(4320,(j=i,i=i+8|0,c[j>>2]=c[e+2044+(b*28|0)>>2],j)|0);i=j}c[e+2044+(b*28|0)+16>>2]=a;b=b+1|0}i=d;return}else if((f|0)==23){aw(7280,(j=i,i=i+8|0,c[j>>2]=4896,j)|0)|0;i=j;aO(1)}else if((f|0)==19){aw(7280,(j=i,i=i+8|0,c[j>>2]=4896,j)|0)|0;i=j;aO(1)}else if((f|0)==15){aw(7280,(j=i,i=i+8|0,c[j>>2]=4896,j)|0)|0;i=j;aO(1)}else if((f|0)==11){aw(7280,(j=i,i=i+8|0,c[j>>2]=5936,j)|0)|0;i=j;aO(1)}}function dk(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0;d=i;e=a;a=b;if((c[e+1036>>2]|0)>0){c[e+2044+(((c[e+1036>>2]|0)-1|0)*28|0)+24>>2]=0}b=0;while(1){if((b|0)>=((c[e+1036>>2]|0)-1|0)){break}f=b+1|0;while(1){if((f|0)>=(c[e+1036>>2]|0)){break}if((dw(e+2044+(b*28|0)|0,e+2044+(f*28|0)|0,a)|0)!=0){g=8;break}f=f+1|0}if((g|0)==8){g=0;c[e+2044+(b*28|0)+24>>2]=e+2044+(f*28|0)}if((f|0)==(c[e+1036>>2]|0)){c[e+2044+(b*28|0)+24>>2]=0}b=b+1|0}b=0;while(1){if((b|0)>=(c[e+1036>>2]|0)){break}c[e+2044+(b*28|0)+20>>2]=0;b=b+1|0}h=0;while(1){if((h|0)>=(c[a>>2]|0)){break}if((c[c[(c[a+4>>2]|0)+(h<<2)>>2]>>2]|0)!=-1){b=0;while(1){if((b|0)>=(c[e+1036>>2]|0)){break}if((dx(h,e+2044+(b*28|0)|0)|0)!=0){g=26;break}b=b+1|0}if((g|0)==26){g=0;f=fz(12)|0;c[f+4>>2]=h;c[f>>2]=e+2044+(b*28|0);c[f+8>>2]=c[e+2044+(b*28|0)+20>>2];c[e+2044+(b*28|0)+20>>2]=f}}h=h+1|0}i=d;return}function dl(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0;e=i;f=a;a=b;b=d;d=0;while(1){if((d|0)>=(c[f+1036>>2]|0)){g=21;break}h=c[f+2044+(d*28|0)+20>>2]|0;while(1){if((h|0)!=0){j=(df(c[b>>2]|0,c[(c[(c[a+4>>2]|0)+(c[h+4>>2]<<2)>>2]|0)+16>>2]|0)|0)!=0^1}else{j=0}if(!j){break}h=c[h+8>>2]|0}if((h|0)!=0){k=0;h=c[f+2044+(d*28|0)+20>>2]|0;while(1){if((h|0)==0){break}if((dv(c[(c[(c[a+4>>2]|0)+(c[h+4>>2]<<2)>>2]|0)+16>>2]|0,c[b+16>>2]|0)|0)!=0){g=13;break}h=c[h+8>>2]|0}if((g|0)==13){g=0;k=1}if((k|0)==0){g=17;break}}d=d+1|0}if((g|0)==21){l=1;m=l;i=e;return m|0}else if((g|0)==17){l=0;m=l;i=e;return m|0}return 0}function dm(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,j=0,k=0,l=0;e=i;f=a;a=b;b=d;d=0;L1:while(1){if((d|0)>=(c[f+1036>>2]|0)){g=19;break}h=c[f+2044+(d*28|0)+20>>2]|0;while(1){if((h|0)!=0){j=(df(c[b>>2]|0,c[(c[(c[a+4>>2]|0)+(c[h+4>>2]<<2)>>2]|0)+16>>2]|0)|0)!=0^1}else{j=0}if(!j){break}h=c[h+8>>2]|0}if((h|0)!=0){h=c[f+2044+(d*28|0)+20>>2]|0;while(1){if((h|0)==0){break}if((dv(c[(c[(c[a+4>>2]|0)+(c[h+4>>2]<<2)>>2]|0)+16>>2]|0,c[b+16>>2]|0)|0)!=0){g=13;break L1}h=c[h+8>>2]|0}}d=d+1|0}if((g|0)==13){k=0;l=k;i=e;return l|0}else if((g|0)==19){k=1;l=k;i=e;return l|0}return 0}function dn(a,b,d,e,f){a=a|0;b=b|0;d=d|0;e=e|0;f=f|0;var g=0,h=0,j=0,k=0,l=0,m=0;g=i;h=a;a=b;b=d;d=e;e=f;f=0;while(1){j=c[d+(f*24|0)+20>>2]|0;c[e>>2]=j;if((j|0)==0){k=7;break}if((bk[a&15](h,b,d+(f*24|0)|0)|0)==0){k=4;break}f=f+1|0}if((k|0)==7){l=1;m=l;i=g;return m|0}else if((k|0)==4){l=0;m=l;i=g;return m|0}return 0}function dp(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,j=0,k=0;e=i;f=a;a=b;b=d;d=0;L1:while(1){if((d|0)>=(c[f+15960>>2]|0)){break}g=c[f+1040+(d<<2)>>2]|0;while(1){if((g|0)==0){break}do{if((d|0)<=(c[g+4>>2]|0)){if((e0(c[b+8>>2]|0,c[(c[(c[a+4>>2]|0)+(c[g>>2]<<2)>>2]|0)+16>>2]|0)|0)==0){break}jv(f+32|0,0,c[f+15960>>2]<<2|0)|0;du(f,a,d,c[g+4>>2]|0,d);if((c[f+32+(c[g+4>>2]<<2)>>2]|0)==0){h=10;break L1}}}while(0);g=c[g+12>>2]|0}d=d+1|0}if((h|0)==10){j=0;k=j;i=e;return k|0}g=c[f+2040>>2]|0;while(1){if((g|0)==0){h=23;break}d=c[c[(c[a+4>>2]|0)+(c[g>>2]<<2)>>2]>>2]|0;if((e0(c[b+8>>2]|0,c[(c[(c[a+4>>2]|0)+(c[g>>2]<<2)>>2]|0)+16>>2]|0)|0)!=0){jv(f+32|0,0,c[f+15960>>2]<<2|0)|0;du(f,a,d,c[g+4>>2]|0,d);if((c[f+32+(c[g+4>>2]<<2)>>2]|0)==0){h=20;break}}g=c[g+12>>2]|0}if((h|0)==23){j=1;k=j;i=e;return k|0}else if((h|0)==20){j=0;k=j;i=e;return k|0}return 0}function dq(a,b,c){a=a|0;b=b|0;c=c|0;var d=0;c=i;if((ds(a)|0)!=0){d=1}else{d=0}i=c;return d|0}function dr(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,j=0,k=0,l=0;e=i;f=a;a=b;b=c[d+4>>2]|0;d=0;L1:while(1){if((d|0)>=(c[f+1036>>2]|0)){g=13;break}if((c[f+2044+(d*28|0)+16>>2]|0)==(b|0)){h=c[c[(c[a+4>>2]|0)+(c[f+2044+(d*28|0)+12>>2]<<2)>>2]>>2]|0;j=c[f+2044+(d*28|0)+8>>2]|0;while(1){if((j|0)==0){break}if((c[c[(c[a+4>>2]|0)+(c[j>>2]<<2)>>2]>>2]|0)<(h|0)){g=8;break L1}j=c[j+12>>2]|0}}d=d+1|0}if((g|0)==8){k=0;l=k;i=e;return l|0}else if((g|0)==13){k=1;l=k;i=e;return l|0}return 0}function ds(a){a=a|0;var b=0,d=0,e=0,f=0,g=0;b=i;d=a;a=0;while(1){if((a|0)>=(c[d+15960>>2]|0)){break}c[d+32+(a<<2)>>2]=(c[d+1040+(a<<2)>>2]|0)==0;a=a+1|0}dt(d,0);a=0;while(1){if((a|0)>=(c[d+15960>>2]|0)){e=11;break}if((c[d+32+(a<<2)>>2]|0)==0){e=8;break}a=a+1|0}if((e|0)==11){f=1;g=f;i=b;return g|0}else if((e|0)==8){f=0;g=f;i=b;return g|0}return 0}function dt(a,b){a=a|0;b=b|0;var d=0,e=0;d=i;e=a;a=b;if((c[e+32+(a<<2)>>2]|0)!=0){i=d;return}c[e+32+(a<<2)>>2]=1;b=c[e+1040+(a<<2)>>2]|0;while(1){if((b|0)==0){break}dt(e,c[b+4>>2]|0);b=c[b+12>>2]|0}i=d;return}function du(a,b,d,e,f){a=a|0;b=b|0;d=d|0;e=e|0;f=f|0;var g=0,h=0;g=i;h=a;a=b;b=d;d=e;e=f;c[h+32+(e<<2)>>2]=1;f=c[h+1040+(e<<2)>>2]|0;while(1){if((f|0)==0){break}do{if((c[h+32+(c[f+4>>2]<<2)>>2]|0)==0){if((e|0)==(b|0)){if((c[f+4>>2]|0)==(d|0)){break}}if((e|0)==(d|0)){if((c[f+4>>2]|0)==(b|0)){break}}du(h,a,b,d,c[f+4>>2]|0)}}while(0);f=c[f+12>>2]|0}i=g;return}function dv(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0;d=i;e=a;a=b;b=0;while(1){if((c[a+(b<<2)>>2]|0)==0){f=7;break}if((df(c[a+(b<<2)>>2]|0,e)|0)!=0){f=4;break}b=b+1|0}if((f|0)==4){g=1;h=g;i=d;return h|0}else if((f|0)==7){g=0;h=g;i=d;return h|0}return 0}function dw(b,d,e){b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,j=0,k=0,l=0;f=i;i=i+504|0;g=f|0;h=b;jv(g|0,0,c[e>>2]|0)|0;e=c[d+8>>2]|0;while(1){if((e|0)==0){break}a[g+(c[e>>2]|0)|0]=1;e=c[e+12>>2]|0}e=c[h+8>>2]|0;while(1){if((e|0)==0){j=11;break}if((a[g+(c[e>>2]|0)|0]|0)==0){j=8;break}e=c[e+12>>2]|0}if((j|0)==8){k=0;l=k;i=f;return l|0}else if((j|0)==11){k=1;l=k;i=f;return l|0}return 0}function dx(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0;d=i;e=a;a=c[b+8>>2]|0;while(1){if((a|0)==0){f=7;break}if((c[a>>2]|0)==(e|0)){f=4;break}a=c[a+12>>2]|0}if((f|0)==7){g=0;h=g;i=d;return h|0}else if((f|0)==4){g=1;h=g;i=d;return h|0}return 0}function dy(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,g=0;f=i;g=a;a=b;jv(g+32|0,0,c[g+15960>>2]<<2|0)|0;c[g+2044+(a*28|0)>>2]=d;c[g+2044+(a*28|0)+8>>2]=0;c[g+2044+(a*28|0)+4>>2]=0;c[g+2044+(a*28|0)+12>>2]=e;i=f;return}function dz(a,b){a=a|0;b=b|0;var d=0,e=0,f=0;d=i;e=a;a=fz(16)|0;c[a+12>>2]=c[e+2044+((c[e+1036>>2]|0)*28|0)+8>>2];c[e+2044+((c[e+1036>>2]|0)*28|0)+8>>2]=a;f=e+2044+((c[e+1036>>2]|0)*28|0)+4|0;c[f>>2]=(c[f>>2]|0)+1;c[a>>2]=b;i=d;return}function dA(a,b,d,e,f){a=a|0;b=b|0;d=d|0;e=e|0;f=f|0;var g=0,h=0;g=i;h=a;a=b;b=d;d=e;e=f;c[h+32+(b<<2)>>2]=1;f=c[h+1040+(b<<2)>>2]|0;while(1){if((f|0)==0){break}do{if((c[f+4>>2]|0)<(b|0)){if((c[f>>2]|0)==(e|0)){break}dz(h,c[f>>2]|0)}}while(0);f=c[f+12>>2]|0}f=c[h+1040+(b<<2)>>2]|0;while(1){if((f|0)==0){break}L13:do{if((c[h+32+(c[f+4>>2]<<2)>>2]|0)==0){if((c[f+4>>2]|0)==(d|0)){break}do{if((c[f+4>>2]|0)<(d|0)){if((c[f+4>>2]|0)>=(b|0)){break}if((e0(c[(c[h>>2]|0)+28>>2]|0,c[(c[(c[a+4>>2]|0)+(c[f>>2]<<2)>>2]|0)+16>>2]|0)|0)!=0){break L13}}}while(0);dA(h,a,c[f+4>>2]|0,d,e)}}while(0);f=c[f+12>>2]|0}i=g;return}function dB(a,b,d,e,f){a=a|0;b=b|0;d=d|0;e=e|0;f=f|0;var g=0,h=0;g=i;h=a;a=b;b=d;d=e;e=f;c[h+32+(b<<2)>>2]=1;f=c[h+1040+(b<<2)>>2]|0;while(1){if((f|0)==0){break}do{if((c[f+4>>2]|0)<(b|0)){if((c[f>>2]|0)==(e|0)){break}if((b|0)==(d|0)){break}dz(h,c[f>>2]|0)}}while(0);f=c[f+12>>2]|0}f=c[h+1040+(b<<2)>>2]|0;while(1){if((f|0)==0){break}L14:do{if((c[h+32+(c[f+4>>2]<<2)>>2]|0)==0){if((b|0)==(d|0)){if((c[f+4>>2]|0)<(b|0)){break}}do{if((c[f+4>>2]|0)<(d|0)){if((c[f+4>>2]|0)>=(b|0)){break}if((e0(c[(c[h>>2]|0)+28>>2]|0,c[(c[(c[a+4>>2]|0)+(c[f>>2]<<2)>>2]|0)+16>>2]|0)|0)!=0){break L14}}}while(0);dB(h,a,c[f+4>>2]|0,d,e)}}while(0);f=c[f+12>>2]|0}i=g;return}function dC(a,b,d,e,f,g){a=a|0;b=b|0;d=d|0;e=e|0;f=f|0;g=g|0;var h=0,j=0;h=i;j=a;a=b;b=d;d=e;e=f;f=g;c[j+32+(b<<2)>>2]=1;g=c[j+1040+(b<<2)>>2]|0;while(1){if((g|0)==0){break}do{if((c[g+4>>2]|0)<(b|0)){if((c[g>>2]|0)==(f|0)){break}if((b|0)==(d|0)){break}dz(j,c[g>>2]|0)}}while(0);g=c[g+12>>2]|0}g=c[j+1040+(b<<2)>>2]|0;while(1){if((g|0)==0){break}L14:do{if((c[j+32+(c[g+4>>2]<<2)>>2]|0)==0){if((b|0)==(d|0)){if((c[g+4>>2]|0)>=(e|0)){break}}if((b|0)==(d|0)){if((c[g+4>>2]|0)<(d|0)){break}}do{if((c[g+4>>2]|0)<(d|0)){if((c[g+4>>2]|0)>=(b|0)){break}if((e0(c[(c[j>>2]|0)+28>>2]|0,c[(c[(c[a+4>>2]|0)+(c[g>>2]<<2)>>2]|0)+16>>2]|0)|0)!=0){break L14}}}while(0);dC(j,a,c[g+4>>2]|0,d,e,f)}}while(0);g=c[g+12>>2]|0}i=h;return}function dD(a,b,d,e,f){a=a|0;b=b|0;d=d|0;e=e|0;f=f|0;var g=0,h=0;g=i;h=a;a=b;b=d;d=e;e=f;c[h+32+(b<<2)>>2]=1;f=c[h+1040+(b<<2)>>2]|0;while(1){if((f|0)==0){break}do{if((c[f+4>>2]|0)<(b|0)){if((c[f>>2]|0)==(e|0)){break}dz(h,c[f>>2]|0)}}while(0);f=c[f+12>>2]|0}f=c[h+1040+(b<<2)>>2]|0;while(1){if((f|0)==0){break}do{if((c[h+32+(c[f+4>>2]<<2)>>2]|0)==0){if((c[f+4>>2]|0)==(d|0)){break}dA(h,a,c[f+4>>2]|0,d,e)}}while(0);f=c[f+12>>2]|0}i=g;return}function dE(a,b){a=a|0;b=b|0;i=i;return(c[a+4>>2]|0)-(c[b+4>>2]|0)|0}function dF(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0,j=0;d=i;e=b;b=c[(c[a>>2]|0)+84>>2]|0;a=0;while(1){f=c[b+(a<<3)+4>>2]|0;if((f|0)==-1){g=3;break}if((df(c[b+(a<<3)>>2]|0,e)|0)!=0){g=5;break}a=a+1|0}if((g|0)==5){h=f;j=h;i=d;return j|0}else if((g|0)==3){h=-1;j=h;i=d;return j|0}return 0}function dG(a){a=a|0;var b=0,d=0;b=i;d=a;c[d+1032>>2]=fz(1992)|0;c[(c[d+1032>>2]|0)+1988>>2]=0;a=0;while(1){if((a|0)>=497){break}c[(c[d+1032>>2]|0)+(a<<2)>>2]=0;a=a+1|0}i=b;return}function dH(){var e=0,f=0,g=0,h=0,j=0,k=0,l=0,n=0,p=0;e=i;if((c[50]|0)!=0){c[50]=0;if((c[19306]|0)==0){c[19306]=1}if((c[25456]|0)==0){c[25456]=c[m>>2]}if((c[25452]|0)==0){c[25452]=c[o>>2]}if((c[19318]|0)==0){c[19318]=dI(c[25456]|0,16384)|0}dJ()}L16:while(1){f=c[19320]|0;a[f]=a[77248]|0;g=f;h=c[19306]|0;h=h+(c[(c[19318]|0)+28>>2]|0)|0;c[2918]=11680;j=c[2918]|0;c[2918]=j+4;c[j>>2]=h;L18:while(1){do{j=c[208+(d[f]<<2)>>2]&255;while(1){if((b[1296+((b[1448+(h<<1)>>1]|0)+(j&255)<<1)>>1]|0)==(h|0)){break}h=b[1232+(h<<1)>>1]|0;if((h|0)>=28){j=c[160+((j&255)<<2)>>2]&255}}h=b[8+((b[1448+(h<<1)>>1]|0)+(j&255)<<1)>>1]|0;k=c[2918]|0;c[2918]=k+4;c[k>>2]=h;f=f+1|0;}while((b[1448+(h<<1)>>1]|0)!=66);L31:while(1){k=(c[2918]|0)-4|0;c[2918]=k;h=c[k>>2]|0;c[19310]=b[1592+(h<<1)>>1]|0;while(1){if((c[19310]|0)!=0){if((c[19310]|0)<(b[1592+(h+1<<1)>>1]|0)){break}}f=f-1|0;k=(c[2918]|0)-4|0;c[2918]=k;h=c[k>>2]|0;c[19310]=b[1592+(h<<1)>>1]|0}j=b[1512+(c[19310]<<1)>>1]|0;c[19314]=f;c[25450]=g;c[25454]=f-g;a[77248]=a[f]|0;a[f]=0;c[19320]=f;if((j|0)!=9){k=0;while(1){if((k|0)>=(c[25454]|0)){break}if((a[(c[25450]|0)+k|0]|0)==10){c[422]=(c[422]|0)+1}k=k+1|0}}while(1){switch(j|0){case 5:{l=49;break L18;break};case 6:{l=52;break L18;break};case 3:{l=43;break L18;break};case 1:{l=37;break L18;break};case 2:{l=40;break L18;break};case 7:{l=55;break L18;break};case 4:{l=46;break L18;break};case 8:{l=58;break L18;break};case 10:case 11:{break L16;break};case 9:{break};default:{l=79;break L18}}n=f-(c[25450]|0)-1|0;a[f]=a[77248]|0;if((c[(c[19318]|0)+36>>2]|0)==0){c[19308]=c[(c[19318]|0)+16>>2];c[c[19318]>>2]=c[25456];c[(c[19318]|0)+36>>2]=1}if((c[19320]|0)>>>0<=((c[(c[19318]|0)+4>>2]|0)+(c[19308]|0)|0)>>>0){break}k=dP()|0;if((k|0)==0){l=75;break L31}else if((k|0)==2){l=76;break}else if((k|0)!=1){l=77;break L18}c[19316]=0;if((dQ()|0)==0){l=71;break L18}c[19320]=c[25450];j=(((c[19306]|0)-1|0)/2|0)+10|0}if((l|0)==76){l=0;c[19320]=(c[(c[19318]|0)+4>>2]|0)+(c[19308]|0);h=dN()|0;f=c[19320]|0;g=c[25450]|0;continue}c[19320]=(c[25450]|0)+n;h=dN()|0;p=dO(h)|0;g=c[25450]|0;if((p|0)!=0){l=66;break}f=c[19320]|0}if((l|0)==66){l=0;j=(c[19320]|0)+1|0;c[19320]=j;f=j;h=p;continue}else if((l|0)==75){l=0;c[19320]=(c[25450]|0)+n;h=dN()|0;f=c[19320]|0;g=c[25450]|0;continue}}if((l|0)==71){l=0;if((c[19316]|0)==0){dR(c[25456]|0)}l=77}else if((l|0)==49){l=0;if((c[25454]|0)>0){c[(c[19318]|0)+28>>2]=(a[(c[25450]|0)+((c[25454]|0)-1)|0]|0)==10}dM(c[42134]|0,c[25450]|0)}else if((l|0)==52){l=0;if((c[25454]|0)>0){c[(c[19318]|0)+28>>2]=(a[(c[25450]|0)+((c[25454]|0)-1)|0]|0)==10}dM(c[42134]|0,c[25450]|0)}else if((l|0)==43){l=0;if((c[25454]|0)>0){c[(c[19318]|0)+28>>2]=(a[(c[25450]|0)+((c[25454]|0)-1)|0]|0)==10}dK(c[42134]|0,c[25450]|0)}else if((l|0)==37){l=0;a[f]=a[77248]|0;h=f-1|0;f=h;c[19320]=h;c[25450]=g;c[25454]=f-g;a[77248]=a[f]|0;a[f]=0;c[19320]=f;if((c[25454]|0)>0){c[(c[19318]|0)+28>>2]=(a[(c[25450]|0)+((c[25454]|0)-1)|0]|0)==10}}else if((l|0)==40){l=0;if((c[25454]|0)>0){c[(c[19318]|0)+28>>2]=(a[(c[25450]|0)+((c[25454]|0)-1)|0]|0)==10}}else if((l|0)==55){l=0;if((c[25454]|0)>0){c[(c[19318]|0)+28>>2]=(a[(c[25450]|0)+((c[25454]|0)-1)|0]|0)==10}fk(4944,(h=i,i=i+8|0,c[h>>2]=c[422],h)|0);i=h}else if((l|0)==79){l=0;dS(9640)}else if((l|0)==46){l=0;if((c[25454]|0)>0){c[(c[19318]|0)+28>>2]=(a[(c[25450]|0)+((c[25454]|0)-1)|0]|0)==10}dL(c[42134]|0,(c[25450]|0)+1|0)}else if((l|0)==58){l=0;if((c[25454]|0)>0){c[(c[19318]|0)+28>>2]=(a[(c[25450]|0)+((c[25454]|0)-1)|0]|0)==10}aI(c[25450]|0,c[25454]|0,1,c[25452]|0)|0}if((l|0)==77){l=0}}i=e;return 0}function dI(a,b){a=a|0;b=b|0;var d=0,e=0;d=i;e=dU(40)|0;if((e|0)==0){dS(7072)}c[e+12>>2]=b;c[e+4>>2]=dU((c[e+12>>2]|0)+2|0)|0;if((c[e+4>>2]|0)==0){dS(7072)}c[e+20>>2]=1;dT(e,a);i=d;return e|0}function dJ(){var b=0;c[19308]=c[(c[19318]|0)+16>>2];b=c[(c[19318]|0)+8>>2]|0;c[19320]=b;c[25450]=b;c[25456]=c[c[19318]>>2];a[77248]=a[c[19320]|0]|0;return}function dK(b,d){b=b|0;d=d|0;var e=0,f=0,g=0,h=0,j=0;e=i;f=b;b=d;d=aR(b|0)|0;g=d+((jr(d|0)|0)-1)|0;if((a[g]|0)!=58){fk(10448,(h=i,i=i+8|0,c[h>>2]=b,h)|0);i=h}a[g]=0;g=0;while(1){if((c[f+4+(g<<2)>>2]|0)!=0){j=(bi(c[f+4+(g<<2)>>2]|0,d|0)|0)!=0}else{j=0}if(!j){break}g=g+1|0}if((c[f+4+(g<<2)>>2]|0)!=0){fk(10080,(h=i,i=i+8|0,c[h>>2]=d,h)|0);i=h}if((g|0)==511){fk(9552,(h=i,i=i+1|0,i=i+7&-8,c[h>>2]=0,h)|0);i=h}c[f+4+(g<<2)>>2]=eT(d,c[f>>2]|0)|0;c[f+6152>>2]=g;jn(d);i=e;return}function dL(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0;d=i;e=a;a=b;if((c[e+6152>>2]|0)==-1){fk(1768,(f=i,i=i+8|0,c[f>>2]=c[422],f)|0);i=f}b=d_(e,a)|0;if((b|0)==-1){g=c[422]|0;fk(11224,(f=i,i=i+16|0,c[f>>2]=a,c[f+8>>2]=g,f)|0);i=f}f=c[e+2052+(b<<2)>>2]|0;while(1){if((f|0)==0){break}dM(e,c[f>>2]|0);f=c[f+4>>2]|0}i=d;return}function dM(a,b){a=a|0;b=b|0;var d=0,e=0;d=i;e=a;a=b;if((c[e+6152>>2]|0)==-1){fk(1768,(b=i,i=i+8|0,c[b>>2]=c[422],b)|0);i=b}d3(a);b=fz(8)|0;c[b>>2]=eT(a,c[e>>2]|0)|0;c[b+4>>2]=0;if((c[e+4100+(c[e+6152>>2]<<2)>>2]|0)==0){c[e+2052+(c[e+6152>>2]<<2)>>2]=b;c[e+4100+(c[e+6152>>2]<<2)>>2]=b;i=d;return}else{c[(c[e+4100+(c[e+6152>>2]<<2)>>2]|0)+4>>2]=b;c[e+4100+(c[e+6152>>2]<<2)>>2]=b;i=d;return}}function dN(){var e=0,f=0,g=0,h=0,j=0,k=0;e=i;f=c[19306]|0;f=f+(c[(c[19318]|0)+28>>2]|0)|0;c[2918]=11680;g=c[2918]|0;c[2918]=g+4;c[g>>2]=f;g=c[25450]|0;while(1){if(g>>>0>=(c[19320]|0)>>>0){break}if((a[g]|0)!=0){h=c[208+(d[g]<<2)>>2]|0}else{h=1}j=h&255;while(1){if((b[1296+((b[1448+(f<<1)>>1]|0)+(j&255)<<1)>>1]|0)==(f|0)){break}f=b[1232+(f<<1)>>1]|0;if((f|0)>=28){j=c[160+((j&255)<<2)>>2]&255}}f=b[8+((b[1448+(f<<1)>>1]|0)+(j&255)<<1)>>1]|0;k=c[2918]|0;c[2918]=k+4;c[k>>2]=f;g=g+1|0}i=e;return f|0}function dO(a){a=a|0;var d=0,e=0,f=0;d=i;e=a;a=1;while(1){if((b[1296+((b[1448+(e<<1)>>1]|0)+(a&255)<<1)>>1]|0)==(e|0)){break}e=b[1232+(e<<1)>>1]|0;if((e|0)>=28){a=c[160+((a&255)<<2)>>2]&255}}e=b[8+((b[1448+(e<<1)>>1]|0)+(a&255)<<1)>>1]|0;a=c[2918]|0;c[2918]=a+4;c[a>>2]=e;if(((e|0)==27|0)!=0){f=0;i=d;return f|0}else{f=e;i=d;return f|0}return 0}function dP(){var b=0,d=0,e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0,n=0;b=i;d=c[(c[19318]|0)+4>>2]|0;e=c[25450]|0;if((c[19320]|0)>>>0>((c[(c[19318]|0)+4>>2]|0)+((c[19308]|0)+1)|0)>>>0){dS(9e3)}if((c[(c[19318]|0)+32>>2]|0)==0){if(((c[19320]|0)-(c[25450]|0)|0)==1){f=1;g=f;i=b;return g|0}else{f=2;g=f;i=b;return g|0}}h=(c[19320]|0)-(c[25450]|0)-1|0;j=0;while(1){if((j|0)>=(h|0)){break}k=e;e=k+1|0;l=d;d=l+1|0;a[l]=a[k]|0;j=j+1|0}if((c[(c[19318]|0)+36>>2]|0)==2){c[19308]=0}else{j=(c[(c[19318]|0)+12>>2]|0)-h-1|0;while(1){if((j|0)>0){break}dS(8664)}if((j|0)>8192){j=8192}if((c[(c[19318]|0)+24>>2]|0)!=0){d=42;e=0;while(1){do{if((e|0)<(j|0)){k=ap(c[25456]|0)|0;d=k;if((k|0)==-1){m=0;break}m=(d|0)!=10}else{m=0}}while(0);if(!m){break}a[(c[(c[19318]|0)+4>>2]|0)+h+e|0]=d;e=e+1|0}if((d|0)==10){m=e;e=m+1|0;a[(c[(c[19318]|0)+4>>2]|0)+h+m|0]=d}do{if((d|0)==-1){if((aY(c[25456]|0)|0)==0){break}dS(8352)}}while(0);c[19308]=e}else{e=aV((c[(c[19318]|0)+4>>2]|0)+h|0,1,j|0,c[25456]|0)|0;c[19308]=e;do{if((e|0)==0){if((aY(c[25456]|0)|0)==0){break}dS(8352)}}while(0)}}if((c[19308]|0)==0){if((h|0)==0){n=1;dR(c[25456]|0)}else{n=2;c[(c[19318]|0)+36>>2]=2}}else{n=0}c[19308]=(c[19308]|0)+h;a[(c[(c[19318]|0)+4>>2]|0)+(c[19308]|0)|0]=0;a[(c[(c[19318]|0)+4>>2]|0)+((c[19308]|0)+1)|0]=0;c[25450]=c[(c[19318]|0)+4>>2];f=n;g=f;i=b;return g|0}function dQ(){return 1}function dR(a){a=a|0;var b=0;b=i;if((c[19318]|0)==0){c[19318]=dI(c[25456]|0,16384)|0}dT(c[19318]|0,a);dJ();i=b;return}function dS(a){a=a|0;var b=0,d=0;b=i;au(c[n>>2]|0,9416,(d=i,i=i+8|0,c[d>>2]=a,d)|0)|0;i=d;aO(2);i=b;return}function dT(a,b){a=a|0;b=b|0;var d=0,e=0,f=0;d=i;e=a;a=b;dV(e);c[e>>2]=a;c[e+32>>2]=1;if((a|0)!=0){f=(aW(a1(a|0)|0)|0)>0|0}else{f=0}c[e+24>>2]=f;i=d;return}function dU(a){a=a|0;var b=0,c=0;b=i;c=jm(a)|0;i=b;return c|0}function dV(b){b=b|0;var d=0,e=0;d=i;e=b;c[e+16>>2]=0;a[c[e+4>>2]|0]=0;a[(c[e+4>>2]|0)+1|0]=0;c[e+8>>2]=c[e+4>>2];c[e+28>>2]=1;c[e+36>>2]=0;if((e|0)!=(c[19318]|0)){i=d;return}dJ();i=d;return}function dW(a){a=a|0;var b=0,d=0;b=i;d=a;if((d|0)==0){fk(3496,(a=i,i=i+1|0,i=i+7&-8,c[a>>2]=0,a)|0);i=a}c[25456]=d;d=fz(6156)|0;dX(d);c[42134]=d;dH()|0;c[42134]=0;c[d+6152>>2]=-1;i=b;return d|0}function dX(a){a=a|0;var b=0,d=0;b=i;d=a;a=0;while(1){if((a|0)>=512){break}c[d+2052+(a<<2)>>2]=0;c[d+4100+(a<<2)>>2]=0;c[d+4+(a<<2)>>2]=0;a=a+1|0}c[d>>2]=eQ()|0;i=b;return}function dY(a){a=a|0;var b=0,d=0,e=0,f=0;b=i;d=a;a=0;while(1){if((a|0)>=512){break}e=c[d+2052+(a<<2)>>2]|0;while(1){if((e|0)==0){break}f=c[e+4>>2]|0;fq(e,8);e=f}a=a+1|0}eU(c[d>>2]|0);fq(d,6156);i=b;return}function dZ(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0;d=i;e=a;c[e+6152>>2]=d_(e,b)|0;if((c[e+6152>>2]|0)==-1){f=0;g=f;i=d;return g|0}else{c[e+6148>>2]=c[e+2052+(c[e+6152>>2]<<2)>>2];f=1;g=f;i=d;return g|0}return 0}function d_(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0;d=i;e=a;a=b;b=0;while(1){if((c[e+4+(b<<2)>>2]|0)==0){f=7;break}if((bi(c[e+4+(b<<2)>>2]|0,a|0)|0)==0){f=4;break}b=b+1|0}if((f|0)==4){g=b;h=g;i=d;return h|0}else if((f|0)==7){g=-1;h=g;i=d;return h|0}return 0}function d$(a){a=a|0;var b=0,d=0,e=0;b=i;d=a;if((c[d+6152>>2]|0)==-1){fk(2952,(a=i,i=i+1|0,i=i+7&-8,c[a>>2]=0,a)|0);i=a}a=0;e=c[d+2052+(c[d+6152>>2]<<2)>>2]|0;while(1){if((e|0)==0){break}e=c[e+4>>2]|0;a=a+1|0}i=b;return a|0}function d0(a){a=a|0;var b=0,d=0,e=0,f=0;b=i;d=a;if((c[d+6148>>2]|0)==0){e=0;f=e;i=b;return f|0}else{c[25458]=c[c[d+6148>>2]>>2];c[d+6148>>2]=c[(c[d+6148>>2]|0)+4>>2];e=c[25458]|0;f=e;i=b;return f|0}return 0}function d1(a){a=a|0;var b=0,d=0,e=0;b=i;d=a;if((c[d+6152>>2]|0)==-1){fk(2952,(a=i,i=i+1|0,i=i+7&-8,c[a>>2]=0,a)|0);i=a}a=0;e=c[d+2052+(c[d+6152>>2]<<2)>>2]|0;while(1){if((e|0)==0){break}if((bi(c[e>>2]|0,2288)|0)==0){a=a+1|0}e=c[e+4>>2]|0}i=b;return a|0}function d2(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0,j=0,k=0,l=0;d=i;e=a;a=b;b=c[e+6148>>2]|0;f=0;while(1){if((b|0)!=0){g=(bi(c[b>>2]|0,2288)|0)!=0}else{g=0}if(!g){break}f=f+1|0;b=c[b+4>>2]|0}if((f|0)>(c[25462]|0)){c[25462]=f;jn(c[25460]|0);c[25460]=jm(c[25462]<<2)|0}b=c[e+6148>>2]|0;f=0;while(1){if((b|0)!=0){h=(bi(c[b>>2]|0,2288)|0)!=0}else{h=0}if(!h){break}g=eT(c[b>>2]|0,c[e>>2]|0)|0;c[(c[25460]|0)+(f<<2)>>2]=g;f=f+1|0;b=c[b+4>>2]|0}c[e+6148>>2]=b;if((b|0)==0){j=f;k=a;c[k>>2]=j;l=c[25460]|0;i=d;return l|0}c[e+6148>>2]=c[b+4>>2];j=f;k=a;c[k>>2]=j;l=c[25460]|0;i=d;return l|0}function d3(a){a=a|0;var b=0,d=0;b=i;d=a;if((jr(d|0)|0)>>>0<=1>>>0){i=b;return}if((aC(d|0,44)|0)==0){i=b;return}fk(10752,(a=i,i=i+8|0,c[a>>2]=d,a)|0);i=a;i=b;return}function d4(a,b){a=a|0;b=b|0;var d=0,e=0;d=i;e=a;d5(c[e>>2]|0,c[e+52>>2]|0,b);i=d;return}function d5(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0.0,j=0.0,k=0,l=0;e=i;f=b;g=+d7();if((a|0)<=1){j=g;k=f;l=k+32|0;h[l>>3]=j;i=e;return}aw(3768,(a=i,i=i+1|0,i=i+7&-8,c[a>>2]=0,a)|0)|0;i=a;fM(c[o>>2]|0,d,9208);aw(6688,(a=i,i=i+8|0,h[a>>3]=g- +h[f+32>>3],a)|0)|0;i=a;j=g;k=f;l=k+32|0;h[l>>3]=j;i=e;return}function d6(){var a=0,b=0;a=i;b=fz(56)|0;c[b>>2]=-1;h[b+24>>3]=+d7();h[b+32>>3]=+d7();h[b+8>>3]=+d7();c[b+16>>2]=c[24182];c[b+4>>2]=128e6;h[b+40>>3]=0.0;c[b+48>>2]=0;c[b+52>>2]=0;i=a;return b|0}function d7(){var a=0,b=0;a=i;i=i+136|0;b=a|0;ba(0,b|0)|0;i=a;return+(+(c[b>>2]|0)+ +(c[b+4>>2]|0)/1.0e6)}function d8(a){a=a|0;var b=0;b=i;fq(a,56);i=b;return}function d9(a){a=a|0;var b=0,d=0,e=0.0;b=i;d=a;e=+d7();h[d+8>>3]=e;h[d+32>>3]=e;c[d+16>>2]=c[24182];c[d+52>>2]=0;c[d+48>>2]=0;i=b;return}function ea(a){a=a|0;c[a+16>>2]=c[24182];i=i;return}function eb(a){a=a|0;var b=0,d=0,e=0,f=0;b=i;d=a;if((ec(d)|0)!=0){c[d+52>>2]=1}if((ed(d)|0)!=0){c[d+48>>2]=1}if((c[d+52>>2]|0)!=0){e=1;f=e&1;i=b;return f|0}e=(c[d+48>>2]|0)!=0;f=e&1;i=b;return f|0}function ec(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,j=0.0;b=i;d=a;if((c[d>>2]|0)==-1){e=0;f=e;i=b;return f|0}if((c[d+52>>2]|0)!=0){g=1}else{j=+d7();g=j- +h[d+8>>3]>+(c[d>>2]|0)}e=g&1;f=e;i=b;return f|0}function ed(a){a=a|0;var b=0,d=0,e=0,f=0,g=0;b=i;d=a;if((c[d+4>>2]|0)==128e6){e=0;f=e;i=b;return f|0}if((c[d+48>>2]|0)!=0){g=1}else{g=(c[24182]|0)>(c[d+4>>2]|0)}e=g&1;f=e;i=b;return f|0}function ee(a,b){a=a|0;b=b|0;var d=0,e=0;d=i;e=a;a=b;if((c[118360+(e<<2)>>2]|0)!=0){i=d;return}c[118360+(e<<2)>>2]=a;b=c[94288+(e<<2)>>2]|0;while(1){if((b|0)==0){break}ee(c[b+4>>2]|0,a-(c[b+8>>2]|0)|0);b=c[b+12>>2]|0}i=d;return}function ef(a,b){a=a|0;b=b|0;i=i;return(c[118360+(c[b>>2]<<2)>>2]|0)-(c[118360+(c[a>>2]<<2)>>2]|0)|0}function eg(b){b=b|0;var d=0,e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0,n=0,o=0;d=i;e=b;b=c[e+19040>>2]|0;f=0;g=0;h=0;while(1){if((h|0)>=(c[b+12>>2]|0)){break}do{if((a[(c[e+19008>>2]|0)+h|0]|0)!=0){c[55312]=0;c[55308]=0;j=0;while(1){if((j|0)>=(c[b+12>>2]|0)){break}c[95288+(j<<2)>>2]=0;c[218720+(j<<2)>>2]=0;j=j+1|0}if((c[(c[e>>2]|0)+48>>2]|0)!=0){c[23822]=1}eh(e,h);if((c[55312]|0)==0){break}k=fz(2020)|0;c[k+8>>2]=c[55312];c[k+1012>>2]=c[55308];j=0;while(1){if((j|0)>=(c[55312]|0)){break}c[k+12+(j<<2)>>2]=c[219720+(j<<2)>>2];j=j+1|0}j=0;while(1){if((j|0)>=(c[55308]|0)){break}c[k+1016+(j<<2)>>2]=c[108848+(j<<2)>>2];j=j+1|0}c[k+4>>2]=h;c[k>>2]=f;f=k;if((c[55312]|0)>0){l=250;m=0;j=0;while(1){if((j|0)>=(c[55312]|0)){break}n=c[218720+(j<<2)>>2]|0;if((n|0)<(l|0)){l=n}if((n|0)>(m|0)){m=n}j=j+1|0}g=g+(m-l)|0}o=31}else{o=31}}while(0);if((o|0)==31){o=0}h=h+1|0}c[f+2016>>2]=g;i=d;return f|0}function eh(a,b){a=a|0;b=b|0;var d=0,e=0;d=i;e=a;a=b;if((c[95288+(a<<2)>>2]|0)!=0){i=d;return}c[95288+(a<<2)>>2]=1;b=c[94288+(a<<2)>>2]|0;while(1){if((b|0)==0){break}if((c[b+8>>2]|0)==1){if((bi(e+8+((c[b+4>>2]|0)*76|0)|0,6536)|0)==0){eh(e,c[b+4>>2]|0)}else{c[219720+(c[55312]<<2)>>2]=c[b+4>>2];eM(c[b+4>>2]|0);c[55312]=(c[55312]|0)+1}}if((c[b+8>>2]|0)==0){c[108848+(c[55308]<<2)>>2]=c[b+4>>2];c[55308]=(c[55308]|0)+1}b=c[b+12>>2]|0}i=d;return}function ei(d,e,f,g){d=d|0;e=e|0;f=f|0;g=g|0;var h=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0;h=i;i=i+3016|0;j=h|0;k=h+1024|0;l=e;e=f;f=g;g=c[l+19040>>2]|0;m=ej(g)|0;n=c[(c[l>>2]|0)+56>>2]|0;ek(g);c[24180]=0;o=el(g)|0;b[j+8>>1]=0;a[j+6|0]=c[24180];a[j+7|0]=0;b[j+12>>1]=em(c[l+19040>>2]|0)|0;b[j+14>>1]=en(g)|0;b[j+10>>1]=eo(g)|0;b[j+18>>1]=ep(g)|0;if((c[24180]|0)!=0){p=j+8|0;b[p>>1]=(b[p>>1]|0)+1;b[j+16>>1]=0;c[j+20>>2]=0;eq(m);er(g);es(o);js(d|0,j|0,1024)|0;i=h;return}if((f|0)==2){c[j+20>>2]=eg(l)|0;b[j+16>>1]=c[(c[j+20>>2]|0)+2016>>2]}else{b[j+16>>1]=0}et(l);p=0;while(1){if((p|0)>=(c[g+1016>>2]|0)){break}c[k+(p<<2)>>2]=0;p=p+1|0}while(1){p=0;while(1){if((p|0)>=(c[g+1016>>2]|0)){break}a[102881+(p*12|0)|0]=0;a[102880+(p*12|0)|0]=0;c[102884+(p*12|0)>>2]=c[g+1020+(p*20|0)>>2];c[102888+(p*12|0)>>2]=c[g+1020+(p*20|0)+4>>2];eu((c[m+4>>2]|0)+(p<<2)|0,g+1020+(p*20|0)|0);p=p+1|0}ev(o,0);p=0;while(1){if((p|0)>=(c[g+1016>>2]|0)){break}do{if((a[102881+(p*12|0)|0]|0)!=0){q=19}else{if((a[102880+(p*12|0)|0]|0)!=0){q=19;break}do{if((c[117360+(c[g+1020+(p*20|0)>>2]<<2)>>2]|0)!=-1){if((c[117360+(c[g+1020+(p*20|0)+4>>2]<<2)>>2]|0)==-1){break}c[c[(c[m+4>>2]|0)+(p<<2)>>2]>>2]=-1}}while(0)}}while(0);if((q|0)==19){q=0;c[c[(c[m+4>>2]|0)+(p<<2)>>2]>>2]=c[102884+(p*12|0)>>2];c[(c[(c[m+4>>2]|0)+(p<<2)>>2]|0)+4>>2]=c[102888+(p*12|0)>>2]}p=p+1|0}c$(l,m);ew(l,m);if((f|0)==1){da(n,e,l,m);if((ex(o)|0)==0){q=28;break}continue}r=db(n,e,l,m,1)|0;if((r|0)==0){if((n|0)!=0){b[j+8>>1]=1}}else{if((c[r+1988>>2]|0)==0){p=0;while(1){if((p|0)>=(c[g+1016>>2]|0)){break}if((c[c[(c[m+4>>2]|0)+(p<<2)>>2]>>2]|0)!=-1){if((c[k+(p<<2)>>2]|0)==0){c[k+(p<<2)>>2]=c4(c[r+(p<<2)>>2]|0)|0}else{s=c[r+(p<<2)>>2]|0;t=c[k+(p<<2)>>2]|0;while(1){do{if((s|0)!=0){if((t|0)==0){u=0;break}u=(c[s+4>>2]|0)==(c[t+4>>2]|0)}else{u=0}}while(0);if(!u){break}s=c[s>>2]|0;t=c[t>>2]|0}if((s|0)!=0){q=49;break}if((t|0)!=0){q=49;break}}}p=p+1|0}if((q|0)==49){q=0}if((p|0)!=(c[g+1016>>2]|0)){v=j+8|0;b[v>>1]=(b[v>>1]|0)+1;a[j+7|0]=1}}else{if((c[r+1988>>2]|0)!=0){v=j+8|0;b[v>>1]=(b[v>>1]|0)+1}}}if((ex(o)|0)==0){q=61;break}}p=0;while(1){if((p|0)>=(c[g+1016>>2]|0)){break}c3(c[k+(p<<2)>>2]|0);p=p+1|0}eq(m);er(g);es(o);js(d|0,j|0,1024)|0;i=h;return}function ej(a){a=a|0;var b=0,d=0,e=0;b=i;d=a;a=fz(14944)|0;c[a+4>>2]=fz(1988)|0;c[a+8>>2]=0;c[a+12>>2]=0;e=0;while(1){if((e|0)>=497){break}c[(c[a+4>>2]|0)+(e<<2)>>2]=0;e=e+1|0}c[a>>2]=c[d+1016>>2];if((c[d+1016>>2]|0)<497){i=b;return a|0}else{aw(3192,(a=i,i=i+8|0,c[a>>2]=8856,a)|0)|0;i=a;aO(1);return 0}return 0}function ek(d){d=d|0;var e=0,f=0,g=0,h=0,j=0;e=i;f=d;d=0;while(1){if((d|0)>=(c[f+12>>2]|0)){break}c[94288+(d<<2)>>2]=0;d=d+1|0}g=0;while(1){if((g|0)>=(c[f+1016>>2]|0)){break}h=f+1020+(g*20|0)|0;d=b[c[h+8>>2]>>1]|0;if((d|0)>=-1){j=fz(16)|0;c[j+12>>2]=c[94288+(c[h>>2]<<2)>>2];c[94288+(c[h>>2]<<2)>>2]=j;c[j>>2]=g;c[j+4>>2]=c[h+4>>2];d=a[(c[h+8>>2]|0)+4|0]|0;if((d|0)==0){c[j+8>>2]=0}else{if((d|0)==2){c[j+8>>2]=1}else{c[j+8>>2]=-1}}j=fz(16)|0;c[j+12>>2]=c[94288+(c[h+4>>2]<<2)>>2];c[94288+(c[h+4>>2]<<2)>>2]=j;c[j>>2]=g;c[j+4>>2]=c[h>>2];d=a[(c[h+12>>2]|0)+4|0]|0;if((d|0)==0){c[j+8>>2]=0}else{if((d|0)==2){c[j+8>>2]=1}else{c[j+8>>2]=-1}}}g=g+1|0}i=e;return}function el(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,j=0;b=i;d=a;a=0;while(1){if((a|0)>=(c[d+12>>2]|0)){break}c[118360+(a<<2)>>2]=0;a=a+1|0}a=0;while(1){if((a|0)>=(c[d+12>>2]|0)){break}ee(a,250);a=a+1|0}a=0;while(1){if((a|0)>=(c[d+12>>2]|0)){break}c[116040+(a<<2)>>2]=a;a=a+1|0}aJ(116040,c[d+12>>2]|0,4,4);a=0;while(1){if((a|0)>=(c[d+12>>2]|0)){break}c[117360+(a<<2)>>2]=-1;a=a+1|0}e=0;f=0;while(1){if((f|0)>=(c[d+12>>2]|0)){break}a=c[116040+(f<<2)>>2]|0;if((c[117360+(a<<2)>>2]|0)==-1){g=eI(a)|0;if((e|0)==0){e=g}else{h=c[g>>2]|0;while(1){if((h|0)==0){break}j=c[h>>2]|0;c[h>>2]=c[e>>2];c[e>>2]=h;h=j}h=c[g+4>>2]|0;while(1){if((h|0)==0){break}j=c[h+12>>2]|0;c[h+12>>2]=c[e+4>>2];c[e+4>>2]=h;h=j}fq(g,12)}}f=f+1|0}i=b;return e|0}function em(a){a=a|0;var b=0,d=0,e=0;b=i;d=a;a=0;e=0;while(1){if((e|0)>=(c[d+12>>2]|0)){break}a=a+((c[d+16+(e<<2)>>2]|0)==0)|0;e=e+1|0}i=b;return a|0}function en(a){a=a|0;var d=0,e=0,f=0;d=i;e=a;a=0;f=0;while(1){if((f|0)>=(c[e+12>>2]|0)){break}if((c[e+16+(f<<2)>>2]|0)!=0){a=a+(b[(c[e+16+(f<<2)>>2]|0)+4>>1]|0)|0}f=f+1|0}i=d;return a|0}function eo(a){a=a|0;i=i;return 0}function ep(a){a=a|0;var b=0,d=0,e=0;b=i;d=a;a=0;e=0;while(1){if((e|0)>=(c[d+1016>>2]|0)){break}a=a+(eH((c[d+1020+(e*20|0)+4>>2]|0)-(c[d+1020+(e*20|0)>>2]|0)|0)|0)|0;e=e+1|0}i=b;return a|0}function eq(a){a=a|0;var b=0,d=0;b=i;d=a;a=0;while(1){if((a|0)>=497){break}if((c[(c[d+4>>2]|0)+(a<<2)>>2]|0)!=0){fI(c[(c[d+4>>2]|0)+(a<<2)>>2]|0)}a=a+1|0}fq(c[d+4>>2]|0,1988);fq(d,14944);i=b;return}function er(a){a=a|0;var b=0,d=0,e=0,f=0;b=i;d=a;a=0;while(1){if((a|0)>=(c[d+12>>2]|0)){break}e=c[94288+(a<<2)>>2]|0;while(1){if((e|0)==0){break}f=c[e+12>>2]|0;fq(e,16);e=f}a=a+1|0}i=b;return}function es(a){a=a|0;var b=0,d=0,e=0;b=i;d=a;a=c[d+4>>2]|0;while(1){if((a|0)==0){break}e=c[a+12>>2]|0;fq(a,16);a=e}a=c[d>>2]|0;while(1){if((a|0)==0){break}e=c[a>>2]|0;eG(c[a+4>>2]|0);fq(a,8);a=e}fq(d,12);i=b;return}function et(a){a=a|0;var b=0,d=0,e=0;b=i;d=a;a=c[d+19040>>2]|0;e=0;while(1){if((e|0)>=(c[a+1016>>2]|0)){break}c[a+1020+(e*20|0)+16>>2]=cG(d,c[(c[a+1020+(e*20|0)+8>>2]|0)+12>>2]|0,c[(c[a+1020+(e*20|0)+12>>2]|0)+12>>2]|0)|0;e=e+1|0}i=b;return}function eu(a,b){a=a|0;b=b|0;var d=0,e=0;d=i;e=a;if((c[e>>2]|0)!=0){fI(c[e>>2]|0)}c[e>>2]=fH(b)|0;i=d;return}function ev(b,d){b=b|0;d=d|0;var e=0,f=0,g=0;e=i;f=b;b=d;d=c[f+4>>2]|0;while(1){if((d|0)==0){break}a[102880+((c[d>>2]|0)*12|0)|0]=1;d=c[d+12>>2]|0}if((c[f>>2]|0)==0){g=7}else{if((c[(c[(c[f>>2]|0)+4>>2]|0)+8>>2]|0)!=(c[f+8>>2]|0)){g=7}}if((g|0)==7){while(1){if((b|0)==0){break}g=c[b>>2]|0;a[102881+((c[b+4>>2]|0)*12|0)|0]=1;if((a[b+8|0]|0)==108){c[102884+((c[b+4>>2]|0)*12|0)>>2]=c[f+8>>2]}else{c[102888+((c[b+4>>2]|0)*12|0)>>2]=c[f+8>>2]}fq(b,16);b=g}}g=c[f>>2]|0;while(1){if((g|0)==0){break}eF(c[g+4>>2]|0,b);b=0;g=c[g>>2]|0}i=e;return}function ew(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0;d=i;e=a;a=b;b=c[e+19040>>2]|0;f=0;while(1){if((f|0)>=(c[b+1016>>2]|0)){break}if((c[c[(c[a+4>>2]|0)+(f<<2)>>2]>>2]|0)!=-1){if((it(c[(c[(c[a+4>>2]|0)+(f<<2)>>2]|0)+8>>2]|0,c[(c[(c[a+4>>2]|0)+(f<<2)>>2]|0)+12>>2]|0)|0)!=0){g=cG(e,c[(c[(c[(c[a+4>>2]|0)+(f<<2)>>2]|0)+8>>2]|0)+12>>2]|0,c[(c[(c[(c[a+4>>2]|0)+(f<<2)>>2]|0)+12>>2]|0)+12>>2]|0)|0;if((eE(g,c[b+1020+(f*20|0)+16>>2]|0)|0)!=0){eD(c[(c[a+4>>2]|0)+(f<<2)>>2]|0,c[b+1020+(f*20|0)+16>>2]|0)}else{eD(c[(c[a+4>>2]|0)+(f<<2)>>2]|0,g)}}else{eD(c[(c[a+4>>2]|0)+(f<<2)>>2]|0,c[b+1020+(f*20|0)+16>>2]|0)}}f=f+1|0}i=d;return}function ex(a){a=a|0;var b=0,d=0,e=0,f=0,g=0;b=i;d=c[a>>2]|0;while(1){if((d|0)==0){e=7;break}if((eC(c[d+4>>2]|0)|0)!=0){e=4;break}d=c[d>>2]|0}if((e|0)==4){f=1;g=f;i=b;return g|0}else if((e|0)==7){f=0;g=f;i=b;return g|0}return 0}function ey(d,e,f,g){d=d|0;e=e|0;f=f|0;g=g|0;var h=0,j=0,k=0,l=0,m=0,n=0;h=i;i=i+1024|0;j=h|0;k=e;e=f;f=g;g=c[k+19040>>2]|0;ek(g);l=ej(g)|0;m=c[(c[k>>2]|0)+56>>2]|0;et(k);n=0;while(1){if((n|0)>=(c[g+1016>>2]|0)){break}eu((c[l+4>>2]|0)+(n<<2)|0,g+1020+(n*20|0)|0);n=n+1|0}if((f|0)==1){da(m,e,k,l);eq(l);er(g);js(d|0,j|0,1024)|0;i=h;return}b[j+8>>1]=0;b[j+16>>1]=0;f=db(m,e,k,l,1)|0;b[j+12>>1]=em(c[k+19040>>2]|0)|0;a[j+6|0]=0;a[j+7|0]=0;b[j+14>>1]=en(g)|0;b[j+10>>1]=eo(g)|0;b[j+18>>1]=ep(g)|0;c[j+20>>2]=0;if((f|0)==0){if((m|0)!=0){b[j+8>>1]=1}}else{if((c[f+1988>>2]|0)!=0){f=j+8|0;b[f>>1]=(b[f>>1]|0)+1}}eq(l);er(g);js(d|0,j|0,1024)|0;i=h;return}function ez(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0;b=i;e=a;a=d;d=c[e+19040>>2]|0;f=ej(d)|0;et(e);e=0;while(1){if((e|0)>=(c[d+1016>>2]|0)){break}eu((c[f+4>>2]|0)+(e<<2)|0,d+1020+(e*20|0)|0);e=e+1|0}c[a+1032>>2]=1;c[a+1040>>2]=eA(d)|0;e=0;while(1){if((e|0)>=(c[d+1016>>2]|0)){break}g=fH(c[(c[f+4>>2]|0)+(e<<2)>>2]|0)|0;c[(c[(c[a+1040>>2]|0)+4>>2]|0)+(e<<2)>>2]=g;e=e+1|0}eq(f);i=b;return}function eA(a){a=a|0;var b=0,d=0,e=0;b=i;d=a;a=fD(14944)|0;c[a+4>>2]=fD(c[d+1016>>2]<<2)|0;c[a+8>>2]=0;c[a+12>>2]=0;e=0;while(1){if((e|0)>=(c[d+1016>>2]|0)){break}c[(c[a+4>>2]|0)+(e<<2)>>2]=0;e=e+1|0}c[a>>2]=c[d+1016>>2];if((c[d+1016>>2]|0)<497){i=b;return a|0}else{aw(3192,(a=i,i=i+8|0,c[a>>2]=8856,a)|0)|0;i=a;aO(1);return 0}return 0}function eB(b,d,e){b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0;d=i;f=b;b=e;e=c[f+19040>>2]|0;g=ej(e)|0;ek(e);c[24180]=0;h=el(e)|0;if((c[24180]|0)!=0){et(f);j=0;while(1){if((j|0)>=(c[e+1016>>2]|0)){break}eu((c[g+4>>2]|0)+(j<<2)|0,e+1020+(j*20|0)|0);j=j+1|0}c[b+1032>>2]=1;c[b+1040>>2]=eA(e)|0;j=0;while(1){if((j|0)>=(c[e+1016>>2]|0)){break}k=fH(c[(c[g+4>>2]|0)+(j<<2)>>2]|0)|0;c[(c[(c[b+1040>>2]|0)+4>>2]|0)+(j<<2)>>2]=k;j=j+1|0}eq(g);er(e);es(h);i=d;return}k=0;do{k=k+1|0;}while((ex(h)|0)!=0);c[b+1032>>2]=k;c[b+1040>>2]=fD(k*14944|0)|0;j=0;while(1){if((j|0)>=(k|0)){break}c[(c[b+1040>>2]|0)+(j*14944|0)+8>>2]=0;c[(c[b+1040>>2]|0)+(j*14944|0)+12>>2]=0;j=j+1|0}et(f);k=0;do{j=0;while(1){if((j|0)>=(c[e+1016>>2]|0)){break}a[102881+(j*12|0)|0]=0;a[102880+(j*12|0)|0]=0;c[102884+(j*12|0)>>2]=c[e+1020+(j*20|0)>>2];c[102888+(j*12|0)>>2]=c[e+1020+(j*20|0)+4>>2];eu((c[g+4>>2]|0)+(j<<2)|0,e+1020+(j*20|0)|0);j=j+1|0}ev(h,0);j=0;while(1){if((j|0)>=(c[e+1016>>2]|0)){break}do{if((a[102881+(j*12|0)|0]|0)!=0){l=28}else{if((a[102880+(j*12|0)|0]|0)!=0){l=28;break}do{if((c[117360+(c[e+1020+(j*20|0)>>2]<<2)>>2]|0)!=-1){if((c[117360+(c[e+1020+(j*20|0)+4>>2]<<2)>>2]|0)==-1){break}c[c[(c[g+4>>2]|0)+(j<<2)>>2]>>2]=-1}}while(0)}}while(0);if((l|0)==28){l=0;c[c[(c[g+4>>2]|0)+(j<<2)>>2]>>2]=c[102884+(j*12|0)>>2];c[(c[(c[g+4>>2]|0)+(j<<2)>>2]|0)+4>>2]=c[102888+(j*12|0)>>2]}j=j+1|0}c$(f,g);ew(f,g);m=0;j=0;while(1){if((j|0)>=(c[e+1016>>2]|0)){break}if((c[c[(c[g+4>>2]|0)+(j<<2)>>2]>>2]|0)!=-1){m=m+1|0}j=j+1|0}c[(c[b+1040>>2]|0)+(k*14944|0)>>2]=m;n=fD(m<<2)|0;c[(c[b+1040>>2]|0)+(k*14944|0)+4>>2]=n;c[(c[b+1040>>2]|0)+(k*14944|0)+8>>2]=0;c[(c[b+1040>>2]|0)+(k*14944|0)+12>>2]=0;j=0;n=0;while(1){if((j|0)>=(c[e+1016>>2]|0)){break}if((c[c[(c[g+4>>2]|0)+(j<<2)>>2]>>2]|0)!=-1){o=fH(c[(c[g+4>>2]|0)+(j<<2)>>2]|0)|0;p=n;n=p+1|0;c[(c[(c[b+1040>>2]|0)+(k*14944|0)+4>>2]|0)+(p<<2)>>2]=o}j=j+1|0}k=k+1|0;}while((ex(h)|0)!=0);eq(g);er(e);es(h);i=d;return}function eC(a){a=a|0;var b=0,d=0,e=0,f=0;b=i;d=a;if((ex(c[(c[d+4>>2]|0)+4>>2]|0)|0)!=0){e=1;f=e;i=b;return f|0}if((c[c[d+4>>2]>>2]|0)==0){c[d+4>>2]=c[d>>2];e=0;f=e;i=b;return f|0}else{c[d+4>>2]=c[c[d+4>>2]>>2];e=1;f=e;i=b;return f|0}return 0}function eD(a,b){a=a|0;b=b|0;var d=0,e=0;d=i;e=a;a=b;b=c[e+16>>2]|0;fE(b,(jr(c[e+16>>2]|0)|0)+1|0);c[e+16>>2]=fD((jr(a|0)|0)+1|0)|0;ju(c[e+16>>2]|0,a|0)|0;i=d;return}function eE(b,c){b=b|0;c=c|0;var d=0,e=0,f=0,g=0,h=0,j=0,k=0,l=0;d=i;e=b;b=c;c=0;while(1){if((a[e]|0)!=0){f=1}else{f=(a[b]|0)!=0}if(!f){g=18;break}if((a[e]|0)==0){h=42}else{h=a[e]|0;e=e+1|0}if((a[b]|0)==0){j=42}else{j=a[b]|0;b=b+1|0}if((h|0)==(j|0)){continue}if((j|0)!=42){if((h|0)!=94){g=16;break}}c=c+1|0}if((g|0)==18){k=(c|0)>0|0;l=k;i=d;return l|0}else if((g|0)==16){k=0;l=k;i=d;return l|0}return 0}function eF(b,d){b=b|0;d=d|0;var e=0,f=0,g=0;e=i;f=b;b=d;d=c[94288+(c[f+8>>2]<<2)>>2]|0;while(1){if((d|0)==0){break}if((c[d+8>>2]|0)==0){g=fz(16)|0;c[g>>2]=b;b=g;c[b+12>>2]=c[f+8>>2];c[b+4>>2]=c[d>>2];if((c[d+4>>2]|0)>(c[f+8>>2]|0)){a[b+8|0]=108}else{a[b+8|0]=114}}d=c[d+12>>2]|0}ev(c[(c[f+4>>2]|0)+4>>2]|0,b);i=e;return}function eG(a){a=a|0;var b=0,d=0,e=0;b=i;d=a;a=c[d>>2]|0;while(1){if((a|0)==0){break}e=c[a>>2]|0;es(c[a+4>>2]|0);fq(a,8);a=e}fq(d,12);i=b;return}function eH(a){a=a|0;i=i;return a-1|0}function eI(a){a=a|0;var b=0,d=0;b=i;d=a;a=fz(12)|0;c[a+8>>2]=d;c[a+4>>2]=0;c[a>>2]=eJ(d,a,0)|0;i=b;return a|0}function eJ(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,j=0;e=i;f=a;a=b;b=d;if((c[117360+(f<<2)>>2]|0)!=-1){if((c[117360+(f<<2)>>2]|0)!=(c[a+8>>2]|0)){c[24180]=1}g=b;h=g;i=e;return h|0}c[117360+(f<<2)>>2]=c[a+8>>2];d=c[94288+(f<<2)>>2]|0;while(1){if((d|0)==0){break}if((c[d+8>>2]|0)<0){if((c[117360+(c[d+4>>2]<<2)>>2]|0)==-1){c[24180]=1}}else{if((c[d+8>>2]|0)==0){j=fz(16)|0;c[j+12>>2]=c[a+4>>2];c[j>>2]=c[d>>2];c[a+4>>2]=j;b=eJ(c[d+4>>2]|0,a,b)|0}}d=c[d+12>>2]|0}if((eK(f)|0)!=0){d=fz(8)|0;c[d>>2]=b;b=d;c[b+4>>2]=eL(f)|0}g=b;h=g;i=e;return h|0}function eK(a){a=a|0;var b=0,d=0,e=0,f=0,g=0;b=i;d=c[94288+(a<<2)>>2]|0;while(1){if((d|0)==0){e=7;break}if((c[d+8>>2]|0)==1){e=4;break}d=c[d+12>>2]|0}if((e|0)==4){f=1;g=f;i=b;return g|0}else if((e|0)==7){f=0;g=f;i=b;return g|0}return 0}function eL(a){a=a|0;var b=0,d=0,e=0,f=0;b=i;d=a;a=0;e=c[94288+(d<<2)>>2]|0;while(1){if((e|0)==0){break}if((c[e+8>>2]|0)==1){f=fz(8)|0;c[f>>2]=a;a=f;c[a+4>>2]=eI(c[e+4>>2]|0)|0}e=c[e+12>>2]|0}e=fz(12)|0;f=a;c[e+4>>2]=f;c[e>>2]=f;c[e+8>>2]=d;i=b;return e|0}function eM(a){a=a|0;var b=0,d=0;b=i;d=a;if((c[95288+(d<<2)>>2]|0)!=0){i=b;return}c[95288+(d<<2)>>2]=1;a=218720+(c[55312]<<2)|0;c[a>>2]=(c[a>>2]|0)+1;a=c[94288+(d<<2)>>2]|0;while(1){if((a|0)==0){break}if((c[a+8>>2]|0)>=0){eM(c[a+4>>2]|0)}a=c[a+12>>2]|0}i=b;return}function eN(a,b){a=a|0;b=b|0;var e=0,f=0;e=i;f=a;a=b;b=0;while(1){if((d[f]|0|0)==0){break}b=(((b<<8)+(d[f]|0)|0)>>>0)%((c[a>>2]|0)>>>0)|0;f=f+1|0}i=e;return b|0}function eO(a,b){a=a|0;b=b|0;var e=0,f=0,g=0;e=i;f=a;a=b;b=0;while(1){if((d[f]|0|0)==0){break}b=(((b*17|0)+(d[f]|0)|0)>>>0)%((c[a>>2]|0)>>>0)|0;f=f+1|0}if((b|0)!=0){g=b;i=e;return g|0}b=1;g=b;i=e;return g|0}function eP(a){a=a|0;var b=0,c=0,d=0;b=i;c=a;c=c|1;while(1){a=3;while(1){if((a|0)>((c|0)/(a|0)|0|0)){break}if(((c|0)%(a|0)|0|0)==0){d=5;break}a=a+2|0}if((d|0)==5){d=0}if(((c|0)%(a|0)|0|0)!=0){break}c=c+2|0}i=b;return c|0}function eQ(){var a=0,b=0,d=0;a=i;b=fz(12)|0;c[b>>2]=eP(100)|0;c[b+8>>2]=fz(c[b>>2]<<2)|0;c[b+4>>2]=0;d=0;while(1){if((d|0)>=(c[b>>2]|0)){break}c[(c[b+8>>2]|0)+(d<<2)>>2]=0;d=d+1|0}i=a;return b|0}function eR(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0,j=0,k=0;d=i;e=a;a=b;b=eN(e,a)|0;f=eO(e,a)|0;g=b;while(1){if(!1){h=9;break}if((c[(c[a+8>>2]|0)+(g<<2)>>2]|0)==0){break}if((bi(c[(c[a+8>>2]|0)+(g<<2)>>2]|0,e|0)|0)==0){break}g=(g+f|0)%(c[a>>2]|0)|0}if((h|0)==9){j=k;i=d;return j|0}k=g;j=k;i=d;return j|0}function eS(a){a=a|0;var b=0,d=0,e=0,f=0;b=i;i=i+16|0;d=b|0;e=a;a=d;f=e;c[a>>2]=c[f>>2];c[a+4>>2]=c[f+4>>2];c[a+8>>2]=c[f+8>>2];c[e>>2]=eP(c[d>>2]<<1)|0;c[e+8>>2]=fz(c[e>>2]<<2)|0;c[e+4>>2]=0;f=0;while(1){if((f|0)>=(c[e>>2]|0)){break}c[(c[e+8>>2]|0)+(f<<2)>>2]=0;f=f+1|0}f=0;while(1){if((f|0)>=(c[d>>2]|0)){break}if((c[(c[d+8>>2]|0)+(f<<2)>>2]|0)!=0){a=eR(c[(c[d+8>>2]|0)+(f<<2)>>2]|0,e)|0;c[(c[e+8>>2]|0)+(a<<2)>>2]=c[(c[d+8>>2]|0)+(f<<2)>>2];a=e+4|0;c[a>>2]=(c[a>>2]|0)+1}f=f+1|0}az(c[o>>2]|0)|0;fq(c[d+8>>2]|0,c[d>>2]<<2);i=b;return}function eT(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0;d=i;e=a;a=b;if((e|0)==0){aw(2992,(b=i,i=i+8|0,c[b>>2]=8736,b)|0)|0;i=b;aO(1);return 0}b=eR(e,a)|0;if((c[(c[a+8>>2]|0)+(b<<2)>>2]|0)!=0){f=c[(c[a+8>>2]|0)+(b<<2)>>2]|0;g=f;i=d;return g|0}h=fz((jr(e|0)|0)+1|0)|0;ju(h|0,e|0)|0;c[(c[a+8>>2]|0)+(b<<2)>>2]=h;b=a+4|0;c[b>>2]=(c[b>>2]|0)+1;if((c[a+4>>2]<<2|0)>((c[a>>2]|0)*3|0|0)){eS(a)}f=h;g=f;i=d;return g|0}function eU(a){a=a|0;var b=0,d=0,e=0;b=i;d=a;if((d|0)==0){i=b;return}a=0;while(1){if((a|0)>=(c[d>>2]|0)){break}if((c[(c[d+8>>2]|0)+(a<<2)>>2]|0)!=0){e=c[(c[d+8>>2]|0)+(a<<2)>>2]|0;fq(e,(jr(c[(c[d+8>>2]|0)+(a<<2)>>2]|0)|0)+1|0)}a=a+1|0}fq(c[d+8>>2]|0,c[d>>2]<<2);fq(d,12);i=b;return}function eV(a){a=a|0;var b=0,c=0,d=0;b=i;c=a;if((c|0)==0){d=0}else{a=fz(12)|0;eW(a,c);d=a}i=b;return d|0}function eW(a,b){a=a|0;b=b|0;var d=0,e=0;d=i;e=a;c[e>>2]=b<<1;c[e+4>>2]=0;c[e+8>>2]=fz(c[e>>2]<<2)|0;eZ(e);i=d;return}function eX(a){a=a|0;var b=0,d=0;b=i;d=a;if((d|0)==0){i=b;return}else{eY(d);fq(c[d+8>>2]|0,c[d>>2]<<2);fq(d,12);i=b;return}}function eY(a){a=a|0;var b=0,d=0,e=0,f=0;b=i;d=a;if((d|0)==0){i=b;return}a=0;while(1){if((a|0)>=(c[d>>2]|0)){break}e=c[(c[d+8>>2]|0)+(a<<2)>>2]|0;while(1){if((e|0)==0){break}f=e;e=c[e+4>>2]|0;fq(f,8)}a=a+1|0}eZ(d);c[d+4>>2]=0;i=b;return}function eZ(a){a=a|0;var b=0,d=0;b=i;d=a;jv(c[d+8>>2]|0,0,c[d>>2]<<2|0)|0;i=b;return}function e_(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0;d=i;e=a;if((e|0)==0){fk(2440,(a=i,i=i+1|0,i=i+7&-8,c[a>>2]=0,a)|0);i=a}if((e$(e,b)|0)==0){f=0;g=f;i=d;return g|0}else{b=e+4|0;c[b>>2]=(c[b>>2]|0)+1;f=1;g=f;i=d;return g|0}return 0}function e$(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0,j=0;d=i;e=a;a=b;b=e1(e,a)|0;f=c[(c[e+8>>2]|0)+(b<<2)>>2]|0;while(1){if((f|0)==0){g=7;break}if((bi(c[f>>2]|0,a|0)|0)==0){g=4;break}f=c[f+4>>2]|0}if((g|0)==7){f=fz(8)|0;c[f+4>>2]=c[(c[e+8>>2]|0)+(b<<2)>>2];c[f>>2]=a;c[(c[e+8>>2]|0)+(b<<2)>>2]=f;h=f;j=h;i=d;return j|0}else if((g|0)==4){h=0;j=h;i=d;return j|0}return 0}function e0(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0,j=0;d=i;e=a;a=b;if((e|0)==0){f=0;g=f;i=d;return g|0}b=e1(e,a)|0;h=c[(c[e+8>>2]|0)+(b<<2)>>2]|0;while(1){if((h|0)==0){j=8;break}if((df(c[h>>2]|0,a)|0)!=0){j=6;break}h=c[h+4>>2]|0}if((j|0)==6){f=1;g=f;i=d;return g|0}else if((j|0)==8){f=0;g=f;i=d;return g|0}return 0}function e1(b,d){b=b|0;d=d|0;var e=0,f=0,g=0,h=0;e=i;f=b;b=d;d=37;g=0;while(1){if((bg(a[b+g|0]|0)|0)==0){break}d=(a[b+g|0]|0)+(d*31|0)|0;g=g+1|0}d=(d|0)%(c[f>>2]|0)|0;if((d|0)>=0){h=d;i=e;return h|0}d=d*-1|0;h=d;i=e;return h|0}function e2(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0,j=0;d=i;e=a;a=b;if((e|0)==0){f=0;g=f;i=d;return g|0}b=e1(e,a)|0;h=c[(c[e+8>>2]|0)+(b<<2)>>2]|0;while(1){if((h|0)==0){j=8;break}if((df(a,c[h>>2]|0)|0)!=0){j=6;break}h=c[h+4>>2]|0}if((j|0)==8){f=0;g=f;i=d;return g|0}else if((j|0)==6){f=1;g=f;i=d;return g|0}return 0}function e3(a){a=a|0;var b=0,d=0;b=a;if((b|0)==0){d=0}else{d=c[b+4>>2]|0}i=i;return d|0}function e4(a,b){a=a|0;b=b|0;var d=0,e=0,f=0;d=i;e=b;b=fR(a,e,1712)|0;a=fz(96)|0;if((b|0)==0){fk(8056,(f=i,i=i+8|0,c[f>>2]=e,f)|0);i=f}c[a>>2]=dW(b)|0;aq(b|0)|0;c[a+92>>2]=eQ()|0;c[a+4>>2]=eT(e,c[a+92>>2]|0)|0;e5(a);e6(a);e7(a);e8(a);i=d;return a|0}function e5(b){b=b|0;var d=0,e=0,f=0,g=0;d=i;e=b;if((dZ(c[e>>2]|0,1656)|0)==0){fk(7008,(f=i,i=i+8|0,c[f>>2]=1656,f)|0);i=f}b=d$(c[e>>2]|0)|0;if(((b|0)%2|0|0)!=0){fk(6816,(f=i,i=i+1|0,i=i+7&-8,c[f>>2]=0,f)|0);i=f}c[e+88>>2]=(b|0)/2|0;c[e+84>>2]=fz((c[e+88>>2]|0)+1<<3)|0;b=0;while(1){if((b|0)>=(c[e+88>>2]|0)){break}f=d0(c[e>>2]|0)|0;g=eT(f,c[e+92>>2]|0)|0;c[(c[e+84>>2]|0)+(b<<3)>>2]=g;g=d0(c[e>>2]|0)|0;fh(g);c[(c[e+84>>2]|0)+(b<<3)+4>>2]=a[g|0]|0;b=b+1|0}c[(c[e+84>>2]|0)+(c[e+88>>2]<<3)+4>>2]=-1;i=d;return}function e6(a){a=a|0;var b=0,d=0;b=i;d=a;a=c[d+92>>2]|0;c[d+8>>2]=fg(d,9288,a)|0;c[d+12>>2]=fg(d,8888,a)|0;c[d+20>>2]=fg(d,8520,a)|0;c[d+32>>2]=fg(d,8256,a)|0;c[d+28>>2]=fg(d,8e3,a)|0;c[d+24>>2]=fg(d,7800,a)|0;c[d+16>>2]=fg(d,7576,a)|0;c[d+36>>2]=fg(d,7400,a)|0;i=b;return}function e7(a){a=a|0;var b=0,c=0;b=i;c=a;fc(c,7848);fd(c,6232);fe(c,5200);ff(c,4568,c+48|0,c+68|0);ff(c,3936,c+52|0,c+72|0);i=b;return}function e8(a){a=a|0;var b=0,d=0,e=0,f=0,g=0;b=i;d=a;c[d+80>>2]=eV(1024)|0;a=0;while(1){if((c[(c[d+56>>2]|0)+(a*24|0)+20>>2]|0)==0){break}e=c[(c[d+56>>2]|0)+(a*24|0)+4>>2]|0;f=0;while(1){g=c[(c[d+84>>2]|0)+(f<<3)+4>>2]|0;if((g|0)==-1){break}if((g|0)==(e|0)){e_(c[d+80>>2]|0,c[(c[d+84>>2]|0)+(f<<3)>>2]|0)|0}f=f+1|0}a=a+1|0}i=b;return}function e9(a){a=a|0;var b=0,d=0;b=i;d=a;fq(c[d+84>>2]|0,(c[d+88>>2]|0)+1<<3);fa(d);fb(d);eX(c[d+80>>2]|0);eU(c[d+92>>2]|0);dY(c[d>>2]|0);fq(d,96);i=b;return}function fa(a){a=a|0;var b=0,d=0;b=i;d=a;eX(c[d+8>>2]|0);eX(c[d+12>>2]|0);eX(c[d+20>>2]|0);eX(c[d+32>>2]|0);eX(c[d+28>>2]|0);eX(c[d+24>>2]|0);eX(c[d+16>>2]|0);eX(c[d+36>>2]|0);i=b;return}function fb(a){a=a|0;var b=0,d=0,e=0,f=0;b=i;d=a;a=24;e=0;while(1){if((c[(c[d+48>>2]|0)+(e*24|0)+20>>2]|0)==0){break}f=(c[d+48>>2]|0)+(e*24|0)|0;fq(c[f+16>>2]|0,(c[f+12>>2]|0)+1<<2);eX(c[f+8>>2]|0);e=e+1|0}e=0;while(1){if((c[(c[d+52>>2]|0)+(e*24|0)+20>>2]|0)==0){break}f=(c[d+52>>2]|0)+(e*24|0)|0;fq(c[f+16>>2]|0,(c[f+12>>2]|0)+1<<2);eX(c[f+8>>2]|0);e=e+1|0}e=0;while(1){if((e|0)>=(c[d+64>>2]|0)){break}eX(c[(c[d+44>>2]|0)+(e*24|0)+8>>2]|0);e=e+1|0}fq(c[d+56>>2]|0,aa(a,(c[d+76>>2]|0)+1|0)|0);fq(c[d+40>>2]|0,a);fq(c[d+44>>2]|0,aa(a,(c[d+64>>2]|0)+1|0)|0);fq(c[d+48>>2]|0,aa(a,(c[d+68>>2]|0)+1|0)|0);fq(c[d+52>>2]|0,aa(a,(c[d+72>>2]|0)+1|0)|0);i=b;return}function fc(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0,j=0,k=0;d=i;i=i+8|0;e=d|0;f=a;a=b;if((dZ(c[f>>2]|0,a)|0)!=0){c[f+64>>2]=((d1(c[f>>2]|0)|0)+1|0)/2|0}else{c[f+64>>2]=0;if((c[24072]|0)>0){aw(10304,(g=i,i=i+1|0,i=i+7&-8,c[g>>2]=0,g)|0)|0;i=g}}c[f+44>>2]=fz(((c[f+64>>2]|0)+1|0)*24|0)|0;b=0;while(1){if((b|0)>=(c[f+64>>2]|0)){break}h=d2(c[f>>2]|0,e)|0;if((c[e>>2]|0)<=0){fk(9896,(g=i,i=i+1|0,i=i+7&-8,c[g>>2]=0,g)|0);i=g}j=eV(c[e>>2]|0)|0;k=0;while(1){if((k|0)>=(c[e>>2]|0)){break}e_(j,eT(c[h+(k<<2)>>2]|0,c[f+92>>2]|0)|0)|0;k=k+1|0}c[(c[f+44>>2]|0)+(b*24|0)+8>>2]=j;h=d2(c[f>>2]|0,e)|0;if((c[e>>2]|0)>1){fk(9488,(g=i,i=i+16|0,c[g>>2]=b+1,c[g+8>>2]=a,g)|0);i=g}k=eT(c[h>>2]|0,c[f+92>>2]|0)|0;c[(c[f+44>>2]|0)+(b*24|0)+20>>2]=k;b=b+1|0}c[(c[f+44>>2]|0)+((c[f+64>>2]|0)*24|0)+20>>2]=0;i=d;return}function fd(a,b){a=a|0;b=b|0;var d=0,e=0,f=0;d=i;e=a;a=b;c[e+40>>2]=fz(24)|0;if((dZ(c[e>>2]|0,a)|0)!=0){if((d$(c[e>>2]|0)|0)>1){fk(10600,(f=i,i=i+8|0,c[f>>2]=a,f)|0);i=f}a=d0(c[e>>2]|0)|0;b=eT(a,c[e+92>>2]|0)|0;c[(c[e+40>>2]|0)+20>>2]=b;i=d;return}else{c[(c[e+40>>2]|0)+20>>2]=0;if((c[24072]|0)>0){aw(11024,(f=i,i=i+1|0,i=i+7&-8,c[f>>2]=0,f)|0)|0;i=f}i=d;return}}function fe(b,d){b=b|0;d=d|0;var e=0,f=0,g=0,h=0,j=0,k=0;e=i;i=i+8|0;f=e|0;g=b;b=d;if((dZ(c[g>>2]|0,b)|0)!=0){c[g+76>>2]=((d1(c[g>>2]|0)|0)+1|0)/2|0}else{c[g+76>>2]=0;if((c[24072]|0)>0){aw(2056,(h=i,i=i+1|0,i=i+7&-8,c[h>>2]=0,h)|0)|0;i=h}}c[g+56>>2]=fz(((c[g+76>>2]|0)+1|0)*24|0)|0;d=0;while(1){if((d|0)>=(c[g+76>>2]|0)){break}j=d2(c[g>>2]|0,f)|0;if((c[f>>2]|0)!=1){fk(11560,(h=i,i=i+16|0,c[h>>2]=d+1,c[h+8>>2]=b,h)|0);i=h}c[(c[g+56>>2]|0)+(d*24|0)+4>>2]=a[c[j>>2]|0]|0;j=d2(c[g>>2]|0,f)|0;if((c[f>>2]|0)!=1){fk(11560,(h=i,i=i+16|0,c[h>>2]=d+1,c[h+8>>2]=b,h)|0);i=h}k=eT(c[j>>2]|0,c[g+92>>2]|0)|0;c[(c[g+56>>2]|0)+(d*24|0)+20>>2]=k;d=d+1|0}c[(c[g+56>>2]|0)+((c[g+76>>2]|0)*24|0)+20>>2]=0;i=e;return}function ff(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,j=0,k=0,l=0,m=0;f=i;i=i+8|0;g=f|0;h=a;a=b;b=d;d=e;if((dZ(c[h>>2]|0,a)|0)!=0){c[d>>2]=((d1(c[h>>2]|0)|0)+1|0)/3|0}else{c[d>>2]=0;if((c[24072]|0)>0){aw(3240,(j=i,i=i+8|0,c[j>>2]=a,j)|0)|0;i=j}}c[b>>2]=fz(((c[d>>2]|0)+1|0)*24|0)|0;e=0;while(1){if((e|0)>=(c[d>>2]|0)){break}k=d2(c[h>>2]|0,g)|0;if((c[g>>2]|0)>1){fk(2632,(j=i,i=i+16|0,c[j>>2]=a,c[j+8>>2]=e+1,j)|0);i=j}l=eT(c[k>>2]|0,c[h+92>>2]|0)|0;c[(c[b>>2]|0)+(e*24|0)>>2]=l;k=d2(c[h>>2]|0,g)|0;l=eV(c[g>>2]|0)|0;c[(c[b>>2]|0)+(e*24|0)+8>>2]=l;c[(c[b>>2]|0)+(e*24|0)+12>>2]=c[g>>2];l=fz((c[g>>2]|0)+1<<2)|0;c[(c[b>>2]|0)+(e*24|0)+16>>2]=l;l=0;while(1){if((l|0)>=(c[g>>2]|0)){break}m=eT(c[k+(l<<2)>>2]|0,c[h+92>>2]|0)|0;e_(c[(c[b>>2]|0)+(e*24|0)+8>>2]|0,m)|0;c[(c[(c[b>>2]|0)+(e*24|0)+16>>2]|0)+(l<<2)>>2]=m;l=l+1|0}c[(c[(c[b>>2]|0)+(e*24|0)+16>>2]|0)+(l<<2)>>2]=0;k=d2(c[h>>2]|0,g)|0;if((c[g>>2]|0)>1){fk(2632,(j=i,i=i+16|0,c[j>>2]=a,c[j+8>>2]=e+1,j)|0);i=j}m=eT(c[k>>2]|0,c[h+92>>2]|0)|0;c[(c[b>>2]|0)+(e*24|0)+20>>2]=m;e=e+1|0}c[(c[b>>2]|0)+((c[d>>2]|0)*24|0)+20>>2]=0;i=f;return}function fg(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0;e=i;f=a;a=b;b=d;if((dZ(c[f>>2]|0,a)|0)!=0){g=d$(c[f>>2]|0)|0}else{if((c[24072]|0)>0){aw(7168,(d=i,i=i+8|0,c[d>>2]=a,d)|0)|0;i=d}g=0}d=eV(g)|0;a=0;while(1){if((a|0)>=(g|0)){break}e_(d,eT(d0(c[f>>2]|0)|0,b)|0)|0;a=a+1|0}i=e;return d|0}function fh(a){a=a|0;var b=0,d=0;b=i;d=a;if((jr(d|0)|0)>>>0<=1>>>0){i=b;return}fk(6568,(a=i,i=i+8|0,c[a>>2]=d,a)|0);i=a;i=b;return}function fi(a){a=a|0;var b=0;switch(a|0){case 1:{b=10408;break};case 2:{b=10928;break};case 3:{b=7760;break};case 4:{b=6176;break};case 5:{b=5144;break};case 6:{b=4528;break};case 7:{b=3888;break};default:{b=220720}}i=i;return b|0}function fj(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0;e=i;i=i+1040|0;f=e|0;g=e+1024|0;h=a;a=g|0;c[a>>2]=d;c[a+4>>2]=0;a=fi(h)|0;aP(109952,2616,(d=i,i=i+8|0,c[d>>2]=a,d)|0)|0;i=d;bh(f|0,b|0,g|0)|0;jw(109952,f|0)|0;c[27486]=h;az(c[n>>2]|0)|0;i=e;return}function fk(a,b){a=a|0;b=b|0;var d=0,e=0,f=0;d=i;i=i+16|0;e=d|0;f=e|0;c[f>>2]=b;c[f+4>>2]=0;a$(c[n>>2]|0,a|0,e|0)|0;aw(2048,(e=i,i=i+1|0,i=i+7&-8,c[e>>2]=0,e)|0)|0;i=e;au(c[n>>2]|0,2048,(e=i,i=i+1|0,i=i+7&-8,c[e>>2]=0,e)|0)|0;i=e;if((c[(a8()|0)>>2]|0)>0){a3(168544);a=c[n>>2]|0;f=c[(a8()|0)>>2]|0;au(a|0,11544,(e=i,i=i+8|0,c[e>>2]=f,e)|0)|0;i=e;au(c[n>>2]|0,168544,(e=i,i=i+1|0,i=i+7&-8,c[e>>2]=0,e)|0)|0;i=e;au(c[n>>2]|0,2048,(e=i,i=i+1|0,i=i+7&-8,c[e>>2]=0,e)|0)|0;i=e}az(c[n>>2]|0)|0;az(c[o>>2]|0)|0;au(c[n>>2]|0,11e3,(e=i,i=i+1|0,i=i+7&-8,c[e>>2]=0,e)|0)|0;i=e;aO(1);i=d;return}function fl(b,d){b=b|0;d=d|0;var e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0;e=i;i=i+64|0;f=e|0;g=b;b=d;do{h=ap(b|0)|0;if((h|0)!=-1){j=(aT(h|0)|0)!=0}else{j=0}}while(j);if((h|0)==-1){k=0;l=k;i=e;return l|0}j=0;while(1){do{if((j|0)<=59){if((aT(h|0)|0)!=0){m=0;break}m=(h|0)!=-1}else{m=0}}while(0);if(!m){break}a[f+j|0]=h;h=ap(b|0)|0;j=j+1|0}if((j|0)==60){fk(9784,(b=i,i=i+1|0,i=i+7&-8,c[b>>2]=0,b)|0);i=b}a[f+j|0]=0;k=eT(f|0,c[g+84>>2]|0)|0;l=k;i=e;return l|0}function fm(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,j=0,k=0;e=i;i=i+208|0;f=e|0;g=a;a=b;fn(f|0,d+1|0,201);d=fR(c[g+4>>2]|0,f|0,10808)|0;b=d;if((d|0)==0){fj(3,7704,(d=i,i=i+8|0,c[d>>2]=f,d)|0);i=d;h=0;j=h;i=e;return j|0}d=fz(212)|0;fn(d|0,f|0,201);c[d+204>>2]=0;c[d+208>>2]=c[g+92>>2];c[g+92>>2]=d;while(1){f=fl(g,b)|0;if((f|0)==0){break}k=fz(20)|0;c[k+12>>2]=a;a=k;c[a>>2]=f;c[a+4>>2]=d}aq(b|0)|0;h=a;j=h;i=e;return j|0}function fn(b,c,d){b=b|0;c=c|0;d=d|0;var e=0,f=0;e=i;f=b;b=d;jt(f|0,c|0,b-1|0)|0;a[f+(b-1)|0]=0;i=e;return}function fo(b,c,d){b=b|0;c=c|0;d=d|0;var e=0,f=0;e=i;f=b;b=d;aU(f|0,c|0,b-(jr(f|0)|0)-1|0)|0;a[f+(b-1)|0]=0;i=e;return}function fp(a){a=a|0;var b=0,d=0;b=i;d=a;while(1){if((d|0)==0){break}a=c[d+8>>2]|0;fq(d,16);d=a}i=b;return}function fq(a,b){a=a|0;b=b|0;var d=0;d=i;c[24182]=(c[24182]|0)-b;jn(a);i=d;return}function fr(a){a=a|0;var b=0,d=0;b=i;d=a;while(1){if((d|0)==0){break}a=c[d>>2]|0;fp(c[d+12>>2]|0);fp(c[d+16>>2]|0);fq(d,20);d=a}i=b;return}function fs(b){b=b|0;var c=0;c=b;a[c+3|0]=-1;i=i;return c|0}function ft(a){a=a|0;var b=0,d=0;b=i;d=a;while(1){if((d|0)==0){break}a=c[d+8>>2]|0;fu(c[d+4>>2]|0);fq(d,12);d=a}i=b;return}function fu(b){b=b|0;var d=0,e=0;d=i;e=b;if((a[e|0]|0)!=2){fv(c[e+4>>2]|0)}fq(e,12);i=d;return}function fv(a){a=a|0;var b=0,d=0;b=i;d=a;if((d|0)==0){i=b;return}else{fv(c[d>>2]|0);fu(c[d+4>>2]|0);fq(d,8);i=b;return}}function fw(b){b=b|0;var d=0,e=0,f=0,g=0,h=0;d=i;e=b;if((a[e|0]|0)==2){f=1;g=f;i=d;return g|0}b=0;h=c[e+4>>2]|0;while(1){if((h|0)==0){break}b=b+(fw(c[h+4>>2]|0)|0)|0;h=c[h>>2]|0}f=b;g=f;i=d;return g|0}function fx(){var a=0,b=0;a=i;aS(10);b=0;while(1){if((b|0)>=256){break}c[96744+(b<<2)>>2]=ao()|0;b=b+1|0}i=a;return}function fy(b){b=b|0;var d=0,e=0,f=0,g=0,h=0,j=0;d=i;e=b;if((e|0)==0){f=0;g=f;i=d;return g|0}b=fz(12)|0;h=b;j=e;c[h>>2]=c[j>>2];c[h+4>>2]=c[j+4>>2];c[h+8>>2]=c[j+8>>2];if((a[e|0]|0)!=2){c[b+4>>2]=fA(c[e+4>>2]|0)|0}f=b;g=f;i=d;return g|0}function fz(a){a=a|0;var b=0,d=0,e=0;b=i;d=a;a=jm(d)|0;c[24182]=(c[24182]|0)+d;if((c[24182]|0)>(c[27480]|0)){c[27480]=c[24182]}if((a|0)!=0){e=a;i=b;return e|0}if((d|0)!=0){aw(9384,(d=i,i=i+1|0,i=i+7&-8,c[d>>2]=0,d)|0)|0;i=d;at();return 0}else{e=a;i=b;return e|0}return 0}function fA(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0;b=i;d=a;if((d|0)==0){e=0;f=e;i=b;return f|0}else{a=fz(8)|0;g=a;h=d;c[g>>2]=c[h>>2];c[g+4>>2]=c[h+4>>2];c[a>>2]=fA(c[d>>2]|0)|0;c[a+4>>2]=fy(c[d+4>>2]|0)|0;e=a;f=e;i=b;return f|0}return 0}function fB(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0;b=i;d=a;if((d|0)==0){e=0;f=e;i=b;return f|0}else{a=fs(fz(16)|0)|0;g=a;h=d;c[g>>2]=c[h>>2];c[g+4>>2]=c[h+4>>2];c[g+8>>2]=c[h+8>>2];c[g+12>>2]=c[h+12>>2];c[a+8>>2]=fB(c[d+8>>2]|0)|0;e=a;f=e;i=b;return f|0}return 0}function fC(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0;b=i;d=a;if((d|0)==0){e=0;f=e;i=b;return f|0}else{a=fz(20)|0;g=a;h=d;c[g>>2]=c[h>>2];c[g+4>>2]=c[h+4>>2];c[g+8>>2]=c[h+8>>2];c[g+12>>2]=c[h+12>>2];c[g+16>>2]=c[h+16>>2];c[a>>2]=0;c[a+12>>2]=fB(c[d+12>>2]|0)|0;c[a+16>>2]=fB(c[d+16>>2]|0)|0;e=a;f=e;i=b;return f|0}return 0}function fD(a){a=a|0;var b=0,d=0,e=0;b=i;d=a;a=jm(d)|0;c[29324]=(c[29324]|0)+d;if((c[29324]|0)>(c[27482]|0)){c[27482]=c[29324]}if((a|0)!=0){e=a;i=b;return e|0}if((d|0)!=0){aw(9384,(d=i,i=i+1|0,i=i+7&-8,c[d>>2]=0,d)|0)|0;i=d;at();return 0}else{e=a;i=b;return e|0}return 0}function fE(a,b){a=a|0;b=b|0;var d=0;d=i;c[29324]=(c[29324]|0)-b;jn(a);i=d;return}function fF(a){a=a|0;var b=0,d=0,e=0;b=i;d=a;while(1){if((d|0)==0){break}a=c[d+8>>2]|0;e=c[d+12>>2]|0;fE(e,(jr(c[d+12>>2]|0)|0)+1|0);fE(d,16);d=a}i=b;return}function fG(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0;b=i;d=a;if((d|0)==0){e=0;f=e;i=b;return f|0}else{a=fs(fD(16)|0)|0;g=a;h=d;c[g>>2]=c[h>>2];c[g+4>>2]=c[h+4>>2];c[g+8>>2]=c[h+8>>2];c[g+12>>2]=c[h+12>>2];c[a+12>>2]=fD((jr(c[d+12>>2]|0)|0)+1|0)|0;ju(c[a+12>>2]|0,c[d+12>>2]|0)|0;c[a+8>>2]=fG(c[d+8>>2]|0)|0;e=a;f=e;i=b;return f|0}return 0}function fH(a){a=a|0;var b=0,d=0,e=0,f=0;b=i;d=a;if((d|0)==0){e=0;f=e;i=b;return f|0}else{a=fD(20)|0;c[a+16>>2]=fD((jr(c[d+16>>2]|0)|0)+1|0)|0;ju(c[a+16>>2]|0,c[d+16>>2]|0)|0;c[a>>2]=c[d>>2];c[a+4>>2]=c[d+4>>2];c[a+8>>2]=fG(c[d+8>>2]|0)|0;c[a+12>>2]=fG(c[d+12>>2]|0)|0;e=a;f=e;i=b;return f|0}return 0}function fI(a){a=a|0;var b=0,d=0;b=i;d=a;fF(c[d+12>>2]|0);fF(c[d+8>>2]|0);a=c[d+16>>2]|0;fE(a,(jr(c[d+16>>2]|0)|0)+1|0);fE(d,20);i=b;return}function fJ(a,b){a=a|0;b=b|0;var d=0,e=0,f=0;d=i;e=a;a=b;b=e;do{if((e|0)==0){f=a}else{if((a|0)==0){f=e;break}while(1){if((c[b>>2]|0)==0){break}b=c[b>>2]|0}c[b>>2]=a;f=e}}while(0);i=d;return f|0}function fK(a,b){a=a|0;b=b|0;var d=0,e=0,f=0;d=i;e=a;a=b;b=e;do{if((e|0)==0){f=a}else{if((a|0)==0){f=e;break}while(1){if((c[b+8>>2]|0)==0){break}b=c[b+8>>2]|0}c[b+8>>2]=a;f=e}}while(0);i=d;return f|0}function fL(a){a=a|0;var b=0,c=0;b=i;c=a;a=1;while(1){if((a|0)>=(c|0)){break}a=a<<1}i=b;return a|0}function fM(b,d,e){b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,j=0,k=0;f=i;g=b;b=d;d=e;e=jr(d|0)|0;h=jr(b|0)|0;j=0;while(1){if((j|0)>=(e|0)){break}if((j|0)<(h|0)){au(g|0,10744,(k=i,i=i+8|0,c[k>>2]=a[b+j|0]|0,k)|0)|0;i=k}else{au(g|0,10744,(k=i,i=i+8|0,c[k>>2]=a[d+j|0]|0,k)|0)|0;i=k}j=j+1|0}i=f;return}function fN(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0;d=i;e=a;a=b;b=0;while(1){if((b|0)>=(c[e+4>>2]|0)){f=7;break}if((bi(e+8+(b*76|0)|0,a|0)|0)==0){f=4;break}b=b+1|0}if((f|0)==4){g=1;h=g;i=d;return h|0}else if((f|0)==7){g=0;h=g;i=d;return h|0}return 0}function fO(b){b=b|0;var d=0,e=0,f=0,g=0;d=i;e=b;b=0;while(1){if((b|0)>=(c[e+4>>2]|0)){break}f=e+8+(b*76|0)|0;do{if((bi(f|0,7696)|0)==0){g=1}else{if((bi(f|0,6136)|0)==0){g=1;break}if((bi(f|0,5128)|0)==0){g=1;break}g=(bi(f|0,4480)|0)==0}}while(0);a[(c[e+19008>>2]|0)+b|0]=g&1;b=b+1|0}i=d;return}function fP(b){b=b|0;var d=0,e=0,f=0,g=0,h=0;d=i;e=b;b=0;while(1){if((b|0)>=(c[e+4>>2]|0)){f=7;break}if((a[(c[e+19008>>2]|0)+b|0]|0)!=0){f=4;break}b=b+1|0}if((f|0)==4){g=1;h=g;i=d;return h|0}else if((f|0)==7){g=0;h=g;i=d;return h|0}return 0}function fQ(b,d,e){b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,j=0,k=0;f=i;g=b;b=d;d=e;while(1){if((b|0)>(d|0)){h=7;break}if((a[(c[g+19008>>2]|0)+b|0]|0)!=0){h=4;break}b=b+1|0}if((h|0)==4){j=1;k=j;i=f;return k|0}else if((h|0)==7){j=0;k=j;i=f;return k|0}return 0}function fR(b,d,e){b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0;f=i;i=i+624|0;g=f|0;h=f+208|0;j=f+416|0;k=b;b=d;d=e;if((a[b|0]|0)==47){l=aA(b|0,d|0)|0;m=l;i=f;return m|0}e=220736;if((k|0)!=0){fn(j|0,k,201);n=aQ(j|0,47)|0;if((n|0)!=0){a[n]=58;a[n+1|0]=0;e=j|0}}aP(h|0,10992,(j=i,i=i+24|0,c[j>>2]=e,c[j+8>>2]=220736,c[j+16>>2]=2600,j)|0)|0;i=j;jr(b|0)|0;jr(h|0)|0;e=h|0;while(1){h=aC(e|0,58)|0;n=h;if((h|0)==0){o=12;break}jt(g|0,e|0,n-e|0)|0;a[g+(n-e)|0]=47;ju(g+(n-e)+1|0,b|0)|0;h=aA(g|0,d|0)|0;p=h;if((h|0)!=0){o=10;break}e=n+1|0}if((o|0)==12){l=0;m=l;i=f;return m|0}else if((o|0)==10){aw(2032,(j=i,i=i+8|0,c[j>>2]=g,j)|0)|0;i=j;l=p;m=l;i=f;return m|0}return 0}function fS(a){a=a|0;var b=0;b=a;c[24442]=(((c[24442]|0)*3|0)+b+104729|0)%179424673|0;c[24443]=(((c[24443]|0)*7|0)+b+48611|0)%86028121|0;i=i;return(c[24442]|0)+(c[24443]|0)|0}function fT(a){a=a|0;var b=0,d=0,e=0;b=i;d=a;if((c[24444]|0)!=0){aw(10576,(a=i,i=i+8|0,c[a>>2]=10264,a)|0)|0;i=a;aO(1)}if((d|0)<0){e=-d|0}else{e=d}d=e;d=(d|0)%1073741824|0;c[24442]=(d|0)%3|0;c[24443]=(d|0)%5|0;c[24446]=d;c[24444]=1;i=b;return}function fU(){var a=0;if((c[24444]|0)!=0){c[24444]=0;i=i;return}else{aw(10576,(a=i,i=i+8|0,c[a>>2]=9848,a)|0)|0;i=a;aO(1)}}function fV(){c[24446]=(c[24446]|0)+1;return fS(c[24446]|0)|0}function fW(b,d,e){b=b|0;d=d|0;e=e|0;var f=0,g=0;f=i;g=b;b=d;d=e;while(1){if((bg(a[b]|0)|0)==0){break}d=d+(d<<1)+(c[96744+(((a[b]|0)+d&255)<<2)>>2]|0)|0;b=b+1|0}i=f;return d&(c[g+4>>2]|0)-1|0}function fX(e,f){e=e|0;f=f|0;var g=0,h=0,j=0;g=i;h=e;e=f;if((a[e|0]|0)==2){f=fs(fz(16)|0)|0;c[f+12>>2]=c[e+4>>2];b[f>>1]=-1;a[f+4|0]=0;a[f+2|0]=a[e+2|0]|0;j=fW(h,c[f+12>>2]|0,d[f+2|0]|0)|0;c[f+8>>2]=c[(c[h>>2]|0)+(j<<2)>>2];c[(c[h>>2]|0)+(j<<2)>>2]=f;i=g;return}f=c[e+4>>2]|0;while(1){if((f|0)==0){break}fX(h,c[f+4>>2]|0);f=c[f>>2]|0}i=g;return}function fY(a){a=a|0;var b=0,d=0,e=0;b=i;d=a;a=fz(12)|0;c[a+4>>2]=fL(fw(d)|0)|0;c[a>>2]=fz(c[a+4>>2]<<2)|0;e=0;while(1){if((e|0)>=(c[a+4>>2]|0)){break}c[(c[a>>2]|0)+(e<<2)>>2]=0;e=e+1|0}fX(a,d);i=b;return a|0}function fZ(a){a=a|0;var b=0,d=0;b=i;d=a;if((d|0)==0){i=b;return}a=0;while(1){if((a|0)>=(c[d+4>>2]|0)){break}fp(c[(c[d>>2]|0)+(a<<2)>>2]|0);a=a+1|0}fq(c[d>>2]|0,c[d+4>>2]<<2);fq(d,12);i=b;return}function f_(a,b,e){a=a|0;b=b|0;e=e|0;var f=0,g=0,h=0,j=0,k=0,l=0;f=i;g=a;a=b;b=e;if((g|0)==0){h=0;j=h;i=f;return j|0}e=fW(g,c[a+12>>2]|0,b)|0;k=c[(c[g>>2]|0)+(e<<2)>>2]|0;while(1){if((k|0)==0){l=10;break}if((it(k,a)|0)!=0){if((b|0)==(d[k+2|0]|0|0)){l=7;break}}k=c[k+8>>2]|0}if((l|0)==10){h=0;j=h;i=f;return j|0}else if((l|0)==7){h=1;j=h;i=f;return j|0}return 0}function f$(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0,j=0;d=i;e=a;a=b;if((e|0)==0){f=a;g=f;i=d;return g|0}else{b=fz(20)|0;h=b;j=e;c[h>>2]=c[j>>2];c[h+4>>2]=c[j+4>>2];c[h+8>>2]=c[j+8>>2];c[h+12>>2]=c[j+12>>2];c[h+16>>2]=c[j+16>>2];j=f$(c[e+12>>2]|0,a)|0;c[b+16>>2]=f$(c[e+16>>2]|0,j)|0;f=b;g=f;i=d;return g|0}return 0}function f0(b,c){b=b|0;c=c|0;var d=0,e=0,f=0,g=0,h=0,j=0,k=0;d=i;e=b;b=c;while(1){if((bg(a[e]|0)|0)!=0){f=1}else{f=(bg(a[b]|0)|0)!=0}if(!f){break}if((a[e]|0)!=(a[b]|0)){g=6;break}e=e+1|0;b=b+1|0}if((g|0)==6){h=0;j=h;i=d;return j|0}L12:while(1){if((a[e]|0)!=0){k=(a[b]|0)!=0}else{k=0}if(!k){g=19;break}do{if((a[e]|0)!=42){if((a[b]|0)==42){break}if((a[e]|0)!=(a[b]|0)){g=17;break L12}if((a[e]|0)==94){g=17;break L12}}}while(0);e=e+1|0;b=b+1|0}if((g|0)==17){h=0;j=h;i=d;return j|0}else if((g|0)==19){h=1;j=h;i=d;return j|0}return 0}function f1(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,j=0,k=0,l=0;e=i;f=a;a=b;b=d;d=0;if((f|0)==0){g=-1;h=g;i=e;return h|0}j=iV(f)|0;f=j;k=j;if((f|0)==0){g=0;h=g;i=e;return h|0}L9:while(1){if((f|0)==0){l=19;break}if((b|0)==0){d=c[f+16>>2]|0}if((b|0)==1){d=c[f+12>>2]|0}while(1){if((d|0)==0){break}if((f0(c[d+12>>2]|0,a)|0)==1){l=14;break L9}d=c[d+8>>2]|0}f=c[f>>2]|0}if((l|0)==14){fr(k);g=1;h=g;i=e;return h|0}else if((l|0)==19){fr(k);g=0;h=g;i=e;return h|0}return 0}function f2(b,d){b=b|0;d=d|0;var e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0,n=0,o=0;e=i;f=b;b=d;d=c[b>>2]|0;g=0;while(1){if((g|0)>=250){break}c[101872+(g<<2)>>2]=0;g=g+1|0}c[b+4>>2]=0;do{if((c[d+48>>2]|0)!=0){if((f3(b,7680)|0)!=0){break}h=0;j=h;i=e;return j|0}}while(0);g=1;while(1){k=0;while(1){if((aT(a[f]|0)|0)!=0){l=1}else{l=(a[f]|0)==34}if(!l){break}f=f+1|0;if((a[f]|0)==34){k=1}}if((a[f]|0)==0){m=18;break}n=f;while(1){do{if((aT(a[n]|0)|0)!=0){o=1}else{if((a[n]|0)==34){o=1;break}o=(a[n]|0)==0}}while(0);if(!(o^1)){break}n=n+1|0}if((f4(b,f,n,g,k)|0)==0){m=27;break}g=0;f=n;if((a[f]|0)==0){m=29;break}}if((m|0)!=29)if((m|0)!=18)if((m|0)==27){h=0;j=h;i=e;return j|0}do{if((c[d+52>>2]|0)!=0){if((f3(b,10560)|0)!=0){break}h=0;j=h;i=e;return j|0}}while(0);h=(c[b+4>>2]|0)>((c[d+48>>2]|0)+(c[d+52>>2]|0)|0)|0;j=h;i=e;return j|0}function f3(b,d){b=b|0;d=d|0;var e=0,f=0,g=0,h=0,j=0;e=i;f=b;b=d;if((a[b]|0)==0){g=1;h=g;i=e;return h|0}if((jr(b|0)|0)>>>0>60>>>0){fj(4,5528,(j=i,i=i+16|0,c[j>>2]=b,c[j+8>>2]=60,j)|0);i=j;g=0;h=g;i=e;return h|0}if((c[f+4>>2]|0)==250){fj(4,5384,(j=i,i=i+1|0,i=i+7&-8,c[j>>2]=0,j)|0);i=j;g=0;h=g;i=e;return h|0}ju(f+8+((c[f+4>>2]|0)*76|0)|0,b|0)|0;if((bg(a[b|0]|0)|0)!=0){c[f+8+((c[f+4>>2]|0)*76|0)+72>>2]=1}else{c[f+8+((c[f+4>>2]|0)*76|0)+72>>2]=0}b=f+4|0;c[b>>2]=(c[b>>2]|0)+1;g=1;h=g;i=e;return h|0}function f4(b,d,e,f,g){b=b|0;d=d|0;e=e|0;f=f|0;g=g|0;var h=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,A=0,B=0,C=0,D=0,E=0,F=0,G=0,H=0,I=0;h=i;i=i+168|0;j=h|0;k=h+40|0;l=h+104|0;m=b;b=d;d=e;e=f;f=g;g=0;n=0;o=0;p=0;q=0;r=0;s=0;t=0;u=6296;v=6248;w=6120;x=6024;if((c[(c[m>>2]|0)+64>>2]|0)!=0){y=f$(c[c[(c[m>>2]|0)+64>>2]>>2]|0,0)|0;z=y;while(1){if((z|0)==0){break}if((f1(z,u,0)|0)!=0){g=g+1|0}if((f1(z,v,0)|0)!=0){n=n+1|0}if((f1(z,w,0)|0)!=0){o=o+1|0}if((f1(z,x,0)|0)!=0){p=p+1|0}z=c[z+16>>2]|0}r=fz(g<<2)|0;q=fz(n<<2)|0;t=fz(o<<2)|0;s=fz(p<<2)|0;A=0;B=0;C=0;D=0;z=y;while(1){if((z|0)==0){break}if((f1(z,u,0)|0)!=0){c[r+(A<<2)>>2]=c[z>>2];A=A+1|0}if((f1(z,v,0)|0)!=0){c[q+(B<<2)>>2]=c[z>>2];B=B+1|0}if((f1(z,w,0)|0)!=0){c[t+(C<<2)>>2]=c[z>>2];C=C+1|0}if((f1(z,x,0)|0)!=0){c[s+(D<<2)>>2]=c[z>>2];D=D+1|0}y=c[z+16>>2]|0;fq(z,20);z=y}}do{A=0;while(1){if((A|0)>=(n|0)){break}z=c[q+(A<<2)>>2]|0;if((al(b|0,z|0,jr(c[q+(A<<2)>>2]|0)|0)|0)==0){E=30;break}A=A+1|0}if((E|0)==30){E=0;if((f3(m,c[q+(A<<2)>>2]|0)|0)==0){E=31;break}b=b+(jr(c[q+(A<<2)>>2]|0)|0)|0}}while((A|0)!=(n|0));if((E|0)==31){F=0;G=F;i=h;return G|0}z=0;L54:while(1){if((z|0)>=10){break}jt(k|0,b|0,d-b|0)|0;a[k+(d-b)|0]=0;if((d|0)==(b|0)){E=41;break}if((gG(c[m>>2]|0,k|0)|0)!=0){E=44;break}if((gg(k|0)|0)!=0){E=44;break}do{if((e|0)!=0){if((bg(a[k|0]|0)|0)==0){break}a[k|0]=jx(a[k|0]|0)|0;if((gG(c[m>>2]|0,k|0)|0)!=0){E=48;break L54}a[k|0]=av(a[k|0]|0)|0}}while(0);A=0;while(1){if((A|0)>=(g|0)){break}H=jr(c[r+(A<<2)>>2]|0)|0;if((d-b|0)>=(H|0)){if((al(d+(-H|0)|0,c[r+(A<<2)>>2]|0,H|0)|0)==0){E=55;break}}A=A+1|0}if((E|0)==55){E=0;c[j+(z<<2)>>2]=A;d=d+(-H|0)|0}if((A|0)==(g|0)){E=59;break}z=z+1|0}if((E|0)!=41)if((E|0)!=44)if((E|0)==48){a[k|0]=av(a[k|0]|0)|0}D=-1;jt(k|0,b|0,d-b|0)|0;a[k+(d-b)|0]=0;x=0;if((gG(c[m>>2]|0,k|0)|0)!=0){E=64}else{if((gg(k|0)|0)!=0){E=64}}if((E|0)==64){x=1}do{if((e|0)!=0){if((bg(a[k|0]|0)|0)==0){break}a[k|0]=jx(a[k|0]|0)|0;if((gG(c[m>>2]|0,k|0)|0)!=0){x=1}a[k|0]=av(a[k|0]|0)|0}}while(0);if((x|0)==0){B=0;A=0;while(1){if((A|0)>(o|0)){break}x=0;do{if((A|0)<(o|0)){H=jr(c[t+(A<<2)>>2]|0)|0;if((d-b|0)<(H|0)){break}if((al(d+(-H|0)|0,c[t+(A<<2)>>2]|0,H|0)|0)==0){x=1}E=80}else{H=0;E=80}}while(0);if((E|0)==80){E=0;if((x|0)==1){E=82}else{if((A|0)==(o|0)){E=82}}if((E|0)==82){E=0;jt(l|0,b|0,d+(-H|0)-b|0)|0;a[l+(d+(-H|0)-b)|0]=0;if((gG(c[m>>2]|0,l|0)|0)!=0){E=83;break}B=0;while(1){if((B|0)>=(p|0)){break}e=c[s+(B<<2)>>2]|0;if((al(b|0,e|0,jr(c[s+(B<<2)>>2]|0)|0)|0)==0){e=b+(jr(c[s+(B<<2)>>2]|0)|0)|0;jt(l|0,e|0,d+(-H|0)-(b+(jr(c[s+(B<<2)>>2]|0)|0))|0)|0;a[l+(d+(-H|0)-(b+(jr(c[s+(B<<2)>>2]|0)|0)))|0]=0;if((gG(c[m>>2]|0,l|0)|0)!=0){E=92;break}}B=B+1|0}if((E|0)==92){E=0;if((c[24072]|0)>1){if((A|0)<(o|0)){x=c[t+(A<<2)>>2]|0;aw(5712,(I=i,i=i+24|0,c[I>>2]=c[s+(B<<2)>>2],c[I+8>>2]=l,c[I+16>>2]=x,I)|0)|0;i=I}}if((f3(m,c[s+(B<<2)>>2]|0)|0)==0){E=97;break}if((A|0)<(o|0)){D=A}d=d+(-H|0)|0;b=b+(jr(c[s+(B<<2)>>2]|0)|0)|0;jt(k|0,b|0,d-b|0)|0;a[k+(d-b)|0]=0}if((B|0)!=(p|0)){E=106;break}}}A=A+1|0}if((E|0)==83){if((c[24072]|0)>1){if((A|0)<(o|0)){B=c[t+(A<<2)>>2]|0;aw(5896,(I=i,i=i+16|0,c[I>>2]=l,c[I+8>>2]=B,I)|0)|0;i=I}}D=A;d=d+(-H|0)|0;jt(k|0,b|0,d-b|0)|0;a[k+(d-b)|0]=0}else if((E|0)==97){F=0;G=F;i=h;return G|0}}if((f|0)==1){c[101872+(c[m+4>>2]<<2)>>2]=1}if((f3(m,k|0)|0)==0){F=0;G=F;i=h;return G|0}do{if((D|0)!=-1){if((f3(m,c[t+(D<<2)>>2]|0)|0)!=0){break}F=0;G=F;i=h;return G|0}}while(0);A=z-1|0;while(1){if((A|0)<0){break}if((f3(m,c[r+(c[j+(A<<2)>>2]<<2)>>2]|0)|0)==0){E=122;break}A=A-1|0}if((E|0)==122){F=0;G=F;i=h;return G|0}if((c[(c[m>>2]|0)+64>>2]|0)!=0){fq(r,g<<2);fq(q,n<<2);fq(t,o<<2);fq(s,p<<2)}F=1;G=F;i=h;return G|0}function f5(b){b=b|0;var d=0,e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0;d=i;i=i+64|0;e=d|0;f=b;b=c[f>>2]|0;if((c[b+48>>2]|0)!=0){g=1}else{g=0}h=0;L5:while(1){if((h|0)>=(c[f+4>>2]|0)){j=64;break}k=f+8+(h*76|0)|0;if((gG(c[f>>2]|0,k)|0)!=0){c[f+8+(h*76|0)+64>>2]=iW(f,k)|0}else{do{if((bg(a[k|0]|0)|0)!=0){if((f6(k)|0)==0){j=14;break}if((c[b+20>>2]|0)==0){j=14;break}if((f7(f,h,7552)|0)==0){j=12;break L5}}else{j=14}}while(0);if((j|0)==14){j=0;do{if((bg(a[k|0]|0)|0)!=0){if((c[b+16>>2]|0)==0){j=19;break}if((f7(f,h,6064)|0)==0){j=17;break L5}}else{j=19}}while(0);if((j|0)==19){j=0;do{if((f8(k)|0)!=0){if((c[b+28>>2]|0)==0){j=24;break}if((f7(f,h,5088)|0)==0){j=22;break L5}}else{j=24}}while(0);if((j|0)==24){j=0;do{if((f9(k)|0)!=0){if((c[b+24>>2]|0)==0){j=29;break}if((f7(f,h,4448)|0)==0){j=27;break L5}}else{j=29}}while(0);if((j|0)==29){j=0;do{if((ga(k)|0)!=0){if((c[b+32>>2]|0)==0){j=34;break}if((gb(f,h,k,3752)|0)==0){j=32;break L5}}else{j=34}}while(0);if((j|0)==34){j=0;do{if((f6(k)|0)!=0){if((c[b+36>>2]|0)==0){j=39;break}if((gb(f,h,k,3184)|0)==0){j=37;break L5}}else{j=39}}while(0);if((j|0)==39){j=0;do{if((gc(k)|0)!=0){if((c[b+40>>2]|0)==0){j=44;break}if((gb(f,h,k,2552)|0)==0){j=42;break L5}}else{j=44}}while(0);if((j|0)==44){j=0;do{if((gd(k)|0)!=0){if((c[b+44>>2]|0)==0){j=49;break}if((gb(f,h,k,1976)|0)==0){j=47;break L5}}else{j=49}}while(0);if((j|0)==49){j=0;if((c[b+12>>2]|0)==0){j=91;break}if((c[b+8>>2]|0)==0){j=92;break}ge(f,h,k)}}}}}}}}}h=h+1|0}if((j|0)==22){l=0;m=l;i=d;return m|0}else if((j|0)==17){l=0;m=l;i=d;return m|0}else if((j|0)==12){l=0;m=l;i=d;return m|0}else if((j|0)==32){l=0;m=l;i=d;return m|0}else if((j|0)==42){l=0;m=l;i=d;return m|0}else if((j|0)==64){h=0;while(1){if((h|0)>=(c[f+4>>2]|0)){break}do{if((h|0)==(g|0)){j=71}else{if((h|0)>0){if((bi(10552,f+8+((h-1|0)*76|0)|0)|0)==0){j=71;break}}if((c[101872+(h<<2)>>2]|0)==1){j=71;break}}}while(0);if((j|0)==71){j=0;k=f+8+(h*76|0)|0;if((bg(a[k|0]|0)|0)!=0){fn(e|0,k,61);a[e|0]=jx(a[e|0]|0)|0;b=eT(e|0,c[f+19048>>2]|0)|0;if((gG(c[f>>2]|0,b)|0)!=0){if((gG(c[f>>2]|0,k)|0)!=0){n=iW(f,b)|0;c[f+8+(h*76|0)+64>>2]=fK(c[f+8+(h*76|0)+64>>2]|0,n)|0}else{a[k|0]=jx(a[k|0]|0)|0;n=iW(f,k)|0;ft(c[f+8+(h*76|0)+64>>2]|0);c[f+8+(h*76|0)+64>>2]=n}}}}h=h+1|0}l=1;m=l;i=d;return m|0}else if((j|0)==37){l=0;m=l;i=d;return m|0}else if((j|0)==91){o=aw(11520,(p=i,i=i+8|0,c[p>>2]=10960,p)|0)|0;i=p;aO(1);return 0}else if((j|0)==92){o=aw(11520,(p=i,i=i+8|0,c[p>>2]=10960,p)|0)|0;i=p;aO(1);return 0}else if((j|0)==47){l=0;m=l;i=d;return m|0}else if((j|0)==27){l=0;m=l;i=d;return m|0}return 0}function f6(b){b=b|0;var c=0,d=0,e=0,f=0;c=i;d=b;while(1){if((a[d]|0)==0){break}d=d+1|0}d=d-1|0;if((a[d]|0)!=115){e=0;f=e;i=c;return f|0}d=d-1|0;do{if((a[d]|0)!=105){if((a[d]|0)==117){break}if((a[d]|0)==111){break}if((a[d]|0)==121){break}if((a[d]|0)==115){break}e=1;f=e;i=c;return f|0}}while(0);e=0;f=e;i=c;return f|0}function f7(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0;e=i;f=a;a=b;b=d;if((gG(c[f>>2]|0,b)|0)==0){fj(6,6448,(d=i,i=i+8|0,c[d>>2]=b,d)|0);i=d;g=0;h=g;i=e;return h|0}c[f+8+(a*76|0)+64>>2]=iW(f,b)|0;b=c[f+8+(a*76|0)+64>>2]|0;while(1){if((b|0)==0){break}c[b>>2]=f+8+(a*76|0);b=c[b+8>>2]|0}g=1;h=g;i=e;return h|0}function f8(b){b=b|0;var c=0,d=0,e=0,f=0,g=0;c=i;d=b;if((as(a[d]|0)|0)==0){e=0;f=e;i=c;return f|0}L5:while(1){if((a[d]|0)==0){g=12;break}do{if((as(a[d]|0)|0)==0){if((a[d]|0)==46){break}if((a[d]|0)==44){break}if((a[d]|0)!=58){g=10;break L5}}}while(0);d=d+1|0}if((g|0)==10){e=0;f=e;i=c;return f|0}else if((g|0)==12){e=1;f=e;i=c;return f|0}return 0}function f9(b){b=b|0;var c=0,d=0,e=0,f=0,g=0,h=0;c=i;d=b;b=0;if((a[d]|0)==45){e=0;f=e;i=c;return f|0}L5:while(1){if((a[d]|0)==0){break}do{if((aN(a[d]|0)|0)==0){if((as(a[d]|0)|0)!=0){break}if((a[d]|0)==46){break}if((a[d]|0)==44){break}if((a[d]|0)!=45){g=10;break L5}}}while(0);if((a[d]|0)==45){b=b+1|0}d=d+1|0}if((g|0)==10){e=0;f=e;i=c;return f|0}if((a[d-1|0]|0)!=45){h=(b|0)>0}else{h=0}e=h&1;f=e;i=c;return f|0}function ga(b){b=b|0;var c=0,d=0,e=0;c=i;d=b;b=0;while(1){if((a[d]|0)==0){break}b=b+1|0;d=d+1|0}do{if((b|0)<5){e=0}else{if((al(6360,d-3|0,3)|0)==0){e=1;break}else{e=0;break}}}while(0);i=c;return e|0}function gb(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,j=0,k=0,l=0,m=0,n=0;f=i;i=i+64|0;g=f|0;h=a;a=b;b=d;d=e;if((gG(c[h>>2]|0,d)|0)==0){fj(6,6448,(j=i,i=i+8|0,c[j>>2]=d,j)|0);i=j;k=0;l=k;i=f;return l|0}c[h+8+(a*76|0)+64>>2]=iW(h,d)|0;d=c[h+8+(a*76|0)+64>>2]|0;if((f6(b)|0)!=0){while(1){if((d|0)==0){break}m=aC(c[d>>2]|0,46)|0;if((m|0)!=0){aP(g|0,7384,(j=i,i=i+16|0,c[j>>2]=b,c[j+8>>2]=m+1,j)|0)|0;i=j}else{aP(g|0,7152,(j=i,i=i+8|0,c[j>>2]=b,j)|0)|0;i=j}m=fz((jr(g|0)|0)+1|0)|0;ju(m|0,g|0)|0;n=eT(m,c[h+19048>>2]|0)|0;fq(m,(jr(g|0)|0)+1|0);c[d>>2]=n;d=c[d+8>>2]|0}}else{if((gc(b)|0)!=0){aP(g|0,6992,(j=i,i=i+8|0,c[j>>2]=b,j)|0)|0;i=j}else{if((ga(b)|0)!=0){aP(g|0,6800,(j=i,i=i+8|0,c[j>>2]=b,j)|0)|0;i=j}else{if((gd(b)|0)!=0){aP(g|0,6552,(j=i,i=i+8|0,c[j>>2]=b,j)|0)|0;i=j}else{aP(g|0,7152,(j=i,i=i+8|0,c[j>>2]=b,j)|0)|0;i=j}}}m=fz((jr(g|0)|0)+1|0)|0;ju(m|0,g|0)|0;n=eT(m,c[h+19048>>2]|0)|0;fq(m,(jr(g|0)|0)+1|0);c[d>>2]=n}k=1;l=k;i=f;return l|0}function gc(b){b=b|0;var c=0,d=0,e=0;c=i;d=b;b=0;while(1){if((a[d]|0)==0){break}b=b+1|0;d=d+1|0}do{if((b|0)<4){e=0}else{if((al(7544,d-2|0,2)|0)==0){e=1;break}else{e=0;break}}}while(0);i=c;return e|0}function gd(b){b=b|0;var c=0,d=0,e=0;c=i;d=b;b=0;while(1){if((a[d]|0)==0){break}b=b+1|0;d=d+1|0}do{if((b|0)<4){e=0}else{if((al(7792,d-2|0,2)|0)==0){e=1;break}else{e=0;break}}}while(0);i=c;return e|0}function ge(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,j=0;e=i;i=i+64|0;f=e|0;g=a;a=b;b=d;c[g+8+(a*76|0)+64>>2]=iW(g,8872)|0;if((c[g+8+(a*76|0)+64>>2]|0)==0){aw(11520,(h=i,i=i+8|0,c[h>>2]=8480,h)|0)|0;i=h;aO(1)}d=c[g+8+(a*76|0)+64>>2]|0;while(1){if((d|0)==0){break}a=aC(c[d>>2]|0,46)|0;if((a|0)!=0){aP(f|0,8240,(h=i,i=i+16|0,c[h>>2]=b,c[h+8>>2]=a+1,h)|0)|0;i=h}else{aP(f|0,7984,(h=i,i=i+8|0,c[h>>2]=b,h)|0)|0;i=h}a=fz((jr(f|0)|0)+1|0)|0;ju(a|0,f|0)|0;j=eT(a,c[g+19048>>2]|0)|0;fq(a,(jr(f|0)|0)+1|0);c[d>>2]=j;d=c[d+8>>2]|0}i=e;return}function gf(b){b=b|0;var d=0,e=0,f=0,g=0,h=0,j=0,k=0;d=i;i=i+1024|0;e=d|0;f=b;b=c[f>>2]|0;g=1;h=0;while(1){if((h|0)>=(c[f+4>>2]|0)){break}j=f+8+(h*76|0)|0;L4:do{if((gG(b,j)|0)==0){if((bg(a[j|0]|0)|0)!=0){if((c[b+16>>2]|0)!=0){break}}do{if((bg(a[j|0]|0)|0)!=0){if((f6(j)|0)==0){break}if((c[b+20>>2]|0)!=0){break L4}}}while(0);if((f9(j)|0)!=0){if((c[b+24>>2]|0)!=0){break}}if((f8(j)|0)!=0){if((c[b+28>>2]|0)!=0){break}}if((ga(j)|0)!=0){if((c[b+32>>2]|0)!=0){break}}if((f6(j)|0)!=0){if((c[b+36>>2]|0)!=0){break}}if((gc(j)|0)!=0){if((c[b+40>>2]|0)!=0){break}}if((gd(j)|0)!=0){if((c[b+44>>2]|0)!=0){break}}if((g|0)!=0){fn(e|0,10216,1024);g=0}fo(e|0,9840,1024);fo(e|0,f+8+(h*76|0)|0,1024);fo(e|0,9480,1024)}}while(0);h=h+1|0}if((g|0)!=0){k=g;i=d;return k|0}fj(5,9256,(h=i,i=i+8|0,c[h>>2]=e,h)|0);i=h;k=g;i=d;return k|0}function gg(b){b=b|0;var c=0,d=0,e=0,f=0,g=0;c=i;d=b;b=0;while(1){if((a[d+b|0]|0)==0){e=9;break}if((bg(a[d+b|0]|0)|0)==0){e=4;break}if((a[d+(b+1)|0]|0)!=46){e=6;break}b=b+2|0}if((e|0)==4){f=0;g=f;i=c;return g|0}else if((e|0)==6){f=0;g=f;i=c;return g|0}else if((e|0)==9){f=1;g=f;i=c;return g|0}return 0}function gh(a,b){a=a|0;b=b|0;var d=0,e=0;d=i;e=a;aw(6376,(a=i,i=i+8|0,c[a>>2]=b,a)|0)|0;i=a;aw(10376,(a=i,i=i+16|0,c[a>>2]=c[e+164>>2],c[a+8>>2]=e+104,a)|0)|0;i=a;i=d;return}function gi(a){a=a|0;var b=0,d=0;b=i;d=a;a=fz(12)|0;c[a+8>>2]=c[d+96>>2];c[d+96>>2]=a;i=b;return a|0}function gj(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0;d=i;e=a;a=ap(c[e+100>>2]|0)|0;do{if((a|0)==37){if((b|0)!=0){break}while(1){if((a|0)!=-1){f=(a|0)!=10}else{f=0}if(!f){break}a=ap(c[e+100>>2]|0)|0}}}while(0);if((a|0)!=10){g=a;i=d;return g|0}f=e+164|0;c[f>>2]=(c[f>>2]|0)+1;g=a;i=d;return g|0}function gk(b){b=b|0;var d=0,e=0,f=0,g=0,h=0,j=0,k=0;d=i;e=b;c[e+156>>2]=0;if((c[e+160>>2]|0)!=0){c[e+156>>2]=(aC(7472,c[e+160>>2]|0)|0)!=0;if((c[e+160>>2]|0)==-1){a[e+104|0]=0}else{a[e+104|0]=c[e+160>>2];a[e+105|0]=0}c[e+160>>2]=0;f=1;g=f;i=d;return g|0}do{h=gj(e,0)|0;}while((aT(h|0)|0)!=0);b=0;j=0;while(1){if((j|0)>49){k=11;break}if((b|0)!=0){if((h|0)==34){k=14;break}if((aT(h|0)|0)!=0){k=16;break}a[e+104+j|0]=h;j=j+1|0}else{if((aC(7472,h|0)|0)!=0){k=19;break}if((h|0)==-1){k=23;break}if((aT(h|0)|0)!=0){k=27;break}if((h|0)==34){b=1}else{a[e+104+j|0]=h;j=j+1|0}}h=gj(e,b)|0}if((k|0)==14){b=0;a[e+104+j|0]=0;f=1;g=f;i=d;return g|0}else if((k|0)==23){if((j|0)==0){a[e+104|0]=0;f=1;g=f;i=d;return g|0}else{a[e+104+j|0]=0;c[e+160>>2]=h;f=1;g=f;i=d;return g|0}}else if((k|0)==19){if((j|0)==0){a[e+104|0]=h;a[e+105|0]=0;c[e+156>>2]=1;f=1;g=f;i=d;return g|0}else{a[e+104+j|0]=0;c[e+160>>2]=h;f=1;g=f;i=d;return g|0}}else if((k|0)==16){gl(e,5e3);f=0;g=f;i=d;return g|0}else if((k|0)==11){gl(e,6032);f=0;g=f;i=d;return g|0}else if((k|0)==27){a[e+104+j|0]=0;f=1;g=f;i=d;return g|0}return 0}function gl(b,d){b=b|0;d=d|0;var e=0,f=0,g=0,h=0,j=0,k=0;e=i;i=i+1152|0;f=e|0;g=e+1024|0;h=b;b=d;a[f|0]=0;d=0;while(1){if((d|0)<5){j=(a[h+104|0]|0)!=0}else{j=0}if(!j){break}aP(g|0,4680,(k=i,i=i+8|0,c[k>>2]=h+104,k)|0)|0;i=k;jw(f|0,g|0)|0;gk(h)|0;d=d+1|0}d=c[h+164>>2]|0;fj(2,4640,(k=i,i=i+24|0,c[k>>2]=b,c[k+8>>2]=d,c[k+16>>2]=f,k)|0);i=k;i=e;return}function gm(b,d){b=b|0;d=d|0;var e=0,f=0,g=0;e=i;f=b;do{if((c[f+156>>2]|0)!=0){if((d|0)!=(a[f+104|0]|0)){g=0;break}g=(a[f+105|0]|0)==0}else{g=0}}while(0);i=e;return g&1|0}function gn(b,c){b=b|0;c=c|0;var d=0,e=0,f=0,g=0,h=0;d=i;e=b;b=c;c=jr(b|0)|0;if((c|0)<1){gl(e,4392);f=0;g=f;i=d;return g|0}c=a[b+(c-1)|0]|0;do{if((c|0)!=43){if((c|0)==45){break}gl(e,3656);f=0;g=f;i=d;return g|0}}while(0);if((a[b]|0)==64){b=b+1|0}if((bg(a[b]|0)|0)==0){gl(e,3072);f=0;g=f;i=d;return g|0}do{if((a[b]|0)==73){if((a[b+1|0]|0)!=68){break}gl(e,2496);f=0;g=f;i=d;return g|0}}while(0);L22:while(1){if((a[b+1|0]|0)==0){h=20;break}do{if((a4(a[b]|0)|0)==0){if((a[b]|0)==42){break}if((a[b]|0)!=94){h=18;break L22}}}while(0);b=b+1|0}if((h|0)==20){f=1;g=f;i=d;return g|0}else if((h|0)==18){gl(e,1912);f=0;g=f;i=d;return g|0}return 0}function go(b){b=b|0;var d=0,e=0,f=0,g=0,h=0,j=0,k=0,l=0;d=i;e=b;b=(jr(e+104|0)|0)-1|0;do{if((a[e+104+b|0]|0)!=43){if((a[e+104+b|0]|0)==45){f=11;break}g=gp(e,e+104|0)|0;while(1){if((g|0)!=0){h=(bi(c[g>>2]|0,e+104|0)|0)!=0}else{h=0}if(!h){break}g=c[g+16>>2]|0}if((g|0)!=0){j=gq(e,c[g+8>>2]|0)|0;break}gl(e,11376);k=0;l=k;i=d;return l|0}else{f=11}}while(0);if((f|0)==11){if((gn(e,e+104|0)|0)==0){k=0;l=k;i=d;return l|0}j=gi(e)|0;a[j+2|0]=a[e+104+b|0]|0;a[e+104+b|0]=0;if((a[e+104|0]|0)==64){c[j+4>>2]=eT(e+105|0,c[e+84>>2]|0)|0;a[j+3|0]=1}else{c[j+4>>2]=eT(e+104|0,c[e+84>>2]|0)|0;a[j+3|0]=0}a[j|0]=2;a[j+1|0]=0}if((gk(e)|0)!=0){k=j;l=k;i=d;return l|0}else{k=0;l=k;i=d;return l|0}return 0}function gp(a,b){a=a|0;b=b|0;var d=0,e=0;d=i;e=b;gD();gH(c[a>>2]|0,e);gC(e);i=d;return c[27744]|0}function gq(b,d){b=b|0;d=d|0;var e=0,f=0;e=i;f=gi(b)|0;a[f|0]=1;a[f+1|0]=0;c[f+4>>2]=fz(8)|0;c[c[f+4>>2]>>2]=0;c[(c[f+4>>2]|0)+4>>2]=d;i=e;return f|0}function gr(b){b=b|0;var d=0,e=0;d=i;e=gi(b)|0;a[e|0]=1;a[e+1|0]=0;c[e+4>>2]=0;i=d;return e|0}function gs(b,d){b=b|0;d=d|0;var e=0,f=0,g=0,h=0;e=i;f=b;b=gi(f)|0;a[b|0]=0;a[b+1|0]=0;g=fz(8)|0;h=g;c[b+4>>2]=g;c[h+4>>2]=gr(f)|0;f=fz(8)|0;g=f;c[h>>2]=f;c[g>>2]=0;c[g+4>>2]=d;i=e;return b|0}function gt(a){a=a|0;var b=0,c=0;b=i;c=gu(a,1,1)|0;i=b;return c|0}function gu(b,e,f){b=b|0;e=e|0;f=f|0;var g=0,h=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0;g=i;h=b;b=e;e=f;f=0;L1:do{if((gm(h,40)|0)!=0){if((gk(h)|0)==0){j=0;break}f=gt(h)|0;if((f|0)==0){j=0;break}if((gm(h,41)|0)==0){gl(h,10904);j=0;break}if((gk(h)|0)!=0){k=43;break}else{j=0;break}}else{do{if((gm(h,123)|0)!=0){if((gk(h)|0)==0){j=0;break L1}f=gt(h)|0;if((f|0)==0){j=0;break L1}if((gm(h,125)|0)==0){gl(h,10528);j=0;break L1}if((gk(h)|0)!=0){f=gs(h,f)|0;break}else{j=0;break L1}}else{do{if((gm(h,91)|0)!=0){if((gk(h)|0)==0){j=0;break L1}f=gt(h)|0;if((f|0)==0){j=0;break L1}if((gm(h,93)|0)==0){gl(h,10192);j=0;break L1}if((gk(h)|0)!=0){l=f+1|0;a[l]=(d[l]|0)+1;break}else{j=0;break L1}}else{do{if((c[h+156>>2]|0)!=0){do{if((gm(h,41)|0)==0){if((gm(h,93)|0)!=0){break}gl(h,9744);j=0;break L1}}while(0);f=gr(h)|0}else{f=go(h)|0;if((f|0)==0){j=0;break L1}else{break}}}while(0)}}while(0)}}while(0);k=43}}while(0);L60:do{if((k|0)==43){do{if((gm(h,38)|0)!=0){k=45}else{if((bi(h+104|0,9472)|0)==0){k=45;break}do{if((gm(h,124)|0)==0){if((bi(h+104|0,8848)|0)==0){break}j=f;break L60}}while(0);if((e|0)==0){gh(h,9152)}if((gk(h)|0)==0){j=0;break L60}m=gu(h,0,1)|0;if((m|0)==0){j=0;break L60}n=gi(h)|0;l=fz(8)|0;o=l;c[n+4>>2]=l;l=fz(8)|0;p=l;c[o>>2]=l;c[p>>2]=0;c[o+4>>2]=f;c[p+4>>2]=m;a[n|0]=0;a[n+1|0]=0}}while(0);do{if((k|0)==45){if((b|0)==0){gh(h,9152)}if((gk(h)|0)==0){j=0;break L60}m=gu(h,1,0)|0;if((m|0)==0){j=0;break L60}else{n=gi(h)|0;l=fz(8)|0;o=l;c[n+4>>2]=l;l=fz(8)|0;p=l;c[o>>2]=l;c[p>>2]=0;c[o+4>>2]=f;c[p+4>>2]=m;a[n|0]=1;a[n+1|0]=0;break}}}while(0);j=n}}while(0);i=g;return j|0}function gv(b,c){b=b|0;c=c|0;var d=0,e=0,f=0,g=0,h=0,j=0;d=i;e=b;b=c;while(1){if((a[e]|0)!=0){f=(a[e]|0)==(a[b]|0)}else{f=0}if(!f){break}e=e+1|0;b=b+1|0}if((a[e]|0)==46){g=1}else{g=a[e]<<1}if((a[b]|0)==46){h=1;j=g-h|0;i=d;return j|0}else{h=a[b]<<1;j=g-h|0;i=d;return j|0}return 0}function gw(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,j=0,k=0;e=i;i=i+128|0;f=e|0;g=a;a=b;b=d;if((a|0)==0){h=b;j=h;i=e;return j|0}d=gv(c[b>>2]|0,c[a>>2]|0)|0;do{if((d|0)<0){c[a+12>>2]=gw(g,c[a+12>>2]|0,b)|0}else{if((d|0)>0){c[a+16>>2]=gw(g,c[a+16>>2]|0,b)|0;break}else{aP(f|0,8432,(k=i,i=i+8|0,c[k>>2]=c[b>>2],k)|0)|0;i=k;gl(g,f|0);h=0;j=h;i=e;return j|0}}}while(0);h=a;j=h;i=e;return j|0}function gx(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,j=0,k=0,l=0;e=i;f=a;a=b;b=d;if((b|0)==0){i=e;return}d=(b-1|0)/2|0;g=a;h=0;while(1){if((h|0)>=(d|0)){break}g=c[g+12>>2]|0;h=h+1|0}h=c[g+12>>2]|0;c[g+16>>2]=0;c[g+12>>2]=0;if((hL(c[g>>2]|0)|0)!=0){hU(f,g)}else{if((hV(c[g>>2]|0)|0)!=0){j=c[f+164>>2]|0;aw(8200,(k=i,i=i+16|0,c[k>>2]=c[g>>2],c[k+8>>2]=j,k)|0)|0;i=k;aw(7920,(k=i,i=i+1|0,i=i+7&-8,c[k>>2]=0,k)|0)|0;i=k;aw(7728,(k=i,i=i+1|0,i=i+7&-8,c[k>>2]=0,k)|0)|0;i=k;fq(g,20)}else{j=gp(f,c[g>>2]|0)|0;l=j;if((j|0)!=0){aw(7520,(k=i,i=i+8|0,c[k>>2]=c[g>>2],k)|0)|0;i=k;aw(7328,(k=i,i=i+8|0,c[k>>2]=c[f+164>>2],k)|0)|0;i=k;while(1){if((l|0)==0){break}aw(7144,(k=i,i=i+8|0,c[k>>2]=c[l>>2],k)|0)|0;i=k;l=c[l+16>>2]|0}aw(6952,(k=i,i=i+1|0,i=i+7&-8,c[k>>2]=0,k)|0)|0;i=k;fq(g,20)}else{c[f>>2]=gw(f,c[f>>2]|0,g)|0;g=f+88|0;c[g>>2]=(c[g>>2]|0)+1}}}gx(f,a,d);gx(f,h,b-d-1|0);i=e;return}function gy(b){b=b|0;var d=0,e=0,f=0,g=0,h=0,j=0,k=0,l=0;d=i;e=b;b=0;while(1){if(!((gm(e,58)|0)!=0^1)){f=12;break}if((c[e+156>>2]|0)!=0){f=4;break}if((a[e+104|0]|0)==47){b=fm(e,b,e+104|0)|0;if((b|0)==0){f=7;break}}else{g=fz(20)|0;c[g+12>>2]=b;b=g;c[b+4>>2]=0;c[b>>2]=eT(e+104|0,c[e+84>>2]|0)|0}gk(e)|0}if((f|0)==12){if((gk(e)|0)==0){h=0;j=h;i=d;return j|0}g=gt(e)|0;if((g|0)==0){h=0;j=h;i=d;return j|0}if((gm(e,59)|0)==0){gl(e,6408);h=0;j=h;i=d;return j|0}if((gk(e)|0)==0){h=0;j=h;i=d;return j|0}k=0;l=b;while(1){if((l|0)==0){break}c[l+8>>2]=g;k=k+1|0;l=c[l+12>>2]|0}gx(e,b,k);h=1;j=h;i=d;return j|0}else if((f|0)==7){fj(3,6544,(k=i,i=i+8|0,c[k>>2]=e+104,k)|0);i=k;h=0;j=h;i=d;return j|0}else if((f|0)==4){gl(e,6760);h=0;j=h;i=d;return j|0}return 0}function gz(b){b=b|0;var d=0,e=0,f=0,g=0,h=0;d=i;e=b;c[27486]=0;if((gk(e)|0)==0){aq(c[e+100>>2]|0)|0;f=0;g=f;i=d;return g|0}while(1){if((a[e+104|0]|0)==0){h=8;break}if((gy(e)|0)==0){h=6;break}}if((h|0)==6){aq(c[e+100>>2]|0)|0;f=0;g=f;i=d;return g|0}else if((h|0)==8){aq(c[e+100>>2]|0)|0;f=1;g=f;i=d;return g|0}return 0}function gA(b,c){b=b|0;c=c|0;var d=0,e=0,f=0,g=0,h=0,j=0,k=0;d=i;e=b;b=c;while(1){if((a[e]|0)!=0){f=(a[e]|0)==(a[b]|0)}else{f=0}if(!f){break}e=e+1|0;b=b+1|0}do{if((a[e]|0)!=42){if((a[b]|0)==42){break}if((a[e]|0)==46){g=0}else{g=a[e]|0}if((a[b]|0)==46){h=0}else{h=a[b]|0}j=g-h|0;k=j;i=d;return k|0}}while(0);j=0;k=j;i=d;return k|0}function gB(b,c){b=b|0;c=c|0;var d=0,e=0,f=0,g=0,h=0;d=i;e=b;b=c;c=aQ(e|0,46)|0;f=aQ(b|0,46)|0;do{if((f|0)!=0){if((a[f+1|0]|0)!=0){if((as(a[f+1|0]|0)|0)==0){break}}f=0}}while(0);do{if((c|0)!=0){if((a[c+1|0]|0)!=0){if((as(a[c+1|0]|0)|0)==0){break}}c=0}}while(0);do{if((f|0)==0){if((c|0)==0){break}if((jr(b|0)|0)>(c-e|0)){g=0;h=g;i=d;return h|0}else{g=(al(e|0,b|0,c-e|0)|0)==0|0;h=g;i=d;return h|0}}}while(0);do{if((f|0)!=0){if((c|0)!=0){break}if((jr(e|0)|0)>(f-b|0)){g=0;h=g;i=d;return h|0}else{g=(al(e|0,b|0,f-b|0)|0)==0|0;h=g;i=d;return h|0}}}while(0);g=(bi(e|0,b|0)|0)==0|0;h=g;i=d;return h|0}function gC(a){a=a|0;var b=0,d=0,e=0,f=0;b=i;d=a;a=0;e=c[27744]|0;while(1){if((e|0)==0){break}f=c[e+16>>2]|0;if((gB(c[e>>2]|0,d)|0)!=0){c[e+16>>2]=a;a=e}else{fq(e,20)}e=f}c[27744]=0;e=a;while(1){if((e|0)==0){break}f=c[e+16>>2]|0;c[e+16>>2]=c[27744];c[27744]=e;e=f}i=b;return}function gD(){var a=0,b=0;a=i;while(1){if((c[27744]|0)==0){break}b=c[(c[27744]|0)+16>>2]|0;fq(c[27744]|0,20);c[27744]=b}i=a;return}function gE(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0;d=i;e=a;a=b;if((e|0)==0){i=d;return}b=gA(a,c[e>>2]|0)|0;if((b|0)>=0){gE(c[e+16>>2]|0,a)}if((b|0)==0){f=fz(20)|0;g=f;h=e;c[g>>2]=c[h>>2];c[g+4>>2]=c[h+4>>2];c[g+8>>2]=c[h+8>>2];c[g+12>>2]=c[h+12>>2];c[g+16>>2]=c[h+16>>2];c[f+16>>2]=c[27744];c[27744]=f}if((b|0)>0){i=d;return}gE(c[e+12>>2]|0,a);i=d;return}function gF(a,b){a=a|0;b=b|0;var d=0,e=0;d=i;e=b;gD();gE(c[a>>2]|0,e);gC(e);i=d;return c[27744]|0}function gG(a,b){a=a|0;b=b|0;var c=0,d=0;c=i;d=(gF(a,b)|0)!=0|0;i=c;return d|0}function gH(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0;d=i;e=a;a=b;if((e|0)==0){i=d;return}b=gA(a,c[e>>2]|0)|0;if((b|0)>=0){gH(c[e+16>>2]|0,a)}do{if((b|0)==0){if((hV(c[e>>2]|0)|0)!=0){break}f=fz(20)|0;g=f;h=e;c[g>>2]=c[h>>2];c[g+4>>2]=c[h+4>>2];c[g+8>>2]=c[h+8>>2];c[g+12>>2]=c[h+12>>2];c[g+16>>2]=c[h+16>>2];c[f+16>>2]=c[27744];c[27744]=f}}while(0);if((b|0)>0){i=d;return}gH(c[e+12>>2]|0,a);i=d;return}function gI(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0;d=i;e=b;b=fR(a,c[e+4>>2]|0,5136)|0;c[e+100>>2]=b;if((b|0)==0){f=0;g=f;i=d;return g|0}else{f=1;g=f;i=d;return g|0}return 0}function gJ(a){a=a|0;var b=0,d=0;b=i;d=a;while(1){if((d|0)==0){break}a=c[d+208>>2]|0;fq(d,212);d=a}i=b;return}function gK(a){a=a|0;var b=0,d=0;b=i;d=a;if((d|0)==0){i=b;return}else{gK(c[d+12>>2]|0);gK(c[d+16>>2]|0);fq(d,20);i=b;return}}function gL(a){a=a|0;var b=0,d=0;b=i;d=a;gK(c[d>>2]|0);gJ(c[d+92>>2]|0);gM(c[d+96>>2]|0);i=b;return}function gM(b){b=b|0;var d=0,e=0;d=i;e=b;while(1){if((e|0)==0){break}b=c[e+8>>2]|0;if((a[e|0]|0)!=2){gN(c[e+4>>2]|0)}fq(e,12);e=b}i=d;return}function gN(a){a=a|0;var b=0,d=0;b=i;d=a;while(1){if((d|0)==0){break}a=c[d>>2]|0;fq(d,8);d=a}i=b;return}function gO(b,d){b=b|0;d=d|0;var e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0,n=0;e=i;i=i+1e3|0;f=e|0;g=b;b=d;d=c[g+19040>>2]|0;h=c[b+1052>>2]|0;j=0;while(1){if((j|0)>=(c[g+4>>2]|0)){break}c[f+(j<<2)>>2]=g+8+(j*76|0);if((c[d+16+(j<<2)>>2]|0)==0){k=c[f+(j<<2)>>2]|0;l=(jr(k|0)|0)+2|0;m=fz(l+1|0)|0;aP(m|0,6704,(n=i,i=i+8|0,c[n>>2]=k,n)|0)|0;i=n;k=eT(m,c[g+19048>>2]|0)|0;fq(m,l+1|0);c[f+(j<<2)>>2]=k}else{if((c[h+60>>2]|0)!=0){k=c[(c[d+16+(j<<2)>>2]|0)+8>>2]|0;if((hV(k)|0)!=0){l=jr(k|0)|0;m=fz(l+1|0)|0;ju(m|0,k|0)|0;n=m;while(1){if((a[n]|0)==46){break}n=n+1|0}a[n]=0;k=eT(m,c[g+19048>>2]|0)|0;fq(m,l+1|0);c[f+(j<<2)>>2]=k}else{c[f+(j<<2)>>2]=k}}}j=j+1|0}if((c[(c[g>>2]|0)+48>>2]|0)!=0){c[f>>2]=10136}if((c[(c[g>>2]|0)+52>>2]|0)!=0){c[f+((c[g+4>>2]|0)-1<<2)>>2]=6008}j=0;while(1){if((j|0)>=(c[b>>2]|0)){break}g=fD((jr(c[f+(j<<2)>>2]|0)|0)+1|0)|0;c[(c[b+4>>2]|0)+(j<<2)>>2]=g;ju(c[(c[b+4>>2]|0)+(j<<2)>>2]|0,c[f+(j<<2)>>2]|0)|0;j=j+1|0}i=e;return}function gP(a){a=a|0;var b=0,d=0,e=0,f=0,g=0;b=i;d=a;a=0;while(1){if((a|0)>=(c[d+4>>2]|0)){break}e=0;f=c[d+8+(a*76|0)+68>>2]|0;while(1){if((f|0)==0){break}e=e+1|0;f=c[f>>2]|0}aw(6288,(g=i,i=i+16|0,c[g>>2]=d+8+(a*76|0),c[g+8>>2]=e,g)|0)|0;i=g;a=a+1|0}aw(6168,(g=i,i=i+1|0,i=i+7&-8,c[g>>2]=0,g)|0)|0;i=g;i=b;return}function gQ(a){a=a|0;var b=0,d=0,e=0,f=0,g=0;b=i;d=a;a=0;while(1){if((a|0)>=(c[d+4>>2]|0)){break}e=0;f=c[d+8+(a*76|0)+64>>2]|0;while(1){if((f|0)==0){break}e=e+(fw(c[f+4>>2]|0)|0)|0;f=c[f+8>>2]|0}aw(6056,(g=i,i=i+16|0,c[g>>2]=d+8+(a*76|0),c[g+8>>2]=e,g)|0)|0;i=g;a=a+1|0}aw(6168,(g=i,i=i+1|0,i=i+7&-8,c[g>>2]=0,g)|0)|0;i=g;i=b;return}function gR(){return}function gS(a){a=a|0;var b=0,d=0;b=i;d=a;if((c[d+19012>>2]|0)==0){i=b;return}a=-1;while(1){if((a|0)>=(c[d+4>>2]|0)){break}fq(c[(c[d+19012>>2]|0)+(a<<2)>>2]|0,(c[d+4>>2]|0)+1|0);a=a+1|0}a=d+19012|0;c[a>>2]=(c[a>>2]|0)-4;fq(c[d+19012>>2]|0,(c[d+4>>2]|0)+1<<2);c[d+19012>>2]=0;i=b;return}function gT(b,d){b=b|0;d=d|0;var e=0,f=0,g=0,h=0,j=0;e=i;f=b;b=d;gS(f);if((c[f+4>>2]|0)>=250){aw(5352,(d=i,i=i+8|0,c[d>>2]=9944,d)|0)|0;i=d;aO(1)}c[f+19012>>2]=fz((c[f+4>>2]|0)+1<<2)|0;d=f+19012|0;c[d>>2]=(c[d>>2]|0)+4;d=-1;while(1){if((d|0)>=(c[f+4>>2]|0)){break}g=fz((c[f+4>>2]|0)+1|0)|0;c[(c[f+19012>>2]|0)+(d<<2)>>2]=g;g=0;while(1){if((g|0)>(c[f+4>>2]|0)){break}if((g|0)==(d+1|0)){a[(c[(c[f+19012>>2]|0)+(d<<2)>>2]|0)+g|0]=1}else{if((c[27466]|0)!=0){a[(c[(c[f+19012>>2]|0)+(d<<2)>>2]|0)+g|0]=1}else{if((b|0)!=0){L17:do{if((g|0)>(d+2|0)){do{if((a[(c[f+19008>>2]|0)+(d+1)|0]|0)==0){if((a[(c[f+19008>>2]|0)+(g-1)|0]|0)!=0){break}if((bi(7264,f+8+((d+1|0)*76|0)|0)|0)==0){if((fQ(f,d+2|0,g-1|0)|0)!=0){break}}if((bi(7264,f+8+((g-1|0)*76|0)|0)|0)!=0){h=21;break L17}if((fQ(f,g,(c[f+4>>2]|0)-1|0)|0)==0){h=21;break L17}}}while(0);a[(c[(c[f+19012>>2]|0)+(d<<2)>>2]|0)+g|0]=1}else{h=21}}while(0);if((h|0)==21){h=0;if((g|0)>(d|0)){j=d+1|0;L32:while(1){if((j|0)>=(g|0)){break}do{if((bi(5928,f+8+(j*76|0)|0)|0)==0){h=28}else{if((bi(4928,f+8+(j*76|0)|0)|0)==0){h=28;break}if((bi(4376,f+8+(j*76|0)|0)|0)==0){h=28;break}if((bi(3616,f+8+(j*76|0)|0)|0)==0){h=28;break}if((bi(3056,f+8+(j*76|0)|0)|0)!=0){h=33;break L32}if((j|0)<=(d+1|0)){h=33;break L32}if((bi(3616,f+8+((j-1|0)*76|0)|0)|0)!=0){h=33;break L32}}}while(0);if((h|0)==28){h=0}j=j+1|0}if((h|0)==33){h=0}a[(c[(c[f+19012>>2]|0)+(d<<2)>>2]|0)+g|0]=(j|0)==(g|0)}else{a[(c[(c[f+19012>>2]|0)+(d<<2)>>2]|0)+g|0]=0}}}else{a[(c[(c[f+19012>>2]|0)+(d<<2)>>2]|0)+g|0]=0}}}g=g+1|0}d=d+1|0}i=e;return}function gU(a){a=a|0;var b=0,d=0;b=i;d=a;if((c[d+19016>>2]|0)==0){i=b;return}a=0;while(1){if((a|0)>=(c[d+4>>2]|0)){break}fq(c[(c[d+19016>>2]|0)+(a<<2)>>2]|0,(c[d+4>>2]|0)+1|0);a=a+1|0}fq(c[d+19016>>2]|0,c[d+4>>2]<<2);c[d+19016>>2]=0;i=b;return}function gV(b,d){b=b|0;d=d|0;var e=0,f=0,g=0,h=0,j=0;d=i;e=b;gU(e);c[e+19016>>2]=fz(c[e+4>>2]<<2)|0;b=0;while(1){if((b|0)>=(c[e+4>>2]|0)){break}f=fz((c[e+4>>2]|0)+1|0)|0;c[(c[e+19016>>2]|0)+(b<<2)>>2]=f;b=b+1|0}b=0;while(1){if((b|0)>=(c[e+4>>2]|0)){break}g=0;while(1){if((g|0)>(b|0)){break}a[(c[(c[e+19016>>2]|0)+(b<<2)>>2]|0)+g|0]=g-b;g=g+1|0}b=b+1|0}if((c[27466]|0)!=0){b=0;while(1){if((b|0)>=(c[e+4>>2]|0)){break}g=0;while(1){if((g|0)>(c[e+4>>2]|0)){break}a[(c[(c[e+19016>>2]|0)+(b<<2)>>2]|0)+g|0]=g-b;g=g+1|0}b=b+1|0}i=d;return}f=1;while(1){if((f|0)>=(c[e+4>>2]|0)){break}b=0;while(1){if((b+f|0)>(c[e+4>>2]|0)){break}g=b+f|0;if((a[(c[(c[e+19012>>2]|0)+(b<<2)>>2]|0)+g|0]|0)!=0){a[(c[(c[e+19016>>2]|0)+(b<<2)>>2]|0)+g|0]=1}else{if((a[(c[(c[e+19016>>2]|0)+(b<<2)>>2]|0)+(g-1)|0]|0)<(a[(c[(c[e+19016>>2]|0)+(b+1<<2)>>2]|0)+g|0]|0)){h=a[(c[(c[e+19016>>2]|0)+(b<<2)>>2]|0)+(g-1)|0]|0}else{h=a[(c[(c[e+19016>>2]|0)+(b+1<<2)>>2]|0)+g|0]|0}a[(c[(c[e+19016>>2]|0)+(b<<2)>>2]|0)+g|0]=h+1}b=b+1|0}f=f+1|0}b=0;while(1){if((b|0)>=(c[e+4>>2]|0)){break}g=b+1|0;while(1){if((g|0)>=(c[e+4>>2]|0)){break}if((a[(c[e+19008>>2]|0)+b|0]|0)!=0){j=43}else{if((a[(c[e+19008>>2]|0)+g|0]|0)!=0){j=43}}if((j|0)==43){j=0;a[(c[(c[e+19016>>2]|0)+(b<<2)>>2]|0)+g|0]=1}g=g+1|0}b=b+1|0}i=d;return}function gW(b){b=b|0;var d=0,e=0,f=0;d=i;e=b;b=0;while(1){if((b|0)>=(c[e+4>>2]|0)){break}if((a[(c[e+19008>>2]|0)+b|0]|0)!=0){f=c[e+8+(b*76|0)+68>>2]|0;c[e+8+(b*76|0)+68>>2]=fJ(f,cU(e,e+8+(b*76|0)|0)|0)|0}else{f=c[e+8+(b*76|0)+68>>2]|0;c[e+8+(b*76|0)+68>>2]=fJ(f,cS(e,c[e+8+(b*76|0)+68>>2]|0)|0)|0;if((bi(e+8+(b*76|0)|0,7264)|0)==0){f=c[e+8+(b*76|0)+68>>2]|0;c[e+8+(b*76|0)+68>>2]=fJ(f,cT(e)|0)|0}}b=b+1|0}i=d;return}function gX(a){a=a|0;var b=0,d=0;b=i;d=a;a=0;while(1){if((a|0)>=(c[d+4>>2]|0)){break}ft(c[d+8+(a*76|0)+64>>2]|0);a=a+1|0}i=b;return}function gY(a){a=a|0;var b=0,d=0;b=i;d=a;a=0;while(1){if((a|0)>=(c[d+4>>2]|0)){break}fr(c[d+8+(a*76|0)+68>>2]|0);c[d+8+(a*76|0)+68>>2]=0;a=a+1|0}if((fP(d)|0)==0){i=b;return}cz(d);i=b;return}function gZ(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0;d=i;e=a;a=b;iX(e,c[a+8>>2]|0);if((c[24072]|0)>2){aw(2368,(f=i,i=i+1|0,i=i+7&-8,c[f>>2]=0,f)|0)|0;i=f;gP(e)}d4(a,1888);b=0;while(1){if((b|0)>=(c[e+4>>2]|0)){break}c[e+8+(b*76|0)+68>>2]=bY(c[e+8+(b*76|0)+68>>2]|0)|0;b=b+1|0}d4(a,11344);if((c[24072]|0)>2){aw(10840,(f=i,i=i+1|0,i=i+7&-8,c[f>>2]=0,f)|0)|0;i=f;gP(e)}c[27466]=(c[a+12>>2]|0)>0;g=fP(e)|0;g_(e,a);gT(e,g);gV(e,g);if((g|0)==0){ct(e,0,a);h=a;d4(h,8128);i=d;return}ct(e,1,a);iK(e,a);if((c[24072]|0)>2){aw(10488,(f=i,i=i+1|0,i=i+7&-8,c[f>>2]=0,f)|0)|0;i=f;gP(e);gR()}d4(a,10152);cO(e);gW(e);hB(e);if((c[24072]|0)>2){aw(9696,(f=i,i=i+1|0,i=i+7&-8,c[f>>2]=0,f)|0)|0;i=f;gP(e)}g_(e,a);d4(a,9440);bT(e);d4(a,9072);b=0;while(1){if((b|0)>=(c[e+4>>2]|0)){break}c[e+8+(b*76|0)+68>>2]=bY(c[e+8+(b*76|0)+68>>2]|0)|0;b=b+1|0}if((c[24072]|0)>2){aw(8800,(f=i,i=i+1|0,i=i+7&-8,c[f>>2]=0,f)|0)|0;i=f;gP(e)}d4(a,8392);if((c[24072]|0)>2){cP(e)}cj(e,0,a)|0;h=a;d4(h,8128);i=d;return}function g_(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0;d=i;e=a;a=b;b=c[a+36>>2]|0;if((b|0)>255){b=255}f=0;while(1){if((f|0)>=(c[e+4>>2]|0)){break}g=c[e+8+(f*76|0)+68>>2]|0;while(1){if((g|0)==0){break}g$(c[g+12>>2]|0,c[(c[e>>2]|0)+76>>2]|0,b,a);g$(c[g+16>>2]|0,c[(c[e>>2]|0)+76>>2]|0,b,a);g=c[g>>2]|0}f=f+1|0}i=d;return}function g$(b,d,e,f){b=b|0;d=d|0;e=e|0;f=f|0;var g=0,h=0,j=0;g=i;h=b;b=d;d=e;e=f;while(1){if((h|0)==0){break}if((g7(e)|0)!=0){a[h+3|0]=d}else{do{if((b|0)==0){j=7}else{if((f_(b,h,43)|0)!=0){j=7;break}a[h+3|0]=d}}while(0);if((j|0)==7){j=0;a[h+3|0]=-1}}h=c[h+8>>2]|0}i=g;return}function g0(a,c){a=a|0;c=c|0;var d=0,e=0,f=0,g=0;d=i;e=a;a=c;if((b[e+8>>1]|0)!=(b[a+8>>1]|0)){f=(b[e+8>>1]|0)-(b[a+8>>1]|0)|0;g=f;i=d;return g|0}if((b[e+12>>1]|0)!=(b[a+12>>1]|0)){f=(b[e+12>>1]|0)-(b[a+12>>1]|0)|0;g=f;i=d;return g|0}if((b[e+14>>1]|0)!=(b[a+14>>1]|0)){f=(b[e+14>>1]|0)-(b[a+14>>1]|0)|0;g=f;i=d;return g|0}if((b[e+16>>1]|0)!=(b[a+16>>1]|0)){f=(b[e+16>>1]|0)-(b[a+16>>1]|0)|0;g=f;i=d;return g|0}else{f=(b[e+18>>1]|0)-(b[a+18>>1]|0)|0;g=f;i=d;return g|0}return 0}function g1(){var a=0,b=0;a=i;b=fz(116)|0;c[b>>2]=1;c[b+4>>2]=100;c[b+8>>2]=1e4;c[b+12>>2]=0;c[b+16>>2]=0;c[b+20>>2]=1;c[b+24>>2]=0;c[b+48>>2]=2;c[b+44>>2]=0;c[b+36>>2]=6;c[b+40>>2]=0;c[b+28>>2]=30;c[b+32>>2]=70;c[b+52>>2]=d6()|0;c[b+56>>2]=1;c[b+60>>2]=1;c[b+64>>2]=1;c[b+68>>2]=0;c[b+72>>2]=0;c[b+76>>2]=1;c[b+80>>2]=0;c[b+84>>2]=0;c[b+88>>2]=0;c[b+92>>2]=79;c[b+96>>2]=1;c[b+100>>2]=0;c[b+104>>2]=0;c[b+108>>2]=0;c[b+112>>2]=0;i=a;return b|0}function g2(a){a=a|0;var b=0,d=0;b=i;d=a;d8(c[d+52>>2]|0);fq(d,116);i=b;return 0}function g3(a,b){a=a|0;b=b|0;c[a+4>>2]=b;i=i;return}function g4(a,b){a=a|0;b=b|0;c[a+8>>2]=b;i=i;return}function g5(a,b){a=a|0;b=b|0;c[a+12>>2]=b;i=i;return}function g6(a,b){a=a|0;b=b|0;c[a+16>>2]=b;i=i;return}function g7(a){a=a|0;i=i;return c[a+40>>2]|0}function g8(a,b){a=a|0;b=b|0;c[a+76>>2]=b;i=i;return}function g9(a){a=a|0;i=i;return c[a+76>>2]|0}function ha(a){a=a|0;var b=0,d=0;b=i;d=ec(c[a+52>>2]|0)|0;i=b;return d|0}function hb(a){a=a|0;var b=0,d=0;b=i;d=ed(c[a+52>>2]|0)|0;i=b;return d|0}function hc(a){a=a|0;var b=0,d=0,e=0,f=0;b=i;d=a;if((ec(c[d+52>>2]|0)|0)!=0){e=1;f=e&1;i=b;return f|0}e=(ed(c[d+52>>2]|0)|0)!=0;f=e&1;i=b;return f|0}function hd(a){a=a|0;var b=0;b=i;d9(c[a+52>>2]|0);i=b;return}function he(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;var e=0,f=0;e=i;f=hf(a,b,c,d,0)|0;i=e;return f|0}function hf(a,b,d,e,f){a=a|0;b=b|0;d=d|0;e=e|0;f=f|0;var g=0,h=0,j=0,k=0,l=0,m=0;g=i;h=a;a=e;e=f;f=fz(168)|0;if((c[28758]|0)==0){fx();c[28758]=1}c[f+84>>2]=eQ()|0;c[f+4>>2]=eT(h,c[f+84>>2]|0)|0;c[f+88>>2]=0;c[f+156>>2]=0;c[f+160>>2]=0;c[f+164>>2]=1;c[f>>2]=0;c[f+92>>2]=0;c[f+96>>2]=0;c[f+64>>2]=0;if((e|0)!=0){j=e}else{j=h}if((gI(j,f)|0)==0){fj(1,h,(k=i,i=i+1|0,i=i+7&-8,c[k>>2]=0,k)|0);i=k;eU(c[f+84>>2]|0);fq(f,168);l=0;m=l;i=g;return m|0}if((gz(f)|0)==0){eU(c[f+84>>2]|0);fq(f,168);l=0;m=l;i=g;return m|0}c[f+48>>2]=gG(f,8112)|0;c[f+52>>2]=gG(f,7904)|0;c[f+56>>2]=c6(c[f+4>>2]|0,b)|0;c[f+60>>2]=c6(c[f+4>>2]|0,d)|0;c[f+64>>2]=0;do{if((a|0)!=0){c[f+64>>2]=hf(a,0,0,0,h)|0;if((c[f+64>>2]|0)==0){au(c[n>>2]|0,10480,(k=i,i=i+8|0,c[k>>2]=109952,k)|0)|0;i=k;aO(-1|0);return 0}else{break}}}while(0);c[f+12>>2]=gG(f,7712)|0;c[f+8>>2]=1;c[f+16>>2]=gG(f,7496)|0;c[f+20>>2]=gG(f,7304)|0;c[f+24>>2]=gG(f,7120)|0;c[f+28>>2]=gG(f,6944)|0;c[f+32>>2]=gG(f,6672)|0;c[f+36>>2]=gG(f,6528)|0;c[f+40>>2]=gG(f,6392)|0;c[f+44>>2]=gG(f,6344)|0;c[f+80>>2]=1e3;k=gF(f,6264)|0;h=k;if((k|0)!=0){c[f+72>>2]=fY(c[h+8>>2]|0)|0}else{c[f+72>>2]=0}k=gF(f,6144)|0;h=k;if((k|0)!=0){c[f+76>>2]=fY(c[h+8>>2]|0)|0}else{c[f+76>>2]=0}gD();l=f;m=l;i=g;return m|0}function hg(a){a=a|0;var b=0,d=0;b=i;d=a;if((c[24072]|0)>0){au(c[n>>2]|0,5872,(a=i,i=i+8|0,c[a>>2]=c[d+4>>2],a)|0)|0;i=a}if((c[d+64>>2]|0)!=0){hg(c[d+64>>2]|0)|0}fZ(c[d+72>>2]|0);fZ(c[d+76>>2]|0);c7(c[d+56>>2]|0);c7(c[d+60>>2]|0);eU(c[d+84>>2]|0);gL(d);fq(d,168);i=b;return 0}function hh(b,d){b=b|0;d=d|0;var e=0,f=0,g=0,h=0,j=0;e=i;f=d;gD();d=fz(23164)|0;c[d>>2]=f;c[d+4>>2]=0;c[d+19020>>2]=0;c[d+19024>>2]=0;c[d+19028>>2]=0;c[d+19032>>2]=0;c[d+19044>>2]=0;c[d+19012>>2]=0;c[d+19016>>2]=0;c[d+19032>>2]=0;c[d+19036>>2]=0;c[d+19040>>2]=0;c[d+19048>>2]=eQ()|0;if((f2(b,d)|0)==0){eU(c[d+19048>>2]|0);fq(d,23164);g=0;h=g;i=e;return h|0}a[d+23160|0]=0;c[d+19008>>2]=fz(c[d+4>>2]|0)|0;fO(d);cA(d);b=0;while(1){if((b|0)>=(c[d+4>>2]|0)){break}c[d+8+(b*76|0)+64>>2]=0;c[d+8+(b*76|0)+68>>2]=0;b=b+1|0}if((c[f+12>>2]|0)!=0){if((c[f+8>>2]|0)==0){j=9}}else{j=9}do{if((j|0)==9){if((gf(d)|0)!=0){break}hi(d);g=0;h=g;i=e;return h|0}}while(0);if((f5(d)|0)!=0){g=d;h=g;i=e;return h|0}else{hi(d);g=0;h=g;i=e;return h|0}return 0}function hi(a){a=a|0;var b=0,d=0;b=i;d=a;gY(d);gX(d);eU(c[d+19048>>2]|0);il(d);hj(d);c9(c[(c[d>>2]|0)+56>>2]|0);gD();gS(d);gU(d);fq(c[d+19008>>2]|0,c[d+4>>2]|0);fq(d,23164);i=b;return}function hj(a){a=a|0;var b=0,d=0;b=i;d=a;if((c[d+19044>>2]|0)==0){i=b;return}hk(d);fq(c[d+19044>>2]|0,c[d+19024>>2]<<10);c[d+19044>>2]=0;i=b;return}function hk(a){a=a|0;var b=0,d=0,e=0,f=0;b=i;d=a;a=0;while(1){if((a|0)>=(c[d+19028>>2]|0)){break}e=c[(c[d+19044>>2]|0)+(a<<10)+20>>2]|0;while(1){if((e|0)==0){break}f=c[e>>2]|0;fq(e,2020);e=f}a=a+1|0}i=b;return}function hl(a){a=a|0;i=i;return c[a+4>>2]|0}function hm(d,e){d=d|0;e=e|0;var f=0,g=0,h=0,j=0,k=0,l=0,m=0,n=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0.0,w=0,x=0,y=0,z=0,A=0;f=i;i=i+4096|0;g=f|0;h=f+1024|0;j=f+2048|0;k=f+3072|0;l=d;d=e;hj(l);e=ik(l,c[l+19036>>2]|0,d)|0;d4(d,4880);if((e|0)!=0){c[l+19020>>2]=c[d+4>>2];if((c[d>>2]|0)>1){au(c[o>>2]|0,4216,(m=i,i=i+8|0,c[m>>2]=c[d+4>>2],m)|0)|0;i=m}}n=c[l+19020>>2]|0;if((c[l+19020>>2]|0)==0){c[l+19024>>2]=0;c[l+19028>>2]=0;c[l+19032>>2]=0;c[l+19044>>2]=0;i=f;return}if((n|0)>(c[d+4>>2]|0)){p=c[d+4>>2]|0;if((c[d>>2]|0)>1){au(c[o>>2]|0,3552,(m=i,i=i+16|0,c[m>>2]=p,c[m+8>>2]=n,m)|0)|0;i=m}}else{p=n}q=fz(p<<10)|0;r=0;s=0;t=fz(p<<2)|0;if((e|0)!=0){u=0;while(1){if((u|0)>=(p|0)){break}c[t+(u<<2)>>2]=-(u+1|0);u=u+1|0}}else{fT(n+(c[l+4>>2]|0)|0);u=0;while(1){if((u|0)>=(p|0)){break}v=+(p|0);w=~~(+(u|0)*+(n|0)/v);c[t+(u<<2)>>2]=w+((fV()|0)%(~~(+(u+1|0)*+(n|0)/v)-w|0)|0);u=u+1|0}fU()}if((e|0)!=0){x=1}else{x=(n|0)>(c[d+4>>2]<<1|0)}e=(x^1)&1;if((c[l+4>>2]|0)>=(c[d+28>>2]|0)){u=0;while(1){if((u|0)<(p|0)){y=(eb(c[d+52>>2]|0)|0)!=0^1}else{y=0}if(!y){break}is(c[t+(u<<2)>>2]|0,c[l+19036>>2]|0,c[l+19040>>2]|0);L43:do{if((cV(l)|0)!=0){do{if((e|0)!=0){if((c_(l)|0)!=0){break}break L43}}while(0);ei(g,l,d,1);z=36}else{ey(h,l,d,1);z=36}}while(0);if((z|0)==36){z=0}u=u+1|0}}u=0;while(1){if((u|0)<(p|0)){A=(eb(c[d+52>>2]|0)|0)!=0^1}else{A=0}if(!A){break}is(c[t+(u<<2)>>2]|0,c[l+19036>>2]|0,c[l+19040>>2]|0);L61:do{if((cV(l)|0)!=0){h=c_(l)|0;do{if((e|0)!=0){if((h|0)!=0){break}break L61}}while(0);ei(j,l,d,2);js(q+(s<<10)|0,j|0,1024)|0;a[q+(s<<10)+4|0]=1;a[q+(s<<10)+5|0]=h;z=49}else{ey(k,l,d,2);js(q+(s<<10)|0,k|0,1024)|0;a[q+(s<<10)+4|0]=0;a[q+(s<<10)+5|0]=1;z=49}}while(0);if((z|0)==49){z=0;if((b[q+(s<<10)+8>>1]|0)==0){r=r+1|0}c[q+(s<<10)>>2]=c[t+(u<<2)>>2];s=s+1|0}u=u+1|0}d4(d,3016);aJ(q|0,s|0,1024,c[d+48>>2]|0);if((eb(c[d+52>>2]|0)|0)==0){do{if((s|0)==0){if((n|0)<=0){break}if((n|0)>=(c[d+4>>2]|0)){break}aw(2328,(m=i,i=i+8|0,c[m>>2]=1840,m)|0)|0;i=m;aO(1)}}while(0)}if((c[d>>2]|0)>1){au(c[o>>2]|0,11296,(m=i,i=i+16|0,c[m>>2]=r,c[m+8>>2]=s,m)|0)|0;i=m}d4(d,10816);c[l+19024>>2]=p;c[l+19028>>2]=s;c[l+19032>>2]=r;c[l+19044>>2]=q;fq(t,p<<2);i=f;return}function hn(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0,j=0;d=i;e=a;a=b;c[24072]=c[a>>2];gY(e);ea(c[a+52>>2]|0);if((eb(c[a+52>>2]|0)|0)!=0){aw(10480,(b=i,i=i+8|0,c[b>>2]=10120,b)|0)|0;i=b;c[e+19032>>2]=0;f=0;g=f;i=d;return g|0}b4(e);d4(a,9608);gZ(e,a);h4(e);ix(e);il(e);ic(e);b=c[a+12>>2]|0;while(1){if((b|0)<=(c[a+16>>2]|0)){h=(eb(c[a+52>>2]|0)|0)!=0^1}else{h=0}if(!h){break}c[e+19036>>2]=b;c[e+19020>>2]=iG(e,c[e+19036>>2]|0,a)|0;d4(a,9424);hm(e,a);if((c[e+19032>>2]|0)>0){j=8;break}b=b+1|0}iz(e);h$(e);d4(a,9056);f=c[e+19032>>2]|0;g=f;i=d;return g|0}function ho(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,j=0;e=i;f=a;a=b;b=d;if((f|0)>=(c[a+19028>>2]|0)){g=aw(2328,(h=i,i=i+8|0,c[h>>2]=8776,h)|0)|0;i=h;aO(1);return 0}if((f|0)<0){g=aw(2328,(h=i,i=i+8|0,c[h>>2]=8776,h)|0)|0;i=h;aO(1);return 0}h=fD(1056)|0;c[h>>2]=c[a+4>>2];c[h+4>>2]=fD(c[h>>2]<<2)|0;c[h+1036>>2]=0;c[h+1032>>2]=0;c[h+1040>>2]=0;c[h+1044>>2]=0;c[h+1048>>2]=a;c[h+1052>>2]=b;js(h+8|0,(c[a+19044>>2]|0)+(f<<10)|0,1024)|0;is(c[(c[a+19044>>2]|0)+(f<<10)>>2]|0,c[a+19036>>2]|0,c[a+19040>>2]|0);gO(a,h);if((cV(a)|0)!=0){eB(a,b,h)}else{ez(a,b,h)}if((c[(c[a>>2]|0)+56>>2]|0)==0){j=h;i=e;return j|0}hp(h,c[(c[a>>2]|0)+56>>2]|0);j=h;i=e;return j|0}function hp(b,d){b=b|0;d=d|0;var e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0;e=i;f=b;b=d;d=ht(f)|0;g=c[f+1052>>2]|0;h=c[f+1048>>2]|0;j=0;while(1){if((j|0)>=(d|0)){break}k=(c[f+1040>>2]|0)+(j*14944|0)|0;if((c[k+8>>2]|0)!=0){l=0;while(1){if((l|0)>=(c[k>>2]|0)){break}hr((c[k+8>>2]|0)+(l<<3)|0);l=l+1|0}c0(k+16|0);fE(c[k+8>>2]|0,c[k>>2]<<3)}c[k+8>>2]=fD(c[k>>2]<<3)|0;l=0;while(1){if((l|0)>=(c[k>>2]|0)){break}c[(c[k+8>>2]|0)+(l<<3)>>2]=0;c[(c[k+8>>2]|0)+(l<<3)+4>>2]=0;l=l+1|0}if((c[k+12>>2]|0)!=0){m=c[k+12>>2]|0;fE(m,(jr(c[k+12>>2]|0)|0)+1|0);c[k+12>>2]=0}if((a[f+14|0]|0)!=0){n=0}else{n=db(b,g,h,k,0)|0}if((n|0)==0){l=0;while(1){if((l|0)>=(c[k>>2]|0)){break}c[(c[k+8>>2]|0)+(l<<3)>>2]=0;c[(c[k+8>>2]|0)+(l<<3)+4>>2]=0;l=l+1|0}}else{l=0;while(1){if((l|0)>=(c[k>>2]|0)){break}m=0;o=c[n+(l<<2)>>2]|0;while(1){if((o|0)==0){break}m=m+1|0;o=c[o>>2]|0}c[(c[k+8>>2]|0)+(l<<3)>>2]=m;if((m|0)>0){p=fD(m<<2)|0;c[(c[k+8>>2]|0)+(l<<3)+4>>2]=p}m=0;o=c[n+(l<<2)>>2]|0;while(1){if((o|0)==0){break}p=fD(2)|0;c[(c[(c[k+8>>2]|0)+(l<<3)+4>>2]|0)+(m<<2)>>2]=p;aP(c[(c[(c[k+8>>2]|0)+(l<<3)+4>>2]|0)+(m<<2)>>2]|0,8384,(p=i,i=i+8|0,c[p>>2]=c[o+4>>2],p)|0)|0;i=p;m=m+1|0;o=c[o>>2]|0}l=l+1|0}js(k+16|0,b+1036|0,14928)|0;if((c[n+1988>>2]|0)!=0){c[k+12>>2]=fD((jr(c[n+1988>>2]|0)|0)+1|0)|0;ju(c[k+12>>2]|0,c[n+1988>>2]|0)|0}}j=j+1|0}c9(b);i=e;return}function hq(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0;d=i;e=a;a=b;do{if((a|0)>=0){if((a|0)>=(c[e+1032>>2]|0)){break}c[e+1036>>2]=a;f=1;g=f;i=d;return g|0}}while(0);f=0;g=f;i=d;return g|0}function hr(a){a=a|0;var b=0,d=0,e=0;b=i;d=a;a=i;i=i+8|0;c[a>>2]=c[d>>2];c[a+4>>2]=c[d+4>>2];d=0;while(1){if((d|0)>=(c[a>>2]|0)){break}e=c[(c[a+4>>2]|0)+(d<<2)>>2]|0;fE(e,(jr(c[(c[a+4>>2]|0)+(d<<2)>>2]|0)|0)+1|0);d=d+1|0}if((c[a>>2]|0)<=0){i=b;return}fE(c[a+4>>2]|0,c[a>>2]<<2);i=b;return}function hs(a){a=a|0;var b=0,d=0,e=0,f=0;b=i;d=a;a=0;while(1){if((a|0)>=(c[d>>2]|0)){break}e=c[(c[d+4>>2]|0)+(a<<2)>>2]|0;fE(e,(jr(c[(c[d+4>>2]|0)+(a<<2)>>2]|0)|0)+1|0);a=a+1|0}fE(c[d+4>>2]|0,c[d>>2]<<2);a=0;while(1){if((a|0)>=(c[d+1032>>2]|0)){break}e=(c[d+1040>>2]|0)+(a*14944|0)|0;f=0;while(1){if((f|0)>=(c[e>>2]|0)){break}fI(c[(c[e+4>>2]|0)+(f<<2)>>2]|0);f=f+1|0}fE(c[e+4>>2]|0,c[e>>2]<<2);if((c[e+8>>2]|0)!=0){f=0;while(1){if((f|0)>=(c[e>>2]|0)){break}hr((c[e+8>>2]|0)+(f<<3)|0);f=f+1|0}fE(c[e+8>>2]|0,c[e>>2]<<3);c0(e+16|0)}if((c[e+12>>2]|0)!=0){f=c[e+12>>2]|0;fE(f,(jr(c[e+12>>2]|0)|0)+1|0)}a=a+1|0}fE(c[d+1040>>2]|0,(c[d+1032>>2]|0)*14944|0);fE(d,1056);i=b;return}function ht(a){a=a|0;i=i;return c[a+1032>>2]|0}function hu(a){a=a|0;i=i;return c[a>>2]|0}function hv(a){a=a|0;var b=0;b=a;i=i;return c[(c[b+1040>>2]|0)+((c[b+1036>>2]|0)*14944|0)>>2]|0}function hw(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0;d=i;e=a;a=b;do{if((a|0)>=0){if((a|0)>=(c[(c[e+1040>>2]|0)+((c[e+1036>>2]|0)*14944|0)>>2]|0)){break}f=1;g=f;i=d;return g|0}}while(0);f=0;g=f;i=d;return g|0}function hx(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0;d=i;e=a;a=b;if((hw(e,a)|0)!=0){f=c[c[(c[(c[e+1040>>2]|0)+((c[e+1036>>2]|0)*14944|0)+4>>2]|0)+(a<<2)>>2]>>2]|0;g=f;i=d;return g|0}else{f=-1;g=f;i=d;return g|0}return 0}function hy(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0;d=i;e=a;a=b;if((hw(e,a)|0)!=0){f=c[(c[(c[(c[e+1040>>2]|0)+((c[e+1036>>2]|0)*14944|0)+4>>2]|0)+(a<<2)>>2]|0)+4>>2]|0;g=f;i=d;return g|0}else{f=-1;g=f;i=d;return g|0}return 0}function hz(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0;d=i;e=a;a=b;if((hw(e,a)|0)!=0){f=c[(c[(c[(c[e+1040>>2]|0)+((c[e+1036>>2]|0)*14944|0)+4>>2]|0)+(a<<2)>>2]|0)+16>>2]|0;g=f;i=d;return g|0}else{f=0;g=f;i=d;return g|0}return 0}function hA(a){a=a|0;i=i;return c[a+1048>>2]|0}function hB(a){a=a|0;var b=0,c=0;b=i;c=a;hC(c);hD(c);hE(c);hF(c);hG(c);i=b;return}function hC(a){a=a|0;var b=0,d=0,e=0;b=i;d=a;if((fN(d,1760)|0)==0){i=b;return}a=0;while(1){if((a|0)>=(c[d+4>>2]|0)){break}if((bi(d+8+(a*76|0)|0,1760)|0)==0){e=hH(-3,43,220728,1760)|0;c[d+8+(a*76|0)+68>>2]=fJ(e,c[d+8+(a*76|0)+68>>2]|0)|0}a=a+1|0}a=0;while(1){if((a|0)>=(c[d+4>>2]|0)){break}if((bi(d+8+(a*76|0)|0,11216)|0)==0){c[d+8+(a*76|0)+68>>2]=hJ(c[d+8+(a*76|0)+68>>2]|0,-3,0)|0}a=a+1|0}i=b;return}function hD(a){a=a|0;var b=0,d=0,e=0;b=i;d=a;if((fN(d,2888)|0)==0){i=b;return}a=0;while(1){if((a|0)>=(c[d+4>>2]|0)){break}if((bi(d+8+(a*76|0)|0,2888)|0)==0){e=hH(-4,43,220728,2888)|0;c[d+8+(a*76|0)+68>>2]=fJ(e,c[d+8+(a*76|0)+68>>2]|0)|0}a=a+1|0}a=0;while(1){if((a|0)>=(c[d+4>>2]|0)){break}if((bi(d+8+(a*76|0)|0,2280)|0)==0){c[d+8+(a*76|0)+68>>2]=hJ(c[d+8+(a*76|0)+68>>2]|0,-4,1)|0}a=a+1|0}i=b;return}function hE(a){a=a|0;var b=0,d=0,e=0;b=i;d=a;if((fN(d,4856)|0)==0){i=b;return}a=0;while(1){if((a|0)>=(c[d+4>>2]|0)){break}if((bi(d+8+(a*76|0)|0,4856)|0)==0){e=hH(-5,43,220728,4856)|0;c[d+8+(a*76|0)+68>>2]=fJ(e,c[d+8+(a*76|0)+68>>2]|0)|0;do{if((a|0)<((c[d+4>>2]|0)-1|0)){if((bi(d+8+((a+1|0)*76|0)|0,4192)|0)!=0){break}e=hH(-6,45,220728,4192)|0;c[d+8+((a+1|0)*76|0)+68>>2]=fJ(e,c[d+8+((a+1|0)*76|0)+68>>2]|0)|0;e=hH(-6,43,220728,4856)|0;e=hK(-5,43,220728,e)|0;c[d+8+(a*76|0)+68>>2]=fJ(e,c[d+8+(a*76|0)+68>>2]|0)|0}}while(0)}a=a+1|0}a=0;while(1){if((a|0)>=(c[d+4>>2]|0)){break}if((bi(d+8+(a*76|0)|0,3472)|0)==0){c[d+8+(a*76|0)+68>>2]=hJ(c[d+8+(a*76|0)+68>>2]|0,-5,0)|0}a=a+1|0}i=b;return}function hF(a){a=a|0;var b=0,d=0,e=0;b=i;d=a;if((fN(d,6928)|0)==0){i=b;return}a=0;while(1){if((a|0)>=(c[d+4>>2]|0)){break}if((bi(d+8+(a*76|0)|0,6928)|0)==0){e=hH(-7,43,220728,6928)|0;c[d+8+(a*76|0)+68>>2]=fJ(e,c[d+8+(a*76|0)+68>>2]|0)|0}a=a+1|0}a=0;while(1){if((a|0)>=(c[d+4>>2]|0)){break}if((bi(d+8+(a*76|0)|0,5640)|0)==0){c[d+8+(a*76|0)+68>>2]=hJ(c[d+8+(a*76|0)+68>>2]|0,-7,0)|0}a=a+1|0}i=b;return}function hG(b){b=b|0;var d=0,e=0,f=0;d=i;e=b;b=0;while(1){if((b|0)>=((c[e+4>>2]|0)-1|0)){break}do{if((bi(e+8+(b*76|0)|0,4128)|0)==0){if((a[(c[e+19008>>2]|0)+(b+1)|0]|0)==0){break}f=hH(-2,43,220728,4128)|0;c[e+8+(b*76|0)+68>>2]=fJ(f,c[e+8+(b*76|0)+68>>2]|0)|0;c[e+8+((b+1|0)*76|0)+68>>2]=hI(c[e+8+((b+1|0)*76|0)+68>>2]|0)|0}}while(0);b=b+1|0}i=d;return}function hH(d,e,f,g){d=d|0;e=e|0;f=f|0;g=g|0;var h=0,j=0,k=0;h=i;j=fz(20)|0;b[j+4>>1]=0;c[j+8>>2]=g;c[j>>2]=0;g=fs(fz(16)|0)|0;c[g+12>>2]=f;b[g>>1]=d;a[g+4|0]=0;a[g+5|0]=0;c[g+8>>2]=0;if((e|0)==43){c[j+12>>2]=0;c[j+16>>2]=g;k=j;i=h;return k|0}else{c[j+16>>2]=0;c[j+12>>2]=g;k=j;i=h;return k|0}return 0}function hI(d){d=d|0;var e=0,f=0,g=0,h=0,j=0;e=i;f=d;d=0;g=f;while(1){if((g|0)==0){break}do{if((c[g+12>>2]|0)!=0){h=c[g+12>>2]|0;while(1){if((c[h+8>>2]|0)==0){break}h=c[h+8>>2]|0}if((b[h>>1]|0)<0){break}else{j=fC(g)|0;c[j>>2]=d;d=j;j=fs(fz(16)|0)|0;c[j+12>>2]=220728;b[j>>1]=-2;a[j+4|0]=0;a[j+5|0]=0;c[j+8>>2]=0;c[h+8>>2]=j;break}}}while(0);g=c[g>>2]|0}g=fJ(f,d)|0;i=e;return g|0}function hJ(d,e,f){d=d|0;e=e|0;f=f|0;var g=0,h=0,j=0,k=0,l=0,m=0;g=i;h=d;d=e;e=f;f=0;j=h;while(1){if((j|0)==0){break}do{if((c[j+12>>2]|0)!=0){k=c[j+12>>2]|0;while(1){if((c[k+8>>2]|0)==0){break}k=c[k+8>>2]|0}if((b[k>>1]|0)<0){break}if((e|0)==0){l=fC(j)|0;c[l>>2]=f;f=l}l=fs(fz(16)|0)|0;c[l+12>>2]=220728;b[l>>1]=d;a[l+4|0]=0;a[l+5|0]=0;c[l+8>>2]=k;if((c[j+12>>2]|0)==(k|0)){c[j+12>>2]=l}else{m=c[j+12>>2]|0;while(1){if((c[m+8>>2]|0)==(k|0)){break}m=c[m+8>>2]|0}c[m+8>>2]=l}}}while(0);j=c[j>>2]|0}j=fJ(h,f)|0;i=g;return j|0}function hK(d,e,f,g){d=d|0;e=e|0;f=f|0;g=g|0;var h=0,j=0,k=0;h=i;j=g;g=fs(fz(16)|0)|0;c[g+12>>2]=f;b[g>>1]=d;a[g+4|0]=0;a[g+5|0]=0;c[g+8>>2]=0;if((e|0)==43){c[g+8>>2]=c[j+16>>2];c[j+16>>2]=g;k=j;i=h;return k|0}else{c[g+8>>2]=c[j+12>>2];c[j+12>>2]=g;k=j;i=h;return k|0}return 0}function hL(b){b=b|0;var c=0,d=0,e=0,f=0,g=0;c=i;d=b;while(1){if((a[d]|0)==0){e=6;break}if((a[d]|0)==95){e=4;break}d=d+1|0}if((e|0)==6){f=0;g=f;i=c;return g|0}else if((e|0)==4){f=1;g=f;i=c;return g|0}return 0}function hM(b){b=b|0;var c=0,d=0,e=0,f=0,g=0;c=i;d=b;b=d;while(1){if((a[b]|0)==0){break}if((a[b]|0)==46){e=4;break}b=b+1|0}if((e|0)==4){f=0;g=f;i=c;return g|0}do{if((a[d|0]|0)!=95){if((a[d+((jr(d|0)|0)-1)|0]|0)==95){break}b=d;while(1){if((a[b]|0)==0){e=17;break}if((a[b]|0)==95){if((a[b+1|0]|0)==95){e=14;break}}b=b+1|0}if((e|0)==17){f=1;g=f;i=c;return g|0}else if((e|0)==14){f=0;g=f;i=c;return g|0}}}while(0);f=0;g=f;i=c;return g|0}function hN(b){b=b|0;var c=0,d=0,e=0,f=0,g=0;c=i;d=b;while(1){if((a[d]|0)==0){e=6;break}if((as(a[d]|0)|0)==0){e=4;break}d=d+1|0}if((e|0)==4){f=0;g=f;i=c;return g|0}else if((e|0)==6){f=1;g=f;i=c;return g|0}return 0}function hO(b){b=b|0;var c=0,d=0,e=0,f=0;c=i;d=b;while(1){if((a[d]|0)!=0){e=(a[d]|0)!=46}else{e=0}if(!e){break}d=d+1|0}e=d;d=e+1|0;do{if((a[e]|0)!=46){f=-1}else{b=d;d=b+1|0;if((a[b]|0)!=73){f=-1;break}if((hN(d)|0)!=0){f=a_(d|0)|0;break}else{f=-1;break}}}while(0);i=c;return f|0}function hP(a){a=a|0;var b=0,d=0,e=0;b=i;d=a;a=0;while(1){if((d|0)==0){break}e=hO(c[d>>2]|0)|0;if((e|0)>(a|0)){a=e}d=c[d+16>>2]|0}i=b;return a|0}function hQ(b,d){b=b|0;d=d|0;var e=0,f=0,g=0,h=0,j=0,k=0,l=0;e=i;f=b;b=d;d=(hP(gF(f,b)|0)|0)+1|0;g=(jr(b|0)|0)+10|0;h=fz(g)|0;j=h;k=h;while(1){if((a[b]|0)!=0){l=(a[b]|0)!=46}else{l=0}if(!l){break}a[j]=a[b]|0;j=j+1|0;b=b+1|0}aP(j|0,4088,(j=i,i=i+8|0,c[j>>2]=d,j)|0)|0;i=j;j=eT(k,c[f+84>>2]|0)|0;fq(k,g);i=e;return j|0}function hR(b,d){b=b|0;d=d|0;var e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0;e=i;f=b;b=d;d=0;g=(jr(b|0)|0)+1|0;h=fz(g)|0;j=h;k=h;ju(j|0,b|0)|0;while(1){if((a[j]|0)==0){break}b=j;while(1){if((a[j]|0)!=0){l=(a[j]|0)!=95}else{l=0}if(!l){break}j=j+1|0}if((a[j]|0)==95){m=1;a[j]=0}else{m=0}h=fz(20)|0;c[h+16>>2]=d;d=h;c[d>>2]=eT(b,c[f+84>>2]|0)|0;c[d+4>>2]=0;if((m|0)!=0){j=j+1|0}}fq(k,g);i=e;return d|0}function hS(){var b=0,c=0,d=0,e=0;b=i;c=7;d=1;while(1){if((d|0)!=1){break}e=1696+c|0;a[e]=(a[e]|0)+1;if((a[1696+c|0]|0)==91){a[1696+c|0]=65;d=1}else{d=0}c=c-1|0}i=b;return}function hT(b){b=b|0;var d=0,e=0,f=0,g=0,h=0,j=0;d=i;e=b;b=0;while(1){if((a[1696+b|0]|0)!=65){break}b=b+1|0}f=8-b+4|0;g=fz(f)|0;h=g;j=g;g=h;h=g+1|0;a[g]=73;g=h;h=g+1|0;a[g]=68;while(1){if(b>>>0>=8>>>0){break}g=h;h=g+1|0;a[g]=a[1696+b|0]|0;b=b+1|0}b=h;h=b+1|0;a[b]=0;b=eT(j,c[e+84>>2]|0)|0;fq(j,f);i=d;return b|0}function hU(b,d){b=b|0;d=d|0;var e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0;e=i;f=b;b=d;d=c[b+8>>2]|0;g=c[b>>2]|0;jr(g|0)|0;if((hM(g)|0)==0){h=c[f+164>>2]|0;aw(9352,(j=i,i=i+16|0,c[j>>2]=g,c[j+8>>2]=h,j)|0)|0;i=j;aw(6888,(j=i,i=i+1|0,i=i+7&-8,c[j>>2]=0,j)|0)|0;i=j;aw(5608,(j=i,i=i+1|0,i=i+7&-8,c[j>>2]=0,j)|0)|0;i=j;fq(b,20);i=e;return}h=hR(f,g)|0;g=h;k=h;fq(b,20);if((c[k+16>>2]|0)==0){fk(4792,(j=i,i=i+1|0,i=i+7&-8,c[j>>2]=0,j)|0);i=j}j=gi(f)|0;c[j+4>>2]=hT(f)|0;a[j+2|0]=45;a[j+3|0]=0;a[j|0]=2;a[j+1|0]=0;b=gi(f)|0;h=fz(8)|0;l=h;c[b+4>>2]=h;h=fz(8)|0;m=h;c[l>>2]=h;c[m>>2]=0;c[l+4>>2]=j;c[m+4>>2]=d;a[b|0]=1;a[b+1|0]=0;c[k+8>>2]=b;k=c[k+16>>2]|0;while(1){if((c[k+16>>2]|0)==0){break}b=gi(f)|0;c[b+4>>2]=0;a[b|0]=1;a[b+1|0]=0;d=fz(8)|0;l=d;c[b+4>>2]=d;d=fz(8)|0;m=d;c[l>>2]=d;c[m>>2]=0;j=gi(f)|0;c[j+4>>2]=hT(f)|0;a[j+2|0]=43;a[j+3|0]=0;a[j|0]=2;a[j+1|0]=0;c[m+4>>2]=j;hS();j=gi(f)|0;c[j+4>>2]=hT(f)|0;a[j+2|0]=45;a[j+3|0]=0;a[j|0]=2;a[j+1|0]=0;c[l+4>>2]=j;c[k+8>>2]=b;k=c[k+16>>2]|0}j=gi(f)|0;c[j+4>>2]=hT(f)|0;a[j+2|0]=43;a[j+3|0]=0;a[j|0]=2;a[j+1|0]=0;c[k+8>>2]=j;hS();k=g;while(1){if((k|0)==0){break}g=c[k+16>>2]|0;c[k+16>>2]=0;c[k+12>>2]=0;c[k>>2]=hQ(f,c[k>>2]|0)|0;c[f>>2]=gw(f,c[f>>2]|0,k)|0;j=f+88|0;c[j>>2]=(c[j>>2]|0)+1;k=g}i=e;return}function hV(a){a=a|0;var b=0,c=0;b=i;c=(hO(a)|0)!=-1|0;i=b;return c|0}function hW(a){a=a|0;var b=0,d=0;b=i;d=a;a=0;while(1){if((d|0)==0){break}if((c[d+12>>2]|0)!=0){a=a+1|0}d=c[d>>2]|0}i=b;return a|0}function hX(a){a=a|0;var b=0,d=0;b=i;d=a;a=0;while(1){if((d|0)==0){break}if((c[d+16>>2]|0)!=0){a=a+1|0}d=c[d>>2]|0}i=b;return a|0}function hY(){var a=0,b=0,d=0;a=i;if((c[27478]|0)!=0){b=c[27478]|0;c[27478]=c[b>>2];d=b;i=a;return d|0}else{b=fz(8)|0;d=b;i=a;return d|0}return 0}function hZ(a){a=a|0;var b=0,d=0;b=i;d=a;while(1){if((d|0)==0){break}a=c[d>>2]|0;c[d>>2]=c[27478];c[27478]=d;d=a}i=b;return}function h_(a){a=a|0;var b=0,d=0;b=i;d=a;while(1){if((d|0)==0){break}a=c[d>>2]|0;fq(d,8);d=a}i=b;return}function h$(a){a=a|0;var b=0,d=0,e=0;b=i;d=a;if((c[24072]|0)>1){aw(4e3,(a=i,i=i+8|0,c[a>>2]=c[27484],a)|0)|0;i=a}a=0;while(1){if((a|0)>=(c[d+4>>2]|0)){break}e=0;while(1){if((e|0)>=(c[111016+(a<<2)>>2]|0)){break}h_(c[(c[113016+(a<<2)>>2]|0)+(e<<2)>>2]|0);e=e+1|0}fq(c[113016+(a<<2)>>2]|0,c[111016+(a<<2)>>2]<<2);e=0;while(1){if((e|0)>=(c[97792+(a<<2)>>2]|0)){break}h_(c[(c[99792+(a<<2)>>2]|0)+(e<<2)>>2]|0);e=e+1|0}fq(c[99792+(a<<2)>>2]|0,c[97792+(a<<2)>>2]<<2);a=a+1|0}h_(c[27478]|0);c[27478]=0;i=b;return}function h0(d){d=d|0;var e=0,f=0,g=0;e=i;f=d;d=c[96744+((b[f>>1]&255)<<2)>>2]|0;g=c[f+12>>2]|0;while(1){if((bg(a[g]|0)|0)==0){break}d=d+(d<<1)+(c[96744+(((a[g]|0)+d&255)<<2)>>2]|0)|0;g=g+1|0}i=e;return d|0}function h1(a,b){a=a|0;b=b|0;var e=0,f=0,g=0,h=0;e=i;f=a;a=b;if((a|0)==0){g=f;h=g;i=e;return h|0}if((d[(c[(c[f+4>>2]|0)+16>>2]|0)+2|0]|0|0)<=(d[(c[(c[a+4>>2]|0)+16>>2]|0)+2|0]|0|0)){c[f>>2]=a;g=f;h=g;i=e;return h|0}else{c[a>>2]=h1(f,c[a>>2]|0)|0;g=a;h=g;i=e;return h|0}return 0}function h2(a,b){a=a|0;b=b|0;var e=0,f=0,g=0,h=0;e=i;f=a;a=b;if((a|0)==0){g=f;h=g;i=e;return h|0}if((d[(c[(c[f+4>>2]|0)+12>>2]|0)+2|0]|0|0)>=(d[(c[(c[a+4>>2]|0)+12>>2]|0)+2|0]|0|0)){c[f>>2]=a;g=f;h=g;i=e;return h|0}else{c[a>>2]=h2(f,c[a>>2]|0)|0;g=a;h=g;i=e;return h|0}return 0}function h3(a,b,d,e,f){a=a|0;b=b|0;d=d|0;e=e|0;f=f|0;var g=0,h=0;g=i;h=b;b=(h0(e)|0)&a-1;a=fz(8)|0;c[a>>2]=0;c[a+4>>2]=d;if((f|0)==1){c[h+(b<<2)>>2]=h1(a,c[h+(b<<2)>>2]|0)|0;i=g;return}else{c[h+(b<<2)>>2]=h2(a,c[h+(b<<2)>>2]|0)|0;i=g;return}}function h4(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,j=0,k=0;b=i;d=a;c[27484]=0;a=0;while(1){if((a|0)>=(c[d+4>>2]|0)){break}e=hW(c[d+8+(a*76|0)+68>>2]|0)|0;f=fL(e)|0;c[111016+(a<<2)>>2]=f;g=fz(f<<2)|0;c[113016+(a<<2)>>2]=g;h=g;g=0;while(1){if((g|0)>=(f|0)){break}c[h+(g<<2)>>2]=0;g=g+1|0}j=c[d+8+(a*76|0)+68>>2]|0;while(1){if((j|0)==0){break}if((c[j+12>>2]|0)!=0){h3(f,h,j,c[j+12>>2]|0,-1)}j=c[j>>2]|0}e=hX(c[d+8+(a*76|0)+68>>2]|0)|0;f=fL(e)|0;c[97792+(a<<2)>>2]=f;k=fz(f<<2)|0;c[99792+(a<<2)>>2]=k;h=k;g=0;while(1){if((g|0)>=(f|0)){break}c[h+(g<<2)>>2]=0;g=g+1|0}j=c[d+8+(a*76|0)+68>>2]|0;while(1){if((j|0)==0){break}if((c[j+16>>2]|0)!=0){h3(f,h,j,c[j+16>>2]|0,1)}j=c[j>>2]|0}a=a+1|0}i=b;return}function h5(a,b,e,f,g){a=a|0;b=b|0;e=e|0;f=f|0;g=g|0;var h=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0;h=i;j=a;a=b;b=e;e=f;f=g;if((a|0)!=0){g=h0(a)|0;k=c[(c[113016+(j<<2)>>2]|0)+((g&(c[111016+(j<<2)>>2]|0)-1)<<2)>>2]|0}else{k=0}if((e|0)!=0){g=h0(e)|0;l=c[(c[99792+(j<<2)>>2]|0)+((g&(c[97792+(j<<2)>>2]|0)-1)<<2)>>2]|0}else{l=0}j=0;g=k;while(1){if((g|0)==0){break}if((d[(c[(c[g+4>>2]|0)+12>>2]|0)+2|0]|0|0)<(b|0)){m=10;break}n=hY()|0;c[n+4>>2]=c[g+4>>2];c[n>>2]=j;j=n;g=c[g>>2]|0}k=j;j=0;g=l;while(1){if((g|0)==0){break}if((d[(c[(c[g+4>>2]|0)+16>>2]|0)+2|0]|0|0)>(f|0)){m=16;break}n=hY()|0;c[n+4>>2]=c[g+4>>2];c[n>>2]=j;j=n;g=c[g>>2]|0}l=j;f=0;j=0;g=l;while(1){if((g|0)==0){break}b=c[g>>2]|0;c[27484]=(c[27484]|0)+1;n=k;while(1){if((n|0)==0){break}c[27484]=(c[27484]|0)+1;if((c[g+4>>2]|0)==(c[n+4>>2]|0)){m=24;break}n=c[n>>2]|0}if((m|0)==24){m=0}if((n|0)!=0){c[g>>2]=f;f=g}if((n|0)==0){c[g>>2]=j;j=g}g=b}l=j;hZ(f);if((l|0)==0){o=k;p=o;i=h;return p|0}g=l;while(1){if((c[g>>2]|0)==0){break}g=c[g>>2]|0}c[g>>2]=k;o=l;p=o;i=h;return p|0}function h6(){c[29336]=0;c[29335]=0;c[29334]=1;return 117336}function h7(){var a=0,b=0;a=i;b=fz(12)|0;c[b+8>>2]=0;c[b+4>>2]=0;c[b>>2]=0;i=a;return b|0}function h8(a){a=a|0;var b=0,d=0,e=0;b=i;d=a;if((d|0)==0){i=b;return}a=c[d+4>>2]|0;while(1){if((a|0)==0){break}e=c[a>>2]|0;fq(a,64);a=e}fq(d,12);i=b;return}function h9(a,b,d,e,f,g,h,j,k,l,m,n,o){a=a|0;b=b|0;d=d|0;e=e|0;f=f|0;g=g|0;h=h|0;j=j|0;k=k|0;l=l|0;m=m|0;n=n|0;o=o|0;var p=0,q=0;p=i;q=fz(64)|0;c[q>>2]=0;c[q+4>>2]=a;c[q+12>>2]=b;c[q+16>>2]=d;c[q+20>>2]=e;c[q+24>>2]=f;c[q+8>>2]=g;c[q+32>>2]=h;c[q+36>>2]=j;c[q+40>>2]=k;c[q+44>>2]=l;c[q+52>>2]=m;c[q+56>>2]=n;c[q+60>>2]=o;i=p;return q|0}function ia(a,b){a=a|0;b=b|0;var d=0;d=a;a=b;if((c[d+4>>2]|0)==0){c[d+4>>2]=a}else{c[c[d+8>>2]>>2]=a}c[d+8>>2]=a;c[a>>2]=0;i=i;return}function ib(a,b,d,e,f,g){a=a|0;b=b|0;d=d|0;e=e|0;f=f|0;g=g|0;var h=0;h=g;g=0;g=g+(g<<1)+(c[96744+((a+g&255)<<2)>>2]|0)|0;g=g+(g<<1)+(c[96744+((b+g&255)<<2)>>2]|0)|0;g=g+(g<<1)+(c[96744+((((d+g|0)%((c[h>>2]|0)+1|0)|0)&255)<<2)>>2]|0)|0;g=g+(g<<1)+(c[96744+((((e+g|0)%((c[h>>2]|0)+1|0)|0)&255)<<2)>>2]|0)|0;g=g+(g<<1)+(c[96744+((f+g&255)<<2)>>2]|0)|0;i=i;return g&(c[h>>2]|0)-1|0}function ic(a){a=a|0;var b=0,d=0,e=0,f=0;b=i;d=a;if((c[d+19040>>2]|0)!=0){aw(3864,(a=i,i=i+8|0,c[a>>2]=9264,a)|0)|0;i=a;aO(1)}a=fz(10960)|0;c[d+19040>>2]=a;e=a;c[e+12>>2]=c[d+4>>2];if((c[e+12>>2]|0)>=10){f=16384}else{if((c[e+12>>2]|0)>=4){f=1<<c[e+12>>2]}else{f=16}}c[e>>2]=f;c[e+4>>2]=fz(f<<2)|0;d=0;while(1){if((d|0)>=(f|0)){break}c[(c[e+4>>2]|0)+(d<<2)>>2]=0;d=d+1|0}i=b;return}function id(a){a=a|0;var b=0,d=0,e=0,f=0;b=i;d=a;if((c[d+4>>2]|0)==0){i=b;return}a=0;while(1){if((a|0)>=(c[d>>2]|0)){break}e=c[(c[d+4>>2]|0)+(a<<2)>>2]|0;while(1){if((e|0)==0){break}f=c[e+20>>2]|0;h8(c[e+8>>2]|0);fq(e,24);e=f}a=a+1|0}fq(c[d+4>>2]|0,c[d>>2]<<2);c[d>>2]=0;c[d+4>>2]=0;i=b;return}function ie(a,d,e,f,g,h){a=a|0;d=d|0;e=e|0;f=f|0;g=g|0;h=h|0;var j=0,k=0,l=0,m=0,n=0,o=0;j=i;k=a;a=d;d=e;e=f;f=g;g=h;h=ib(k,a,d,e,f,g)|0;l=c[(c[g+4>>2]|0)+(h<<2)>>2]|0;L1:while(1){if((l|0)==0){m=11;break}do{if((b[l>>1]|0)==(k|0)){if((b[l+2>>1]|0)!=(a|0)){break}if((c[l+12>>2]|0)!=(d|0)){break}if((c[l+16>>2]|0)!=(e|0)){break}if((b[l+4>>1]|0)==(f|0)){m=8;break L1}}}while(0);l=c[l+20>>2]|0}if((m|0)==8){n=l;o=n;i=j;return o|0}else if((m|0)==11){n=0;o=n;i=j;return o|0}return 0}function ig(a,d,e,f,g,h,j){a=a|0;d=d|0;e=e|0;f=f|0;g=g|0;h=h|0;j=j|0;var k=0,l=0;k=i;l=a;a=d;d=e;e=f;f=g;g=j;j=fz(24)|0;c[j+8>>2]=h;b[j>>1]=l;b[j+2>>1]=a;c[j+12>>2]=d;c[j+16>>2]=e;b[j+4>>1]=f;h=ib(l,a,d,e,f,g)|0;c[j+20>>2]=c[(c[g+4>>2]|0)+(h<<2)>>2];c[(c[g+4>>2]|0)+(h<<2)>>2]=j;i=k;return j|0}function ih(b,e,f,g,h,j,k,l){b=b|0;e=e|0;f=f|0;g=g|0;h=h|0;j=j|0;k=k|0;l=l|0;var m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,A=0,B=0,C=0,D=0,E=0,F=0,G=0,H=0;m=i;i=i+32|0;n=m|0;o=m+16|0;p=b;b=e;e=f;f=g;g=h;h=j;j=k;k=l;if((j|0)<0){aw(3864,(l=i,i=i+8|0,c[l>>2]=5488,l)|0)|0;i=l;aO(1);return 0}l=iC(e,f,g,h,j)|0;do{if((l|0)!=0){if((l|0)==-1){break}q=ie(e,f,g,h,j,k)|0;if((q|0)!=0){r=c[q+8>>2]|0;s=r;i=m;return s|0}q=ig(e,f,g,h,j,h7()|0,k)|0;c[c[q+8>>2]>>2]=l;if((f|0)==(e+1|0)){r=c[q+8>>2]|0;s=r;i=m;return s|0}do{if((g|0)==0){if((h|0)!=0){break}do{if((c[28756]|0)==0){if((e|0)==-1){break}r=c[q+8>>2]|0;s=r;i=m;return s|0}}while(0);if((j|0)==0){r=c[q+8>>2]|0;s=r;i=m;return s|0}t=e+1|0;u=c[(c[27748]|0)+(t*76|0)+68>>2]|0;while(1){if((u|0)==0){break}do{if((c[u+12>>2]|0)==0){c[o>>2]=ih(u,0,t,f,c[u+16>>2]|0,0,j-1|0,k)|0;if((c[o>>2]|0)==0){break}else{v=h6()|0;w=h9(v,e,t,0,0,c[o>>2]|0,t,f,0,0,0,0,0)|0;ia(c[q+8>>2]|0,w);x=24;break}}else{x=24}}while(0);if((x|0)==24){x=0}u=c[u>>2]|0}c[o>>2]=ih(0,0,t,f,0,0,j-1|0,k)|0;if((c[o>>2]|0)!=0){u=h6()|0;w=h9(u,e,t,0,0,c[o>>2]|0,t,f,0,0,0,0,0)|0;ia(c[q+8>>2]|0,w)}r=c[q+8>>2]|0;s=r;i=m;return s|0}}while(0);if((g|0)==0){y=e+1|0}else{y=d[g+2|0]|0}if((h|0)==0){z=f-1|0}else{z=d[h+2|0]|0}t=y;while(1){if((t|0)>(z|0)){break}u=h5(t,g,e,h,f)|0;v=u;A=u;while(1){if((v|0)==0){break}u=c[v+4>>2]|0;B=0;while(1){if((B|0)>(j|0)){break}C=j-B|0;do{if((g|0)!=0){if((c[u+12>>2]|0)==0){D=0;break}D=(iu(g,c[u+12>>2]|0,e,t)|0)!=0}else{D=0}}while(0);E=D&1;do{if((c[u+16>>2]|0)!=0){if((h|0)==0){F=0;break}F=(iu(c[u+16>>2]|0,h,t,f)|0)!=0}else{F=0}}while(0);G=F&1;H=0;while(1){if((H|0)>=4){break}c[o+(H<<2)>>2]=0;c[n+(H<<2)>>2]=0;H=H+1|0}if((E|0)!=0){c[n>>2]=ih(p,u,e,t,c[g+8>>2]|0,c[(c[u+12>>2]|0)+8>>2]|0,B,k)|0;if((a[g+5|0]|0)!=0){c[n+4>>2]=ih(p,u,e,t,g,c[(c[u+12>>2]|0)+8>>2]|0,B,k)|0}if((a[(c[u+12>>2]|0)+5|0]|0)!=0){c[n+8>>2]=ih(p,u,e,t,c[g+8>>2]|0,c[u+12>>2]|0,B,k)|0}do{if((a[g+5|0]|0)!=0){if((a[(c[u+12>>2]|0)+5|0]|0)==0){break}c[n+12>>2]=ih(p,u,e,t,g,c[u+12>>2]|0,B,k)|0}}while(0)}if((G|0)!=0){c[o>>2]=ih(u,b,t,f,c[(c[u+16>>2]|0)+8>>2]|0,c[h+8>>2]|0,C,k)|0;if((a[(c[u+16>>2]|0)+5|0]|0)!=0){c[o+4>>2]=ih(u,b,t,f,c[u+16>>2]|0,c[h+8>>2]|0,C,k)|0}if((a[h+5|0]|0)!=0){c[o+8>>2]=ih(u,b,t,f,c[(c[u+16>>2]|0)+8>>2]|0,h,C,k)|0}do{if((a[(c[u+16>>2]|0)+5|0]|0)!=0){if((a[h+5|0]|0)==0){break}c[o+12>>2]=ih(u,b,t,f,c[u+16>>2]|0,h,C,k)|0}}while(0)}H=0;while(1){if((H|0)>=4){break}if((c[n+(H<<2)>>2]|0)!=0){G=0;while(1){if((G|0)>=4){break}if((c[o+(G<<2)>>2]|0)!=0){w=h9(c[n+(H<<2)>>2]|0,e,t,g,c[u+12>>2]|0,c[o+(G<<2)>>2]|0,t,f,c[u+16>>2]|0,h,p,u,b)|0;ia(c[q+8>>2]|0,w)}G=G+1|0}}H=H+1|0}do{if((c[n>>2]|0)!=0){x=85}else{if((c[n+4>>2]|0)!=0){x=85;break}if((c[n+8>>2]|0)!=0){x=85;break}if((c[n+12>>2]|0)!=0){x=85}}}while(0);if((x|0)==85){x=0;G=ih(u,b,t,f,c[u+16>>2]|0,h,C,k)|0;if((G|0)!=0){H=0;while(1){if((H|0)>=4){break}if((c[n+(H<<2)>>2]|0)!=0){w=h9(c[n+(H<<2)>>2]|0,e,t,g,c[u+12>>2]|0,G,t,f,0,h,p,u,b)|0;ia(c[q+8>>2]|0,w)}H=H+1|0}}}L135:do{if((g|0)==0){do{if((c[o>>2]|0)==0){if((c[o+4>>2]|0)!=0){break}if((c[o+8>>2]|0)!=0){break}if((c[o+12>>2]|0)==0){break L135}}}while(0);G=ih(p,u,e,t,g,c[u+12>>2]|0,B,k)|0;if((G|0)!=0){H=0;while(1){if((H|0)>=4){break}if((c[o+(H<<2)>>2]|0)!=0){w=h9(G,e,t,0,c[u+12>>2]|0,c[o+(H<<2)>>2]|0,t,f,c[u+16>>2]|0,h,p,u,b)|0;ia(c[q+8>>2]|0,w)}H=H+1|0}}}}while(0);B=B+1|0}v=c[v>>2]|0}hZ(A);t=t+1|0}c[(c[q+8>>2]|0)+8>>2]=c[(c[q+8>>2]|0)+4>>2];r=c[q+8>>2]|0;s=r;i=m;return s|0}}while(0);r=0;s=r;i=m;return s|0}function ii(a){a=a|0;var b=0,d=0,e=0.0,f=0,g=0,h=0,j=0;b=i;d=a;do{if((d|0)!=0){if((c[d+4>>2]|0)==0){break}a=0;e=0.0;f=c[d+4>>2]|0;while(1){if((f|0)==0){break}a=a+(aa(c[c[f+4>>2]>>2]|0,c[c[f+8>>2]>>2]|0)|0)|0;e=e+ +(c[c[f+4>>2]>>2]|0)*+(c[c[f+8>>2]>>2]|0);f=c[f>>2]|0}if((a|0)!=(c[d>>2]|0)){aw(3864,(f=i,i=i+8|0,c[f>>2]=4768,f)|0)|0;i=f;aO(1);return 0}if((a|0)<0){g=1}else{g=(a|0)!=(~~e|0)}h=g&1;j=h;i=b;return j|0}}while(0);h=0;j=h;i=b;return j|0}function ij(a){a=a|0;var b=0,d=0,e=0,f=0,g=0;b=i;d=a;a=0;if((c[d+4>>2]|0)==0){aw(3864,(e=i,i=i+8|0,c[e>>2]=4152,e)|0)|0;i=e;aO(1);return 0}e=0;while(1){if((e|0)>=(c[d>>2]|0)){break}f=c[(c[d+4>>2]|0)+(e<<2)>>2]|0;while(1){if((f|0)==0){break}if((a|0)!=0){g=1}else{g=(ii(c[f+8>>2]|0)|0)!=0}a=g&1;f=c[f+20>>2]|0}e=e+1|0}i=b;return a|0}function ik(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0;e=i;f=a;c[27748]=f+8;c[28756]=c[d+24>>2];d=ih(0,0,-1,c[f+4>>2]|0,0,0,b+1|0,c[f+19040>>2]|0)|0;do{if((d|0)!=0){if((c[d+8>>2]|0)==0){break}c[d+8>>2]=c[d+4>>2]}}while(0);c[(c[f+19040>>2]|0)+8>>2]=d;c[27748]=0;d=ij(c[f+19040>>2]|0)|0;i=e;return d|0}function il(a){a=a|0;var b=0,d=0;b=i;d=a;if((c[d+19040>>2]|0)==0){i=b;return}id(c[d+19040>>2]|0);c[(c[d+19040>>2]|0)+8>>2]=0;fq(c[d+19040>>2]|0,10960);c[d+19040>>2]=0;i=b;return}function im(a){a=a|0;var b=0,d=0;b=i;d=a;c[d+1016>>2]=0;a=0;while(1){if((a|0)>=(c[d+12>>2]|0)){break}c[d+16+(a<<2)>>2]=0;a=a+1|0}i=b;return}function io(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0;f=i;g=e;e=i;i=i+20|0;i=i+7&-8;c[e>>2]=c[g>>2];c[e+4>>2]=c[g+4>>2];c[e+8>>2]=c[g+8>>2];c[e+12>>2]=c[g+12>>2];c[e+16>>2]=c[g+16>>2];g=a;if((c[g+1016>>2]|0)<=496){a=g+1020+((c[g+1016>>2]|0)*20|0)|0;h=e;c[a>>2]=c[h>>2];c[a+4>>2]=c[h+4>>2];c[a+8>>2]=c[h+8>>2];c[a+12>>2]=c[h+12>>2];c[a+16>>2]=c[h+16>>2];h=g+1016|0;c[h>>2]=(c[h>>2]|0)+1;c[g+16+(c[e>>2]<<2)>>2]=b;c[g+16+(c[e+4>>2]<<2)>>2]=d;i=f;return}else{aw(3864,(f=i,i=i+8|0,c[f>>2]=3432,f)|0)|0;i=f;aO(1)}}function ip(a,b){a=a|0;b=b|0;var d=0,e=0;d=i;e=a;a=b;if((c[a+20>>2]|0)!=0){io(e,c[a+52>>2]|0,c[a+56>>2]|0,a+12|0)}if((c[a+40>>2]|0)==0){i=d;return}io(e,c[a+56>>2]|0,c[a+60>>2]|0,a+32|0);i=d;return}function iq(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0;e=i;f=a;a=b;b=d;do{if((a|0)!=0){if((c[a+4>>2]|0)==0){break}d=c[a+4>>2]|0;while(1){if((d|0)==0){break}g=aa(c[c[d+4>>2]>>2]|0,c[c[d+8>>2]>>2]|0)|0;if((b|0)<(g|0)){h=7;break}b=b-g|0;d=c[d>>2]|0}if((d|0)==0){aw(3864,(g=i,i=i+8|0,c[g>>2]=2840,g)|0)|0;i=g;aO(1)}ip(f,d);iq(f,c[d+4>>2]|0,(b|0)%(c[c[d+4>>2]>>2]|0)|0);iq(f,c[d+8>>2]|0,(b|0)/(c[c[d+4>>2]>>2]|0)|0);i=e;return}}while(0);i=e;return}function ir(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0;d=i;e=a;a=b;do{if((a|0)!=0){if((c[a+4>>2]|0)==0){break}b=0;f=c[a+4>>2]|0;while(1){if((f|0)==0){break}b=b+1|0;f=c[f>>2]|0}g=(fV()|0)%(b|0)|0;b=0;f=c[a+4>>2]|0;while(1){if((f|0)==0){break}if((g|0)==(b|0)){h=11;break}b=b+1|0;f=c[f>>2]|0}if((f|0)==0){aw(3864,(b=i,i=i+8|0,c[b>>2]=2232,b)|0)|0;i=b;aO(1)}ip(e,f);ir(e,c[f+4>>2]|0);ir(e,c[f+8>>2]|0);i=d;return}}while(0);i=d;return}function is(a,b,d){a=a|0;b=b|0;d=d|0;var e=0;b=i;e=a;a=d;im(a);if((e|0)<0){fT(e);ir(a,c[a+8>>2]|0);fU();i=b;return}else{iq(a,c[a+8>>2]|0,e);i=b;return}}function it(a,b){a=a|0;b=b|0;var c=0,d=0;c=i;d=iu(a,b,0,0)|0;i=c;return d|0}function iu(e,f,g,h){e=e|0;f=f|0;g=g|0;h=h|0;var j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0;j=i;k=e;e=f;f=g;g=h;if((b[k>>1]|0)!=(b[e>>1]|0)){l=0;m=l;i=j;return m|0}h=a[k+4|0]|0;n=a[e+4|0]|0;o=c[k+12>>2]|0;p=c[e+12>>2]|0;while(1){if((bg(a[o]|0)|0)!=0){q=1}else{q=(bg(a[p]|0)|0)!=0}if(!q){break}if((a[o]|0)!=(a[p]|0)){r=8;break}o=o+1|0;p=p+1|0}if((r|0)==8){l=0;m=l;i=j;return m|0}do{if((f|0)==0){if((g|0)!=0){r=13;break}s=0}else{r=13}}while(0);do{if((r|0)==13){if((f|0)<(g|0)){s=a[(c[(c[29326]|0)+(f<<2)>>2]|0)+g|0]|0;break}else{aw(3632,(q=i,i=i+8|0,c[q>>2]=9096,q)|0)|0;i=q;aO(1);return 0}}}while(0);do{if((s|0)<=(d[k+3|0]|0)){if((s|0)>(d[e+3|0]|0)){break}do{if((h|0)==0){if((n|0)!=0){break}L31:while(1){if((a[o]|0)!=0){t=(a[p]|0)!=0}else{t=0}if(!t){r=32;break}do{if((a[o]|0)!=42){if((a[p]|0)==42){break}if((a[o]|0)!=(a[p]|0)){r=30;break L31}if((a[o]|0)==94){r=30;break L31}}}while(0);o=o+1|0;p=p+1|0}if((r|0)==30){l=0;m=l;i=j;return m|0}else if((r|0)==32){l=1;m=l;i=j;return m|0}}}while(0);do{if((h|0)==1){if((n|0)!=2){break}L52:while(1){if((a[o]|0)!=0){u=(a[p]|0)!=0}else{u=0}if(!u){r=45;break}do{if((a[o]|0)!=(a[p]|0)){if((a[o]|0)==42){break}if((a[p]|0)!=94){r=43;break L52}}}while(0);o=o+1|0;p=p+1|0}if((r|0)==43){l=0;m=l;i=j;return m|0}else if((r|0)==45){l=1;m=l;i=j;return m|0}}}while(0);do{if((n|0)==1){if((h|0)!=2){break}L72:while(1){if((a[o]|0)!=0){v=(a[p]|0)!=0}else{v=0}if(!v){r=58;break}do{if((a[o]|0)!=(a[p]|0)){if((a[p]|0)==42){break}if((a[o]|0)!=94){r=56;break L72}}}while(0);o=o+1|0;p=p+1|0}if((r|0)==58){l=1;m=l;i=j;return m|0}else if((r|0)==56){l=0;m=l;i=j;return m|0}}}while(0);l=0;m=l;i=j;return m|0}}while(0);l=0;m=l;i=j;return m|0}function iv(a){a=a|0;c[29326]=c[a+19016>>2];i=i;return}function iw(a){a=a|0;c[29326]=0;i=i;return}function ix(a){a=a|0;var b=0,d=0;b=i;d=a;if((c[d+4>>2]|0)>=10){c[24174]=65536}else{if((c[d+4>>2]|0)>=4){c[24174]=1<<((((c[d+4>>2]|0)-4|0)*6|0|0)/6|0)+4}else{c[24174]=16}}c[24176]=fz(c[24174]<<2)|0;d=0;while(1){if((d|0)>=(c[24174]|0)){break}c[(c[24176]|0)+(d<<2)>>2]=0;d=d+1|0}i=b;return}function iy(a,b,d,e,f){a=a|0;b=b|0;d=d|0;e=e|0;f=f|0;var g=0;g=0;g=g+(g<<1)+(c[96744+((a+g&255)<<2)>>2]|0)|0;g=g+(g<<1)+(c[96744+((b+g&255)<<2)>>2]|0)|0;g=g+(g<<1)+(c[96744+((((d+g|0)%((c[24174]|0)+1|0)|0)&255)<<2)>>2]|0)|0;g=g+(g<<1)+(c[96744+((((e+g|0)%((c[24174]|0)+1|0)|0)&255)<<2)>>2]|0)|0;g=g+(g<<1)+(c[96744+((f+g&255)<<2)>>2]|0)|0;i=i;return g&(c[24174]|0)-1|0}function iz(a){a=a|0;var b=0,d=0,e=0;a=i;b=0;while(1){if((b|0)>=(c[24174]|0)){break}d=c[(c[24176]|0)+(b<<2)>>2]|0;while(1){if((d|0)==0){break}e=c[d+20>>2]|0;fq(d,24);d=e}b=b+1|0}fq(c[24176]|0,c[24174]<<2);i=a;return}function iA(a,d,e,f,g,h){a=a|0;d=d|0;e=e|0;f=f|0;g=g|0;h=h|0;var j=0,k=0;j=i;k=a;a=d;d=e;e=f;f=g;g=fz(24)|0;c[g+16>>2]=h;b[g>>1]=k;b[g+2>>1]=a;c[g+4>>2]=d;c[g+8>>2]=e;b[g+12>>1]=f;h=iy(k,a,d,e,f)|0;c[g+20>>2]=c[(c[24176]|0)+(h<<2)>>2];c[(c[24176]|0)+(h<<2)>>2]=g;i=j;return g|0}function iB(a,d,e,f,g){a=a|0;d=d|0;e=e|0;f=f|0;g=g|0;var h=0,j=0,k=0,l=0,m=0,n=0;h=i;j=a;a=d;d=e;e=f;f=g;g=iy(j,a,d,e,f)|0;k=c[(c[24176]|0)+(g<<2)>>2]|0;L1:while(1){if((k|0)==0){break}do{if((b[k>>1]|0)==(j|0)){if((b[k+2>>1]|0)!=(a|0)){break}if((c[k+4>>2]|0)!=(d|0)){break}if((c[k+8>>2]|0)!=(e|0)){break}if((b[k+12>>1]|0)==(f|0)){l=8;break L1}}}while(0);k=c[k+20>>2]|0}if((l|0)==8){m=k;n=m;i=h;return n|0}do{if((c[29844]|0)!=0){if((eb(c[29844]|0)|0)==0){break}m=iA(j,a,d,e,f,0)|0;n=m;i=h;return n|0}}while(0);m=0;n=m;i=h;return n|0}function iC(a,b,d,e,f){a=a|0;b=b|0;d=d|0;e=e|0;f=f|0;var g=0,h=0,j=0,k=0;g=i;h=iB(a,b,d,e,f)|0;if((h|0)==0){j=-1;k=j;i=g;return k|0}else{j=c[h+16>>2]|0;k=j;i=g;return k|0}return 0}function iD(a,b,d,e,f,g){a=a|0;b=b|0;d=d|0;e=e|0;f=f|0;g=g|0;var h=0,j=0;h=i;j=iB(a,b,d,e,f)|0;if((j|0)!=0){c[j+16>>2]=g;i=h;return}else{aw(3632,(h=i,i=i+8|0,c[h>>2]=6712,h)|0)|0;i=h;aO(1)}}function iE(a,b,c,d,e){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;var f=0,g=0,h=0;f=i;if((iC(a,b,c,d,e)|0)==0){g=0;h=g;i=f;return h|0}else{g=1;h=g;i=f;return h|0}return 0}function iF(b,e,f,g,h){b=b|0;e=e|0;f=f|0;g=g|0;h=h|0;var j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,A=0,B=0;j=i;k=b;b=e;e=f;f=g;g=h;if((g|0)<0){l=0;m=l;i=j;return m|0}h=iB(k,b,e,f,g)|0;if((h|0)!=0){l=c[h+16>>2]|0;m=l;i=j;return m|0}h=iA(k,b,e,f,g,0)|0;if((b|0)==(k+1|0)){do{if((e|0)==0){if((f|0)!=0){n=11;break}if((g|0)!=0){n=11;break}c[h+16>>2]=1}else{n=11}}while(0);if((n|0)==11){c[h+16>>2]=0}l=c[h+16>>2]|0;m=l;i=j;return m|0}do{if((e|0)==0){if((f|0)!=0){break}do{if((c[28754]|0)==0){if((k|0)==-1){break}if((g|0)==((b-k-1+(c[27470]|0)-1|0)/(c[27470]|0)|0|0)){c[h+16>>2]=1}else{c[h+16>>2]=0}l=c[h+16>>2]|0;m=l;i=j;return m|0}}while(0);if((g|0)==0){c[h+16>>2]=0}else{o=0;p=k+1|0;q=c[(c[27746]|0)+(p*76|0)+68>>2]|0;while(1){if((q|0)==0){break}if((c[q+12>>2]|0)==0){o=o+(iF(p,b,c[q+16>>2]|0,0,g-1|0)|0)|0}q=c[q>>2]|0}o=o+(iF(p,b,0,0,g-1|0)|0)|0;c[h+16>>2]=o}l=c[h+16>>2]|0;m=l;i=j;return m|0}}while(0);if((e|0)==0){r=k+1|0}else{r=d[e+2|0]|0}if((f|0)==0){s=b-1|0}else{s=d[f+2|0]|0}o=0;p=r;while(1){if((p|0)>(s|0)){break}r=h5(p,e,k,f,b)|0;n=r;t=r;while(1){if((n|0)==0){break}q=c[n+4>>2]|0;r=0;while(1){if((r|0)>(g|0)){break}u=g-r|0;do{if((e|0)!=0){if((c[q+12>>2]|0)==0){v=0;break}v=(iu(e,c[q+12>>2]|0,k,p)|0)!=0}else{v=0}}while(0);w=v&1;do{if((c[q+16>>2]|0)!=0){if((f|0)==0){x=0;break}x=(iu(c[q+16>>2]|0,f,p,b)|0)!=0}else{x=0}}while(0);y=x&1;z=0;A=0;if((w|0)!=0){z=iE(k,p,c[e+8>>2]|0,c[(c[q+12>>2]|0)+8>>2]|0,r)|0;if((a[e+5|0]|0)!=0){z=z+(iE(k,p,e,c[(c[q+12>>2]|0)+8>>2]|0,r)|0)|0}if((a[(c[q+12>>2]|0)+5|0]|0)!=0){z=z+(iE(k,p,c[e+8>>2]|0,c[q+12>>2]|0,r)|0)|0}do{if((a[e+5|0]|0)!=0){if((a[(c[q+12>>2]|0)+5|0]|0)==0){break}z=z+(iE(k,p,e,c[q+12>>2]|0,r)|0)|0}}while(0)}if((y|0)!=0){A=iE(p,b,c[(c[q+16>>2]|0)+8>>2]|0,c[f+8>>2]|0,u)|0;if((a[(c[q+16>>2]|0)+5|0]|0)!=0){A=A+(iE(p,b,c[q+16>>2]|0,c[f+8>>2]|0,u)|0)|0}if((a[f+5|0]|0)!=0){A=A+(iE(p,b,c[(c[q+16>>2]|0)+8>>2]|0,f,u)|0)|0}do{if((a[(c[q+16>>2]|0)+5|0]|0)!=0){if((a[f+5|0]|0)==0){break}A=A+(iE(p,b,c[q+16>>2]|0,f,u)|0)|0}}while(0)}B=aa(z,A)|0;if((z|0)>0){B=B+(aa(z,iE(p,b,c[q+16>>2]|0,f,u)|0)|0)|0}do{if((e|0)==0){if((A|0)<=0){break}B=B+(aa(A,iE(k,p,e,c[q+12>>2]|0,r)|0)|0)|0}}while(0);if((B|0)!=0){z=0;A=0;if((w|0)!=0){z=iF(k,p,c[e+8>>2]|0,c[(c[q+12>>2]|0)+8>>2]|0,r)|0;if((a[e+5|0]|0)!=0){z=z+(iF(k,p,e,c[(c[q+12>>2]|0)+8>>2]|0,r)|0)|0}if((a[(c[q+12>>2]|0)+5|0]|0)!=0){z=z+(iF(k,p,c[e+8>>2]|0,c[q+12>>2]|0,r)|0)|0}do{if((a[e+5|0]|0)!=0){if((a[(c[q+12>>2]|0)+5|0]|0)==0){break}z=z+(iF(k,p,e,c[q+12>>2]|0,r)|0)|0}}while(0)}if((y|0)!=0){A=iF(p,b,c[(c[q+16>>2]|0)+8>>2]|0,c[f+8>>2]|0,u)|0;if((a[(c[q+16>>2]|0)+5|0]|0)!=0){A=A+(iF(p,b,c[q+16>>2]|0,c[f+8>>2]|0,u)|0)|0}if((a[f+5|0]|0)!=0){A=A+(iF(p,b,c[(c[q+16>>2]|0)+8>>2]|0,f,u)|0)|0}do{if((a[(c[q+16>>2]|0)+5|0]|0)!=0){if((a[f+5|0]|0)==0){break}A=A+(iF(p,b,c[q+16>>2]|0,f,u)|0)|0}}while(0)}o=o+(aa(z,A)|0)|0;if((z|0)>0){o=o+(aa(z,iF(p,b,c[q+16>>2]|0,f,u)|0)|0)|0}do{if((e|0)==0){if((A|0)<=0){break}o=o+(aa(A,iF(k,p,e,c[q+12>>2]|0,r)|0)|0)|0}}while(0)}r=r+1|0}n=c[n>>2]|0}hZ(t);p=p+1|0}c[h+16>>2]=o;l=o;m=l;i=j;return m|0}function iG(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0;e=i;f=a;a=b;b=d;iv(f);c[29844]=c[b+52>>2];c[27746]=f+8;c[29840]=c[f+19012>>2];c[27470]=c[b+20>>2];c[28754]=c[b+24>>2];b=iF(-1,c[f+4>>2]|0,0,0,a+1|0)|0;if((c[24072]|0)>1){aw(5448,(g=i,i=i+16|0,c[g>>2]=a,c[g+8>>2]=b,g)|0)|0;i=g}if((b|0)>=0){c[27746]=0;c[29844]=0;h=b;i=e;return h|0}aw(4736,(g=i,i=i+1|0,i=i+7&-8,c[g>>2]=0,g)|0)|0;i=g;c[27746]=0;c[29844]=0;h=b;i=e;return h|0}function iH(b,e,f,g){b=b|0;e=e|0;f=f|0;g=g|0;var h=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0;h=i;j=b;b=e;e=f;f=g;g=iC(j,b,e,f,0)|0;if((g|0)>=0){k=g;l=k;i=h;return l|0}do{if((e|0)==0){if((f|0)!=0){break}if((a[(c[(c[29840]|0)+(j<<2)>>2]|0)+b|0]|0)==0){break}iA(j,b,e,f,0,1)|0;k=1;l=k;i=h;return l|0}}while(0);if((e|0)==0){m=j+1|0}else{m=d[e+2|0]|0}if((f|0)==0){n=b-1|0}else{n=d[f+2|0]|0}g=0;o=m;while(1){if((o|0)>(n|0)){break}m=h5(o,e,j,f,b)|0;p=m;q=m;while(1){if((p|0)==0){break}m=c[p+4>>2]|0;do{if((e|0)!=0){if((c[m+12>>2]|0)==0){r=0;break}if((bK(e,c[m+12>>2]|0,j,o)|0)==0){r=0;break}do{if((iH(j,o,c[e+8>>2]|0,c[(c[m+12>>2]|0)+8>>2]|0)|0)!=0){s=1}else{if((a[e+5|0]|0)!=0){if((iH(j,o,e,c[(c[m+12>>2]|0)+8>>2]|0)|0)!=0){s=1;break}}if((a[(c[m+12>>2]|0)+5|0]|0)!=0){if((iH(j,o,c[e+8>>2]|0,c[m+12>>2]|0)|0)!=0){s=1;break}}do{if((a[e+5|0]|0)!=0){if((a[(c[m+12>>2]|0)+5|0]|0)==0){t=0;break}t=(iH(j,o,e,c[m+12>>2]|0)|0)!=0}else{t=0}}while(0);s=t}}while(0);r=s}else{r=0}}while(0);u=r&1;if((u|0)!=0){if((iH(o,b,c[m+16>>2]|0,f)|0)!=0){v=32;break}}do{if((c[m+16>>2]|0)!=0){if((f|0)==0){w=0;break}if((bK(c[m+16>>2]|0,f,o,b)|0)==0){w=0;break}do{if((iH(o,b,c[(c[m+16>>2]|0)+8>>2]|0,c[f+8>>2]|0)|0)!=0){x=1}else{if((a[(c[m+16>>2]|0)+5|0]|0)!=0){if((iH(o,b,c[m+16>>2]|0,c[f+8>>2]|0)|0)!=0){x=1;break}}if((a[f+5|0]|0)!=0){if((iH(o,b,c[(c[m+16>>2]|0)+8>>2]|0,f)|0)!=0){x=1;break}}do{if((a[(c[m+16>>2]|0)+5|0]|0)!=0){if((a[f+5|0]|0)==0){y=0;break}y=(iH(o,b,c[m+16>>2]|0,f)|0)!=0}else{y=0}}while(0);x=y}}while(0);w=x}else{w=0}}while(0);z=w&1;if((u|0)!=0){if((z|0)!=0){v=50;break}}if((z|0)!=0){if((iH(j,o,e,c[m+12>>2]|0)|0)!=0){v=50;break}}p=c[p>>2]|0}if((v|0)==32){v=0;g=1}else if((v|0)==50){v=0;g=1}hZ(q);if((g|0)!=0){v=54;break}o=o+1|0}iA(j,b,e,f,0,g)|0;k=g;l=k;i=h;return l|0}function iI(b,e,f,g){b=b|0;e=e|0;f=f|0;g=g|0;var h=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0;h=i;j=b;b=e;e=f;f=g;g=iH(j,b,e,f)|0;do{if((g|0)!=0){if((g|0)==2){break}iD(j,b,e,f,0,2);do{if((e|0)==0){if((f|0)!=0){break}if((c[27464]|0)==0){break}if((b|0)==(j+1|0)){break}k=j+1|0;l=c[(c[27746]|0)+(k*76|0)+68>>2]|0;while(1){if((l|0)==0){break}do{if((c[l+12>>2]|0)==0){if((iH(k,b,c[l+16>>2]|0,0)|0)==0){break}a[l+6|0]=1;iI(k,b,c[l+16>>2]|0,0)}}while(0);l=c[l>>2]|0}iI(k,b,0,0);i=h;return}}while(0);if((e|0)==0){m=j+1|0}else{m=d[e+2|0]|0}if((f|0)==0){n=b-1|0}else{n=d[f+2|0]|0}k=m;while(1){if((k|0)>(n|0)){break}o=h5(k,e,j,f,b)|0;p=o;q=o;while(1){if((p|0)==0){break}l=c[p+4>>2]|0;do{if((e|0)!=0){if((c[l+12>>2]|0)==0){r=0;break}if((bK(e,c[l+12>>2]|0,j,k)|0)==0){r=0;break}do{if((iH(j,k,c[e+8>>2]|0,c[(c[l+12>>2]|0)+8>>2]|0)|0)!=0){s=1}else{if((a[e+5|0]|0)!=0){if((iH(j,k,e,c[(c[l+12>>2]|0)+8>>2]|0)|0)!=0){s=1;break}}if((a[(c[l+12>>2]|0)+5|0]|0)!=0){if((iH(j,k,c[e+8>>2]|0,c[l+12>>2]|0)|0)!=0){s=1;break}}do{if((a[e+5|0]|0)!=0){if((a[(c[l+12>>2]|0)+5|0]|0)==0){t=0;break}t=(iH(j,k,e,c[l+12>>2]|0)|0)!=0}else{t=0}}while(0);s=t}}while(0);r=s}else{r=0}}while(0);o=r&1;do{if((c[l+16>>2]|0)!=0){if((f|0)==0){u=0;break}if((bK(c[l+16>>2]|0,f,k,b)|0)==0){u=0;break}do{if((iH(k,b,c[(c[l+16>>2]|0)+8>>2]|0,c[f+8>>2]|0)|0)!=0){v=1}else{if((a[(c[l+16>>2]|0)+5|0]|0)!=0){if((iH(k,b,c[l+16>>2]|0,c[f+8>>2]|0)|0)!=0){v=1;break}}if((a[f+5|0]|0)!=0){if((iH(k,b,c[(c[l+16>>2]|0)+8>>2]|0,f)|0)!=0){v=1;break}}do{if((a[(c[l+16>>2]|0)+5|0]|0)!=0){if((a[f+5|0]|0)==0){w=0;break}w=(iH(k,b,c[l+16>>2]|0,f)|0)!=0}else{w=0}}while(0);v=w}}while(0);u=v}else{u=0}}while(0);x=u&1;do{if((o|0)!=0){if((iH(k,b,c[l+16>>2]|0,f)|0)==0){break}a[l+6|0]=1;iI(k,b,c[l+16>>2]|0,f);iI(j,k,c[e+8>>2]|0,c[(c[l+12>>2]|0)+8>>2]|0);if((a[e+5|0]|0)!=0){iI(j,k,e,c[(c[l+12>>2]|0)+8>>2]|0)}if((a[(c[l+12>>2]|0)+5|0]|0)!=0){iI(j,k,c[e+8>>2]|0,c[l+12>>2]|0)}do{if((a[e+5|0]|0)!=0){if((a[(c[l+12>>2]|0)+5|0]|0)==0){break}iI(j,k,e,c[l+12>>2]|0)}}while(0)}}while(0);do{if((x|0)!=0){if((iH(j,k,e,c[l+12>>2]|0)|0)==0){break}a[l+6|0]=1;iI(j,k,e,c[l+12>>2]|0);iI(k,b,c[(c[l+16>>2]|0)+8>>2]|0,c[f+8>>2]|0);if((a[(c[l+16>>2]|0)+5|0]|0)!=0){iI(k,b,c[l+16>>2]|0,c[f+8>>2]|0)}if((a[f+5|0]|0)!=0){iI(k,b,c[(c[l+16>>2]|0)+8>>2]|0,f)}do{if((a[(c[l+16>>2]|0)+5|0]|0)!=0){if((a[f+5|0]|0)==0){break}iI(k,b,c[l+16>>2]|0,f)}}while(0)}}while(0);do{if((o|0)!=0){if((x|0)==0){break}a[l+6|0]=1;iI(j,k,c[e+8>>2]|0,c[(c[l+12>>2]|0)+8>>2]|0);if((a[e+5|0]|0)!=0){iI(j,k,e,c[(c[l+12>>2]|0)+8>>2]|0)}if((a[(c[l+12>>2]|0)+5|0]|0)!=0){iI(j,k,c[e+8>>2]|0,c[l+12>>2]|0)}do{if((a[e+5|0]|0)!=0){if((a[(c[l+12>>2]|0)+5|0]|0)==0){break}iI(j,k,e,c[l+12>>2]|0)}}while(0);iI(k,b,c[(c[l+16>>2]|0)+8>>2]|0,c[f+8>>2]|0);if((a[(c[l+16>>2]|0)+5|0]|0)!=0){iI(k,b,c[l+16>>2]|0,c[f+8>>2]|0)}if((a[f+5|0]|0)!=0){iI(k,b,c[(c[l+16>>2]|0)+8>>2]|0,f)}do{if((a[(c[l+16>>2]|0)+5|0]|0)!=0){if((a[f+5|0]|0)==0){break}iI(k,b,c[l+16>>2]|0,f)}}while(0)}}while(0);p=c[p>>2]|0}hZ(q);k=k+1|0}i=h;return}}while(0);i=h;return}function iJ(b){b=b|0;var d=0,e=0,f=0,g=0,h=0;d=i;e=b;b=0;while(1){if((b|0)>=(c[e+4>>2]|0)){break}f=0;g=c[e+8+(b*76|0)+68>>2]|0;while(1){if((g|0)==0){break}h=c[g>>2]|0;if((a[g+6|0]|0)!=0){c[g>>2]=f;f=g}else{c[g>>2]=0;fr(g)}g=h}c[e+8+(b*76|0)+68>>2]=f;b=b+1|0}i=d;return}function iK(b,d){b=b|0;d=d|0;var e=0,f=0,g=0,h=0,j=0,k=0,l=0;e=i;f=b;b=d;c[29844]=c[b+52>>2];c[29840]=c[f+19012>>2];iv(f);d=0;while(1){if((d|0)>=(c[f+4>>2]|0)){break}g=c[f+8+(d*76|0)+68>>2]|0;while(1){if((g|0)==0){break}a[g+6|0]=0;g=c[g>>2]|0}d=d+1|0}h4(f);ix(f);c[27746]=f+8;c[27464]=(c[b+12>>2]|0)>0;if((c[27464]|0)!=0){iI(-1,c[f+4>>2]|0,0,0);h=f;iJ(h);j=f;h$(j);k=f;iz(k);c[27746]=0;c[29844]=0;c[29840]=0;l=f;iw(l);i=e;return}d=0;while(1){if((d|0)>=(c[f+4>>2]|0)){break}if((a[(c[(c[29840]|0)-4>>2]|0)+d|0]|0)!=0){g=c[f+8+(d*76|0)+68>>2]|0;while(1){if((g|0)==0){break}do{if((c[g+12>>2]|0)==0){if((iH(d,c[f+4>>2]|0,c[g+16>>2]|0,0)|0)==0){break}iI(d,c[f+4>>2]|0,c[g+16>>2]|0,0);a[g+6|0]=1}}while(0);g=c[g>>2]|0}}d=d+1|0}h=f;iJ(h);j=f;h$(j);k=f;iz(k);c[27746]=0;c[29844]=0;c[29840]=0;l=f;iw(l);i=e;return}function iL(a){a=a|0;var b=0,d=0;b=i;d=a;while(1){if((d|0)==0){break}a=c[d+4>>2]|0;fq(d,12);d=a}i=b;return}function iM(a){a=a|0;var b=0,d=0;b=i;d=a;while(1){if((d|0)==0){break}a=c[d>>2]|0;iL(c[d+12>>2]|0);fq(d,16);d=a}i=b;return}function iN(a){a=a|0;var b=0,d=0,e=0;b=i;d=a;a=0;while(1){if((d|0)==0){break}e=c[d+4>>2]|0;c[d+4>>2]=a;a=d;d=e}i=b;return a|0}function iO(a){a=a|0;var b=0,d=0,e=0;b=i;d=a;a=0;while(1){if((d|0)==0){break}e=c[d+8>>2]|0;c[d+8>>2]=a;a=d;d=e}i=b;return a|0}function iP(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0;d=i;e=a;a=b;b=0;while(1){if((e|0)==0){break}f=fz(12)|0;g=f;h=e;c[g>>2]=c[h>>2];c[g+4>>2]=c[h+4>>2];c[g+8>>2]=c[h+8>>2];c[f+4>>2]=b;b=f;e=c[e+4>>2]|0}while(1){if((a|0)==0){break}f=fz(12)|0;e=f;h=a;c[e>>2]=c[h>>2];c[e+4>>2]=c[h+4>>2];c[e+8>>2]=c[h+8>>2];c[f+4>>2]=b;b=f;a=c[a+4>>2]|0}a=iN(b)|0;i=d;return a|0}function iQ(b){b=b|0;var d=0,e=0;d=i;e=b;b=fz(12)|0;c[b+8>>2]=c[e+4>>2];a[b|0]=a[e+3|0]|0;a[b+1|0]=a[e+2|0]|0;c[b+4>>2]=0;i=d;return b|0}function iR(b,e){b=b|0;e=e|0;var f=0,g=0,h=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0;f=i;g=b;b=e;e=0;if((g|0)==0){aw(3448,(h=i,i=i+8|0,c[h>>2]=8960,h)|0)|0;i=h;aO(1);return 0}if((a[g|0]|0)==1){j=fz(16)|0;c[j+12>>2]=0;c[j>>2]=0;c[j+4>>2]=0;c[j+8>>2]=0;k=c[g+4>>2]|0;while(1){if((k|0)==0){break}l=iR(c[k+4>>2]|0,b)|0;m=0;n=j;while(1){if((n|0)==0){break}o=l;while(1){if((o|0)==0){break}e=fz(16)|0;c[e+4>>2]=(c[n+4>>2]|0)+(c[o+4>>2]|0);if((c[n+8>>2]|0)>(c[o+8>>2]|0)){p=c[n+8>>2]|0}else{p=c[o+8>>2]|0}c[e+8>>2]=p;c[e+12>>2]=iP(c[n+12>>2]|0,c[o+12>>2]|0)|0;c[e>>2]=m;m=e;o=c[o>>2]|0}n=c[n>>2]|0}iM(j);iM(l);j=m;k=c[k>>2]|0}e=j}else{if((a[g|0]|0)==0){e=0;k=c[g+4>>2]|0;while(1){if((k|0)==0){break}j=iR(c[k+4>>2]|0,b)|0;while(1){if((j|0)==0){break}n=c[j>>2]|0;c[j>>2]=e;e=j;j=n}k=c[k>>2]|0}}else{if((a[g|0]|0)!=2){aw(3448,(h=i,i=i+8|0,c[h>>2]=6640,h)|0)|0;i=h;aO(1);return 0}e=fz(16)|0;c[e+12>>2]=iQ(g)|0;c[e+4>>2]=0;c[e+8>>2]=0;c[e>>2]=0}}j=e;while(1){if((j|0)==0){break}h=j+4|0;c[h>>2]=(c[h>>2]|0)+(d[g+1|0]|0);h=j+8|0;c[h>>2]=(c[h>>2]|0)+(d[g+1|0]|0);j=c[j>>2]|0}i=f;return e|0}function iS(d,e){d=d|0;e=e|0;var f=0,g=0,h=0,j=0;f=i;g=d;d=e;if((g|0)==0){h=0;j=h;i=f;return j|0}if((a[g+1|0]|0)==(d|0)){e=fs(fz(16)|0)|0;c[e+8>>2]=iS(c[g+4>>2]|0,d)|0;a[e+5|0]=a[g|0]|0;c[e+12>>2]=c[g+8>>2];b[e>>1]=-1;a[e+4|0]=0;a[e+2|0]=0;h=e;j=h;i=f;return j|0}else{h=iS(c[g+4>>2]|0,d)|0;j=h;i=f;return j|0}return 0}function iT(a,d,e){a=a|0;d=d|0;e=e|0;var f=0,g=0,h=0;f=i;g=a;a=d;d=e;e=0;while(1){if((g|0)==0){break}if((c[g+8>>2]|0)<=(d|0)){h=fz(20)|0;c[h+12>>2]=iO(iS(c[g+12>>2]|0,45)|0)|0;c[h+16>>2]=iO(iS(c[g+12>>2]|0,43)|0)|0;c[h+8>>2]=a;b[h+4>>1]=c[g+4>>2];c[h>>2]=e;e=h}g=c[g>>2]|0}i=f;return e|0}function iU(a,b){a=a|0;b=b|0;var d=0,e=0,f=0;d=i;e=a;a=b;b=iR(c[e+4>>2]|0,a)|0;f=iT(b,c[e>>2]|0,a)|0;iM(b);i=d;return f|0}function iV(a){a=a|0;var b=0,d=0,e=0;b=i;d=a;a=iR(c[d+8>>2]|0,1e3)|0;e=iT(a,c[d>>2]|0,1e3)|0;iM(a);i=b;return e|0}function iW(a,b){a=a|0;b=b|0;var d=0,e=0;d=i;e=gF(c[a>>2]|0,b)|0;b=0;while(1){if((e|0)==0){break}a=fz(12)|0;c[a+8>>2]=b;b=a;c[b+4>>2]=fy(c[e+8>>2]|0)|0;c[b>>2]=c[e>>2];e=c[e+16>>2]|0}i=d;return b|0}function iX(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0;d=i;e=a;a=b;b=0;while(1){if((b|0)>=(c[e+4>>2]|0)){break}f=0;g=c[e+8+(b*76|0)+64>>2]|0;while(1){if((g|0)==0){break}f=fJ(iU(g,a)|0,f)|0;g=c[g+8>>2]|0}c[e+8+(b*76|0)+68>>2]=f;b=b+1|0}i=d;return}function iY(b,d,e){b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,j=0,k=0,l=0,m=0,n=0,o=0;f=i;g=b;b=d;d=e;e=b;while(1){if((e|0)>=(b+d|0)){break}if((df(3336,c[119400+(e*40|0)>>2]|0)|0)==1){h=5}else{if((df(8944,c[119400+(e*40|0)>>2]|0)|0)==1){h=5}}if((h|0)==5){h=0;j=0;k=(c[119384+(e*40|0)>>2]|0)-1|0;while(1){if((j|0)==0){l=(k|0)>=0}else{l=0}if(!l){break}m=b;L14:while(1){if((m|0)>=(b+d|0)){break}do{if((c[119384+(m*40|0)>>2]|0)==(k|0)){if((c[119388+(m*40|0)>>2]|0)<(c[119388+(e*40|0)>>2]|0)){h=13;break}if((bi(c[119392+(m*40|0)>>2]|0,6624)|0)==0){h=16;break L14}if((bi(c[119392+(m*40|0)>>2]|0,5424)|0)==0){h=16;break L14}if((a[119396+(m*40|0)|0]|0)==118){h=19}else{if((a[119396+(m*40|0)|0]|0)==97){h=19}}if((h|0)==19){h=0;n=(c[119384+(e*40|0)>>2]|0)-1|0;while(1){if((c[78288+((c[g+1036>>2]|0)*1e3|0)+(n<<2)>>2]|0)==1){break}n=n-1|0}c[119388+(m*40|0)>>2]=n;if((c[24072]|0)>=2){aw(4696,(o=i,i=i+8|0,c[o>>2]=m,o)|0)|0;i=o}iZ(g,m)}}else{h=13}}while(0);if((h|0)==13){h=0}m=m+1|0}if((h|0)==16){h=0;j=1}k=k-1|0}if((bi(c[(c[g+4>>2]|0)+(c[119384+(e*40|0)>>2]<<2)>>2]|0,4136)|0)==0){k=119384+(e*40|0)|0;c[k>>2]=(c[k>>2]|0)+1}}e=e+1|0}i=f;return}function iZ(b,d){b=b|0;d=d|0;var e=0,f=0,g=0,h=0,j=0,k=0;e=i;f=b;b=d;if((c[24072]|0)<2){i=e;return}d=c[119392+(b*40|0)>>2]|0;g=a[119396+(b*40|0)|0]|0;h=c[119384+(b*40|0)>>2]|0;j=c[119388+(b*40|0)>>2]|0;aw(1808,(k=i,i=i+40|0,c[k>>2]=b,c[k+8>>2]=d,c[k+16>>2]=g,c[k+24>>2]=h,c[k+32>>2]=j,k)|0)|0;i=k;j=c[119384+(b*40|0)>>2]|0;while(1){if((j|0)>(c[119388+(b*40|0)>>2]|0)){break}aw(7896,(k=i,i=i+8|0,c[k>>2]=c[(c[f+4>>2]|0)+(j<<2)>>2],k)|0)|0;i=k;j=j+1|0}aw(10440,(k=i,i=i+1|0,i=i+7&-8,c[k>>2]=0,k)|0)|0;i=k;i=e;return}function i_(b){b=b|0;var c=0,d=0,e=0,f=0;c=i;d=b;do{if((a[d|0]|0)==91){if((jr(d|0)|0)>>>0<=1>>>0){break}e=0;f=e;i=c;return f|0}}while(0);do{if((jr(d|0)|0)>>>0>1>>>0){if((a[d+((jr(d|0)|0)-1)|0]|0)!=93){break}e=1;f=e;i=c;return f|0}}while(0);e=2;f=e;i=c;return f|0}function i$(a){a=a|0;var b=0,d=0;b=i;d=a;a=fD(20)|0;c[a>>2]=fD((jr(d|0)|0)+1|0)|0;ju(c[a>>2]|0,d|0)|0;c[a+8>>2]=0;c[a+4>>2]=0;c[a+8>>2]=0;c[a+16>>2]=-1;c[a+12>>2]=-1;i=b;return a|0}function i0(b){b=b|0;var d=0,e=0,f=0,g=0,h=0,j=0,k=0;d=i;e=b;b=0;while(1){f=a7(0,3384)|0;g=f;if((f|0)==0){h=14;break}f=i_(g)|0;if((f|0)==1){h=4;break}else if((f|0)==2){j=i$(g)|0}else if((f|0)==0){j=i$(g+1|0)|0;j=i0(j)|0}else{h=9;break}if((c[e+4>>2]|0)==0){f=j;c[e+4>>2]=f;b=f}else{c[b+8>>2]=j;b=j}}if((h|0)==4){a[g+((jr(g|0)|0)-1)|0]=0;if((bi(g|0,c[e>>2]|0)|0)==0){i=d;return e|0}else{aw(2816,(k=i,i=i+8|0,c[k>>2]=2192,k)|0)|0;i=k;aO(1);return 0}}else if((h|0)==14){aw(2816,(k=i,i=i+8|0,c[k>>2]=11168,k)|0)|0;i=k;aO(1);return 0}else if((h|0)==9){aw(2816,(k=i,i=i+8|0,c[k>>2]=1720,k)|0)|0;i=k;aO(1);return 0}return 0}function i1(a){a=a|0;var b=0,d=0;b=i;c[27752]=i2(a)|0;a=jr(c[27752]|0)|0;c[27750]=a7(c[27752]|0,3384)|0;if((i_(c[27750]|0)|0)==0){d=i$((c[27750]|0)+1|0)|0;d=i0(d)|0;i3(d,0)|0;fE(c[27752]|0,a+1|0);i=b;return d|0}else{aw(2816,(d=i,i=i+8|0,c[d>>2]=10712,d)|0)|0;i=d;aO(1);return 0}return 0}function i2(a){a=a|0;var b=0,d=0,e=0,f=0,g=0;b=i;d=a;hA(d)|0;c[25718]=eQ()|0;a=c[(c[c[d+1048>>2]>>2]|0)+60>>2]|0;e=0;i7(d);f=c[d+1032>>2]|0;if((f|0)>16){f=16;if((c[24072]|0)>=2){aw(8584,(g=i,i=i+8|0,c[g>>2]=16,g)|0)|0;i=g}}do{if((c[d+1044>>2]|0)==1){if((f|0)<=1){break}f=f-1|0}}while(0);g=0;while(1){if((g|0)>=(f|0)){break}hq(d,g)|0;hp(d,a);hu(d)|0;i8(d);e=e+(i9(d,e,g)|0)|0;g=g+1|0}e=ja(d,e)|0;e=jb(d,e)|0;g=jc(d,e)|0;eU(c[25718]|0);i=b;return g|0}function i3(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0;d=i;e=a;a=b;b=0;f=0;if((e|0)==0){g=0;h=g;i=d;return h|0}c[e+12>>2]=a;if((c[e+4>>2]|0)==0){c[e+16>>2]=a;g=1;h=g;i=d;return h|0}f=c[e+4>>2]|0;while(1){if((f|0)==0){break}b=b+(i3(f,a+b|0)|0)|0;f=c[f+8>>2]|0}c[e+16>>2]=a+b-1;g=b;h=g;i=d;return h|0}function i4(a){a=a|0;var b=0,d=0,e=0;b=i;d=a;a=c[d+4>>2]|0;while(1){if((a|0)==0){break}e=c[a+8>>2]|0;i4(a);a=e}a=c[d>>2]|0;fE(a,(jr(c[d>>2]|0)|0)+1|0);fE(d,20);i=b;return}function i5(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0,j=0;d=i;e=a;a=b;do{if((a|0)!=0){if((c[(c[c[e+1048>>2]>>2]|0)+60>>2]|0)==0){break}do{if((a|0)!=1){if((a|0)==3){break}if((a|0)==2){f=i2(e)|0;g=f;i=d;return g|0}aw(2816,(h=i,i=i+8|0,c[h>>2]=9968,h)|0)|0;i=h;aO(1);return 0}}while(0);b=jk()|0;j=i1(e)|0;i6(b,(a|0)==1|0,j,0,0);i4(j);jl(b,10440,(h=i,i=i+1|0,i=i+7&-8,c[h>>2]=0,h)|0)|0;i=h;j=fD((jr(c[b+4>>2]|0)|0)+1|0)|0;ju(j|0,c[b+4>>2]|0)|0;fE(c[b+4>>2]|0,c[b>>2]|0);fE(b,12);f=j;g=f;i=d;return g|0}}while(0);f=0;g=f;i=d;return g|0}function i6(a,b,d,e,f){a=a|0;b=b|0;d=d|0;e=e|0;f=f|0;var g=0,h=0,j=0,k=0;g=i;h=a;a=b;b=d;d=e;e=f;if((b|0)==0){i=g;return}if((a|0)!=0){j=0;while(1){if((j|0)>=(d|0)){break}jl(h,3384,(k=i,i=i+1|0,i=i+7&-8,c[k>>2]=0,k)|0)|0;i=k;j=j+1|0}}jl(h,9544,(k=i,i=i+8|0,c[k>>2]=c[b>>2],k)|0)|0;i=k;d=e+(jr(c[b>>2]|0)|0)+2|0;e=c[b+4>>2]|0;while(1){if((e|0)==0){break}if((c[e+4>>2]|0)==0){jl(h,9408,(k=i,i=i+8|0,c[k>>2]=c[e>>2],k)|0)|0;i=k;do{if((c[e+8>>2]|0)!=0){if((c[(c[e+8>>2]|0)+4>>2]|0)!=0){break}jl(h,3384,(k=i,i=i+1|0,i=i+7&-8,c[k>>2]=0,k)|0)|0;i=k}}while(0)}else{if((e|0)!=(c[b+4>>2]|0)){if((a|0)!=0){jl(h,10440,(k=i,i=i+1|0,i=i+7&-8,c[k>>2]=0,k)|0)|0;i=k}else{jl(h,3384,(k=i,i=i+1|0,i=i+7&-8,c[k>>2]=0,k)|0)|0;i=k}i6(h,a,e,d,d)}else{i6(h,a,e,0,d)}do{if((c[e+8>>2]|0)!=0){if((c[(c[e+8>>2]|0)+4>>2]|0)!=0){break}if((a|0)!=0){jl(h,10440,(k=i,i=i+1|0,i=i+7&-8,c[k>>2]=0,k)|0)|0;i=k;j=0;while(1){if((j|0)>=(d|0)){break}jl(h,3384,(k=i,i=i+1|0,i=i+7&-8,c[k>>2]=0,k)|0)|0;i=k;j=j+1|0}}else{jl(h,3384,(k=i,i=i+1|0,i=i+7&-8,c[k>>2]=0,k)|0)|0;i=k}}}while(0)}e=c[e+8>>2]|0}jl(h,8952,(k=i,i=i+1|0,i=i+7&-8,c[k>>2]=0,k)|0)|0;i=k;i=g;return}function i7(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0;b=i;d=a;a=c[d+1032>>2]|0;do{if((c[d+1044>>2]|0)==1){if((a|0)<=1){break}a=a-1|0}}while(0);if((c[24072]|0)>=2){aw(2104,(e=i,i=i+8|0,c[e>>2]=a,e)|0)|0;i=e}f=0;while(1){if((f|0)>=(a|0)){break}g=0;while(1){if((g|0)>=(c[d>>2]|0)){break}c[78288+(f*1e3|0)+(g<<2)>>2]=0;g=g+1|0}c[d+1036>>2]=f;h=0;while(1){if((h|0)>=(hv(d)|0)){break}c[78288+(f*1e3|0)+((hx(d,h)|0)<<2)>>2]=1;c[78288+(f*1e3|0)+((hy(d,h)|0)<<2)>>2]=1;h=h+1|0}if((c[24072]|0)>=2){aw(1992,(e=i,i=i+8|0,c[e>>2]=f,e)|0)|0;i=e;g=0;while(1){if((g|0)>=(c[d>>2]|0)){break}if((c[78288+(f*1e3|0)+(g<<2)>>2]|0)==0){aw(1904,(e=i,i=i+1|0,i=i+7&-8,c[e>>2]=0,e)|0)|0;i=e}if((c[78288+(f*1e3|0)+(g<<2)>>2]|0)==1){aw(1880,(e=i,i=i+1|0,i=i+7&-8,c[e>>2]=0,e)|0)|0;i=e}g=g+1|0}aw(10440,(e=i,i=i+1|0,i=i+7&-8,c[e>>2]=0,e)|0)|0;i=e}f=f+1|0}i=b;return}function i8(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,j=0,k=0;b=i;d=a;a=0;while(1){if((a|0)>=(c[d>>2]|0)){break}c[77288+(a<<2)>>2]=0;a=a+1|0}e=0;while(1){if((e|0)>=(hv(d)|0)){break}a=hy(d,e)|0;f=hz(d,e)|0;do{if((jd(f,6624)|0)==0){g=10}else{if((jd(f,3320)|0)==0){g=10;break}if((jd(f,3288)|0)==0){g=10}}}while(0);if((g|0)==10){g=0;c[77288+(a<<2)>>2]=1;h=0;while(1){if((h|0)>=(hv(d)|0)){break}j=hx(d,h)|0;k=hz(d,h)|0;L17:do{if((a|0)==(j|0)){do{if((df(2272,k)|0)!=1){if((jd(k,2184)|0)==0){break}if((jd(k,3696)|0)==0){break}if((df(2176,k)|0)!=1){break L17}}}while(0);c[77288+(a<<2)>>2]=2}}while(0);h=h+1|0}}if((df(2168,f)|0)==1){c[77288+(a<<2)>>2]=3;h=0;while(1){if((h|0)>=(hv(d)|0)){break}j=hx(d,h)|0;k=hz(d,h)|0;do{if((a|0)==(j|0)){if((df(2136,k)|0)!=1){break}c[77288+(a<<2)>>2]=4}}while(0);h=h+1|0}}if((df(4144,f)|0)==1){c[77288+(a<<2)>>2]=4}if((df(4120,f)|0)==1){c[77288+(a<<2)>>2]=4}e=e+1|0}i=b;return}function i9(b,d,e){b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0;f=i;i=i+40|0;g=f|0;h=f+8|0;j=b;b=d;d=0;c[25448]=(c[j>>2]|0)-2;k=(c[j+1040>>2]|0)+(e*14944|0)|0;e=0;c[g>>2]=b;while(1){if((e|0)>=(c[k+16>>2]|0)){break}l=h;m=k+1024+(e*28|0)|0;c[l>>2]=c[m>>2];c[l+4>>2]=c[m+4>>2];c[l+8>>2]=c[m+8>>2];c[l+12>>2]=c[m+12>>2];c[l+16>>2]=c[m+16>>2];c[l+20>>2]=c[m+20>>2];c[l+24>>2]=c[m+24>>2];hy(j,c[h+12>>2]|0)|0;m=hx(j,c[h+12>>2]|0)|0;do{if((c[h+16>>2]|0)==99){n=10}else{if((c[h+16>>2]|0)==100){n=10;break}if((c[h+16>>2]|0)==101){n=10;break}if((c[h+16>>2]|0)==102){n=10;break}if((c[h+16>>2]|0)==103){n=10;break}if((c[h+16>>2]|0)==117){n=10;break}if((c[h+16>>2]|0)==121){n=10;break}o=(hx(j,c[h+12>>2]|0)|0)+1|0;p=hy(j,c[h+12>>2]|0)|0;q=hy(j,c[h+12>>2]|0)|0}}while(0);if((n|0)==10){n=0;o=0;p=hx(j,c[h+12>>2]|0)|0;q=hx(j,c[h+12>>2]|0)|0}l=c[h+8>>2]|0;while(1){if((l|0)==0){break}r=c[l>>2]|0;do{if((hx(j,r)|0)<(p|0)){if((hx(j,r)|0)<(o|0)){break}p=hx(j,r)|0}}while(0);if((hy(j,r)|0)>(q|0)){q=hy(j,r)|0}l=c[l+12>>2]|0}c[g>>2]=(c[g>>2]|0)-1;jf(g,j,h,p,q,jg(c[h+16>>2]|0)|0);if((c[h+16>>2]|0)==122){jf(g,j,h,p,q,6624)}if((c[h+16>>2]|0)==99){jf(g,j,h,p,q,6624)}if((df(4936,c[119400+((c[g>>2]|0)*40|0)>>2]|0)|0)==1){n=27}else{if((df(4872,c[119400+((c[g>>2]|0)*40|0)>>2]|0)|0)==1){n=27}}if((n|0)==27){n=0;jf(g,j,h,p,q,4864)}if((df(4728,c[119400+((c[g>>2]|0)*40|0)>>2]|0)|0)==1){n=30}else{if((df(4688,c[119400+((c[g>>2]|0)*40|0)>>2]|0)|0)==1){n=30}}if((n|0)==30){n=0;s=p;if((bi(c[(c[j+4>>2]|0)+(s<<2)>>2]|0,4136)|0)==0){s=s+1|0}jf(g,j,h,s,s,4672)}if((df(4632,c[119400+((c[g>>2]|0)*40|0)>>2]|0)|0)==1){s=p;if((bi(c[(c[j+4>>2]|0)+(s<<2)>>2]|0,4136)|0)==0){s=s+1|0}jf(g,j,h,s,s+1|0,4592);jf(g,j,h,s+1|0,s+1|0,4672)}if((df(4472,c[119400+((c[g>>2]|0)*40|0)>>2]|0)|0)==1){n=39}else{if((df(4416,c[119400+((c[g>>2]|0)*40|0)>>2]|0)|0)==1){n=39}}if((n|0)==39){n=0;jf(g,j,h,m,m,4672);jf(g,j,h,m,c[119388+(((c[g>>2]|0)-1|0)*40|0)>>2]|0,4864)}if((df(7488,c[119400+((c[g>>2]|0)*40|0)>>2]|0)|0)==1){if((bi(c[(c[j+4>>2]|0)+(p<<2)>>2]|0,4136)|0)==0){l=119384+((c[g>>2]|0)*40|0)|0;c[l>>2]=(c[l>>2]|0)+1}jf(g,j,h,1,(c[j>>2]|0)-1|0,6624)}if((df(3336,c[119400+((c[g>>2]|0)*40|0)>>2]|0)|0)==1){n=46}else{if((c[h+16>>2]|0)==102){n=46}}if((n|0)==46){n=0;s=c[119384+((c[g>>2]|0)*40|0)>>2]|0;if((bi(c[(c[j+4>>2]|0)+(s<<2)>>2]|0,4136)|0)==0){s=s+1|0}if((bi(c[(c[j+4>>2]|0)+(s<<2)>>2]|0,4384)|0)==0){jf(g,j,h,s,s,4208)}}if((c[h+16>>2]|0)==116){jf(g,j,h,p,q,6624)}do{if((df(4200,c[119400+((c[g>>2]|0)*40|0)>>2]|0)|0)==1){n=56}else{if((df(4144,c[119400+((c[g>>2]|0)*40|0)>>2]|0)|0)==1){n=56;break}if((df(4120,c[119400+((c[g>>2]|0)*40|0)>>2]|0)|0)==1){n=56}}}while(0);if((n|0)==56){n=0;s=p;if((bi(c[(c[j+4>>2]|0)+(s<<2)>>2]|0,4136)|0)==0){s=s+1|0}if((c[77288+(s<<2)>>2]|0)==0){t=4208}else{if((c[77288+(s<<2)>>2]|0)==3){t=4672}else{if((c[77288+(s<<2)>>2]|0)!=4){n=64;break}t=4672}}jf(g,j,h,s,s,t);if((c[77288+(s<<2)>>2]|0)==4){m=s+1|0;while(1){if((m|0)>=((c[25448]|0)-1|0)){break}if((c[77288+(m<<2)>>2]|0)==1){n=72;break}if((c[77288+(m<<2)>>2]|0)==2){n=72;break}m=m+1|0}if((n|0)==72){n=0}c[119388+((c[g>>2]|0)*40|0)>>2]=m-1;jf(g,j,h,m,q,6624)}}if((a[119396+((c[g>>2]|0)*40|0)|0]|0)==0){fk(4040,(u=i,i=i+1|0,i=i+7&-8,c[u>>2]=0,u)|0);i=u}if((c[119400+((c[g>>2]|0)*40|0)>>2]|0)==0){fk(3960,(u=i,i=i+1|0,i=i+7&-8,c[u>>2]=0,u)|0);i=u}e=e+1|0;c[g>>2]=(c[g>>2]|0)+1}if((n|0)==64){aw(2816,(u=i,i=i+8|0,c[u>>2]=4096,u)|0)|0;i=u;aO(1);return 0}d=(c[g>>2]|0)-b|0;if((c[24072]|0)>=2){aw(3776,(u=i,i=i+8|0,c[u>>2]=c[j+1036>>2],u)|0)|0;i=u}c[g>>2]=b;while(1){if((c[g>>2]|0)>=(b+d|0)){break}iZ(j,c[g>>2]|0);c[g>>2]=(c[g>>2]|0)+1}d=jh(j,b,d,4864,6624,6624,5)|0;d=jh(j,b,d,3696,6624,6624,6)|0;d=jh(j,b,d,6624,6624,6624,9)|0;d=jh(j,b,d,3624,6624,5424,1)|0;d=jh(j,b,d,4864,5424,5424,3)|0;d=jh(j,b,d,3624,5424,5424,8)|0;d=jh(j,b,d,3696,5424,5424,8)|0;d=jh(j,b,d,5424,5424,5424,4)|0;d=jh(j,b,d,5424,3544,3624,7)|0;iY(j,b,d);c[g>>2]=b;while(1){if((c[g>>2]|0)>=(b+d|0)){break}do{if((a[119396+((c[g>>2]|0)*40|0)|0]|0)==112){if((bi(c[(c[j+4>>2]|0)+(c[119384+((c[g>>2]|0)*40|0)>>2]<<2)>>2]|0,4136)|0)!=0){break}e=119384+((c[g>>2]|0)*40|0)|0;c[e>>2]=(c[e>>2]|0)+1}}while(0);c[g>>2]=(c[g>>2]|0)+1}do{m=0;c[g>>2]=b;while(1){if((c[g>>2]|0)>=(b+d|0)){break}e=b;while(1){if((e|0)>=(b+d|0)){break}do{if((c[119384+((c[g>>2]|0)*40|0)>>2]|0)<(c[119384+(e*40|0)>>2]|0)){if((c[119388+((c[g>>2]|0)*40|0)>>2]|0)>=(c[119388+(e*40|0)>>2]|0)){break}if((c[119388+((c[g>>2]|0)*40|0)>>2]|0)<(c[119384+(e*40|0)>>2]|0)){break}do{if((bi(c[(c[j+4>>2]|0)+(c[119388+(e*40|0)>>2]<<2)>>2]|0,4136)|0)==0){n=106}else{if((bi(c[(c[j+4>>2]|0)+(c[119388+(e*40|0)>>2]<<2)>>2]|0,3480)|0)==0){n=106;break}if((bi(c[(c[j+4>>2]|0)+(c[119384+((c[g>>2]|0)*40|0)>>2]<<2)>>2]|0,4136)|0)==0){if((c[24072]|0)>=2){aw(3344,(u=i,i=i+8|0,c[u>>2]=c[g>>2],u)|0)|0;i=u}jj(j,c[g>>2]|0);m=1}else{if((c[24072]|0)>=2){aw(5800,(u=i,i=i+16|0,c[u>>2]=c[g>>2],c[u+8>>2]=e,u)|0)|0;i=u}c[119384+((c[g>>2]|0)*40|0)>>2]=c[119384+(e*40|0)>>2]}}}while(0);if((n|0)==106){n=0;if((c[24072]|0)>=2){aw(3392,(u=i,i=i+8|0,c[u>>2]=e,u)|0)|0;i=u}ji(j,e);m=1}}}while(0);e=e+1|0}c[g>>2]=(c[g>>2]|0)+1}}while((m|0)!=0);c[g>>2]=b;while(1){if((c[g>>2]|0)>=(b+d|0)){break}c[119408+((c[g>>2]|0)*40|0)>>2]=c[j+1036>>2];if((a[119396+((c[g>>2]|0)*40|0)|0]|0)==118){if((c[77288+((hy(j,c[119404+((c[g>>2]|0)*40|0)>>2]|0)|0)<<2)>>2]|0)==2){n=131}else{n=129}}else{n=129}do{if((n|0)==129){n=0;if((a[119396+((c[g>>2]|0)*40|0)|0]|0)==116){if((bi(c[119392+((c[g>>2]|0)*40|0)>>2]|0,3624)|0)==0){n=131;break}}c[119420+((c[g>>2]|0)*40|0)>>2]=0}}while(0);if((n|0)==131){n=0;c[119420+((c[g>>2]|0)*40|0)>>2]=1}c[g>>2]=(c[g>>2]|0)+1}c[g>>2]=b;while(1){if((c[g>>2]|0)>=(b+d|0)){break}c[119408+((c[g>>2]|0)*40|0)>>2]=c[j+1036>>2];c[119420+((c[g>>2]|0)*40|0)>>2]=0;c[g>>2]=(c[g>>2]|0)+1}i=f;return d|0}function ja(b,d){b=b|0;d=d|0;var e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0;e=i;f=b;b=d;d=0;g=0;while(1){if((g|0)>=(b|0)){break}c[119416+(g*40|0)>>2]=1;if((c[119388+(g*40|0)>>2]|0)<(c[119384+(g*40|0)>>2]|0)){if((c[24072]|0)>=2){aw(5648,(h=i,i=i+8|0,c[h>>2]=g,h)|0)|0;i=h}c[119416+(g*40|0)>>2]=0}c[119412+(g*40|0)>>2]=g;g=g+1|0}g=0;while(1){if((g|0)>=(b|0)){break}if((c[119412+(g*40|0)>>2]|0)==(g|0)){d=g+1|0;while(1){if((d|0)>=(b|0)){break}do{if((c[119384+(g*40|0)>>2]|0)==(c[119384+(d*40|0)>>2]|0)){if((c[119388+(g*40|0)>>2]|0)!=(c[119388+(d*40|0)>>2]|0)){break}if((bi(c[119392+(g*40|0)>>2]|0,c[119392+(d*40|0)>>2]|0)|0)!=0){break}c[119412+(d*40|0)>>2]=g}}while(0);d=d+1|0}}g=g+1|0}g=0;while(1){if((g|0)>=(b|0)){break}if((c[119416+(g*40|0)>>2]|0)!=0){d=0;while(1){if((d|0)>=(b|0)){break}do{if((c[119408+(d*40|0)>>2]|0)!=(c[119408+(g*40|0)>>2]|0)){j=1;k=0;while(1){if((k|0)>=(b|0)){break}do{if((c[119412+(d*40|0)>>2]|0)==(c[119412+(k*40|0)>>2]|0)){if((c[119408+(k*40|0)>>2]|0)!=(c[119408+(g*40|0)>>2]|0)){break}j=0}}while(0);k=k+1|0}k=0;while(1){if((k|0)>=(b|0)){break}do{if((c[119412+(g*40|0)>>2]|0)==(c[119412+(k*40|0)>>2]|0)){if((c[119408+(k*40|0)>>2]|0)!=(c[119408+(d*40|0)>>2]|0)){break}j=0}}while(0);k=k+1|0}if((j|0)==0){break}do{if((c[119384+(g*40|0)>>2]|0)==(c[119384+(d*40|0)>>2]|0)){if((c[119388+(g*40|0)>>2]|0)<=(c[119388+(d*40|0)>>2]|0)){break}if((bi(c[119392+(g*40|0)>>2]|0,c[119392+(d*40|0)>>2]|0)|0)!=0){break}c[119416+(d*40|0)>>2]=0}}while(0);do{if((c[119384+(g*40|0)>>2]|0)<(c[119384+(d*40|0)>>2]|0)){if((c[119388+(g*40|0)>>2]|0)!=(c[119388+(d*40|0)>>2]|0)){break}if((bi(c[119392+(g*40|0)>>2]|0,c[119392+(d*40|0)>>2]|0)|0)!=0){break}c[119416+(d*40|0)>>2]=0}}while(0)}}while(0);d=d+1|0}}g=g+1|0}g=0;while(1){if((g|0)>=(b|0)){break}if((c[119416+(g*40|0)>>2]|0)!=0){d=g+1|0;while(1){if((d|0)>=(b|0)){break}if((c[119412+(d*40|0)>>2]|0)==(c[119412+(g*40|0)>>2]|0)){c[119416+(d*40|0)>>2]=0}d=d+1|0}}g=g+1|0}l=0;g=0;while(1){if((g|0)>=(b|0)){break}if((c[119416+(g*40|0)>>2]|0)!=0){c[24074]=g;l=je(f,g,b,1,l)|0}g=g+1|0}if((c[24072]|0)>=2){aw(5432,(h=i,i=i+1|0,i=i+7&-8,c[h>>2]=0,h)|0)|0;i=h;m=0;while(1){if((m|0)>=(l|0)){break}aw(5376,(h=i,i=i+8|0,c[h>>2]=m,h)|0)|0;i=h;n=0;while(1){if((n|0)>=(c[169568+(m*48|0)>>2]|0)){break}aw(5344,(h=i,i=i+8|0,c[h>>2]=c[169572+(m*48|0)+(n<<2)>>2],h)|0)|0;i=h;n=n+1|0}aw(10440,(h=i,i=i+1|0,i=i+7&-8,c[h>>2]=0,h)|0)|0;i=h;m=m+1|0}}m=0;while(1){if((m|0)>=(l|0)){break}c[169612+(m*48|0)>>2]=1;o=0;while(1){if((o|0)>=(l|0)){break}do{if((o|0)!=(m|0)){if((c[169568+(o*48|0)>>2]|0)<(c[169568+(m*48|0)>>2]|0)){break}p=1;n=0;while(1){if((n|0)>=(c[169568+(m*48|0)>>2]|0)){break}q=0;r=0;while(1){if((r|0)>=(c[169568+(o*48|0)>>2]|0)){break}if((c[169572+(o*48|0)+(r<<2)>>2]|0)==(c[169572+(m*48|0)+(n<<2)>>2]|0)){q=1}r=r+1|0}if((q|0)==0){p=0}n=n+1|0}if((p|0)==1){c[169612+(m*48|0)>>2]=0}}}while(0);o=o+1|0}m=m+1|0}m=0;while(1){if((m|0)>=(l|0)){break}if((c[169612+(m*48|0)>>2]|0)!=0){n=0;while(1){if((n|0)<(c[169568+(m*48|0)>>2]|0)){s=(c[169612+(m*48|0)>>2]|0)!=0}else{s=0}if(!s){break}o=0;while(1){if((o|0)<(l|0)){t=(c[169612+(m*48|0)>>2]|0)!=0}else{t=0}if(!t){break}do{if((o|0)==(m|0)){u=127}else{if((c[169612+(o*48|0)>>2]|0)==0){u=127;break}r=0;while(1){if((r|0)<(c[169568+(o*48|0)>>2]|0)){v=(c[169612+(m*48|0)>>2]|0)!=0}else{v=0}if(!v){break}g=c[169572+(m*48|0)+(n<<2)>>2]|0;d=c[169572+(o*48|0)+(r<<2)>>2]|0;L176:do{if((g|0)!=(d|0)){do{if((c[119384+(d*40|0)>>2]|0)<=(c[119384+(g*40|0)>>2]|0)){if((c[119388+(d*40|0)>>2]|0)<(c[119388+(g*40|0)>>2]|0)){break}if((c[24072]|0)>=2){aw(5280,(h=i,i=i+32|0,c[h>>2]=d,c[h+8>>2]=o,c[h+16>>2]=g,c[h+24>>2]=m,h)|0)|0;i=h}j=1;w=0;while(1){if((w|0)>=(c[169568+(m*48|0)>>2]|0)){break}k=c[169572+(m*48|0)+(w<<2)>>2]|0;if((c[119384+(d*40|0)>>2]|0)>(c[119384+(k*40|0)>>2]|0)){u=143}else{if((c[119388+(d*40|0)>>2]|0)<(c[119388+(k*40|0)>>2]|0)){u=143}}if((u|0)==143){u=0;j=0}w=w+1|0}if((j|0)!=0){break L176}c[169612+(m*48|0)>>2]=0;if((c[24072]|0)>=2){aw(5216,(h=i,i=i+32|0,c[h>>2]=m,c[h+8>>2]=n,c[h+16>>2]=o,c[h+24>>2]=r,h)|0)|0;i=h;w=0;while(1){if((w|0)>=(c[169568+(m*48|0)>>2]|0)){break}aw(5344,(h=i,i=i+8|0,c[h>>2]=c[169572+(m*48|0)+(w<<2)>>2],h)|0)|0;i=h;w=w+1|0}aw(10440,(h=i,i=i+1|0,i=i+7&-8,c[h>>2]=0,h)|0)|0;i=h}break L176}}while(0)}}while(0);r=r+1|0}}}while(0);if((u|0)==127){u=0}o=o+1|0}n=n+1|0}}m=m+1|0}if((c[24072]|0)>=2){aw(5096,(h=i,i=i+1|0,i=i+7&-8,c[h>>2]=0,h)|0)|0;i=h;m=0;while(1){if((m|0)>=(l|0)){break}if((c[169612+(m*48|0)>>2]|0)!=0){aw(5376,(h=i,i=i+8|0,c[h>>2]=m,h)|0)|0;i=h;n=0;while(1){if((n|0)>=(c[169568+(m*48|0)>>2]|0)){break}aw(5344,(h=i,i=i+8|0,c[h>>2]=c[169572+(m*48|0)+(n<<2)>>2],h)|0)|0;i=h;n=n+1|0}aw(10440,(h=i,i=i+1|0,i=i+7&-8,c[h>>2]=0,h)|0)|0;i=h}m=m+1|0}}g=b;m=0;while(1){if((m|0)>=(l|0)){break}if((c[169612+(m*48|0)>>2]|0)!=0){o=256;r=-1;n=0;while(1){if((n|0)>=(c[169568+(m*48|0)>>2]|0)){break}d=c[169572+(m*48|0)+(n<<2)>>2]|0;if((c[119384+(d*40|0)>>2]|0)<(o|0)){o=c[119384+(d*40|0)>>2]|0}if((c[119388+(d*40|0)>>2]|0)>(r|0)){r=c[119388+(d*40|0)>>2]|0}n=n+1|0}c[119384+(g*40|0)>>2]=o;c[119388+(g*40|0)>>2]=r;c[119392+(g*40|0)>>2]=c[119392+(d*40|0)>>2];a[119396+(g*40|0)|0]=120;c[119416+(g*40|0)>>2]=1;c[119400+(g*40|0)>>2]=c[119400+(d*40|0)>>2];c[119404+(g*40|0)>>2]=c[119404+(d*40|0)>>2];n=0;while(1){if((n|0)>=(c[169568+(m*48|0)>>2]|0)){break}d=c[169572+(m*48|0)+(n<<2)>>2]|0;if((c[119420+(d*40|0)>>2]|0)==1){u=190}else{if((c[119420+(d*40|0)>>2]|0)==2){u=190}}if((u|0)==190){u=0;c[119420+(g*40|0)>>2]=2;c[119420+(d*40|0)>>2]=2}n=n+1|0}if((c[24072]|0)>=2){aw(5032,(h=i,i=i+1|0,i=i+7&-8,c[h>>2]=0,h)|0)|0;i=h}iZ(f,g);g=g+1|0}m=m+1|0}b=g;i=e;return b|0}function jb(b,d){b=b|0;d=d|0;var e=0,f=0,g=0,h=0,j=0,k=0,l=0;e=i;f=b;b=d;d=0;g=hA(f)|0;h=0;while(1){if((h|0)>=(b|0)){break}if((jd(c[119400+(h*40|0)>>2]|0,7488)|0)==0){c[119416+(h*40|0)>>2]=0}if((jd(c[119400+(h*40|0)>>2]|0,7272)|0)==0){j=7}else{if((jd(c[119400+(h*40|0)>>2]|0,7064)|0)==0){j=7}}if((j|0)==7){j=0;k=119388+(h*40|0)|0;c[k>>2]=(c[k>>2]|0)+1}if((bi(c[119400+(h*40|0)>>2]|0,6936)|0)==0){c[119392+(h*40|0)>>2]=eT(5424,c[25718]|0)|0}if((bi(c[119400+(h*40|0)>>2]|0,6632)|0)==0){c[119392+(h*40|0)>>2]=eT(5424,c[25718]|0)|0}if((bi(c[119400+(h*40|0)>>2]|0,6520)|0)==0){c[119392+(h*40|0)>>2]=eT(5424,c[25718]|0)|0}do{if((bi(c[119400+(h*40|0)>>2]|0,6368)|0)==0){if((c[119384+(h*40|0)>>2]|0)!=2){break}c[119416+(h*40|0)>>2]=0}}while(0);do{if((df(6336,c[119400+(h*40|0)>>2]|0)|0)==1){j=20}else{if((a[119396+(h*40|0)|0]|0)==100){j=20;break}if((a[119396+(h*40|0)|0]|0)==104){j=20}}}while(0);if((j|0)==20){j=0;if(((c[119388+(h*40|0)>>2]|0)-(c[119384+(h*40|0)>>2]|0)|0)==0){c[119416+(h*40|0)>>2]=0}}do{if((a[119396+(h*40|0)|0]|0)==104){if((bi(c[(c[f+4>>2]|0)+((c[119384+(h*40|0)>>2]|0)-1<<2)>>2]|0,6256)|0)!=0){break}k=119384+(h*40|0)|0;c[k>>2]=(c[k>>2]|0)-1}}while(0);if((c[119420+(h*40|0)>>2]|0)==2){c[119392+(h*40|0)>>2]=eT(6128,c[25718]|0)|0}if((c[119420+(h*40|0)>>2]|0)==1){c[119416+(h*40|0)>>2]=0}h=h+1|0}b=b+d|0;h=0;while(1){if((h|0)>=(b|0)){break}do{if((c[119388+(h*40|0)>>2]|0)==((c[f>>2]|0)-3|0)){if((c[119384+(h*40|0)>>2]|0)!=1){break}if((bi(c[119392+(h*40|0)>>2]|0,6624)|0)!=0){break}if((bi(g+8+(((c[f>>2]|0)-2|0)*76|0)|0,6048)|0)!=0){break}d=119388+(h*40|0)|0;c[d>>2]=(c[d>>2]|0)+1}}while(0);h=h+1|0}g=(c[f>>2]|0)-2|0;d=0;k=0;h=0;while(1){if((h|0)>=(b|0)){break}do{if((c[119384+(h*40|0)>>2]|0)==1){if((bi(c[119392+(h*40|0)>>2]|0,6624)|0)!=0){break}if((c[119416+(h*40|0)>>2]|0)!=1){break}d=1}}while(0);h=h+1|0}h=0;while(1){if((h|0)>=(b|0)){break}do{if((c[119388+(h*40|0)>>2]|0)>=(g|0)){if((bi(c[119392+(h*40|0)>>2]|0,6624)|0)!=0){break}if((c[119416+(h*40|0)>>2]|0)!=1){break}k=1}}while(0);h=h+1|0}if((d|0)==0){j=59}else{if((k|0)==0){j=59}}if((j|0)==59){h=b;c[119384+(h*40|0)>>2]=1;c[119388+(h*40|0)>>2]=(c[f>>2]|0)-1;c[119392+(h*40|0)>>2]=eT(6624,c[25718]|0)|0;c[119416+(h*40|0)>>2]=1;a[119396+(h*40|0)|0]=120;b=b+1|0;if((c[24072]|0)>=2){aw(5968,(l=i,i=i+1|0,i=i+7&-8,c[l>>2]=0,l)|0)|0;i=l}iZ(f,h)}do{f=0;h=0;while(1){if((h|0)>=(b|0)){break}if((c[119416+(h*40|0)>>2]|0)!=0){j=0;while(1){if((j|0)>=(b|0)){break}if((c[119416+(j*40|0)>>2]|0)!=0){do{if((c[119384+(h*40|0)>>2]|0)<(c[119384+(j*40|0)>>2]|0)){if((c[119388+(h*40|0)>>2]|0)>=(c[119388+(j*40|0)>>2]|0)){break}if((c[119388+(h*40|0)>>2]|0)<(c[119384+(j*40|0)>>2]|0)){break}if((c[24072]|0)>=2){aw(5800,(l=i,i=i+16|0,c[l>>2]=h,c[l+8>>2]=j,l)|0)|0;i=l}c[119384+(h*40|0)>>2]=c[119384+(j*40|0)>>2]}}while(0)}j=j+1|0}}h=h+1|0}}while((f|0)!=0);i=e;return b|0}
function jc(b,d){b=b|0;d=d|0;var e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0;e=i;i=i+8296|0;f=e|0;g=e+4096|0;h=e+8192|0;j=b;b=d;d=jk()|0;if((b|0)>=1024){aw(2816,(k=i,i=i+8|0,c[k>>2]=8328,k)|0)|0;i=k;aO(1);return 0}l=hA(j)|0;m=0;while(1){if((m|0)>=(b|0)){break}c[f+(m<<2)>>2]=0;c[g+(m<<2)>>2]=0;m=m+1|0}if((c[24072]|0)>=2){aw(10440,(k=i,i=i+1|0,i=i+7&-8,c[k>>2]=0,k)|0)|0;i=k}n=1;while(1){if((n|0)>=(c[j>>2]|0)){break}while(1){o=-1;p=-1;m=0;while(1){if((m|0)>=(b|0)){break}do{if((c[119384+(m*40|0)>>2]|0)==(n|0)){if((c[f+(m<<2)>>2]|0)!=0){break}if((c[119416+(m*40|0)>>2]|0)!=1){break}if((c[119388+(m*40|0)>>2]|0)<(p|0)){break}o=m;p=c[119388+(m*40|0)>>2]|0}}while(0);m=m+1|0}if((o|0)==-1){break}c[f+(o<<2)>>2]=1;if((c[119420+(o*40|0)>>2]|0)==1){continue}else{p=c[119392+(o*40|0)>>2]|0;jl(d,8104,(k=i,i=i+16|0,c[k>>2]=91,c[k+8>>2]=p,k)|0)|0;i=k;continue}}if((n|0)<((c[j>>2]|0)-1|0)){ju(h|0,l+8+(n*76|0)|0)|0;if((c[l+8+(n*76|0)+72>>2]|0)==1){a[h|0]=av(a[h|0]|0)|0}jl(d,7896,(k=i,i=i+8|0,c[k>>2]=h,k)|0)|0;i=k}while(1){o=-1;p=-1;m=0;while(1){if((m|0)>=(b|0)){break}do{if((c[119388+(m*40|0)>>2]|0)==(n|0)){if((c[g+(m<<2)>>2]|0)!=0){break}if((c[119416+(m*40|0)>>2]|0)!=1){break}if((c[119384+(m*40|0)>>2]|0)<=(p|0)){break}o=m;p=c[119384+(m*40|0)>>2]|0}}while(0);m=m+1|0}if((o|0)==-1){break}c[g+(o<<2)>>2]=1;if((c[119420+(o*40|0)>>2]|0)==1){continue}else{jl(d,7672,(k=i,i=i+16|0,c[k>>2]=c[119392+(o*40|0)>>2],c[k+8>>2]=93,k)|0)|0;i=k;continue}}n=n+1|0}jl(d,10440,(k=i,i=i+1|0,i=i+7&-8,c[k>>2]=0,k)|0)|0;i=k;k=fD((jr(c[d+4>>2]|0)|0)+1|0)|0;ju(k|0,c[d+4>>2]|0)|0;fE(c[d+4>>2]|0,c[d>>2]|0);fE(d,12);i=e;return k|0}function jd(b,c){b=b|0;c=c|0;var d=0,e=0,f=0,g=0,h=0,j=0;d=i;e=b;b=c;while(1){if((bg(a[e]|0)|0)!=0){f=1}else{f=(bg(a[b]|0)|0)!=0}if(!f){g=8;break}if((a[e]|0)!=(a[b]|0)){g=6;break}e=e+1|0;b=b+1|0}if((g|0)==6){h=1;j=h;i=d;return j|0}else if((g|0)==8){h=0;j=h;i=d;return j|0}return 0}function je(a,b,d,e,f){a=a|0;b=b|0;d=d|0;e=e|0;f=f|0;var g=0,h=0,j=0,k=0,l=0,m=0,n=0,o=0;g=i;h=a;a=d;d=e;e=f;f=0;j=b+1|0;while(1){if((j|0)>=(a|0)){break}do{if((c[119416+(j*40|0)>>2]|0)!=0){if((bi(c[119392+((c[24074]|0)*40|0)>>2]|0,c[119392+(j*40|0)>>2]|0)|0)!=0){break}b=1;k=0;while(1){if((k|0)>=(d|0)){break}if((c[119408+(j*40|0)>>2]|0)==(c[119408+((c[96296+(k<<2)>>2]|0)*40|0)>>2]|0)){b=0}if((c[119384+(j*40|0)>>2]|0)<(c[119384+((c[96296+(k<<2)>>2]|0)*40|0)>>2]|0)){if((c[119388+(j*40|0)>>2]|0)>(c[119384+((c[96296+(k<<2)>>2]|0)*40|0)>>2]|0)){l=19}else{l=13}}else{l=13}do{if((l|0)==13){l=0;if((c[119388+(j*40|0)>>2]|0)>(c[119388+((c[96296+(k<<2)>>2]|0)*40|0)>>2]|0)){if((c[119384+(j*40|0)>>2]|0)<(c[119388+((c[96296+(k<<2)>>2]|0)*40|0)>>2]|0)){l=19;break}}if((c[119388+(j*40|0)>>2]|0)>(c[119388+((c[96296+(k<<2)>>2]|0)*40|0)>>2]|0)){if((c[119384+(j*40|0)>>2]|0)<(c[119388+((c[96296+(k<<2)>>2]|0)*40|0)>>2]|0)){l=19;break}}if((c[119384+(j*40|0)>>2]|0)<=(c[119384+((c[96296+(k<<2)>>2]|0)*40|0)>>2]|0)){break}if((c[119388+(j*40|0)>>2]|0)<(c[119388+((c[96296+(k<<2)>>2]|0)*40|0)>>2]|0)){l=19}}}while(0);if((l|0)==19){l=0;b=0}m=0;while(1){if((m|0)>=(a|0)){break}if((c[119412+(m*40|0)>>2]|0)==(c[119412+(j*40|0)>>2]|0)){n=0;while(1){if((n|0)>=(a|0)){break}do{if((c[119412+(n*40|0)>>2]|0)==(c[119412+((c[96296+(k<<2)>>2]|0)*40|0)>>2]|0)){if((c[119408+(n*40|0)>>2]|0)!=(c[119408+(m*40|0)>>2]|0)){break}b=0}}while(0);n=n+1|0}}m=m+1|0}k=k+1|0}if((b|0)==0){break}else{c[96296+(d<<2)>>2]=j;f=1;e=je(h,j,a,d+1|0,e)|0;break}}}while(0);j=j+1|0}if((f|0)!=0){o=e;i=g;return o|0}if((d|0)<=1){o=e;i=g;return o|0}k=0;while(1){if((k|0)>=(d|0)){break}c[169572+(e*48|0)+(k<<2)>>2]=c[96296+(k<<2)>>2];c[169568+(e*48|0)>>2]=d;k=k+1|0}e=e+1|0;o=e;i=g;return o|0}function jf(b,d,e,f,g,h){b=b|0;d=d|0;e=e|0;f=f|0;g=g|0;h=h|0;var j=0,k=0;j=i;k=e;e=i;i=i+28|0;i=i+7&-8;c[e>>2]=c[k>>2];c[e+4>>2]=c[k+4>>2];c[e+8>>2]=c[k+8>>2];c[e+12>>2]=c[k+12>>2];c[e+16>>2]=c[k+16>>2];c[e+20>>2]=c[k+20>>2];c[e+24>>2]=c[k+24>>2];k=b;b=f;f=g;g=c[k>>2]|0;g=g+1|0;if((b|0)<1){b=1}if((f|0)>(c[25448]|0)){f=c[25448]|0}if((b|0)<=(f|0)){c[119384+(g*40|0)>>2]=b;c[119388+(g*40|0)>>2]=f;a[119396+(g*40|0)|0]=c[e+16>>2];c[119400+(g*40|0)>>2]=hz(d,c[e+12>>2]|0)|0;c[119404+(g*40|0)>>2]=c[e+12>>2];c[119392+(g*40|0)>>2]=eT(h,c[25718]|0)|0;c[k>>2]=g;i=j;return}else{aw(2816,(j=i,i=i+8|0,c[j>>2]=2296,j)|0)|0;i=j;aO(1)}}function jg(a){a=a|0;var b=0,d=0,e=0;b=i;d=a;switch(d|0){case 97:{e=2720;break};case 98:{e=4864;break};case 99:{e=3624;break};case 100:{e=2688;break};case 101:{e=2680;break};case 102:{e=4864;break};case 103:{e=3696;break};case 104:{e=2688;break};case 105:{e=2680;break};case 107:{e=2568;break};case 110:{e=5424;break};case 112:{e=3696;break};case 113:{e=3544;break};case 115:{e=6624;break};case 116:{e=3624;break};case 117:{e=2720;break};case 118:{e=3624;break};case 121:{e=5424;break};case 122:{e=3624;break};default:{aw(2416,(a=i,i=i+8|0,c[a>>2]=d,a)|0)|0;i=a;aw(2816,(a=i,i=i+8|0,c[a>>2]=2352,a)|0)|0;i=a;aO(1);return 0}}i=b;return e|0}function jh(b,d,e,f,g,h,j){b=b|0;d=d|0;e=e|0;f=f|0;g=g|0;h=h|0;j=j|0;var k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0;k=i;l=b;b=d;d=e;e=f;f=g;g=h;h=j;j=b+d|0;m=b;L1:while(1){if((m|0)>=(b+d|0)){n=93;break}do{if((h|0)==4){if((df(3328,c[119400+(m*40|0)>>2]|0)|0)!=0){n=6;break}}else{n=6}}while(0);L7:do{if((n|0)==6){n=0;do{if((h|0)==2){if((a[119396+(m*40|0)|0]|0)!=116){break}break L7}}while(0);if((a[119396+(m*40|0)|0]|0)==122){break}if((h|0)==1){n=13}else{if((h|0)==2){n=13}}do{if((n|0)==13){n=0;do{if((df(6624,c[119400+(m*40|0)>>2]|0)|0)==0){if((df(3320,c[119400+(m*40|0)>>2]|0)|0)!=0){n=16;break}if((df(3288,c[119400+(m*40|0)>>2]|0)|0)!=0){n=16}}else{n=16}}while(0);if((n|0)==16){n=0;if((df(3280,c[119400+(m*40|0)>>2]|0)|0)==0){break}}break L7}}while(0);do{if((h|0)==3){if((df(4872,c[119400+(m*40|0)>>2]|0)|0)!=0){break}if((df(4728,c[119400+(m*40|0)>>2]|0)|0)!=0){break}if((df(4688,c[119400+(m*40|0)>>2]|0)|0)!=0){break}if((df(4144,c[119400+(m*40|0)>>2]|0)|0)!=0){break}if((df(4120,c[119400+(m*40|0)>>2]|0)|0)!=0){break}break L7}}while(0);do{if((h|0)==5){if((a[119396+(m*40|0)|0]|0)==102){break}break L7}}while(0);do{if((h|0)==6){if((a[119396+(m*40|0)|0]|0)==103){break}break L7}}while(0);do{if((h|0)==7){if((df(3128,c[119400+(m*40|0)>>2]|0)|0)!=0){break}break L7}}while(0);do{if((h|0)==8){if((df(3064,c[119400+(m*40|0)>>2]|0)|0)!=0){break}break L7}}while(0);do{if((h|0)==9){if((df(3048,c[119400+(m*40|0)>>2]|0)|0)!=0){break}break L7}}while(0);if((bi(c[119392+(m*40|0)>>2]|0,e|0)|0)!=0){break}if((c[24072]|0)>=2){aw(2896,(o=i,i=i+16|0,c[o>>2]=m,c[o+8>>2]=e,o)|0)|0;i=o}p=0;q=c[119384+(m*40|0)>>2]|0;while(1){if((p|0)==0){r=(q|0)>=0}else{r=0}if(!r){break}s=c[119388+(m*40|0)>>2]|0;while(1){if((s|0)>=(c[l>>2]|0)){break}t=b;while(1){if((p|0)==0){u=(t|0)<(b+d|0)}else{u=0}if(!u){break}L76:do{if((c[119384+(t*40|0)>>2]|0)==(q|0)){if((c[119388+(t*40|0)>>2]|0)!=(s|0)){n=57;break}if((t|0)==(m|0)){n=57;break}if((bi(c[119392+(t*40|0)>>2]|0,f|0)|0)!=0){break}do{if((h|0)==5){n=63}else{if((h|0)==6){n=63;break}if((h|0)==9){n=63;break}v=(c[119384+(m*40|0)>>2]|0)-1|0;while(1){if((c[78288+((c[l+1036>>2]|0)*1e3|0)+(v<<2)>>2]|0)==1){break}v=v-1|0}if((v|0)<(c[119384+(t*40|0)>>2]|0)){p=1;break L76}else{c[119388+(j*40|0)>>2]=v;c[119384+(j*40|0)>>2]=c[119384+(t*40|0)>>2];break}}}while(0);do{if((n|0)==63){n=0;v=(c[119388+(m*40|0)>>2]|0)+1|0;while(1){if((c[78288+((c[l+1036>>2]|0)*1e3|0)+(v<<2)>>2]|0)==1){break}v=v+1|0}if((v|0)>(c[119388+(t*40|0)>>2]|0)){p=1;break L76}else{c[119384+(j*40|0)>>2]=v;c[119388+(j*40|0)>>2]=c[119388+(t*40|0)>>2];break}}}while(0);jj(l,m);ji(l,m);c[119392+(j*40|0)>>2]=eT(g,c[25718]|0)|0;a[119396+(j*40|0)|0]=120;c[119400+(j*40|0)>>2]=eT(2880,c[25718]|0)|0;c[119404+(j*40|0)>>2]=c[119404+(m*40|0)>>2];if((c[24072]|0)>=2){aw(2784,(o=i,i=i+16|0,c[o>>2]=t,c[o+8>>2]=f,o)|0)|0;i=o;aw(5032,(o=i,i=i+1|0,i=i+7&-8,c[o>>2]=0,o)|0)|0;i=o;iZ(l,j)}j=j+1|0;if((j|0)>=1024){n=80;break L1}p=1}else{n=57}}while(0);if((n|0)==57){n=0}t=t+1|0}s=s+1|0}q=q-1|0}if((c[24072]|0)>=2){if((p|0)==0){aw(2728,(o=i,i=i+8|0,c[o>>2]=f,o)|0)|0;i=o}}}}while(0);m=m+1|0}if((n|0)==80){aw(2816,(o=i,i=i+8|0,c[o>>2]=8328,o)|0)|0;i=o;aO(1);return 0}else if((n|0)==93){d=j-b|0;i=k;return d|0}return 0}function ji(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0,j=0;d=i;e=a;a=b;b=c[119388+(a*40|0)>>2]|0;do{if((bi(c[(c[e+4>>2]|0)+(c[119388+(a*40|0)>>2]<<2)>>2]|0,4136)|0)!=0){if((bi(c[(c[e+4>>2]|0)+(c[119388+(a*40|0)>>2]<<2)>>2]|0,3480)|0)==0){break}f=b;g=a;h=119384+(g*40|0)|0;j=h+4|0;c[j>>2]=f;i=d;return}}while(0);b=b-1|0;while(1){if((c[78288+((c[e+1036>>2]|0)*1e3|0)+(b<<2)>>2]|0)==1){break}b=b-1|0}f=b;g=a;h=119384+(g*40|0)|0;j=h+4|0;c[j>>2]=f;i=d;return}function jj(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0,j=0;d=i;e=a;a=b;b=c[119384+(a*40|0)>>2]|0;if((bi(c[(c[e+4>>2]|0)+(c[119384+(a*40|0)>>2]<<2)>>2]|0,4136)|0)!=0){f=b;g=a;h=119384+(g*40|0)|0;j=h|0;c[j>>2]=f;i=d;return}b=b+1|0;while(1){if((c[78288+((c[e+1036>>2]|0)*1e3|0)+(b<<2)>>2]|0)==1){break}b=b+1|0}f=b;g=a;h=119384+(g*40|0)|0;j=h|0;c[j>>2]=f;i=d;return}function jk(){var b=0,d=0;b=i;d=fD(12)|0;c[d>>2]=1;c[d+4>>2]=fD(1)|0;a[c[d+4>>2]|0]=0;c[d+8>>2]=c[d+4>>2];i=b;return d|0}function jl(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0;e=i;i=i+1040|0;f=e|0;g=e+1024|0;h=a;a=g|0;c[a>>2]=d;c[a+4>>2]=0;bh(f|0,b|0,g|0)|0;g=c[h>>2]|0;b=jr(c[h+4>>2]|0)|0;if(g>>>0<=(b+(jr(f|0)|0)|0)>>>0){b=c[h>>2]<<1;g=b+(jr(f|0)|0)+1|0;b=fD(g)|0;ju(b|0,c[h+4>>2]|0)|0;jw(b|0,f|0)|0;fE(c[h+4>>2]|0,c[h>>2]|0);c[h+4>>2]=b;c[h+8>>2]=aC(b|0,0)|0;c[h>>2]=g;i=e;return 0}else{jw(c[h+8>>2]|0,f|0)|0;g=jr(f|0)|0;f=h+8|0;c[f>>2]=(c[f>>2]|0)+g;i=e;return 0}return 0}function jm(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,A=0,B=0,C=0,D=0,E=0,F=0,G=0,H=0,I=0,J=0,K=0,L=0,M=0,N=0,O=0,P=0,Q=0,R=0,S=0,T=0,U=0,V=0,W=0,X=0,Y=0,Z=0,_=0,$=0,aa=0,ab=0,ac=0,ad=0,ae=0,af=0,ag=0,ah=0,ai=0,aj=0,ak=0,al=0,am=0,an=0,ao=0,ap=0,aq=0,ar=0,as=0,au=0,av=0,aw=0,ax=0,ay=0,az=0,aA=0,aB=0,aC=0,aD=0,aF=0,aG=0,aH=0,aI=0;do{if(a>>>0<245>>>0){if(a>>>0<11>>>0){b=16}else{b=a+11&-8}d=b>>>3;e=c[55186]|0;f=e>>>(d>>>0);if((f&3|0)!=0){g=(f&1^1)+d|0;h=g<<1;i=220784+(h<<2)|0;j=220784+(h+2<<2)|0;h=c[j>>2]|0;k=h+8|0;l=c[k>>2]|0;do{if((i|0)==(l|0)){c[55186]=e&~(1<<g)}else{if(l>>>0<(c[55190]|0)>>>0){at();return 0}m=l+12|0;if((c[m>>2]|0)==(h|0)){c[m>>2]=i;c[j>>2]=l;break}else{at();return 0}}}while(0);l=g<<3;c[h+4>>2]=l|3;j=h+(l|4)|0;c[j>>2]=c[j>>2]|1;n=k;return n|0}if(b>>>0<=(c[55188]|0)>>>0){o=b;break}if((f|0)!=0){j=2<<d;l=f<<d&(j|-j);j=(l&-l)-1|0;l=j>>>12&16;i=j>>>(l>>>0);j=i>>>5&8;m=i>>>(j>>>0);i=m>>>2&4;p=m>>>(i>>>0);m=p>>>1&2;q=p>>>(m>>>0);p=q>>>1&1;r=(j|l|i|m|p)+(q>>>(p>>>0))|0;p=r<<1;q=220784+(p<<2)|0;m=220784+(p+2<<2)|0;p=c[m>>2]|0;i=p+8|0;l=c[i>>2]|0;do{if((q|0)==(l|0)){c[55186]=e&~(1<<r)}else{if(l>>>0<(c[55190]|0)>>>0){at();return 0}j=l+12|0;if((c[j>>2]|0)==(p|0)){c[j>>2]=q;c[m>>2]=l;break}else{at();return 0}}}while(0);l=r<<3;m=l-b|0;c[p+4>>2]=b|3;q=p;e=q+b|0;c[q+(b|4)>>2]=m|1;c[q+l>>2]=m;l=c[55188]|0;if((l|0)!=0){q=c[55191]|0;d=l>>>3;l=d<<1;f=220784+(l<<2)|0;k=c[55186]|0;h=1<<d;do{if((k&h|0)==0){c[55186]=k|h;s=f;t=220784+(l+2<<2)|0}else{d=220784+(l+2<<2)|0;g=c[d>>2]|0;if(g>>>0>=(c[55190]|0)>>>0){s=g;t=d;break}at();return 0}}while(0);c[t>>2]=q;c[s+12>>2]=q;c[q+8>>2]=s;c[q+12>>2]=f}c[55188]=m;c[55191]=e;n=i;return n|0}l=c[55187]|0;if((l|0)==0){o=b;break}h=(l&-l)-1|0;l=h>>>12&16;k=h>>>(l>>>0);h=k>>>5&8;p=k>>>(h>>>0);k=p>>>2&4;r=p>>>(k>>>0);p=r>>>1&2;d=r>>>(p>>>0);r=d>>>1&1;g=c[221048+((h|l|k|p|r)+(d>>>(r>>>0))<<2)>>2]|0;r=g;d=g;p=(c[g+4>>2]&-8)-b|0;while(1){g=c[r+16>>2]|0;if((g|0)==0){k=c[r+20>>2]|0;if((k|0)==0){break}else{u=k}}else{u=g}g=(c[u+4>>2]&-8)-b|0;k=g>>>0<p>>>0;r=u;d=k?u:d;p=k?g:p}r=d;i=c[55190]|0;if(r>>>0<i>>>0){at();return 0}e=r+b|0;m=e;if(r>>>0>=e>>>0){at();return 0}e=c[d+24>>2]|0;f=c[d+12>>2]|0;do{if((f|0)==(d|0)){q=d+20|0;g=c[q>>2]|0;if((g|0)==0){k=d+16|0;l=c[k>>2]|0;if((l|0)==0){v=0;break}else{w=l;x=k}}else{w=g;x=q}while(1){q=w+20|0;g=c[q>>2]|0;if((g|0)!=0){w=g;x=q;continue}q=w+16|0;g=c[q>>2]|0;if((g|0)==0){break}else{w=g;x=q}}if(x>>>0<i>>>0){at();return 0}else{c[x>>2]=0;v=w;break}}else{q=c[d+8>>2]|0;if(q>>>0<i>>>0){at();return 0}g=q+12|0;if((c[g>>2]|0)!=(d|0)){at();return 0}k=f+8|0;if((c[k>>2]|0)==(d|0)){c[g>>2]=f;c[k>>2]=q;v=f;break}else{at();return 0}}}while(0);L78:do{if((e|0)!=0){f=d+28|0;i=221048+(c[f>>2]<<2)|0;do{if((d|0)==(c[i>>2]|0)){c[i>>2]=v;if((v|0)!=0){break}c[55187]=c[55187]&~(1<<c[f>>2]);break L78}else{if(e>>>0<(c[55190]|0)>>>0){at();return 0}q=e+16|0;if((c[q>>2]|0)==(d|0)){c[q>>2]=v}else{c[e+20>>2]=v}if((v|0)==0){break L78}}}while(0);if(v>>>0<(c[55190]|0)>>>0){at();return 0}c[v+24>>2]=e;f=c[d+16>>2]|0;do{if((f|0)!=0){if(f>>>0<(c[55190]|0)>>>0){at();return 0}else{c[v+16>>2]=f;c[f+24>>2]=v;break}}}while(0);f=c[d+20>>2]|0;if((f|0)==0){break}if(f>>>0<(c[55190]|0)>>>0){at();return 0}else{c[v+20>>2]=f;c[f+24>>2]=v;break}}}while(0);if(p>>>0<16>>>0){e=p+b|0;c[d+4>>2]=e|3;f=r+(e+4)|0;c[f>>2]=c[f>>2]|1}else{c[d+4>>2]=b|3;c[r+(b|4)>>2]=p|1;c[r+(p+b)>>2]=p;f=c[55188]|0;if((f|0)!=0){e=c[55191]|0;i=f>>>3;f=i<<1;q=220784+(f<<2)|0;k=c[55186]|0;g=1<<i;do{if((k&g|0)==0){c[55186]=k|g;y=q;z=220784+(f+2<<2)|0}else{i=220784+(f+2<<2)|0;l=c[i>>2]|0;if(l>>>0>=(c[55190]|0)>>>0){y=l;z=i;break}at();return 0}}while(0);c[z>>2]=e;c[y+12>>2]=e;c[e+8>>2]=y;c[e+12>>2]=q}c[55188]=p;c[55191]=m}f=d+8|0;if((f|0)==0){o=b;break}else{n=f}return n|0}else{if(a>>>0>4294967231>>>0){o=-1;break}f=a+11|0;g=f&-8;k=c[55187]|0;if((k|0)==0){o=g;break}r=-g|0;i=f>>>8;do{if((i|0)==0){A=0}else{if(g>>>0>16777215>>>0){A=31;break}f=(i+1048320|0)>>>16&8;l=i<<f;h=(l+520192|0)>>>16&4;j=l<<h;l=(j+245760|0)>>>16&2;B=14-(h|f|l)+(j<<l>>>15)|0;A=g>>>((B+7|0)>>>0)&1|B<<1}}while(0);i=c[221048+(A<<2)>>2]|0;L126:do{if((i|0)==0){C=0;D=r;E=0}else{if((A|0)==31){F=0}else{F=25-(A>>>1)|0}d=0;m=r;p=i;q=g<<F;e=0;while(1){B=c[p+4>>2]&-8;l=B-g|0;if(l>>>0<m>>>0){if((B|0)==(g|0)){C=p;D=l;E=p;break L126}else{G=p;H=l}}else{G=d;H=m}l=c[p+20>>2]|0;B=c[p+16+(q>>>31<<2)>>2]|0;j=(l|0)==0|(l|0)==(B|0)?e:l;if((B|0)==0){C=G;D=H;E=j;break}else{d=G;m=H;p=B;q=q<<1;e=j}}}}while(0);if((E|0)==0&(C|0)==0){i=2<<A;r=k&(i|-i);if((r|0)==0){o=g;break}i=(r&-r)-1|0;r=i>>>12&16;e=i>>>(r>>>0);i=e>>>5&8;q=e>>>(i>>>0);e=q>>>2&4;p=q>>>(e>>>0);q=p>>>1&2;m=p>>>(q>>>0);p=m>>>1&1;I=c[221048+((i|r|e|q|p)+(m>>>(p>>>0))<<2)>>2]|0}else{I=E}if((I|0)==0){J=D;K=C}else{p=I;m=D;q=C;while(1){e=(c[p+4>>2]&-8)-g|0;r=e>>>0<m>>>0;i=r?e:m;e=r?p:q;r=c[p+16>>2]|0;if((r|0)!=0){p=r;m=i;q=e;continue}r=c[p+20>>2]|0;if((r|0)==0){J=i;K=e;break}else{p=r;m=i;q=e}}}if((K|0)==0){o=g;break}if(J>>>0>=((c[55188]|0)-g|0)>>>0){o=g;break}q=K;m=c[55190]|0;if(q>>>0<m>>>0){at();return 0}p=q+g|0;k=p;if(q>>>0>=p>>>0){at();return 0}e=c[K+24>>2]|0;i=c[K+12>>2]|0;do{if((i|0)==(K|0)){r=K+20|0;d=c[r>>2]|0;if((d|0)==0){j=K+16|0;B=c[j>>2]|0;if((B|0)==0){L=0;break}else{M=B;N=j}}else{M=d;N=r}while(1){r=M+20|0;d=c[r>>2]|0;if((d|0)!=0){M=d;N=r;continue}r=M+16|0;d=c[r>>2]|0;if((d|0)==0){break}else{M=d;N=r}}if(N>>>0<m>>>0){at();return 0}else{c[N>>2]=0;L=M;break}}else{r=c[K+8>>2]|0;if(r>>>0<m>>>0){at();return 0}d=r+12|0;if((c[d>>2]|0)!=(K|0)){at();return 0}j=i+8|0;if((c[j>>2]|0)==(K|0)){c[d>>2]=i;c[j>>2]=r;L=i;break}else{at();return 0}}}while(0);L176:do{if((e|0)!=0){i=K+28|0;m=221048+(c[i>>2]<<2)|0;do{if((K|0)==(c[m>>2]|0)){c[m>>2]=L;if((L|0)!=0){break}c[55187]=c[55187]&~(1<<c[i>>2]);break L176}else{if(e>>>0<(c[55190]|0)>>>0){at();return 0}r=e+16|0;if((c[r>>2]|0)==(K|0)){c[r>>2]=L}else{c[e+20>>2]=L}if((L|0)==0){break L176}}}while(0);if(L>>>0<(c[55190]|0)>>>0){at();return 0}c[L+24>>2]=e;i=c[K+16>>2]|0;do{if((i|0)!=0){if(i>>>0<(c[55190]|0)>>>0){at();return 0}else{c[L+16>>2]=i;c[i+24>>2]=L;break}}}while(0);i=c[K+20>>2]|0;if((i|0)==0){break}if(i>>>0<(c[55190]|0)>>>0){at();return 0}else{c[L+20>>2]=i;c[i+24>>2]=L;break}}}while(0);do{if(J>>>0<16>>>0){e=J+g|0;c[K+4>>2]=e|3;i=q+(e+4)|0;c[i>>2]=c[i>>2]|1}else{c[K+4>>2]=g|3;c[q+(g|4)>>2]=J|1;c[q+(J+g)>>2]=J;i=J>>>3;if(J>>>0<256>>>0){e=i<<1;m=220784+(e<<2)|0;r=c[55186]|0;j=1<<i;do{if((r&j|0)==0){c[55186]=r|j;O=m;P=220784+(e+2<<2)|0}else{i=220784+(e+2<<2)|0;d=c[i>>2]|0;if(d>>>0>=(c[55190]|0)>>>0){O=d;P=i;break}at();return 0}}while(0);c[P>>2]=k;c[O+12>>2]=k;c[q+(g+8)>>2]=O;c[q+(g+12)>>2]=m;break}e=p;j=J>>>8;do{if((j|0)==0){Q=0}else{if(J>>>0>16777215>>>0){Q=31;break}r=(j+1048320|0)>>>16&8;i=j<<r;d=(i+520192|0)>>>16&4;B=i<<d;i=(B+245760|0)>>>16&2;l=14-(d|r|i)+(B<<i>>>15)|0;Q=J>>>((l+7|0)>>>0)&1|l<<1}}while(0);j=221048+(Q<<2)|0;c[q+(g+28)>>2]=Q;c[q+(g+20)>>2]=0;c[q+(g+16)>>2]=0;m=c[55187]|0;l=1<<Q;if((m&l|0)==0){c[55187]=m|l;c[j>>2]=e;c[q+(g+24)>>2]=j;c[q+(g+12)>>2]=e;c[q+(g+8)>>2]=e;break}if((Q|0)==31){R=0}else{R=25-(Q>>>1)|0}l=J<<R;m=c[j>>2]|0;while(1){if((c[m+4>>2]&-8|0)==(J|0)){break}S=m+16+(l>>>31<<2)|0;j=c[S>>2]|0;if((j|0)==0){T=151;break}else{l=l<<1;m=j}}if((T|0)==151){if(S>>>0<(c[55190]|0)>>>0){at();return 0}else{c[S>>2]=e;c[q+(g+24)>>2]=m;c[q+(g+12)>>2]=e;c[q+(g+8)>>2]=e;break}}l=m+8|0;j=c[l>>2]|0;i=c[55190]|0;if(m>>>0<i>>>0){at();return 0}if(j>>>0<i>>>0){at();return 0}else{c[j+12>>2]=e;c[l>>2]=e;c[q+(g+8)>>2]=j;c[q+(g+12)>>2]=m;c[q+(g+24)>>2]=0;break}}}while(0);q=K+8|0;if((q|0)==0){o=g;break}else{n=q}return n|0}}while(0);K=c[55188]|0;if(o>>>0<=K>>>0){S=K-o|0;J=c[55191]|0;if(S>>>0>15>>>0){R=J;c[55191]=R+o;c[55188]=S;c[R+(o+4)>>2]=S|1;c[R+K>>2]=S;c[J+4>>2]=o|3}else{c[55188]=0;c[55191]=0;c[J+4>>2]=K|3;S=J+(K+4)|0;c[S>>2]=c[S>>2]|1}n=J+8|0;return n|0}J=c[55189]|0;if(o>>>0<J>>>0){S=J-o|0;c[55189]=S;J=c[55192]|0;K=J;c[55192]=K+o;c[K+(o+4)>>2]=S|1;c[J+4>>2]=o|3;n=J+8|0;return n|0}do{if((c[27472]|0)==0){J=aE(30)|0;if((J-1&J|0)==0){c[27474]=J;c[27473]=J;c[27475]=-1;c[27476]=-1;c[27477]=0;c[55297]=0;c[27472]=(be(0)|0)&-16^1431655768;break}else{at();return 0}}}while(0);J=o+48|0;S=c[27474]|0;K=o+47|0;R=S+K|0;Q=-S|0;S=R&Q;if(S>>>0<=o>>>0){n=0;return n|0}O=c[55296]|0;do{if((O|0)!=0){P=c[55294]|0;L=P+S|0;if(L>>>0<=P>>>0|L>>>0>O>>>0){n=0}else{break}return n|0}}while(0);L268:do{if((c[55297]&4|0)==0){O=c[55192]|0;L270:do{if((O|0)==0){T=181}else{L=O;P=221192;while(1){U=P|0;M=c[U>>2]|0;if(M>>>0<=L>>>0){V=P+4|0;if((M+(c[V>>2]|0)|0)>>>0>L>>>0){break}}M=c[P+8>>2]|0;if((M|0)==0){T=181;break L270}else{P=M}}if((P|0)==0){T=181;break}L=R-(c[55189]|0)&Q;if(L>>>0>=2147483647>>>0){W=0;break}m=bc(L|0)|0;e=(m|0)==((c[U>>2]|0)+(c[V>>2]|0)|0);X=e?m:-1;Y=e?L:0;Z=m;_=L;T=190}}while(0);do{if((T|0)==181){O=bc(0)|0;if((O|0)==-1){W=0;break}g=O;L=c[27473]|0;m=L-1|0;if((m&g|0)==0){$=S}else{$=S-g+(m+g&-L)|0}L=c[55294]|0;g=L+$|0;if(!($>>>0>o>>>0&$>>>0<2147483647>>>0)){W=0;break}m=c[55296]|0;if((m|0)!=0){if(g>>>0<=L>>>0|g>>>0>m>>>0){W=0;break}}m=bc($|0)|0;g=(m|0)==(O|0);X=g?O:-1;Y=g?$:0;Z=m;_=$;T=190}}while(0);L290:do{if((T|0)==190){m=-_|0;if((X|0)!=-1){aa=Y;ab=X;T=201;break L268}do{if((Z|0)!=-1&_>>>0<2147483647>>>0&_>>>0<J>>>0){g=c[27474]|0;O=K-_+g&-g;if(O>>>0>=2147483647>>>0){ac=_;break}if((bc(O|0)|0)==-1){bc(m|0)|0;W=Y;break L290}else{ac=O+_|0;break}}else{ac=_}}while(0);if((Z|0)==-1){W=Y}else{aa=ac;ab=Z;T=201;break L268}}}while(0);c[55297]=c[55297]|4;ad=W;T=198}else{ad=0;T=198}}while(0);do{if((T|0)==198){if(S>>>0>=2147483647>>>0){break}W=bc(S|0)|0;Z=bc(0)|0;if(!((Z|0)!=-1&(W|0)!=-1&W>>>0<Z>>>0)){break}ac=Z-W|0;Z=ac>>>0>(o+40|0)>>>0;Y=Z?W:-1;if((Y|0)!=-1){aa=Z?ac:ad;ab=Y;T=201}}}while(0);do{if((T|0)==201){ad=(c[55294]|0)+aa|0;c[55294]=ad;if(ad>>>0>(c[55295]|0)>>>0){c[55295]=ad}ad=c[55192]|0;L310:do{if((ad|0)==0){S=c[55190]|0;if((S|0)==0|ab>>>0<S>>>0){c[55190]=ab}c[55298]=ab;c[55299]=aa;c[55301]=0;c[55195]=c[27472];c[55194]=-1;S=0;do{Y=S<<1;ac=220784+(Y<<2)|0;c[220784+(Y+3<<2)>>2]=ac;c[220784+(Y+2<<2)>>2]=ac;S=S+1|0;}while(S>>>0<32>>>0);S=ab+8|0;if((S&7|0)==0){ae=0}else{ae=-S&7}S=aa-40-ae|0;c[55192]=ab+ae;c[55189]=S;c[ab+(ae+4)>>2]=S|1;c[ab+(aa-36)>>2]=40;c[55193]=c[27476]}else{S=221192;while(1){af=c[S>>2]|0;ag=S+4|0;ah=c[ag>>2]|0;if((ab|0)==(af+ah|0)){T=213;break}ac=c[S+8>>2]|0;if((ac|0)==0){break}else{S=ac}}do{if((T|0)==213){if((c[S+12>>2]&8|0)!=0){break}ac=ad;if(!(ac>>>0>=af>>>0&ac>>>0<ab>>>0)){break}c[ag>>2]=ah+aa;ac=c[55192]|0;Y=(c[55189]|0)+aa|0;Z=ac;W=ac+8|0;if((W&7|0)==0){ai=0}else{ai=-W&7}W=Y-ai|0;c[55192]=Z+ai;c[55189]=W;c[Z+(ai+4)>>2]=W|1;c[Z+(Y+4)>>2]=40;c[55193]=c[27476];break L310}}while(0);if(ab>>>0<(c[55190]|0)>>>0){c[55190]=ab}S=ab+aa|0;Y=221192;while(1){aj=Y|0;if((c[aj>>2]|0)==(S|0)){T=223;break}Z=c[Y+8>>2]|0;if((Z|0)==0){break}else{Y=Z}}do{if((T|0)==223){if((c[Y+12>>2]&8|0)!=0){break}c[aj>>2]=ab;S=Y+4|0;c[S>>2]=(c[S>>2]|0)+aa;S=ab+8|0;if((S&7|0)==0){ak=0}else{ak=-S&7}S=ab+(aa+8)|0;if((S&7|0)==0){al=0}else{al=-S&7}S=ab+(al+aa)|0;Z=S;W=ak+o|0;ac=ab+W|0;_=ac;K=S-(ab+ak)-o|0;c[ab+(ak+4)>>2]=o|3;do{if((Z|0)==(c[55192]|0)){J=(c[55189]|0)+K|0;c[55189]=J;c[55192]=_;c[ab+(W+4)>>2]=J|1}else{if((Z|0)==(c[55191]|0)){J=(c[55188]|0)+K|0;c[55188]=J;c[55191]=_;c[ab+(W+4)>>2]=J|1;c[ab+(J+W)>>2]=J;break}J=aa+4|0;X=c[ab+(J+al)>>2]|0;if((X&3|0)==1){$=X&-8;V=X>>>3;L355:do{if(X>>>0<256>>>0){U=c[ab+((al|8)+aa)>>2]|0;Q=c[ab+(aa+12+al)>>2]|0;R=220784+(V<<1<<2)|0;do{if((U|0)!=(R|0)){if(U>>>0<(c[55190]|0)>>>0){at();return 0}if((c[U+12>>2]|0)==(Z|0)){break}at();return 0}}while(0);if((Q|0)==(U|0)){c[55186]=c[55186]&~(1<<V);break}do{if((Q|0)==(R|0)){am=Q+8|0}else{if(Q>>>0<(c[55190]|0)>>>0){at();return 0}m=Q+8|0;if((c[m>>2]|0)==(Z|0)){am=m;break}at();return 0}}while(0);c[U+12>>2]=Q;c[am>>2]=U}else{R=S;m=c[ab+((al|24)+aa)>>2]|0;P=c[ab+(aa+12+al)>>2]|0;do{if((P|0)==(R|0)){O=al|16;g=ab+(J+O)|0;L=c[g>>2]|0;if((L|0)==0){e=ab+(O+aa)|0;O=c[e>>2]|0;if((O|0)==0){an=0;break}else{ao=O;ap=e}}else{ao=L;ap=g}while(1){g=ao+20|0;L=c[g>>2]|0;if((L|0)!=0){ao=L;ap=g;continue}g=ao+16|0;L=c[g>>2]|0;if((L|0)==0){break}else{ao=L;ap=g}}if(ap>>>0<(c[55190]|0)>>>0){at();return 0}else{c[ap>>2]=0;an=ao;break}}else{g=c[ab+((al|8)+aa)>>2]|0;if(g>>>0<(c[55190]|0)>>>0){at();return 0}L=g+12|0;if((c[L>>2]|0)!=(R|0)){at();return 0}e=P+8|0;if((c[e>>2]|0)==(R|0)){c[L>>2]=P;c[e>>2]=g;an=P;break}else{at();return 0}}}while(0);if((m|0)==0){break}P=ab+(aa+28+al)|0;U=221048+(c[P>>2]<<2)|0;do{if((R|0)==(c[U>>2]|0)){c[U>>2]=an;if((an|0)!=0){break}c[55187]=c[55187]&~(1<<c[P>>2]);break L355}else{if(m>>>0<(c[55190]|0)>>>0){at();return 0}Q=m+16|0;if((c[Q>>2]|0)==(R|0)){c[Q>>2]=an}else{c[m+20>>2]=an}if((an|0)==0){break L355}}}while(0);if(an>>>0<(c[55190]|0)>>>0){at();return 0}c[an+24>>2]=m;R=al|16;P=c[ab+(R+aa)>>2]|0;do{if((P|0)!=0){if(P>>>0<(c[55190]|0)>>>0){at();return 0}else{c[an+16>>2]=P;c[P+24>>2]=an;break}}}while(0);P=c[ab+(J+R)>>2]|0;if((P|0)==0){break}if(P>>>0<(c[55190]|0)>>>0){at();return 0}else{c[an+20>>2]=P;c[P+24>>2]=an;break}}}while(0);aq=ab+(($|al)+aa)|0;ar=$+K|0}else{aq=Z;ar=K}J=aq+4|0;c[J>>2]=c[J>>2]&-2;c[ab+(W+4)>>2]=ar|1;c[ab+(ar+W)>>2]=ar;J=ar>>>3;if(ar>>>0<256>>>0){V=J<<1;X=220784+(V<<2)|0;P=c[55186]|0;m=1<<J;do{if((P&m|0)==0){c[55186]=P|m;as=X;au=220784+(V+2<<2)|0}else{J=220784+(V+2<<2)|0;U=c[J>>2]|0;if(U>>>0>=(c[55190]|0)>>>0){as=U;au=J;break}at();return 0}}while(0);c[au>>2]=_;c[as+12>>2]=_;c[ab+(W+8)>>2]=as;c[ab+(W+12)>>2]=X;break}V=ac;m=ar>>>8;do{if((m|0)==0){av=0}else{if(ar>>>0>16777215>>>0){av=31;break}P=(m+1048320|0)>>>16&8;$=m<<P;J=($+520192|0)>>>16&4;U=$<<J;$=(U+245760|0)>>>16&2;Q=14-(J|P|$)+(U<<$>>>15)|0;av=ar>>>((Q+7|0)>>>0)&1|Q<<1}}while(0);m=221048+(av<<2)|0;c[ab+(W+28)>>2]=av;c[ab+(W+20)>>2]=0;c[ab+(W+16)>>2]=0;X=c[55187]|0;Q=1<<av;if((X&Q|0)==0){c[55187]=X|Q;c[m>>2]=V;c[ab+(W+24)>>2]=m;c[ab+(W+12)>>2]=V;c[ab+(W+8)>>2]=V;break}if((av|0)==31){aw=0}else{aw=25-(av>>>1)|0}Q=ar<<aw;X=c[m>>2]|0;while(1){if((c[X+4>>2]&-8|0)==(ar|0)){break}ax=X+16+(Q>>>31<<2)|0;m=c[ax>>2]|0;if((m|0)==0){T=296;break}else{Q=Q<<1;X=m}}if((T|0)==296){if(ax>>>0<(c[55190]|0)>>>0){at();return 0}else{c[ax>>2]=V;c[ab+(W+24)>>2]=X;c[ab+(W+12)>>2]=V;c[ab+(W+8)>>2]=V;break}}Q=X+8|0;m=c[Q>>2]|0;$=c[55190]|0;if(X>>>0<$>>>0){at();return 0}if(m>>>0<$>>>0){at();return 0}else{c[m+12>>2]=V;c[Q>>2]=V;c[ab+(W+8)>>2]=m;c[ab+(W+12)>>2]=X;c[ab+(W+24)>>2]=0;break}}}while(0);n=ab+(ak|8)|0;return n|0}}while(0);Y=ad;W=221192;while(1){ay=c[W>>2]|0;if(ay>>>0<=Y>>>0){az=c[W+4>>2]|0;aA=ay+az|0;if(aA>>>0>Y>>>0){break}}W=c[W+8>>2]|0}W=ay+(az-39)|0;if((W&7|0)==0){aB=0}else{aB=-W&7}W=ay+(az-47+aB)|0;ac=W>>>0<(ad+16|0)>>>0?Y:W;W=ac+8|0;_=ab+8|0;if((_&7|0)==0){aC=0}else{aC=-_&7}_=aa-40-aC|0;c[55192]=ab+aC;c[55189]=_;c[ab+(aC+4)>>2]=_|1;c[ab+(aa-36)>>2]=40;c[55193]=c[27476];c[ac+4>>2]=27;c[W>>2]=c[55298];c[W+4>>2]=c[55299];c[W+8>>2]=c[55300];c[W+12>>2]=c[55301];c[55298]=ab;c[55299]=aa;c[55301]=0;c[55300]=W;W=ac+28|0;c[W>>2]=7;if((ac+32|0)>>>0<aA>>>0){_=W;while(1){W=_+4|0;c[W>>2]=7;if((_+8|0)>>>0<aA>>>0){_=W}else{break}}}if((ac|0)==(Y|0)){break}_=ac-ad|0;W=Y+(_+4)|0;c[W>>2]=c[W>>2]&-2;c[ad+4>>2]=_|1;c[Y+_>>2]=_;W=_>>>3;if(_>>>0<256>>>0){K=W<<1;Z=220784+(K<<2)|0;S=c[55186]|0;m=1<<W;do{if((S&m|0)==0){c[55186]=S|m;aD=Z;aF=220784+(K+2<<2)|0}else{W=220784+(K+2<<2)|0;Q=c[W>>2]|0;if(Q>>>0>=(c[55190]|0)>>>0){aD=Q;aF=W;break}at();return 0}}while(0);c[aF>>2]=ad;c[aD+12>>2]=ad;c[ad+8>>2]=aD;c[ad+12>>2]=Z;break}K=ad;m=_>>>8;do{if((m|0)==0){aG=0}else{if(_>>>0>16777215>>>0){aG=31;break}S=(m+1048320|0)>>>16&8;Y=m<<S;ac=(Y+520192|0)>>>16&4;W=Y<<ac;Y=(W+245760|0)>>>16&2;Q=14-(ac|S|Y)+(W<<Y>>>15)|0;aG=_>>>((Q+7|0)>>>0)&1|Q<<1}}while(0);m=221048+(aG<<2)|0;c[ad+28>>2]=aG;c[ad+20>>2]=0;c[ad+16>>2]=0;Z=c[55187]|0;Q=1<<aG;if((Z&Q|0)==0){c[55187]=Z|Q;c[m>>2]=K;c[ad+24>>2]=m;c[ad+12>>2]=ad;c[ad+8>>2]=ad;break}if((aG|0)==31){aH=0}else{aH=25-(aG>>>1)|0}Q=_<<aH;Z=c[m>>2]|0;while(1){if((c[Z+4>>2]&-8|0)==(_|0)){break}aI=Z+16+(Q>>>31<<2)|0;m=c[aI>>2]|0;if((m|0)==0){T=331;break}else{Q=Q<<1;Z=m}}if((T|0)==331){if(aI>>>0<(c[55190]|0)>>>0){at();return 0}else{c[aI>>2]=K;c[ad+24>>2]=Z;c[ad+12>>2]=ad;c[ad+8>>2]=ad;break}}Q=Z+8|0;_=c[Q>>2]|0;m=c[55190]|0;if(Z>>>0<m>>>0){at();return 0}if(_>>>0<m>>>0){at();return 0}else{c[_+12>>2]=K;c[Q>>2]=K;c[ad+8>>2]=_;c[ad+12>>2]=Z;c[ad+24>>2]=0;break}}}while(0);ad=c[55189]|0;if(ad>>>0<=o>>>0){break}_=ad-o|0;c[55189]=_;ad=c[55192]|0;Q=ad;c[55192]=Q+o;c[Q+(o+4)>>2]=_|1;c[ad+4>>2]=o|3;n=ad+8|0;return n|0}}while(0);c[(a8()|0)>>2]=12;n=0;return n|0}function jn(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,A=0,B=0,C=0,D=0,E=0,F=0,G=0,H=0,I=0,J=0,K=0,L=0,M=0,N=0,O=0;if((a|0)==0){return}b=a-8|0;d=b;e=c[55190]|0;if(b>>>0<e>>>0){at()}f=c[a-4>>2]|0;g=f&3;if((g|0)==1){at()}h=f&-8;i=a+(h-8)|0;j=i;L10:do{if((f&1|0)==0){k=c[b>>2]|0;if((g|0)==0){return}l=-8-k|0;m=a+l|0;n=m;o=k+h|0;if(m>>>0<e>>>0){at()}if((n|0)==(c[55191]|0)){p=a+(h-4)|0;if((c[p>>2]&3|0)!=3){q=n;r=o;break}c[55188]=o;c[p>>2]=c[p>>2]&-2;c[a+(l+4)>>2]=o|1;c[i>>2]=o;return}p=k>>>3;if(k>>>0<256>>>0){k=c[a+(l+8)>>2]|0;s=c[a+(l+12)>>2]|0;t=220784+(p<<1<<2)|0;do{if((k|0)!=(t|0)){if(k>>>0<e>>>0){at()}if((c[k+12>>2]|0)==(n|0)){break}at()}}while(0);if((s|0)==(k|0)){c[55186]=c[55186]&~(1<<p);q=n;r=o;break}do{if((s|0)==(t|0)){u=s+8|0}else{if(s>>>0<e>>>0){at()}v=s+8|0;if((c[v>>2]|0)==(n|0)){u=v;break}at()}}while(0);c[k+12>>2]=s;c[u>>2]=k;q=n;r=o;break}t=m;p=c[a+(l+24)>>2]|0;v=c[a+(l+12)>>2]|0;do{if((v|0)==(t|0)){w=a+(l+20)|0;x=c[w>>2]|0;if((x|0)==0){y=a+(l+16)|0;z=c[y>>2]|0;if((z|0)==0){A=0;break}else{B=z;C=y}}else{B=x;C=w}while(1){w=B+20|0;x=c[w>>2]|0;if((x|0)!=0){B=x;C=w;continue}w=B+16|0;x=c[w>>2]|0;if((x|0)==0){break}else{B=x;C=w}}if(C>>>0<e>>>0){at()}else{c[C>>2]=0;A=B;break}}else{w=c[a+(l+8)>>2]|0;if(w>>>0<e>>>0){at()}x=w+12|0;if((c[x>>2]|0)!=(t|0)){at()}y=v+8|0;if((c[y>>2]|0)==(t|0)){c[x>>2]=v;c[y>>2]=w;A=v;break}else{at()}}}while(0);if((p|0)==0){q=n;r=o;break}v=a+(l+28)|0;m=221048+(c[v>>2]<<2)|0;do{if((t|0)==(c[m>>2]|0)){c[m>>2]=A;if((A|0)!=0){break}c[55187]=c[55187]&~(1<<c[v>>2]);q=n;r=o;break L10}else{if(p>>>0<(c[55190]|0)>>>0){at()}k=p+16|0;if((c[k>>2]|0)==(t|0)){c[k>>2]=A}else{c[p+20>>2]=A}if((A|0)==0){q=n;r=o;break L10}}}while(0);if(A>>>0<(c[55190]|0)>>>0){at()}c[A+24>>2]=p;t=c[a+(l+16)>>2]|0;do{if((t|0)!=0){if(t>>>0<(c[55190]|0)>>>0){at()}else{c[A+16>>2]=t;c[t+24>>2]=A;break}}}while(0);t=c[a+(l+20)>>2]|0;if((t|0)==0){q=n;r=o;break}if(t>>>0<(c[55190]|0)>>>0){at()}else{c[A+20>>2]=t;c[t+24>>2]=A;q=n;r=o;break}}else{q=d;r=h}}while(0);d=q;if(d>>>0>=i>>>0){at()}A=a+(h-4)|0;e=c[A>>2]|0;if((e&1|0)==0){at()}do{if((e&2|0)==0){if((j|0)==(c[55192]|0)){B=(c[55189]|0)+r|0;c[55189]=B;c[55192]=q;c[q+4>>2]=B|1;if((q|0)!=(c[55191]|0)){return}c[55191]=0;c[55188]=0;return}if((j|0)==(c[55191]|0)){B=(c[55188]|0)+r|0;c[55188]=B;c[55191]=q;c[q+4>>2]=B|1;c[d+B>>2]=B;return}B=(e&-8)+r|0;C=e>>>3;L112:do{if(e>>>0<256>>>0){u=c[a+h>>2]|0;g=c[a+(h|4)>>2]|0;b=220784+(C<<1<<2)|0;do{if((u|0)!=(b|0)){if(u>>>0<(c[55190]|0)>>>0){at()}if((c[u+12>>2]|0)==(j|0)){break}at()}}while(0);if((g|0)==(u|0)){c[55186]=c[55186]&~(1<<C);break}do{if((g|0)==(b|0)){D=g+8|0}else{if(g>>>0<(c[55190]|0)>>>0){at()}f=g+8|0;if((c[f>>2]|0)==(j|0)){D=f;break}at()}}while(0);c[u+12>>2]=g;c[D>>2]=u}else{b=i;f=c[a+(h+16)>>2]|0;t=c[a+(h|4)>>2]|0;do{if((t|0)==(b|0)){p=a+(h+12)|0;v=c[p>>2]|0;if((v|0)==0){m=a+(h+8)|0;k=c[m>>2]|0;if((k|0)==0){E=0;break}else{F=k;G=m}}else{F=v;G=p}while(1){p=F+20|0;v=c[p>>2]|0;if((v|0)!=0){F=v;G=p;continue}p=F+16|0;v=c[p>>2]|0;if((v|0)==0){break}else{F=v;G=p}}if(G>>>0<(c[55190]|0)>>>0){at()}else{c[G>>2]=0;E=F;break}}else{p=c[a+h>>2]|0;if(p>>>0<(c[55190]|0)>>>0){at()}v=p+12|0;if((c[v>>2]|0)!=(b|0)){at()}m=t+8|0;if((c[m>>2]|0)==(b|0)){c[v>>2]=t;c[m>>2]=p;E=t;break}else{at()}}}while(0);if((f|0)==0){break}t=a+(h+20)|0;u=221048+(c[t>>2]<<2)|0;do{if((b|0)==(c[u>>2]|0)){c[u>>2]=E;if((E|0)!=0){break}c[55187]=c[55187]&~(1<<c[t>>2]);break L112}else{if(f>>>0<(c[55190]|0)>>>0){at()}g=f+16|0;if((c[g>>2]|0)==(b|0)){c[g>>2]=E}else{c[f+20>>2]=E}if((E|0)==0){break L112}}}while(0);if(E>>>0<(c[55190]|0)>>>0){at()}c[E+24>>2]=f;b=c[a+(h+8)>>2]|0;do{if((b|0)!=0){if(b>>>0<(c[55190]|0)>>>0){at()}else{c[E+16>>2]=b;c[b+24>>2]=E;break}}}while(0);b=c[a+(h+12)>>2]|0;if((b|0)==0){break}if(b>>>0<(c[55190]|0)>>>0){at()}else{c[E+20>>2]=b;c[b+24>>2]=E;break}}}while(0);c[q+4>>2]=B|1;c[d+B>>2]=B;if((q|0)!=(c[55191]|0)){H=B;break}c[55188]=B;return}else{c[A>>2]=e&-2;c[q+4>>2]=r|1;c[d+r>>2]=r;H=r}}while(0);r=H>>>3;if(H>>>0<256>>>0){d=r<<1;e=220784+(d<<2)|0;A=c[55186]|0;E=1<<r;do{if((A&E|0)==0){c[55186]=A|E;I=e;J=220784+(d+2<<2)|0}else{r=220784+(d+2<<2)|0;h=c[r>>2]|0;if(h>>>0>=(c[55190]|0)>>>0){I=h;J=r;break}at()}}while(0);c[J>>2]=q;c[I+12>>2]=q;c[q+8>>2]=I;c[q+12>>2]=e;return}e=q;I=H>>>8;do{if((I|0)==0){K=0}else{if(H>>>0>16777215>>>0){K=31;break}J=(I+1048320|0)>>>16&8;d=I<<J;E=(d+520192|0)>>>16&4;A=d<<E;d=(A+245760|0)>>>16&2;r=14-(E|J|d)+(A<<d>>>15)|0;K=H>>>((r+7|0)>>>0)&1|r<<1}}while(0);I=221048+(K<<2)|0;c[q+28>>2]=K;c[q+20>>2]=0;c[q+16>>2]=0;r=c[55187]|0;d=1<<K;do{if((r&d|0)==0){c[55187]=r|d;c[I>>2]=e;c[q+24>>2]=I;c[q+12>>2]=q;c[q+8>>2]=q}else{if((K|0)==31){L=0}else{L=25-(K>>>1)|0}A=H<<L;J=c[I>>2]|0;while(1){if((c[J+4>>2]&-8|0)==(H|0)){break}M=J+16+(A>>>31<<2)|0;E=c[M>>2]|0;if((E|0)==0){N=129;break}else{A=A<<1;J=E}}if((N|0)==129){if(M>>>0<(c[55190]|0)>>>0){at()}else{c[M>>2]=e;c[q+24>>2]=J;c[q+12>>2]=q;c[q+8>>2]=q;break}}A=J+8|0;B=c[A>>2]|0;E=c[55190]|0;if(J>>>0<E>>>0){at()}if(B>>>0<E>>>0){at()}else{c[B+12>>2]=e;c[A>>2]=e;c[q+8>>2]=B;c[q+12>>2]=J;c[q+24>>2]=0;break}}}while(0);q=(c[55194]|0)-1|0;c[55194]=q;if((q|0)==0){O=221200}else{return}while(1){q=c[O>>2]|0;if((q|0)==0){break}else{O=q+8|0}}c[55194]=-1;return}function jo(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0;if((a|0)==0){d=jm(b)|0;return d|0}if(b>>>0>4294967231>>>0){c[(a8()|0)>>2]=12;d=0;return d|0}if(b>>>0<11>>>0){e=16}else{e=b+11&-8}f=jp(a-8|0,e)|0;if((f|0)!=0){d=f+8|0;return d|0}f=jm(b)|0;if((f|0)==0){d=0;return d|0}e=c[a-4>>2]|0;g=(e&-8)-((e&3|0)==0?8:4)|0;js(f|0,a|0,g>>>0<b>>>0?g:b)|0;jn(a);d=f;return d|0}function jp(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,A=0;d=a+4|0;e=c[d>>2]|0;f=e&-8;g=a;h=g+f|0;i=h;j=c[55190]|0;if(g>>>0<j>>>0){at();return 0}k=e&3;if(!((k|0)!=1&g>>>0<h>>>0)){at();return 0}l=g+(f|4)|0;m=c[l>>2]|0;if((m&1|0)==0){at();return 0}if((k|0)==0){if(b>>>0<256>>>0){n=0;return n|0}do{if(f>>>0>=(b+4|0)>>>0){if((f-b|0)>>>0>c[27474]<<1>>>0){break}else{n=a}return n|0}}while(0);n=0;return n|0}if(f>>>0>=b>>>0){k=f-b|0;if(k>>>0<=15>>>0){n=a;return n|0}c[d>>2]=e&1|b|2;c[g+(b+4)>>2]=k|3;c[l>>2]=c[l>>2]|1;jq(g+b|0,k);n=a;return n|0}if((i|0)==(c[55192]|0)){k=(c[55189]|0)+f|0;if(k>>>0<=b>>>0){n=0;return n|0}l=k-b|0;c[d>>2]=e&1|b|2;c[g+(b+4)>>2]=l|1;c[55192]=g+b;c[55189]=l;n=a;return n|0}if((i|0)==(c[55191]|0)){l=(c[55188]|0)+f|0;if(l>>>0<b>>>0){n=0;return n|0}k=l-b|0;if(k>>>0>15>>>0){c[d>>2]=e&1|b|2;c[g+(b+4)>>2]=k|1;c[g+l>>2]=k;o=g+(l+4)|0;c[o>>2]=c[o>>2]&-2;p=g+b|0;q=k}else{c[d>>2]=e&1|l|2;e=g+(l+4)|0;c[e>>2]=c[e>>2]|1;p=0;q=0}c[55188]=q;c[55191]=p;n=a;return n|0}if((m&2|0)!=0){n=0;return n|0}p=(m&-8)+f|0;if(p>>>0<b>>>0){n=0;return n|0}q=p-b|0;e=m>>>3;L52:do{if(m>>>0<256>>>0){l=c[g+(f+8)>>2]|0;k=c[g+(f+12)>>2]|0;o=220784+(e<<1<<2)|0;do{if((l|0)!=(o|0)){if(l>>>0<j>>>0){at();return 0}if((c[l+12>>2]|0)==(i|0)){break}at();return 0}}while(0);if((k|0)==(l|0)){c[55186]=c[55186]&~(1<<e);break}do{if((k|0)==(o|0)){r=k+8|0}else{if(k>>>0<j>>>0){at();return 0}s=k+8|0;if((c[s>>2]|0)==(i|0)){r=s;break}at();return 0}}while(0);c[l+12>>2]=k;c[r>>2]=l}else{o=h;s=c[g+(f+24)>>2]|0;t=c[g+(f+12)>>2]|0;do{if((t|0)==(o|0)){u=g+(f+20)|0;v=c[u>>2]|0;if((v|0)==0){w=g+(f+16)|0;x=c[w>>2]|0;if((x|0)==0){y=0;break}else{z=x;A=w}}else{z=v;A=u}while(1){u=z+20|0;v=c[u>>2]|0;if((v|0)!=0){z=v;A=u;continue}u=z+16|0;v=c[u>>2]|0;if((v|0)==0){break}else{z=v;A=u}}if(A>>>0<j>>>0){at();return 0}else{c[A>>2]=0;y=z;break}}else{u=c[g+(f+8)>>2]|0;if(u>>>0<j>>>0){at();return 0}v=u+12|0;if((c[v>>2]|0)!=(o|0)){at();return 0}w=t+8|0;if((c[w>>2]|0)==(o|0)){c[v>>2]=t;c[w>>2]=u;y=t;break}else{at();return 0}}}while(0);if((s|0)==0){break}t=g+(f+28)|0;l=221048+(c[t>>2]<<2)|0;do{if((o|0)==(c[l>>2]|0)){c[l>>2]=y;if((y|0)!=0){break}c[55187]=c[55187]&~(1<<c[t>>2]);break L52}else{if(s>>>0<(c[55190]|0)>>>0){at();return 0}k=s+16|0;if((c[k>>2]|0)==(o|0)){c[k>>2]=y}else{c[s+20>>2]=y}if((y|0)==0){break L52}}}while(0);if(y>>>0<(c[55190]|0)>>>0){at();return 0}c[y+24>>2]=s;o=c[g+(f+16)>>2]|0;do{if((o|0)!=0){if(o>>>0<(c[55190]|0)>>>0){at();return 0}else{c[y+16>>2]=o;c[o+24>>2]=y;break}}}while(0);o=c[g+(f+20)>>2]|0;if((o|0)==0){break}if(o>>>0<(c[55190]|0)>>>0){at();return 0}else{c[y+20>>2]=o;c[o+24>>2]=y;break}}}while(0);if(q>>>0<16>>>0){c[d>>2]=p|c[d>>2]&1|2;y=g+(p|4)|0;c[y>>2]=c[y>>2]|1;n=a;return n|0}else{c[d>>2]=c[d>>2]&1|b|2;c[g+(b+4)>>2]=q|3;d=g+(p|4)|0;c[d>>2]=c[d>>2]|1;jq(g+b|0,q);n=a;return n|0}return 0}function jq(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,A=0,B=0,C=0,D=0,E=0,F=0,G=0,H=0,I=0,J=0,K=0,L=0;d=a;e=d+b|0;f=e;g=c[a+4>>2]|0;L1:do{if((g&1|0)==0){h=c[a>>2]|0;if((g&3|0)==0){return}i=d+(-h|0)|0;j=i;k=h+b|0;l=c[55190]|0;if(i>>>0<l>>>0){at()}if((j|0)==(c[55191]|0)){m=d+(b+4)|0;if((c[m>>2]&3|0)!=3){n=j;o=k;break}c[55188]=k;c[m>>2]=c[m>>2]&-2;c[d+(4-h)>>2]=k|1;c[e>>2]=k;return}m=h>>>3;if(h>>>0<256>>>0){p=c[d+(8-h)>>2]|0;q=c[d+(12-h)>>2]|0;r=220784+(m<<1<<2)|0;do{if((p|0)!=(r|0)){if(p>>>0<l>>>0){at()}if((c[p+12>>2]|0)==(j|0)){break}at()}}while(0);if((q|0)==(p|0)){c[55186]=c[55186]&~(1<<m);n=j;o=k;break}do{if((q|0)==(r|0)){s=q+8|0}else{if(q>>>0<l>>>0){at()}t=q+8|0;if((c[t>>2]|0)==(j|0)){s=t;break}at()}}while(0);c[p+12>>2]=q;c[s>>2]=p;n=j;o=k;break}r=i;m=c[d+(24-h)>>2]|0;t=c[d+(12-h)>>2]|0;do{if((t|0)==(r|0)){u=16-h|0;v=d+(u+4)|0;w=c[v>>2]|0;if((w|0)==0){x=d+u|0;u=c[x>>2]|0;if((u|0)==0){y=0;break}else{z=u;A=x}}else{z=w;A=v}while(1){v=z+20|0;w=c[v>>2]|0;if((w|0)!=0){z=w;A=v;continue}v=z+16|0;w=c[v>>2]|0;if((w|0)==0){break}else{z=w;A=v}}if(A>>>0<l>>>0){at()}else{c[A>>2]=0;y=z;break}}else{v=c[d+(8-h)>>2]|0;if(v>>>0<l>>>0){at()}w=v+12|0;if((c[w>>2]|0)!=(r|0)){at()}x=t+8|0;if((c[x>>2]|0)==(r|0)){c[w>>2]=t;c[x>>2]=v;y=t;break}else{at()}}}while(0);if((m|0)==0){n=j;o=k;break}t=d+(28-h)|0;l=221048+(c[t>>2]<<2)|0;do{if((r|0)==(c[l>>2]|0)){c[l>>2]=y;if((y|0)!=0){break}c[55187]=c[55187]&~(1<<c[t>>2]);n=j;o=k;break L1}else{if(m>>>0<(c[55190]|0)>>>0){at()}i=m+16|0;if((c[i>>2]|0)==(r|0)){c[i>>2]=y}else{c[m+20>>2]=y}if((y|0)==0){n=j;o=k;break L1}}}while(0);if(y>>>0<(c[55190]|0)>>>0){at()}c[y+24>>2]=m;r=16-h|0;t=c[d+r>>2]|0;do{if((t|0)!=0){if(t>>>0<(c[55190]|0)>>>0){at()}else{c[y+16>>2]=t;c[t+24>>2]=y;break}}}while(0);t=c[d+(r+4)>>2]|0;if((t|0)==0){n=j;o=k;break}if(t>>>0<(c[55190]|0)>>>0){at()}else{c[y+20>>2]=t;c[t+24>>2]=y;n=j;o=k;break}}else{n=a;o=b}}while(0);a=c[55190]|0;if(e>>>0<a>>>0){at()}y=d+(b+4)|0;z=c[y>>2]|0;do{if((z&2|0)==0){if((f|0)==(c[55192]|0)){A=(c[55189]|0)+o|0;c[55189]=A;c[55192]=n;c[n+4>>2]=A|1;if((n|0)!=(c[55191]|0)){return}c[55191]=0;c[55188]=0;return}if((f|0)==(c[55191]|0)){A=(c[55188]|0)+o|0;c[55188]=A;c[55191]=n;c[n+4>>2]=A|1;c[n+A>>2]=A;return}A=(z&-8)+o|0;s=z>>>3;L100:do{if(z>>>0<256>>>0){g=c[d+(b+8)>>2]|0;t=c[d+(b+12)>>2]|0;h=220784+(s<<1<<2)|0;do{if((g|0)!=(h|0)){if(g>>>0<a>>>0){at()}if((c[g+12>>2]|0)==(f|0)){break}at()}}while(0);if((t|0)==(g|0)){c[55186]=c[55186]&~(1<<s);break}do{if((t|0)==(h|0)){B=t+8|0}else{if(t>>>0<a>>>0){at()}m=t+8|0;if((c[m>>2]|0)==(f|0)){B=m;break}at()}}while(0);c[g+12>>2]=t;c[B>>2]=g}else{h=e;m=c[d+(b+24)>>2]|0;l=c[d+(b+12)>>2]|0;do{if((l|0)==(h|0)){i=d+(b+20)|0;p=c[i>>2]|0;if((p|0)==0){q=d+(b+16)|0;v=c[q>>2]|0;if((v|0)==0){C=0;break}else{D=v;E=q}}else{D=p;E=i}while(1){i=D+20|0;p=c[i>>2]|0;if((p|0)!=0){D=p;E=i;continue}i=D+16|0;p=c[i>>2]|0;if((p|0)==0){break}else{D=p;E=i}}if(E>>>0<a>>>0){at()}else{c[E>>2]=0;C=D;break}}else{i=c[d+(b+8)>>2]|0;if(i>>>0<a>>>0){at()}p=i+12|0;if((c[p>>2]|0)!=(h|0)){at()}q=l+8|0;if((c[q>>2]|0)==(h|0)){c[p>>2]=l;c[q>>2]=i;C=l;break}else{at()}}}while(0);if((m|0)==0){break}l=d+(b+28)|0;g=221048+(c[l>>2]<<2)|0;do{if((h|0)==(c[g>>2]|0)){c[g>>2]=C;if((C|0)!=0){break}c[55187]=c[55187]&~(1<<c[l>>2]);break L100}else{if(m>>>0<(c[55190]|0)>>>0){at()}t=m+16|0;if((c[t>>2]|0)==(h|0)){c[t>>2]=C}else{c[m+20>>2]=C}if((C|0)==0){break L100}}}while(0);if(C>>>0<(c[55190]|0)>>>0){at()}c[C+24>>2]=m;h=c[d+(b+16)>>2]|0;do{if((h|0)!=0){if(h>>>0<(c[55190]|0)>>>0){at()}else{c[C+16>>2]=h;c[h+24>>2]=C;break}}}while(0);h=c[d+(b+20)>>2]|0;if((h|0)==0){break}if(h>>>0<(c[55190]|0)>>>0){at()}else{c[C+20>>2]=h;c[h+24>>2]=C;break}}}while(0);c[n+4>>2]=A|1;c[n+A>>2]=A;if((n|0)!=(c[55191]|0)){F=A;break}c[55188]=A;return}else{c[y>>2]=z&-2;c[n+4>>2]=o|1;c[n+o>>2]=o;F=o}}while(0);o=F>>>3;if(F>>>0<256>>>0){z=o<<1;y=220784+(z<<2)|0;C=c[55186]|0;b=1<<o;do{if((C&b|0)==0){c[55186]=C|b;G=y;H=220784+(z+2<<2)|0}else{o=220784+(z+2<<2)|0;d=c[o>>2]|0;if(d>>>0>=(c[55190]|0)>>>0){G=d;H=o;break}at()}}while(0);c[H>>2]=n;c[G+12>>2]=n;c[n+8>>2]=G;c[n+12>>2]=y;return}y=n;G=F>>>8;do{if((G|0)==0){I=0}else{if(F>>>0>16777215>>>0){I=31;break}H=(G+1048320|0)>>>16&8;z=G<<H;b=(z+520192|0)>>>16&4;C=z<<b;z=(C+245760|0)>>>16&2;o=14-(b|H|z)+(C<<z>>>15)|0;I=F>>>((o+7|0)>>>0)&1|o<<1}}while(0);G=221048+(I<<2)|0;c[n+28>>2]=I;c[n+20>>2]=0;c[n+16>>2]=0;o=c[55187]|0;z=1<<I;if((o&z|0)==0){c[55187]=o|z;c[G>>2]=y;c[n+24>>2]=G;c[n+12>>2]=n;c[n+8>>2]=n;return}if((I|0)==31){J=0}else{J=25-(I>>>1)|0}I=F<<J;J=c[G>>2]|0;while(1){if((c[J+4>>2]&-8|0)==(F|0)){break}K=J+16+(I>>>31<<2)|0;G=c[K>>2]|0;if((G|0)==0){L=126;break}else{I=I<<1;J=G}}if((L|0)==126){if(K>>>0<(c[55190]|0)>>>0){at()}c[K>>2]=y;c[n+24>>2]=J;c[n+12>>2]=n;c[n+8>>2]=n;return}K=J+8|0;L=c[K>>2]|0;I=c[55190]|0;if(J>>>0<I>>>0){at()}if(L>>>0<I>>>0){at()}c[L+12>>2]=y;c[K>>2]=y;c[n+8>>2]=L;c[n+12>>2]=J;c[n+24>>2]=0;return}function jr(b){b=b|0;var c=0;c=b;while(a[c]|0){c=c+1|0}return c-b|0}function js(b,d,e){b=b|0;d=d|0;e=e|0;var f=0;f=b|0;if((b&3)==(d&3)){while(b&3){if((e|0)==0)return f|0;a[b]=a[d]|0;b=b+1|0;d=d+1|0;e=e-1|0}while((e|0)>=4){c[b>>2]=c[d>>2];b=b+4|0;d=d+4|0;e=e-4|0}}while((e|0)>0){a[b]=a[d]|0;b=b+1|0;d=d+1|0;e=e-1|0}return f|0}function jt(b,c,d){b=b|0;c=c|0;d=d|0;var e=0,f=0;while((e|0)<(d|0)){a[b+e|0]=f?0:a[c+e|0]|0;f=f?1:(a[c+e|0]|0)==0;e=e+1|0}return b|0}function ju(b,c){b=b|0;c=c|0;var d=0;do{a[b+d|0]=a[c+d|0];d=d+1|0}while(a[c+(d-1)|0]|0);return b|0}function jv(b,d,e){b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,i=0;f=b+e|0;if((e|0)>=20){d=d&255;g=b&3;h=d|d<<8|d<<16|d<<24;i=f&~3;if(g){g=b+4-g|0;while((b|0)<(g|0)){a[b]=d;b=b+1|0}}while((b|0)<(i|0)){c[b>>2]=h;b=b+4|0}}while((b|0)<(f|0)){a[b]=d;b=b+1|0}return b-e|0}function jw(b,c){b=b|0;c=c|0;var d=0,e=0;d=b+(jr(b)|0)|0;do{a[d+e|0]=a[c+e|0];e=e+1|0}while(a[c+(e-1)|0]|0);return b|0}function jx(a){a=a|0;if((a|0)<65)return a|0;if((a|0)>90)return a|0;return a-65+97|0}function jy(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return bk[a&15](b|0,c|0,d|0)|0}function jz(a,b){a=a|0;b=b|0;bl[a&1](b|0)}function jA(a,b){a=a|0;b=b|0;return bm[a&1](b|0)|0}function jB(a){a=a|0;bn[a&1]()}function jC(a,b,c){a=a|0;b=b|0;c=c|0;return bo[a&7](b|0,c|0)|0}function jD(a,b,c){a=a|0;b=b|0;c=c|0;ab(0);return 0}function jE(a){a=a|0;ab(1)}function jF(a){a=a|0;ab(2);return 0}function jG(){ab(3)}function jH(a,b){a=a|0;b=b|0;ab(4);return 0}
// EMSCRIPTEN_END_FUNCS
var bk=[jD,jD,dm,jD,dq,jD,dp,jD,dh,jD,dr,jD,dl,jD,jD,jD];var bl=[jE,jE];var bm=[jF,jF];var bn=[jG,jG];var bo=[jH,jH,g0,jH,ef,jH,dE,jH];return{_strlen:jr,_strcat:jw,_free:jn,_realloc:jo,_strncpy:jt,_teardown:bH,_tolower:jx,_init:bG,_diagram:bI,_memset:jv,_malloc:jm,_memcpy:js,_strcpy:ju,runPostSets:bF,stackAlloc:bp,stackSave:bq,stackRestore:br,setThrew:bs,setTempRet0:bv,setTempRet1:bw,setTempRet2:bx,setTempRet3:by,setTempRet4:bz,setTempRet5:bA,setTempRet6:bB,setTempRet7:bC,setTempRet8:bD,setTempRet9:bE,dynCall_iiii:jy,dynCall_vi:jz,dynCall_ii:jA,dynCall_v:jB,dynCall_iii:jC}})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_iiii": invoke_iiii, "invoke_vi": invoke_vi, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_strncmp": _strncmp, "_llvm_va_end": _llvm_va_end, "_snprintf": _snprintf, "_rand": _rand, "_fgetc": _fgetc, "_fclose": _fclose, "_strtok_r": _strtok_r, "_isdigit": _isdigit, "_abort": _abort, "_fprintf": _fprintf, "_toupper": _toupper, "_printf": _printf, "_close": _close, "_pread": _pread, "_fflush": _fflush, "_fopen": _fopen, "__reallyNegative": __reallyNegative, "_strchr": _strchr, "_fputc": _fputc, "_sysconf": _sysconf, "_puts": _puts, "_strtol": _strtol, "___setErrNo": ___setErrNo, "_fwrite": _fwrite, "_qsort": _qsort, "_send": _send, "_write": _write, "_fputs": _fputs, "_isalpha": _isalpha, "_exit": _exit, "_sprintf": _sprintf, "_strrchr": _strrchr, "_strdup": _strdup, "_srand": _srand, "_isspace": _isspace, "_strncat": _strncat, "_fread": _fread, "_isatty": _isatty, "_read": _read, "_ferror": _ferror, "__formatString": __formatString, "_atoi": _atoi, "_vfprintf": _vfprintf, "_recv": _recv, "_fileno": _fileno, "_pwrite": _pwrite, "_perror": _perror, "_isalnum": _isalnum, "_fsync": _fsync, "_strerror_r": _strerror_r, "_strtok": _strtok, "___errno_location": ___errno_location, "_strerror": _strerror, "_getrusage": _getrusage, "_open": _open, "_sbrk": _sbrk, "__parseInt": __parseInt, "_time": _time, "__exit": __exit, "_isupper": _isupper, "_vsprintf": _vsprintf, "_strcmp": _strcmp, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "_stdin": _stdin, "_stderr": _stderr, "_stdout": _stdout }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _strcat = Module["_strcat"] = asm["_strcat"];
var _free = Module["_free"] = asm["_free"];
var _realloc = Module["_realloc"] = asm["_realloc"];
var _strncpy = Module["_strncpy"] = asm["_strncpy"];
var _teardown = Module["_teardown"] = asm["_teardown"];
var _tolower = Module["_tolower"] = asm["_tolower"];
var _init = Module["_init"] = asm["_init"];
var _diagram = Module["_diagram"] = asm["_diagram"];
var _memset = Module["_memset"] = asm["_memset"];
var _malloc = Module["_malloc"] = asm["_malloc"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _strcpy = Module["_strcpy"] = asm["_strcpy"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_iiii = Module["dynCall_iiii"] = asm["dynCall_iiii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_iii = Module["dynCall_iii"] = asm["dynCall_iii"];
Runtime.stackAlloc = function(size) { return asm['stackAlloc'](size) };
Runtime.stackSave = function() { return asm['stackSave']() };
Runtime.stackRestore = function(top) { asm['stackRestore'](top) };
// Warning: printing of i64 values may be slightly rounded! No deep i64 math used, so precise i64 code not included
var i64Math = null;
// === Auto-generated postamble setup entry stuff ===
if (memoryInitializer) {
  function applyData(data) {
    HEAPU8.set(data, STATIC_BASE);
  }
  if (ENVIRONMENT_IS_NODE || ENVIRONMENT_IS_SHELL) {
    applyData(Module['readBinary'](memoryInitializer));
  } else {
    addRunDependency('memory initializer');
    Browser.asyncLoad(memoryInitializer, function(data) {
      applyData(data);
      removeRunDependency('memory initializer');
    }, function(data) {
      throw 'could not load memory initializer ' + memoryInitializer;
    });
  }
}
function ExitStatus(status) {
  this.name = "ExitStatus";
  this.message = "Program terminated with exit(" + status + ")";
  this.status = status;
};
ExitStatus.prototype = new Error();
ExitStatus.prototype.constructor = ExitStatus;
var initialStackTop;
var preloadStartTime = null;
var calledMain = false;
dependenciesFulfilled = function runCaller() {
  // If run has never been called, and we should call run (INVOKE_RUN is true, and Module.noInitialRun is not false)
  if (!Module['calledRun'] && shouldRunNow) run();
  if (!Module['calledRun']) dependenciesFulfilled = runCaller; // try this again later, after new deps are fulfilled
}
Module['callMain'] = Module.callMain = function callMain(args) {
  assert(runDependencies == 0, 'cannot call main when async dependencies remain! (listen on __ATMAIN__)');
  assert(__ATPRERUN__.length == 0, 'cannot call main when preRun functions remain to be called');
  args = args || [];
  if (ENVIRONMENT_IS_WEB && preloadStartTime !== null) {
    Module.printErr('preload time: ' + (Date.now() - preloadStartTime) + ' ms');
  }
  ensureInitRuntime();
  var argc = args.length+1;
  function pad() {
    for (var i = 0; i < 4-1; i++) {
      argv.push(0);
    }
  }
  var argv = [allocate(intArrayFromString("/bin/this.program"), 'i8', ALLOC_NORMAL) ];
  pad();
  for (var i = 0; i < argc-1; i = i + 1) {
    argv.push(allocate(intArrayFromString(args[i]), 'i8', ALLOC_NORMAL));
    pad();
  }
  argv.push(0);
  argv = allocate(argv, 'i32', ALLOC_NORMAL);
  initialStackTop = STACKTOP;
  try {
    var ret = Module['_main'](argc, argv, 0);
    // if we're not running an evented main loop, it's time to exit
    if (!Module['noExitRuntime']) {
      exit(ret);
    }
  }
  catch(e) {
    if (e instanceof ExitStatus) {
      // exit() throws this once it's done to make sure execution
      // has been stopped completely
      return;
    } else if (e == 'SimulateInfiniteLoop') {
      // running an evented main loop, don't immediately exit
      Module['noExitRuntime'] = true;
      return;
    } else {
      if (e && typeof e === 'object' && e.stack) Module.printErr('exception thrown: ' + [e, e.stack]);
      throw e;
    }
  } finally {
    calledMain = true;
  }
}
function run(args) {
  args = args || Module['arguments'];
  if (preloadStartTime === null) preloadStartTime = Date.now();
  if (runDependencies > 0) {
    Module.printErr('run() called, but dependencies remain, so not running');
    return;
  }
  preRun();
  if (runDependencies > 0) {
    // a preRun added a dependency, run will be called later
    return;
  }
  function doRun() {
    ensureInitRuntime();
    preMain();
    Module['calledRun'] = true;
    if (Module['_main'] && shouldRunNow) {
      Module['callMain'](args);
    }
    postRun();
  }
  if (Module['setStatus']) {
    Module['setStatus']('Running...');
    setTimeout(function() {
      setTimeout(function() {
        Module['setStatus']('');
      }, 1);
      if (!ABORT) doRun();
    }, 1);
  } else {
    doRun();
  }
}
Module['run'] = Module.run = run;
function exit(status) {
  ABORT = true;
  EXITSTATUS = status;
  STACKTOP = initialStackTop;
  // exit the runtime
  exitRuntime();
  // TODO We should handle this differently based on environment.
  // In the browser, the best we can do is throw an exception
  // to halt execution, but in node we could process.exit and
  // I'd imagine SM shell would have something equivalent.
  // This would let us set a proper exit status (which
  // would be great for checking test exit statuses).
  // https://github.com/kripken/emscripten/issues/1371
  // throw an exception to halt the current execution
  throw new ExitStatus(status);
}
Module['exit'] = Module.exit = exit;
function abort(text) {
  if (text) {
    Module.print(text);
    Module.printErr(text);
  }
  ABORT = true;
  EXITSTATUS = 1;
  throw 'abort() at ' + stackTrace();
}
Module['abort'] = Module.abort = abort;
// {{PRE_RUN_ADDITIONS}}
if (Module['preInit']) {
  if (typeof Module['preInit'] == 'function') Module['preInit'] = [Module['preInit']];
  while (Module['preInit'].length > 0) {
    Module['preInit'].pop()();
  }
}
// shouldRunNow refers to calling main(), not run().
var shouldRunNow = true;
if (Module['noInitialRun']) {
  shouldRunNow = false;
}
run();
// {{POST_RUN_ADDITIONS}}
// {{MODULE_ADDITIONS}}
