const GLITCH_CHARS = "░▒▓█▄▀■□▪▫~@#$%";

export function glitchText(
  element: HTMLElement,
  finalText: string,
  duration: number = 500,
  iterations: number = 8,
) {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  let count = 0;
  const interval = setInterval(() => {
    if (count >= iterations) {
      element.textContent = finalText;
      clearInterval(interval);
      return;
    }
    const progress = count / iterations;
    element.textContent = finalText
      .split("")
      .map((char, i) => {
        if (char === " ") return " ";
        // Chars reveal from right as iterations progress
        if (i > finalText.length * (1 - progress)) return char;
        return GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)];
      })
      .join("");
    count++;
  }, duration / iterations);
}
