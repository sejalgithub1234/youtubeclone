import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateAccountPage = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCreateAccount = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        alert('Account created successfully!');
        navigate('/login'); // Redirect to login page
      } else {
        alert(`Error: ${data.message}`);
      }
    } catch (error) {
      alert('Something went wrong. Please try again.');
      console.error(error);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.formBox}>
        <h2 style={styles.title}>Create your account</h2>
        <p style={styles.subtitle}>to continue to YouTube Clone</p>

        <div style={styles.nameFields}>
          <input
            type="text"
            name="name"
            placeholder="Full name"
            value={formData.name}
            onChange={handleInputChange}
            style={{ ...styles.input, marginRight: '0.5rem' }}
          />
        </div>

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          style={styles.inputFull}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
          style={styles.inputFull}
        />

        <button style={styles.createButton} onClick={handleCreateAccount}>Create Account</button>

        <div style={styles.footer}>
          <a href="#" style={styles.link} onClick={() => navigate('/login')}>Sign in instead</a>
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
  formBox: {
    backgroundColor: '#fff',
    padding: '2rem',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    width: '100%',
    maxWidth: '450px',
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
  nameFields: {
    display: 'flex',
    marginBottom: '1rem',
  },
  input: {
    flex: 1,
    padding: '0.75rem',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '1rem',
  },
  inputFull: {
    width: '100%',
    padding: '0.75rem',
    marginBottom: '1rem',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '1rem',
  },
  createButton: {
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
    textAlign: 'right',
  },
  link: {
    color: '#1a73e8',
    textDecoration: 'none',
    fontSize: '0.85rem',
  },
};

export default CreateAccountPage;
