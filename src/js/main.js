import refs from './refs.js';
import fetchCountries from './fetch.js';
import markup from './markup.js';
import notify from './notify.js';

import debounce from 'lodash.debounce';

function searchHandler() {
  const newSearchQuery = this.value.trim();
  markup();
  if (newSearchQuery !== '') {
    fetchCountries(newSearchQuery)
      .then(data => markup(data))
      .catch(message => notify(message));
  }
}

refs.search.addEventListener('input', debounce(searchHandler, 500));
