import React, { useMemo } from 'react'
import { HeroCard } from './HeroCard';
import { getHeroesByPublisher } from '../../helpers/getHeroesByPublisher'

export const HeroeList = ({publisher}) => {
  
    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher] ); 
  
    return (
        <div className="mb-8">
            <h1 className='text-xl mb-4 ml-2 font-semibold'>Hero list - {publisher}</h1>

            <ul className='grid place-content-center place-items-center gap-4 md:grid-cols-1 lg:grid-cols-3'>
                {
                    heroes.map(hero => <HeroCard    key={hero.id} 
                                                    { ...hero }
                                                    />)
                }
            </ul>

        </div>
    )
}
