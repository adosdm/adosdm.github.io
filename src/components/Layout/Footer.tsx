import styles from "./Footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.logoWrap}>
          <Image src="/logo.svg" alt="프랜킷 로고" width={110} height={30} />
        </div>

        <div className={styles.menuWrap}>
          <Link href="#">회사정보</Link>
          <Link href="#">개인정보처리방침</Link>
          <Link href="#">서비스 이용약관</Link>
        </div>

        <div className={styles.info}>
          대표 : 정상원
          <br />
          서울시 도봉구 마들로13길 84 창동아우르네 (주)프랜킷
          <br />
          사업자등록번호 : 818-81-02387 통신판매업신고번호 : 제
          2023-서울동대문-1175호
          <br />
          이메일 : contact@frankit.shop 고객센터 : 1544-1626
        </div>

        <div className={styles.copy}>
          COPYRIGHT ⓒ frankit.shop ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
