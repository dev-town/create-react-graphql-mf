import 'styled-components';
import { Theme } from '../../.storybook/theme'

declare module 'styled-components' {
    export interface DefaultTheme extends Theme {}
}
