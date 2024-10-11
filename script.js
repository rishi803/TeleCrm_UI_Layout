 // Store registered users
 const users = [];



 // Toggle between registration and login forms
 function toggleForm() {
    const registrationForm = document.getElementById('registrationForm');
    const loginForm = document.getElementById('loginForm');

    // Toggle forms
    registrationForm.classList.toggle('hidden');
    loginForm.classList.toggle('hidden');

    // If login form is visible now, show the alert for admin credentials
    if (!loginForm.classList.contains('hidden')) {
        setTimeout(() => {
            alert('Admin Email: admin@email.com\nAdmin Password: admin123');
        }, 500);  
    }
 }

 // Register a new user
 function register() {
     const name = document.getElementById('name').value;
     const email = document.getElementById('email').value;
     const mobile = document.getElementById('mobile').value;
     const password = document.getElementById('password').value;

     if (name && email && mobile && password) {
         users.push({ name, email, mobile, password });
         alert('Registration successful!');
         toggleForm(); // Switch to login form after registration
     } else {
         alert('Please fill all fields');
     }
 }

 // Login function
 function login() {

     const email = document.getElementById('loginEmail').value;
     const password = document.getElementById('loginPassword').value;

     // Check for user to be admin
     if (email === 'admin@email.com' && password === 'admin123') {
         showPopup('adminPopup');
     } else {
         // Check if the user exists already
         const user = users.find(u => u.email === email && u.password === password);
         if (user) {
             showPopup('customerPopup');
         } else {
             alert('Invalid login credentials');
         }
     }
 }

 // Show popup with overlay
 function showPopup(popupId) {
     document.getElementById('overlay').style.display = 'block';
     document.getElementById(popupId).style.display = 'block';
 }

 // Customer action functions
 function buyGoods() {
     alert('Goods purchased!');
     showSignOutPopup();
 }

 function buyRecharge() {
     alert('Recharge purchased!');
     showSignOutPopup();
 }

 // Admin action functions
 function queryStats() {
     alert('Statistical Query Executed!');
     showSignOutPopup();
 }

 function increaseGoods() {
     alert('Goods increased!');
     showSignOutPopup();
 }

 function deleteItem() {
     alert('Item deleted!');
     showSignOutPopup();
 }

 function searchGoods() {
     alert('Search for goods executed!');
     showSignOutPopup();
 }

 function changeQuantity() {
     alert('Quantity changed!');
     showSignOutPopup();
 }

 // Signout popup
 function showSignOutPopup() {
     showPopup('signoutPopup');
 }

 // Logout function for both customer and admin
 function logout() {
     document.getElementById('overlay').style.display = 'none';
     document.getElementById('customerPopup').style.display = 'none';
     document.getElementById('adminPopup').style.display = 'none';
     document.getElementById('signoutPopup').style.display = 'none';
     alert('Signed out successfully');
 }