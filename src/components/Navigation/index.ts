import { Link } from "react-router-dom";
import styled from "styled-components";

type StyledComponentProps = {
  open?: boolean;
};

export const StyledNav = styled.nav<StyledComponentProps>`
  padding: 1rem 1rem 0 1rem;
  display: flex;
  justify-content: space-between;
  border-bottom: ${(props) =>
    props.open ? "none" : `1px solid ${props.theme.borders.color}`};
  box-shadow: ${(props) =>
    props.open ? "none" : " 0px 6px 6px -6px rgba(0, 0, 0, 0.5)"};

  .mobile-only {
    display: none;
  }

  .empty {
    flex-grow: 1;
  }

  @media (max-width: 768px) {
    display: block;
    .mobile-only {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
`;

export const StyledList = styled.ul<StyledComponentProps>`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    display: ${(props) => (props.open ? "flex" : "none")};
    flex-direction: column;
    width: 100%;
  }
`;

export const StyledListItem = styled.li`
  margin-right: 1rem;
  &:last-child {
    margin-right: 0;
  }

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 0.5rem;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  &:hover {
    color: #007bff;
  }
`;
export const HamburgerIcon = styled.div`
  width: 30px;
  height: 25px;
  display: none;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;

  span {
    display: block;
    height: 3px;
    background-color: ${(props) => props.theme.colors.text};
  }

  @media (max-width: 768px) {
    display: flex;
    padding: 1rem;
  }
`;
export const CloseIcon = styled.div`
  font-size: 3rem;
  line-height: 1.2rem;
  color: ${(props) => props.theme.colors.text};
  cursor: pointer;
`;
