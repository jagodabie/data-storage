import { useState } from "react";
import { StyledListItem, StyledNav } from ".";

type NavigationProps = {
  // eslint-disable-next-line no-undef
  toggleButton: JSX.Element;
};

function Navigation({ toggleButton }: NavigationProps) {
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
      <StyledListItem />
    </StyledNav>
  );
}

export default Navigation;
