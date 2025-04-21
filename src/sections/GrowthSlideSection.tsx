import styles from "./GrowthSlideSection.module.css";
import { useState, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperClass } from "swiper/types";
import "swiper/css";

const STAGES = ["탄생", "초창기", "성장기", "성숙기"];

const DUMMY_SLIDES = [
  {
    category: "프랜차이즈 성장기",
    title: (
      <>
        신규 프랜차이즈를 위한
        <br />
        정보공개서 작성
      </>
    ),
    subtitle: "신규 프랜차이즈를 위한 서비스",
    image: "/solution_slide_sample.png",
  },
  {
    category: "현장리뷰",
    title: (
      <>
        단 3일 만에 물류 정리 끝!
        <br />
        운영자가 말하는 프랜킷 도입 후기
      </>
    ),
    subtitle: "매드버거 이OO 대표 인터뷰",
    image: "/solution_slide_sample.png",
  },
  {
    category: "경험담",
    title: (
      <>
        초보 사장님도 OK!
        <br />
        프랜킷과 함께한 첫 창업 이야기
      </>
    ),
    subtitle: "오픈잇카페 강OO 대표 인터뷰",
    image: "/solution_slide_sample.png",
  },
  {
    category: "성장스토리",
    title: (
      <>
        하루 1건에서 50건까지!
        <br />
        프랜킷 도입 후의 변화
      </>
    ),
    subtitle: "육회한연어 김OO 대표 인터뷰",
    image: "/solution_slide_sample.png",
  },
];

const GrowthSlideSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperClass | null>(null);

  return (
    <section className={styles.section}>
      <div className={styles.topWrap}>
        <div className={styles.leftText}>
          <div className={styles.badge}>Solution</div>
          <h2 className={styles.title}>
            <span className={styles.fade}>
              프랜차이즈의 탄생부터 성숙기까지,
            </span>
            <br />
            성공의 모든 순간을 함께합니다.
          </h2>
        </div>
        <div className={styles.rightText}>
          프랜차이즈 사업 성공의 필수 인력인{" "}
          <span className={styles.emphasis}>
            가맹거래사와의 전략적 파트너십으로
          </span>{" "}
          브랜드 설립부터 안정적인 성장까지 철저히 지원합니다. 풍부한 경험과
          검증된 노하우로 창업자의 비전을 현실로 만들어 드리는 든든한 파트너가
          되겠습니다.
        </div>
      </div>

      <div className={styles.bottomWrap}>
        <div className={styles.graphContainer}>
          <Image
            src="/grap_1.png"
            alt="그래프 배경"
            width={400}
            height={280}
            className={styles.graphBg}
          />
          <div className={styles.graphButtons}>
            {STAGES.map((label, i) => (
              <button
                key={i}
                className={`${styles.graphButton} ${
                  i === activeIndex ? styles.active : ""
                }`}
                onClick={() => {
                  setActiveIndex(i);
                  swiperRef.current?.slideTo(i);
                }}
              >
                <span className={styles.label}>{label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className={styles.slideWrap}>
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          >
            {DUMMY_SLIDES.map((slide, i) => (
              <SwiperSlide key={i}>
                <div className={styles.slideCard}>
                  <Image
                    src={slide.image}
                    alt={
                      typeof slide.title === "string"
                        ? slide.title
                        : `슬라이드 ${i + 1}`
                    }
                    fill
                    className={styles.backgroundImage}
                  />
                  <div className={styles.overlayContent}>
                    <div className={styles.category}>{slide.category}</div>
                    <div className={styles.slideTitle}>{slide.title}</div>
                    <div className={styles.slideSub}>{slide.subtitle}</div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default GrowthSlideSection;
