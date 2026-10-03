"use client";

import { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";

const reveal = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px) scale(0.98);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

const glow = keyframes`
  0% {
    transform: translate3d(0, 0, 0) scale(1);
  }

  50% {
    transform: translate3d(-18px, 15px, 0) scale(1.06);
  }

  100% {
    transform: translate3d(0, 0, 0) scale(1);
  }
`;

const shimmer = keyframes`
  0% {
    transform: translateX(-130%) rotate(18deg);
  }

  100% {
    transform: translateX(160%) rotate(18deg);
  }
`;

export default function Sessions() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.12,
      }
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <Section ref={sectionRef} id="sessions" $visible={visible}>
      <Container>
        <Header>
          <HeaderLeft>
            <Eyebrow>THE PROGRAMME</Eyebrow>

            <Heading>
              Two sessions.
              <br />
              <span>One conversation.</span>
            </Heading>
          </HeaderLeft>

          <HeaderRight>
            <Number>02</Number>

            <HeaderText>
              Two focused executive conversations exploring how reporting and
              compliance change when manual processes become connected and
              intelligent.
            </HeaderText>
          </HeaderRight>
        </Header>

        <Bento>
          <SessionCard $theme="gold" $delay="0.1s">
            <CardGlow />

            <CardTop>
              <CardNumber>01</CardNumber>

              <CardLabel>MORNING</CardLabel>

              <CardTime>08:30 — 11:00</CardTime>
            </CardTop>

            <CardContent>
              <SmallHeading>FINANCE</SmallHeading>

              <CardTitle>
                Finance
                <br />
                Executive
                <br />
                Workshop
              </CardTitle>

              <CardDescription>
                A closed-door working session for finance leaders examining
                manual reporting, disconnected systems and the practical role of
                AI.
              </CardDescription>
            </CardContent>

            <CardBottom>
              <Audience>
                <MetaLabel>WHO IT IS FOR</MetaLabel>

                <MetaText>Group CFOs, CFOs & senior finance leaders</MetaText>
              </Audience>

              <CircleArrow>↗</CircleArrow>
            </CardBottom>
          </SessionCard>

          <SessionCard $theme="navy" $delay="0.25s">
            <CardGlow />

            <CardTop>
              <CardNumber>02</CardNumber>

              <CardLabel>AFTERNOON</CardLabel>

              <CardTime>12:00 — 16:00</CardTime>
            </CardTop>

            <CardContent>
              <SmallHeading>EXECUTIVE</SmallHeading>

              <CardTitle>
                C-Level
                <br />
                Summit
              </CardTitle>

              <CardDescription>
                A broader executive conversation on connected systems,
                governance, risk and the future of financial reporting and
                compliance.
              </CardDescription>
            </CardContent>

            <CardBottom>
              <Audience>
                <MetaLabel>WHO IT IS FOR</MetaLabel>

                <MetaText>CIOs, CTOs, CCOs, CROs & senior executives</MetaText>
              </Audience>

              <CircleArrow>↗</CircleArrow>
            </CardBottom>
          </SessionCard>

          <InfoCard $type="breakfast" $delay="0.4s">
            <InfoTop>
              <InfoNumber>03</InfoNumber>

              <InfoIcon>☼</InfoIcon>
            </InfoTop>

            <InfoContent>
              <InfoLabel>NETWORKING</InfoLabel>

              <InfoTitle>Breakfast</InfoTitle>

              <InfoTime>11:30 — 12:00</InfoTime>
            </InfoContent>
          </InfoCard>

          <InfoCard $type="lunch" $delay="0.55s">
            <InfoTop>
              <InfoNumber>04</InfoNumber>

              <InfoIcon>◌</InfoIcon>
            </InfoTop>

            <InfoContent>
              <InfoLabel>MIDDAY</InfoLabel>

              <InfoTitle>Lunch</InfoTitle>

              <InfoTime>14:00 — 14:30</InfoTime>
            </InfoContent>
          </InfoCard>

          <InfoCard $type="both" $delay="0.7s">
            <InfoTop>
              <InfoNumber>05</InfoNumber>

              <MiniArrow>↗</MiniArrow>
            </InfoTop>

            <BothContent>
              <InfoLabel>ONE DAY · TWO ROOMS</InfoLabel>

              <BothTitle>
                Join
                <br />
                both.
              </BothTitle>

              <BothText>
                Morning workshop delegates may register for both sessions.
              </BothText>
            </BothContent>
          </InfoCard>

          <QuoteCard $delay="0.85s">
            <QuoteMark>“</QuoteMark>

            <QuoteText>
              What changes when reporting becomes connected, intelligent and
              continuous?
            </QuoteText>

            <QuoteBottom>
              <QuoteLine />

              <QuoteLabel>THE QUESTION</QuoteLabel>
            </QuoteBottom>
          </QuoteCard>
        </Bento>

        <BottomNote>
          <BottomLine />

          <BottomContent>
            <BottomNumber>01 / 02</BottomNumber>

            <BottomText>
              Morning workshop places are by invitation. Afternoon nominations
              are subject to seat availability.
            </BottomText>

            <BottomArrow>↓</BottomArrow>
          </BottomContent>
        </BottomNote>
      </Container>
    </Section>
  );
}

