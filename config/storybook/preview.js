import { Theme } from '../../src/shared/const/theme'
import { addDecorator } from '@storybook/react'
import { StyleDecorator } from '../../src/shared/config/storybook/decorators/StyleDecorator'
import { RouterDecorator } from '../../src/shared/config/storybook/decorators/RouterDecorator'
import { SuspenseDecorator } from '../../src/shared/config/storybook/decorators/SuspenseDecorator'

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/
        }
    },
    layout: 'fullscreen',
    themes: {
        default: 'light',
        list: [
            { name: 'light', class: Theme.LIGHT, color: '#ffffff' },
            { name: 'dark', class: Theme.DARK, color: '#000000' }
        ]
    }
}

addDecorator(StyleDecorator)
addDecorator(RouterDecorator)
addDecorator(SuspenseDecorator)