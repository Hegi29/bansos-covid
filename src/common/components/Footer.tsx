import { URL_LINKEDIN } from '~/constants/.';
import styles from '~/styles/Home.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a
        href={URL_LINKEDIN}
        target="_blank"
        rel="noopener noreferrer"
      >
        Hegi Tri Saputra
      </a>
    </footer>
  );
}

export { Footer }
