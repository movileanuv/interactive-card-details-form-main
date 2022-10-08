const creditCardForm = document.getElementById('credit-card-form')
const successDiv = document.getElementById('success-message')
const dismissSuccessDivBtn = document.getElementById('dismiss-success-message')


function validateCreditCardForm() {
  return true
}

function displaySuccessDiv() {
  creditCardForm.classList.add('hidden')
  successDiv.classList.remove('hidden')
}

function displayInputError(target, message) {
  const html = `<span class="error-message">${message}</span>`
  target.classList.add('invalid')
  target.parentElement.insertAdjacentHTML('beforeend', html)
}

function clearInputErrors(target) {
  target.classList.remove('invalid')
  target.parentElement.querySelector('.error-message').remove()
}

function resetCreditCardForm() {
  successDiv.classList.add('hidden')
  creditCardForm.classList.remove('hidden')
}

creditCardForm.onsubmit = function (evt) {
  evt.preventDefault()
  if (!validateCreditCardForm()) return
  displaySuccessDiv()
}

dismissSuccessDivBtn.onclick = function () {
  resetCreditCardForm()
}