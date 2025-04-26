import {RevealOnScroll} from "../RevealOnScroll.jsx";
import emailjs from 'emailjs-com'
import {useState} from "react";

export const Contact = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [alert, setAlert] = useState({ show: false, type: "", message: "" });


    console.log(
        "SERVICE_ID:", import.meta.env.VITE_SERVICE_ID,
        "TEMPLATE_ID:", import.meta.env.VITE_TEMPLATE_ID,
        "PUBLIC_KEY:", import.meta.env.VITE_PUBLIC_KEY
    );

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                import.meta.env.VITE_SERVICE_ID,
                import.meta.env.VITE_TEMPLATE_ID,
                e.target,
                import.meta.env.VITE_PUBLIC_KEY
            ).then((result) => {
            alert("Message Sent!!");
            setFormData({name: "", email: "", message: ""});
        }).catch(() => alert("Something went wrong! Try again maybe?"));
    };

    return (
        <section id="contact"
                 className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="px-4 md:w-150 sm:w-full">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r
                from-blue-500 to-purple-400 bg-clip-text text-transparent text-center">
                        Get In Touch With Me
                    </h2>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="relative">
                            <input type="text"
                                   id="name"
                                   name="name"
                                   required
                                   value={formData.name}
                                   className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                                   placeholder="Jane Doe"
                                   onChange={(e) => setFormData({...formData, name: e.target.value})}>
                            </input>
                        </div>

                        <div className="relative">
                            <input type="text"
                                   id="email"
                                   name="email"
                                   required
                                   value={formData.email}
                                   className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                                   placeholder="Jane.doe@example.com"
                                   onChange={(e) => setFormData({...formData, email: e.target.value})}>
                            </input>
                        </div>

                        <div className="relative">
                            <textarea type="text"
                                      id="message"
                                      name="message"
                                      required
                                      value={formData.message}
                                      rows={5}
                                      className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                                      placeholder="Your message..."
                                      onChange={(e) => setFormData({...formData, message: e.target.value})}>>
                            </textarea>
                        </div>
                        <button type="submit"
                                className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                            Send Message
                        </button>

                    </form>
                </div>
            </RevealOnScroll>
        </section>
    )
}
