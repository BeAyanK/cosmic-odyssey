import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../theme";

const Nav = styled.nav`
  height: ${theme.sizes.navHeight};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  background: rgba(255,255,255,0.04);
  backdrop-filter: blur(20px);
  @media(max-width:${theme.breakpoints.tablet}){ padding:0 1rem; }
`;

const StyledLink = styled(NavLink)`
  color: ${theme.colors.white};
  font-family: ${theme.fonts.barlow};
  letter-spacing: 2.7px;
  text-decoration: none;
  text-transform: uppercase;
  padding: 2rem 0;
  border-bottom: 3px solid transparent;
  &.active { border-bottom: 3px solid ${theme.colors.white}; }
`;

export default function Navigation() {
    return (
        <Nav>
            <img src="/logo.svg" alt="cosmic odyssey" width="48" />
            <div style={{ display: "flex", gap: "2rem" }}>
                <StyledLink to="/">00 Home</StyledLink>
                <StyledLink to="/destination">01 Destination</StyledLink>
                <StyledLink to="/crew">02 Crew</StyledLink>
                <StyledLink to="/technology">03 Technology</StyledLink>
            </div>
        </Nav>
    );
}
