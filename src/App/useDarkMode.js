import React from 'react'
import toast from 'react-hot-toast'

const useDarkMode = () => {
  const [theme, setTheme] = React.useState('light')

  const setMode = (mode) => {
    localStorage.setItem('theme', mode)
    setTheme(mode)
  }

  const themeToggler = () => {
    if (theme === 'light') {
      setMode('dark')
      toast('Hello Darkness!', {
        icon: '👏',
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
          fontFamily: 'Quattrocento Sans',
        },
      })
    } else if (theme === 'dark') {
      setMode('light')
      toast('Hello Brightness!', {
        icon: '👏',
        style: {
          borderRadius: '10px',
          background: '#fff',
          color: '#333',
          fontFamily: 'Quattrocento Sans',
        },
      })
    }
  }

  React.useEffect(() => {
    const localTheme = localStorage.getItem('theme')
    localTheme && setTheme(localTheme)
  }, [])

  return [theme, themeToggler]
}

export { useDarkMode }

