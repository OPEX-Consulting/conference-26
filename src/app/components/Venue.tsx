"use client";

import { useRef } from "react";
import styled from "styled-components";

export default function Venue() {
  const mapRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const map = mapRef.current;

    if (!map) return;

    const rect = map.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 3;

    const rotateX = ((y - rect.height / 2) / (rect.height / 2)) * -3;

    map.style.transform = `
      perspective(1400px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.01)
    `;
  };

  const handleMouseLeave = () => {
    if (!mapRef.current) return;

    mapRef.current.style.transform = `
      perspective(1400px)
      rotateX(0deg)
      rotateY(0deg)
      scale(1)
    `;
  };

  return (
    <Section id="venue">
      <Container>
        <Header>
          <Left>
            <Eyebrow>THE VENUE</Eyebrow>

            <Heading>
              Meet at
              <br />
              <Accent>The Wheatbaker.</Accent>
            </Heading>
          </Left>

          <Right>
            <Description>
              A private setting in the heart of Ikoyi, Lagos, designed for
              focused conversations between senior executives.
            </Description>
          </Right>
        </Header>

        <VenueLayout>
          <VenueInfo>
            <VenueNumber>01</VenueNumber>

            <VenueTitle>The Wheatbaker</VenueTitle>

            <VenueLocation>
              4 Onitolo Road
              <br />
              Ikoyi, Lagos, Nigeria
            </VenueLocation>

            <VenueMeta>
              <MetaItem>
                <MetaLabel>DATE</MetaLabel>

                <MetaValue>Wednesday, 21 October 2026</MetaValue>
              </MetaItem>

              <MetaItem>
                <MetaLabel>ACCESS</MetaLabel>

                <MetaValue>Parking available on site</MetaValue>
              </MetaItem>
            </VenueMeta>

            <Directions
              href="https://www.google.com/maps/search/?api=1&query=The+Wheatbaker+Ikoyi+Lagos"
              target="_blank"
              rel="noreferrer"
            >
              Open in Maps
              <Arrow>↗</Arrow>
            </Directions>
          </VenueInfo>

          <MapWrapper>
            <Map
              ref={mapRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <MapSurface>
                <Road road="roadOne" />
                <Road road="roadTwo" />
                <Road road="roadThree" />
                <Road road="roadFour" />
                <Road road="roadFive" />

                <Block block="blockOne" />
                <Block block="blockTwo" />
                <Block block="blockThree" />
                <Block block="blockFour" />
                <Block block="blockFive" />
                <Block block="blockSix" />

                <Water />

                <LocationPulse />

                <LocationPin>
                  <PinShadow />

                  <Pin>
                    <PinDot />
                  </Pin>

                  <PinLabel>
                    <PinLabelSmall>YOU ARE HERE</PinLabelSmall>

                    <PinLabelTitle>The Wheatbaker</PinLabelTitle>
                  </PinLabel>
                </LocationPin>

                <MapLabel className="ikoyi">IKOYI</MapLabel>

                <MapLabel className="lagos">LAGOS</MapLabel>

                <MapScale>
                  <ScaleLine />
                  <ScaleText>500 M</ScaleText>
                </MapScale>
              </MapSurface>

              <MapOverlay />
            </Map>
          </MapWrapper>
        </VenueLayout>
      </Container>
    </Section>
  );
}

const Section = styled.section`
  width: 100%;
  background: #f1eee7;
  padding: 125px 0 125px;
  overflow: hidden;

  @media (max-width: 700px) {
    padding: 90px 0;
  }
`;

const Container = styled.div`
  width: min(1200px, 90vw);
  margin: 0 auto;
`;

const Header = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 100px;
  align-items: end;
  margin-bottom: 75px;

  @media (max-width: 850px) {
    grid-template-columns: 1fr;
    gap: 30px;
    margin-bottom: 55px;
  }
`;

const Left = styled.div``;

const Eyebrow = styled.span`
  display: block;
  margin-bottom: 22px;

  color: #b8954a;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
`;

const Heading = styled.h2`
  margin: 0;

  color: #111111;
  font-size: clamp(54px, 6vw, 84px);
  font-weight: 600;
  line-height: 0.9;
  letter-spacing: -0.075em;

  @media (max-width: 700px) {
    font-size: clamp(48px, 13vw, 70px);
  }
`;

const Accent = styled.span`
  color: #b8954a;
`;

const Right = styled.div`
  padding-bottom: 6px;
`;

const Description = styled.p`
  max-width: 480px;

  color: #5f5c56;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.65;
  letter-spacing: -0.018em;

  @media (max-width: 700px) {
    font-size: 15px;
    line-height: 1.6;
  }
