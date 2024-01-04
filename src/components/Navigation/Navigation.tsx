import { useState } from 'react';
import {
  StyledNav,
  StyledList,
  StyledListItem,
  StyledLink,
  CloseIcon,
  HamburgerIcon,
} from '.';
import useScreenSize from '../../hooks/useScreenSize/useScreenSize';

type NavigationProps = {
  // eslint-disable-next-line no-undef
  toggleButton: JSX.Element;
};

const Navigation = ({ toggleButton }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleHamburgerClick = () => {
    setIsMenuOpen(prevState => !prevState);
  };
  const { isMobile } = useScreenSize();

  return (
    <StyledNav open={isMenuOpen}>
      {isMobile && (
        <div>
          <HamburgerIcon
            onClick={handleHamburgerClick}
            aria-label="Open menu"
            role="menu"
            data-testid="mobile-menu"
          >
            {isMenuOpen ? (
              <CloseIcon aria-label="Close menu" data-testid="close-menu">
                &times;
              </CloseIcon>
            ) : (
              <>
                <span aria-hidden="true" />
                <span aria-hidden="true" />
                <span aria-hidden="true" />
              </>
            )}
          </HamburgerIcon>
          {toggleButton}
        </div>
      )}
      {/* // TODO In further make navigation routes dynamic */}
      <StyledList open={isMenuOpen}>
        <StyledListItem>
          <StyledLink to="/">Home</StyledLink>
        </StyledListItem>
      </StyledList>
      {!isMobile && toggleButton}
    </StyledNav>
  );
};

export default Navigation;
