// import original module declarations
import 'styled-components';

type ColorsProps = {
  COLOR_APPLICATION: string;
  LIGHT_SKY_BLUE: string;
  BUTTON_COLOR: string;
  BLACK: string;
  WHITE: string;
  gray_dark: string;
  DARK: string;
  GRAY_LIGHT: string;
  SECONDARY_LIGHT_GRAY: string;
  ERROR: string;
  CORRECT: string;
  WARNING: string;
  TEXT_COLOR: string;
  BACKGROUND: string;
};


// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    Colors: ColorsProps;
  }
}
