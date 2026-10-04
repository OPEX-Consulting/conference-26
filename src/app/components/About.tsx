"use client";

import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const words = [
  "Financial",
  "reporting",
  "and",
  "compliance",
  "have",
  "never",
  "carried",
  "higher",
  "stakes.",
];

const cards = [
  {
    number: "01",
    title: "Manual work",
    text: "Reporting still depends on repetitive processes, spreadsheets and disconnected workflows.",
    cardSize: "large" as const,
  },
  {
    number: "02",
    title: "Connected systems",
    text: "Finance, risk and compliance need to operate from connected and trusted information.",
    cardSize: "small" as const,
  },
  {
    number: "03",
    title: "Intelligent reporting",
    text: "AI creates an opportunity to make reporting faster, more continuous and easier to govern.",
    cardSize: "small" as const,
  },
];

export default function About() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const viewport = window.innerHeight;

      const start = viewport * 0.8;
      const end = viewport * 0.15;

      const value = (start - rect.top) / (start - end);

      setProgress(Math.max(0, Math.min(1, value)));
    };

    updateProgress();

    window.addEventListener("scroll", updateProgress, {
      passive: true,
    });

    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <Section ref={sectionRef} id="about">
      <Container>
        <Header>
          <SectionLabel>ABOUT THE CONVERSATION</SectionLabel>
          <SectionNumber>01</SectionNumber>
        </Header>

        <StatementArea>
          <Intro>
            <IntroLine />

            <IntroNumber>01 / 03</IntroNumber>

            <IntroText>
              Financial reporting and compliance in Nigeria have never carried
              higher stakes. Regulators expect faster, more accurate
              submissions. Boards want visibility beyond the month-end close.
            </IntroText>

            <IntroText>
              Yet much of this work still depends on manual processes and
              disconnected systems. The opportunity is to move towards reporting
              that is connected, intelligent and continuous.
            </IntroText>
          </Intro>

          <HeroStatement>
            {words.map((word, index) => {
              const start = index / words.length;
              const end = (index + 1) / words.length;

              let wordProgress = 0;

              if (progress >= end) {
                wordProgress = 1;
              } else if (progress > start) {
                wordProgress = (progress - start) / (end - start);
              }

              return (
                <Word key={`${word}-${index}`} $progress={wordProgress}>
                  {word}
                </Word>
              );
            })}
          </HeroStatement>
        </StatementArea>

        <Cards>
          {cards.map((card) => (
            <InteractiveCard
              key={card.number}
              number={card.number}
              title={card.title}
              text={card.text}
              cardSize={card.cardSize}
            />
          ))}
        </Cards>

        <FooterStatement>
          <SmallText>THE QUESTION</SmallText>

          <LargeText>
            What changes when
            <br />
            <span>manual becomes intelligent?</span>
          </LargeText>
        </FooterStatement>
      </Container>
    </Section>
  );
}

function InteractiveCard({
  number,
  title,
  text,
  cardSize,
}: {
  number: string;
  title: string;
  text: string;
  cardSize: "large" | "small";
}) {
  const cardRef = useRef<HTMLDivElement | null>(null);

  const handleMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;

    if (!card) return;

    const rect = card.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 3;

    const rotateX = ((y - rect.height / 2) / (rect.height / 2)) * -3;

    card.style.transform = `
      perspective(1200px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      translateY(-6px)
    `;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  const handleLeave = () => {
    if (!cardRef.current) return;

    cardRef.current.style.transform = `
      perspective(1200px)
      rotateX(0deg)
      rotateY(0deg)
      translateY(0)
    `;
  };

  return (
    <Card
      ref={cardRef}
      $cardSize={cardSize}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <CardGlow />

      <CardTop>
        <CardNumber>{number}</CardNumber>
      </CardTop>

      <CardBottom>
        <CardTitle>{title}</CardTitle>

        <CardText>{text}</CardText>
      </CardBottom>
    </Card>
  );
}

const Section = styled.section`
  width: 100%;

  background: #ffffff;

  padding: 120px 7vw 130px;

  overflow: hidden;

  @media (max-width: 768px) {
    padding: 80px 24px 90px;
  }
`;

