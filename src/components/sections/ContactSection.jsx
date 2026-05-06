"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";

const info = [
    {
        icon: <FaPhoneAlt />,
        title: "Phone",
        description: "(+94) 71 1426 392"
    },
    {
        icon: <FaEnvelope />,
        title: "Email",
        description: "charusachindu@gmail.com"
    },
    {
        icon: <FaMapMarkedAlt />,
        title: "Address",
        description: "Katubedda, Moratuwa"
    },
]

import { motion } from "framer-motion";



const ContactSection = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState(null);
    const [isSending, setIsSending] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSending(true);
        setStatus(null);
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ firstName, lastName, email, phone, message }),
            });
            const data = await res.json();
            if (res.ok) {
                setStatus({ ok: true, msg: 'Message sent — thank you!' });
                setFirstName(''); setLastName(''); setEmail(''); setPhone(''); setMessage('');
            } else {
                setStatus({ ok: false, msg: data.error || 'Failed to send' });
            }
        } catch (err) {
            setStatus({ ok: false, msg: 'Network error' });
        } finally {
            setIsSending(false);
        }
    };

    return (
        <motion.section 
        initial={{ opacity: 0}}
        animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn"},
        }}
        id="contact"
        className="min-h-screen py-6 flex items-center"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    {/* form */}
                    <div className="xl:w-[54%] order-2 xl:order-none">
                        <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
                            <h3 className="text-4xl text-green-400">Leave a message!</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="Firstname" />
                                <Input value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Lastname" />
                                <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" />
                                <Input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone number" />
                            </div>
                            <Textarea value={message} onChange={(e) => setMessage(e.target.value)} className="h-[280px]" placeholder="Type your message" />
                            <div>
                                <Button type="submit" size="md" disabled={isSending} className="max-w-40">{isSending ? 'Sending...' : 'Send message'}</Button>
                                {status && (
                                    <p className={`mt-4 ${status.ok ? 'text-green-400' : 'text-red-400'}`}>{status.msg}</p>
                                )}
                            </div>
                        </form>
                    </div>
                    {/* info */}
                    <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                        <ul className="flex flex-col gap-10">
                            {info.map((item, index) => {
                                return (
                                    <li key={index} className="flex items-center gap-6">
                                        <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-green-400 rounded-md flex items-center justify-center">
                                            <div className="text-[28px]">{item.icon}</div>
                                        </div>
                                            <div className="flex-1">
                                                <p className=" text-white/60">{item.title}</p>
                                                <h3 className=" text-xl">{item.description}</h3>
                                            </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default ContactSection
