import { Mail, MessageCircle, Linkedin } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="py-24 px-6">
    <div className="max-w-6xl mx-auto text-center">
      <p className="text-muted-foreground text-sm font-medium mb-2 uppercase tracking-wider">Get In Touch</p>
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Build Something Amazing</h2>
      <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-12">
        Ready to automate your business with AI? Let's discuss your project.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a href="mailto:contact@abumalik.ai" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-border text-foreground font-medium hover:bg-secondary transition-colors">
          <Mail size={18} /> Email
        </a>
        <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-border text-foreground font-medium hover:bg-secondary transition-colors">
          <MessageCircle size={18} /> WhatsApp
        </a>
        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-border text-foreground font-medium hover:bg-secondary transition-colors">
          <Linkedin size={18} /> LinkedIn
        </a>
      </div>
    </div>
  </section>
);

export default ContactSection;