const Container = styled.div`
  width: 100%;

  max-width: 1280px;

  margin: 0 auto;

  min-width: 0;
`;

const Header = styled.div`
  display: flex;

  align-items: center;

  justify-content: space-between;

  margin-bottom: 65px;

  @media (max-width: 768px) {
    margin-bottom: 45px;
  }
`;

const SectionLabel = styled.span`
  color: #555555;

  font-size: 9px;

  font-weight: 700;

  letter-spacing: 0.16em;

  text-transform: uppercase;
`;

const SectionNumber = styled.span`
  color: #666666;

  font-size: 10px;

  font-weight: 600;
`;

const StatementArea = styled.div`
  width: 100%;

  display: grid;

  grid-template-columns:
    minmax(220px, 0.55fr)
    minmax(0, 1.7fr);

  gap: clamp(45px, 7vw, 110px);

  align-items: end;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;

    gap: 50px;
  }
`;

const Intro = styled.div`
  width: 100%;

  max-width: 300px;

  align-self: end;

  padding-bottom: 8px;

  @media (max-width: 900px) {
    order: 2;

    max-width: 620px;

    padding-bottom: 0;
  }
`;

const IntroLine = styled.div`
  width: 100%;

  height: 1px;

  margin-bottom: 18px;

  background: #d9d9d9;
`;

const IntroNumber = styled.span`
  display: block;

  margin-bottom: 22px;

  color: #666666;

  font-size: 9px;

  font-weight: 600;

  letter-spacing: 0.08em;
`;

const IntroText = styled.p`
  margin: 0 0 16px;

  color: #555555;

  font-size: 12px;

  font-weight: 450;

  line-height: 1.7;

  letter-spacing: -0.015em;

  &:last-child {
    margin-bottom: 0;
  }
`;

const HeroStatement = styled.h2`
  width: 100%;

  max-width: 1050px;

  margin: 0;

  color: #111111;

  font-size: clamp(48px, 6.8vw, 104px);

  font-weight: 600;

  line-height: 0.98;

  letter-spacing: -0.075em;

  @media (max-width: 900px) {
    order: 1;

    max-width: 100%;

    font-size: clamp(48px, 10vw, 82px);
  }

  @media (max-width: 600px) {
    font-size: clamp(42px, 12vw, 70px);

    line-height: 1;

    letter-spacing: -0.065em;
  }

  @media (max-width: 480px) {
    font-size: 41px;

    letter-spacing: -0.055em;
  }
`;

const Word = styled.span<{ $progress: number }>`
  display: inline-block;

  margin-right: 0.2em;

  margin-bottom: 0.08em;

  color: ${({ $progress }) => {
    const light = 170;
    const dark = 17;

    const value = Math.round(light - (light - dark) * $progress);

    return `rgb(${value}, ${value}, ${value})`;
  }};

  text-shadow: ${({ $progress }) =>
    $progress > 0.05 && $progress < 1
      ? `0 0 24px rgba(138, 104, 40, ${
          0.14 * (1 - Math.abs(0.5 - $progress) * 2)
        })`
      : "none"};

  transition: color 0.12s linear, text-shadow 0.2s ease;

  &:last-child {
    margin-right: 0;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

const Cards = styled.div`
  width: 100%;

  margin-top: 90px;

  display: grid;

  grid-template-columns: 1.35fr 1fr;

  grid-template-rows: 255px 255px;

  gap: 14px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;

    grid-template-rows: auto;

    margin-top: 65px;
  }
