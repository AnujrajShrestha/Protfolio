import { useState } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiFacebook, FiInstagram } from "react-icons/fi";
import SectionHeading from "../ui/SectionHeading.jsx";
import MagneticButton from "../ui/MagneticButton.jsx";
import { SOCIALS } from "../../data/config.js";

const ICONS = {
  github: FiGithub,
  facebook: FiFacebook,
  instagram: FiInstagram,
};

export default function Contact() {
  const [note, setNote] = useState(
    "// Send me a message. I'll get back to you soon."
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    setNote("// Sending message...");

    const formData = new FormData(e.target);

    formData.append("access_key","17a9b710-dd81-405a-b574-b66dc869ea51");
    formData.append("subject", "New Portfolio Contact");
    formData.append("from_name", "Portfolio Website");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const result = await response.json();

      if (result.success) {
        setNote("// Message sent successfully ✔");
        e.target.reset();
      } else {
        console.log(result);
        setNote("// Failed to send message.");
      }
    } catch (error) {
      console.error(error);
      setNote("// Network error. Please try again.");
    }
  };

  return (
    <section id="contact" className="border-t border-line/70 py-24">
      <SectionHeading
        eyebrow="connect"
        title="Contact"
        path={'~$ mail -s "let\'s build something"'}
      />

      <div className="grid gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="max-w-md text-[14px] leading-relaxed text-muted">
            Open to internships, freelance collaborations, and interesting AI /
            full-stack problems. Drop a message or reach out directly on any
            channel below.
          </p>

          <div className="mt-7 flex flex-col gap-3">
            {SOCIALS.map((s) => {
              const Icon = ICONS[s.icon];

              return (
                <MagneticButton
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  strength={8}
                  className="flex items-center gap-3 rounded-lg border border-line px-4 py-3 text-[13px] transition-colors hover:border-phosphor hover:text-phosphor-bright"
                >
                  <Icon className="text-base shrink-0" />
                  {s.label}
                </MagneticButton>
              );
            })}
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          onSubmit={handleSubmit}
          className="flex flex-col gap-4"
        >
          <input type="hidden" name="access_key" value="17a9b710-dd81-405a-b574-b66dc869ea51"/>
          <div>
            <label className="mb-1.5 block text-[11px] uppercase tracking-wide text-muted">
              From
            </label>

            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              className="w-full rounded-md border border-line bg-panel px-4 py-2.5 text-sm text-phosphor-bright outline-none focus:border-phosphor"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-[11px] uppercase tracking-wide text-muted">
              Reply-To
            </label>

            <input
              type="email"
              name="email"
              required
              placeholder="your@email.com"
              className="w-full rounded-md border border-line bg-panel px-4 py-2.5 text-sm text-phosphor-bright outline-none focus:border-phosphor"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-[11px] uppercase tracking-wide text-muted">
              Body
            </label>

            <textarea
              name="message"
              required
              rows={5}
              placeholder="Type your message..."
              className="w-full resize-y rounded-md border border-line bg-panel px-4 py-2.5 text-sm text-phosphor-bright outline-none focus:border-phosphor"
            />
          </div>

          <MagneticButton
            as="button"
            type="submit"
            strength={10}
            className="mt-1 inline-flex w-fit items-center gap-2 border border-phosphor bg-phosphor/5 px-5 py-2.5 text-[13px] text-phosphor-bright transition-shadow hover:shadow-glow-sm"
          >
            send_message() →
          </MagneticButton>

          <p className="text-[11px] text-muted">{note}</p>
        </motion.form>
      </div>
    </section>
  );
}