import React from "react";
import Logo from "../Identity/Logo";
import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-site-primary text-white mt-24">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="rounded-3xl bg-gradient-to-r from-[#173b36] via-[#0f2c29] to-[#173b36] p-8 md:p-10 shadow-soft">
          <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-8 items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-site-btnPrimary/80">
                Ready for lift-off?
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold mt-3">
                Launch your next campaign with a dedicated creative squad.
              </h2>
              <p className="text-gray-300 mt-4">
                Brief us once, then let our editors, designers, and strategists
                ship content at speed.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
              <Link
                href="/pricing"
                className="rounded-full bg-site-btnPrimary px-6 py-3 text-center text-site-primary font-semibold hover:bg-[#c9f76f] transition-colors"
              >
                Book a strategy call
              </Link>
              <Link
                href="/our-work"
                className="rounded-full border border-white/40 px-6 py-3 text-center font-semibold hover:bg-white/10 transition-colors"
              >
                View our work
              </Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mt-16">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-5 text-gray-300 max-w-sm">
              SocialEdge is a video editing and marketing partner for growth
              teams. We blend elite talent, tight ops, and AI-assisted workflows
              to ship content that performs.
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="https://www.facebook.com"
                className="rounded-full border border-white/20 p-2 hover:text-site-btnPrimary transition-colors"
                aria-label="Facebook"
                target="_blank"
                rel="noreferrer"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://x.com"
                className="rounded-full border border-white/20 p-2 hover:text-site-btnPrimary transition-colors"
                aria-label="Twitter"
                target="_blank"
                rel="noreferrer"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com"
                className="rounded-full border border-white/20 p-2 hover:text-site-btnPrimary transition-colors"
                aria-label="Instagram"
                target="_blank"
                rel="noreferrer"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com"
                className="rounded-full border border-white/20 p-2 hover:text-site-btnPrimary transition-colors"
                aria-label="LinkedIn"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/services" className="hover:text-site-btnPrimary transition-colors">
                  Performance ads
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-site-btnPrimary transition-colors">
                  Video editing
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-site-btnPrimary transition-colors">
                  Social growth
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-site-btnPrimary transition-colors">
                  Product photography
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-site-btnPrimary transition-colors">
                  AI-assisted content
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/why-us" className="hover:text-site-btnPrimary transition-colors">
                  Why SocialEdge
                </Link>
              </li>
              <li>
                <Link href="/our-work" className="hover:text-site-btnPrimary transition-colors">
                  Case studies
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-site-btnPrimary transition-colors">
                  Insights
                </Link>
              </li>
              <li>
                <Link href="/enterprise" className="hover:text-site-btnPrimary transition-colors">
                  Enterprise
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-gray-300">
              <a
                href="mailto:hello@socialedge.com"
                className="flex items-center gap-2 hover:text-site-btnPrimary transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>hello@socialedge.com</span>
              </a>
              <a
                href="tel:+15551234567"
                className="flex items-center gap-2 hover:text-site-btnPrimary transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>New York, NY / Los Angeles, CA</span>
              </div>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 text-site-btnPrimary hover:text-white transition-colors"
              >
                Get a custom plan <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-6 items-center border-t border-white/10 pt-8 text-gray-400">
          <div className="text-sm">
            &copy; 2026 SocialEdge Creative. All rights reserved.
          </div>
          <form className="flex flex-col sm:flex-row gap-3 sm:justify-end">
            <input
              type="email"
              placeholder="Get our monthly creative brief"
              className="w-full sm:w-auto flex-1 rounded-full border border-white/20 bg-transparent px-4 py-2 text-sm text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-site-btnPrimary/60"
            />
            <button
              type="button"
              className="rounded-full bg-site-btnPrimary px-5 py-2 text-sm font-semibold text-site-primary hover:bg-[#c9f76f] transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
