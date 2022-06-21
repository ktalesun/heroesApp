import React from 'react'
import { useMemo } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { getHeroesById } from '../../helpers/getHeroeById';

export const HeroScreen = () => {

    const  {heroId, ...rest}  = useParams();
    const navigate = useNavigate();

    const hero = useMemo(() => getHeroesById(heroId) , [heroId]) 
   

    if(!hero){
      return <Navigate to="/error404" />
    }


    return (
      <article className='p-4 flex flex-col md:flex-row gap-4'>
        <section className='max-w-sm shadow-md'>
          <img  src={`/assets/${hero.id}.jpg`} 
              alt={hero.superhero}
              className="rounded-md" />  
        </section>
        <section className='grow'>
          <h3 className='font-bold text-3xl'>{hero.superhero}</h3>
          <h4 className='font-medium text-xl'>{hero.alter_ego}</h4>
          <hr className='mt-4 mb-4 -w-full'/>
          <p className='font-normal text-lg mb-4 '>{hero.first_appearance}</p>
          <p className='font-normal text-lg mb-4 '>{hero.publisher}</p>
          <p className='font-normal text-lg mb-4 '>{hero.characters}</p>
          <button className='mt-4 font-bold text-white bg-[#64DBFB] p-4 rounded-md hover:bg-blue-600 transition-colors duration-500'
                  onClick={() => {
                    navigate(-1);
                  }}
          >Regresar</button>
        </section>

      </article>
    )
}
