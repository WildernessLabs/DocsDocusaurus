import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import "../css/components/home-page.scss";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`Hello from ${siteConfig.title}`}>
      <main>
        <section id="homepage">
          <div className="home-container">
            <header className="hero">
              <div className="hero-content">
                <div className="container">
                  <h1>Default</h1>
                  <p>
                    Get up and running with the Meadow Getting Started Guides.
                    Setup your development environment, configure your Meadow
                    dev kit, and deploy your first application.
                  </p>
                  <a className="button-blue" href="#">
                    Get Started
                  </a>
                </div>
              </div>
            </header>
            <div className="container">
              <section className="meadow-intro">
                <h2>Meadow</h2>
                <hr></hr>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed metus dui adipiscing nunc commodo at et in. Aliquam, ultrices arcu nulla at eget ultrices ultricies rhoncus, vitae.</p>
              </section>
              <section className="meadow-features">good</section>
              <section className="tutorial-section">huh</section>
              <section className="events-section">what</section>
              <section className="sample-projects">neat</section>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
