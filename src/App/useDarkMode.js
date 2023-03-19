/* eslint-disable no-undef */
import React from 'react'
import toast from 'react-hot-toast'

const useDarkMode = () => {
  const [theme, setTheme] = React.useState('light')

  const setMode = (mode) => {
    localStorage.setItem('theme', mode)
    setTheme(mode)

    if (mode === 'dark') {
      toast('Hello Darkness!', {
        icon: '👏',
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff'
        }
      })
    } else if (mode === 'light') {
      toast('Hello Brightness!', {
        icon: '👏',
        style: {
          borderRadius: '10px',
          background: '#fff',
          color: '#333'
        }
      })
    }
  }

  const themeToggler = () => {
    theme === 'light' ? setMode('dark') : setMode('light')
  }

  React.useEffect(() => {
    const localTheme = localStorage.getItem('theme')
    localTheme && setTheme(localTheme)
  }, [])

  return [theme, themeToggler]
}

export { useDarkMode }
