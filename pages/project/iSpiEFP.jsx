import styles from '../../styles/Project.module.css'
import TechStack from '../../components/StaticTechStack'
import Navbar from '../../components/Navbar'
import Link from 'next/link'
import Footer from '../../components/Footer'

export default function iSpiEFP() {

  const techStack = [{
    name: 'React',
    imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
},
{
    name: 'Three.js',
    imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg'
},
{
    name: 'Firebase',
    imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg'
}    
]

  return (
    <main>
      <Navbar />
      <div className={styles.wrapper}>
        <div className={styles.content_container}>
          <div className={styles.left_column}>
            <div className={styles.hero_section_container}>
              <video className={styles.hero_section_video} autoPlay muted loop>
                <source src="/videos/bakery1.mp4" type="video/mp4"/>
                Your browser does not support the video tag.
              </video>
            <div className={styles.hero_subsection_container}>
              <TechStack
                techStack={techStack}/>
                <div className={styles.hero_section_button_container}>
                  <Link href="https://github.com/seanderue/katie-order-form">
                    <button>View Code</button>
                  </Link>
                  <Link href="https://katie-order-form.vercel.app/">
                    <button>Live Site</button>
                  </Link>
                </div>
            </div>
          </div>
        </div>
          <div className={styles.right_column}>
            <h1 className={styles.title}>Bakery Order Form</h1>
            <p className={styles.body_text}>For years, my girlfriend had been selling baked goods around to the neighbors. Since then, things have started to pick up for her quite a bit through word-of-mouth. She wanted a site that would organize all of her orders and make the customer experience easier.</p>
            {/* <h4 className={styles.subtitle}>Tech Stack:</h4> */}
              <h4 className={styles.subtitle}>Goal</h4>
              <p className={styles.body_text}>Ultimately, we wanted it to be sharable &amp; easy-to-use. A good portion of her clientele aren’t as tech-savvy, so it was important that the form had an easy-to-follow UX. Rather than just make great sweets, we wanted the whole customer lifecycle to be a treat.</p>
              <h4 className={styles.subtitle}>Project Features</h4>
              <ul className={styles.body_bullet_list}>
                <li>Interactive WebGL-rendered cookies raining</li>
                <li>Detailed email sent to baker upon form submit</li>
                <li>Form logic &amp; error handling</li>
                <li>Custom &amp; device-responsive react/css animations </li>
              </ul>
              <h4 className={styles.subtitle}>Outcome</h4>
              <ul className={styles.body_bullet_list}>
                <li>Huge brand upgrade</li>
                <li>Easier way to organize orders via email inbox </li>
                <li>Happy customers can refer others easier (with an easy QR code/URL)</li>
                <li>It makes it easier for a customer to order (Don’t have to track her down on socials)</li>
                <li>The form is easily customizable for sales, price updates, etc.</li>
              </ul>

          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
