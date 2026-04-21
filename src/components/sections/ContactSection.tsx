import { portfolioData } from '../../data/portfolio'
import { SectionTitle } from '../ui/SectionTitle'
import { Mail, Send } from 'lucide-react'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useState } from 'react'

export function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) return
    // wire up your form handler / API here
    setSent(true)
    setForm({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <section className="space-y-6">
      <SectionTitle>Get in touch</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* Left — intro + links */}
        <div className="space-y-5">
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Open to graduate software roles, internships, and collaboration
            opportunities. I'll do my best to respond promptly.
          </p>
          <div className="flex flex-col gap-2">
            {[
              { icon: Mail, label: 'Email', handle: portfolioData.email, href: `mailto:${portfolioData.email}` },
              { icon: FaGithub, label: 'GitHub', handle: `@${portfolioData.github}`, href: `https://github.com/${portfolioData.github}` },
              { icon: FaLinkedin, label: 'LinkedIn', handle: portfolioData.linkedin, href: `https://linkedin.com/in/${portfolioData.linkedin}` },
            ].map(({ icon: Icon, label, handle, href }) => (
              <a key={label} href={href}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors text-sm">
                <Icon size={15} className="text-zinc-500" />
                <span className="font-medium flex-1">{label}</span>
                <span className="text-zinc-500">{handle}</span>
              </a>
            ))}
          </div>
        </div>
        {/* Right — form */}
        <div className="flex flex-col gap-3">
          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-zinc-500">Name</label>
              <input type="text" value={form.name} onChange={e => setForm(f => ({...f, name: e.target.value}))}
                placeholder="Alex Kim"
                className="w-full px-3 py-2 text-sm rounded-lg border border-zinc-200 dark:border-zinc-800 bg-transparent focus:outline-none focus:ring-1 focus:ring-zinc-400" />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-zinc-500">Email</label>
              <input type="email" value={form.email} onChange={e => setForm(f => ({...f, email: e.target.value}))}
                placeholder="alex@example.com"
                className="w-full px-3 py-2 text-sm rounded-lg border border-zinc-200 dark:border-zinc-800 bg-transparent focus:outline-none focus:ring-1 focus:ring-zinc-400" />
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-zinc-500">Subject</label>
            <input type="text" value={form.subject} onChange={e => setForm(f => ({...f, subject: e.target.value}))}
              placeholder="Internship opportunity"
              className="w-full px-3 py-2 text-sm rounded-lg border border-zinc-200 dark:border-zinc-800 bg-transparent focus:outline-none focus:ring-1 focus:ring-zinc-400" />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-zinc-500">Message</label>
            <textarea value={form.message} onChange={e => setForm(f => ({...f, message: e.target.value}))}
              rows={4} placeholder="Hi, I came across your portfolio and…"
              className="w-full px-3 py-2 text-sm rounded-lg border border-zinc-200 dark:border-zinc-800 bg-transparent resize-none focus:outline-none focus:ring-1 focus:ring-zinc-400" />
          </div>
          <button onClick={handleSubmit}
            className="flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium rounded-lg border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors">
            Send message <Send size={13} />
          </button>
          {sent && (
            <p className="text-sm text-green-600 dark:text-green-400">
              Message sent — I'll be in touch soon.
            </p>
          )}
        </div>
        
      </div>
    </section>
  )
}