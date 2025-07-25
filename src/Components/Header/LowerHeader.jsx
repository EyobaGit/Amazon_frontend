import styles from "./Header.module.css";
import { IoMdMenu } from "react-icons/io";
import { Link } from "react-router-dom";

const LowerHeader = () => {
  return (
    <div className={styles.lower__container}>
      <div className={styles.lower__nav_wrapper}>
        <div className={styles.lower__nav}>
          <Link to="#" className={`${styles.nav_item} ${styles.all_item}`}>
            <IoMdMenu />
            <span>All</span>
          </Link>
          <Link to="#" className={styles.nav_item}>
            Today's Deals
          </Link>
          <Link to="#" className={styles.nav_item}>
            Customer Service
          </Link>
          <Link to="#" className={styles.nav_item}>
            Registry
          </Link>
          <Link to="#" className={styles.nav_item}>
            Gift ideas
          </Link>
          <Link to="#" className={styles.nav_item}>
            Sell
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default LowerHeader;
