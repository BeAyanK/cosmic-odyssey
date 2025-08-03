import styled from "styled-components";
import { theme } from "../theme";

const Tab = styled.button`
  background: none;
  border: none;
  color: ${({active}) => active ? theme.colors.white : theme.colors.blue300};
  font-family: ${theme.fonts.barlow};
  font-size: 16px;
  letter-spacing: 2.36px;
  text-transform: uppercase;
  margin-right: 2rem;
  padding-bottom: 12px;
  border-bottom: ${({active}) => active && `3px solid ${theme.colors.white}`};
  cursor: pointer;
`;

export default function DestinationTabs({ list, active, onChange }) {
  return list.map(name =>
    <Tab key={name} active={name === active} onClick={() => onChange(name)}>
      {name}
    </Tab>
  );
}
