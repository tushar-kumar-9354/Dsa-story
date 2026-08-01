import React, { useState } from 'react';
import { X, BookOpen, Code2, AlertTriangle, Copy, Check, Clock, Cpu } from 'lucide-react';

export default function StoryDetailModal({ story, onClose }) {
  const [activeTab, setActiveTab] = useState('hinglishCode'); // 'hinglishCode', 'story', 'bottleneck'
  const [copied, setCopied] = useState(false);

  if (!story) return null;

  const copyCodeWithComments = () => {
    const text = story.codeLines
      .map(item => `${item.line} // ${item.comment}`)
      .join('\n');
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const copyFullMarkdown = () => {
    const md = `# ${story.title} (#${story.problemNumber})

## 📖 Mindful Story
${story.mindfulStory}

## ⚡ The Unforgettable Bottleneck
${story.unforgettableBottleneck}

## 💻 Line-by-Line Hinglish Solution
\`\`\`javascript
${story.codeLines.map(item => `${item.line} // ${item.comment}`).join('\n')}
\`\`\`

**Time Complexity:** ${story.timeComplexity || 'O(N)'}
**Space Complexity:** ${story.spaceComplexity || 'O(N)'}
`;
    navigator.clipboard.writeText(md);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content animate-fade-in" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="modal-header">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
              <span className="card-number">#{story.problemNumber || '?'}</span>
              <span className="badge badge-medium">{story.difficulty || 'Medium'}</span>
            </div>
            <h2 style={{ fontSize: '1.4rem', color: '#fff' }}>{story.title}</h2>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <button className="btn-secondary" onClick={copyFullMarkdown} title="Copy as Markdown">
              {copied ? <Check size={14} color="#10b981" /> : <Copy size={14} />}
              {copied ? 'Copied!' : 'Copy Markdown'}
            </button>
            <button 
              onClick={onClose}
              style={{ background: 'rgba(255,255,255,0.08)', border: 'none', color: '#fff', borderRadius: '50%', width: '32px', height: '32px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="modal-tabs">
          <button 
            className={`modal-tab-btn ${activeTab === 'hinglishCode' ? 'active' : ''}`}
            onClick={() => setActiveTab('hinglishCode')}
          >
            <Code2 size={16} /> Line-by-Line Hinglish Code
          </button>
          <button 
            className={`modal-tab-btn ${activeTab === 'story' ? 'active' : ''}`}
            onClick={() => setActiveTab('story')}
          >
            <BookOpen size={16} /> Mindful Story
          </button>
          <button 
            className={`modal-tab-btn ${activeTab === 'bottleneck' ? 'active' : ''}`}
            onClick={() => setActiveTab('bottleneck')}
          >
            <AlertTriangle size={16} /> Bottleneck & Breakthrough
          </button>
        </div>

        {/* Modal Body Content */}
        <div className="modal-body">
          {/* Complexity Banner */}
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.25rem' }}>
            {story.timeComplexity && (
              <div className="badge badge-tag" style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem' }}>
                <Clock size={13} style={{ marginRight: '0.3rem' }} /> Time: {story.timeComplexity}
              </div>
            )}
            {story.spaceComplexity && (
              <div className="badge badge-tag" style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem' }}>
                <Cpu size={13} style={{ marginRight: '0.3rem' }} /> Space: {story.spaceComplexity}
              </div>
            )}
          </div>

          {/* TAB 1: Hinglish Line-by-Line Code */}
          {activeTab === 'hinglishCode' && (
            <div>
              <div className="code-viewer-container">
                <div className="code-viewer-header">
                  <span>JavaScript / TypeScript with Hinglish Story Comments</span>
                  <button className="btn-secondary" onClick={copyCodeWithComments} style={{ padding: '0.2rem 0.6rem', fontSize: '0.75rem' }}>
                    <Copy size={12} /> Copy Code
                  </button>
                </div>
                
                <div style={{ padding: '0.5rem 0' }}>
                  {(story.codeLines || []).map((item, idx) => (
                    <div key={idx} className="code-line">
                      <span className="line-number">{idx + 1}</span>
                      <div className="line-content">
                        <div className="code-text">{item.line}</div>
                        {item.comment && (
                          <div className="hinglish-comment-box">
                            💬 <strong>Story:</strong> {item.comment}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: Mindful Story */}
          {activeTab === 'story' && (
            <div>
              <div className="story-banner">
                <h3 style={{ color: '#c4b5fd', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <BookOpen size={18} /> The Mindful Story Approach
                </h3>
                <div style={{ whiteSpace: 'pre-line', lineHeight: '1.7', color: '#e5e7eb' }}>
                  {story.mindfulStory}
                </div>
              </div>

              {story.problemDescription && (
                <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <h4 style={{ fontSize: '0.9rem', color: '#9ca3af', marginBottom: '0.3rem' }}>LeetCode Problem Statement</h4>
                  <p style={{ fontSize: '0.875rem', color: '#d1d5db' }}>{story.problemDescription}</p>
                </div>
              )}
            </div>
          )}

          {/* TAB 3: Bottleneck & Breakthrough */}
          {activeTab === 'bottleneck' && (
            <div>
              <div className="bottleneck-box">
                <div className="bottleneck-title">
                  <AlertTriangle size={20} /> The Unforgettable Bottleneck & Breakthrough Logic
                </div>
                <div style={{ whiteSpace: 'pre-line', lineHeight: '1.7', color: '#fef08a' }}>
                  {story.unforgettableBottleneck || 'No bottleneck details specified.'}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
