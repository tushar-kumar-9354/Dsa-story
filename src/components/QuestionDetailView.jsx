import React, { useState } from 'react';
import { BookOpen, Code, AlertTriangle, Copy, Check, Trash2, HelpCircle, CheckCircle, Circle, Sun, Moon, Sparkles, Loader2, Eye, Edit3, Maximize2, Minimize2, Target, Menu } from 'lucide-react';
import ApproachTagsInput from './ApproachTagsInput';
import { generateQuestionStoryAndCode } from '../utils/aiService';

// Helper to format story text: clean placeholder when empty/filler, colorful badges when generated!
function FormattedStoryText({ text, placeholder }) {
  let strText = '';
  if (typeof text === 'string') {
    strText = text;
  } else if (Array.isArray(text)) {
    strText = text.join('\n');
  } else if (typeof text === 'object' && text !== null) {
    strText = `⚡ #1 Critical Trap: ${text.trap || text.bottleneck || text['#1 Critical Bottleneck Trap'] || JSON.stringify(text)}\n\n💡 Memory Trick: ${text.trick || text.shortcut || text['Unforgettable Memory Trick'] || ''}`;
  } else {
    strText = String(text || '');
  }

  // Check if content is empty or default template filler text
  const isTemplateFiller = 
    !strText || 
    !strText.trim() || 
    strText.includes('Break this problem into physical metaphors') || 
    strText.includes('Highlight the tricky pitfall in') ||
    strText.includes('Mindful Story for');

  if (isTemplateFiller) {
    return (
      <div style={{
        padding: '1.5rem 1rem',
        textAlign: 'center',
        color: 'var(--text-dim)',
        fontStyle: 'italic',
        background: 'var(--bg-app)',
        borderRadius: '10px',
        border: '1px dashed var(--border-color)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.4rem'
      }}>
        <Sparkles size={22} color="var(--primary)" />
        <div style={{ fontSize: '0.85rem', fontWeight: '700' }}>
          {placeholder || "Click '✨ AI Generate' to generate a colorful Hinglish story & bottleneck!"}
        </div>
      </div>
    );
  }

  const lines = strText.split('\n');
  return (
    <div style={{ lineHeight: '1.75', fontSize: '0.925rem', color: 'var(--text-main)' }}>
      {lines.map((line, lIdx) => {
        const safeLine = String(line || '');
        if (!safeLine.trim()) return <div key={lIdx} style={{ height: '0.4rem' }} />;

        // 🎭 Physical Metaphor Header Badge
        if (safeLine.includes('🎭') || safeLine.toLowerCase().includes('asli zindagi')) {
          return (
            <div key={lIdx} style={{
              background: '#f3e8ff',
              color: '#6b21a8',
              padding: '0.45rem 0.85rem',
              borderRadius: '8px',
              fontWeight: '800',
              margin: '0.6rem 0',
              border: '1px solid #e9d5ff',
              fontSize: '0.95rem'
            }}>
              {safeLine}
            </div>
          );
        }

        // ⚡ #1 Critical Trap Header Badge
        if (safeLine.includes('⚡') || safeLine.toLowerCase().includes('critical trap') || safeLine.toLowerCase().includes('bottleneck')) {
          return (
            <div key={lIdx} style={{
              background: '#fef2f2',
              color: '#991b1b',
              padding: '0.45rem 0.85rem',
              borderRadius: '8px',
              fontWeight: '800',
              margin: '0.6rem 0',
              border: '1px solid #fecaca',
              fontSize: '0.95rem'
            }}>
              {safeLine}
            </div>
          );
        }

        // 💡 Memory Trick Header Badge
        if (safeLine.includes('💡') || safeLine.toLowerCase().includes('memory trick') || safeLine.toLowerCase().includes('shortcut')) {
          return (
            <div key={lIdx} style={{
              background: '#fef9c3',
              color: '#854d0e',
              padding: '0.45rem 0.85rem',
              borderRadius: '8px',
              fontWeight: '800',
              margin: '0.6rem 0',
              border: '1px solid #fef08a',
              fontSize: '0.95rem'
            }}>
              {safeLine}
            </div>
          );
        }

        // 📌 Step Badges
        if (safeLine.includes('STEP 1') || safeLine.includes('STEP 2') || safeLine.includes('STEP 3') || safeLine.includes('📌')) {
          return (
            <div key={lIdx} style={{
              background: '#eff6ff',
              color: '#1e40af',
              padding: '0.35rem 0.75rem',
              borderRadius: '6px',
              fontWeight: '800',
              margin: '0.45rem 0',
              border: '1px solid #bfdbfe'
            }}>
              {safeLine}
            </div>
          );
        }

        const parts = safeLine.split(/(\*\*[^*]+\*\*)/g);
        return (
          <div key={lIdx} style={{ marginBottom: '0.35rem' }}>
            {parts.map((part, pIdx) => {
              if (part && part.startsWith('**') && part.endsWith('**')) {
                const innerText = part.slice(2, -2);
                return (
                  <strong key={pIdx} style={{
                    color: 'var(--primary)',
                    fontWeight: '800',
                    background: 'var(--primary-light)',
                    padding: '0.1rem 0.35rem',
                    borderRadius: '4px',
                    border: '1px solid var(--border-color)'
                  }}>
                    {innerText}
                  </strong>
                );
              }
              return part;
            })}
          </div>
        );
      })}
    </div>
  );
}

