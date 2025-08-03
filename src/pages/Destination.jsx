import { useState } from "react";
import styled from "styled-components";
import DestinationTabs from "../components/DestinationTabs";
import data from "../data/data.json";
import { theme } from "../theme";

const Wrapper = styled.main`
  min-height: 100vh;
  background: url("/destination/background.jpg") no-repeat center/cover;
  padding-top: 136px;
  color: ${theme.colors.white};
  display: flex;
  gap: 10%;
  justify-content: center;
`;

export default function Destination() {
  const [active, setActive] = useState(data.destinations[0].name);
  const planet = data.destinations.find(d => d.name === active);

  return (
    <Wrapper>
      <div>
        <img src={planet.images.png} alt={planet.name} width="445" />
      </div>
      <div style={{maxWidth: "445px"}}>
        <DestinationTabs
          list={data.destinations.map(d => d.name)}
          active={planet.name}
          onChange={setActive}
        />
        <h1 style={{fontFamily: theme.fonts.bellefair, fontSize: "100px", margin: 0}}>{planet.name}</h1>
        <p>{planet.description}</p>
        <hr style={{borderColor: theme.colors.blue300, margin: "40px 0"}}/>
        <div style={{display:"flex", gap:"4rem"}}>
          <div>
            <small style={{fontFamily: theme.fonts.barlow, fontSize: "14px", letterSpacing: "2.36px"}}>AVG. DISTANCE</small>
            <div style={{fontFamily: theme.fonts.bellefair, fontSize: "28px"}}>{planet.distance}</div>
          </div>
          <div>
            <small style={{fontFamily: theme.fonts.barlow, fontSize: "14px", letterSpacing: "2.36px"}}>EST. TRAVEL TIME</small>
            <div style={{fontFamily: theme.fonts.bellefair, fontSize: "28px"}}>{planet.travel}</div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
