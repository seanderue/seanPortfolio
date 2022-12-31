import styles from "../../styles/Project.module.css";
import TechStack from "../../components/StaticTechStack";
import Navbar from "../../components/Navbar";
import Link from "next/link";
import Footer from "../../components/Footer";
import { request } from "../../lib/datocms";
import { HOMEPAGE_QUERY } from "../../lib/queries";
import { StructuredText, Image } from "react-datocms";

const QUERY = HOMEPAGE_QUERY;
const getDatoData = async () => {
  return await request({
    query: QUERY,
    variables: null,
    includeDrafts: false,
    excludeInvalid: true,
  });
};

export async function getStaticPaths() {
  const data = await getDatoData();

  const paths = data.allProjects.map((project) => {
    return {
      params: { slug: project.slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const allData = await getDatoData();
  const projectData = allData.allProjects.filter(
    (project) => project.slug === context.params.slug
  );

  return {
    props: { project: projectData },
  };
}

export default function Project({ project }) {
  console.log(project);
  return (
    <main>
      <Navbar />
      <div className={styles.wrapper}>
        <div className={styles.content_container}>
          <div className={styles.left_column}>
            <div className={styles.hero_section_container}>
              {project[0].hasHeroImage ? (
                <div>
                  <Image
                    style={{ borderRadius: "15px" }}
                    // @ts-ignore
                    data={project[0].heroImage.responsiveImage}
                  />
                </div>
              ) : (
                <video
                  className={styles.hero_section_video}
                  autoPlay
                  controls
                  muted
                  loop
                >
                  <source
                    src={project[0].video.video.mp4Url}
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              )}
              <div className={styles.hero_subsection_container}>
                <TechStack techStack={project[0].techStack} />
                <div className={styles.hero_section_button_container}>
                  <Link href={project[0].codebaseLink}>
                    <button>View Code</button>
                  </Link>
                  <Link href={project[0].liveSiteLink}>
                    <button>Live Site</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.right_column}>
            <h5 className={styles.date_subtitle}>
              Project Date: {project[0].datePublished}
            </h5>
            <h1 className={styles.title}>{project[0].content[0].title}</h1>
            <div className={styles.body_text}>
              <StructuredText
                data={project[0].content[0].introParagraph}
                renderBlock={({ record }) => {
                  switch (record.__typename) {
                    case "ImageRecord":
                      // @ts-ignore
                      return <Image data={record.image.responsiveImage} />;
                    default:
                      return null;
                  }
                }}
              />
            </div>
            <h2 className={styles.subtitle}>
              {project[0].content[1].subheading}
            </h2>
            <div className={styles.body_text}>
              <StructuredText
                data={project[0].content[1].paragraph}
                renderBlock={({ record }) => {
                  switch (record.__typename) {
                    case "ImageRecord":
                      // @ts-ignore
                      return <Image data={record.image.responsiveImage} />;
                    default:
                      return null;
                  }
                }}
              />
            </div>
            <h2 className={styles.subtitle}>
              {project[0].content[2].subheading}
            </h2>
            <div className={styles.body_bullet_list}>
              <StructuredText
                data={project[0].content[2].paragraph}
                renderBlock={({ record }) => {
                  switch (record.__typename) {
                    case "ImageRecord":
                      return (
                        <Image
                          style={{ width: "300px", borderRadius: "15px" }}
                          // @ts-ignore
                          data={record.image.responsiveImage}
                        />
                      );
                    default:
                      return null;
                  }
                }}
              />
            </div>
            <h2 className={styles.subtitle}>
              {project[0].content[3].subheading}
            </h2>
            <div className={styles.body_text}>
              <StructuredText
                data={project[0].content[3].paragraph}
                renderBlock={({ record }) => {
                  switch (record.__typename) {
                    case "ImageRecord":
                      return (
                        // @ts-ignore
                        <Image data={record.image.responsiveImage} />
                      );
                    default:
                      return null;
                  }
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
