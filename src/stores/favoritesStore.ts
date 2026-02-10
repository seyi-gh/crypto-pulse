//! Sharing data in localStorage

import { persistentAtom } from '@nanostores/persistent';

//? `persistentAtom` -> Saving localStorage automatically
//? `crypto-favs` -> key for localStorage
export const favorites = persistentAtom<string[]>('crypto-favs', [], {
  encode: JSON.stringify,
  decode: JSON.parse
});

export function addFavorite(id: string) {
  if (!favorites.get().includes(id))
    favorites.set([...favorites.get(), id]);
}

export function removeFavorite(id: string) {
  favorites.set(favorites.get().filter(f => f !== id));
}