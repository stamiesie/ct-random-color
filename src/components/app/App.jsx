import React from 'react';
import RandomColor from './containers/RandomColor';
import styles from '/src/styles.css';

export default function App() {
  return (
    <div className={styles.parent}>
  <RandomColor />
  <RandomColor />
  <RandomColor />
  <RandomColor />
  <RandomColor />
  <RandomColor />
  <RandomColor />
  <RandomColor />
  <RandomColor />
    </div>
  )
}
