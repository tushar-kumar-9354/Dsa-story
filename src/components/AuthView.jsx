import React, { useState } from 'react';
import { BookOpen, LogIn, UserPlus, Lock, Mail, User, Sparkles, ArrowRight } from 'lucide-react';

export default function AuthView({ onLogin }) {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!email.trim() || !password.trim()) {
      setError('Please fill in all required fields.');
      return;
    }

    if (password.length < 4) {
      setError('Password must be at least 4 characters long.');
      return;
    }

    // Load registered users array from LocalStorage
    const usersJson = localStorage.getItem('dsa_storybook_registered_users');
    const users = usersJson ? JSON.parse(usersJson) : [];

    const userEmailLower = email.toLowerCase().trim();

    if (isSignUp) {
      // Check if user already exists
      const existingUser = users.find(u => u.email === userEmailLower);
      if (existingUser) {
        setError('An account with this email already exists. Please log in.');
        return;
      }

      const newUser = {
        id: `user-${Date.now()}`,
        email: userEmailLower,
        username: username.trim() || userEmailLower.split('@')[0],
        password: password
      };

      users.push(newUser);
      localStorage.setItem('dsa_storybook_registered_users', JSON.stringify(users));
      onLogin(newUser);
    } else {
      // Log in
      const existingUser = users.find(u => u.email === userEmailLower && u.password === password);
      if (!existingUser) {
        // If demo user logging in for the first time
        const demoUser = {
          id: `user-${userEmailLower.replace(/[^a-z0-9]/g, '')}`,
          email: userEmailLower,
          username: username.trim() || userEmailLower.split('@')[0],
          password: password
        };
        users.push(demoUser);
        localStorage.setItem('dsa_storybook_registered_users', JSON.stringify(users));
        onLogin(demoUser);
        return;
      }
      onLogin(existingUser);
    }
  };

  const handleDemoLogin = () => {
    const demoUser = {
      id: 'demo-user-123',
      email: 'demo@dsakahani.com',
      username: 'Demo Coder',
      password: 'password'
    };
    onLogin(demoUser);
  };

  return (
    <div style={{
      display: 'flex',
      minHeight: '100vh',
      width: '100vw',
      background: 'var(--bg-app)',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1.5rem'
    }}>
      <div style={{
        background: 'var(--bg-card)',
        borderRadius: '16px',
        border: '1px solid var(--border-color)',
        boxShadow: 'var(--shadow-lg)',
        width: '100%',
        maxWidth: '440px',
        padding: '2.5rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem'
      }}>
        {/* Brand Logo Header */}
        <div style={{ textAlign: 'center' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '56px',
            height: '56px',
            borderRadius: '16px',
            background: 'var(--primary-light)',
            color: 'var(--primary)',
            marginBottom: '1rem'
          }}>
            <BookOpen size={30} color="var(--primary)" />
          </div>

          <h2 style={{
            fontFamily: 'Outfit, sans-serif',
            fontSize: '1.75rem',
            fontWeight: '800',
            color: 'var(--primary)',
            marginBottom: '0.35rem'
          }}>
            DSA Kahani
          </h2>

          <p style={{ fontSize: '0.875rem', color: 'var(--text-dim)' }}>
            {isSignUp ? 'Create your personal DSA Storybook account' : 'Sign in to access your isolated problem stories & code'}
          </p>
        </div>

        {/* Error Alert */}
        {error && (
          <div style={{
            padding: '0.75rem 1rem',
            borderRadius: '8px',
            background: '#fef2f2',
            color: '#dc2626',
            border: '1px solid #fecaca',
            fontSize: '0.85rem',
            fontWeight: '600'
          }}>
            {error}
          </div>
        )}

        {/* Auth Form */}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
          {isSignUp && (
            <div>
              <label style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--text-main)', marginBottom: '0.4rem', display: 'block' }}>
                Full Name / Username
              </label>
              <div style={{ position: 'relative' }}>
                <User size={18} style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-dim)' }} />
                <input 
                  type="text"
                  placeholder="e.g. Rahul Sharma"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.65rem 1rem 0.65rem 2.5rem',
                    borderRadius: '8px',
                    border: '1px solid var(--border-color)',
                    background: 'var(--bg-app)',
                    color: 'var(--text-main)',
                    fontSize: '0.9rem',
                    outline: 'none'
                  }}
                />
              </div>
            </div>
          )}

          <div>
            <label style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--text-main)', marginBottom: '0.4rem', display: 'block' }}>
              Email Address
            </label>
            <div style={{ position: 'relative' }}>
              <Mail size={18} style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-dim)' }} />
              <input 
                type="email"
                required
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.65rem 1rem 0.65rem 2.5rem',
                  borderRadius: '8px',
                  border: '1px solid var(--border-color)',
                  background: 'var(--bg-app)',
                  color: 'var(--text-main)',
                  fontSize: '0.9rem',
                  outline: 'none'
                }}
              />
            </div>
          </div>

          <div>
            <label style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--text-main)', marginBottom: '0.4rem', display: 'block' }}>
              Password
            </label>
            <div style={{ position: 'relative' }}>
              <Lock size={18} style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-dim)' }} />
              <input 
                type="password"
                required
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.65rem 1rem 0.65rem 2.5rem',
                  borderRadius: '8px',
                  border: '1px solid var(--border-color)',
                  background: 'var(--bg-app)',
                  color: 'var(--text-main)',
                  fontSize: '0.9rem',
                  outline: 'none'
                }}
              />
            </div>
          </div>

          <button 
            type="submit" 
            className="btn-primary"
            style={{
              width: '100%',
              padding: '0.75rem',
              borderRadius: '8px',
              fontSize: '0.95rem',
              fontWeight: '800',
              marginTop: '0.4rem'
            }}
          >
            {isSignUp ? <UserPlus size={18} /> : <LogIn size={18} />}
            {isSignUp ? 'Create Isolated Account' : 'Sign In'}
          </button>
        </form>

        {/* Demo Fast Login Option */}
        <div style={{ textAlign: 'center', borderTop: '1px solid var(--border-color)', pt: '1rem' }}>
          <button
            onClick={handleDemoLogin}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--primary)',
              cursor: 'pointer',
              fontWeight: '800',
              fontSize: '0.85rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem'
            }}
          >
            <Sparkles size={16} color="#fbbf24" /> Instant Demo Sign In <ArrowRight size={14} />
          </button>
        </div>

        {/* Auth Toggle Link */}
        <div style={{ textAlign: 'center', fontSize: '0.85rem', color: 'var(--text-dim)' }}>
          {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
          <button
            onClick={() => { setIsSignUp(!isSignUp); setError(''); }}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--primary)',
              cursor: 'pointer',
              fontWeight: '800',
              textDecoration: 'underline'
            }}
          >
            {isSignUp ? 'Sign In' : 'Sign Up'}
          </button>
        </div>
      </div>
    </div>
  );
}
