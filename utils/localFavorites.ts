const toggleFavorites = (id: number) => {
  console.log('ToggleFavorites called');

  let favorites: number[] = JSON.parse(
    localStorage.getItem('favorites') ?? '[]'
  );

  if (favorites.includes(id)) {
    favorites = favorites.filter((pokeId) => pokeId !== id);
  } else {
    favorites.push(id);
  }

  localStorage.setItem('favorites', JSON.stringify(favorites));
};

const existInFavorites = (id: number): boolean => {
  console.log('ExistInFavorites called');
  const favorites: number[] = JSON.parse(
    localStorage.getItem('favorites') ?? '[]'
  );

  return favorites.includes(id);
};

const getPokemonsId = (): number[] => {
  console.log('GetPokemonsId called');
  return JSON.parse(localStorage.getItem('favorites') ?? '[]');
};

const favorites = {
  toggleFavorites,
  existInFavorites,
  getPokemonsId,
};

export default favorites;
