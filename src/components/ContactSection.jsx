import { useState } from "react";
import { ArrowUpRight, Mail, Send } from "lucide-react";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:fayzanintech15@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  function updateField(event) {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
    setSubmitted(false);
  }

  return (
    <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
      <div>
        <div className="mb-5 inline-flex rounded-xl border border-neon/20 bg-neon/[.06] p-3 text-neon"><Mail size={22} /></div>
        <h3 className="font-display text-2xl font-semibold">Let's build something useful.</h3>
        <p className="mt-4 max-w-md leading-7 text-zinc-400">Have a full-stack role, collaboration, or project in mind? Send a message and let's connect.</p>
        <a href="mailto:fayzanintech15@gmail.com" className="mt-6 inline-flex items-center gap-2 text-neon hover:underline">fayzanintech15@gmail.com <ArrowUpRight size={15} /></a>
      </div>
      <form onSubmit={handleSubmit} className="panel space-y-4 p-5 sm:p-7">
        <div>
          <label htmlFor="contact-name" className="mb-2 block text-sm text-zinc-300">Your name</label>
          <input id="contact-name" name="name" value={form.name} onChange={updateField} required maxLength={100} autoComplete="name" className="w-full rounded-lg border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-neon/50" placeholder="Jane Smith" />
        </div>
        <div>
          <label htmlFor="contact-email" className="mb-2 block text-sm text-zinc-300">Email address</label>
          <input id="contact-email" name="email" type="email" value={form.email} onChange={updateField} required maxLength={200} autoComplete="email" className="w-full rounded-lg border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-neon/50" placeholder="jane@example.com" />
        </div>
        <div>
          <label htmlFor="contact-message" className="mb-2 block text-sm text-zinc-300">Message</label>
          <textarea id="contact-message" name="message" value={form.message} onChange={updateField} required minLength={10} maxLength={3000} rows={4} className="w-full resize-y rounded-lg border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-neon/50" placeholder="Tell me a little about the opportunity..." />
        </div>
        <button type="submit" className="neon-button w-full sm:w-auto"><Send size={15} /> Open email draft</button>
        {submitted && <p role="status" className="text-sm text-zinc-400">Your email app should open with a pre-filled message. If nothing opens, write to me directly at the address on the left.</p>}
        <p className="text-xs leading-5 text-zinc-600">This demo opens your email application. To send messages directly from the website, connect a backend or form service.</p>
      </form>
    </div>
  );
}
