import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="The site of Jaco Jansen van Vuuren"
    >
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                "button button--outline button--secondary button--lg",
                styles.getStarted
              )}
              to={useBaseUrl("blog/")}
            >
              My Blog
            </Link>
          </div>
        </div>
      </header>
      <main>
        <section className={clsx(styles.textCenter, styles.padText)}>
          Currently there is nothing else that I can show you - try taking a
          look at the <Link to={useBaseUrl("blog/")}>blog</Link> - otherwise -
          the only other thing I can really offer you is a song that I like...
        </section>
        <section className={styles.textCenter}>
          <iframe
            className={styles.max100}
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/zxDws0Y5FJ8"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
