import {useState, useCallback} from 'react';
import styles from './index.module.scss';

const Contact = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = useCallback((e) => {
        const {name, value} = e.target;
        setForm((prev) => ({...prev, [name]: value}));
    }, []);

    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        // Here you would send the form data to your backend or email service
        setSubmitted(true);
    }, []);

    return (
        <div className={styles.contactPage}>
            <h1 className={styles.contactTitle}>Contact Us</h1>
            {submitted ? (
                <div className={styles.successMessage}>Thank you for your message! We will get back to you soon.</div>
            ) : (
                <form className={styles.contactForm} onSubmit={handleSubmit}>
                    <label className={styles.formLabel} htmlFor="contactName">
                        Full Name
                        <input
                            id="contactName"
                            className={styles.inputField}
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            autoComplete="name"
                        />
                    </label>
                    <label className={styles.formLabel} htmlFor="contactEmail">
                        Email
                        <input
                            id="contactEmail"
                            className={styles.inputField}
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            autoComplete="email"
                        />
                    </label>
                    <label className={styles.formLabel} htmlFor="contactMessage">
                        Message
                        <textarea
                            id="contactMessage"
                            className={styles.textareaField}
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            required
                            rows={5}
                        />
                    </label>
                    <button className={styles.submitButton} type="submit">Send Message</button>
                </form>
            )}
        </div>
    );
};

export default Contact;
