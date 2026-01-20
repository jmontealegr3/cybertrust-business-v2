"use client";

import { motion } from "framer-motion";
import { Bot, Workflow, Brain, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function AutomationPage() {
    return (
        <div className="min-h-screen bg-black text-white pt-24 pb-12">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-xs font-medium text-purple-300 mb-6"
                    >
                        <Bot className="w-3 h-3" />
                        Inteligencia Artificial & Automatización
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-bold mb-6"
                    >
                        Tu empresa, en <br />
                        <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
                            Piloto Automático Inteligente
                        </span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-zinc-400"
                    >
                        Deja de perder tiempo en tareas repetitivas. Diseñamos flujos de trabajo que conectan tus aplicaciones favoritas y trabajan por ti las 24 horas.
                    </motion.p>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    {[
                        {
                            icon: Workflow,
                            color: "text-purple-400",
                            title: "Integración con Make.com",
                            description: "Conectamos tu CRM, Email, Redes Sociales y Hojas de Cálculo para que los datos fluyan automáticamente sin intervención humana."
                        },
                        {
                            icon: Bot,
                            color: "text-pink-400",
                            title: "Chatbots con IA",
                            description: "Asistentes virtuales entrenados con tu propia información para responder a clientes al instante, agendar citas y cerrar ventas."
                        },
                        {
                            icon: Brain,
                            color: "text-cyan-400",
                            title: "Análisis Predictivo",
                            description: "Utilizamos algoritmos de Machine Learning para anticipar tendencias de mercado y comportamientos de tus clientes."
                        }
                    ].map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-8 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
                        >
                            <feature.icon className={`w-10 h-10 ${feature.color} mb-4`} />
                            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                            <p className="text-zinc-400 leading-relaxed">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Use Cases */}
                <div className="bg-zinc-900/50 rounded-3xl p-10 md:p-16 border border-white/5 mb-20">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-3xl font-bold mb-6">Lo que puedes automatizar hoy</h3>
                            <ul className="space-y-4">
                                {[
                                    "Onboarding de nuevos clientes",
                                    "Generación y envío de facturas",
                                    "Publicación de contenido en redes sociales",
                                    "Clasificación de leads y ventas",
                                    "Respuestas a preguntas frecuentes"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-zinc-300">
                                        <CheckCircle2 className="w-5 h-5 text-purple-500 flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-10">
                                <Link href="/contacto" className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-medium transition-colors">
                                    Ver todos los casos de uso <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                        <div className="relative">
                            {/* Abstract Visual Representation of Automation */}
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-3xl rounded-full" />
                            <div className="relative bg-black/50 backdrop-blur-xl border border-white/10 rounded-xl p-6 shadow-2xl">
                                <div className="flex items-center gap-4 mb-4 pb-4 border-b border-white/10">
                                    <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                                        <span className="font-bold">G</span>
                                    </div>
                                    <div className="flex-1">
                                        <div className="h-2 w-24 bg-white/20 rounded mb-2" />
                                        <div className="h-2 w-16 bg-white/10 rounded" />
                                    </div>
                                    <ArrowRight className="w-5 h-5 text-zinc-500" />
                                    <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400">
                                        <Bot className="w-5 h-5" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div className="h-2 w-full bg-white/10 rounded" />
                                    <div className="h-2 w-3/4 bg-white/10 rounded" />
                                    <div className="h-2 w-5/6 bg-white/10 rounded" />
                                </div>
                                <div className="mt-4 flex justify-end">
                                    <div className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-medium">
                                        Proceso Completado (120ms)
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center">
                    <h2 className="text-2xl font-semibold mb-6">¿Dudas sobre cómo empezar?</h2>
                    <Link href="/" className="px-8 py-3 rounded-full bg-white text-black font-bold hover:bg-zinc-200 transition-colors">
                        Volver al Inicio
                    </Link>
                </div>
            </div>
        </div>
    );
}
