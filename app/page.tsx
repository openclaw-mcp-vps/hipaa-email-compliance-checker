export default function Page() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] text-[#58a6ff] text-xs font-semibold tracking-widest uppercase border border-[#30363d]">
          Healthcare IT &amp; Compliance
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Ensure Emails Meet{" "}
          <span className="text-[#58a6ff]">HIPAA Compliance</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Instantly scan email content for PHI exposure, validate encryption requirements,
          check recipient authorization, and generate tamper-proof audit trails — all without
          storing sensitive data.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block px-8 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-bold text-base hover:bg-[#79b8ff] transition-colors"
        >
          Start Free Trial — $19/mo
        </a>
        <ul className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-[#8b949e]">
          <li className="flex items-center gap-1"><span className="text-[#58a6ff]">✓</span> PHI Detection</li>
          <li className="flex items-center gap-1"><span className="text-[#58a6ff]">✓</span> Encryption Validation</li>
          <li className="flex items-center gap-1"><span className="text-[#58a6ff]">✓</span> Recipient Authorization</li>
          <li className="flex items-center gap-1"><span className="text-[#58a6ff]">✓</span> Audit Trail Generation</li>
        </ul>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="rounded-2xl border border-[#30363d] bg-[#161b22] p-8 text-center shadow-xl">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#58a6ff] mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$19<span className="text-xl font-normal text-[#8b949e]">/mo</span></p>
          <p className="text-sm text-[#8b949e] mb-6">Everything you need for HIPAA email compliance</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Unlimited email scans",
              "AI-powered PHI detection",
              "Encryption status checks",
              "Recipient allowlist management",
              "Downloadable audit logs (PDF/CSV)",
              "Priority support"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-bold hover:bg-[#79b8ff] transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">Does the tool store my email content?</h3>
            <p className="text-[#8b949e] text-sm">No. Email content is processed in-memory and immediately discarded after analysis. We never persist PHI or message bodies to any database.</p>
          </div>
          <div className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">What types of PHI can it detect?</h3>
            <p className="text-[#8b949e] text-sm">The AI engine detects all 18 HIPAA identifiers including names, dates, phone numbers, SSNs, medical record numbers, IP addresses, and more — with contextual analysis to reduce false positives.</p>
          </div>
          <div className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">Can I integrate this with my existing email system?</h3>
            <p className="text-[#8b949e] text-sm">Yes. The secure REST API can be integrated with any email platform — Microsoft 365, Google Workspace, or custom SMTP setups — via webhook or direct API calls.</p>
          </div>
        </div>
      </section>

      <footer className="text-center pb-10 text-xs text-[#484f58]">
        &copy; {new Date().getFullYear()} HIPAA Email Compliance Checker. Not a substitute for legal counsel.
      </footer>
    </main>
  );
}