`;

const VenueLayout = styled.div`
  display: grid;
  grid-template-columns: 0.7fr 1.3fr;
  gap: 35px;
  align-items: stretch;

  @media (max-width: 850px) {
    grid-template-columns: 1fr;
    gap: 25px;
  }
`;

const VenueInfo = styled.div`
  position: relative;

  min-height: 500px;

  display: flex;
  flex-direction: column;

  padding: 44px;

  border-radius: 24px;

  background: #ffffff;

  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.06), 0 2px 10px rgba(0, 0, 0, 0.025);

  transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.5s ease;

  &:hover {
    transform: translateY(-5px);

    box-shadow: 0 35px 90px rgba(0, 0, 0, 0.09), 0 5px 15px rgba(0, 0, 0, 0.035);
  }

  @media (max-width: 850px) {
    min-height: auto;
  }

  @media (max-width: 600px) {
    padding: 30px;
    border-radius: 20px;
  }
`;

const VenueNumber = styled.span`
  color: #b8954a;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.14em;
`;

const VenueTitle = styled.h3`
  margin-top: 65px;

  color: #111111;
  font-size: clamp(38px, 3.6vw, 54px);
  font-weight: 600;
  line-height: 0.95;
  letter-spacing: -0.065em;

  @media (max-width: 850px) {
    margin-top: 45px;
  }

  @media (max-width: 600px) {
    font-size: 38px;
  }
`;

const VenueLocation = styled.p`
  margin-top: 22px;

  color: #66635d;
  font-size: 15px;
  font-weight: 500;
  line-height: 1.65;
  letter-spacing: -0.01em;
`;

const VenueMeta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  margin-top: auto;
  padding-top: 60px;

  @media (max-width: 850px) {
    margin-top: 45px;
    padding-top: 0;
  }
`;

const MetaItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

const MetaLabel = styled.span`
  color: #b8954a;
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.16em;
`;

const MetaValue = styled.span`
  color: #292929;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.4;
`;

const Directions = styled.a`
  width: fit-content;

  display: inline-flex;
  align-items: center;
  gap: 14px;

  margin-top: 34px;
  padding: 14px 20px;

  border-radius: 999px;

  background: #111111;
  color: #ffffff;

  font-size: 12px;
  font-weight: 600;

  transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.35s ease, background 0.3s ease;

  &:hover {
    transform: translateY(-3px);

    background: #222222;

    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.14);
  }
`;

const Arrow = styled.span`
  font-size: 16px;

  transition: transform 0.3s ease;

  ${Directions}:hover & {
    transform: translate(2px, -2px);
  }
`;

const MapWrapper = styled.div`
  min-width: 0;
`;

const Map = styled.div`
  position: relative;

  height: 500px;

  overflow: hidden;

  border-radius: 28px;

  background: #dedbd2;

  box-shadow: 0 30px 70px rgba(0, 0, 0, 0.1), 0 5px 15px rgba(0, 0, 0, 0.04);

  transform: perspective(1400px) rotateX(0deg) rotateY(0deg);

  transition: transform 0.7s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.5s ease;

  cursor: pointer;

  &:hover {
    box-shadow: 0 40px 90px rgba(0, 0, 0, 0.14), 0 8px 20px rgba(0, 0, 0, 0.05);
  }

  @media (max-width: 850px) {
    height: 430px;
  }

  @media (max-width: 600px) {
    height: 350px;
    border-radius: 22px;
  }
`;

const MapSurface = styled.div`
  position: absolute;
  inset: -15%;

  background: linear-gradient(
      35deg,
      transparent 0 45%,
      rgba(255, 255, 255, 0.5) 45.2% 46%,
      transparent 46.2%
    ),
    linear-gradient(
      125deg,
      transparent 0 38%,
      rgba(255, 255, 255, 0.5) 38.2% 39%,
      transparent 39.2%
    ),
    #dfddd6;

  transform: rotate(-7deg) scale(1.1);
`;

const MapOverlay = styled.div`
  position: absolute;
  inset: 0;

  pointer-events: none;

  background: radial-gradient(
      circle at 50% 50%,
      transparent 25%,
      rgba(0, 0, 0, 0.06) 100%
    ),
    linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.12),
      transparent 40%,
      rgba(0, 0, 0, 0.08)
    );
`;

const Road = styled.div<{ road: string }>`
  position: absolute;

  height: ${({ road }) => (road === "roadOne" ? "18px" : "11px")};

  background: rgba(255, 255, 255, 0.82);

  border-radius: 999px;

  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);

  ${({ road }) => {
    switch (road) {
      case "roadOne":
        return `
          width: 125%;
          top: 42%;
          left: -10%;
          transform: rotate(-22deg);
        `;

      case "roadTwo":
        return `
          width: 110%;
          top: 66%;
          left: -5%;
          transform: rotate(18deg);
        `;

      case "roadThree":
        return `
          width: 85%;
          top: 28%;
          left: 35%;
          transform: rotate(74deg);
        `;

      case "roadFour":
        return `
          width: 80%;
          top: 55%;
          left: -5%;
          transform: rotate(-65deg);
        `;

      default:
        return `
          width: 70%;
          top: 75%;
          left: 45%;
          transform: rotate(-12deg);
        `;
    }
  }}
`;

