/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var languages = ['eng', 'swe'];
var navHeader = document.getElementById('navbarDropdown');

function init() {
  var languageOptions = document.getElementsByClassName('dropdown-item'); //Interaction

  for (var i = 0; i < languageOptions.length; i++) {
    var langOption = languageOptions[i];
    langOption.addEventListener('click', function () {
      callJSON(this.id);
    });
  }

  navHeader.addEventListener('click', function () {
    var dropDownElem = document.getElementById("dropdown");

    if (dropDownElem.style.display === "none") {
      dropDownElem.style.display = "block";
      dropDownElem.style.opacity = "1";
    } else {
      dropDownElem.style.display = "none";
      dropDownElem.style.opacity = "0";
    }
  });
  callJSON(urlParameters());
}
/**
 * @description call selected language JSON
 * @param {String} currLang <- selected language
 */


function callJSON(currLang) {
  navHeader.innerHTML = currLang.toString();
  var url = "../assets/languages/" + currLang + ".json";
  var Http = new XMLHttpRequest();

  Http.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      changeLanguage(JSON.parse(this.responseText));
    }
  };

  Http.open("GET", url, true);
  Http.send();
}

function changeLanguage(data) {
  //content fields
  var title = document.getElementById('title');
  var ingressi = document.getElementById('ingressi');
  var recycle1 = document.getElementById('recycle1');
  var recycle2 = document.getElementById('recycle2');
  var cotwo1 = document.getElementById('cotwo1');
  var cotwo2 = document.getElementById('cotwo2');
  var cotwo3 = document.getElementById('cotwo3');
  var plantpack1 = document.getElementById('plantpack1');
  var plantpack2 = document.getElementById('plantpack2');
  var endtitle = document.getElementById('endtitle');
  title.innerHTML = data.title;
  ingressi.innerHTML = data.ingressi;
  recycle1.innerHTML = data.recycle1;
  recycle2.innerHTML = data.recycle2;
  cotwo1.innerHTML = data.cotwo1;
  cotwo2.innerHTML = data.cotwo2;
  cotwo3.innerHTML = data.cotwo3;
  plantpack1.innerHTML = data.plantpack1;
  plantpack2.innerHTML = data.plantpack2;
  endtitle.innerHTML = data.endtitle;
}

function urlParameters() {
  var queryString = window.location.search;
  var urlParameters = new URLSearchParams(queryString);
  var navHeader = document.getElementById('navbarDropdown');

  if (urlParameters.has('lang')) {
    navHeader.innerHTML = urlParameters.get('lang').toUpperCase();
    return urlParameters.get('lang');
  }

  navHeader.innerHTML = 'ENG';
  return 'eng';
}
/**
 * SHADOW DOM
 * create drop down
 */


window.onload = init();

/***/ })
/******/ ]);