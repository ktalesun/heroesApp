import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from '../../../hooks/useForm'
import queryString from 'query-string'
import { HeroCard } from '../hero/HeroCard'
import { getHeroesByName } from '../../helpers/getHeroesByName';

export const SearchScreen = () => {

  const navigate = useNavigate();
  const {search} = useLocation();
  
  const {q = ''} = queryString.parse(search);
  
  const heroes = getHeroesByName(q);
  
  const {searchText, onInputChange} = useForm({
    searchText: q
  });

  const showSearch = (q.length ==0 );
  const showError = (q.length > 0) && (heroes.length == 0);


  const onSearchSubmit = (e) => {
    e.preventDefault()
    // if(searchText.trim().length <= 1) return;
    
    navigate(`?q=${searchText}`);
  }

  return (
    <article className='flex flex-col gap-4 p-4 lg:flex-row'>
      <section className='grow'>
        <h2 className='font-bold text-lg mb-4'>Búsqueda</h2>
        <form onSubmit={onSearchSubmit}>
          <input  type="text"
                  name="searchText"
                  placeholder="Busca un heroe..."
                  className="w-full lg:w-9/12 rounded-md"
                  value={searchText}
                  onChange={onInputChange}
            />
            <button className="block my-4 p-3 w-20 bg-blue-600 text-white rounded-md">Buscar</button>
        </form>
      </section>
      
      <section className='grow'>
        <h2 className='font-bold text-lg mb-4'>Resultados</h2>
        
        <div className='bg-blue-300 text-blue-600 p-4 rounded-md font-semibold mb-4' style={{display: showSearch ? '': 'none'}}>Búscando un heroe</div>
        <div className='bg-red-300 text-red-600 p-4 rounded-md font-semibold mb-4' style={{display: showError ? '' : 'none'}}>No se encontró un heroe</div>

        <div className='w-full grid grid-cols-1 gap-2 max-w-sm lg:grid-cols-2 lg:place-content-center lg:max-w-lg lg:mx-auto'> 
          {
            heroes.map(hero => <HeroCard key={hero.id} {...hero} />)
          }
        </div>
      

      </section>

    </article>
  )
}
