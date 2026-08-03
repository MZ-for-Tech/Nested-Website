"use client";

import { useState, useEffect } from "react";
import styles from "./TypewriterHeading.module.css";

interface TypewriterHeadingProps {
  phrases: string[]; // each phrase can contain \n for line breaks
  className?: string;
  typingSpeed?: number;  // ms per character
  deletingSpeed?: number;
  pauseAfterType?: number;
  pauseAfterDelete?: number;
}

export default function TypewriterHeading({
  phrases,
  className = "",
  typingSpeed = 55,
  deletingSpeed = 30,
  pauseAfterType = 2200,
  pauseAfterDelete = 400,
}: TypewriterHeadingProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [phase, setPhase] = useState<"typing" | "pausing" | "deleting" | "pause-before-type">("typing");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  // Cursor blink — always on, independent of typing
  useEffect(() => {
    const id = setInterval(() => setShowCursor((v) => !v), 530);
    return () => clearInterval(id);
  }, []);

  // Typewriter state machine
  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];

    if (phase === "typing") {
      if (charIndex < currentPhrase.length) {
        const id = setTimeout(() => {
          setDisplayedText(currentPhrase.slice(0, charIndex + 1));
          setCharIndex((c) => c + 1);
        }, typingSpeed);
        return () => clearTimeout(id);
      } else {
        // Finished typing — pause before deleting
        const id = setTimeout(() => setPhase("deleting"), pauseAfterType);
        return () => clearTimeout(id);
      }
    }

    if (phase === "deleting") {
      if (charIndex > 0) {
        const id = setTimeout(() => {
          setCharIndex((c) => c - 1);
          setDisplayedText(currentPhrase.slice(0, charIndex - 1));
        }, deletingSpeed);
        return () => clearTimeout(id);
      } else {
        // Finished deleting — pause then switch phrase
        const id = setTimeout(() => {
          setPhraseIndex((i) => (i + 1) % phrases.length);
          setPhase("typing");
        }, pauseAfterDelete);
        return () => clearTimeout(id);
      }
    }
  }, [phase, charIndex, phraseIndex, phrases, typingSpeed, deletingSpeed, pauseAfterType, pauseAfterDelete]);

  // Render: split on \n to preserve line breaks
  const lines = displayedText.split("\n");

  return (
    <span className={`${styles.wrapper} ${className}`}>
      {lines.map((line, i) => (
        <span key={i}>
          {line}
          {i < lines.length - 1 && <br />}
        </span>
      ))}
      <span
        className={`${styles.cursor} ${showCursor ? styles.cursorVisible : styles.cursorHidden}`}
        aria-hidden="true"
      >
        |
      </span>
    </span>
  );
}
