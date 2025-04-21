import Image from "next/image";
import styles from "./Header.module.css";
import Link from "next/link";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        {/* 좌측 로고 */}
        <div className={styles.left}>
          <Link href="/">
            <Image src="/logo.svg" alt="Frankit Logo" width={110} height={30} />
          </Link>
        </div>

        {/* 우측 네비게이션 */}
        <div className={styles.right}>
          <nav className={styles.navLeft}>
            <Link href="#">발주</Link>
            <Link href="#">매장관리</Link>
            <Link href="#">컨설팅</Link>
            <Link href="#">파트너</Link>
          </nav>

          <Link href="#" className={styles.marketButton}>
            <span>프랜킷 마켓 바로가기</span>
            <Image
              src="/icon_link.png"
              alt="link icon"
              width={14}
              height={14}
            />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
