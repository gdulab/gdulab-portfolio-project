import styles from './Contact.module.scss'
import mailer from '../../features/mailer';
import { AnimatePresence, motion } from 'framer-motion';


const Contact = () => {
    const sendMessage = (e) => {
        e.preventDefault();
        mailer(e);
    }
    return (
        <AnimatePresence>
            <motion.div className={styles.contactWrapper}
                id="contact"
                onSubmit={sendMessage}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ type: "tween", duration: 0.5, delay: 0.3 }}>
                <h2>Contact</h2>
                <div className={styles.contactContentWrapper}>
                    <form className={styles.contactForm}>
                        <label>Your name:</label>
                        <input type="text" name="name" />

                        <label>Your e-mail:</label>
                        <input type="email" name="email" />

                        <label>Message:</label>
                        <textarea name="message" rows="8" />
                        <button type="submit">Send</button>
                    </form>
                    <div className={styles.contactInfo}>
                        <h3>email:</h3>
                        <p>gdula.bartlomiej@gmail.com</p>
                        <h3>phone:</h3>
                        <p>(+48) 781 308 134</p>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
}

export default Contact;
