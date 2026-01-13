import { motion } from "framer-motion";
import { MessageCircle, Calendar, Wrench, CheckCircle } from "lucide-react";

const Process = () => {
  const steps = [
    {
      icon: MessageCircle,
      step: "01",
      title: "Entre em Contato",
      description:
        "Fale conosco pelo WhatsApp ou telefone e descreva o problema do seu equipamento.",
    },
    {
      icon: Calendar,
      step: "02",
      title: "Agendamento",
      description:
        "Escolha o melhor dia e horário para a visita técnica. Atendemos de segunda a sábado.",
    },
    {
      icon: Wrench,
      step: "03",
      title: "Diagnóstico e Reparo",
      description:
        "Nosso técnico avalia o equipamento, apresenta o orçamento e realiza o conserto.",
    },
    {
      icon: CheckCircle,
      step: "04",
      title: "Garantia",
      description:
        "Após o serviço, você recebe garantia de 90 dias em peças e mão de obra.",
    },
  ];

  return (
    <section id="processo" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
            Como Funciona
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Simples e <span className="text-gradient">Rápido</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Processo descomplicado para você ter seu equipamento funcionando o
            mais rápido possível.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-border" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative text-center"
              >
                {/* Step Circle */}
                <div className="relative mx-auto mb-6 w-20 h-20 rounded-full gradient-hero flex items-center justify-center shadow-button z-10">
                  <step.icon className="w-8 h-8 text-primary-foreground" />
                </div>

                {/* Step Number */}
                <span className="absolute top-0 right-1/2 translate-x-14 -translate-y-2 text-4xl font-bold text-primary/10">
                  {step.step}
                </span>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
