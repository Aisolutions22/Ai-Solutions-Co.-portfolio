import { Mail, MessageCircle, Linkedin, Facebook } from "lucide-react";

const socials = [
  { icon: Mail, label: "Email", href: "mailto:sales@aisolutions22.cloud" },
  { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/201007292223" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/mohamed-%C3%A5li-" },
  { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/share/1Cd3zk5ZU7/" },
];

const ContactSection = () => (
  <section id="contact" className="py-24 px-6">
    <div className="max-w-6xl mx-auto text-center">
      <p className="text-muted-foreground text-sm font-medium mb-2 uppercase tracking-wider">Get In Touch</p>
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Let's Build Something Amazing</h2>
      <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-12">
        Ready to automate your business with AI? Let's discuss your project.
      </p>

      <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4">
        {socials.map(({ icon: Icon, label, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full glass-card text-foreground font-medium hover:border-primary/40 hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <Icon size={18} /> {label}
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default ContactSection;
