"use client";

import { useState, useEffect } from 'react';
import {
  Rocket, Construction, Clock, Mail,
  Wrench, Sparkles, Settings, Calendar,
  Factory, Target, Users, Zap
} from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ComingSoonPage() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Date de lancement prévue (exemple : 30 jours à partir d'aujourd'hui)
  const launchDate = new Date();
  launchDate.setDate(launchDate.getDate() + 30);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = launchDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const features = [
    {
      icon: Rocket,
      title: "Innovation Technologique",
      description: "Solutions industrielles de pointe"
    },
    {
      icon: Target,
      title: "Précision",
      description: "Conception sur mesure et adaptée"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Partenariats stratégiques"
    },
    {
      icon: Zap,
      title: "Efficacité",
      description: "Optimisation des processus"
    }
  ];

  const progressSteps = [
    { id: 1, name: "Conception", status: "completed" },
    { id: 2, name: "Développement", status: "in-progress" },
    { id: 3, name: "Tests", status: "pending" },
    { id: 4, name: "Lancement", status: "pending" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-950 to-cyan-900 text-white overflow-hidden">
      {/* Effets de fond décoratifs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-96 bg-gradient-to-r from-cyan-500/5 via-transparent to-blue-500/5 blur-3xl" />

        {/* Grille subtile */}
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10" />

        {/* Points lumineux animés */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
            initial={{
              x: Math.random() * 100 + 'vw',
              y: Math.random() * 100 + 'vh',
              opacity: 0
            }}
            animate={{
              y: [null, '-20px', '20px'],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-16">
        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="relative">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-cyan-500/30">
                <Factory className="w-7 h-7 md:w-9 md:h-9 text-white" />
              </div>
              <motion.div
                className="absolute inset-0 rounded-2xl border-2 border-cyan-400/50"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              VA INDUSTRIE
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 font-light">
            Bureau d'étude et de réalisation technologique
          </p>
        </motion.div>

        {/* Message principal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center space-x-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3 mb-6">
            <Construction className="w-5 h-5 md:w-6 md:h-6 text-cyan-400 animate-pulse" />
            <span className="text-lg md:text-xl font-semibold text-cyan-300">
              Site en construction
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Quelque chose de <span className="text-cyan-400">grand</span> arrive
          </h2>

          <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
            Nous travaillons actuellement sur une nouvelle expérience en ligne pour mieux
            présenter nos solutions technologiques innovantes dans les domaines de l'agriculture,
            de la logistique et de la transformation industrielle.
          </p>
        </motion.div>

        {/* Compte à rebours */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full max-w-4xl mx-auto mb-12 md:mb-16"
        >
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-2 text-cyan-300 mb-4">
              <Clock className="w-5 h-5" />
              <h3 className="text-xl font-semibold">Lancement prévu dans</h3>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <motion.div
                key={unit}
                whileHover={{ y: -5, scale: 1.05 }}
                className="relative group"
              >
                <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
                  <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-2">
                    {value.toString().padStart(2, '0')}
                  </div>
                  <div className="text-sm md:text-base font-medium text-gray-300 uppercase tracking-wider">
                    {unit === 'days' ? 'jours' :
                     unit === 'hours' ? 'heures' :
                     unit === 'minutes' ? 'minutes' : 'secondes'}
                  </div>
                </div>

                {/* Effet de lumière */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-cyan-500/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Progression */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="w-full max-w-3xl mx-auto mb-12 md:mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Progression du projet</h3>
            <p className="text-gray-300">Suivez notre avancement vers le lancement</p>
          </div>

          <div className="relative">
            {/* Barre de progression */}
            <div className="h-2 bg-white/10 rounded-full overflow-hidden mb-8">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "50%" }}
                transition={{ duration: 1, delay: 0.8 }}
                className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
              />
            </div>

            {/* Étapes */}
            <div className="flex justify-between">
              {progressSteps.map((step) => (
                <div key={step.id} className="flex flex-col items-center relative">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-2
                    ${step.status === 'completed' 
                      ? 'bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/30' 
                      : step.status === 'in-progress'
                      ? 'bg-gradient-to-br from-cyan-500/50 to-blue-600/50 border-2 border-cyan-400 animate-pulse'
                      : 'bg-white/10 border border-white/20'
                    }`}
                  >
                    {step.status === 'completed' ? (
                      <Sparkles className="w-6 h-6 text-white" />
                    ) : step.status === 'in-progress' ? (
                      <Settings className="w-6 h-6 text-cyan-300 animate-spin" />
                    ) : (
                      <Calendar className="w-6 h-6 text-gray-400" />
                    )}
                  </div>
                  <span className={`text-sm font-medium ${
                    step.status === 'completed' ? 'text-cyan-300' : 
                    step.status === 'in-progress' ? 'text-white' : 'text-gray-400'
                  }`}>
                    {step.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Caractéristiques */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="w-full max-w-6xl mx-auto mb-12 md:mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Ce qui vous attend</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Découvrez notre expertise en ingénierie, développement et solutions industrielles innovantes
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group"
                >
                  <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 h-full hover:border-cyan-400/30 transition-all duration-300">
                    <div className="inline-flex p-3 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-xl mb-4">
                      <Icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
                    <p className="text-gray-300 text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Formulaire de notification */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="w-full max-w-md mx-auto"
        >
          <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8">
            <div className="text-center mb-6">
              <div className="inline-flex p-3 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-xl mb-4">
                <Mail className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Soyez informé du lancement</h3>
              <p className="text-gray-300 text-sm">
                Recevez une notification dès que notre site sera disponible
              </p>
            </div>

            <form className="space-y-4">
              <div>
                <input
                  type="email"
                  placeholder="Votre adresse email"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50 transition-all text-white placeholder-gray-400"
                  required
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
              >
                <span className="flex items-center justify-center space-x-2">
                  <span>Me notifier</span>
                  <Rocket className="w-4 h-4" />
                </span>
              </motion.button>
            </form>

            <div className="mt-6 pt-6 border-t border-white/10 text-center">
              <p className="text-sm text-gray-400">
                Nous ne partagerons jamais votre email avec des tiers
              </p>
            </div>
          </div>
        </motion.div>

        {/* Pied de page */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-12 pt-8 border-t border-white/10 text-center"
        >
          <p className="text-gray-400 mb-4">
            © {new Date().getFullYear()} VA Industrie. Tous droits réservés.
          </p>

          <div className="flex items-center justify-center space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-cyan-400 transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Confidentialité</a>
            <a href="mailto:contact@vaindustrie.com" className="hover:text-cyan-400 transition-colors flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>Contact</span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Animation de construction */}
      <motion.div
        className="fixed bottom-8 right-8 hidden md:block"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="relative">
          <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 backdrop-blur-sm border border-cyan-400/30 rounded-xl">
            <Construction className="w-6 h-6 text-cyan-400" />
          </div>
          <div className="absolute inset-0 bg-cyan-400/20 rounded-xl blur-lg" />
        </div>
      </motion.div>
    </div>
  );
}
