import { motion } from "framer-motion";
import { Phone, Clock, Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-technician.jpg";

const Hero = () => {
  const stats = [
    { icon: Clock, label: "Atendimento Rápido", value: "Até 24h" },
    { icon: Shield, label: "Garantia", value: "90 dias" },
  ];

  return (
    <section className="relative min-h-screen pt-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-frost" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-5rem)] py-12">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm"
              >
                <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
                Técnicos disponíveis agora
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight">
                Conserto de{" "}
                <span className="text-gradient">Geladeiras</span> e{" "}
                <span className="text-gradient">Freezers</span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
                Técnicos especializados com mais de 15 anos de experiência. 
                Atendemos todas as marcas com peças originais e garantia.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" asChild>
                <a href="https://wa.me/5515997337190" target="_blank" rel="noopener noreferrer">
                  <Phone className="w-5 h-5" />
                  Solicitar Orçamento
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <a href="#servicos">
                  Ver Serviços
                </a>
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 pt-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3 px-5 py-3 rounded-xl bg-card shadow-card"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <stat.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <p className="font-bold text-foreground">{stat.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={heroImage}
                  alt="Técnico consertando geladeira"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </div>

              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-5 shadow-card"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl gradient-hero flex items-center justify-center">
                    <Shield className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">+5.000</p>
                    <p className="text-sm text-muted-foreground">Clientes satisfeitos</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
