import React from 'react'
import { getHeroesByPublisher } from '../helpers/getHeroesByPublisher'

export const HeroeList = ({publisher}) => {
  
    const heroes = getHeroesByPublisher(publisher);
  
    return (
        <div>
            <h1>Hero list - {publisher}</h1>

            <ul>
                {
                    heroes.map(hero => <li key={hero.id}>{hero.superhero}</li>)
                }
            </ul>

        </div>
    )
}
