import styles from "./SolutionSection.module.css";

const SolutionSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.badge}>Solution</div>

        <h2 className={styles.title}>
          발주 전용 쇼핑몰, 상품 제작, 주문 데이터 관리까지.
          <br />
          프랜킷 전용물은 당신의 운영을 진짜 &#39;시스템&#39;으로 만듭니다.
        </h2>

        <div className={styles.slideTopBar}>
          <div className={styles.progressContainer}>
            <div className={styles.progressBar}></div>
          </div>
          <div className={styles.pageInfo}>
            2<span className={styles.total}>|6</span>
          </div>
          <div className={styles.slideControls}>
            <button className={styles.arrowBtn}>{"<"}</button>
            <button className={styles.arrowBtn}>{">"}</button>
          </div>
        </div>

        <div className={styles.subtitleWrap}>
          <span className={styles.subtitle}>
            브랜드 맞춤상품 제작 (디자인/소량 제작 가능)
          </span>
          <span className={styles.subBadge}>프랜차이즈 전용</span>
        </div>

        <button className={styles.linkButton}>
          내 브랜드 맞춤 상품 보러가기 &gt;
        </button>

        <div className={styles.slideArea}>{/* 슬라이드 들어갈 영역 */}</div>
      </div>
    </section>
  );
};

export default SolutionSection;
