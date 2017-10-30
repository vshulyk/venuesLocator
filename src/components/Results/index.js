import React from 'react';

import './index.css';

export default ({ data, usersNumber }) => {
  if (!data) {
    return null;
  }

  const companyName = usersNumber === 1 ? 'Fellow' : 'Guys';
  const goodPlaces = [];
  const badPlacesResult = [];

  Object.entries(data).forEach(([k, v]) => {
    if (!v.cantEat.length && !v.cantDrink.length) {
      return goodPlaces.push(k);
    }
    badPlacesResult.push((
      <li key={k}>
        <span>{k}</span>
        <ul>
          {v.cantEat.map(n => <li  key={n}>{noMeal(n)}</li>)}
          {v.cantDrink.map(n => <li  key={n}>{noDrink(n)}</li>)}
        </ul>
      </li>
    ));
  })

  return (
    <div className="results">
      <span>{companyName} can visit:</span>
      <ul>
        {goodPlaces.map(v => <li key={v}>{v}</li>)}
      </ul>

      <span>{companyName} can't visit:</span>
      <ul>
        {badPlacesResult.map(v => v)}
      </ul>
    </div>
  );
};

const noMeal = (name) => `${name} has nothing to eat`;
const noDrink = (name) => `${name} has nothing to drink`;
