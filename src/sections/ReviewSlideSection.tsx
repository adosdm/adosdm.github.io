import styles from "./ReviewSlideSection.module.css";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Swiper as SwiperClass } from "swiper/types";
import { useState, useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";

const DUMMY_SLIDES = [
  {
    category: "인터뷰",
    title: "프랜차이즈 성장을 위한 꿀팁, 무료로 전용몰 만드는 방법 소개!",
    subtitle: "괴짜푸드 컴퍼니 대표님 인터뷰",
    image: "/review_slide_sample.png",
    link: "https://example.com/video1",
  },
  {
    category: "현장리뷰",
    title: "단 3일 만에 물류 정리 끝! 운영자가 말하는 프랜킷 도입 후기",
    subtitle: "매드버거 이OO 대표 인터뷰",
    image: "/review_slide_sample.png",
    link: "https://example.com/video2",
  },
  {
    category: "경험담",
    title: "초보 사장님도 OK! 프랜킷과 함께한 첫 창업 이야기",
    subtitle: "오픈잇카페 강OO 대표 인터뷰",
    image: "/review_slide_sample.png",
    link: "https://example.com/video3",
  },
  {
    category: "성장스토리",
    title: "하루 1건에서 50건까지! 프랜킷 도입 후의 변화",
    subtitle: "육회한연어 김OO 대표 인터뷰",
    image: "/review_slide_sample.png",
    link: "https://example.com/video4",
  },
];

const ReviewSlideSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperClass | null>(null);

  const handleSlideChange = (swiper: SwiperClass) => {
    setActiveIndex(swiper.realIndex);
  };

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.leftArea}>
          <div className={styles.badge}>Review</div>
          <h2 className={styles.title}>
            <span className={styles.fade}>프랜킷이 다 하니까,</span>
            <br />
            혼자서도 충분하게
          </h2>
          <p className={styles.subtitle}>
            제품 소싱부터 물류, CS까지, 대표자 1명으로도 안정적인 운영
          </p>
          <div className={styles.progressWrap}>
            <div className={styles.progressBarContainer}>
              <div
                className={styles.progressBar}
                style={{
                  width: `${((activeIndex + 1) / DUMMY_SLIDES.length) * 100}%`,
                }}
              ></div>
            </div>
            <div className={styles.pageControl}>
              <div className={styles.pageNumber}>
                {activeIndex + 1}
                <span>|{DUMMY_SLIDES.length}</span>
              </div>
              <div className={styles.navButtons}>
                <button onClick={() => swiperRef.current?.slidePrev()}>
                  &lt;
                </button>
                <button onClick={() => swiperRef.current?.slideNext()}>
                  &gt;
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.sliderWrap}>
          <Swiper
            spaceBetween={24}
            slidesPerView="auto"
            centeredSlides={false}
            loop={false}
            onSlideChange={handleSlideChange}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            modules={[Navigation]}
          >
            {DUMMY_SLIDES.map((slide, i) => (
              <SwiperSlide key={i} className={styles.slideItem}>
                <div className={styles.slide}>
                  <div className={styles.imageWrapper}>
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      className={styles.image}
                    />
                    <div className={styles.overlayContent}>
                      <div className={styles.category}>{slide.category}</div>
                      <div className={styles.slideTitle}>{slide.title}</div>
                      <div className={styles.slideSub}>{slide.subtitle}</div>
                      <a
                        href={slide.link}
                        className={styles.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        영상 보러가기 &gt;
                      </a>
                    </div>
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

export default ReviewSlideSection;
