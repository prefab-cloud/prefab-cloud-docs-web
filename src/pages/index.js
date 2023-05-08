import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/tutorials/get-started"
          >
            Getting Started - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}
function Langs() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div className="container">
      <div className={styles.languages}>
        <Link className={styles.langlink} to="/docs/ruby-sdk/ruby">
          <img src="/img/langs/ruby.png" className="" alt="Ruby" />
          <span>Ruby</span>
        </Link>
        <Link className={styles.langlink} to="/docs/java-sdk/java">
          <img src="/img/langs/java.png" className="" alt="Java" />
          <span>Java</span>
        </Link>
        <Link className={styles.langlink} to="/docs/python-sdk/python">
          <img src="/img/langs/python.png" className="" alt="Python" />
          <span>Python</span>
        </Link>
        <Link className={styles.langlink} to="/docs/elixir-sdk/elixir">
          <img src="/img/langs/elixir.png" className="" alt="Elixir" />
          <span>Elixir</span>
        </Link>
        <Link className={styles.langlink} to="/docs/react">
          <img src="/img/langs/react.png" className="" alt="React" />
          <span>React</span>
        </Link>
        <Link className={styles.langlink} to="/docs/javascript">
          <img src="/img/langs/js.png" className="" alt="JS" />
          <span>Javascript</span>
        </Link>
      </div>
      <div className={styles.request}>
        <div>Don't see the language you're looking for?</div>
        <Link to="https://share.hsforms.com/1BKgbsgReSl2bP351bfdJDg9z48">
          Request a language
        </Link>
      </div>
    </div>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <Langs />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
