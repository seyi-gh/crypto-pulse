import React from 'react';
import { useStore } from '@nanostores/react';
import { favorites } from '../stores/favoritesStore';

export default function FavoriteTicker() {
  const $favorites = useStore(favorites);

  if ($favorites.length === 0) return null;

  return (
    <div className='fixed bootom-4 right-4 bg-blue-600 text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-3 animate-bounce-in z-50'>
      <span className='font-bold'>Favorites:</span>
      <div className='flex gap-2'>
        {$favorites.map(id => (
          <span key={id} className='text-xs bg-blue-800 px-2 py-1 rounded uppercase'>
            {id}
          </span>
        ))}
      </div>
    </div>
  );
};