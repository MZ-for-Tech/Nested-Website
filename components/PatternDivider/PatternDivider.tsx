import React from 'react';
import styles from './PatternDivider.module.css';
import CircleIcon from '../IconCollage/CircleIcon';
import SquareIcon from '../IconCollage/SquareIcon';
import DotsIcon from '../IconCollage/DotsIcon';
import LinesIcon from '../IconCollage/LinesIcon';
import WavesIcon from '../IconCollage/WavesIcon';
import BowlsIcon from '../IconCollage/BowlsIcon';

export default function PatternDivider() {
  // A longer, less obviously repeating sequence of the 6 existing shapes
  const sequence = [
    CircleIcon,
    SquareIcon,
    DotsIcon,
    LinesIcon,
    WavesIcon,
    BowlsIcon,
    DotsIcon,
    SquareIcon,
    CircleIcon,
    BowlsIcon,
    WavesIcon,
    LinesIcon,
    SquareIcon,
    DotsIcon,
    WavesIcon,
    CircleIcon,
    LinesIcon,
    BowlsIcon,
    WavesIcon,
    CircleIcon,
    SquareIcon,
    DotsIcon,
    BowlsIcon,
    LinesIcon,
  ];

  return (
    <div className={styles.patternContainer}>
      <div className={styles.patternContent}>
        {sequence.map((Comp, idx) => (
          <div key={`shape-${idx}`} className={styles.patternBox}>
            <Comp />
          </div>
        ))}
      </div>
    </div>
  );
}
