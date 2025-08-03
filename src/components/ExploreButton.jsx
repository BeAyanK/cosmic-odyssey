import styled from "styled-components";
import { theme } from "../theme";

const Circle = styled.button`
  width: 274px;
  aspect-ratio: 1;
  border-radius: 50%;
  border: none;
  background: ${theme.colors.white};
  color: ${theme.colors.blue900};
  font-family: ${theme.fonts.bellefair};
  font-size: 32px;
  letter-spacing: 2px;
  text-transform: uppercase;
  cursor: pointer;
  transition: box-shadow 0.3s;
  &:hover {
    box-shadow: 0 0 0 88px rgba(255,255,255,0.1);
  }
`;

export default function ExploreButton({ onClick }) {
  return <Circle onClick={onClick}>Explore</Circle>;
}
