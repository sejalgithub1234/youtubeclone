import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        sessionStorage.setItem('login_email', email); // Store email in session storage
        navigate('/'); // Navigate to home page
      } else {
        alert('Invalid credentials! Please try again.');
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.loginBox}>
        <h2 style={styles.title}>Sign in</h2>
        <p style={styles.subtitle}>to continue to YouTube Clone</p>

        <input
          type="email"
          placeholder="Email or phone"
          style={styles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter your password"
          style={styles.input}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button style={styles.signInButton} onClick={handleLogin}>
          Sign In
        </button>

        <div style={styles.footer}>
          <a href="#" style={styles.link} onClick={() => navigate('/create-account')}>
            Create account
          </a>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#f9f9f9',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginBox: {
    backgroundColor: '#fff',
    padding: '2rem',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    width: '100%',
    maxWidth: '400px',
    textAlign: 'center',
  },
  title: {
    marginBottom: '0.5rem',
    fontSize: '1.5rem',
    fontWeight: '500',
  },
  subtitle: {
    marginBottom: '1.5rem',
    color: '#606060',
    fontSize: '0.9rem',
  },
  input: {
    width: '100%',
    padding: '0.75rem',
    marginBottom: '1rem',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '1rem',
  },
  signInButton: {
    width: '100%',
    padding: '0.75rem',
    backgroundColor: '#cc0000',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    fontSize: '1rem',
    cursor: 'pointer',
  },
  footer: {
    marginTop: '1rem',
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '0.85rem',
  },
  link: {
    color: '#1a73e8',
    textDecoration: 'none',
    cursor: 'pointer',
  },
};

export default LoginPage;
