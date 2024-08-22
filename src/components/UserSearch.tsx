// SearchInput.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserStore } from '../store/userStore';

export default function UserSearch() {
  const [inputValue, setInputValue] = useState('');
  const setSearchTerm = useUserStore((state) => state.setSearchTerm);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchTerm(inputValue);
    navigate(`/search?q=${encodeURIComponent(inputValue)}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter username"
      />
      <button type="submit">Search</button>
    </form>
  );
};