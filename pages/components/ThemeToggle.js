// components/ThemeToggle.js
import { useEffect, useState } from 'react';
import MoonIcon from './MoonIcon';
export default function ThemeToggle() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Set theme based on user's system preference or saved preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme) {
      setTheme(savedTheme);
    } else if (systemPrefersDark) {
      setTheme('dark');
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return (
    <button onClick={toggleTheme} className="p-2 rounded">
      <MoonIcon />
    </button>
  );
}

