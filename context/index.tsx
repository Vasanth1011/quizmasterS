"use client"
import { ContextType } from '@/types';
import { SetStateAction, useEffect, useState } from 'react';
import { createContext,useContext } from 'react'
export const AppContext = createContext<ContextProps | null>({} as ContextProps);





export type ContextProps = {
    contextData: ContextType;
    setContextData:React.Dispatch<SetStateAction<ContextType>>

}


export function AppWrapper({ children }: {
    children: React.ReactNode;
}) {
    const [contextData, setContextData] = useState<ContextType>({} as ContextType)

    // useEffect(() => {
    //     console.log(contextData)
    // }, [contextData])
    
    return (
        <AppContext.Provider value={{contextData, setContextData}} >
            {children}
      </AppContext.Provider>
    )
}

export function useAppContext() {
    return useContext(AppContext)
}