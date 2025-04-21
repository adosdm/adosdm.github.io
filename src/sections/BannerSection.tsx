import styles from "./BannerSection.module.css";
import Image from "next/image";

const BannerSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.overlay}>
        <div className={styles.inner}>
          <Image
            src="/logo_simple.svg"
            alt="프랜킷 로고"
            width={96}
            height={99}
            className={styles.logo}
          />
          <h2 className={styles.title}>
            <span className={styles.fade}>프랜킷, 이미 많은 브랜드가</span>
            <br />
            함께하고 성장 중 입니다.
          </h2>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
