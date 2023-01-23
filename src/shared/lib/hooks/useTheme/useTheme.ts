import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import { DEFAULT_THEME, Theme } from '@/shared/const/theme'
import { LOCAL_STORAGE_THEME_KEY } from '@/shared/const/localstorage'

const mapThemes = {
    [Theme.DARK]: Theme.LIGHT,
    [Theme.LIGHT]: Theme.DARK
}

export const useTheme = () => {
    const { theme, setTheme } = useContext(ThemeContext)

    const toggleTheme = () => {
        const newTheme = theme ? mapThemes[theme] : Theme.LIGHT
        setTheme?.(newTheme)
        document.body.className = newTheme
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    }

    return {
        theme: theme ?? DEFAULT_THEME,
        toggleTheme
    }
}