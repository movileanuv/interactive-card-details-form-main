const creditCardForm = document.getElementById('credit-card-form')
const successDiv = document.getElementById('success-message')
const dismissSuccessDivBtn = document.getElementById('dismiss-success-message')
const cardholderName = document.getElementById('cardholder-name')
const creditCardNumber = document.getElementById('card-number')
const month = document.getElementById('month')
const year = document.getElementById('year')
const cvc = document.getElementById('cvc')

function validateCreditCardForm() {
  [cardholderName, creditCardNumber, month, year, cvc].forEach(clearInputErrors)
  let isValid = true

  const regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
  const regNumber = new RegExp("^[0-9]{13,19}$");
  const today = new Date();
  const someday = new Date();
  const regMonth = new RegExp("^[0-1][0-9]$");
  const regYear = new RegExp("^[0-9]{2}$");
  const regCVC = new RegExp("^[0-9]{3}$");
  someday.setFullYear(`20${year.value}`, month.value, 1);

  // validate name
  if (cardholderName.value.length === 0) {
    displayInputError(cardholderName, 'Name can not be blank')
    isValid = false
    console.log(1)
  }
  else if (!regName.test(cardholderName.value)) {
    displayInputError(cardholderName, 'Name can contain only letters and white spaces')
    isValid = false
    console.log(2)
  }

  // validate card number
  if (creditCardNumber.value.length === 0) {
    displayInputError(creditCardNumber, "Credit card number can't be empty")
    isValid = false
    console.log(3)
  }
  else if (!regNumber.test(creditCardNumber.value)) {
    displayInputError(creditCardNumber, 'Invalid credit card number')
    isValid = false
    console.log(4)
  }

  // validate expire date
  if (!regMonth.test(month.value)) {
    displayInputError(month, 'Invalid month')
    isValid = false
    console.log(5)
  }
  else if (!regYear.test(year.value)) {
    displayInputError(year, 'Invalid year')
    isValid = false
    console.log(6)
  }
  else if (someday < today) {
    displayInputError(month, 'Credit card expired')
    isValid = false
    console.log(7)
  }

  // validate cvc
  if (cvc.value.length === 0) {
    displayInputError(cvc, "Can't be blank")
    isValid = false
    console.log(8)
  }
  else if (!regCVC.test(cvc.value)) {
    displayInputError(cvc, 'Invalid CVC')
    isValid = false
    console.log(9)
  }

  return isValid
}

function displaySuccessDiv() {
  creditCardForm.classList.add('hidden')
  successDiv.classList.remove('hidden')
}

function displayInputError(target, message) {
  const html = `<span class="error-message">${message}</span>`
  target.classList.add('invalid')
  const container = target.closest('label') || target.closest('fieldset')
  container.insertAdjacentHTML('beforeend', html)
}

function clearInputErrors(target) {
  target.classList.remove('invalid')
  const container = target.closest('label') || target.closest('fieldset')
  container.querySelector('.error-message')?.remove()
}

function resetCreditCardForm() {
  successDiv.classList.add('hidden')
  creditCardForm.classList.remove('hidden')
  creditCardForm.reset()
}

creditCardForm.onsubmit = function (evt) {
  evt.preventDefault()
  if (!validateCreditCardForm()) return
  displaySuccessDiv()
}

dismissSuccessDivBtn.onclick = function () {
  resetCreditCardForm()
}
