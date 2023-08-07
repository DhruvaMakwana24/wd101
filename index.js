document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');
    const userTableBody = document.querySelector('#userTable tbody');
  
    form.addEventListener('submit', (event) => {
      event.preventDefault();
  
      const inputs = ['name', 'email', 'password', 'dob', 'acceptedTerms'];
      const rowData = inputs.map(inputId => document.getElementById(inputId).value);
  
      const newRow = document.createElement('tr');
      newRow.innerHTML = rowData.map(data => `<td>${data}</td>`).join('');
  
      userTableBody.appendChild(newRow);
      form.reset();
    });
  });
  