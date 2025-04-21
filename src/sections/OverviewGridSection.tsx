import { useEffect, useRef } from "react";
import styles from "./OverviewGridSection.module.css";
import gsap from "gsap";
import Image from "next/image";

const boxContents = [
  {
    image: "/box_1.png",
    title: "매장별 운영 현황",
    subtitle: "매장의 일 매출부터 재고 상황까지 한 눈에!",
  },
  {
    image: "/box_2.png",
    title: "실시간 발주 데이터",
    subtitle: "발주 빈도와 수량을 자동으로 집계합니다.",
  },
  {
    image: "/box_3.png",
    title: "정산 및 회계",
    subtitle: "매출, 비용, 세금 등 복잡한 정산도 쉽게!",
  },
  {
    image: "/box_4.png",
    title: "고객 리뷰 분석",
    subtitle: "리뷰 데이터를 기반으로 품질 개선까지",
  },
];

const OverviewGridSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const boxRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
      gsap.registerPlugin(ScrollTrigger);

      boxRefs.current.forEach((box, index) => {
        if (!box) return;
        gsap.fromTo(
          box,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            delay: index * 0.2,
            scrollTrigger: {
              trigger: box,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    });
  }, []);

  return (
    <section className={styles.section} ref={sectionRef}>
      <div className={styles.inner}>
        <div className={styles.badge}>Overview</div>
        <h2 className={styles.title}>
          <span className={styles.fade}>데이터를 활용하여 매장을</span>
          <br />더 편하게, 똑똑하게 관리할 수 있어요
        </h2>
        <p className={styles.subtitle}>
          매장의 모든 정보를 한눈에 확인하고, 더 효율적으로 운영해 보세요.
        </p>

        <div className={styles.grid}>
          {boxContents.map((box, i) => (
            <div
              className={styles.card}
              key={i}
              ref={(el) => {
                if (el) boxRefs.current[i] = el;
              }}
            >
              <Image
                src={box.image}
                alt={box.title}
                width={640}
                height={360}
                className={styles.image}
              />
              <div className={styles.textBox}>
                <h3 className={styles.cardTitle}>{box.title}</h3>
                <p className={styles.cardSubtitle}>{box.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
        <p className={styles.tipText}>*2025 출시예정</p>
      </div>
    </section>
  );
};

export default OverviewGridSection;
