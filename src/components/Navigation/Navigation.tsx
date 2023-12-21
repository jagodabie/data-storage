import { useState } from "react";
import { StyledListItem, StyledNav } from ".";

type NavigationProps = {
  toggleButton?: JSX.Element;
};

const Navigation = ({ toggleButton }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleHamburgerClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <StyledNav open={isMenuOpen}>
      {toggleButton}
      <StyledListItem></StyledListItem>
    </StyledNav>
  );
};

export default Navigation;
