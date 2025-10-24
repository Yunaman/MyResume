document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.php-email-form').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const action = form.getAttribute('action');
      const loading = form.querySelector('.loading');
      const error = form.querySelector('.error-message');
      const sent = form.querySelector('.sent-message');

      loading.style.display = 'block';
      error.innerHTML = '';
      sent.style.display = 'none';

      const data = new URLSearchParams(new FormData(form));

      fetch(action, {
        method: 'POST',
        body: data,
      })
        .then(function (res) {
          loading.style.display = 'none';
          if (!res.ok) return res.json().then(function (j) { throw j; });
          return res.json();
        })
        .then(function (json) {
          if (json.success) {
            sent.style.display = 'block';
            sent.innerHTML = json.message || 'Your message has been sent.';
            form.reset();
          } else {
            error.innerHTML = json.message || 'An error occurred.';
            error.style.display = 'block';
          }
        })
        .catch(function (err) {
          loading.style.display = 'none';
          error.innerHTML = (err && err.message) ? err.message : 'An error occurred while sending the form.';
          error.style.display = 'block';
        });
    });
  });
});
