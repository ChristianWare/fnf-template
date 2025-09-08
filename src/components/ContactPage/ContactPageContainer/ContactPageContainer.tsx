import LayoutWrapper from '@/components/shared/LayoutWrapper';
import styles from './ContactPageContainer.module.css' 
import ContactForm from '@/components/shared/ContactForm/ContactForm';
 
 export default function ContactPageContainer() {
   return (
     <section className={styles.container}>
       <LayoutWrapper>
         <div className={styles.content}>
           <div className={styles.left}>
             <h2 className={styles.heading}>
               Contact <br />{" "}
               <span className={styles.span}>Fonts & Footers</span>
             </h2>
             <p className={styles.copy}>
               Have a question, need a quote, or just curious whether a custom
               booking platform is right for you? Drop a line — no strings
               attached. We reply within one business day.
             </p>
             
           </div>
           <div className={styles.right}>
             <ContactForm />
           </div>
         </div>
       </LayoutWrapper>
     </section>
   );
 }