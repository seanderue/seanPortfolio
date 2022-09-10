import styles from '../../styles/Project.module.css'
import TechStack from '../../components/StaticTechStack'
import Navbar from '../../components/Navbar'
import Link from 'next/link'
import Footer from '../../components/Footer'

export default function budgetPage() {

  const techStack = [{
    name: 'React Native',
    imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
},
{
    name: 'Typescipt',
    imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
},
{
    name: 'AWS',
    imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg'
}    
]

  return (
    <main>
      <Navbar />
      <div className={styles.wrapper}>
        <div className={styles.content_container}>
          <div className={styles.left_column}>
            <div className={styles.hero_section_container}>
            <h2 className={styles.medtitle}> Design 1.0 </h2>
            <p className={styles.body_text}> After the first design, I got to programming. Once I distanced myself from the design process a bit, I realized how cluttered the UI was. It wasn't <i>fun</i> to use. It was <i>useful</i>, but it wasn't <i>fun</i>. The same could be said about a budget spreadsheet. So after a brief period of kicking myself for going too high-fidelity too early, I went back to the drawing board and started <i>another</i> high-fidelity prototype 😅</p>
            <div className={styles.flex_container}>
              <iframe className={styles.figma_iframe} src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FaP86smGqzi9WFiPCNDiJue%2FPaySense-Light-UI-Project%3Fnode-id%3D0%253A1" allowFullScreen></iframe>
              <video className={styles.left_section_video} autoPlay controls muted loop>
                <source src="/videos/PaySense-design1.mp4" type="video/mp4"/>
                Your browser does not support the video tag.
              </video>
            </div>
            <div className={styles.hero_subsection_container}>
              <TechStack
                techStack={techStack}/>
                <div className={styles.hero_section_button_container}>
                  <Link href="https://github.com/seanderue/PaySense">
                    <button>View Code</button>
                  </Link>
                  {/* <Link href="https://katie-order-form.vercel.app/">
                    <button>Live Site</button>
                  </Link> */}
                </div>
            </div>

          </div>
        </div>
          <div className={styles.right_column}>
            <h1 className={styles.title}>Budgeting App</h1>
            <p className={styles.body_text}>Budgeting is one of the most powerful financial game-changers someone can make. Forecasting your life goals and tracking your progress is no small thing. That said, budgeting apps are too feature-less, too complicated, or too expensive. So my goal with this app was to use the 50/30/20 rule to allow users to personalize a financial GPS in minutes.</p>
              <h4 className={styles.subtitle}>Goal</h4>
              <p className={styles.body_text}>This is the first project of mine that I'd like to explore productizing. The idea of creating an ecosystem of simple and impactful apps is very appealing to me. I see nutrition tracking apps, language learning apps, and more in the future. That said, I'm pulling out all the stops for this app. Other projects, I'd not do testing, not use typescript, not create documentation, not do code reviews...but this one is getting the full treatment. <br/><br/>I'm the dork who is putting every feature into a user story within an agile framework. It'll take a lot longer to put this polish on my app, but my hope is to get more employable experience using production environment best practices.</p>
              <h4 className={styles.subtitle}>Project Features</h4>
              <ul className={styles.body_bullet_list}>
                <li>Manual &amp; automatic expense tracking and categorization</li>
                <li>Custom budget dashboard for quick reference</li>
                <li>2D graphics for long-term financial data visualization</li>
                <li>Receipt scanning coming in PaySense 2.0</li>
              </ul>
              <h4 className={styles.subtitle}>Outcome</h4>
              <p className={styles.body_text}><b>Time will tell!</b> My app is still in development. I'd love to hear your thoughts throughout the process! I'm documenting its development on <a className={styles.link} href='https://www.linkedin.com/in/sean-derue/'>LinkedIn</a> for now. Feel free to follow and give feedback!</p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
