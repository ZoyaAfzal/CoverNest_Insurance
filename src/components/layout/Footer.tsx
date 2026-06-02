import { Link } from "@tanstack/react-router";
import { Shield, Facebook, Twitter, Linkedin, Instagram, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
  return (
    <footer className="bg-brand-dark text-white/80 mt-24">
      <div className="container-x py-16 grid gap-12 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid place-items-center size-9 rounded-full bg-brand-green-light text-brand-dark">
              <Shield className="size-4" />
            </span>
            <span className="font-display text-xl text-white">
              Cover<span className="italic text-brand-green-light">Nest</span>
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-white/60">
            Modern insurance, designed with clarity. Protecting families and businesses for over 35 years.
          </p>
          <div className="mt-5 flex gap-3">
            {[Twitter, Linkedin, Facebook, Instagram].map((Icon, i) => (
              <a key={i} href="#" className="size-9 grid place-items-center rounded-full border border-white/15 hover:bg-brand-green-light hover:text-brand-dark hover:border-brand-green-light transition">
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-white text-base">Company</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {[["/", "Home"], ["/about", "About"], ["/team", "Team"], ["/blog", "Blog"], ["/contact", "Contact"]].map(([to, l]) => (
              <li key={to}><Link to={to} className="hover:text-brand-green-light">{l}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-white text-base">Coverage</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {["health", "auto", "home", "life", "business", "travel"].map((s) => (
              <li key={s}>
                <Link to="/services/$slug" params={{ slug: s }} className="hover:text-brand-green-light capitalize">
                  {s} Insurance
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-white text-base">Stay informed</h4>
          <p className="mt-4 text-sm text-white/60">Monthly insights on protecting what matters.</p>
          <form className="mt-3 flex gap-2">
            <Input placeholder="you@email.com" className="bg-white/5 border-white/15 text-white placeholder:text-white/40" />
            <Button variant="gold" size="default">Join</Button>
          </form>
          <ul className="mt-6 space-y-2 text-xs text-white/60">
            <li className="flex items-center gap-2"><Mail className="size-3.5"/> hello@covernest.com</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x py-5 flex items-center justify-end text-xs text-white/50">
          <a href="https://axistechgroup.com/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-green-light transition-colors">
            Powered by AxisTechGroup
          </a>
        </div>
      </div>
    </footer>
  );
}
