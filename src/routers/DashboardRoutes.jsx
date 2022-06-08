import React from 'react'
import { CustomNavBar } from '../components/ui/CustomNavBar'

import { DcScreen } from '../components/dc/DcScreen';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { SearchScreen } from '../components/search/SearchScreen';
import { Route, Routes } from 'react-router-dom';
import { HeroScreen } from '../components/hero/HeroScreen';

export const DashboardRoutes = () => {
    
    return (
        <>
            <CustomNavBar />
            
            <div className='container mx-auto mt-8'>
                <Routes>
                    <Route path="/" element={<MarvelScreen />} />
                    <Route path="marvel" element={<MarvelScreen />} />
                    <Route path="dc" element={<DcScreen />} />
                    <Route path="search" element={<SearchScreen />} />
                    <Route path="hero" element={<HeroScreen />} />
                </Routes>
            </div>
        </>
    )

}
