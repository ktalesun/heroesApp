import React from 'react'
import { CustomNavBar } from '../heroes/components/ui/CustomNavBar'

import { DcScreen } from '../heroes/components/dc/DcScreen';
import { MarvelScreen } from '../heroes/components/marvel/MarvelScreen';
import { SearchScreen } from '../heroes/components/search/SearchScreen';
import { Route, Routes } from 'react-router-dom';
import { HeroScreen } from '../heroes/components/hero/HeroScreen';
import { PageError } from '../heroes/components/404/PageError';
import { HomePage } from '../heroes/components/home/HomePage';

export const DashboardRoutes = () => {
    
    return (
        <>
            <CustomNavBar />
            
            <div className='container mx-auto mt-8 w-full'>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="marvel" element={<MarvelScreen />} />
                    <Route path="dc" element={<DcScreen />} />
                    <Route path="search" element={<SearchScreen />} />
                    <Route path="hero/:heroId" element={<HeroScreen />} />
                    <Route path="error404" element={<PageError />} />
                </Routes>
            </div>
        </>
    )

}
