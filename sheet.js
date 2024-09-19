const scriptURL = 'https://script.google.com/macros/s/AKfycbzHHdWApRRVkoPiZh2zUaa2kI3YVEHI2mWOVizR3KvT-fFhj0H7St48x8Pdcy2e0Y-f/exec'
const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})

