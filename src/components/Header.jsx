import React from 'react';
import { BookOpen, PlusCircle, Sparkles, Download, RefreshCw } from 'lucide-react';

export default function Header({ activeTab, setActiveTab, totalCount, onExport, onReset }) {
  return (
    <header className="header">
      <div className="brand">
        <div className="brand-icon">
          <BookOpen size={24} color="#fff" />
        </div>
        <div>
          <h1 className="brand-title gradient-text">DSA Kahani</h1>
          <span className="brand-subtitle">Story-Based & Hinglish Code Log</span>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <nav className="nav-pills">
          <button 
            className={`nav-btn ${activeTab === 'explore' ? 'active' : ''}`}
            onClick={() => setActiveTab('explore')}
          >
            <BookOpen size={16} />
            Explore ({totalCount})
          </button>
          <button 
            className={`nav-btn ${activeTab === 'add' ? 'active' : ''}`}
            onClick={() => setActiveTab('add')}
          >
            <PlusCircle size={16} />
            Add Story
          </button>
          <button 
            className={`nav-btn ${activeTab === 'guide' ? 'active' : ''}`}
            onClick={() => setActiveTab('guide')}
          >
            <Sparkles size={16} />
            Prompt Guide
          </button>
        </nav>

        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button 
            className="btn-secondary" 
            onClick={onExport} 
            title="Export all stories as JSON file"
          >
            <Download size={14} /> Export
          </button>
          <button 
            className="btn-secondary" 
            onClick={onReset} 
            title="Reset to default sample stories"
          >
            <RefreshCw size={14} /> Reset
          </button>
        </div>
      </div>
    </header>
  );
}
