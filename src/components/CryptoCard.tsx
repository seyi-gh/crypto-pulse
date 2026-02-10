import React from 'react';
import { useStore } from '@nanostores/react';
import { favorites, addFavorite, removeFavorite } from '../stores/favoritesStore';

interface Props {
  id: string;
  name: string;
  price: number;
  change24h: number;
  image: string;
};

export default function CryptoCard({ id, name, price, change24h, image }: Props) {
  const $favorites = useStore(favorites); //!
  const isFav = $favorites.includes(id);

  return (
    <div className='bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-blue-500 transition-all shadow-lg'>
      <div className='flex items-center gap-4 mb-4'>
        <img src={image} alt={name} className='w-12 h-12 rounded-full' />
        <div>
          <h3 className='text-xl font-bold text-white'>{name}</h3>
          <span className='text-xs text-slate-400 uppercase'>{id}</span>
        </div>
        <button
          onClick={() => isFav ? removeFavorite(id) : addFavorite(id)}
          className={`ml-auto p-2 rounded-full ${isFav ? "text-yellow-400 bg-yellow-400/10" : "text-slate-500 hover:bg-slate-700"}`}
        >
          {isFav ? '★' : '☆'}
        </button>
      </div>

      <div className='flex justify-between items-end'>
        <span className='text-2xl font-mono text-white'>${price.toLocaleString()}</span>
        <span className={`text-sm font-bold px-2 py-1 rounded ${change24h >= 0 ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"}`}>
          {change24h > 0 ? '+' : ''}{change24h.toFixed(2)}%
        </span>
      </div>
    </div>
  );
}