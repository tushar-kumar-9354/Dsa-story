import React from 'react';
import { Search, Plus, BookOpen, PanelLeftClose, PanelLeftOpen, CheckCircle, Circle, Trash2, X, Sun, Moon, RotateCcw, LogOut } from 'lucide-react';

export default function Sidebar({ 
  stories, 
  activeStoryId, 
  onSelectStory, 
  searchQuery, 
  setSearchQuery, 
  selectedAlgo, 
  setSelectedAlgo,
  selectedDifficulty,
  setSelectedDifficulty,
  onOpenAddModal,
  isCollapsed,
  onToggleCollapse,
  onResetDefaults,
  onDeleteAll,
  theme,
  onToggleTheme,
  user,
  onLogout,
  isMobileOpen,
  onCloseMobile
}) {
  const availableAlgos = ['ALL', 'Sliding Window', 'Hash Map', 'DP', 'Two Pointers', 'Array', 'Tree', 'Graph', 'Math', 'String'];

  // Calculate stats
  const totalCount = stories.length;
  const doneCount = stories.filter(s => s.isDone).length;
  const percentDone = totalCount > 0 ? Math.round((doneCount / totalCount) * 100) : 0;
  
  const easyCount = stories.filter(s => s.difficulty?.toLowerCase() === 'easy').length;
  const medCount = stories.filter(s => s.difficulty?.toLowerCase() === 'medium').length;
  const hardCount = stories.filter(s => s.difficulty?.toLowerCase() === 'hard').length;

  const getDifficultyClass = (diff) => {
    switch (diff?.toLowerCase()) {
      case 'easy': return 'badge-difficulty-easy';
      case 'medium': return 'badge-difficulty-medium';
      case 'hard': return 'badge-difficulty-hard';
      default: return 'badge-difficulty-medium';
    }
  };

  const handleMobileSelectStory = (id) => {
    onSelectStory(id);
    if (onCloseMobile) onCloseMobile();
  };

  return (
    <aside className={`sidebar ${isCollapsed ? 'collapsed' : ''} ${isMobileOpen ? 'mobile-open' : ''}`}>
      {/* 1. Header & Primary Controls */}
      <div className="sidebar-header">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {!isCollapsed ? (
            <div className="brand-title">
              <BookOpen size={22} color="var(--primary)" />
              <span>DSA Kahani</span>
            </div>
          ) : (
            <BookOpen size={22} color="var(--primary)" title="DSA Kahani" />
          )}

          <div style={{ display: 'flex', gap: '0.35rem', alignItems: 'center' }}>
            {!isCollapsed && (
              <button 
                onClick={onToggleTheme}
                className="theme-toggle-btn"
                style={{ padding: '0.35rem 0.5rem', fontSize: '0.75rem' }}
                title={`Switch to ${theme === 'light' ? 'ChatGPT Dark Mode' : 'Light Mode'}`}
              >
                {theme === 'light' ? <Moon size={14} /> : <Sun size={14} color="#f59e0b" />}
              </button>
            )}

            {!isCollapsed && (
              <button 
                className="btn-primary" 
                onClick={onOpenAddModal} 
                style={{ padding: '0.4rem 0.65rem', fontSize: '0.75rem' }}
                title="Add New Problem"
              >
                <Plus size={14} /> Add
              </button>
            )}

            {/* Mobile Close Button */}
            {isMobileOpen && (
              <button 
                onClick={onCloseMobile}
                style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--text-main)', padding: '0.3rem' }}
                className="mobile-only-btn"
              >
                <X size={20} />
              </button>
            )}

            {!isMobileOpen && (
              <button 
                onClick={onToggleCollapse} 
                style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--primary)', padding: '0.3rem', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                title={isCollapsed ? 'Expand Sidebar' : 'Minimize Sidebar'}
                className="desktop-only-btn"
              >
                {isCollapsed ? <PanelLeftOpen size={20} /> : <PanelLeftClose size={20} />}
              </button>
            )}
          </div>
        </div>

        {/* 2. Visual Progress Bar & Difficulty Filters Banner */}
        {!isCollapsed && (
          <div style={{ marginTop: '0.6rem', padding: '0.6rem', background: 'var(--bg-app)', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.75rem', fontWeight: '800', color: 'var(--primary)', marginBottom: '0.2rem' }}>
              <span>Progress: {doneCount} / {totalCount} ({percentDone}%)</span>
              
              <div style={{ display: 'flex', gap: '0.25rem' }}>
                <button 
                  onClick={onResetDefaults}
                  style={{ background: 'var(--primary)', color: '#fff', border: 'none', padding: '0.15rem 0.4rem', borderRadius: '4px', fontSize: '0.625rem', cursor: 'pointer', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '0.2rem' }}
                  title="Reset to All Default Master Questions"
                >
                  <RotateCcw size={10} /> Reset List
                </button>
                <button 
                  onClick={onDeleteAll}
                  style={{ background: '#dc2626', color: '#fff', border: 'none', padding: '0.15rem 0.4rem', borderRadius: '4px', fontSize: '0.625rem', cursor: 'pointer', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '0.2rem' }}
                  title="Delete All Questions"
                >
                  <Trash2 size={10} />
                </button>
              </div>
            </div>

            {/* Progress Bar Fill */}
            <div className="progress-bar-container">
              <div className="progress-bar-fill" style={{ width: `${percentDone}%` }}></div>
            </div>

            {/* Clickable Difficulty Filter Buttons */}
            <div style={{ display: 'flex', gap: '0.3rem', marginTop: '0.5rem', fontSize: '0.7rem', fontWeight: '700' }}>
              <button
                onClick={() => setSelectedDifficulty(selectedDifficulty === 'Easy' ? 'ALL' : 'Easy')}
                style={{
                  flex: 1,
                  padding: '0.2rem 0.3rem',
                  borderRadius: '4px',
                  border: '1px solid var(--border-color)',
                  background: selectedDifficulty === 'Easy' ? 'var(--primary)' : 'var(--bg-card)',
                  color: selectedDifficulty === 'Easy' ? '#ffffff' : '#15803d',
                  cursor: 'pointer',
                  fontWeight: '800',
                  transition: 'all 0.15s ease'
                }}
              >
                Easy: {easyCount}
              </button>

              <button
                onClick={() => setSelectedDifficulty(selectedDifficulty === 'Medium' ? 'ALL' : 'Medium')}
                style={{
                  flex: 1,
                  padding: '0.2rem 0.3rem',
                  borderRadius: '4px',
                  border: '1px solid var(--border-color)',
                  background: selectedDifficulty === 'Medium' ? 'var(--primary)' : 'var(--bg-card)',
                  color: selectedDifficulty === 'Medium' ? '#ffffff' : 'var(--primary)',
                  cursor: 'pointer',
                  fontWeight: '800',
                  transition: 'all 0.15s ease'
                }}
              >
                Med: {medCount}
              </button>

              <button
                onClick={() => setSelectedDifficulty(selectedDifficulty === 'Hard' ? 'ALL' : 'Hard')}
                style={{
                  flex: 1,
                  padding: '0.2rem 0.3rem',
                  borderRadius: '4px',
                  border: '1px solid var(--border-color)',
                  background: selectedDifficulty === 'Hard' ? 'var(--primary)' : 'var(--bg-card)',
                  color: selectedDifficulty === 'Hard' ? '#ffffff' : '#dc2626',
                  cursor: 'pointer',
                  fontWeight: '800',
                  transition: 'all 0.15s ease'
                }}
              >
                Hard: {hardCount}
              </button>
            </div>
          </div>
        )}
      </div>

      {/* 3. Search Bar with Clear Button */}
      {!isCollapsed && (
        <div className="sidebar-search-box">
          <div className="search-input-wrapper">
            <Search className="search-icon" size={15} />
            <input 
              type="text" 
              placeholder="Search # number, title, algo..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button className="clear-search-btn" onClick={() => setSearchQuery('')} title="Clear search">
                <X size={14} />
              </button>
            )}
          </div>
        </div>
      )}

      {/* 4. Horizontal Algo Filter Pills */}
      {!isCollapsed && (
        <div className="algo-filter-container">
          {availableAlgos.map(algo => (
            <button
              key={algo}
              className={`algo-pill ${selectedAlgo === algo ? 'active' : ''}`}
              onClick={() => setSelectedAlgo(algo)}
            >
              {algo}
            </button>
          ))}
        </div>
      )}

      {/* 5. Unified Question List */}
      <div className="sidebar-question-list">
        {stories.length > 0 ? (
          stories.map((story, index) => {
            const isActive = story.id === activeStoryId;
            const autoIndex = (index + 1).toString();

            if (isCollapsed) {
              return (
                <div
                  key={story.id}
                  onClick={() => handleMobileSelectStory(story.id)}
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '8px',
                    background: isActive ? 'var(--primary)' : 'var(--bg-card)',
                    color: isActive ? '#ffffff' : 'var(--primary)',
                    border: '1px solid var(--border-color)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: '800',
                    fontFamily: 'Fira Code',
                    fontSize: '0.85rem',
                    cursor: 'pointer',
                    margin: '0 auto',
                    position: 'relative'
                  }}
                  title={`#${autoIndex}: ${story.title} ${story.isDone ? '(Done ✓)' : ''}`}
                >
                  #{autoIndex}
                  {story.isDone && (
                    <span style={{ position: 'absolute', top: '-2px', right: '-2px', background: '#16a34a', color: '#fff', borderRadius: '50%', width: '12px', height: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '8px' }}>
                      ✓
                    </span>
                  )}
                </div>
              );
            }

            return (
              <div 
                key={story.id} 
                className={`question-item ${isActive ? 'active' : ''}`}
                onClick={() => handleMobileSelectStory(story.id)}
              >
                <div className="question-item-header">
                  <div className="question-item-title" style={{ display: 'flex', alignItems: 'flex-start', gap: '0.35rem' }}>
                    {story.isDone ? (
                      <CheckCircle size={15} color="#16a34a" style={{ flexShrink: 0, marginTop: '2px' }} title="Completed" />
                    ) : (
                      <Circle size={15} color="#cbd5e1" style={{ flexShrink: 0, marginTop: '2px' }} />
                    )}
                    <span className="question-auto-index">#{autoIndex}</span>
                    <span style={{ textDecoration: story.isDone ? 'line-through' : 'none', opacity: story.isDone ? 0.75 : 1 }}>
                      {story.title}
                    </span>
                  </div>
                  <span className={getDifficultyClass(story.difficulty)}>
                    {story.difficulty || 'Med'}
                  </span>
                </div>

                <div className="question-tags-row">
                  {(story.approaches || story.tags || []).slice(0, 3).map((algoTag, idx) => (
                    <span key={idx} className="badge-algo">
                      {algoTag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })
        ) : (
          !isCollapsed && (
            <div style={{ textAlign: 'center', padding: '2.5rem 1rem', color: '#64748b', fontSize: '0.85rem' }}>
              No matching questions found.
            </div>
          )
        )}
      </div>

      {/* User Profile Footer & Logout */}
      {user && (
        <div style={{
          padding: '0.75rem 1rem',
          borderTop: '1px solid var(--border-color)',
          background: 'var(--bg-sidebar)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '0.5rem'
        }}>
          {!isCollapsed ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', overflow: 'hidden' }}>
              <div style={{
                width: '34px',
                height: '34px',
                borderRadius: '50%',
                background: 'var(--primary-light)',
                color: 'var(--primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: '800',
                fontSize: '0.85rem',
                flexShrink: 0
              }}>
                {(user.username || user.email || 'U')[0].toUpperCase()}
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: '800', color: 'var(--text-main)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {user.username || user.email}
                </span>
                <span style={{ fontSize: '0.68rem', color: 'var(--text-dim)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {user.email}
                </span>
              </div>
            </div>
          ) : (
            <div 
              style={{ width: '34px', height: '34px', borderRadius: '50%', background: 'var(--primary-light)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', fontSize: '0.85rem', margin: '0 auto' }}
              title={user.username || user.email}
            >
              {(user.username || user.email || 'U')[0].toUpperCase()}
            </div>
          )}

          {!isCollapsed && (
            <button
              onClick={onLogout}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#dc2626',
                cursor: 'pointer',
                padding: '0.35rem',
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              title="Sign Out Account"
            >
              <LogOut size={18} />
            </button>
          )}
        </div>
      )}
    </aside>
  );
}
