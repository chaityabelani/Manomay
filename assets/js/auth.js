document.addEventListener('DOMContentLoaded', () => {
  const signupForm = document.querySelector('form.signup');
  const loginForm = document.querySelector('form.login');

  if (signupForm) {
    signupForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const [name, email, password] = [...signupForm.querySelectorAll('input')].map(i => i.value.trim());
      try {
        const r = await fetch('/api/signup', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, password })
        });
        const json = await r.json();
        if (r.ok) {
          alert('Account created! You can now log in.');
          window.location.href = 'login.html';
        } else {
          alert(json.error || 'Error signing up');
        }
      } catch (err) {
        alert('Network error');
      }
    });
  }

  if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const [email, password] = [...loginForm.querySelectorAll('input')].map(i => i.value.trim());
      try {
        const r = await fetch('/api/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password })
        });
        const json = await r.json();
        if (r.ok) {
          localStorage.setItem('token', json.token);
          alert('Logged in!');
          window.location.href = '/';
        } else {
          alert(json.error || 'Invalid credentials');
        }
      } catch (err) {
        alert('Network error');
      }
    });
  }
});
