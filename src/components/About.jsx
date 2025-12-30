import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="px-5 lg:px-28 flex justify-between flex-col lg:flex-row" id="about">
      <motion.div
        className="lg:w-1/2"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10 }}
        viewport={{ once: true }}
      >
        <img src="/assets/about-me.svg" alt="About Me Illustration" />
      </motion.div>

      <motion.div
        className="lg:w-1/2"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="lg:text-4xl text-2xl mt-4 lg:mt-0">
          About <span className="font-extrabold">Me</span>
        </h2>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-5 lg:mt-10">
          I’m a full-stack developer who believes that good software is built by understanding real problems first — not just writing code. I enjoy creating clean, scalable, and user-friendly web applications that actually make workflows simpler for users and businesses.
        </p>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
          My development journey began in 2022, and since then I’ve worked on real-world projects including admin dashboards, management systems, SaaS-style platforms, and full-stack products. I primarily work with React, Next.js, Node.js, Express, Supabase, and modern UI tools, focusing on performance, maintainability, and smooth user experience.
        </p>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
          I’m constantly learning and experimenting with better ways to build products, improve architecture, and write cleaner code. Beyond development, I enjoy exploring startup journeys, understanding how products scale, and building projects that can create real impact. You’ll usually find me improving my craft, shipping features, or refining ideas into working solutions.
        </p>
      </motion.div>
    </div>
  );
}
