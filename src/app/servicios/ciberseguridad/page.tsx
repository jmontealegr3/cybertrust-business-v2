"use client";

import { motion } from "framer-motion";
import { Shield, Lock, Server, ArrowRight, Eye, FileWarning } from "lucide-react";
import Link from "next/link";

export default function CybersecurityPage() {
    return (
        <div className="min-h-screen bg-black text-white pt-24 pb-12">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-xs font-medium text-blue-300 mb-6"
                    >
                        <Shield className="w-3 h-3" />
                        Ciberseguridad Avanzada
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-bold mb-6"
                    >
                        Defensa Proactiva para<br />
                        <span className="bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-400 bg-clip-text text-transparent">
                            Infraestructuras Críticas
                        </span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-zinc-400"
                    >
                        No esperamos a que ocurra el ataque. Anticipamos, detectamos y neutralizamos amenazas antes de que impacten tu negocio.
                    </motion.p>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    {[
                        {
                            icon: Eye,
                            color: "text-blue-400",
                            title: "Ethical Hacking",
                            description: "Simulamos ataques reales para identificar vulnerabilidades en tus sistemas antes de que lo hagan los criminales."
                        },
                        {
                            icon: Server,
                            color: "text-cyan-400",
                            title: "Seguridad de Redes",
                            description: "Diseño e implementación de arquitecturas de red seguras, firewalls de próxima generación y sistemas de prevención de intrusos."
                        },
                        {
                            icon: FileWarning,
                            color: "text-teal-400",
                            title: "Análisis de Riesgos",
                            description: "Auditorías completas de cumplimiento normativo (ISO 27001, GDPR) para garantizar que tu empresa opera dentro de la ley."
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

                {/* Statistics/Trust */}
                <div className="grid md:grid-cols-4 gap-6 bg-blue-900/10 rounded-3xl p-10 border border-blue-500/10 mb-20 text-center">
                    {[
                        { label: "Amenazas Bloqueadas", value: "10k+" },
                        { label: "Uptime Garantizado", value: "99.9%" },
                        { label: "Auditorías Realizadas", value: "500+" },
                        { label: "Soporte", value: "24/7" }
                    ].map((stat, i) => (
                        <div key={i}>
                            <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">{stat.value}</div>
                            <div className="text-sm text-blue-200/60 uppercase tracking-wider">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center">
                    <h2 className="text-2xl font-semibold mb-6">Protege tu activo más valioso</h2>
                    <Link href="/" className="px-8 py-3 rounded-full bg-white text-black font-bold hover:bg-zinc-200 transition-colors">
                        Volver al Inicio
                    </Link>
                </div>
            </div>
        </div>
    );
}