export default function QuestionDetailView({ 
  story, 
  index, 
  onUpdateStory, 
  onDeleteStory, 
  theme, 
  onToggleTheme,
  isSidebarCollapsed,
  onToggleSidebar,
  onOpenMobileMenu
}) {
  const [codeCopied, setCodeCopied] = useState(false);
  const [isAiGenerating, setIsAiGenerating] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('Python');
  const [questionLang, setQuestionLang] = useState('EN'); // 'EN' or 'HI'
  const [rightPaneTab, setRightPaneTab] = useState('ALL'); // 'ALL', 'QUESTION', 'STORY', 'BOTTLENECK'
  const [mobileTab, setMobileTab] = useState('CODE'); // 'CODE' or 'STORY' (Mobile view switch)
  const [isEditingStory, setIsEditingStory] = useState(false);
  const [isEditingBottleneck, setIsEditingBottleneck] = useState(false);
  const [isFullscreenEditingStory, setIsFullscreenEditingStory] = useState(false);
  
  // Fullscreen modal state: null, 'code', 'question', 'story'
  const [fullscreenSection, setFullscreenSection] = useState(null);

  if (!story) {
    return (
      <div className="main-workspace" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64748b' }}>
        <div style={{ textAlign: 'center' }}>
          <h2>No Question Selected</h2>
          <p>Select a question from the left sidebar or click "+ Add" to create one.</p>
        </div>
      </div>
    );
  }

  // Automatic counting: position index + 1
  const autoProblemNumber = (index + 1).toString();

  const handleTitleChange = (newTitle) => {
    onUpdateStory({ ...story, title: newTitle });
  };

  const handleDescriptionChange = (newDesc) => {
    onUpdateStory({ ...story, problemDescription: newDesc });
  };

  const handleHindiDescriptionChange = (newHindiDesc) => {
    onUpdateStory({ ...story, hindiDescription: newHindiDesc });
  };

  const handleStoryChange = (newStory) => {
    onUpdateStory({ ...story, mindfulStory: newStory });
  };

  const handleBottleneckChange = (newBottleneck) => {
    onUpdateStory({ ...story, unforgettableBottleneck: newBottleneck });
  };

  const handleRawCodeChange = (newCode) => {
    onUpdateStory({ ...story, rawCode: newCode });
  };

  const handleToggleDone = () => {
    onUpdateStory({ ...story, isDone: !story.isDone });
  };

  const handleApproachesChange = (newApproaches) => {
    onUpdateStory({ ...story, approaches: newApproaches });
  };

  // Trigger Groq AI Generation for Code, Story, Bottlenecks, and Dual-Language Descriptions
  const handleAiGenerate = async () => {
    if (isAiGenerating) return;
    setIsAiGenerating(true);
    try {
      const generated = await generateQuestionStoryAndCode(
        story.title, 
        story.problemDescription, 
        selectedLanguage
      );

      let bottleneckVal = generated.unforgettableBottleneck;
      if (typeof bottleneckVal === 'object' && bottleneckVal !== null) {
        bottleneckVal = `⚡ #1 Critical Trap: ${bottleneckVal.trap || bottleneckVal.bottleneck || ''}\n\n💡 Memory Trick: ${bottleneckVal.trick || bottleneckVal.shortcut || ''}`;
      }

      onUpdateStory({
        ...story,
        approaches: generated.approaches || story.approaches || [],
        problemDescription: generated.problemDescription || story.problemDescription || '',
        hindiDescription: generated.hindiDescription || story.hindiDescription || '',
        mindfulStory: generated.mindfulStory || story.mindfulStory || '',
        unforgettableBottleneck: bottleneckVal || story.unforgettableBottleneck || '',
        rawCode: generated.rawCode || story.rawCode || ''
      });

      alert(`✨ AI generated English & Hindi Descriptions, Custom Story & ${selectedLanguage} Code!`);
    } catch (err) {
      alert(`AI Generation Failed: ${err.message}`);
    } finally {
      setIsAiGenerating(false);
    }
  };

  // Tab key indentation support inside solution code editor
  const handleCodeKeyDown = (e) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const start = e.target.selectionStart;
      const end = e.target.selectionEnd;
      const value = e.target.value;
      
      const newValue = value.substring(0, start) + '  ' + value.substring(end);
      onUpdateStory({ ...story, rawCode: newValue });

      setTimeout(() => {
        e.target.selectionStart = e.target.selectionEnd = start + 2;
      }, 0);
    }
  };

  const handleCopyCode = () => {
    if (story.rawCode) {
      navigator.clipboard.writeText(story.rawCode);
      setCodeCopied(true);
      setTimeout(() => setCodeCopied(false), 2000);
    }
  };

  return (
    <div className="main-workspace">
      {/* Workspace Header */}
      <div className="workspace-header">
        <div style={{ flex: 1, marginRight: '1rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          {/* Mobile Hamburger Menu Trigger */}
          <button 
            onClick={onOpenMobileMenu}
            className="mobile-hamburger-btn"
            title="Open Questions Sidebar Menu"
          >
            <Menu size={22} color="var(--primary)" />
          </button>

          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.2rem' }}>
              <span className="question-auto-index">#{autoProblemNumber}</span>
              <span className={`badge-difficulty-${story.difficulty?.toLowerCase() || 'medium'}`}>
                {story.difficulty || 'Medium'}
              </span>
            </div>
            
            {/* Editable Question Title */}
            <input 
              type="text" 
              className="editable-title-input"
              value={story.title || ''}
              onChange={(e) => handleTitleChange(e.target.value)}
              placeholder="Type question title here..."
              title="Click to edit problem title"
            />
          </div>
        </div>

        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
          {/* Focus Mode Toggle */}
          <button
            onClick={onToggleSidebar}
            className="desktop-only-btn"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              background: isSidebarCollapsed ? 'var(--primary)' : 'var(--bg-card)',
              color: isSidebarCollapsed ? '#ffffff' : 'var(--primary)',
              border: '1px solid var(--border-color)',
              padding: '0.55rem 0.85rem',
              borderRadius: '8px',
              fontWeight: '800',
              fontSize: '0.85rem',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            title={isSidebarCollapsed ? 'Exit Focus Mode' : 'Enter Focus Mode (Collapse Sidebar)'}
          >
            <Target size={16} />
            {isSidebarCollapsed ? 'Focus Mode ON 🎯' : 'Focus Mode'}
          </button>

          {/* ✨ AI Auto-Generate Button */}
          <button
            onClick={handleAiGenerate}
            disabled={isAiGenerating}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              background: 'linear-gradient(135deg, #7c3aed, #2563eb)',
              color: '#ffffff',
              border: 'none',
              padding: '0.55rem 1rem',
              borderRadius: '8px',
              fontWeight: '800',
              fontSize: '0.85rem',
              cursor: isAiGenerating ? 'not-allowed' : 'pointer',
              boxShadow: '0 4px 12px rgba(124, 58, 237, 0.3)',
              opacity: isAiGenerating ? 0.75 : 1,
              transition: 'all 0.2s ease'
            }}
            title={`Generate ${selectedLanguage} Code & Story using Groq AI`}
          >
            {isAiGenerating ? <Loader2 className="spin" size={16} /> : <Sparkles size={16} color="#fbbf24" />}
            {isAiGenerating ? 'Generating...' : `✨ AI Generate (${selectedLanguage})`}
          </button>

          {/* Theme Toggle Button */}
          <button 
            onClick={onToggleTheme}
            className="theme-toggle-btn"
            title={`Switch to ${theme === 'light' ? 'ChatGPT Dark Mode' : 'Light Mode'}`}
          >
            {theme === 'light' ? <Moon size={16} /> : <Sun size={16} color="#f59e0b" />}
            {theme === 'light' ? 'Dark' : 'Light'}
          </button>

          {/* Mark as Done Button */}
          <button 
            onClick={handleToggleDone}
            style={{ 
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              background: story.isDone ? '#dcfce7' : 'var(--bg-card)',
              color: story.isDone ? '#15803d' : 'var(--text-main)',
              border: story.isDone ? '1px solid #86efac' : '1px solid var(--border-color)',
              padding: '0.55rem 0.85rem',
              borderRadius: '8px',
              fontWeight: '700',
              fontSize: '0.85rem',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            title="Toggle Question Completion Status"
          >
            {story.isDone ? <CheckCircle size={17} color="#16a34a" /> : <Circle size={17} color="#94a3b8" />}
            {story.isDone ? 'Done ✓' : 'Mark Done'}
          </button>

          {/* Delete Problem Button */}
          <button 
            className="btn-secondary" 
            onClick={() => onDeleteStory(story.id)}
            style={{ color: '#dc2626', borderColor: 'var(--border-color)', padding: '0.55rem 0.75rem' }}
            title="Delete Problem"
          >
            <Trash2 size={14} />
          </button>
        </div>
      </div>

      {/* MOBILE WORKSPACE TAB SWITCHER */}
      <div className="mobile-view-tabs">
        <button
          className={`mobile-tab-btn ${mobileTab === 'CODE' ? 'active' : ''}`}
          onClick={() => setMobileTab('CODE')}
        >
          <Code size={16} /> Solution Code ({selectedLanguage})
        </button>
        <button
          className={`mobile-tab-btn ${mobileTab === 'STORY' ? 'active' : ''}`}
          onClick={() => setMobileTab('STORY')}
        >
          <BookOpen size={16} /> Story & Notes
        </button>
      </div>

      {/* Split Workspace Body */}
      <div className="workspace-split-body">
        {/* LEFT PANE: Solution Code Editor */}
        <div className={`notepad-pane ${mobileTab === 'CODE' ? 'mobile-visible' : 'mobile-hidden'}`}>
          <div className="code-editor-block">
            <div className="code-editor-header" style={{ flexWrap: 'wrap', gap: '0.6rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Code size={16} /> Solution Code
                </span>

                {/* Code Language Dropdown */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--text-dim)' }}>Lang:</span>
                  <select 
                    value={selectedLanguage}
                    onChange={(e) => setSelectedLanguage(e.target.value)}
                    style={{
                      padding: '0.2rem 0.45rem',
                      borderRadius: '6px',
                      border: '1px solid var(--border-color)',
                      background: 'var(--bg-card)',
                      color: 'var(--primary)',
                      fontSize: '0.775rem',
                      fontWeight: '800',
                      cursor: 'pointer',
                      outline: 'none'
                    }}
                  >
                    <option value="Java">Java ☕</option>
                    <option value="Python">Python 🐍</option>
                    <option value="C++">C++ ⚡</option>
                    <option value="JavaScript">JavaScript 💛</option>
                  </select>
                </div>
              </div>
              
              <div style={{ display: 'flex', gap: '0.35rem', alignItems: 'center', marginLeft: 'auto' }}>
                <button 
                  className="btn-secondary"
                  onClick={() => setFullscreenSection('code')}
                  style={{ padding: '0.3rem 0.55rem', fontSize: '0.75rem', gap: '0.25rem' }}
                  title="Fullscreen View Code"
                >
                  <Maximize2 size={13} /> Fullscreen
                </button>

                <button 
                  className="btn-secondary"
                  onClick={handleCopyCode}
                  style={{ padding: '0.3rem 0.55rem', fontSize: '0.75rem', gap: '0.25rem' }}
                  title="Copy Solution Code to Clipboard"
                >
                  {codeCopied ? <Check size={13} color="#16a34a" /> : <Copy size={13} />}
                  {codeCopied ? 'Copied!' : 'Copy'}
                </button>
              </div>
            </div>

            <div style={{ padding: '1rem', background: 'var(--code-bg)', flex: 1, display: 'flex' }}>
              <textarea 
                className="notepad-textarea"
                style={{ flex: 1, minHeight: '520px', fontFamily: 'Fira Code, monospace', fontSize: '0.925rem', whiteSpace: 'pre', background: 'transparent', border: 'none', resize: 'none' }}
                value={story.rawCode || ''}
                onChange={(e) => handleRawCodeChange(e.target.value)}
                onKeyDown={handleCodeKeyDown}
                placeholder={`Write or paste your ${selectedLanguage} solution code here...`}
              />
            </div>
          </div>
        </div>

        {/* RIGHT PANE: Story & Notes Section with Focus Navigation Tabs */}
        <div className={`story-side-pane ${mobileTab === 'STORY' ? 'mobile-visible' : 'mobile-hidden'}`}>
          {/* Quick Focus Section Tabs */}
          <div style={{ display: 'flex', background: 'var(--bg-card)', padding: '0.2rem', borderRadius: '10px', border: '1px solid var(--border-color)', gap: '0.2rem' }}>
            <button
              onClick={() => setRightPaneTab('ALL')}
              style={{
                flex: 1,
                padding: '0.35rem 0.4rem',
                borderRadius: '6px',
                border: 'none',
                background: rightPaneTab === 'ALL' ? 'var(--primary)' : 'transparent',
                color: rightPaneTab === 'ALL' ? '#ffffff' : 'var(--text-dim)',
                fontWeight: '800',
                fontSize: '0.75rem',
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
            >
              📑 All Stacked
            </button>
            <button
              onClick={() => setRightPaneTab('QUESTION')}
              style={{
                flex: 1,
                padding: '0.35rem 0.4rem',
                borderRadius: '6px',
                border: 'none',
                background: rightPaneTab === 'QUESTION' ? 'var(--primary)' : 'transparent',
                color: rightPaneTab === 'QUESTION' ? '#ffffff' : 'var(--text-dim)',
                fontWeight: '800',
                fontSize: '0.75rem',
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
            >
              📌 Question
            </button>
            <button
              onClick={() => setRightPaneTab('STORY')}
              style={{
                flex: 1,
                padding: '0.35rem 0.4rem',
                borderRadius: '6px',
                border: 'none',
                background: rightPaneTab === 'STORY' ? 'var(--primary)' : 'transparent',
                color: rightPaneTab === 'STORY' ? '#ffffff' : 'var(--text-dim)',
                fontWeight: '800',
                fontSize: '0.75rem',
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
            >
              📖 Story
            </button>
            <button
              onClick={() => setRightPaneTab('BOTTLENECK')}
              style={{
                flex: 1,
                padding: '0.35rem 0.4rem',
                borderRadius: '6px',
                border: 'none',
                background: rightPaneTab === 'BOTTLENECK' ? '#d97706' : 'transparent',
                color: rightPaneTab === 'BOTTLENECK' ? '#ffffff' : 'var(--text-dim)',
                fontWeight: '800',
                fontSize: '0.75rem',
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
            >
              ⚡ Bottleneck
            </button>
          </div>

          {/* 1. Section of Question */}
          {(rightPaneTab === 'ALL' || rightPaneTab === 'QUESTION') && (
            <div className="story-card-blue">
              <div className="story-section-title" style={{ justifyContent: 'space-between' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <HelpCircle size={18} color="var(--primary)" />
                  <span>Section of Question</span>
                </span>

                <div style={{ display: 'flex', gap: '0.3rem', alignItems: 'center' }}>
                  {/* Language Toggle Button [ English | Hindi ] */}
                  <div style={{ display: 'flex', background: 'var(--bg-app)', border: '1px solid var(--border-color)', borderRadius: '6px', padding: '0.15rem' }}>
                    <button
                      onClick={() => setQuestionLang('EN')}
                      style={{
                        border: 'none',
                        background: questionLang === 'EN' ? 'var(--primary)' : 'transparent',
                        color: questionLang === 'EN' ? '#fff' : 'var(--text-dim)',
                        fontSize: '0.7rem',
                        fontWeight: '800',
                        padding: '0.15rem 0.45rem',
                        borderRadius: '4px',
                        cursor: 'pointer'
                      }}
                      title="English Description"
                    >
                      🇬🇧 EN
                    </button>
                    <button
                      onClick={() => setQuestionLang('HI')}
                      style={{
                        border: 'none',
                        background: questionLang === 'HI' ? 'var(--primary)' : 'transparent',
                        color: questionLang === 'HI' ? '#fff' : 'var(--text-dim)',
                        fontSize: '0.7rem',
                        fontWeight: '800',
                        padding: '0.15rem 0.45rem',
                        borderRadius: '4px',
                        cursor: 'pointer'
                      }}
                      title="Hindi / Hinglish Description"
                    >
                      🇮🇳 Hindi
                    </button>
                  </div>

                  <button 
                    onClick={() => setFullscreenSection('question')}
                    style={{ background: 'transparent', border: 'none', color: 'var(--primary)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.2rem', fontSize: '0.75rem', fontWeight: '700' }}
                    title="Fullscreen View Question"
                  >
                    <Maximize2 size={14} />
                  </button>
                </div>
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <label style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--text-dim)', marginBottom: '0.3rem', display: 'block' }}>
                  Approaches & Algo Used:
                </label>
                <ApproachTagsInput 
                  tags={story.approaches || story.tags || []} 
                  onChange={handleApproachesChange} 
                />
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.35rem' }}>
                  <label style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--text-dim)' }}>
                    Problem Description ({questionLang === 'EN' ? 'English' : 'Hindi'}):
                  </label>
                </div>

                {questionLang === 'EN' ? (
                  <textarea 
                    className="notepad-textarea"
                    style={{ minHeight: '140px' }}
                    value={story.problemDescription || ''}
                    onChange={(e) => handleDescriptionChange(e.target.value)}
                    placeholder="English problem description..."
                  />
                ) : (
                  <textarea 
                    className="notepad-textarea"
                    style={{ minHeight: '140px' }}
                    value={story.hindiDescription || ''}
                    onChange={(e) => handleHindiDescriptionChange(e.target.value)}
                    placeholder="Click '✨ AI Generate' to populate Hindi / Hinglish description or type your Hindi version here..."
                  />
                )}
              </div>
            </div>
          )}

          {/* 2. Section of Story (Mindful Story Approach) */}
          {(rightPaneTab === 'ALL' || rightPaneTab === 'STORY') && (
            <div className="story-card-blue">
              <div className="story-section-title" style={{ justifyContent: 'space-between' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <BookOpen size={18} color="var(--primary)" />
                  <span>✨ Mindful Story Approach</span>
                </span>

                <div style={{ display: 'flex', gap: '0.4rem', alignItems: 'center' }}>
                  <button 
                    onClick={() => setIsEditingStory(!isEditingStory)}
                    style={{ background: 'transparent', border: 'none', color: 'var(--primary)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.2rem', fontSize: '0.75rem', fontWeight: '700' }}
                  >
                    {isEditingStory ? <Eye size={14} /> : <Edit3 size={14} />}
                    {isEditingStory ? 'Visual View' : 'Edit Text'}
                  </button>

                  <button 
                    onClick={() => setFullscreenSection('story')}
                    style={{ background: 'transparent', border: 'none', color: 'var(--primary)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.2rem', fontSize: '0.75rem', fontWeight: '700' }}
                    title="Fullscreen View Story"
                  >
                    <Maximize2 size={14} />
                  </button>
                </div>
              </div>

              {isEditingStory ? (
                <textarea 
                  className="notepad-textarea"
                  style={{ minHeight: '180px' }}
                  value={story.mindfulStory || ''}
                  onChange={(e) => handleStoryChange(e.target.value)}
                  placeholder="Write your personal story notes, physical metaphors, dry run steps, or edge cases here..."
                />
              ) : (
                <div style={{ background: 'var(--bg-app)', padding: '0.9rem', borderRadius: '8px', border: '1px solid var(--border-color)', minHeight: '140px' }}>
                  <FormattedStoryText 
                    text={story.mindfulStory} 
                    placeholder="Click '✨ AI Generate' to generate a colorful Hinglish story approach!" 
                  />
                </div>
              )}
            </div>
          )}

          {/* 3. Unforgettable Bottleneck */}
          {(rightPaneTab === 'ALL' || rightPaneTab === 'BOTTLENECK') && (
            <div className="story-card-blue" style={{ borderLeftColor: '#eab308' }}>
              <div className="story-section-title" style={{ color: '#d97706', justifyContent: 'space-between' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <AlertTriangle size={18} color="#d97706" />
                  <span>⚡ Unforgettable Bottleneck</span>
                </span>

                <button 
                  onClick={() => setIsEditingBottleneck(!isEditingBottleneck)}
                  style={{ background: 'transparent', border: 'none', color: '#d97706', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.2rem', fontSize: '0.75rem', fontWeight: '700' }}
                >
                  {isEditingBottleneck ? <Eye size={14} /> : <Edit3 size={14} />}
                  {isEditingBottleneck ? 'Visual View' : 'Edit Text'}
                </button>
              </div>

              {isEditingBottleneck ? (
                <textarea 
                  className="notepad-textarea"
                  style={{ minHeight: '140px' }}
                  value={typeof story.unforgettableBottleneck === 'string' ? story.unforgettableBottleneck : JSON.stringify(story.unforgettableBottleneck || '')}
                  onChange={(e) => handleBottleneckChange(e.target.value)}
                  placeholder="Write down the critical bottleneck step or trick that you must never forget..."
                />
              ) : (
                <div style={{ background: 'var(--bg-app)', padding: '0.9rem', borderRadius: '8px', border: '1px solid var(--border-color)', minHeight: '100px' }}>
                  <FormattedStoryText 
                    text={story.unforgettableBottleneck} 
                    placeholder="Click '✨ AI Generate' to generate the bottleneck trap & memory trick!" 
                  />
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* FULLSCREEN MODAL VIEW OVERLAY */}
      {fullscreenSection && (
        <div className="modal-backdrop">
          <div className="modal-box" style={{ maxWidth: '92vw', height: '90vh', display: 'flex', flexDirection: 'column' }}>
            <div style={{ padding: '1rem 1.5rem', background: 'var(--primary-light)', borderBottom: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 style={{ color: 'var(--primary)', margin: 0, fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                {fullscreenSection === 'code' && <Code size={20} />}
                {fullscreenSection === 'question' && <HelpCircle size={20} />}
                {fullscreenSection === 'story' && <BookOpen size={20} />}
                <span>
                  {fullscreenSection === 'code' && `Fullscreen Solution Code (${selectedLanguage})`}
                  {fullscreenSection === 'question' && `Fullscreen Question (${questionLang === 'EN' ? 'English' : 'Hindi'})`}
                  {fullscreenSection === 'story' && `Fullscreen Mindful Story Approach`}
                </span>
              </h3>

              <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center' }}>
                {/* Mode toggle in Fullscreen Story View */}
                {fullscreenSection === 'story' && (
                  <button 
                    onClick={() => setIsFullscreenEditingStory(!isFullscreenEditingStory)}
                    style={{ background: 'var(--bg-card)', color: 'var(--primary)', border: '1px solid var(--border-color)', padding: '0.4rem 0.8rem', borderRadius: '6px', cursor: 'pointer', fontWeight: '800', display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.8rem' }}
                  >
                    {isFullscreenEditingStory ? <Eye size={15} /> : <Edit3 size={15} />}
                    {isFullscreenEditingStory ? 'Visual View' : 'Edit Text'}
                  </button>
                )}

                <button 
                  onClick={() => setFullscreenSection(null)}
                  style={{ background: 'var(--primary)', color: '#fff', border: 'none', padding: '0.4rem 0.8rem', borderRadius: '6px', cursor: 'pointer', fontWeight: '800', display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.85rem' }}
                >
                  <Minimize2 size={16} /> Exit Fullscreen
                </button>
              </div>
            </div>

            <div style={{ flex: 1, padding: '1.5rem', overflowY: 'auto', background: 'var(--bg-card)' }}>
              {fullscreenSection === 'code' && (
                <textarea 
                  className="notepad-textarea"
                  style={{ width: '100%', height: '100%', minHeight: '620px', fontFamily: 'Fira Code, monospace', fontSize: '1rem', whiteSpace: 'pre', background: 'var(--code-bg)' }}
                  value={story.rawCode || ''}
                  onChange={(e) => handleRawCodeChange(e.target.value)}
                  onKeyDown={handleCodeKeyDown}
                  placeholder={`Type or edit your ${selectedLanguage} solution code here...`}
                />
              )}

              {fullscreenSection === 'question' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', height: '100%' }}>
                  <ApproachTagsInput tags={story.approaches || []} onChange={handleApproachesChange} />
                  <textarea 
                    className="notepad-textarea"
                    style={{ flex: 1, minHeight: '520px', fontSize: '1rem' }}
                    value={questionLang === 'EN' ? (story.problemDescription || '') : (story.hindiDescription || '')}
                    onChange={(e) => questionLang === 'EN' ? handleDescriptionChange(e.target.value) : handleHindiDescriptionChange(e.target.value)}
                    placeholder="Type or edit question description here..."
                  />
                </div>
              )}

              {fullscreenSection === 'story' && (
                <div style={{ height: '100%' }}>
                  {isFullscreenEditingStory ? (
                    <textarea 
                      className="notepad-textarea"
                      style={{ width: '100%', height: '100%', minHeight: '620px', fontSize: '1rem', lineHeight: '1.7' }}
                      value={story.mindfulStory || ''}
                      onChange={(e) => handleStoryChange(e.target.value)}
                      placeholder="Type or edit your Mindful Story Approach here..."
                    />
                  ) : (
                    <div style={{ background: 'var(--bg-app)', padding: '1.25rem', borderRadius: '10px', border: '1px solid var(--border-color)', minHeight: '600px' }}>
                      <FormattedStoryText text={story.mindfulStory} placeholder="Click '✨ AI Generate' to generate a colorful Hinglish story approach!" />
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
