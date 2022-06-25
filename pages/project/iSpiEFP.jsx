import styles from '../../styles/Project.module.css'
import TechStack from '../../components/StaticTechStack'
import Navbar from '../../components/Navbar'
import Link from 'next/link'
import Footer from '../../components/Footer'

export default function iSpiEFP() {

  const techStack = [{
    name: 'Java',
    imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg'
},
{
    name: 'CSS',
    imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
},
{
    name: 'GitHub',
    imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'
}    
]

  return (
    <main>
      <Navbar />
      <div className={styles.wrapper}>
        <div className={styles.content_container}>
          <div className={styles.left_column}>
            <div className={styles.hero_section_container}>
                <div>
                  <img 
                    style={{
                    borderRadius:'15px'}} 
                    src="/images/ispi-main2.png" />
                </div>
            <div className={styles.hero_subsection_container}>
              <TechStack
                techStack={techStack}/>
                <div className={styles.hero_section_button_container}>
                  <Link href="https://github.com/iSpiEFP/iSpiEFP_GUI">
                    <button>View Code</button>
                  </Link>
                  <Link href="https://www.chem.purdue.edu/Slipchenko/">
                    <button>More Info</button>
                  </Link>
                </div>
            </div>
            <div className={styles.photo_grid}>
              <img src="/images/ispi-main1.png" />
              <img src="/images/ispi-analysis.png" />
              <img src="/images/ispi-submit.png" />
              <img src="/images/ispi-select-fragment.png" />
            </div>
          </div>
        </div>
          <div className={styles.right_column}>
            <h1 className={styles.title}>I Spy Effective Fragment Potential (ISpiEFP)</h1>
              <h4 className={styles.subtitle}>Project Features</h4>
              <ul className={styles.body_bullet_list}>
                <li>Large Codebase</li>
                <li>Team Setting</li>
                <li>CI/CD</li>
                <li>Version Control &amp; Branching</li>
              </ul>
            <p className={styles.body_text}>Good news. If you don’t know what Chemical Effective Fragment Potential is, you’re in good company. I just helped make the GUI. This was my first experience working in a team setting with a large code-base, CI/CD, tests, weekly meetings, git issues, etc. 
            <br/><br/>
            I include this project because it shows my ability to work in a team and production setting.
            <br/><br/>
            My main role in the group had been refactoring the repo to upgrade from Java 7 to Java 8. This was certainly the single biggest upgrade to the language since its conception. So this led to dependencies compatability issues, build-time difficulties, etc.
            </p> 
            {/* <h4 className={styles.subtitle}>Tech Stack:</h4> */}
              <h4 className={styles.subtitle}>Goal</h4>
              <p className={styles.body_text}>My goal when starting this job was to help the team meet their grant deadlines. My brother had long been one of the main members of the team and he had mentioned that they could use some help. 
              <br/><br/>
              I had taken Java programming in high school (a skill that I didn’t want to atrophy). I joined the team as a marketing major among computer scientists. Because of that, I tended to take the fewer computation-specific issues. And that had been enough for me to stretch my software engineering limits.</p>
              <h4 className={styles.subtitle}>Outcome</h4>
              <p className={styles.body_text}>
              I was able to get experience on a large code-base, in a team setting, with version control, branching, and issues--all while being just out of my comfort zone. Thankfully, had I taken it upon myself to create meeting notes for the team every week. (Without them, I wouldn't have been able to provide as much detail here).
              <br/><br/>
              To hit our build deadline, we needed to produce an executable .JAR file that chemists could download to run the software. At the time, we weren’t able to do that because of dependency version compatibility issues. 
              <br/><br/>
              Since this wasn't a computational issue, I took it. Reading as many Java dependency docs as I did, I had felt like a lawyer scanning through generations of case law who was looking for a way to exonerate a client. Eventually, I was able to come up with a solution that involved refactoring our code base to work with Maven. From there, I could use tools like Jdeps and Jlink to fix splits and reflections and to handle non-modularized dependencies. Ultimately, we were able to create the automatic snapshots that we were hoping for.
              <br/><br/>
              Nearing graduation, I left the team in search for other opportunities more related to my major at the time.
              </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