const Section = styled.section<{
  $visible: boolean;
}>`
  width: 100%;
  padding: 110px 7vw 120px;
  background: #ffffff;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 80px 24px 90px;
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
`;

const Header = styled.div`
  display: grid;
  grid-template-columns: 1.25fr 0.75fr;
  gap: 70px;
  align-items: end;
  margin-bottom: 60px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 30px;
    margin-bottom: 45px;
  }
`;

const HeaderLeft = styled.div`
  min-width: 0;
`;

const Eyebrow = styled.span`
  display: block;
  margin-bottom: 20px;
  color: #8a8a8f;
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
`;

const Heading = styled.h2`
  margin: 0;
  color: #111111;
  font-size: clamp(54px, 6.5vw, 92px);
  font-weight: 600;
  line-height: 0.88;
  letter-spacing: -0.075em;

  span {
    color: #a8a8ad;
  }

  @media (max-width: 600px) {
    font-size: clamp(46px, 13vw, 70px);
    line-height: 0.92;
  }
`;

const HeaderRight = styled.div`
  max-width: 330px;
  margin-left: auto;

  @media (max-width: 900px) {
    margin-left: 0;
  }
`;

const Number = styled.span`
  display: block;
  margin-bottom: 16px;
  color: #b8954a;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.12em;
`;

const HeaderText = styled.p`
  margin: 0;
  color: #68686d;
  font-size: 12px;
  font-weight: 450;
  line-height: 1.7;
  letter-spacing: -0.015em;
`;

const Bento = styled.div`
  display: grid;

  grid-template-columns:
    1.2fr
    0.8fr
    0.65fr;

  grid-template-rows:
    270px
    180px
    180px;

  gap: 12px;

  grid-template-areas:
    "morning afternoon breakfast"
    "morning afternoon lunch"
    "morning both quote";

  @media (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;

    grid-template-rows:
      380px
      190px
      190px;

    grid-template-areas:
      "morning afternoon"
      "morning breakfast"
      "morning lunch";
  }

  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

const SessionCard = styled.article<{
  $theme: "gold" | "navy";
  $delay: string;
}>`
  position: relative;

  grid-area: ${({ $theme }) => ($theme === "gold" ? "morning" : "afternoon")};

  min-width: 0;
  min-height: 0;

  padding: 26px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  overflow: hidden;

  border-radius: 28px;

  color: ${({ $theme }) => ($theme === "gold" ? "#111111" : "#ffffff")};

  background: ${({ $theme }) =>
    $theme === "gold"
      ? `
        radial-gradient(
          circle at 90% 8%,
          rgba(255,255,255,0.4),
          transparent 28%
        ),
        linear-gradient(
          145deg,
          #c9a45b 0%,
          #b8954a 50%,
          #9f7b3c 100%
        )
      `
      : `
        radial-gradient(
          circle at 90% 8%,
          rgba(255,255,255,0.15),
          transparent 28%
        ),
        linear-gradient(
          145deg,
          #293957 0%,
          #18243a 55%,
          #0d1628 100%
        )
      `};

  box-shadow: 0 18px 45px rgba(0, 0, 0, 0.08);

  animation: ${reveal} 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards;

  animation-delay: ${({ $delay }) => $delay};

  transform-style: preserve-3d;

  transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.6s ease;

  &::after {
    content: "";

    position: absolute;

    top: -30%;
    left: -80%;

    width: 45%;
    height: 170%;

    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.12),
      transparent
    );

    transform: rotate(18deg);

    pointer-events: none;
  }

  &:hover::after {
    animation: ${shimmer} 1.1s cubic-bezier(0.22, 1, 0.36, 1);
  }

  &:hover {
    transform: translateY(-5px) scale(1.004);

    box-shadow: 0 28px 70px rgba(0, 0, 0, 0.14);
  }

  @media (max-width: 700px) {
    min-height: 430px;
    padding: 23px;
    border-radius: 24px;
  }
