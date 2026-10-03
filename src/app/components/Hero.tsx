"use client";

import styled, { keyframes } from "styled-components";

import Navbar from "./Navbar.component";

export default function Hero() {
  return (
    <Container>
      <Navbar />

      <HeroComponent>
        <BackgroundImage />

        <Overlay />

        <HeroContent>
          <Headline>
            The End
            <br />
            of <Accent>Manual.</Accent>
          </Headline>

          <Subheadline>
            AI, connected systems and the future of financial reporting and
            compliance
          </Subheadline>

          <ValueText>
            How Nigeria&apos;s leading financial institutions are building
            reporting and compliance that regulators, boards and partners can
            trust.
          </ValueText>

          <EventDetails>
            <Detail>
              <DetailLabel>DATE</DetailLabel>
              <DetailValue>Wednesday, 21 October 2026</DetailValue>
            </Detail>

            <Detail>
              <DetailLabel>VENUE</DetailLabel>
              <DetailValue>The Wheatbaker, Ikoyi, Lagos</DetailValue>
            </Detail>
          </EventDetails>

          <Actions>
            <PrimaryButton
              href="https://workshop.opexconsult.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Reserve your seat
              <Arrow>↗</Arrow>
            </PrimaryButton>

            <SecondaryButton href="#agenda">View the agenda</SecondaryButton>
          </Actions>
        </HeroContent>

        <BottomLeft>
          <SmallText>OPEX CONSULTING LTD</SmallText>
        </BottomLeft>

        <QRCodeCard>
          <QRGlow />

          <QRImage src="/images/qrcode.png" alt="Scan to reserve your seat" />

          <QRText>SCAN TO RESERVE</QRText>
        </QRCodeCard>
      </HeroComponent>
    </Container>
  );
}

const Container = styled.main`
  width: 100%;
  min-height: 100vh;
  background: #000;
`;

const HeroComponent = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  min-height: 650px;
  overflow: hidden;
  display: flex;
  align-items: center;
  padding: 80px 7vw;
  color: #ffffff;

  @media (max-width: 768px) {
    height: 100svh;
    min-height: 620px;
    padding: 90px 24px 80px;
  }
`;

const BackgroundImage = styled.div`
  position: absolute;
  inset: 0;

  background-image: url("/images/main.jpeg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;

  background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.84) 0%,
      rgba(0, 0, 0, 0.64) 45%,
      rgba(0, 0, 0, 0.3) 100%
    ),
    linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.25) 0%,
      transparent 50%,
      rgba(0, 0, 0, 0.55) 100%
    );
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  width: min(680px, 100%);
`;

const Headline = styled.h1`
  margin: 0;

  color: #ffffff;

  font-size: clamp(58px, 7vw, 105px);
  font-weight: 600;
  line-height: 0.88;
  letter-spacing: -0.075em;

  @media (max-width: 600px) {
    font-size: clamp(52px, 16vw, 78px);
    line-height: 0.9;
  }
`;

const Accent = styled.span`
  color: #d0ad65;
`;

const Subheadline = styled.p`
  max-width: 600px;
  margin-top: 25px;

  color: rgba(255, 255, 255, 0.94);

  font-size: clamp(17px, 1.7vw, 23px);
  font-weight: 500;
  line-height: 1.3;
  letter-spacing: -0.03em;

  @media (max-width: 600px) {
    margin-top: 22px;
    font-size: 17px;
  }
`;

const ValueText = styled.p`
  max-width: 560px;
  margin-top: 13px;

  color: rgba(255, 255, 255, 0.65);

  font-size: 12px;
  line-height: 1.55;

  @media (max-width: 600px) {
    font-size: 11px;
    line-height: 1.55;
  }
`;

const EventDetails = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 38px;
  margin-top: 23px;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 12px;
    margin-top: 20px;
  }
`;

const Detail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const DetailLabel = styled.span`
  color: #d0ad65;

  font-size: 8px;
  font-weight: 700;
  letter-spacing: 0.18em;
`;

