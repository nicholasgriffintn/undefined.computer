import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Undefined Computer</title>
        <meta name="description" content="Website from Nicholas Griffin" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Undefined Computer</h1>
        <pre>{`
             _______
            |.-----.|
            ||x . x||
            ||_.-._||
            \`--)-(--\`
          __[=== o]___
          |:::::::::::|
          \`-=========-\`()
        `}</pre>
      </main>
    </div>
  );
}