`;

const Card = styled.div<{
  $cardSize: "large" | "small";
}>`
  position: relative;

  width: 100%;

  min-width: 0;

  min-height: ${({ $cardSize }) => ($cardSize === "large" ? "524px" : "255px")};

  grid-row: ${({ $cardSize }) => ($cardSize === "large" ? "span 2" : "auto")};

  padding: 30px;

  display: flex;

  flex-direction: column;

  justify-content: space-between;

  overflow: hidden;

  border-radius: 30px;

  transform-style: preserve-3d;

  transition: transform 0.55s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.55s ease;

  will-change: transform;

  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.28),
    0 15px 45px rgba(0, 0, 0, 0.08);

  &::before {
    content: "";

    position: absolute;

    inset: 0;

    background: radial-gradient(
      circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
      rgba(255, 255, 255, 0.18),
      transparent 30%
    );

    opacity: 0;

    transition: opacity 0.3s ease;

    pointer-events: none;
  }

  &:hover::before {
    opacity: 1;
  }

  &:hover {
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.4),
      0 30px 80px rgba(0, 0, 0, 0.16);
  }

  &:nth-child(1) {
    color: #111111;

    background: radial-gradient(
        circle at 85% 12%,
        rgba(255, 255, 255, 0.38),
        transparent 30%
      ),
      linear-gradient(145deg, #c9a45b 0%, #b8954a 50%, #a17f3d 100%);
  }

  &:nth-child(2) {
    color: #ffffff;

    background: radial-gradient(
        circle at 90% 10%,
        rgba(255, 255, 255, 0.14),
        transparent 30%
      ),
      linear-gradient(145deg, #263653 0%, #18243a 55%, #101a2c 100%);
  }

  &:nth-child(3) {
    color: #111111;

    background: radial-gradient(
        circle at 90% 10%,
        rgba(184, 149, 74, 0.16),
        transparent 30%
      ),
      linear-gradient(145deg, #f0ebe1 0%, #e8e0d1 55%, #ddd2bf 100%);
  }

  @media (max-width: 900px) {
    min-height: 290px;

    grid-row: auto;
  }

  @media (max-width: 480px) {
    min-height: 255px;

    padding: 23px;

    border-radius: 24px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    transform: none !important;
  }
`;

const CardGlow = styled.div`
  position: absolute;

  width: 260px;

  height: 260px;

  right: -100px;

  top: -110px;

  border-radius: 50%;

  background: rgba(255, 255, 255, 0.12);

  filter: blur(25px);

  pointer-events: none;

  transition: transform 0.8s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.5s ease;

  ${Card}:hover & {
    transform: scale(1.35) translate(-15px, 20px);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

const CardTop = styled.div`
  position: relative;

  z-index: 3;

  display: flex;

  align-items: flex-start;

  justify-content: space-between;
`;

const CardNumber = styled.span`
  font-size: 9px;

  font-weight: 700;

  letter-spacing: 0.12em;

  opacity: 0.72;
`;

const CardBottom = styled.div`
  position: relative;

  z-index: 3;

  width: 100%;

  max-width: 480px;

  min-width: 0;
`;

const CardTitle = styled.h3`
  margin: 0 0 14px;

  color: inherit;

  font-size: clamp(32px, 3.2vw, 52px);

  font-weight: 600;

  line-height: 0.92;

  letter-spacing: -0.07em;

  transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1);

  ${Card}:hover & {
    transform: translateY(-3px);
  }

  @media (max-width: 900px) {
    font-size: 40px;
  }

  @media (max-width: 480px) {
    font-size: 32px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

const CardText = styled.p`
  max-width: 390px;

  margin: 0;

  color: inherit;

  font-size: 12px;

  font-weight: 450;

  line-height: 1.65;

  letter-spacing: -0.012em;

  opacity: 0.78;

  @media (max-width: 480px) {
    font-size: 11px;
  }
`;

const FooterStatement = styled.div`
  width: 100%;

  margin-top: 105px;

  padding-top: 26px;

  border-top: 1px solid #d9d9d9;

  @media (max-width: 768px) {
    margin-top: 80px;
  }
`;

const SmallText = styled.span`
  display: block;

  margin-bottom: 20px;

  color: #555555;

  font-size: 9px;

  font-weight: 700;

  letter-spacing: 0.16em;

  text-transform: uppercase;
`;

const LargeText = styled.h3`
  width: 100%;

  margin: 0;

  color: #111111;

  font-size: clamp(38px, 5vw, 72px);

  font-weight: 600;

  line-height: 0.98;

  letter-spacing: -0.07em;

  span {
    color: #555555;
  }

  @media (max-width: 768px) {
    font-size: clamp(34px, 9vw, 58px);
  }

  @media (max-width: 480px) {
    font-size: 34px;

    letter-spacing: -0.045em;
  }
`;
