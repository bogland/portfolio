import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "../styles/Home.module.scss";
import html2canvas from "html2canvas";

const Home: NextPage = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>();
  const circleRef = useRef<HTMLCanvasElement | null>();
  const [canvasInfo, setCanvasInfo] = useState({ width: 300, height: 300 });
  const onNextClick = async () => {
    if (!circleRef.current) return;
    if (!canvasRef.current) return;
    const canvas = await html2canvas(circleRef?.current);
    if (!canvas) return;
    const ctx = canvasRef.current.getContext("2d");
    document.body.appendChild(canvas);
    canvas.style.display = "none";
    const image = canvas
      .getContext("2d")
      .getImageData(0, 0, canvas.width, canvas.height);
    // ctx.drawImage(image, 0, 0);
    console.log(image);
    ctx.putImageData(image, 0, 0); //drawImage와의 차이 구분필요
    // ctx.scale(canvasInfo.width / image.width, canvasInfo.height / image.height);
    // ctx.drawImage(canvasRef.current, 0, 0);
  };

  const handleResize = () => {
    const { width, height } = circleRef.current;
    setCanvasInfo({ width: 300, height: 300 });
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <header></header>
      <main onClick={onNextClick} className={styles.main}>
        <canvas
          ref={canvasRef}
          id={styles.canvas}
          height={canvasInfo.width}
          width={canvasInfo.height}
        />
        <section ref={circleRef} className={styles.circleWrap}>
          <div className={styles.textWrap}>
            <div className={styles.title}>도구, 그 한계를 넘다.</div>
            <div className={styles.subTitle}>FrontEnd 포트폴리오</div>
          </div>
        </section>
      </main>
      <footer></footer>
    </>
  );
};

export default Home;