const DetailValue = styled.span`
  color: rgba(255, 255, 255, 0.88);

  font-size: 11px;
  font-weight: 500;
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 25px;

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const PrimaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 15px;

  min-height: 48px;
  padding: 0 22px;

  border-radius: 999px;

  background: #ffffff;
  color: #111111;

  font-size: 12px;
  font-weight: 700;

  transition: transform 0.25s ease, background 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-2px);
    background: #ffffff;
    box-shadow: 0 10px 25px rgba(255, 255, 255, 0.12);
  }

  @media (max-width: 500px) {
    width: 100%;
  }
`;

const Arrow = styled.span`
  font-size: 15px;

  transition: transform 0.3s ease;

  ${PrimaryButton}:hover & {
    transform: translate(2px, -2px);
  }
`;

const SecondaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  min-height: 48px;
  padding: 0 22px;

  border: 1px solid rgba(255, 255, 255, 0.35);
  border-radius: 999px;

  color: #ffffff;

  font-size: 12px;
  font-weight: 600;

  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);

  transition: background 0.25s ease, border-color 0.25s ease,
    transform 0.25s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.65);
    transform: translateY(-2px);
  }

  @media (max-width: 500px) {
    width: 100%;
  }
`;

const BottomLeft = styled.div`
  position: absolute;
  z-index: 3;

  left: 7vw;
  bottom: 25px;

  @media (max-width: 600px) {
    left: 24px;
    bottom: 20px;
  }
`;

const SmallText = styled.span`
  color: rgba(255, 255, 255, 0.45);

  font-size: 8px;
  font-weight: 600;
  letter-spacing: 0.15em;

  @media (max-width: 600px) {
    font-size: 7px;
  }
`;

/* =========================
   QR ANIMATIONS
========================= */

const qrFloatAnimation = keyframes`
  0% {
    transform: translateY(0) rotate(0deg);
  }

  8% {
    transform: translateY(-2px) rotate(-3deg);
  }

  16% {
    transform: translateY(1px) rotate(3deg);
  }

  24% {
    transform: translateY(-2px) rotate(-2.5deg);
  }

  32% {
    transform: translateY(1px) rotate(2.5deg);
  }

  40% {
    transform: translateY(-2px) rotate(-2deg);
  }

  48% {
    transform: translateY(-7px) rotate(0deg);
  }

  60% {
    transform: translateY(-3px) rotate(0deg);
  }

  72% {
    transform: translateY(0) rotate(0deg);
  }

  100% {
    transform: translateY(0) rotate(0deg);
  }
`;

const glowAnimation = keyframes`
  0% {
    opacity: 0.25;
    transform: scale(0.92);
  }

  50% {
    opacity: 0.55;
    transform: scale(1.08);
  }

  100% {
    opacity: 0.25;
    transform: scale(0.92);
  }
`;

const QRCodeCard = styled.div`
  position: absolute;
  z-index: 4;

  right: 7vw;
  bottom: 28px;

  width: 108px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  padding: 9px;

  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 16px;

  background: rgba(255, 255, 255, 0.08);

  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);

  animation: ${qrFloatAnimation} 2.2s ease-in-out infinite;

  transform-origin: center bottom;

  @media (max-width: 600px) {
    right: 24px;
    bottom: 18px;

    width: 88px;
    padding: 7px;

    border-radius: 13px;
  }
`;

const QRGlow = styled.div`
  position: absolute;

  width: 90px;
  height: 90px;

  border-radius: 50%;

  background: rgba(208, 173, 101, 0.3);

  filter: blur(30px);

  animation: ${glowAnimation} 3s ease-in-out infinite;

  pointer-events: none;

  @media (max-width: 600px) {
    width: 70px;
    height: 70px;
  }
`;

const QRImage = styled.img`
  position: relative;
  z-index: 2;

  width: 90px;
  height: 90px;

  display: block;

  border-radius: 8px;

  background: #ffffff;

  object-fit: cover;

  @media (max-width: 600px) {
    width: 72px;
    height: 72px;
  }
`;

const QRText = styled.span`
  position: relative;
  z-index: 2;

  color: rgba(255, 255, 255, 0.65);

  font-size: 6px;
  font-weight: 700;
  letter-spacing: 0.16em;

  white-space: nowrap;
`;
