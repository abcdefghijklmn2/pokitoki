/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useContext, useMemo } from 'react'

export interface ContextBuildHelperParams {
  id: string
}

export const contextBuildHelper = ({ id }: ContextBuildHelperParams) => {
  const Context = createContext(null)

  const HelperProvider = ({ children, ...contextValue }: any) => {
    const [contextJsonKey, contextJsonValue] = [Object.keys(contextValue), Object.values(contextValue)]
    const value = useMemo(() => {
      return contextJsonKey.length > 0 ? contextValue : null
    }, [...contextJsonValue])

    return <Context.Provider value={value}>{children}</Context.Provider>
  }

  const useHelperContext = () => {
    const context = useContext(Context)

    if (!context) throw new Error(`${id} context must be provided in provider`)

    return Context
  }

  return [HelperProvider, useHelperContext]
}
