import { useState } from 'react';
import {RevealOnScroll} from '../RevealOnScroll'
import emails from 'emailjs-com'
export const Contact =()=>{

    const [formData,setFormData]=useState({
        name:'',
        email:'',
        message:''
    });

    const SERVICE_ID="service_ywphhdu";
    const TEMPLATE_ID="template_phiq3vr";
    const PUBLIC_KEY="K_JBsKuMe3CwV33P8";

    const handleSubmit=(e)=>{
        e.preventDefault();
        emails.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
        .then((result)=>{
            alert("Message sent successfully!");
            setFormData({
                name: '',
                email: '',
                message: ''
            });
        }).catch((error)=>{
            console.error("Error sending message:", error);
            alert("Failed to send message. Please try again later.");
        });
    };
    return(
        <section id="contact" className="min-h-screen flex justify-center items-center py-20">
            <RevealOnScroll>
                <div className="px-4 w-150">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-400 to bg-cyan-400 bg-clip-text text-transparent text-center">{" "}Get In Touch</h2>
                    <form onSubmit={handleSubmit} className='space-y-6 w-full max-w-md mx-auto'>
                        <div className="relative">
                            <input type="text" id='name' name='name' required value={formData.name} onChange={(e)=>setFormData({...formData,name:e.target.value})}  className='w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5' placeholder='Name...'/>
                        </div>
                        <div className="relative">
                            <input type="email" id='email' name='email' required value={formData.email} onChange={(e)=>setFormData({...formData,email:e.target.value})} className='w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5' placeholder='Email...'/>
                        </div>
                        <div className="relative">
                            <textarea  id='textarea' name='textarea' rows={5} required value={formData.message} onChange={(e)=>setFormData({...formData,message:e.target.value})} className='w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5' placeholder='Your Meassage...'/>
                        </div>
                        <button type='submit' className='w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] cursor-pointer'>Send Message</button>
                    </form>
                </div>
            </RevealOnScroll>
        </section>
    )
}