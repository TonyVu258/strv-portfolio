import Link from "next/link";
import styles from "./title.module.scss";

function MenuTitle({ title, suptext }) {
  return (
    <Link href="/" data-text={title} className={styles.navMenu_item_link}>
      <div className={styles.navMenu_item_text}>{title}</div>
      {suptext && (
        <div className={styles.navMenu_item_suptext}>
          <p className={styles.navMenu_item_suptext_content}>({suptext}+)</p>
        </div>
      )}
    </Link>
  );
}

export default MenuTitle;
