import React from 'react'
import { AppRouter } from './routers/AppRouter'
import { AuthProvider } from './auth'

export const HeroesApp = () => {
  return (
    <AuthProvider>
        
        <AppRouter />

    </AuthProvider>
  )
}
