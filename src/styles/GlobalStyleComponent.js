import { createGlobalStyle } from '@nfront/global-styles';
import globalStyle from './style.scss';

/* Doesn't seem to work. This creates an empty markup, like the following:

  <style id="GlobalStyle1709833222">
  
  </style>

  To verify, open the inspector, expand the head node and see.

  And the style is still applied in the old order
*/
const GlobalStyleComponent = createGlobalStyle`
  ${globalStyle}
`;

export default GlobalStyleComponent;
