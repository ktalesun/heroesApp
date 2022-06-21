import React from 'react'
import { HeroeList } from '../hero/HeroeList'

export const HomePage = () => {
  
    return (
    <div>
			<HeroeList publisher="Marvel Comics" />	
			<HeroeList publisher="DC Comics" />	
	</div>
  )
}
