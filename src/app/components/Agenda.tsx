"use client";

import { useState } from "react";
import styled from "styled-components";

const RESERVATION_URL = "https://workshop.opexconsult.com/";

const agenda = [
  {
    time: "08:30",
    end: "11:00",
    type: "MORNING · BY INVITATION",
    title: "Finance Executive Workshop",
    description:
      "A closed-door conversation for Group CFOs, CFOs and senior finance leaders on the risks of manual reporting, disconnected data and the practical role of AI in finance.",
    audience: "Group CFOs · CFOs · Senior Finance Leaders",
  },
  {
    time: "11:30",
    end: "12:00",
    type: "NETWORKING",
    title: "Executive Breakfast",
    description:
      "An informal opportunity for delegates to connect, exchange perspectives and continue the morning conversation.",
    audience: "Morning Workshop Delegates",
  },
  {
    time: "12:00",
    end: "16:00",
    type: "AFTERNOON · EXECUTIVE",
    title: "C-Level Summit",
    description:
      "A broader executive conversation exploring connected systems, governance, risk, compliance and what AI means for the future of financial reporting.",
    audience: "CIOs · CTOs · CCOs · CROs · Senior Executives",
  },
  {
    time: "14:00",
    end: "14:30",
    type: "MIDDAY",
    title: "Executive Lunch",
    description:
      "Lunch and continued conversations between senior leaders across finance, technology, risk and compliance.",
    audience: "All Delegates",
  },
];

export default function Agenda() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <Section id="agenda">
      <Container>
        <Header>
          <HeaderLeft>
            <Eyebrow>THE AGENDA</Eyebrow>

            <Heading>
              One day.
              <br />
              <Accent>Two conversations.</Accent>
            </Heading>
          </HeaderLeft>

          <HeaderRight>
            <Intro>
              A focused programme designed around the decisions financial,
              technology, risk and compliance leaders are making now.
            </Intro>

            <Date>
              <DateLabel>WEDNESDAY</DateLabel>
              <DateValue>21 OCTOBER 2026</DateValue>
            </Date>
          </HeaderRight>
        </Header>

        <Timeline>
          {agenda.map((item, index) => (
            <AgendaItem
              key={`${item.time}-${item.title}`}
              $active={activeIndex === index}
              $dimmed={activeIndex !== null && activeIndex !== index}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <TimeColumn>
                <Time>{item.time}</Time>
                <EndTime>{item.end}</EndTime>
              </TimeColumn>

              <DotColumn>
                <Dot $active={activeIndex === index} />

                {index !== agenda.length - 1 && <Line />}
              </DotColumn>

              <Content>
                <TopRow>
                  <Type>{item.type}</Type>

                  <Index>{String(index + 1).padStart(2, "0")}</Index>
                </TopRow>

                <Title>{item.title}</Title>

                <Description>{item.description}</Description>

                <Audience>
                  <AudienceLabel>FOR</AudienceLabel>

                  <AudienceText>{item.audience}</AudienceText>
                </Audience>
              </Content>

              <HoverGlow />
            </AgendaItem>
          ))}
        </Timeline>

        <Bottom>
          <BottomLeft>
            <BottomNumber>01 / 02</BottomNumber>

            <BottomText>
              Morning workshop delegates may register
              <br />
              for both sessions.
            </BottomText>
          </BottomLeft>

          <BottomCTA
            href={RESERVATION_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Reserve your seat
            <Arrow>↗</Arrow>
          </BottomCTA>
        </Bottom>
      </Container>
    </Section>
  );
}

const Section = styled.section`
  width: 100%;

  background: #f7f7f5;

  padding: 125px 0 130px;

  @media (max-width: 700px) {
    padding: 90px 0 100px;
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

  margin-bottom: 100px;

  @media (max-width: 850px) {
    grid-template-columns: 1fr;

    gap: 30px;

    margin-bottom: 70px;
  }
`;

const HeaderLeft = styled.div``;

const Eyebrow = styled.span`
  display: block;

  margin-bottom: 22px;

  color: #b8954a;

  font-size: 9px;

  font-weight: 700;

  letter-spacing: 0.18em;

  text-transform: uppercase;
`;

