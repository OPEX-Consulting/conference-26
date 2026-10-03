"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import styled from "styled-components";

const RESERVATION_URL = "https://workshop.opexconsult.com/";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <NavWrapper $scrolled={scrolled}>
      <NavbarContainer $scrolled={scrolled}>
        <Logo href="/" onClick={closeMenu}>
          <Image
            src="/images/opexwhite.webp"
            alt="OPEX Consulting"
            width={80}
            height={30}
            priority
          />
        </Logo>

        <DesktopNavigation>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#agenda">Agenda</NavLink>
          <NavLink href="#sessions">Sessions</NavLink>
          <NavLink href="#venue">Venue</NavLink>
          <NavLink href="#faq">FAQ</NavLink>
        </DesktopNavigation>

        <DesktopCTA
          href={RESERVATION_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          Reserve your seat
          <Arrow>↗</Arrow>
        </DesktopCTA>

        <MobileMenuButton
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <MenuLine $open={menuOpen} />
          <MenuLine $open={menuOpen} />
        </MobileMenuButton>
      </NavbarContainer>

      <MobileMenu $open={menuOpen}>
        <MobileLink href="#about" onClick={closeMenu}>
          About
        </MobileLink>

        <MobileLink href="#agenda" onClick={closeMenu}>
          Agenda
        </MobileLink>

        <MobileLink href="#sessions" onClick={closeMenu}>
          Sessions
        </MobileLink>

        <MobileLink href="#venue" onClick={closeMenu}>
          Venue
        </MobileLink>

        <MobileLink href="#faq" onClick={closeMenu}>
          FAQ
        </MobileLink>

        <MobileCTA
          href={RESERVATION_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeMenu}
        >
          Reserve your seat
          <Arrow>↗</Arrow>
        </MobileCTA>
      </MobileMenu>
    </NavWrapper>
  );
}

const NavWrapper = styled.header<{ $scrolled: boolean }>`
  position: ${({ $scrolled }) => ($scrolled ? "fixed" : "absolute")};

  top: ${({ $scrolled }) => ($scrolled ? "14px" : "0")};

  left: 0;

  width: 100%;

  z-index: 1000;

  padding: ${({ $scrolled }) => ($scrolled ? "0" : "0 7vw")};

  display: flex;

  justify-content: center;

  transition: top 0.4s ease, padding 0.4s ease;

  pointer-events: none;
`;

const NavbarContainer = styled.nav<{ $scrolled: boolean }>`
  position: relative;

  width: ${({ $scrolled }) => ($scrolled ? "min(900px, 92vw)" : "100%")};

  max-width: ${({ $scrolled }) => ($scrolled ? "900px" : "1320px")};

  height: ${({ $scrolled }) => ($scrolled ? "58px" : "72px")};

  margin: 0 auto;

  display: flex;

  align-items: center;

  justify-content: space-between;

  padding: ${({ $scrolled }) => ($scrolled ? "0 18px" : "0")};

  border: none;

  border-radius: ${({ $scrolled }) => ($scrolled ? "100px" : "0")};

  background: ${({ $scrolled }) =>
    $scrolled ? "rgba(0, 0, 0, 0.94)" : "transparent"};

  backdrop-filter: ${({ $scrolled }) => ($scrolled ? "blur(24px)" : "none")};

  -webkit-backdrop-filter: ${({ $scrolled }) =>
    $scrolled ? "blur(24px)" : "none"};

  box-shadow: ${({ $scrolled }) =>
    $scrolled ? "0 12px 40px rgba(0, 0, 0, 0.24)" : "none"};

  transition: width 0.45s cubic-bezier(0.22, 1, 0.36, 1),
    max-width 0.45s cubic-bezier(0.22, 1, 0.36, 1), height 0.4s ease,
    padding 0.4s ease, background 0.4s ease, border-radius 0.4s ease,
    box-shadow 0.4s ease;

  pointer-events: auto;

  @media (max-width: 768px) {
    width: ${({ $scrolled }) => ($scrolled ? "92vw" : "100%")};

    height: ${({ $scrolled }) => ($scrolled ? "56px" : "64px")};

    padding: ${({ $scrolled }) => ($scrolled ? "0 16px" : "0")};

    border-radius: ${({ $scrolled }) => ($scrolled ? "100px" : "0")};
  }
`;

const Logo = styled.a`
  display: flex;

  align-items: center;

  flex-shrink: 0;

  img {
    width: 62px;

    height: auto;

    display: block;

    transition: width 0.3s ease;
  }

  @media (max-width: 768px) {
    img {
      width: 57px;
    }
  }
`;

