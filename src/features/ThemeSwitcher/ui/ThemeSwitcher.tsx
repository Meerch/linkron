import { memo } from 'react'
import cls from './ThemeSwitcher.module.scss'
import clsx from 'clsx'
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme'

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { toggleTheme, theme } = useTheme()

    return (
        <button
            onClick={toggleTheme}
            className={clsx(cls.ThemeSwitcher, {}, [className])}
        />
    )
})