const Heading = styled.h2`
  margin: 0;

  color: #111111;

  font-size: clamp(52px, 6vw, 82px);

  font-weight: 600;

  line-height: 0.9;

  letter-spacing: -0.075em;

  @media (max-width: 700px) {
    font-size: clamp(46px, 13vw, 68px);
  }
`;

const Accent = styled.span`
  color: #b8954a;
`;

const HeaderRight = styled.div`
  display: flex;

  flex-direction: column;

  gap: 35px;

  padding-bottom: 5px;
`;

const Intro = styled.p`
  max-width: 430px;

  color: #6e6e73;

  font-size: 13px;

  font-weight: 500;

  line-height: 1.7;

  letter-spacing: -0.015em;
`;

const Date = styled.div`
  display: flex;

  align-items: center;

  gap: 14px;
`;

const DateLabel = styled.span`
  color: #999999;

  font-size: 8px;

  font-weight: 700;

  letter-spacing: 0.16em;
`;

const DateValue = styled.span`
  color: #111111;

  font-size: 10px;

  font-weight: 700;

  letter-spacing: 0.08em;
`;

const Timeline = styled.div`
  position: relative;
`;

const AgendaItem = styled.div<{
  $active: boolean;
  $dimmed: boolean;
}>`
  position: relative;

  display: grid;

  grid-template-columns: 100px 30px 1fr;

  min-height: 220px;

  opacity: ${({ $dimmed }) => ($dimmed ? 0.38 : 1)};

  transform: ${({ $active }) =>
    $active ? "translateX(10px) scale(1.008)" : "translateX(0) scale(1)"};

  transition: opacity 0.45s cubic-bezier(0.22, 1, 0.36, 1),
    transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);

  cursor: pointer;

  @media (max-width: 700px) {
    grid-template-columns: 65px 20px 1fr;

    min-height: 250px;

    transform: ${({ $active }) =>
      $active ? "translateX(5px)" : "translateX(0)"};
  }
`;

const HoverGlow = styled.div`
  position: absolute;

  z-index: -1;

  top: -15px;

  right: -25px;

  bottom: 15px;

  left: 75px;

  border-radius: 22px;

  background: radial-gradient(
    circle at 20% 50%,
    rgba(184, 149, 74, 0.08),
    transparent 45%
  );

  opacity: 0;

  pointer-events: none;

  transition: opacity 0.5s ease;

  ${AgendaItem}:hover & {
    opacity: 1;
  }

  @media (max-width: 700px) {
    left: 40px;

    right: -10px;
  }
`;

const TimeColumn = styled.div`
  padding-top: 3px;

  text-align: right;

  padding-right: 25px;

  @media (max-width: 700px) {
    padding-right: 15px;
  }
`;

const Time = styled.span`
  display: block;

  color: #111111;

  font-size: 18px;

  font-weight: 600;

  letter-spacing: -0.04em;

  transition: font-size 0.45s cubic-bezier(0.22, 1, 0.36, 1), color 0.4s ease;

  ${AgendaItem}:hover & {
    color: #b8954a;

    font-size: 20px;
  }

  @media (max-width: 700px) {
    font-size: 14px;

    ${AgendaItem}:hover & {
      font-size: 15px;
    }
  }
`;

const EndTime = styled.span`
  display: block;

  margin-top: 3px;

  color: #aaaaaa;

  font-size: 9px;

  font-weight: 600;

  transition: color 0.4s ease;

  ${AgendaItem}:hover & {
    color: #888888;
  }
`;

const DotColumn = styled.div`
  position: relative;

  display: flex;

  justify-content: center;
`;

const Dot = styled.span<{ $active: boolean }>`
  position: relative;

  z-index: 2;

  width: ${({ $active }) => ($active ? "13px" : "8px")};

  height: ${({ $active }) => ($active ? "13px" : "8px")};

  margin-top: ${({ $active }) => ($active ? "6px" : "7px")};

  border-radius: 50%;

  background: ${({ $active }) => ($active ? "#b8954a" : "#c9c9c9")};

  box-shadow: ${({ $active }) =>
    $active
      ? "0 0 0 6px rgba(184, 149, 74, 0.12), 0 4px 15px rgba(184, 149, 74, 0.25)"
      : "none"};

  transition: width 0.4s cubic-bezier(0.22, 1, 0.36, 1),
    height 0.4s cubic-bezier(0.22, 1, 0.36, 1), margin-top 0.4s ease,
    background 0.4s ease, box-shadow 0.4s ease;
`;

