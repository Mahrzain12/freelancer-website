// 1. Tab Switching Function
function switchTab(type) {
  const loginForm = document.getElementById('loginForm');
  const signupForm = document.getElementById('signupForm');
  const tabs = document.querySelectorAll('.tab-btn');

  if (type === 'login') {
    loginForm.classList.add('active-form');
    signupForm.classList.remove('active-form');
    tabs[0].classList.add('active');
    tabs[1].classList.remove('active');
    window.location.hash = 'login';
  } else {
    signupForm.classList.add('active-form');
    loginForm.classList.remove('active-form');
    tabs[1].classList.add('active');
    tabs[0].classList.remove('active');
    window.location.hash = 'signup';
  }
}

// 2. Check URL Hash for Direct Links (e.g. login.html#signup or login.html#login)
window.addEventListener('load', () => {
  const hash = window.location.hash.replace('#', '');
  if (hash === 'signup') {
    switchTab('signup');
  } else {
    switchTab('login');
  }
});

// 3. Toggle Password Visibility
function togglePasswordVisibility(inputId, icon) {
  const input = document.getElementById(inputId);
  if (input.type === 'password') {
    input.type = 'text';
    icon.classList.replace('fa-eye', 'fa-eye-slash');
  } else {
    input.type = 'password';
    icon.classList.replace('fa-eye-slash', 'fa-eye');
  }
}

// 4. Password Strength Meter
function checkPasswordStrength(password) {
  const bar = document.getElementById('strengthBar');
  const text = document.getElementById('strengthText');
  let strength = 0;

  if (password.length >= 6) strength += 25;
  if (password.match(/[a-z]/) && password.match(/[A-Z]/)) strength += 25;
  if (password.match(/[0-9]/)) strength += 25;
  if (password.match(/[^a-zA-Z0-9]/)) strength += 25;

  bar.style.width = strength + '%';

  if (strength <= 25) {
    bar.style.backgroundColor = '#ef4444';
    text.textContent = 'Weak password';
  } else if (strength <= 50) {
    bar.style.backgroundColor = '#f59e0b';
    text.textContent = 'Medium password';
  } else if (strength <= 75) {
    bar.style.backgroundColor = '#3b82f6';
    text.textContent = 'Good password';
  } else {
    bar.style.backgroundColor = '#10b981';
    text.textContent = 'Strong password!';
  }
}

// 5. Toast Notification System
function showToast(message, type = 'success') {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.style.backgroundColor = type === 'success' ? '#10b981' : '#ef4444';
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

// 6. Form Handlers
function handleLogin(event) {
  event.preventDefault();
  const email = document.getElementById('loginEmail').value;
  showToast(`Welcome back, ${email}! Redirection...`);
  // Redirect link yahan add kar sakte hain
  // setTimeout(() => window.location.href = 'dashboard.html', 1500);
}

function handleSignup(event) {
  event.preventDefault();
  const name = document.getElementById('signupName').value;
  const role = document.querySelector('input[name="accountType"]:checked').value;
  showToast(`Account created as ${role.toUpperCase()} for ${name}!`);
}

function handleForgotPassword(event) {
  event.preventDefault();
  const email = prompt("Enter your email address to reset password:");
  if (email) {
    showToast(`Password reset link sent to ${email}`);
  }
}

function socialLogin(provider) {
  showToast(`Redirecting to ${provider} authentication...`);
}

// 7. Dark / Light Mode Toggle
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
  const currentTheme = document.body.getAttribute('data-theme');
  const icon = themeToggle.querySelector('i');
  
  if (currentTheme === 'dark') {
    document.body.removeAttribute('data-theme');
    icon.classList.replace('fa-sun', 'fa-moon');
  } else {
    document.body.setAttribute('data-theme', 'dark');
    icon.classList.replace('fa-moon', 'fa-sun');
  }
});