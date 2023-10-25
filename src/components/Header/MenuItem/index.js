import MenuDash from "./MenuDash";
import MenuTitle from "./MenuTitle";
import styles from "./menu_item.module.scss";

function MenuItem({ index }) {
  if (index === 1) {
    return (
      <div className={styles.navMenu_line}>
        <div className={styles.navMenu_line_positon}>
          <MenuTitle title="Our Work" suptext="200" />
        </div>
        <MenuDash />
        <MenuTitle title="Services" />
      </div>
    );
  } else if (index === 2) {
    return (
      <div className={styles.navMenu_line}>
        <div className={styles.navMenu_line_positon}>
          <MenuTitle title="About" suptext="190" />
        </div>
        <MenuDash />
        <MenuTitle title="Blog" />
        <MenuDash />
        <MenuTitle title="Why STRV" />
      </div>
    );
  } else if (index === 3) {
    return (
      <div className={styles.navMenu_line}>
        <div className={styles.navMenu_line_positon}>
          <MenuTitle title="Careers"/>
        </div>
        <MenuDash />
        <MenuTitle title="Contact" />
      </div>
    );
  }
}

export default MenuItem;
