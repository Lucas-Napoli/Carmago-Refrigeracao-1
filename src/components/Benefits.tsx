import { motion } from "framer-motion";
import {
  Shield,
  Clock,
  Award,
  Banknote,
  Users,
  Headphones,
} from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Atendimento Rápido",
      description: "Agendamento no mesmo dia ou em até 24 horas úteis.",
    },
    {
      icon: Shield,
      title: "Garantia de 90 Dias",
      description:
        "Todos os serviços com garantia de 3 meses nas peças e mão de obra.",
    },
    {
      icon: Award,
      title: "Técnicos Certificados",
      description:
        "Profissionais com mais de 15 anos de experiência comprovada.",
    },
    {
      icon: Banknote,
      title: "Orçamento de acordo com a necessidade",
      description:
        "Análise detalhada para definir o orçamento ideal para cada caso.",
    },
    {
      icon: Users,
      title: "Todas as Marcas",
      description:
        "Atendemos Brastemp, Electrolux, Consul, LG, Samsung e mais.",
    },
    {
      icon: Headphones,
      title: "Suporte Dedicado",
      description: "Atendimento personalizado do início ao fim do serviço.",
    },
  ];

  return (
    <section id="sobre" className="py-20 md:py-28 gradient-frost">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent font-semibold text-sm mb-4">
            Por Que Nos Escolher
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Confiança e <span className="text-gradient">Qualidade</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Mais de 5.000 clientes satisfeitos em toda a região. Qualidade e
            compromisso que você pode confiar.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start gap-4 p-6 bg-card rounded-2xl shadow-soft hover:shadow-card transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
