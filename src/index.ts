import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import styled from 'styled-components';

export const StyledDarkModeIcon = styled(DarkModeIcon)`
  &.MuiSvgIcon-root {
    font-size: 1em;
    margin: 2px 0 0;
  }
`;

export const StyledLightModeIcon = styled(LightModeIcon)`
  &.MuiSvgIcon-root {
    font-size: 0.85em;
    margin: 3px 0 0 4px;
  }
`;
