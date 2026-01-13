import { motion } from "framer-motion";

import brastemp from "@/assets/Brastemp.png";
import electrolux from "@/assets/Electrolux-Logo.png";
import consul from "@/assets/consul-removebg-preview.png";
import lg from "@/assets/LG.png";
import samsung from "@/assets/samsung.png";

const brands = [
  { name: "Brastemp", image: brastemp },
  { name: "Electrolux", image: electrolux },
  { name: "Consul", image: consul },
  { name: "LG", image: lg },
  { name: "Samsung", image: samsung },
];

const Brands = () => {
  // Duplicate brands for seamless infinite scroll
  const duplicatedBrands = [...brands, ...brands, ...brands, ...brands];

  return (
    <section className="py-16 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Trabalhamos com as{" "}
            <span className="text-gradient">Melhores Marcas</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Atendemos todas as principais marcas do mercado com peças originais
            e garantia
          </p>
        </motion.div>
      </div>

      {/* Infinite Carousel */}
      <div className="relative">
        <div className="flex animate-scroll">
          {duplicatedBrands.map((brand, index) => (
            <div
              key={`${brand.name}-${index}`}
              className="flex-shrink-0 mx-8 md:mx-12"
            >
              <div className="bg-background rounded-xl px-8 py-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-border/50 min-w-[180px] flex items-center justify-center">
                <img
                  src={brand.image}
                  alt={brand.name}
                  className="h-12 md:h-14 object-contain transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
