import { leetcode150Dataset } from '../data/leetcode150';
import { codeforcesDataset } from '../data/codeforces';
import { hackerrankDataset } from '../data/hackerrank';
import { mustDo4050LpaDataset } from '../data/mustDo4050Lpa';

const STORAGE_PREFIX = 'dsa_storybook_account_v2_';

// Helper to prevent duplicate questions based on normalized title
const isDuplicateTitle = (existingList, newTitle) => {
  const norm = str => (str || '').toLowerCase().replace(/[^a-z0-9]/g, '');
  const target = norm(newTitle);
  if (!target) return false;
  return existingList.some(item => {
    const existingNorm = norm(item.title);
    return existingNorm === target || (target.length > 6 && existingNorm.includes(target));
  });
};

// Helper to normalize bottleneck values if they are objects
const normalizeBottleneck = (val) => {
  if (!val) return '';
  if (typeof val === 'string') return val;
  if (typeof val === 'object') {
    return `⚡ #1 Critical Trap: ${val.trap || val.bottleneck || val['#1 Critical Bottleneck Trap'] || JSON.stringify(val)}\n\n💡 Memory Trick: ${val.trick || val.shortcut || val['Unforgettable Memory Trick'] || ''}`;
  }
  return String(val);
};

// Merge ALL questions including Must-Do 40-50 LPA Questions into one master list
export const getMasterDataset = () => {
  const master = [];

  // 1. Add Must-Do 40-50 LPA Interview Questions first (Fibonacci, Stairs, LRU, etc.)
  (mustDo4050LpaDataset || []).forEach(item => {
    if (!isDuplicateTitle(master, item.title)) {
      master.push(item);
    }
  });

  // 2. Add LeetCode 150 questions
  (leetcode150Dataset || []).forEach(item => {
    if (!isDuplicateTitle(master, item.title)) {
      master.push(item);
    }
  });

  // 3. Add Codeforces questions
  (codeforcesDataset || []).forEach(item => {
    if (!isDuplicateTitle(master, item.title)) {
      master.push(item);
    }
  });

  // 4. Add HackerRank questions
  (hackerrankDataset || []).forEach(item => {
    if (!isDuplicateTitle(master, item.title)) {
      master.push(item);
    }
  });

  return master;
};

// Get stored stories strictly isolated per user account key with fallback migration
export const getStoredStories = (userId = 'default_user') => {
  const storageKey = `${STORAGE_PREFIX}${userId}`;
  try {
    let saved = localStorage.getItem(storageKey);
    
    // Legacy fallback check so AI generated responses are NEVER lost on update
    if (!saved) {
      saved = localStorage.getItem('dsa_storybook_account_v1_' + userId) || 
              localStorage.getItem('dsa_storybook_unified_v7') || 
              localStorage.getItem('dsa_storybook_unified_v6');
    }

    let parsed = null;
    if (saved) {
      try {
        parsed = JSON.parse(saved);
      } catch (e) {
        parsed = null;
      }
    }

    // If no saved data or empty array, populate master dataset including 40-50 LPA Must-Dos
    if (saved === null || !Array.isArray(parsed) || parsed.length === 0) {
      const initialMaster = getMasterDataset();
      localStorage.setItem(storageKey, JSON.stringify(initialMaster));
      return initialMaster;
    }

    // Merge missing Must-Do 40-50 LPA questions if user's saved list doesn't have them yet
    const master = getMasterDataset();
    master.forEach(mItem => {
      if (!isDuplicateTitle(parsed, mItem.title)) {
        parsed.push(mItem);
      }
    });

    // Sanitize every single question item preserving AI generated stories, bottlenecks & code
    const sanitized = parsed.map((item, idx) => ({
      id: item.id || `q-${idx + 1}`,
      title: typeof item.title === 'string' ? item.title : String(item.title || `Question ${idx + 1}`),
      difficulty: item.difficulty || 'Medium',
      approaches: Array.isArray(item.approaches) ? item.approaches : (Array.isArray(item.tags) ? item.tags : []),
      problemDescription: typeof item.problemDescription === 'string' ? item.problemDescription : String(item.problemDescription || ''),
      hindiDescription: typeof item.hindiDescription === 'string' ? item.hindiDescription : String(item.hindiDescription || ''),
      mindfulStory: typeof item.mindfulStory === 'string' ? item.mindfulStory : String(item.mindfulStory || ''),
      unforgettableBottleneck: normalizeBottleneck(item.unforgettableBottleneck),
      rawCode: typeof item.rawCode === 'string' ? item.rawCode : String(item.rawCode || ''),
      codeLines: Array.isArray(item.codeLines) ? item.codeLines : [],
      isDone: Boolean(item.isDone)
    }));

    // Ensure current isolated storage key has saved copy
    localStorage.setItem(storageKey, JSON.stringify(sanitized));

    return sanitized;
  } catch (error) {
    console.error('Failed to load stories from LocalStorage', error);
    return getMasterDataset();
  }
};

// Save user state directly to isolated user key in LocalStorage
export const saveStories = (stories, userId = 'default_user') => {
  const storageKey = `${STORAGE_PREFIX}${userId}`;
  try {
    localStorage.setItem(storageKey, JSON.stringify(stories));
  } catch (error) {
    console.error('Failed to save stories to LocalStorage', error);
  }
};

// Reset isolated user state to default master list
export const resetToDefaults = (userId = 'default_user') => {
  const storageKey = `${STORAGE_PREFIX}${userId}`;
  try {
    const initialMaster = getMasterDataset();
    localStorage.setItem(storageKey, JSON.stringify(initialMaster));
    return initialMaster;
  } catch (error) {
    console.error('Failed to reset stories', error);
    return getMasterDataset();
  }
};
