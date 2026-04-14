import Link from "next/link"
import Image from "next/image"
import { TECH_STACK } from "../constants";
import { useMemo } from "react";

function AboutMe() {

  const renderTechStack = useMemo(
    () =>
      TECH_STACK.map(({ icon, name }) => (
        <div
          key={name}
          className="w-auto border flex justify-center items-center gap-1 hover:bg-orange-200/50 p-2 text-[var(--secondary-text)] border-[var(--border-color)]"
        >
          <Image
            id="name"
            unoptimized
            className="w-8 h-8"
            src={icon}
            alt={name}
            width={32}
            height={32}
          />
          {name}
        </div>
      )),
    [],
  );

  return (
      <section
            id="about"
            className="flex flex-col justify-center w-full gap-8 md:gap-8"
          >
            <h1 className="text-3xl md:text-[2.7rem] font-semibold text-(--text-color)">
              About me
              <span className="font-semibold text-[var(--accent-color)]">
                .
              </span>
            </h1>

            <div className="flex md:flex-row flex-col items-start gap-8 md:gap-0">
              <Link className="w h-full mr-6" href={"/terminal"}>
                <Image
                  src="/avatar.png"
                  alt="me"
                  width={200}
                  height={200}
                  className=" hover: grayscale-100 hover:grayscale-50 rounded-lg border-[var(--border-color)] border object-cover mr-6"
                />
              </Link>

              <div className="hero-para text-[1.15rem] w-full flex flex-col gap-2  text-[var(--secondary-text)] text-shadow font-medium">
                <p>
             I’m Ayush Srivastava / आयुष श्रीवास्तव, an engineer from India. I build clean, scalable apps using TypeScript, React/Next.js, Node (and Bun), and PostgreSQL, with tools like Tailwind, Zustand, and Framer Motion.
                </p>
                <p>
                  I like breaking systems to understand them and rebuilding them
                  better. Outside of dev, I tinker with Linux (arch btw),
                  Raspberry Pi, and Arduino.{" "} 
                 
             
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-[1.15rem] text-[var(--secondary-text)] text-shadow font-bold mb-4">
                Education
              </h2>
              <div className="flex flex-col gap-2 hero-para text-[1.15rem] text-[var(--secondary-text)] text-shadow font-medium">
                <span className="flex flex-wrap w-full justify-between">
                  <p>Bachelor of Technology in Computer Science</p>( Expected:
                  2025 – 2028 )
                </span>
                <span className="flex flex-wrap w-full justify-between">
                  <p>Diploma in Computer Science and Engineering</p>( 2022 –
                  2025 | CGPA: 8.5/10 )
                </span>
              </div>
            </div>

            <div className="tech-stack-container">
              <h2 className="text-[1.15rem] text-[var(--secondary-text)] text-shadow font-bold mb-4">
                Tech Stack
              </h2>
              <span className="flex gap-4 flex-wrap">{renderTechStack}</span>
            </div>

            <hr className="border-[var(--nav-text-color)]" />

            {/* Footer */}
            <footer className="relative">
              <h2 className="text-[1.15rem] text-[var(--secondary-text)] text-shadow font-bold mb-4">
                Contact
              </h2>
              <div className="flex flex-wrap gap-4 text-center items-center justify-center md:justify-between">
                <div className="w-fit rounded-lg flex gap-4 flex-wrap justify-center items-center text-[var(--secondary-text)]">
                  <a
                    className="footerLinks hover:text-(--accent-color)"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/srivastava-ayush"
                  >
                    GitHub
                  </a>
                  <a
                    className="footerLinks hover:text-(--accent-color)"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/ayush0x1/"
                  >
                    LinkedIn
                  </a>
                  <a
                    className="footerLinks hover:text-(--accent-color)"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.x.com/srivastava-ayush/"
                  >
                    X / twitter
                  </a>
                  <a
                    className="footerLinks hover:text-(--accent-color)"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.instagram.com/maihoonayush/"
                  >
                    Instagram
                  </a>
                  <a
                    className="hover:cursor-pointer hover:text-(--accent-color)"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="mailto:srivastava-ayush@outlook.com"
                  >
                  srivastava-ayush@outlook.com
                  </a>
                  <a
                    className="hover:cursor-pointer hover:text-(--accent-color)"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="mailto:srivastava-ayush@outlook.com"
                  >
                    Resume
                  </a>
                </div>
                <div className="group inline-block">
                  <Link
                    href="/terminal"
                    className="text-[var(--secondary-text)] hover:text-orange-400"
                  >
                    © 2025 Ayush Srivastava
                  </Link>

                  <span className="hidden group-hover:block absolute top-0 border p-2 animate-bounce">
                    huh, it&apos;s a secret
                  </span>
                </div>
              </div>
            </footer>
          </section>
  )
}

export default AboutMe