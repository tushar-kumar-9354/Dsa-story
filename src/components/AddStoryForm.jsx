import React, { useState } from 'react';
import { PlusCircle, Sparkles, Code, BookOpen, AlertTriangle } from 'lucide-react';

export default function AddStoryForm({ onAddStory }) {
  const [title, setTitle] = useState('');
  const [problemNumber, setProblemNumber] = useState('');
  const [difficulty, setDifficulty] = useState('Medium');
  const [tags, setTags] = useState('');
  const [problemDescription, setProblemDescription] = useState('');
  const [mindfulStory, setMindfulStory] = useState('');
  const [unforgettableBottleneck, setUnforgettableBottleneck] = useState('');
  const [rawCodeInput, setRawCodeInput] = useState('');
  const [timeComplexity, setTimeComplexity] = useState('');
  const [spaceComplexity, setSpaceComplexity] = useState('');

  const [parsedLines, setParsedLines] = useState([]);
  const [isEditingLines, setIsEditingLines] = useState(false);

  // Parse raw code block into line-by-line code & hinglish comments
  const handleParseCode = () => {
    if (!rawCodeInput.trim()) return;

    const lines = rawCodeInput.split('\n');
    const parsed = lines.map(line => {
      const commentIndex = line.indexOf('//');
      if (commentIndex !== -1) {
        return {
          line: line.substring(0, commentIndex).trimEnd(),
          comment: line.substring(commentIndex + 2).trim()
        };
      }
      return {
        line: line,
        comment: ''
      };
    });

    setParsedLines(parsed);
    setIsEditingLines(true);
  };

  const updateLineComment = (index, newComment) => {
    const updated = [...parsedLines];
    updated[index].comment = newComment;
    setParsedLines(updated);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      alert('Please enter a problem title.');
      return;
    }

    let finalCodeLines = parsedLines;
    if (finalCodeLines.length === 0 && rawCodeInput.trim()) {
      finalCodeLines = rawCodeInput.split('\n').map(line => ({
        line,
        comment: ''
      }));
    }

    const tagArray = tags
      ? tags.split(',').map(t => t.trim()).filter(Boolean)
      : ['DSA'];

    const newStory = {
      id: Date.now().toString(),
      title,
      problemNumber,
      difficulty,
      tags: tagArray,
      problemDescription,
      mindfulStory,
      unforgettableBottleneck,
      codeLines: finalCodeLines,
      timeComplexity: timeComplexity || 'O(N)',
      spaceComplexity: spaceComplexity || 'O(N)'
    };

    onAddStory(newStory);
    alert('DSA Kahani saved successfully to LocalStorage!');

    // Reset form
    setTitle('');
    setProblemNumber('');
    setDifficulty('Medium');
    setTags('');
    setProblemDescription('');
    setMindfulStory('');
    setUnforgettableBottleneck('');
    setRawCodeInput('');
    setParsedLines([]);
    setIsEditingLines(false);
    setTimeComplexity('');
    setSpaceComplexity('');
  };

  return (
    <div className="form-card animate-fade-in">
      <div style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
        <h2 className="gradient-text" style={{ fontSize: '1.6rem', marginBottom: '0.4rem' }}>
          Document a New DSA Story
        </h2>
        <p style={{ color: '#9ca3af', fontSize: '0.875rem' }}>
          Create an unforgettable Hinglish story log for your LeetCode solution!
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Title & Problem Number */}
        <div style={{ display: 'grid', gridTemplateColumns: '3fr 1fr 1.5fr', gap: '1rem' }} className="form-group">
          <div>
            <label className="form-label">LeetCode Problem Title *</label>
            <input 
              type="text" 
              className="form-input" 
              placeholder="e.g. Longest Substring Without Repeating Characters"
              value={title} 
              onChange={(e) => setTitle(e.target.value)}
              required 
            />
          </div>
          <div>
            <label className="form-label">Problem #</label>
            <input 
              type="text" 
              className="form-input" 
              placeholder="e.g. 3"
              value={problemNumber} 
              onChange={(e) => setProblemNumber(e.target.value)} 
            />
          </div>
          <div>
            <label className="form-label">Difficulty</label>
            <select 
              className="form-select"
              value={difficulty} 
              onChange={(e) => setDifficulty(e.target.value)}
            >
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </div>
        </div>

        {/* Tags & Complexities */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '1rem' }} className="form-group">
          <div>
            <label className="form-label">Topic Tags (Comma Separated)</label>
            <input 
              type="text" 
              className="form-input" 
              placeholder="e.g. Sliding Window, Hash Map, Two Pointers"
              value={tags} 
              onChange={(e) => setTags(e.target.value)} 
            />
          </div>
          <div>
            <label className="form-label">Time Complexity</label>
            <input 
              type="text" 
              className="form-input" 
              placeholder="e.g. O(N)"
              value={timeComplexity} 
              onChange={(e) => setTimeComplexity(e.target.value)} 
            />
          </div>
          <div>
            <label className="form-label">Space Complexity</label>
            <input 
              type="text" 
              className="form-input" 
              placeholder="e.g. O(N)"
              value={spaceComplexity} 
              onChange={(e) => setSpaceComplexity(e.target.value)} 
            />
          </div>
        </div>

        {/* Problem Description */}
        <div className="form-group">
          <label className="form-label">Problem Description</label>
          <textarea 
            className="form-textarea" 
            placeholder="Paste raw problem statement or summary..."
            value={problemDescription}
            onChange={(e) => setProblemDescription(e.target.value)}
          />
        </div>

        {/* Mindful Story */}
        <div className="form-group">
          <label className="form-label" style={{ color: '#c4b5fd', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <BookOpen size={16} /> Mindful Story Approach (Physical Metaphors & Characters)
          </label>
          <textarea 
            className="form-textarea" 
            placeholder="Explain the core logic as a vivid story. Assign physical metaphors (e.g. two pointers = two friends, hashmap = memory diary)..."
            value={mindfulStory}
            onChange={(e) => setMindfulStory(e.target.value)}
          />
        </div>

        {/* Unforgettable Bottleneck */}
        <div className="form-group">
          <label className="form-label" style={{ color: '#fbbf24', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <AlertTriangle size={16} /> The Unforgettable Bottleneck & Breakthrough Logic
          </label>
          <textarea 
            className="form-textarea" 
            placeholder="Where do people usually get stuck? Explain the breakthrough moment..."
            value={unforgettableBottleneck}
            onChange={(e) => setUnforgettableBottleneck(e.target.value)}
          />
        </div>

        {/* Raw Code / Commented Code */}
        <div className="form-group">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
            <label className="form-label" style={{ color: '#38bdf8', display: 'flex', alignItems: 'center', gap: '0.4rem', margin: 0 }}>
              <Code size={16} /> Solution Code (with or without inline // comments)
            </label>
            <button 
              type="button" 
              className="btn-secondary" 
              onClick={handleParseCode}
              style={{ padding: '0.25rem 0.6rem', fontSize: '0.75rem' }}
            >
              <Sparkles size={12} /> Auto-Split Comments
            </button>
          </div>
          <textarea 
            className="form-textarea code-area" 
            placeholder={`function lengthOfLongestSubstring(s) {
  let left = 0; // Story mei 'left' humara pehla dost hai jo starting line pe khada hai.
  ...
}`}
            value={rawCodeInput}
            onChange={(e) => setRawCodeInput(e.target.value)}
          />
        </div>

        {/* Line-by-Line Comment Editor */}
        {isEditingLines && parsedLines.length > 0 && (
          <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1.25rem', borderRadius: '12px', marginBottom: '1.5rem', border: '1px solid rgba(139,92,246,0.3)' }}>
            <h4 style={{ color: '#c4b5fd', fontSize: '0.95rem', marginBottom: '0.75rem' }}>
              💬 Fine-tune Line-by-Line Hinglish Comments ({parsedLines.length} lines)
            </h4>
            <div style={{ maxHeight: '320px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {parsedLines.map((item, idx) => (
                <div key={idx} style={{ background: '#0d1117', padding: '0.6rem', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <div style={{ fontFamily: 'Fira Code', fontSize: '0.8rem', color: '#38bdf8', marginBottom: '0.3rem' }}>
                    <span style={{ color: '#6b7280', marginRight: '0.5rem' }}>L{idx+1}:</span>
                    {item.line || '// (empty line)'}
                  </div>
                  <input 
                    type="text" 
                    className="form-input" 
                    style={{ fontSize: '0.8rem', padding: '0.35rem 0.6rem' }}
                    placeholder="Add Hinglish story comment for this line..."
                    value={item.comment}
                    onChange={(e) => updateLineComment(idx, e.target.value)}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        <button type="submit" className="btn-submit">
          <PlusCircle size={18} /> Save DSA Kahani Entry
        </button>
      </form>
    </div>
  );
}
