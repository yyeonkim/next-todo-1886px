import styles from "../styles/Home.module.css";

import Head from "next/head";

import Header from "../components/Header";
import Todo from "../components/todo/Todo";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next 투두리스트</title>
      </Head>
      <Header />
      <main className={styles.main}>
        <h1>Welcome to Next</h1>
      </main>
    </div>
  );
}
