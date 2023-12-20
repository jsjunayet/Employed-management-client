

import { useRef, useState } from "react";
import toast from "react-hot-toast";
import emailjs from '@emailjs/browser';


const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_jtcfjzr', 'template_m58weau', form.current, 'BeNNFtPCQezvr023U')
            .then((result) => {
                toast.success('Succefull Submit')
                form.current.reset();
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div className="App min-h-screen flex items-center justify-center bg-gray-100">
            <div className="max-w-md mx-auto my-8 p-6 bg-white shadow-md rounded-md">
                <h2 className="text-2xl font-semibold mb-6">Contact Us</h2>
                <p className="text-gray-600 mb-6">
                    Feel free to reach out to us. Your opinions matter!
                </p>
                <p className="text-gray-600 mb-6">
                    Company Address: 123 ABS Street, Dhaka, Bangladesh
                </p>
                <form ref={form} onSubmit={sendEmail}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                            Name
                        </label>
                        <input
                            type="text"
                            id="email"
                            name="user_name"
                            className="w-full px-3 py-2 border rounded-md"
                            placeholder="Your Name"
                            // value={email}
                            // onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="user_email"
                            className="w-full px-3 py-2 border rounded-md"
                            placeholder="Your email"
                            // value={email}
                            // onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" name="message" className="block text-gray-700 text-sm font-bold mb-2">
                            Message
                        </label>
                        <textarea
                            id="message"
                            className="w-full px-3 py-2 border rounded-md"
                            placeholder="Your message"
                            rows="4"
                            // value={message}
                            // onChange={(e) => setMessage(e.target.value)}
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
