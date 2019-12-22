export function parseJSON(value){
  try {
    return JSON.parse(value);
  }
  catch (e) { // value might be a string or non-JSON data
    return null;
  }
}

export function initializeOptions(value){
  let options = {
    value,
    isValid: true,
    showErrors: true
  };
  if (!value) options.isValid = false;

  return options;
}

export function removeToken() {
  'use strict';

  try {
    if (typeof(localStorage) === 'undefined') return;
    localStorage.removeItem('token');
  }
  catch (e) { console.log(e); }
}

export function storageAvailable(type) {
  let storage, x;

  try {
    storage = window[type],
    x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  }
  catch(e) {
    return e instanceof DOMException && (
      e.code === 22 ||
      e.code === 1014 ||
      e.name === 'QuotaExceededError' ||
      e.name === 'NS_ERROR_DOM_QUOTA_REACHED'
    ) &&
      storage.length !== 0;
  }
}

/**
  * Capitalize first letter of every word in a string
  * Only the first letter of every word is capitalized. The rest of the string is converted to lower case.
  * @param {String} text - The string to be formatted
  * @returns {String} - formated text with first letter of each word capitalized
  *                   - empty string if no name is provided
*/
export function formatName(name) {
  if (!name) return '';
  if (typeof name !== 'string') throw new Error(`Argument of type "${typeof name}" passed to formatName. "string" expected!`);

  let words = name.trim().split(' '),
    formatted = '';

  for (let i = 0, len = words.length; i < len; i++)
    formatted += `${ words[i].charAt(0).toUpperCase() }${ words[i].substring(1).toLowerCase() } `;

  return formatted.trim();
}

export function formatNumber(number){
  if (!number || typeof(number) !== 'number') return '0';
  return new Intl.NumberFormat('en-US').format(number);
}

export function addCurrencyFormat(amount, currencyCode='EUR'){
  // Assumption: all amounts are in base currency unit (dollar/euro not cents)
  if (!amount || typeof(amount) !== 'number') return 'Invalid amount';
  if (typeof(currencyCode) !== 'string') return 'Invalid currency code';

  return new Intl.NumberFormat('en-US', {
    style : 'currency',
    currency : currencyCode.toUpperCase()
  }).format(amount);
}

export function removeCurrencyFormat (figure) {
  if (!figure || typeof(figure) !== 'string') return '0';
  return figure.replace(/[^0-9.]/g,'');
}