const Line = styled.div`
  position: absolute;

  top: 20px;

  bottom: 0;

  width: 1px;

  background: #dededc;
`;

const Content = styled.div`
  padding: 0 0 70px 35px;

  border-bottom: 1px solid #e4e4e2;

  @media (max-width: 700px) {
    padding: 0 0 55px 20px;
  }
`;

const TopRow = styled.div`
  display: flex;

  align-items: center;

  justify-content: space-between;

  margin-bottom: 17px;
`;

const Type = styled.span`
  color: #b8954a;

  font-size: 8px;

  font-weight: 700;

  letter-spacing: 0.16em;

  transition: letter-spacing 0.4s ease, color 0.4s ease;

  ${AgendaItem}:hover & {
    letter-spacing: 0.2em;
  }
`;

const Index = styled.span`
  color: #bdbdbd;

  font-size: 9px;

  font-weight: 600;

  letter-spacing: 0.08em;

  transition: color 0.4s ease, transform 0.4s ease;

  ${AgendaItem}:hover & {
    color: #b8954a;

    transform: translateX(-5px);
  }
`;

const Title = styled.h3`
  margin: 0;

  color: #111111;

  font-size: clamp(28px, 3vw, 42px);

  font-weight: 600;

  line-height: 1;

  letter-spacing: -0.055em;

  transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1),
    letter-spacing 0.5s ease;

  ${AgendaItem}:hover & {
    transform: translateX(5px);

    letter-spacing: -0.065em;
  }

  @media (max-width: 700px) {
    font-size: 27px;

    line-height: 1.02;
  }
`;

const Description = styled.p`
  max-width: 650px;

  margin-top: 18px;

  color: #6e6e73;

  font-size: 12px;

  font-weight: 500;

  line-height: 1.7;

  letter-spacing: -0.01em;

  transition: color 0.4s ease, transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);

  ${AgendaItem}:hover & {
    color: #555555;

    transform: translateX(5px);
  }
`;

const Audience = styled.div`
  display: flex;

  align-items: center;

  gap: 12px;

  margin-top: 27px;

  transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);

  ${AgendaItem}:hover & {
    transform: translateX(5px);
  }

  @media (max-width: 600px) {
    align-items: flex-start;

    flex-direction: column;

    gap: 5px;
  }
`;

const AudienceLabel = styled.span`
  color: #aaaaaa;

  font-size: 7px;

  font-weight: 700;

  letter-spacing: 0.16em;
`;

const AudienceText = styled.span`
  color: #333333;

  font-size: 9px;

  font-weight: 600;

  letter-spacing: 0.01em;
`;

const Bottom = styled.div`
  display: flex;

  align-items: center;

  justify-content: space-between;

  margin-top: 55px;

  @media (max-width: 600px) {
    align-items: flex-start;

    flex-direction: column;

    gap: 30px;
  }
`;

const BottomLeft = styled.div`
  display: flex;

  align-items: center;

  gap: 18px;
`;

const BottomNumber = styled.span`
  color: #b8954a;

  font-size: 8px;

  font-weight: 700;

  letter-spacing: 0.12em;
`;

const BottomText = styled.p`
  color: #777777;

  font-size: 10px;

  font-weight: 500;

  line-height: 1.5;
`;

const BottomCTA = styled.a`
  display: inline-flex;

  align-items: center;

  gap: 15px;

  min-height: 48px;

  padding: 0 22px;

  border-radius: 999px;

  background: #111111;

  color: #ffffff;

  font-size: 11px;

  font-weight: 600;

  transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1),
    background 0.3s ease, box-shadow 0.35s ease;

  &:hover {
    transform: translateY(-3px) scale(1.02);

    background: #222222;

    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  }
`;

const Arrow = styled.span`
  font-size: 15px;

  transition: transform 0.35s ease;

  ${BottomCTA}:hover & {
    transform: translate(3px, -3px);
  }
`;
