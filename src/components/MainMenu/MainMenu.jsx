import { Component } from 'react';
import styles from './main-menu.module.css';

class MainMenu extends Component {
  render() {
    return (
      <ul>
        <li>
          <a className={styles.link} href="#">
            Link
          </a>
        </li>
        <li>
          <a className={styles.link} href="#">
            Link 1
          </a>
        </li>
        <li>
          <a className={styles.link} href="#">
            Link 2
          </a>
        </li>
      </ul>
    );
  }
}

export default MainMenu;
