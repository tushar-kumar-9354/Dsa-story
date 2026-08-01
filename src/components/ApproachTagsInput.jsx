import React, { useState } from 'react';
import { Tag, X, Plus } from 'lucide-react';

export default function ApproachTagsInput({ approaches = [], onChange }) {
  const [inputValue, setInputValue] = useState('');

  const handleKeyDown = (e) => {
    if (e.key === ',' || e.key === 'Enter') {
      e.preventDefault();
      addTag();
    }
  };

  const addTag = () => {
    const trimmed = inputValue.trim().replace(/,/g, '');
    if (trimmed && !approaches.includes(trimmed)) {
      onChange([...approaches, trimmed]);
      setInputValue('');
    }
  };

  const removeTag = (indexToRemove) => {
    const updated = approaches.filter((_, idx) => idx !== indexToRemove);
    onChange(updated);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
        <Tag size={15} color="#1d4ed8" />
        <span style={{ fontSize: '0.825rem', color: '#1d4ed8', fontWeight: '800' }}>
          Approaches & Algo Used:
        </span>
      </div>

      {/* Comma-Separated Pill Badges Container */}
      <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        gap: '0.4rem', 
        alignItems: 'center',
        background: '#ffffff', 
        padding: '0.5rem 0.75rem', 
        borderRadius: '8px', 
        border: '1px solid #bfdbfe' 
      }}>
        {approaches.map((tag, idx) => (
          <span 
            key={idx} 
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '0.35rem', 
              background: '#eff6ff', 
              color: '#1d4ed8', 
              border: '1px solid #93c5fd', 
              padding: '0.25rem 0.65rem', 
              borderRadius: '9999px', 
              fontSize: '0.8rem', 
              fontWeight: '700' 
            }}
          >
            {tag}
            <button 
              type="button"
              onClick={() => removeTag(idx)} 
              style={{ 
                background: 'transparent', 
                border: 'none', 
                color: '#1d4ed8', 
                cursor: 'pointer', 
                display: 'flex', 
                alignItems: 'center', 
                padding: '0' 
              }}
              title="Remove tag"
            >
              <X size={12} />
            </button>
          </span>
        ))}

        <input 
          type="text" 
          style={{ 
            flex: 1, 
            minWidth: '160px', 
            border: 'none', 
            outline: 'none', 
            fontSize: '0.825rem', 
            color: '#1e3a8a', 
            padding: '0.2rem 0.4rem',
            background: 'transparent' 
          }}
          placeholder="Type approach & press comma or enter..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          onBlur={addTag}
        />
      </div>
    </div>
  );
}
