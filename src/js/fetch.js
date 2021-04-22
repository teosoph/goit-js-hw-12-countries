export default function fetchCountries(searchQuery) {
  const baseUrl = 'https://restcountries.eu/rest/v2/name/';
  let fetchUrl = `${baseUrl}${searchQuery}`;
  return fetch(fetchUrl).then(result => result.json());
}
