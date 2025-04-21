import { useEffect, useRef } from "react";
import styles from "./OverviewSection.module.css";
import gsap from "gsap";

const OverviewSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const ballRef = useRef<HTMLDivElement>(null);
  const trail1Ref = useRef<HTMLDivElement>(null);
  const trail2Ref = useRef<HTMLDivElement>(null);
  const trail3Ref = useRef<HTMLDivElement>(null);
  const trail4Ref = useRef<HTMLDivElement>(null);
  const boxesRef = useRef<(HTMLDivElement | null)[]>([]);
  const bounceRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
      gsap.registerPlugin(ScrollTrigger);

      const currentY = 0;
      let previousY1 = 0;
      let previousY2 = 0;
      let previousY3 = 0;
      let previousY4 = 0;

      gsap.set(ballRef.current, { y: currentY });
      gsap.set(trail1Ref.current, { y: previousY1, opacity: 0.5 });
      gsap.set(trail2Ref.current, { y: previousY2, opacity: 0.4 });
      gsap.set(trail3Ref.current, { y: previousY3, opacity: 0.3 });
      gsap.set(trail4Ref.current, { y: previousY4, opacity: 0.2 });

      bounceRef.current = gsap.to(ballRef.current, {
        y: 100,
        duration: 0.4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(
        {},
        {
          duration: 2,
          repeat: -1,
          yoyo: true,
          onUpdate: function () {
            const newY = gsap.getProperty(ballRef.current, "y") as number;

            previousY1 += (newY - previousY1) * 0.25;
            previousY2 += (newY - previousY2) * 0.1;
            previousY3 += (newY - previousY3) * 0.125;
            previousY4 += (newY - previousY4) * 0.2;

            gsap.set(trail1Ref.current, { y: previousY1 });
            gsap.set(trail2Ref.current, { y: previousY2 });
            gsap.set(trail3Ref.current, { y: previousY3 });
            gsap.set(trail4Ref.current, { y: previousY4 });
          },
          ease: "none",
        }
      );

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "center center",
        onEnter: () => {
          bounceRef.current?.kill();

          gsap.to(ballRef.current, {
            y: 0,
            duration: 0.2,
            ease: "power1.out",
            onComplete: () => {
              gsap.to(ballRef.current, {
                y: -150,
                scale: 3,
                duration: 1,
                ease: "power2.out",
                onComplete: () => {
                  gsap.to(ballRef.current, {
                    y: 800,
                    opacity: 1,
                    scale: 10,
                    duration: 1,
                    ease: "power2.in",
                  });

                  const trails = [trail1Ref, trail2Ref, trail3Ref, trail4Ref];
                  trails.forEach((ref) => {
                    if (!ref.current) return;
                    gsap.to(ref.current, {
                      y: 800,
                      opacity: 1,
                      scale: 10,
                      duration: 1,
                      ease: "power2.in",
                    });
                  });
                },
              });
            },
          });

          boxesRef.current.forEach((box, i) => {
            if (!box) return;
            gsap.to(box, {
              y: 200 + i * 20,
              opacity: 0,
              duration: 1,
              delay: i * 0.1,
              ease: "power3.in",
            });
          });
        },
        onLeaveBack: () => {
          gsap.set(ballRef.current, {
            y: 0,
            scale: 1,
            opacity: 1,
          });

          bounceRef.current = gsap.to(ballRef.current, {
            y: 100,
            duration: 0.4,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });

          const trails = [trail1Ref, trail2Ref, trail3Ref, trail4Ref];
          trails.forEach((ref, i) => {
            if (!ref.current) return;
            gsap.set(ref.current, {
              y: 0,
              scale: 1,
              opacity: 0.2 - i * 0.1,
            });
          });

          boxesRef.current.forEach((box) => {
            if (!box) return;
            gsap.set(box, {
              y: 0,
              opacity: 1,
            });
          });
        },
      });
    });
  }, []);

  const boxTexts = [
    "구매, 배송에 대한 CS의 어려움",
    "흩어진 발주처 관리의 복잡한 현실",
    "브랜딩 상품 제작부터 보관의 불품 부담",
    "냉정한 외식업 시장의 현실",
    "품목 마다 다른 발주처",
    "미수금 관리의 반복 업무에 소모되는 시간",
    "수기로 관리하는 매장 관리의 한계",
    "많은 주문/ 관리에 대한 어려움",
  ];

  const centerText = "냉정한 외식업 시장의 현실";

  return (
    <section className={styles.section} ref={sectionRef}>
      <div className={styles.content}>
        <div className={styles.inner}>
          <div className={styles.badge}>Overview</div>

          <h2 className={styles.title}>
            <span className={styles.fade}>복잡한 발주&운영 고민, </span>
            <br />
            아직도 혼자 해결하려 하시나요?
          </h2>

          <p className={styles.subtitle}>
            발주부터 리뷰, 재고관리까지
            <br />
            시스템 없이 버티는 운영, 점점 한계에 가까워지고 있습니다.
          </p>

          <div className={styles.ballWrapper}>
            <div
              className={`${styles.ball} ${styles.trail1}`}
              ref={trail1Ref}
            />
            <div
              className={`${styles.ball} ${styles.trail2}`}
              ref={trail2Ref}
            />
            <div
              className={`${styles.ball} ${styles.trail3}`}
              ref={trail3Ref}
            />
            <div
              className={`${styles.ball} ${styles.trail4}`}
              ref={trail4Ref}
            />
            <div className={styles.ball} ref={ballRef} />
          </div>

          <div className={styles.wall}>
            {boxTexts.map((text, i) => (
              <div
                key={i}
                ref={(el) => {
                  boxesRef.current[i] = el;
                }}
                className={`${styles.box} ${
                  text === centerText ? styles.center : styles[`box${i + 1}`]
                }`}
              >
                {text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
