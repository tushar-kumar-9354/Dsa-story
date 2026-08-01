import React, { useState } from 'react';
import { Copy, Check, Sparkles, AlertCircle, MessageSquareCode } from 'lucide-react';

export default function StoryGeneratorGuide() {
  const [copied, setCopied] = useState(false);

  const promptTemplate = `Act as an Innovative DSA Mentor. Formulate a Story & Hinglish breakdown for the following LeetCode problem:

Title & Code:
[PASTE LEETCODE TITLE AND SOLUTION CODE HERE]

STRICT FORMATTING RULES TO FOLLOW:
1. The Mindful Story Approach: Explain the core logic as a vivid story with physical metaphors (e.g. two pointers = two friends, hashmap = memory diary).
2. The "Unforgettable" Bottleneck: Clearly highlight the exact tricky part where people get stuck and the breakthrough logic.
3. Line-by-Line Hinglish Comments: Rewrite the code and add a Hinglish (Hindi + English) comment to EVERY single line as a continuation of the story.`;

  const copyPrompt = () => {
    navigator.clipboard.writeText(promptTemplate);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="guide-card animate-fade-in" style={{ maxWidth: '840px', margin: '0 auto' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
        <div style={{ background: 'rgba(245, 158, 11, 0.2)', padding: '0.6rem', borderRadius: '12px' }}>
          <Sparkles size={24} color="#fbbf24" />
        </div>
        <div>
          <h2 style={{ fontSize: '1.5rem', color: '#fff' }}>Phase 2 Story & Hinglish Prompt Generator</h2>
          <p style={{ color: '#9ca3af', fontSize: '0.875rem' }}>
            Copy this standardized prompt template to transform any LeetCode problem into an unforgettable Hinglish story!
          </p>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div style={{ background: 'rgba(139, 92, 246, 0.1)', padding: '1rem', borderRadius: '8px', border: '1px solid rgba(139, 92, 246, 0.25)' }}>
          <h4 style={{ color: '#c4b5fd', fontSize: '0.9rem', marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <AlertCircle size={15} /> 3 Strict Formatting Rules Applied
          </h4>
          <ul style={{ paddingLeft: '1.25rem', fontSize: '0.85rem', color: '#d1d5db', lineHeight: '1.6' }}>
            <li><strong>Mindful Story Approach:</strong> Physical metaphors & character roles (e.g. pointers = friends).</li>
            <li><strong>Unforgettable Bottleneck:</strong> The exact trick where coders freeze & breakthrough logic.</li>
            <li><strong>Line-by-Line Hinglish Comments:</strong> Narrative comments on <em>every single line</em>.</li>
          </ul>
        </div>

        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <label className="form-label" style={{ margin: 0, color: '#f59e0b', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <MessageSquareCode size={16} /> Ready-to-Use Prompt Template
            </label>
            <button className="btn-secondary" onClick={copyPrompt} style={{ padding: '0.3rem 0.75rem', fontSize: '0.8rem' }}>
              {copied ? <Check size={14} color="#10b981" /> : <Copy size={14} />}
              {copied ? 'Copied Prompt!' : 'Copy Prompt'}
            </button>
          </div>
          <div className="prompt-copy-box">
            {promptTemplate}
          </div>
        </div>
      </div>
    </div>
  );
}
