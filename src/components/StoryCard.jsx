import React from 'react';
import { ArrowRight, Trash2 } from 'lucide-react';

export default function StoryCard({ story, onView, onDelete }) {
  const getDifficultyClass = (diff) => {
    switch (diff?.toLowerCase()) {
      case 'easy': return 'badge-easy';
      case 'medium': return 'badge-medium';
      case 'hard': return 'badge-hard';
      default: return 'badge-medium';
    }
  };

  return (
    <div className="story-card animate-fade-in">
      <div>
        <div className="card-header">
          <div>
            <span className="card-number">#{story.problemNumber || '?'}</span>
            <span className={`badge ${getDifficultyClass(story.difficulty)}`}>
              {story.difficulty || 'Medium'}
            </span>
          </div>
          <button 
            onClick={(e) => { e.stopPropagation(); onDelete(story.id); }}
            style={{ background: 'transparent', border: 'none', color: '#6b7280', cursor: 'pointer', padding: '0.2rem' }}
            title="Delete Story"
          >
            <Trash2 size={16} />
          </button>
        </div>

        <h3 className="card-title" style={{ marginTop: '0.6rem' }}>{story.title}</h3>
      </div>

      {story.mindfulStory && (
        <div className="card-metaphor-preview">
          📖 {story.mindfulStory.replace(/[*#]/g, '').slice(0, 140)}...
        </div>
      )}

      <div className="card-footer">
        <div className="card-tags">
          {(story.tags || []).slice(0, 2).map((tag, idx) => (
            <span key={idx} className="badge badge-tag">{tag}</span>
          ))}
          {(story.tags || []).length > 2 && (
            <span className="badge badge-tag">+{story.tags.length - 2}</span>
          )}
        </div>

        <button className="btn-read-story" onClick={() => onView(story)}>
          Read Kahani <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
}
