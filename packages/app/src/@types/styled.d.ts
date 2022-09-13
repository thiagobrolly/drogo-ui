/* eslint-disable @typescript-eslint/no-empty-interface */
import 'styled-components';
import { DefaultThemeProps } from '@drogo-ui/styles';

declare module 'styled-components' {
  export interface DefaultTheme extends DefaultThemeProps {}
}
