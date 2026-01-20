"use client";

import { motion } from "framer-motion";
import { Shield, Bot, Zap, ArrowRight, Menu, Lock, Cpu, Globe } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-cyan-500/30 overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed w-full z-50 top-0 left-0 border-b border-white/10 bg-black/50 backdrop-blur-md">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold tracking-tighter flex items-center gap-2">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
              CYBER TRUST
            </span>
            <span className="text-white/80 text-sm font-light tracking-widest hidden sm:block">BUSINESS</span>
          </Link>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            <Link href="#seguridad" className="hover:text-cyan-400 transition-colors">Ciberseguridad</Link>
            <Link href="#automatizacion" className="hover:text-purple-400 transition-colors">Automatización</Link>
            <Link href="#servicios" className="hover:text-white transition-colors">Servicios</Link>
            <Link href="/contacto" className="px-5 py-2 rounded-full bg-white text-black hover:bg-cyan-50 font-semibold transition-transform hover:scale-105 active:scale-95">
              Contacto
            </Link>
          </div>

          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-cyan-500/20 rounded-full blur-[120px] -z-10 opacity-50" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-purple-600/10 rounded-full blur-[100px] -z-10 opacity-30" />

        <div className="container mx-auto max-w-6xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-cyan-300 mb-8 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            Evolucionando tu negocio con IA
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] mb-6"
          >
            Seguridad Robusta.<br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Automatización Inteligente.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            Protegemos tu infraestructura crítica mientras implementamos flujos de trabajo autónomos
            que multiplican tu productividad. El equilibrio perfecto entre defensa y eficiencia.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black font-bold text-lg hover:bg-cyan-50 transition-all hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] flex items-center justify-center gap-2 group">
              Empezar Ahora
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/20 bg-transparent text-white font-medium hover:bg-white/5 transition-all flex items-center justify-center gap-2">
              Ver Servicios
            </button>
          </motion.div>
        </div>
      </section>

      {/* Duel Section: Security vs Automation */}
      <section className="py-24 bg-zinc-950/50 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            {/* Security Column */}
            <Link href="/servicios/ciberseguridad" className="block relative group">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="h-full p-8 rounded-3xl border border-white/10 bg-gradient-to-b from-blue-950/20 to-transparent hover:border-blue-500/30 transition-all cursor-pointer"
              >
                <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
                  <Shield className="w-32 h-32 text-blue-500" />
                </div>
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-6 text-blue-400">
                  <Lock className="w-6 h-6" />
                </div>
                <h3 className="text-3xl font-bold mb-4">Ciberseguridad</h3>
                <p className="text-zinc-400 mb-6 leading-relaxed">
                  Blindamos tu empresa contra amenazas modernas. Desde Ethical Hacking hasta
                  gestión de redes y cumplimiento normativo. Tu información es nuestro activo más valioso.
                </p>
                <ul className="space-y-3 text-zinc-300">
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500" />Test de Vulnerabilidad</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500" />Defensa Perimetral</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500" />Consultoría Expertos</li>
                </ul>
              </motion.div>
            </Link>

            {/* Automation Column */}
            <Link href="/servicios/automatizacion" className="block relative group">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="h-full p-8 rounded-3xl border border-white/10 bg-gradient-to-b from-purple-950/20 to-transparent hover:border-purple-500/30 transition-all cursor-pointer"
              >
                <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
                  <Zap className="w-32 h-32 text-purple-500" />
                </div>
                <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-6 text-purple-400">
                  <Bot className="w-6 h-6" />
                </div>
                <h3 className="text-3xl font-bold mb-4">Automatización & IA</h3>
                <p className="text-zinc-400 mb-6 leading-relaxed">
                  Olvídate de las tareas repetitivas. Diseñamos ecosistemas digitales donde tus aplicaciones
                  dialogan entre sí, impulsados por Inteligencia Artificial generativa.
                </p>
                <ul className="space-y-3 text-zinc-300">
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-500" />Integraciones con Make/Zapier</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-500" />Chatbots de Atención 24/7</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-500" />Análisis Predictivo</li>
                </ul>
              </motion.div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 text-center px-6">
        <div className="container mx-auto">
          <div className="flex flex-col items-center justify-center p-12 rounded-3xl border border-white/10 bg-gradient-to-b from-zinc-900 to-black relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500" />

            <h2 className="text-4xl md:text-5xl font-bold mb-6">¿Listo para el siguiente nivel?</h2>
            <p className="text-zinc-400 text-lg max-w-2xl mb-8">
              No dejes que tu competencia te supere en eficiencia. Solicita una consultoría gratuita
              y descubre dónde puedes automatizar hoy mismo.
            </p>
            <button className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg hover:brightness-110 transition-all shadow-lg shadow-cyan-500/20">
              Agenda tu Auditoría Gratis
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10 bg-black text-center md:text-left">
        <div className="container mx-auto px-6 grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h4 className="text-2xl font-bold text-white mb-4">CYBER TRUST BUSINESS</h4>
            <p className="text-zinc-500 max-w-xs">
              Tu aliado estratégico en la era digital. Seguridad que protege, inteligencia que impulsa.
            </p>
          </div>
          <div>
            <h5 className="font-semibold text-white mb-4">Servicios</h5>
            <ul className="space-y-2 text-sm text-zinc-500">
              <li><a href="#" className="hover:text-cyan-400">Ethical Hacking</a></li>
              <li><a href="#" className="hover:text-cyan-400">Seguridad de Redes</a></li>
              <li><a href="#" className="hover:text-cyan-400">Automatización IA</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-white mb-4">Legal</h5>
            <ul className="space-y-2 text-sm text-zinc-500">
              <li><a href="#" className="hover:text-cyan-400">Privacidad</a></li>
              <li><a href="#" className="hover:text-cyan-400">Términos</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
