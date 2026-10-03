"use client";

import { useState } from "react";
import styled from "styled-components";

const faqs = [
  {
    question: "Is there a fee to attend?",
    answer:
      "No. Attendance is complimentary for invited executives. The morning Finance Executive Workshop is by invitation, while afternoon participation is subject to seat availability.",
  },
  {
    question: "Can I attend both sessions?",
    answer:
      "Yes. Morning workshop delegates may register for both the Finance Executive Workshop and the afternoon Executive C-Level Summit.",
  },
  {
    question: "Who is the morning workshop for?",
    answer:
      "The morning session is designed for Group CFOs, CFOs and senior finance leaders of leading Nigerian banks and large listed organisations.",
  },
  {
    question: "Who should attend the afternoon summit?",
    answer:
      "The afternoon session is designed for CIOs, CTOs, Chief Compliance Officers, Chief Risk Officers, Chief Information Security Officers, Chief Audit Executives and senior technology, risk and compliance leaders.",
  },
  {
    question: "Can I nominate a colleague?",
    answer:
      "Yes. Afternoon nominations can be submitted and are subject to seat availability. Morning workshop nominations will be reviewed based on the intended audience for the session.",
  },
  {
    question: "Will presentation materials be available after the event?",
    answer:
      "Yes. Session slides and an executive summary will be shared with delegates after the event.",
  },
  {
    question: "Will food and refreshments be provided?",
    answer:
      "Yes. Breakfast will be served during the morning networking session, and lunch will be provided during the afternoon summit.",
  },
  {
    question: "Where is the event taking place?",
    answer:
      "The event will take place at The Wheatbaker, 4 Onitolo Road (formerly Lawrence Road), Ikoyi, Lagos, Nigeria. Parking is available on site.",
  },
];

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveIndex((current) => (current === index ? null : index));
  };

  return (
    <Section id="faq">
      <Container>
        <Header>
          <HeaderLeft>
            <Eyebrow>QUESTIONS</Eyebrow>

            <Heading>
              Everything
              <br />
              <Accent>you need to know.</Accent>
            </Heading>
          </HeaderLeft>

          <HeaderRight>
            <Intro>
              A few practical details before you join us at The Wheatbaker.
            </Intro>
          </HeaderRight>
        </Header>

        <FaqList>
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <FaqItem
                key={faq.question}
                $open={isOpen}
                onClick={() => toggleFaq(index)}
              >
                <QuestionRow>
                  <Number>{String(index + 1).padStart(2, "0")}</Number>

                  <Question>{faq.question}</Question>

                  <Plus $open={isOpen}>
                    <Horizontal $open={isOpen} />
                    <Vertical $open={isOpen} />
                  </Plus>
                </QuestionRow>

                <AnswerWrapper $open={isOpen}>
                  <Answer $open={isOpen}>{faq.answer}</Answer>
                </AnswerWrapper>
              </FaqItem>
            );
          })}
        </FaqList>

        <Bottom>
          <BottomText>Still have a question?</BottomText>

          <Contact href="mailto:info@opexconsult.co.uk">
            Contact OPEX
            <Arrow>↗</Arrow>
          </Contact>
        </Bottom>
      </Container>
    </Section>
  );
}

const Section = styled.section`
  width: 100%;
  background: #ffffff;
  padding: 125px 0 130px;
  overflow: hidden;

  @media (max-width: 700px) {
    padding: 90px 0 95px;
  }
`;

const Container = styled.div`
  width: min(1100px, 90vw);
  margin: 0 auto;
`;

const Header = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 100px;
  align-items: end;
  margin-bottom: 85px;

  @media (max-width: 850px) {
    grid-template-columns: 1fr;
    gap: 25px;
    margin-bottom: 55px;
  }
`;

const HeaderLeft = styled.div``;

const Eyebrow = styled.span`
  display: block;
  margin-bottom: 22px;

  color: #b8954a;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.17em;
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
  padding-bottom: 5px;
`;

const Intro = styled.p`
  max-width: 400px;

  color: #6e6e73;

  font-size: 15px;
  font-weight: 500;
  line-height: 1.7;
  letter-spacing: -0.015em;
`;

const FaqList = styled.div`
  width: 100%;
