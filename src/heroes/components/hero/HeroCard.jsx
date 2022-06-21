import React from 'react'
import {Card} from 'flowbite-react'
import { Link } from 'react-router-dom'

export const HeroCard = ({id, superhero, publisher, alter_ego, first_appearance, characters,}) => {

    const heroImgUrl = `/assets/${id}.jpg`

    return (
        <div className="">
            <Card imgSrc={heroImgUrl}>
                <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{superhero}</h3>
                <h5 className="font-semibold text-gray-700 dark:text-gray-400">{alter_ego}</h5>
                <p className="italic text-gray-700 dark:text-gray-400">{publisher}</p>
                <p className="font-normal text-gray-700 dark:text-gray-400">{first_appearance}</p>
                <p className="font-normal text-gray-700 dark:text-gray-400">{characters}</p>
                <Link to={`/hero/${id}`} className='text-base text-blue-400 cursor-pointer'>Ver más...</Link>
            </Card>
      </div>
    )
}
