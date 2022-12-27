import styles from "../../styles/Project.module.css";
import TechStack from "../../components/StaticTechStack";
import Navbar from "../../components/Navbar";
import Link from "next/link";
import Footer from "../../components/Footer";

export default function Tenzies() {
  const techStack = [
    {
      name: "React",
      imgSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Typescipt",
      imgSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      name: "Three.js",
      imgSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg",
    },
  ];

  return (
    <main>
      <Navbar />
      <div className={styles.wrapper}>
        <div className={styles.content_container}>
          <div className={styles.left_column}>
            <div className={styles.hero_section_container}>
              <video
                className={styles.hero_section_video}
                autoPlay
                controls
                muted
                loop
              >
                <source src="/videos/coverLetterDemo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className={styles.hero_subsection_container}>
                <TechStack techStack={techStack} />
                <div className={styles.hero_section_button_container}>
                  <Link href="https://github.com/seanderue/webstacks">
                    <button>View Code</button>
                  </Link>
                  <Link href="https://webstacks-alpha.vercel.app">
                    <button>Live Site</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.right_column}>
            <h1 className={styles.title}>Webstacks 3D cover letter</h1>
            <p className={styles.body_text}>
              {
                "Because the tech-job market was hurting, and I am a self-taught developer, I decided to build something to help me stand out. In just 23 days, I built a 3D web experience dedicated to a company whom I really wanted to work for (Webstacks). I used all of their favorite tech, posted it to LinkedIn, submitted it along with my job application, and crossed my fingers."
              }
            </p>
            <h4 className={styles.subtitle}>Goal</h4>
            <p className={styles.body_text}>
              {
                "Think out of the box to land a career role. Use this project to impress the team at Webstacks and ultimately earn a job as a React Engineer. In the process, I'd enjoy getting more experience with headless CMS."
              }
            </p>
            <h4 className={styles.subtitle}>Project Features</h4>
            <ul className={styles.body_bullet_list}>
              <li>3D experience using Three.js & React-Three/Fiber</li>
              <li>
                Webstack's design elements, methodology, and job description
                expanded upon to illustrate how I'd fit in
              </li>
              <li>Server-Side-Rendering with Next.js</li>
              <li>Content hydration from headless CMS using Dato CMS</li>
              <li>Handmade 3D .gltf models</li>
              <li>Easter egg in console.log() 😉</li>
            </ul>
            <h4 className={styles.subtitle}>Outcome</h4>
            <p className={styles.body_text}>
              {
                "Time will tell! As of today, Dec. 27 2022, I'm still in the throes of the career search. I've always known that I'll bring my all to the table wherever I end up. Now I'm glad to have made a project that I believe communicates this well."
              }
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
