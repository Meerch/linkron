import { useTranslation } from 'react-i18next'
import clsx from 'clsx'

interface MainPageProps {
    className?: string
}

const MainPage = ({ className }: MainPageProps) => {
    const { t } = useTranslation()

    return (
        <div className={clsx(className)}>

        </div>
    )
}

export default MainPage