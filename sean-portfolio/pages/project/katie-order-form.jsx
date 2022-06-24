import styles from '../../styles/Project.module.css'
import TechStack from '../../components/StaticTechStack'

export default function katieOrderFormPage() {

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
      <div className={styles.wrapper}>
        <div className={styles.content_container}>
          <div className={styles.left_column}>
            <div className={styles.hero_section_container}>
              <img className={styles.img__responsive}src='/images/cake-thumbnail.jpeg'></img>
              <div className={styles.hero_section_button_container}>
                <button>View Code</button>
                <button>Live Site</button>
              </div>
            </div>
          </div>
          <div className={styles.right_column}>
            <h1>Bakery Order Form</h1>
            <TechStack
              techStack={techStack}/>
            <p>pushing to domain, consectetur adipiscing elit. Sed tempor ac felis nec 
              laoreet. Suspendisse ornare cursus nunc at ultricies. Cras tincidunt mauris ac ante </p>
              <h4>Goal</h4>
              <p>viverra malesuada. Pellentesque sit amet volutpat ex, vel accumsan nisi. Nunc finibus vestibulum dapibus. Donec tempus, ex eget varius turpis. Aenean pretium mattis orci, et tincidunt turpis mollis quis. </p>
              <h4>Project Features</h4>
              <ul>
                <li>Interactive WebGL-rendered cookies raining</li>
                <li>Detailed email sent to baker upon form submit</li>
                <li>Form logic &amp; error handling</li>
                <li>Custom &amp; device-responsive react/css animations </li>
              </ul>
          </div>
        </div>
      </div>
    </main>
  )
}
