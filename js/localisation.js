const languages = ['eng', 'swe'];

function init() {
  const languageOptions = document.getElementsByClassName('dropdown-item');

  for (let i = 0; i < languageOptions.length; i++) {
    const langOption = languageOptions[i];
    langOption.addEventListener('click', function () {
      callJSON(this.id);
    })
  }
  dropDownController();
  callJSON(urlParameters());
}

/**
 * @description call selected language JSON
 * @param {String} currLang <- selected language
 */
function callJSON(currLang) {
  const navHeader = document.getElementById('navbarDropdown');
  navHeader.innerHTML = currLang.toString();

  fetch(`../assets/languages/${currLang}.json`)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      changeLanguage(data);
    });
}

function changeLanguage(data) {
  //content fields
  const title = document.getElementById('title');
  const ingressi = document.getElementById('ingressi');
  const recycle1 = document.getElementById('recycle1');
  const recycle2 = document.getElementById('recycle2');
  const cotwo1 = document.getElementById('cotwo1');
  const cotwo2 = document.getElementById('cotwo2');
  const cotwo3 = document.getElementById('cotwo3');
  const plantpack1 = document.getElementById('plantpack1');
  const plantpack2 = document.getElementById('plantpack2');
  const endtitle = document.getElementById('endtitle');

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
  const queryString = window.location.search
  const urlParameters = new URLSearchParams(queryString)
  const navHeader = document.getElementById('navbarDropdown');

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
function dropDownController() {
  languages.forEach(lang => { });
}

window.onload = init();