`;

const CardGlow = styled.div`
  position: absolute;

  width: 320px;
  height: 320px;

  right: -160px;
  bottom: -160px;

  border-radius: 50%;

  background: rgba(255, 255, 255, 0.08);

  filter: blur(8px);

  pointer-events: none;

  animation: ${glow} 7s ease-in-out infinite;
`;

const CardTop = styled.div`
  position: relative;
  z-index: 3;

  display: grid;

  grid-template-columns: auto 1fr auto;

  align-items: center;

  gap: 16px;

  padding-bottom: 17px;

  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;

const CardNumber = styled.span`
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.12em;
  opacity: 0.55;
`;

const CardLabel = styled.span`
  font-size: 8px;
  font-weight: 700;
  letter-spacing: 0.16em;
`;

const CardTime = styled.span`
  font-size: 12px;
  font-weight: 600;
  letter-spacing: -0.02em;
  opacity: 0.85;
  white-space: nowrap;

  @media (max-width: 700px) {
    font-size: 11px;
  }
`;

const CardContent = styled.div`
  position: relative;
  z-index: 3;

  margin-top: auto;
  margin-bottom: auto;

  padding: 25px 0;
`;

const SmallHeading = styled.span`
  display: block;

  margin-bottom: 11px;

  font-size: 8px;
  font-weight: 700;
  letter-spacing: 0.17em;
  opacity: 0.52;
`;

const CardTitle = styled.h3`
  margin: 0 0 20px;

  font-size: clamp(42px, 4.5vw, 68px);

  font-weight: 600;

  line-height: 0.88;

  letter-spacing: -0.075em;

  @media (max-width: 700px) {
    font-size: 48px;
  }
`;

const CardDescription = styled.p`
  max-width: 450px;

  margin: 0;

  font-size: 11px;

  font-weight: 450;

  line-height: 1.65;

  letter-spacing: -0.01em;

  opacity: 0.7;
`;

const CardBottom = styled.div`
  position: relative;
  z-index: 3;

  display: flex;

  align-items: flex-end;

  justify-content: space-between;

  gap: 20px;

  padding-top: 17px;

  border-top: 1px solid rgba(255, 255, 255, 0.2);
`;

const Audience = styled.div`
  max-width: 280px;
`;

const MetaLabel = styled.span`
  display: block;

  margin-bottom: 6px;

  font-size: 7px;

  font-weight: 700;

  letter-spacing: 0.16em;

  opacity: 0.5;
`;

const MetaText = styled.span`
  display: block;

  font-size: 9px;

  font-weight: 500;

  line-height: 1.45;

  opacity: 0.78;
`;

const CircleArrow = styled.span`
  flex-shrink: 0;

  width: 42px;
  height: 42px;

  display: flex;

  align-items: center;
  justify-content: center;

  border: 1px solid rgba(255, 255, 255, 0.25);

  border-radius: 50%;

  background: rgba(255, 255, 255, 0.1);

  font-size: 15px;

  backdrop-filter: blur(14px);

  transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1),
    background 0.3s ease;

  ${SessionCard}:hover & {
    transform: translate(3px, -3px) scale(1.08);

    background: rgba(255, 255, 255, 0.2);
  }
`;

const InfoCard = styled.article<{
  $type: "breakfast" | "lunch" | "both";
  $delay: string;
}>`
  position: relative;

  grid-area: ${({ $type }) => $type};

  min-width: 0;

  padding: 21px;

  display: flex;

  flex-direction: column;

  justify-content: space-between;

  overflow: hidden;

  border-radius: 24px;

  color: #111111;

  background: ${({ $type }) => {
    if ($type === "breakfast") {
      return `
        linear-gradient(
          145deg,
          #f4efe5,
          #e8e0d1
        )
      `;
    }

    if ($type === "lunch") {
      return `
        linear-gradient(
          145deg,
          #ececec,
          #dedee0
        )
      `;
    }

    return `
      linear-gradient(
        145deg,
        #f7f7f7,
        #e9e9e9
      )
    `;
  }};

  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.9),
    0 10px 30px rgba(0, 0, 0, 0.05);

  animation: ${reveal} 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards;

  animation-delay: ${({ $delay }) => $delay};

  transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.5s ease;

  &::before {
    content: "";

    position: absolute;

    width: 180px;
    height: 180px;

    right: -90px;
    top: -90px;

    border-radius: 50%;

    background: rgba(184, 149, 74, 0.12);

    filter: blur(5px);

    transition: transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
  }

  &:hover {
    transform: translateY(-5px);

    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.09);
  }

  &:hover::before {
    transform: scale(1.3);
  }

  @media (max-width: 700px) {
    min-height: 190px;
    border-radius: 22px;
  }
`;

