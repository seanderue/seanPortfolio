import styles from '../../styles/Project.module.css'
import TechStack from '../../components/StaticTechStack'
import Navbar from '../../components/Navbar'
import Link from 'next/link'
import Footer from '../../components/Footer'

export default function Tenzies() {

  const techStack = [{
    name: 'React',
    imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
},
{
    name: 'Socket.io',
    imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg'
},
{
    name: 'Node js',
    imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg'
}    
]

  return (
    <main>
      <Navbar />
      <div className={styles.wrapper}>
        <div className={styles.content_container}>
          <div className={styles.left_column}>
            <div className={styles.hero_section_container}>
              <video className={styles.hero_section_video} controls autoPlay muted loop>
                <source src="/videos/tenzies1.mp4" type="video/mp4"/>
                Your browser does not support the video tag.
              </video>
            <div className={styles.hero_subsection_container}>
              <TechStack
                techStack={techStack}/>
                <div className={styles.hero_section_button_container}>
                  <Link href="https://github.com/seanderue/TenziesOnline">
                    <button>View Code</button>
                  </Link>
                  <Link href="/project/WIP">
                    <button>Live Site</button>
                  </Link>
                </div>
            </div>
          </div>
        </div>
          <div className={styles.right_column}>
            <h1 className={styles.title}>Multiplayer Tenzies</h1>
            <p className={styles.body_text}>This was my first-ever significant project. Originally I wanted to make a table-top multiplayer game, but it didn’t take long to realize I had bit off more than I could chew. Instead, I made the back-end additions necessary to this game that I created at the end of a scrimba-react course. I had really pushed myself on this project, so I remember it fondly.</p>
              <h4 className={styles.subtitle}>Goal</h4>
              <p className={styles.body_text}>Learn about websockets and database building to create a real-time dice game that could be played by my friends in-between League of Legends queue timers.</p>
              <h4 className={styles.subtitle}>Project Features</h4>
              <ul className={styles.body_bullet_list}>
                <li>Server-validated game logic</li>
                <li>Real-time player interaction through websocket connections</li>
                <li>JSON Database updated live on the server</li>
                <li>Fun confetti upon winning 😉</li>
              </ul>
              <h4 className={styles.subtitle}>Outcome</h4>
              <p className={styles.body_text}>I made a playable game! The back-end is server-validated. So Player A make an input, the server takes the data, runs it through the game logic, and updates the client-side state of Players A, B, C, and D in the target game-room.
                <br/><br/>
                I definitely learned how unglamorous backend can be, as I put in a lot of work for someone to click a dice and have it turn green on multiple clients. That said, I have the barebones framework complete, and it would be relatively easy to add more features like player power-ups/weapons that they could interact with the enemy board with.
                <br/><br/>
                Eventually I’d like to go back and polish the CSS and add those features. But for a project that was meant to learn how to build my own back-end &amp; real-time database, (while working on my React muscles), I checked my boxes. <br/><br/>At the time, I had to get rolling on more projects so I could be that much closer to employment.</p>


          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
