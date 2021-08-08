const signupFormHandler = async (event) => {

    event.preventDefault();
    const email = document.querySelector('#email-signup').value.trim();
    const full_name = document.querySelector('#name-signup').value.trim();
    const address = document.querySelector('#address-signup').value.trim();
    const city = document.querySelector('#city-signup').value.trim();
    const state = document.querySelector('#state-signup').value.trim();
    const zip = document.querySelector('#zip-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (full_name && address && city && state && zip && email && password) {
     
      const response = await fetch('/api/homeowner/login', {
        method: 'POST',
        body: JSON.stringify({ full_name, address, city, state, zip, email, password  }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/homeowner/dashboard');
      } else {
        alert('Failed to sign up');
      }
    }
  };
  
  document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);