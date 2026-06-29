"use client";

import { useEffect } from "react";

const sectionIds = ["hero", "about", "projects", "contact"] as const;
const konamiSequence = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

declare global {
  interface Window {
    __terminalEffectsLoaded?: boolean;
  }
}

function isTypingTarget(element: Element | null) {
  return (
    element instanceof HTMLInputElement ||
    element instanceof HTMLTextAreaElement ||
    (element instanceof HTMLElement && element.isContentEditable)
  );
}

function scrollToSection(target: Element, hash: string) {
  const nav = document.querySelector<HTMLElement>(".term-nav");
  const navHeight = nav?.offsetHeight ?? 0;
  const top = target.getBoundingClientRect().top + window.scrollY - navHeight - 20;

  window.scrollTo({ top, behavior: "smooth" });
  history.pushState(null, "", hash);
}

export function TerminalEffects() {
  useEffect(() => {
    window.__terminalEffectsLoaded = true;

    const controller = new AbortController();
    const { signal } = controller;
    const matrixIntervals: number[] = [];
    const matrixTimeouts: number[] = [];

    document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener(
        "click",
        (event) => {
          const href = anchor.getAttribute("href");
          if (!href || href === "#") {
            return;
          }

          const target = document.querySelector(href);
          if (!target) {
            return;
          }

          event.preventDefault();
          scrollToSection(target, href);
        },
        { signal },
      );
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("is-visible");
          entry.target.querySelectorAll<HTMLElement>(".stagger-in > *").forEach((item, index) => {
            item.style.animationDelay = `${index * 0.1}s`;
            item.style.opacity = "1";
          });
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );

    document.querySelectorAll(".term-section, .term-window").forEach((element) => {
      observer.observe(element);
    });

    let isNavigating = false;
    function getCurrentSectionIndex() {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (let index = sectionIds.length - 1; index >= 0; index -= 1) {
        const section = document.getElementById(sectionIds[index]);
        if (!section) {
          continue;
        }

        const sectionTop = section.getBoundingClientRect().top + window.scrollY;
        if (scrollPosition >= sectionTop) {
          return index;
        }
      }

      return 0;
    }

    function scrollToNextSection() {
      if (isNavigating || isTypingTarget(document.activeElement)) {
        return;
      }

      isNavigating = true;
      const nextIndex = Math.min(getCurrentSectionIndex() + 1, sectionIds.length - 1);
      const target = document.getElementById(sectionIds[nextIndex]);
      if (target) {
        scrollToSection(target, `#${sectionIds[nextIndex]}`);
      }

      window.setTimeout(() => {
        isNavigating = false;
      }, 500);
    }

    let konamiKeys: string[] = [];
    function activateMatrixMode() {
      const canvas = document.createElement("canvas");
      canvas.id = "matrix-rain";
      canvas.className = "matrix-rain";
      document.body.appendChild(canvas);

      const context = canvas.getContext("2d");
      if (!context) {
        canvas.remove();
        return;
      }

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()";
      const fontSize = 14;
      const drops = Array.from({ length: Math.floor(canvas.width / fontSize) }, () => 1);

      const interval = window.setInterval(() => {
        context.fillStyle = "rgba(10, 10, 10, 0.05)";
        context.fillRect(0, 0, canvas.width, canvas.height);
        context.fillStyle = "#00ff41";
        context.font = `${fontSize}px SF Mono`;

        drops.forEach((drop, index) => {
          const char = chars[Math.floor(Math.random() * chars.length)];
          context.fillText(char, index * fontSize, drop * fontSize);

          if (drop * fontSize > canvas.height && Math.random() > 0.975) {
            drops[index] = 0;
          }

          drops[index] += 1;
        });
      }, 33);

      const timeout = window.setTimeout(() => {
        window.clearInterval(interval);
        canvas.remove();
      }, 5000);

      matrixIntervals.push(interval);
      matrixTimeouts.push(timeout);
    }

    document.addEventListener(
      "keydown",
      (event) => {
        if ((event.key === "Enter" || event.key === "y" || event.key === "Y") && !isTypingTarget(document.activeElement)) {
          event.preventDefault();
          scrollToNextSection();
        }

        konamiKeys = [...konamiKeys, event.key].slice(-konamiSequence.length);
        if (konamiKeys.join(",") === konamiSequence.join(",")) {
          activateMatrixMode();
        }
      },
      { signal },
    );

    const ascii = document.querySelector<HTMLElement>(".ascii-art");
    let asciiClicks = 0;
    let asciiClickTimer = 0;
    ascii?.addEventListener(
      "click",
      () => {
        asciiClicks += 1;
        window.clearTimeout(asciiClickTimer);

        if (asciiClicks >= 5) {
          ascii.classList.add("ascii-art--glitching");
          window.setTimeout(() => ascii.classList.remove("ascii-art--glitching"), 500);
          asciiClicks = 0;
        }

        asciiClickTimer = window.setTimeout(() => {
          asciiClicks = 0;
        }, 500);
      },
      { signal },
    );

    const flickerInterval = window.setInterval(() => {
      if (Math.random() > 0.995) {
        const page = document.querySelector<HTMLElement>(".terminal-page");
        if (!page) {
          return;
        }

        page.style.opacity = "0.99";
        window.setTimeout(() => {
          page.style.opacity = "1";
        }, 30);
      }
    }, 200);

    return () => {
      controller.abort();
      observer.disconnect();
      window.clearInterval(flickerInterval);
      window.clearTimeout(asciiClickTimer);
      matrixIntervals.forEach((interval) => window.clearInterval(interval));
      matrixTimeouts.forEach((timeout) => window.clearTimeout(timeout));
      document.getElementById("matrix-rain")?.remove();
      window.__terminalEffectsLoaded = false;
    };
  }, []);

  return <span hidden data-terminal-effects />;
}
