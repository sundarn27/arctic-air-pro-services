/**
 * Lightweight vanilla Motion (the `motion` package's framework-agnostic core)
 * driven scroll interactions shared by Astro (non-React) components:
 *   - [data-reveal]      scroll-triggered entrance animation
 *   - [data-parallax]    scroll-linked parallax translation
 *
 * Fully respects prefers-reduced-motion and re-initializes after every
 * Astro ClientRouter (view transition) navigation.
 */
import { animate, inView, scroll } from "motion";

function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function initReveal(): void {
  const reduced = prefersReducedMotion();
  const targets = document.querySelectorAll<HTMLElement>("[data-reveal]:not([data-reveal-bound])");

  targets.forEach((el) => {
    el.setAttribute("data-reveal-bound", "true");

    if (reduced) {
      el.style.opacity = "1";
      el.style.transform = "none";
      return;
    }

    const delayAttr = el.getAttribute("data-reveal-delay");
    const delay = delayAttr ? Math.min(Number(delayAttr) * 0.09, 0.45) : 0;

    el.style.opacity = "0";

    inView(
      el,
      () => {
        animate(
          el,
          { opacity: [0, 1], y: [22, 0] },
          { duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] },
        );
      },
      { margin: "0px 0px -10% 0px" },
    );
  });
}

function initParallax(): void {
  if (prefersReducedMotion()) return;

  const layers = document.querySelectorAll<HTMLElement>("[data-parallax]:not([data-parallax-bound])");

  layers.forEach((el) => {
    el.setAttribute("data-parallax-bound", "true");
    const speed = Number(el.getAttribute("data-parallax") ?? "30");
    const container = el.closest<HTMLElement>("[data-parallax-container]") ?? el.parentElement ?? undefined;

    scroll(
      animate(el, { y: [-speed, speed] }, { ease: "linear" }),
      { target: container as HTMLElement | undefined },
    );
  });
}

function init(): void {
  initReveal();
  initParallax();
}

document.addEventListener("astro:page-load", init);
