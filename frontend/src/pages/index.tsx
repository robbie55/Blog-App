import Head from 'next/head';
import Image from 'next/image';
import localFont from 'next/font/local';
import styles from '@/styles/Home.module.css';
import { useState } from 'react';

export default function Home() {
  const [price, setPrice] = useState('0.00');

  return (
    <div>
      <div>
        <span>Crypto Price</span>
      </div>
      <div>
        <span>{price}</span>
      </div>
    </div>
  );
}
