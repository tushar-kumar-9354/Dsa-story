import React, { useState } from 'react';
import { X, PlusCircle } from 'lucide-react';

export default function AddQuestionModal({ isOpen, onClose, onAddStory }) {
  const [title, setTitle] = useState('');
  const [difficulty, setDifficulty] = useState('Medium');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      alert('Please enter a question name.');
      return;
    }

    const newProblem = {
      id: Date.now().toString(),
      title: title.trim(),
      difficulty,
      approaches: ['Array'],
      problemDescription: '',
      mindfulStory: '',
      unforgettableBottleneck: '',
      rawCode: '',
      codeLines: []
    };

    onAddStory(newProblem);
    onClose();

    // Reset form fields
    setTitle('');
    setDifficulty('Medium');
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-box" style={{ maxWidth: '460px' }} onClick={(e) => e.stopPropagation()}>
        <div style={{ padding: '1.25rem 1.5rem', borderBottom: '1px solid #dbeafe', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#eff6ff' }}>
          <h2 style={{ fontFamily: 'Outfit', fontSize: '1.2rem', color: '#1d4ed8', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '800' }}>
            <PlusCircle size={20} color="#1d4ed8" /> Quick Add Problem
          </h2>
          <button onClick={onClose} style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: '#64748b' }}>
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', color: '#1d4ed8', marginBottom: '0.4rem' }}>
              Question Name / Title *
            </label>
            <input 
              type="text" 
              style={{ width: '100%', padding: '0.7rem 0.85rem', border: '1px solid #bfdbfe', borderRadius: '8px', outline: 'none', fontSize: '0.9rem', color: '#0f172a' }} 
              placeholder="e.g. Subarray Sum Equals K" 
              value={title} 
              onChange={(e) => setTitle(e.target.value)} 
              required 
              autoFocus
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', color: '#1d4ed8', marginBottom: '0.4rem' }}>
              Difficulty Level
            </label>
            <select 
              style={{ width: '100%', padding: '0.7rem 0.85rem', border: '1px solid #bfdbfe', borderRadius: '8px', outline: 'none', fontSize: '0.9rem', color: '#0f172a', background: '#ffffff' }} 
              value={difficulty} 
              onChange={(e) => setDifficulty(e.target.value)}
            >
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </div>

          <button type="submit" className="btn-primary" style={{ padding: '0.75rem', width: '100%', fontSize: '0.9rem', marginTop: '0.5rem' }}>
            <PlusCircle size={18} /> Create & Customize Problem
          </button>
        </form>
      </div>
    </div>
  );
}
