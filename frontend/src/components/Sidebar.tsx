import { NextRouter, useRouter } from 'next/router';
import styles from '../styles/Sidebar.module.css';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Sidebar() {
  const sidebarOptions: string[] = ['Home', 'My Posts', 'Create Post'];
  const router: NextRouter = useRouter();
  const [selectedPath, setSelectedPath] = useState<string>('');

  useEffect(() => {
    setSelectedPath(router.pathname);
  }, [router.pathname]);

  return (
    <nav className={styles.sidebar}>
      {sidebarOptions.map((title: string, index: number) => {
        const pathCaseTitle: string =
          title === 'Home' ? '' : title.toLowerCase().replace(' ', '-');
        const isOptionSelected: boolean = selectedPath === `/${pathCaseTitle}`;
        return (
          <div
            key={index}
            className={
              isOptionSelected
                ? `${styles.optionHolder} ${styles.selectedOption}`
                : styles.optionHolder
            }
          >
            <Link className={styles.optionText} href={`/${pathCaseTitle}`}>
              <span>{title}</span>
            </Link>
          </div>
        );
      })}
    </nav>
  );
}
