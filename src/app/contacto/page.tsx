"use client";

import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin, Loader2 } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSent, setIsSent] = useState(false);

    // Submission handler connected to Env Var
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // En un entorno real, descomentar esto para enviar a Make.com
            /*
            const response = await fetch(process.env.NEXT_PUBLIC_MAKE_WEBHOOK_URL || "", {
                method: "POST",
                body: JSON.stringify({ name: "User", email: "email", message: "msg" }), // Simplificado para demo
                headers: { "Content-Type": "application/json" }
            });
            if (!response.ok) throw new Error("Error en envío");
            */

            // Simulamos espera de red por ahora
            await new Promise(resolve => setTimeout(resolve, 2000));

            setIsSent(true);
        } catch (error) {
            console.error(error);
            alert("Hubo un error enviando el mensaje. Intenta nuevamente.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-black text-white pt-24 pb-12">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="grid md:grid-cols-2 gap-12 lg:gap-20">

                    {/* Contact Info */}
                    <div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-5xl font-bold mb-6"
                        >
                            Hablemos de <br />
                            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                                Tu Futuro Digital
                            </span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-xl text-zinc-400 mb-12"
                        >
                            Ya sea que necesites blindar tu infraestructura o automatizar tus operaciones, nuestro equipo (y nuestra IA) están listos para ayudarte.
                        </motion.p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-cyan-400 shrink-0">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                                    <p className="text-zinc-400">servicioalcliente@cybertrustbusiness.com</p>
                                    <p className="text-zinc-500 text-sm">Respuesta estimada: &lt; 2 horas</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-purple-400 shrink-0">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg mb-1">Teléfono / WhatsApp</h3>
                                    <p className="text-zinc-400">+57 (300) 123-4567</p>
                                    <p className="text-zinc-500 text-sm">Lunes a Viernes, 8am - 6pm</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-pink-400 shrink-0">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg mb-1">Oficinas</h3>
                                    <p className="text-zinc-400">Bogotá, Colombia</p>
                                    <p className="text-zinc-500 text-sm">Atendemos clientes globalmente</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm"
                    >
                        {isSent ? (
                            <div className="h-full flex flex-col items-center justify-center text-center py-20">
                                <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 mb-6">
                                    <Send className="w-10 h-10" />
                                </div>
                                <h3 className="text-2xl font-bold mb-2">¡Mensaje Recibido!</h3>
                                <p className="text-zinc-400">
                                    Nuestro sistema automatizado ya está procesando tu solicitud. Te contactaremos en breve.
                                </p>
                                <button
                                    onClick={() => setIsSent(false)}
                                    className="mt-8 text-cyan-400 hover:text-cyan-300 font-medium"
                                >
                                    Enviar otro mensaje
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-zinc-400 mb-2">Tu Nombre</label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all placeholder:text-zinc-600"
                                        placeholder="Ej. Juan Pérez"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-zinc-400 mb-2">Correo Corporativo</label>
                                    <input
                                        type="email"
                                        required
                                        className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all placeholder:text-zinc-600"
                                        placeholder="juan@empresa.com"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-zinc-400 mb-2">¿Qué te interesa?</label>
                                    <select className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all">
                                        <option>Ciberseguridad y Ethical Hacking</option>
                                        <option>Automatización de Procesos (IA)</option>
                                        <option>Auditoría de Infraestructura</option>
                                        <option>Otro</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-zinc-400 mb-2">Mensaje</label>
                                    <textarea
                                        rows={4}
                                        required
                                        className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all placeholder:text-zinc-600"
                                        placeholder="Cuéntanos brevemente sobre tu proyecto o necesidad..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-4 rounded-xl hover:shadow-[0_0_20px_-5px_rgba(6,182,212,0.5)] transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="w-5 h-5 animate-spin" /> Procesando...
                                        </>
                                    ) : (
                                        <>
                                            Iniciar Conversación <Send className="w-4 h-4" />
                                        </>
                                    )}
                                </button>

                                <p className="text-xs text-center text-zinc-600">
                                    Al enviar este formulario, aceptas nuestra política de privacidad.
                                    Tus datos están protegidos con cifrado de extremo a extremo.
                                </p>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
