import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import ThemeProviderMaterial from '@material-ui/styles/ThemeProvider';

function ThemeProvider(props) {
  const { children } = props;
  const theme = createMuiTheme({
    palette: {
      primary: { main: '#1A76D3' },
    },
  });

  return <ThemeProviderMaterial theme={theme}> {children} </ThemeProviderMaterial>;
}
export default ThemeProvider;
