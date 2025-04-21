import { useEffect, useRef, useState } from "react";
import styles from "./LaptopSection.module.css";
import gsap from "gsap";

const TOTAL_FRAMES = 600; // 두 바퀴

const LaptopSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;

    import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
      gsap.registerPlugin(ScrollTrigger);

      const frameObj = { value: 0 };

      gsap.to(frameObj, {
        value: TOTAL_FRAMES - 1,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "500 top",
          end: "+=3000",
          scrub: true,
          onUpdate: () => {
            const displayFrame = frameObj.value % 300;
            setFrame(Math.floor(displayFrame));
          },
        },
      });
    });
  }, []);

  return (
    <section className={styles.section} ref={sectionRef}>
      <div className={styles.content}>
        <h2 className={styles.title}>프랜킷 전용몰로</h2>
        <div className={styles.laptopImage}>
          <img
            src={`/360/0__Camera 1_${String(frame).padStart(5, "0")}.jpg`}
            alt={`Laptop Frame ${frame}`}
            width={770}
            height={460}
            className={styles.img}
            loading="eager"
            draggable={false}
          />
        </div>
        <h3 className={styles.subtext}>고민 끝.</h3>
      </div>
    </section>
  );
};

export default LaptopSection;