const InfoTop = styled.div`
  position: relative;

  z-index: 2;

  display: flex;

  align-items: center;

  justify-content: space-between;
`;

const InfoNumber = styled.span`
  color: #96969b;

  font-size: 8px;

  font-weight: 700;

  letter-spacing: 0.12em;
`;

const InfoIcon = styled.span`
  width: 32px;
  height: 32px;

  display: flex;

  align-items: center;
  justify-content: center;

  border-radius: 50%;

  background: rgba(255, 255, 255, 0.65);

  color: #b8954a;

  font-size: 17px;
`;

const InfoContent = styled.div`
  position: relative;
  z-index: 2;
`;

const InfoLabel = styled.span`
  display: block;

  margin-bottom: 7px;

  color: #85858a;

  font-size: 7px;

  font-weight: 700;

  letter-spacing: 0.15em;
`;

const InfoTitle = styled.h4`
  margin: 0 0 5px;

  color: #111111;

  font-size: clamp(28px, 2.7vw, 40px);

  font-weight: 600;

  line-height: 0.9;

  letter-spacing: -0.065em;
`;

const InfoTime = styled.span`
  color: #6e6e73;

  font-size: 11px;

  font-weight: 600;

  letter-spacing: -0.01em;
`;

const BothContent = styled.div`
  position: relative;

  z-index: 2;
`;

const MiniArrow = styled.span`
  width: 32px;
  height: 32px;

  display: flex;

  align-items: center;
  justify-content: center;

  border-radius: 50%;

  background: #111111;

  color: #ffffff;

  font-size: 13px;
`;

const BothTitle = styled.h4`
  margin: 7px 0 10px;

  color: #111111;

  font-size: clamp(36px, 3.5vw, 52px);

  font-weight: 600;

  line-height: 0.84;

  letter-spacing: -0.07em;
`;

const BothText = styled.p`
  max-width: 200px;

  margin: 0;

  color: #66666b;

  font-size: 9px;

  line-height: 1.5;
`;

const QuoteCard = styled.article<{
  $delay: string;
}>`
  grid-area: quote;

  position: relative;

  min-width: 0;

  padding: 21px;

  display: flex;

  flex-direction: column;

  justify-content: space-between;

  overflow: hidden;

  border-radius: 24px;

  background: #111111;

  color: #ffffff;

  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);

  animation: ${reveal} 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards;

  animation-delay: ${({ $delay }) => $delay};

  transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.5s ease;

  &:hover {
    transform: translateY(-5px);

    box-shadow: 0 22px 55px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 700px) {
    min-height: 190px;

    border-radius: 22px;
  }
`;

const QuoteMark = styled.span`
  color: #b8954a;

  font-size: 42px;

  font-weight: 500;

  line-height: 0.5;
`;

const QuoteText = styled.p`
  max-width: 250px;

  margin: 0;

  color: rgba(255, 255, 255, 0.9);

  font-size: 16px;

  font-weight: 500;

  line-height: 1.2;

  letter-spacing: -0.04em;
`;

const QuoteBottom = styled.div`
  display: flex;

  align-items: center;

  gap: 10px;
`;

const QuoteLine = styled.span`
  width: 20px;

  height: 1px;

  background: #b8954a;
`;

const QuoteLabel = styled.span`
  color: rgba(255, 255, 255, 0.45);

  font-size: 7px;

  font-weight: 700;

  letter-spacing: 0.15em;
`;

const BottomNote = styled.div`
  margin-top: 55px;

  @media (max-width: 768px) {
    margin-top: 45px;
  }
`;

const BottomLine = styled.div`
  width: 100%;

  height: 1px;

  background: #e5e5e5;
`;

const BottomContent = styled.div`
  display: grid;

  grid-template-columns:
    90px
    1fr
    auto;

  align-items: center;

  gap: 25px;

  padding-top: 18px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr auto;

    gap: 12px;
  }
`;

const BottomNumber = styled.span`
  color: #b8954a;

  font-size: 8px;

  font-weight: 700;

  letter-spacing: 0.12em;
`;

const BottomText = styled.p`
  margin: 0;

  color: #77777c;

  font-size: 9px;

  font-weight: 500;

  line-height: 1.5;

  @media (max-width: 600px) {
    grid-column: 1 / -1;
    grid-row: 2;
  }
`;

const BottomArrow = styled.span`
  width: 32px;
  height: 32px;

  display: flex;

  align-items: center;
  justify-content: center;

  border: 1px solid #dedede;

  border-radius: 50%;

  color: #111111;

  font-size: 12px;
`;