`;

const FaqItem = styled.div<{ $open: boolean }>`
  position: relative;

  border-top: 1px solid #e8e8e8;

  cursor: pointer;

  transition: background 0.35s ease;

  &:last-child {
    border-bottom: 1px solid #e8e8e8;
  }

  &:hover {
    background: ${({ $open }) => ($open ? "transparent" : "#fafafa")};
  }
`;

const QuestionRow = styled.div`
  min-height: 105px;

  display: grid;
  grid-template-columns: 70px 1fr 45px;
  align-items: center;
  gap: 20px;

  padding: 0 10px;

  @media (max-width: 700px) {
    min-height: 88px;

    grid-template-columns: 42px 1fr 35px;

    gap: 12px;

    padding: 0 5px;
  }
`;

const Number = styled.span`
  color: #b8954a;

  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.12em;
`;

const Question = styled.h3`
  margin: 0;

  color: #111111;

  font-size: clamp(18px, 2vw, 24px);
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.035em;

  transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1),
    letter-spacing 0.35s ease;

  ${FaqItem}:hover & {
    transform: translateX(4px);
    letter-spacing: -0.045em;
  }

  @media (max-width: 700px) {
    font-size: 16px;
  }
`;

const Plus = styled.div<{ $open: boolean }>`
  position: relative;

  width: 34px;
  height: 34px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  background: ${({ $open }) => ($open ? "#111111" : "#f3f3f1")};

  transform: ${({ $open }) => ($open ? "rotate(180deg)" : "rotate(0deg)")};

  transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1),
    background 0.3s ease;

  ${FaqItem}:hover & {
    background: ${({ $open }) => ($open ? "#111111" : "#e9e9e6")};
  }

  @media (max-width: 700px) {
    width: 30px;
    height: 30px;
  }
`;

const Horizontal = styled.span<{ $open: boolean }>`
  position: absolute;

  width: 11px;
  height: 1.5px;

  border-radius: 999px;

  background: ${({ $open }) => ($open ? "#ffffff" : "#111111")};
`;

const Vertical = styled.span<{ $open: boolean }>`
  position: absolute;

  width: 1.5px;
  height: 11px;

  border-radius: 999px;

  background: ${({ $open }) => ($open ? "#ffffff" : "#111111")};

  transform: ${({ $open }) => ($open ? "scaleY(0)" : "scaleY(1)")};

  transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1);
`;

const AnswerWrapper = styled.div<{ $open: boolean }>`
  display: grid;

  grid-template-rows: ${({ $open }) => ($open ? "1fr" : "0fr")};

  transition: grid-template-rows 0.5s cubic-bezier(0.22, 1, 0.36, 1);
`;

const Answer = styled.div<{ $open: boolean }>`
  min-height: 0;
  overflow: hidden;

  max-width: 760px;

  padding: 0 80px 0 100px;

  color: #6e6e73;

  font-size: 15px;
  font-weight: 500;
  line-height: 1.75;
  letter-spacing: -0.01em;

  opacity: ${({ $open }) => ($open ? 1 : 0)};

  transform: ${({ $open }) => ($open ? "translateY(0)" : "translateY(-8px)")};

  transition: opacity 0.35s ease, transform 0.45s cubic-bezier(0.22, 1, 0.36, 1),
    padding 0.45s cubic-bezier(0.22, 1, 0.36, 1);

  ${({ $open }) =>
    $open &&
    `
      padding-bottom: 35px;
    `}

  @media (max-width: 700px) {
    padding-left: 59px;
    padding-right: 35px;

    font-size: 14px;
    line-height: 1.7;

    ${({ $open }) =>
      $open &&
      `
        padding-bottom: 30px;
      `}
  }
`;

const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 55px;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 18px;
  }
`;

const BottomText = styled.span`
  color: #777777;

  font-size: 13px;
  font-weight: 500;
`;

const Contact = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 12px;

  padding: 13px 19px;

  border-radius: 999px;

  background: #111111;
  color: #ffffff;

  font-size: 11px;
  font-weight: 600;

  transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.35s ease;

  &:hover {
    transform: translateY(-3px);

    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.14);
  }
`;

const Arrow = styled.span`
  font-size: 15px;

  transition: transform 0.3s ease;

  ${Contact}:hover & {
    transform: translate(2px, -2px);
  }
`;
