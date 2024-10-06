import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formRef = useRef();

    const [loading, setLoading] = useState(false);

    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    })

    const handleChange = ({ target: {name, value}}) => {
        setForm({... form, [name]:value})
    }

    // service_seliskg

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);

        try {
            await emailjs.send(
                'service_seliskg', 
                'template_xv9erdx',
                {
                    from_name: form.name,
                    to_name: 'Dan',
                    from_email: form.email,
                    to_email: 'danriksterabangan@gmail.com',
                    message: form.message,
                },
                'cA-sJ9pMZdK23Sd7B'
            )
            
            setLoading(false);

            alert('Your message has been sent successfully!')

            setForm({
                name: '',
                email: '',
                message: '',
            });
        } catch (error) {
            setLoading(false);

            console.log(error);
            alert('Oh no! Something went wrong!')
        }
    }

    return (
        <section className="c-space my-20" id="contact">
            <div className="relative min-h-screen flex items-center justify-center flex-col">
                {/* <img src="/assets/terminal.png" alt="Terminal Background" className="absolute inset-0 min-h-screen" /> */}

                <div className="contact-container">
                    <h3 className="head-text mt-20">
                        Contact Me
                    </h3>

                    <p className="text-lg text-white-600 mt-3">
                        Let me help you in turning your ideas into reality!
                    </p>

                    <form ref={formRef} onSubmit={handleSubmit} action="" className="mt-12 flex flex-col space-y-7">
                        <label className="space-y-3">
                            <span className="field-label">
                                Full Name
                            </span>

                            <input 
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                className="field-input"
                                placeholder="Enter Your Full Name Here" 
                            />
                        </label>

                        <label className="space-y-3">
                            <span className="field-label">
                                Email
                            </span>

                            <input 
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className="field-input"
                                placeholder="Enter Your Email Address Here" 
                            />
                        </label>

                        <label className="space-y-3">
                            <span className="field-label">
                                Message
                            </span>

                            <textarea 
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                className="field-input"
                                placeholder="Tell me what's on your mind!" 
                            />
                        </label>

                        <button className="field-btn" type="submit" disabled={loading}>
                            {loading ? 'Sending...' : 'Send Message'}

                            <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}
export default Contact