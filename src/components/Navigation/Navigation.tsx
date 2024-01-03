import { useState } from 'react';
import { StyledNav, StyledList, StyledListItem, StyledLink } from '.';

type NavigationProps = {
  // eslint-disable-next-line no-undef
  toggleButton: JSX.Element;
};

const Navigation = ({ toggleButton }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleHamburgerClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <StyledNav open={isMenuOpen}>
      {toggleButton}
      {/* TODO: do real Hamburger */}
      <button onClick={handleHamburgerClick} type="button">
        hamburger
      </button>
      {/* TODO: Dynamic navigation */}
      <StyledList>
        <StyledListItem>
          <StyledLink to="/">Home</StyledLink>
        </StyledListItem>
      </StyledList>
    </StyledNav>
  );
};

export default Navigation;
