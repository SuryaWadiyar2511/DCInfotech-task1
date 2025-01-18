document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password }),
        });

        const data = await response.json();

        if (response.ok) {
            localStorage.setItem('token', data.token);
            localStorage.setItem('role', data.role);
            window.location.href = data.role === 'Admin' ? 'admin.html' : 'index.html';
        } else {
            document.getElementById('errorMessage').textContent = data.message;
        }
    } catch (error) {
        document.getElementById('errorMessage').textContent = 'Error logging in.';
     }
});