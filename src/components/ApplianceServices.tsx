import { motion } from "framer-motion";
import {
  Shirt,
  Droplets,
  UtensilsCrossed,
  Flame,
  CheckCircle,
  MessageCircle,
} from "lucide-react";
import { Button } from "./ui/button";

const ApplianceServices = () => {
  const services = [
    {
      icon: Shirt,
      title: "Máquinas de Lavar",
      description:
        "Conserto especializado em lavadoras de todas as marcas e capacidades.",
      items: ["Automáticas", "Semi-automáticas", "Tanquinho", "Industrial"],
    },
    {
      icon: Droplets,
      title: "Lava e Seca",
      description:
        "Manutenção completa em máquinas lava e seca com tecnologia avançada.",
      items: ["Inverter", "Smart", "Compactas", "Alta Capacidade"],
    },
    {
      icon: UtensilsCrossed,
      title: "Lava-Louças",
      description:
        "Reparo em lava-louças de embutir e de piso de qualquer marca.",
      items: ["Embutir", "Piso", "Compactas", "8 a 14 Serviços"],
    },
    {
      icon: Flame,
      title: "Fornos Elétricos",
      description: "Conserto de fornos elétricos de embutir e de bancada.",
      items: ["Embutir", "Bancada", "Micro-ondas", "Air Fryer"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const whatsappNumber = "5515997688655";

  const handleWhatsApp = (serviceName: string) => {
    const message = encodeURIComponent(
      `Olá! Gostaria de um orçamento para conserto de ${serviceName}.`
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  return (
    <section id="eletrodomesticos" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent font-semibold text-sm mb-4">
            Linha Branca
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Conserto de <span className="text-gradient">Eletrodomésticos</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Também realizamos manutenção em máquinas de lavar, lava e seca,
            lava-louças e fornos elétricos de todas as marcas.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group relative bg-card rounded-2xl p-6 shadow-soft hover:shadow-card transition-all duration-300 border border-border hover:border-accent/20 flex flex-col"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-accent-foreground" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                {service.description}
              </p>

              {/* Items */}
              <ul className="space-y-2 mb-6 flex-grow">
                {service.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-foreground"
                  >
                    <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* WhatsApp Button */}
              <Button
                onClick={() => handleWhatsApp(service.title)}
                className="w-full bg-[#25D366] hover:bg-[#20BD5A] text-white gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                Solicitar Orçamento
              </Button>

              {/* Hover accent */}
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-accent to-primary rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ApplianceServices;
