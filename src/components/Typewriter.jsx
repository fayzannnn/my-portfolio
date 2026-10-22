import { useEffect, useState } from "react";

export default function Typewriter({ words, speed = 70, pause = 1600 }) {
  const reduced = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const [index, setIndex] = useState(0);
  const [text, setText] = useState(reduced ? words[0] : "");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reduced) return undefined;
    const word = words[index];
    let delay = deleting ? speed / 2 : speed;
    if (!deleting && text === word) delay = pause;
    const timer = setTimeout(() => {
      if (!deleting && text === word) setDeleting(true);
      else if (deleting && text === "") { setDeleting(false); setIndex((index + 1) % words.length); }
      else setText(word.slice(0, text.length + (deleting ? -1 : 1)));
    }, delay);
    return () => clearTimeout(timer);
  }, [text, deleting, index, words, speed, pause, reduced]);

  return <span aria-label={words[0]}>{text}<span className="caret text-cyber" aria-hidden="true">|</span></span>;
}
