
import { useState } from 'react';
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setMessage('');
    setLoading(true);

    try {
      const response = await fetch('http://127.0.0.1:3000/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Signup failed');
      }

      setMessage(result.message);
      setEmail('');
      setPassword('');
    } catch (error) {
      setMessage(
        error.message === 'Failed to fetch'
          ? 'Unable to connect to the server'
          : error.message
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="page">
      <section className="signup-container">
        <h1>Sign Up</h1>

        <p className="member-text">
          Already a member? <a href="#login">Log In</a>
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            aria-label="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            aria-label="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            minLength={8}
            maxLength={72}
            required
          />

          <button type="submit" disabled={loading}>
            {loading ? 'Signing up...' : 'Sign Up'}
          </button>

          {message && <p className="message" role="status">{message}</p>}
        </form>
      </section>
    </main>
  );
}

export default App;
