import { Snowflake, Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <a href="#" className="flex items-center gap-2">
              <div className="w-10 h-10 roundedqq-lg bg-primary flex items-center justify-center">
                <Snowflake className="w-6 h-6 text-foreground" />
              </div>
              <span className="text-xl font-bold">
                Camargo<span className="text-primary"> Refrigeração</span>
              </span>
            </a>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Especialistas em conserto de geladeiras, freezers e refrigeradores. 
              Atendendo com qualidade há mais de 15 anos.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Links Rápidos</h4>
            <ul className="space-y-3">
              {[
                { href: "#servicos", label: "Serviços" },
                { href: "#sobre", label: "Sobre Nós" },
                { href: "#processo", label: "Como Funciona" },
                { href: "#contato", label: "Contato" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4">Serviços</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li>Conserto de Geladeiras</li>
              <li>Conserto de Freezers</li>
              <li>Manutenção Preventiva</li>
              <li>Troca de Compressor</li>
              <li>Recarga de Gás</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm">
                <Phone className="w-4 h-4 text-primary mt-0.5" />
                <div>
                  <a href="tel:+5515997337190" className="text-primary-foreground/70 hover:text-primary transition-colors">
                    (15) 99733-7190
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <Mail className="w-4 h-4 text-primary mt-0.5" />
                <a href="mailto:camargorefrigeracao@gmail.com" className="text-primary-foreground/70 hover:text-primary transition-colors">
                  camargorefrigeracao@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                <span className="text-primary-foreground/70">
                  Sorocaba e Região
                </span>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <Clock className="w-4 h-4 text-primary mt-0.5" />
                <span className="text-primary-foreground/70">
                  Seg a Sáb: 8h às 18h
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-primary-foreground/10 text-center text-sm text-primary-foreground/50">
          <p>© {currentYear} Camargo Refrigeração. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