const DesktopNavigation = styled.div`
  position: absolute;

  left: 50%;

  transform: translateX(-50%);

  display: flex;

  align-items: center;

  gap: 30px;

  @media (max-width: 900px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: rgba(255, 255, 255, 0.72);

  font-size: 12px;

  font-weight: 500;

  letter-spacing: -0.01em;

  transition: color 0.25s ease, font-weight 0.25s ease, transform 0.25s ease;

  &:hover {
    color: #ffffff;

    font-weight: 700;

    transform: translateY(-1px);
  }
`;

const DesktopCTA = styled.a`
  display: inline-flex;

  align-items: center;

  justify-content: center;

  gap: 9px;

  min-height: 38px;

  padding: 0 17px;

  border-radius: 100px;

  background: #ffffff;

  color: #111111;

  font-size: 10px;

  font-weight: 700;

  letter-spacing: -0.01em;

  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.08);

  transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.35s cubic-bezier(0.22, 1, 0.36, 1);

  &:hover {
    transform: translateY(-2px) scale(1.025);

    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.2), 0 2px 5px rgba(0, 0, 0, 0.12);
  }

  &:hover span {
    transform: translate(2px, -2px);
  }

  &:active {
    transform: translateY(0) scale(0.98);
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

const Arrow = styled.span`
  display: inline-block;

  font-size: 13px;

  line-height: 1;

  transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1);
`;

const MobileMenuButton = styled.button`
  display: none;

  width: 38px;

  height: 38px;

  align-items: center;

  justify-content: center;

  flex-direction: column;

  gap: 6px;

  border: none;

  border-radius: 50%;

  background: rgba(255, 255, 255, 0.08);

  cursor: pointer;

  transition: transform 0.3s ease, background 0.3s ease;

  &:hover {
    transform: scale(1.05);

    background: rgba(255, 255, 255, 0.12);
  }

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: 900px) {
    display: flex;
  }
`;

const MenuLine = styled.span<{ $open: boolean }>`
  width: 15px;

  height: 1px;

  background: #ffffff;

  transition: transform 0.3s ease, opacity 0.3s ease;

  &:first-child {
    transform: ${({ $open }) =>
      $open ? "translateY(3.5px) rotate(45deg)" : "none"};
  }

  &:last-child {
    transform: ${({ $open }) =>
      $open ? "translateY(-3.5px) rotate(-45deg)" : "none"};
  }
`;

const MobileMenu = styled.div<{ $open: boolean }>`
  display: none;

  @media (max-width: 900px) {
    display: flex;

    position: absolute;

    top: 68px;

    left: 4vw;

    right: 4vw;

    flex-direction: column;

    padding: 10px;

    border: none;

    border-radius: 24px;

    background: rgba(0, 0, 0, 0.96);

    backdrop-filter: blur(25px);

    -webkit-backdrop-filter: blur(25px);

    opacity: ${({ $open }) => ($open ? 1 : 0)};

    transform: ${({ $open }) =>
      $open ? "translateY(0)" : "translateY(-10px)"};

    visibility: ${({ $open }) => ($open ? "visible" : "hidden")};

    pointer-events: ${({ $open }) => ($open ? "auto" : "none")};

    transition: opacity 0.3s ease, transform 0.3s ease, visibility 0.3s ease;
  }
`;

const MobileLink = styled.a`
  width: 100%;

  padding: 14px;

  color: rgba(255, 255, 255, 0.8);

  font-size: 12px;

  font-weight: 500;

  border-radius: 12px;

  transition: background 0.25s ease, color 0.25s ease, padding-left 0.25s ease,
    font-weight 0.25s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.06);

    color: #ffffff;

    font-weight: 700;

    padding-left: 17px;
  }
`;

const MobileCTA = styled.a`
  display: flex;

  align-items: center;

  justify-content: center;

  gap: 10px;

  width: 100%;

  min-height: 46px;

  margin-top: 6px;

  border-radius: 100px;

  background: #ffffff;

  color: #111111;

  font-size: 11px;

  font-weight: 700;

  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.08);

  transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.35s cubic-bezier(0.22, 1, 0.36, 1);

  &:hover {
    transform: translateY(-2px) scale(1.02);

    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.2), 0 2px 5px rgba(0, 0, 0, 0.12);
  }

  &:hover span {
    transform: translate(2px, -2px);
  }

  &:active {
    transform: translateY(0) scale(0.98);
  }
`;
