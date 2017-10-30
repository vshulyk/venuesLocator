const canEatHere = (venue, u) => venue.food.some(m => u.wont_eat.indexOf(m) === -1);
const canDrinkHere = (venue, u) => venue.drinks.some(d => u.drinks.indexOf(d) >= 0);

export const getVenuesInfo = (venues, users) => {
  return venues.reduce((result, venue) => {
    result[venue.name] = {
      cantEat: [],
      cantDrink: [],
    };

    users.forEach(u => {
      if (!canEatHere(venue, u)) {
        result[venue.name].cantEat.push(u.name);
      }

      if (!canDrinkHere(venue, u)) {
        result[venue.name].cantDrink.push(u.name);
      }
    });

    return result;
  }, {});
}

export const getUsersData = (users) => users.map(u => ({
  ...u,
  drinks: u.drinks.map(d => d.toLowerCase()),
  wont_eat: u.wont_eat.map(m => m.toLowerCase()),
}));

export const getVenuesData = (venues) => venues.map(v => ({
  ...v,
  drinks: v.drinks.map(d => d.toLowerCase()),
  food: v.food.map(m => m.toLowerCase()),
}));
