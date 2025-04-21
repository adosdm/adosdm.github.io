import { useEffect, useRef } from "react";
import styles from "./MainVisualSection.module.css";
import gsap from "gsap";
import Image from "next/image";

const MainVisualSection = () => {
  const arrowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!arrowRef.current) return;

    gsap.to(arrowRef.current, {
      y: 10,
      repeat: -1,
      yoyo: true,
      duration: 0.8,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.contentWrapper}>
        <h1 className={styles.mainText}>
          프랜차이즈 본사도, 1인 사장님도
          <br />
          운영의 답은 단 하나, 프랜킷
        </h1>
        <p className={styles.subText}>
          매장이 1개든 100개든, 누구나 무료로 시작하는 운영 시스템
        </p>
        <a href="#" className={styles.ctaButton}>
          지금 도입문의
        </a>
      </div>

      <div ref={arrowRef} className={styles.arrowWrapper}>
        <Image
          src="/icon_arrow_down.png"
          alt="Scroll Down"
          width={47}
          height={14}
        />
      </div>
    </section>
  );
};

export default MainVisualSection;
