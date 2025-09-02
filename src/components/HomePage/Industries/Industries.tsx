import LayoutWrapper from '@/components/shared/LayoutWrapper'
import styles from './Industries.module.css'

export default function Industries() {
  return (
    <section className={styles.container}>
        <LayoutWrapper>
            <div className={styles.content}>
                <h2>Industries We Serve</h2>
                <p>We work with a variety of industries to deliver tailored solutions.</p>
            </div>
        </LayoutWrapper>
    </section>
  )
}