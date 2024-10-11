const CHARS = "abcdefghijklmnopqrstuvwxyz1234567890!@#$^&*()…æ_+-=;[]/~`";

export const scrambleEffect = (element: Element, ms: number) => {
  const originalText = element.textContent?.trim();
  if (!originalText) return;
  const length = originalText.length;
  let currentIndex = 0;

  const scramble = () => {
    if (currentIndex < length) {
      element.textContent = originalText
        .split("")
        .map((char, i) => {
          return i < currentIndex ? char : randomChar();
        })
        .join("");
      currentIndex++;
      setTimeout(scramble, Math.ceil(ms / length));
    } else {
      // Animation Done
      element.textContent = originalText;
    }
  };

  scramble();
};

const randomChar = () => {
  const char = CHARS[Math.floor(Math.random() * CHARS.length)];
  return Math.random() > 0.5 ? char : char.toUpperCase();
};
