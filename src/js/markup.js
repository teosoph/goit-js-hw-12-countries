import refs from './refs.js';

import templateList from '../templates/countries-list.hbs';
import templateBox from '../templates/country-info.hbs';
import notify from './notify.js';

const applyTemplate = function (template, content) {
  return template(content);
};

function makeMarkup(data = []) {
  const countCountries = data.length;
  let markupHTML = '';

  if (countCountries > 10) {
    notify();
  } else {
    if (countCountries === 1) {
      markupHTML = applyTemplate(templateBox, data);
    }
    if (countCountries > 2) {
      markupHTML = applyTemplate(templateList, data);
    }
  }

  refs.result.innerHTML = markupHTML;
}

export default makeMarkup;
