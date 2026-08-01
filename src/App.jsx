import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import QuestionDetailView from './components/QuestionDetailView';
import AddQuestionModal from './components/AddQuestionModal';
import AuthView from './components/AuthView';
import { getStoredStories, saveStories, resetToDefaults } from './utils/storage';

export default function App() {
  // Current logged in user state
  const [currentUser, setCurrentUser] = useState(() => {
    try {
      const saved = localStorage.getItem('dsa_storybook_current_user');
      return saved ? JSON.parse(saved) : null;
    } catch (e) {
      return null;
    }
  });

  const [stories, setStories] = useState([]);
  const [activeStoryId, setActiveStoryId] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedAlgo, setSelectedAlgo] = useState('ALL');
  const [selectedDifficulty, setSelectedDifficulty] = useState('ALL');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Theme state: light or dark (ChatGPT Dark Mode)
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('dsa_storybook_theme') || 'light';
  });

  // Synchronize document theme attribute
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('dsa_storybook_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  // Load user-specific isolated stories from LocalStorage on mount or user change
  useEffect(() => {
    if (currentUser) {
      const userStories = getStoredStories(currentUser.id);
      setStories(userStories);
      if (userStories && userStories.length > 0) {
        setActiveStoryId(userStories[0].id);
      } else {
        setActiveStoryId(null);
      }
    }
  }, [currentUser]);

  const handleLogin = (user) => {
    setCurrentUser(user);
    localStorage.setItem('dsa_storybook_current_user', JSON.stringify(user));
  };

  const handleLogout = () => {
    if (window.confirm('Sign out of your account?')) {
      setCurrentUser(null);
      localStorage.removeItem('dsa_storybook_current_user');
    }
  };

  const handleSelectStory = (id) => {
    setActiveStoryId(id);
  };

  const handleAddStory = (newStory) => {
    if (!currentUser) return;
    setStories(prev => {
      const updated = [newStory, ...prev];
      saveStories(updated, currentUser.id);
      return updated;
    });
    setActiveStoryId(newStory.id);
  };

  const handleUpdateCurrentStory = (updatedStory) => {
    if (!currentUser) return;
    setStories(prev => {
      const updated = prev.map(s => s.id === updatedStory.id ? updatedStory : s);
      saveStories(updated, currentUser.id);
      return updated;
    });
  };

  const handleDeleteStory = (id) => {
    if (!currentUser) return;
    if (window.confirm('Delete this question entry from your story log?')) {
      setStories(prev => {
        const updated = prev.filter(s => s.id !== id);
        saveStories(updated, currentUser.id);
        if (updated.length > 0) {
          setActiveStoryId(updated[0].id);
        } else {
          setActiveStoryId(null);
        }
        return updated;
      });
    }
  };

  const handleDeleteAllStories = () => {
    if (!currentUser) return;
    if (window.confirm('⚠️ Are you sure you want to DELETE ALL questions from your library? This action cannot be undone.')) {
      setStories([]);
      saveStories([], currentUser.id);
      setActiveStoryId(null);
    }
  };

  const handleResetDefaults = () => {
    if (!currentUser) return;
    if (window.confirm('Reset question library to the default unified question set?')) {
      const defaultStories = resetToDefaults(currentUser.id);
      setStories(defaultStories);
      if (defaultStories.length > 0) {
        setActiveStoryId(defaultStories[0].id);
      }
    }
  };

  // If user is not logged in, render Login / Sign Up View!
  if (!currentUser) {
    return <AuthView onLogin={handleLogin} />;
  }

  // Filter stories by search query, algorithm approach, AND difficulty!
  const filteredStories = stories.filter(story => {
    const matchesSearch = 
      (story.title || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
      (story.mindfulStory || '').toLowerCase().includes(searchQuery.toLowerCase());

    const storyAlgos = story.approaches || story.tags || [];
    const matchesAlgo = selectedAlgo === 'ALL' || storyAlgos.some(a => a.toLowerCase().includes(selectedAlgo.toLowerCase()));

    const matchesDifficulty = selectedDifficulty === 'ALL' || 
      (story.difficulty || '').toLowerCase() === selectedDifficulty.toLowerCase();

    return matchesSearch && matchesAlgo && matchesDifficulty;
  });

  const activeStoryIndex = stories.findIndex(s => s.id === activeStoryId);
  const activeStory = (activeStoryIndex >= 0 ? stories[activeStoryIndex] : stories[0]) || null;

  return (
    <div className="app-layout">
      {/* LEFT SIDEBAR */}
      <Sidebar 
        stories={filteredStories}
        activeStoryId={activeStory?.id || activeStoryId}
        onSelectStory={handleSelectStory}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedAlgo={selectedAlgo}
        setSelectedAlgo={setSelectedAlgo}
        selectedDifficulty={selectedDifficulty}
        setSelectedDifficulty={setSelectedDifficulty}
        onOpenAddModal={() => setIsAddModalOpen(true)}
        isCollapsed={isSidebarCollapsed}
        onToggleCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
        onResetDefaults={handleResetDefaults}
        onDeleteAll={handleDeleteAllStories}
        theme={theme}
        onToggleTheme={toggleTheme}
        user={currentUser}
        onLogout={handleLogout}
        isMobileOpen={isMobileMenuOpen}
        onCloseMobile={() => setIsMobileMenuOpen(false)}
      />

      {/* MAIN WORKSPACE */}
      <QuestionDetailView 
        story={activeStory}
        index={activeStoryIndex >= 0 ? activeStoryIndex : 0}
        onUpdateStory={handleUpdateCurrentStory}
        onDeleteStory={handleDeleteStory}
        theme={theme}
        onToggleTheme={toggleTheme}
        isSidebarCollapsed={isSidebarCollapsed}
        onToggleSidebar={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
        onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
      />

      {/* ADD QUESTION MODAL */}
      <AddQuestionModal 
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAddStory={handleAddStory}
      />
    </div>
  );
}
