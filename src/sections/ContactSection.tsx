import styles from "./ContactSection.module.css";

const ContactSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.title}>
          <span className={styles.fade}>미국부터 아시아까지,</span>
          <br />
          글로벌 전용몰의 새로운 기준!!
        </h2>
        <p className={styles.subtitle}>
          브랜드의 글로벌 확장, 프랜킷이 더 쉽고 간편하게 만듭니다.
        </p>
        <a href="#" className={styles.ctaButton}>
          지금 도입 문의
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
