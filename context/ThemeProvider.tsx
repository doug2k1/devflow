'use client'

import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react'

type ThemeMode = 'light' | 'dark'

const defaultMode: ThemeMode =
  window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'

const ThemeContext = createContext<{
  mode: ThemeMode
  setMode: (mode: ThemeMode) => void
}>({
  mode: defaultMode,
  setMode: () => {},
})

export function ThemeProvider({ children }: PropsWithChildren) {
  const [mode, setMode] = useState(defaultMode)

  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark')
    document.documentElement.classList.add(mode)
  }, [mode])

  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }

  return context
}
