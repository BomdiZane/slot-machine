export function initializeOptions(value){
  let options = {
    value,
    isValid: true,
    showErrors: true
  };
  if (!value) options.isValid = false;

  return options;
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

export function addCurrencyFormat(amount, currencyCode='EUR'){
  // Assumption: all amounts are in base currency unit (dollar/euro not cents)
  if (!amount || typeof(amount) !== 'number') return 'Invalid amount';
  if (typeof(currencyCode) !== 'string') return 'Invalid currency code';

  return new Intl.NumberFormat('en-US', {
    style : 'currency',
    currency : currencyCode.toUpperCase()
  }).format(amount);
}

export function getRandomInt(max, min = 0){
  if (!max || typeof(max) !== 'number' || typeof(min) !== 'number') return 0;

  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
}
