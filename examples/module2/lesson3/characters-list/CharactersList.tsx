import { useEffect, useState } from 'react';
import { Character, DefaultApi } from './api-client-generated';

export function CharactersList() {
  const [characters, setCharacters] = useState<Array<Character>>([]);

  const api = new DefaultApi();

  useEffect(() => {
    api
      .getCharacters()
      .then((res) => {
        if (res.results) {
          setCharacters(res.results);
        } else {
          console.log('No Results');
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <ul>
      {characters.map((character, index) => {
        return (
          <li key={index} className="flex">
            <img
              style={{ width: '50px', height: '50px' }}
              src={character.image}
              alt={character.name}
            />
            <div>
              <p>Name: {character.name}</p>
              <p>Species: {character.species}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
