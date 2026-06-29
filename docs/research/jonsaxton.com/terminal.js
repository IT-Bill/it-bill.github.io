/**
 * Terminal Portfolio - Interactive Effects
 * ========================================
 * Typing animations, cursor effects, and terminal interactions
 */

(function() {
  'use strict';

  // ==========================================================================
  // Configuration
  // ==========================================================================
  
  const CONFIG = {
    typeSpeed: 50,        // ms per character
    typeSpeedFast: 25,    // ms per character (fast mode)
    cursorBlinkSpeed: 530, // ms
    bootDelay: 200,       // ms between boot lines
    scrollOffset: 80,     // px offset for fixed nav
  };

  // ==========================================================================
  // Typing Animation
  // ==========================================================================
  
  class TypeWriter {
    constructor(element, options = {}) {
      this.element = element;
      this.text = options.text || element.textContent;
      this.speed = options.speed || CONFIG.typeSpeed;
      this.cursor = options.cursor !== false;
      this.onComplete = options.onComplete || (() => {});
      this.index = 0;
      this.cursorElement = null;
    }

    start() {
      this.element.textContent = '';
      this.element.style.visibility = 'visible';
      
      if (this.cursor) {
        this.cursorElement = document.createElement('span');
        this.cursorElement.className = 'cursor';
        this.element.appendChild(this.cursorElement);
      }
      
      this.type();
      return this;
    }

    type() {
      if (this.index < this.text.length) {
        const char = this.text.charAt(this.index);
        
        if (this.cursorElement) {
          this.element.insertBefore(
            document.createTextNode(char),
            this.cursorElement
          );
        } else {
          this.element.textContent += char;
        }
        
        this.index++;
        
        // Variable speed for more natural typing
        let delay = this.speed;
        if (char === '.' || char === ',' || char === '!') {
          delay *= 3;
        } else if (char === ' ') {
          delay *= 0.5;
        }
        
        setTimeout(() => this.type(), delay);
      } else {
        this.complete();
      }
    }

    complete() {
      this.element.classList.add('typing-complete');
      this.onComplete();
    }

    removeCursor() {
      if (this.cursorElement) {
        this.cursorElement.remove();
        this.cursorElement = null;
      }
    }
  }

  // ==========================================================================
  // Boot Sequence Animation
  // ==========================================================================
  
  class BootSequence {
    constructor(container) {
      this.container = container;
      this.lines = container.querySelectorAll('.status-line');
    }

    async start() {
      for (let i = 0; i < this.lines.length; i++) {
        await this.showLine(this.lines[i], i * CONFIG.bootDelay);
      }
    }

    showLine(line, delay) {
      return new Promise(resolve => {
        setTimeout(() => {
          line.style.opacity = '1';
          line.style.transform = 'translateY(0)';
          resolve();
        }, delay);
      });
    }
  }

  // ==========================================================================
  // Smooth Scroll with Offset
  // ==========================================================================
  
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;

        window.haptics?.trigger('nudge');
        e.preventDefault();
        const target = document.querySelector(href);
        
        if (target) {
          const nav = document.querySelector('.term-nav');
          const navHeight = nav ? nav.offsetHeight : 0;
          const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight - 20;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });

          // Update URL without jumping
          history.pushState(null, null, href);
        }
      });
    });
  }

  // ==========================================================================
  // Intersection Observer for Animations
  // ==========================================================================
  
  function initScrollAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          
          // Trigger stagger animations
          const staggerItems = entry.target.querySelectorAll('.stagger-in > *');
          staggerItems.forEach((item, index) => {
            item.style.animationDelay = `${index * 0.1}s`;
            item.style.opacity = '1';
          });
        }
      });
    }, observerOptions);

    document.querySelectorAll('.term-section, .term-window').forEach(el => {
      observer.observe(el);
    });
  }

  // ==========================================================================
  // Terminal Input Simulation
  // ==========================================================================
  
  function initTerminalInput() {
    // Simulate terminal input on prompt click
    document.querySelectorAll('.prompt').forEach(prompt => {
      prompt.style.cursor = 'text';
      
      prompt.addEventListener('click', function() {
        const cursor = this.querySelector('.cursor');
        if (cursor) {
          cursor.classList.add('active');
        }
      });
    });
  }

  // ==========================================================================
  // Easter Eggs
  // ==========================================================================
  
  function initEasterEggs() {
    // Konami Code
    let konamiCode = [];
    const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 
                           'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 
                           'b', 'a'];
    
    document.addEventListener('keydown', (e) => {
      konamiCode.push(e.key);
      konamiCode = konamiCode.slice(-10);
      
      if (konamiCode.join(',') === konamiSequence.join(',')) {
        window.haptics?.trigger('buzz');
        activateMatrixMode();
      }
    });

    // ASCII art click glitch
    const ascii = document.querySelector('.ascii-art');
    if (ascii) {
      let clickCount = 0;
      let clickTimer;
      
      ascii.addEventListener('click', () => {
        clickCount++;
        clearTimeout(clickTimer);

        if (clickCount >= 5) {
          window.haptics?.trigger('buzz');
          triggerGlitch(ascii);
          clickCount = 0;
        }
        
        clickTimer = setTimeout(() => clickCount = 0, 500);
      });
    }

  }

  function triggerGlitch(element) {
    element.style.animation = 'glitch 0.1s 5';
    setTimeout(() => {
      element.style.animation = 'glow-pulse 4s ease-in-out infinite';
    }, 500);
  }

  function activateMatrixMode() {
    document.body.classList.add('matrix-mode');
    
    // Create matrix rain effect
    const canvas = document.createElement('canvas');
    canvas.id = 'matrix-rain';
    canvas.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 10000;
      opacity: 0.1;
    `;
    document.body.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()';
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);
    
    function draw() {
      ctx.fillStyle = 'rgba(10, 10, 10, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.fillStyle = '#00ff41';
      ctx.font = fontSize + 'px JetBrains Mono';
      
      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(char, i * fontSize, drops[i] * fontSize);
        
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }
    
    const matrixInterval = setInterval(draw, 33);
    
    // Stop after 5 seconds
    setTimeout(() => {
      clearInterval(matrixInterval);
      canvas.remove();
      document.body.classList.remove('matrix-mode');
    }, 5000);
  }


  // ==========================================================================
  // CRT Flicker Effect (subtle)
  // ==========================================================================
  
  function initCRTEffects() {
    // Random subtle flicker - very subtle, only affects text glow
    setInterval(() => {
      if (Math.random() > 0.995) {
        const page = document.querySelector('.terminal-page');
        if (page) {
          page.style.opacity = '0.99';
          setTimeout(() => {
            page.style.opacity = '1';
          }, 30);
        }
      }
    }, 200);
  }

  // ==========================================================================
  // Project Card Interactions
  // ==========================================================================
  
  function initProjectCards() {
    const cards = document.querySelectorAll('.project-card');
    
    cards.forEach(card => {
      card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateX(4px)';
      });
      
      card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateX(0)';
      });
    });
  }

  // ==========================================================================
  // File Entry Hover with Image Preview
  // ==========================================================================
  
  function initFileEntries() {
    const entries = document.querySelectorAll('.file-entry');
    let hoverTimeout;
    let currentHoveredEntry = null;
    
    entries.forEach(entry => {
      const preview = entry.querySelector('.file-entry__preview');
      const previewImg = entry.querySelector('.file-entry__preview-img');
      const previewLoading = entry.querySelector('.file-entry__preview-loading');
      
      entry.addEventListener('mouseenter', function() {
        // Add a brief highlight effect
        this.style.background = 'rgba(0, 255, 65, 0.1)';
        
        // Set current hovered entry
        currentHoveredEntry = this;
        
        // Delay before showing preview (feel like loading)
        hoverTimeout = setTimeout(() => {
          if (currentHoveredEntry === this && preview) {
            preview.style.opacity = '1';
            
            // Reset image animation
            if (previewImg) {
              previewImg.style.animation = 'none';
              // Force reflow
              void previewImg.offsetWidth;
              previewImg.style.animation = '';
            }
            
            // Add random glitch bursts
            scheduleRandomGlitches(previewImg, 3);
          }
        }, 150);
      });
      
      entry.addEventListener('mouseleave', function() {
        this.style.background = '';
        currentHoveredEntry = null;
        clearTimeout(hoverTimeout);
        
        // Hide preview
        if (preview) {
          preview.style.opacity = '0';
        }
        
        // Reset animations
        if (previewImg) {
          previewImg.style.animation = 'none';
        }
        if (previewLoading) {
          previewLoading.style.opacity = '1';
        }
      });
    });
  }
  
  // Schedule random glitch effects during hover
  function scheduleRandomGlitches(imgElement, count) {
    if (!imgElement) return;
    
    for (let i = 0; i < count; i++) {
      const delay = 1000 + Math.random() * 2000;
      setTimeout(() => {
        triggerImageGlitch(imgElement);
      }, delay);
    }
  }
  
  // Trigger a brief glitch effect on an image
  function triggerImageGlitch(imgElement) {
    if (!imgElement) return;
    
    const originalTransform = imgElement.style.transform || '';
    const glitchDirection = Math.random() > 0.5 ? 1 : -1;
    const glitchAmount = Math.random() * 4 + 2;
    
    // Glitch shift
    imgElement.style.transform = `translateX(${glitchDirection * glitchAmount}px)`;
    imgElement.style.filter = `
      grayscale(0.3)
      contrast(1.1)
      brightness(0.9)
      hue-rotate(${Math.random() * 30 - 15}deg)
    `;
    
    // Reset after brief moment
    setTimeout(() => {
      imgElement.style.transform = originalTransform;
      imgElement.style.filter = 'grayscale(0.3) contrast(1.1) brightness(0.9)';
    }, 50 + Math.random() * 50);
  }

  // ==========================================================================
  // Keyboard Navigation - ENTER/Y to next section
  // ==========================================================================
  
  function initKeyboardNavigation() {
    const sections = ['hero', 'about', 'projects', 'contact'];
    let isNavigating = false;
    
    function getCurrentSection() {
      const scrollPosition = window.pageYOffset + window.innerHeight / 2;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const rect = section.getBoundingClientRect();
          const sectionTop = rect.top + window.pageYOffset;
          
          if (scrollPosition >= sectionTop) {
            return i;
          }
        }
      }
      
      return 0; // Default to first section
    }
    
    function scrollToNextSection() {
      if (isNavigating) return;
      
      // Don't navigate if user is typing in an input/textarea
      const activeElement = document.activeElement;
      if (activeElement && (
        activeElement.tagName === 'INPUT' ||
        activeElement.tagName === 'TEXTAREA' ||
        activeElement.isContentEditable
      )) {
        return;
      }
      
      isNavigating = true;
      const currentIndex = getCurrentSection();
      const nextIndex = Math.min(currentIndex + 1, sections.length - 1);
      const nextSectionId = sections[nextIndex];
      const target = document.getElementById(nextSectionId);
      
      if (target) {
        const nav = document.querySelector('.term-nav');
        const navHeight = nav ? nav.offsetHeight : 0;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight - 20;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
        
        // Update URL
        history.pushState(null, null, `#${nextSectionId}`);
      }
      
      // Prevent rapid navigation
      setTimeout(() => {
        isNavigating = false;
      }, 500);
    }
    
    document.addEventListener('keydown', (e) => {
      // Check for ENTER or Y key (case insensitive)
      if (e.key === 'Enter' || e.key === 'y' || e.key === 'Y') {
        // Don't trigger if user is typing in an input/textarea
        const activeElement = document.activeElement;
        if (activeElement && (
          activeElement.tagName === 'INPUT' ||
          activeElement.tagName === 'TEXTAREA' ||
          activeElement.isContentEditable
        )) {
          return;
        }
        
        e.preventDefault();
        window.haptics?.trigger('nudge');
        scrollToNextSection();
      }
    });
  }

  // ==========================================================================
  // Haptic Feedback for Links
  // ==========================================================================

  function initHapticFeedback() {
    // External project links → success pattern (satisfying "launch" feel)
    document.querySelectorAll('.project-card__link').forEach(link => {
      link.addEventListener('click', () => window.haptics?.trigger('success'));
    });

    // Nav/back/social links → nudge pattern
    document.querySelectorAll('.term-link').forEach(link => {
      link.addEventListener('click', () => window.haptics?.trigger('nudge'));
    });

    // File entry taps (mobile — mouseenter doesn't fire on touch)
    document.querySelectorAll('.file-entry').forEach(entry => {
      entry.addEventListener('click', () => window.haptics?.trigger('nudge'));
    });
  }

  // ==========================================================================
  // Initialize Everything
  // ==========================================================================
  
  function init() {
    // Wait for DOM
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initAll);
    } else {
      initAll();
    }
  }

  function initAll() {
    initSmoothScroll();
    initScrollAnimations();
    initTerminalInput();
    initKeyboardNavigation();
    initEasterEggs();
    initCRTEffects();
    initProjectCards();
    initFileEntries();
    initHapticFeedback();
    
    // Start boot sequence if present
    const bootContainer = document.querySelector('.hero-status');
    if (bootContainer) {
      new BootSequence(bootContainer);
    }
    
    console.log('%c[SYSTEM] Terminal portfolio loaded successfully', 'color: #00ff41');
    console.log('%c', 'color: #00ff41; font-family: monospace;');
    console.log('%c╔════════════════════════════════════════════╗', 'color: #00ff41; font-family: monospace;');
    console.log('%c║           AVAILABLE COMMANDS               ║', 'color: #00ff41; font-family: monospace;');
    console.log('%c╠════════════════════════════════════════════╣', 'color: #00ff41; font-family: monospace;');
    console.log('%c║  ENTER or Y - Navigate to next section    ║', 'color: #00ff41; font-family: monospace;');
    console.log('%c║  ↑↑↓↓←→←→BA - Konami Code                  ║', 'color: #00ff41; font-family: monospace;');
    console.log('%c║  Click ASCII art 5x - Glitch effect        ║', 'color: #00ff41; font-family: monospace;');
    console.log('%c╚════════════════════════════════════════════╝', 'color: #00ff41; font-family: monospace;');
  }

  // Export for potential external use
  window.TerminalPortfolio = {
    TypeWriter,
    BootSequence,
    init,
    triggerGlitch,
    activateMatrixMode
  };

  // Auto-initialize
  init();

})();

