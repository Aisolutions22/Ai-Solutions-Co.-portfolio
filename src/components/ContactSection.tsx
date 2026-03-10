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
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Build Something Amazing</h2>
      <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-12">
        Ready to automate your business with AI? Let's discuss your project.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        {socials.map(({ icon: Icon, label, href }) => (
          <a
            key={label}
            href={href}
            target={label === "Email" ? undefined : "_blank"}
            rel={label === "Email" ? undefined : "noopener noreferrer"}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-border text-foreground font-medium hover:bg-secondary hover:border-primary/30 hover:shadow-[0_0_15px_hsl(217,91%,60%,0.15)] transition-all duration-300"
          >
            <Icon size={18} /> {label}
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default ContactSection;