const Block = styled.div<{ block: string }>`
  position: absolute;

  background: rgba(201, 198, 189, 0.72);

  border-radius: 8px;

  ${({ block }) => {
    switch (block) {
      case "blockOne":
        return `
          width: 130px;
          height: 95px;
          top: 18%;
          left: 13%;
          transform: rotate(-8deg);
        `;

      case "blockTwo":
        return `
          width: 100px;
          height: 130px;
          top: 47%;
          left: 18%;
          transform: rotate(8deg);
        `;

      case "blockThree":
        return `
          width: 150px;
          height: 100px;
          top: 16%;
          right: 10%;
          transform: rotate(10deg);
        `;

      case "blockFour":
        return `
          width: 120px;
          height: 90px;
          bottom: 10%;
          right: 18%;
          transform: rotate(-12deg);
        `;

      case "blockFive":
        return `
          width: 90px;
          height: 120px;
          bottom: 20%;
          left: 8%;
          transform: rotate(-4deg);
        `;

      default:
        return `
          width: 120px;
          height: 75px;
          bottom: 5%;
          left: 43%;
          transform: rotate(6deg);
        `;
    }
  }}
`;

const Water = styled.div`
  position: absolute;

  width: 260px;
  height: 180px;

  right: -35px;
  top: -20px;

  border-radius: 45% 0 50% 55%;

  background: #d1dcda;

  transform: rotate(-18deg);

  opacity: 0.75;
`;

const LocationPulse = styled.div`
  position: absolute;

  width: 110px;
  height: 110px;

  left: 51%;
  top: 48%;

  transform: translate(-50%, -50%);

  border-radius: 50%;

  background: rgba(184, 149, 74, 0.13);

  animation: pulse 2.5s ease-out infinite;

  @keyframes pulse {
    0% {
      transform: translate(-50%, -50%) scale(0.5);
      opacity: 0.8;
    }

    70% {
      transform: translate(-50%, -50%) scale(1.25);
      opacity: 0;
    }

    100% {
      transform: translate(-50%, -50%) scale(1.25);
      opacity: 0;
    }
  }
`;

const LocationPin = styled.div`
  position: absolute;

  left: 51%;
  top: 48%;

  display: flex;
  flex-direction: column;
  align-items: center;

  transform: translate(-50%, -50%);
`;

const PinShadow = styled.div`
  position: absolute;

  width: 38px;
  height: 11px;

  bottom: -4px;

  border-radius: 50%;

  background: rgba(0, 0, 0, 0.2);

  filter: blur(5px);
`;

const Pin = styled.div`
  position: relative;

  width: 36px;
  height: 36px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50% 50% 50% 0;

  background: #111111;

  transform: rotate(-45deg);

  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
`;

const PinDot = styled.div`
  width: 10px;
  height: 10px;

  border-radius: 50%;

  background: #d0ad65;
`;

const PinLabel = styled.div`
  position: absolute;

  top: -82px;
  left: 34px;

  width: 165px;

  padding: 14px 16px;

  border: 1px solid rgba(255, 255, 255, 0.8);
  border-radius: 14px;

  background: rgba(255, 255, 255, 0.9);

  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);

  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
`;

const PinLabelSmall = styled.span`
  display: block;

  margin-bottom: 6px;

  color: #b8954a;

  font-size: 8px;
  font-weight: 700;
  letter-spacing: 0.14em;
`;

const PinLabelTitle = styled.span`
  display: block;

  color: #111111;

  font-size: 13px;
  font-weight: 600;
`;

const MapLabel = styled.span`
  position: absolute;

  color: rgba(50, 50, 50, 0.4);

  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.18em;

  &.ikoyi {
    left: 24%;
    top: 32%;
  }

  &.lagos {
    right: 18%;
    bottom: 27%;
    transform: rotate(-8deg);
  }
`;

const MapScale = styled.div`
  position: absolute;

  left: 30px;
  bottom: 28px;

  display: flex;
  align-items: center;
  gap: 8px;
`;

const ScaleLine = styled.div`
  width: 40px;
  height: 1px;

  background: rgba(0, 0, 0, 0.4);
`;

const ScaleText = styled.span`
  color: rgba(0, 0, 0, 0.45);

  font-size: 8px;
  font-weight: 700;
  letter-spacing: 0.12em;
`;
