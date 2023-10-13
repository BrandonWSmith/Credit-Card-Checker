// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// Add your functions below:

// Creating function to check card validity
const validateCred = cred => {

  // Creating reversed copy of array
  const reversedCred = cred.slice().reverse();

  // Creating new array for final values
  const newCred = [];

  // Checking reversed array
  console.log(reversedCred);

  // Calculating array values per Luhn algorithm and pushing to new array
  reversedCred.forEach(value => {
    if (reversedCred.indexOf(value) % 2 !== 0) {
      let doubledValue = value * 2;
      if (doubledValue > 9) {
        doubledValue -= 9;
      }
      newCred.push(doubledValue);
    }
    else {
      newCred.push(value);
    }
  })

  // Checking new array
  console.log(newCred);

  // Calculating new array sum
  let newCredSum = 0;
  newCred.forEach(num => {newCredSum += num});

  // Checking new array sum
  console.log(newCredSum);

  // Checking validity per Luhn algorithm
  return newCredSum % 10 === 0;
}

// Running credit card checker for valid1 array
console.log(validateCred(valid1));


// Creating function to check array for invalid cards
const findInvalidCards = arr => {

  // Creating array for invalid cards
  let invalidCards = [];

  // Checking for invalid cards and pushing them to invalidCards array
  arr.forEach(card => !validateCred(card) ? invalidCards.push(card) : null);

  return invalidCards;
}

// Running invalid card checker for batch array
//console.log(findInvalidCards(batch));

// Creating function to check card issuer
const idInvalidCardCompanies = invalidBatch => {

  // Creating array for companies
  let companies = [];

  // Checking issuer of card
  for(i = 0; i < invalidBatch.length; i++) {
    switch (invalidBatch[i][0]) {
      case 3:
        if (companies.indexOf('Amex') === -1) {
          companies.push('Amex');
        }
        break;
      case 4:
        if (companies.indexOf('Visa') === -1) {
          companies.push('Visa');
        }
        break;
      case 5:
        if (companies.indexOf('Mastercard') === -1) {
          companies.push('Mastercard');
        }
        break;
      case 6:
        if (companies.indexOf('Discover') === -1) {
          companies.push('Discover');
        }
        break;
      default:
        console.log('Company not found');
    }
  }

  return companies;
}


// Running company checker for invallid cards of batch array
//console.log(idInvalidCardCompanies(findInvalidCards(batch)));