import '@/shared/config/i18n/i18n'
import '@/app/styles/index.scss'
import { createRoot } from 'react-dom/client'
import { App } from '@/app/App'
import { ThemeProvider } from '@/app/providers/ThemeProvider'

const container = document.getElementById('root')

if (!container) {
    throw new Error('Not found container #root')
}

const root = createRoot(container)

root.render(
    <ThemeProvider>
        <App />
    </ThemeProvider>
)