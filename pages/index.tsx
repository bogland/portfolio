import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <header></header>
      <main>
        <section className={styles.main_section}></section>
      </main>
      <footer></footer>
    </>
  );
};

export default Home;
