import * as React from 'react';
import Image from 'next/image';
import styles from './projects.module.scss';
import stockFinderImage from '../public/projects/stockFinder.png';
import plantleyImage from '../public/projects/plantley.png';
import moneyMeImage from '../public/projects/moneyme.png';
import showMeImage from '../public/projects/showme.png';
import toDoListImage from '../public/projects/todolist.png';
import bgscores from '../public/projects/bgscores.png';

export default function Projects() {
  return (
    <section className={styles.projectsWrapper}>
      <div className={styles.projects}>
        {/* Plant shop */}
        <div className={styles.project}>
          <div>
            {' '}
            <h4 className={styles.projectTitle}>Plant Shop</h4>
            <p className={styles.projectDescription}>
              A mobile friendly e-commerce website built using{' '}
              <span className={styles.tech}>React</span>,{' '}
              <span className={styles.tech}>Typescript</span>,{' '}
              <span className={styles.tech}>Django</span>, and{' '}
              <span className={styles.tech}>Stripe</span>, that allow customers
              to buy houseplants, with or without an account, and allows admin
              users to manage their shop inventory.
            </p>
          </div>
          <div>
            <div className={styles.projectImage}>
              <Image
                src={plantleyImage}
                alt="Image of e-commerce plant shop project"
              />
            </div>
            <div className={styles.linkWrapper}>
              <div className={styles.links}>
                <a
                  href="https://plantley.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-link" aria-hidden="true">
                    {' '}
                    <span className={styles.linkText}>Live</span>{' '}
                  </i>
                </a>
              </div>
              <div className={styles.links}>
                <a
                  href="https://github.com/gladys-pascual/plantley"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github-alt" aria-hidden="true">
                    {' '}
                    <span className={styles.linkText}>Repo</span>{' '}
                  </i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Budget tracker app */}
        <div className={styles.project}>
          <div>
            <h4 className={styles.projectTitle}>Budget Tracker App</h4>
            <p className={styles.projectDescription}>
              Budget tracker web application that is mobile friendly that help
              track expenses, built using{' '}
              <span className={styles.tech}>React</span> and
              <span className={styles.tech}> AWS lambda</span>. To test, use
              gladyskate@gmail.com and TestPassw0rd.
            </p>
          </div>
          <div>
            <div className={styles.projectImage}>
              <Image
                src={moneyMeImage}
                alt="Image of budget tracker app project"
              />
            </div>
            <div className={styles.linkWrapper}>
              <div className={styles.links}>
                <a
                  href="https://money-me.netlify.app/login"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-link" aria-hidden="true">
                    {' '}
                    <span className={styles.linkText}>Live</span>{' '}
                  </i>
                </a>
              </div>
              <div className={styles.links}>
                <a
                  href="https://github.com/gladys-pascual/my-money-front-end-react"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github-alt" aria-hidden="true">
                    {' '}
                    <span className={styles.linkText}>FE Repo</span>{' '}
                  </i>
                </a>
              </div>
              <div className={styles.links}>
                <a
                  href="https://github.com/gladys-pascual/my-money-back-end-transaction-service"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github-alt" aria-hidden="true">
                    {' '}
                    <span className={styles.linkText}>BE Repo</span>{' '}
                  </i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Stock finder */}
        <div className={styles.project}>
          <div>
            <h4 className={styles.projectTitle}>Stock finder</h4>
            <p className={styles.projectDescription}>
              Stock Finder is an interactive and mobile friendly web application
              for finding and visualizing information about a stock, created
              using <span className={styles.tech}>React</span> and Finnhub API.
            </p>
          </div>
          <div>
            {' '}
            <div className={styles.projectImage}>
              <Image
                src={stockFinderImage}
                alt="Gif image of stock finder project"
              />
            </div>
            <div className={styles.linkWrapper}>
              <div className={styles.links}>
                <a
                  href="https://stockfinder-me.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-link" aria-hidden="true">
                    {' '}
                    <span className={styles.linkText}>Live</span>{' '}
                  </i>
                </a>
              </div>
              <div className={styles.links}>
                <a
                  href="https://github.com/gladys-pascual/stockfinder"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github-alt" aria-hidden="true">
                    {' '}
                    <span className={styles.linkText}> Repo</span>{' '}
                  </i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* show me */}
        <div className={styles.project}>
          <div>
            <h4 className={styles.projectTitle}>
              Movie and TV show search app
            </h4>
            <p className={styles.projectDescription}>
              Responsive web application created using{' '}
              <span className={styles.tech}>React</span> TMDb API, that lets
              users search for shows, bookmark search results, and save
              favourite movies or tv shows when logged in.
            </p>
          </div>
          <div>
            {' '}
            <div className={styles.projectImage}>
              <Image
                src={showMeImage}
                alt="Image of the movie and TV show finder project"
              />
            </div>
            <div className={styles.linkWrapper}>
              <div className={styles.links}>
                <a
                  href="https://movie-tv-search-app.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-link" aria-hidden="true">
                    {' '}
                    <span className={styles.linkText}>Live</span>{' '}
                  </i>
                </a>
              </div>
              <div className={styles.links}>
                <a
                  href="https://github.com/gladys-pascual/movie-tv-search-app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github-alt" aria-hidden="true">
                    {' '}
                    <span className={styles.linkText}> Repo</span>{' '}
                  </i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/*complex to do */}
        <div className={styles.project}>
          <div>
            <h4 className={styles.projectTitle}>Complex To Do</h4>
            <p className={styles.projectDescription}>
              A slightly more complex to-do list, where lists can have a tasks
              and subtasks. Purely frontend focused, no database, built using{' '}
              <span className={styles.tech}>React</span>.
            </p>
          </div>
          <div>
            {' '}
            <div className={styles.projectImage}>
              <Image
                src={toDoListImage}
                alt="Image of the complex to do list project"
              />
            </div>
            <div className={styles.linkWrapper}>
              <div className={styles.links}>
                <a
                  href="https://complextodo.netlify.app/todo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-link" aria-hidden="true">
                    {' '}
                    <span className={styles.linkText}>Live</span>{' '}
                  </i>
                </a>
              </div>
              <div className={styles.links}>
                <a
                  href="https://github.com/gladys-pascual/complex-to-do"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github-alt" aria-hidden="true">
                    {' '}
                    <span className={styles.linkText}> Repo</span>{' '}
                  </i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/*bg scores */}
        <div className={styles.project}>
          <div>
            <h4 className={styles.projectTitle}>BG score</h4>
            <p className={styles.projectDescription}>
              BG scores is a web application built using{' '}
              <span className={styles.tech}>Flask</span> and{' '}
              <span className={styles.tech}>JavaScript</span> that allows user
              to record the played boardgames, including the date of the game,
              the players and their scores.
            </p>
          </div>
          <div>
            {' '}
            <div className={styles.projectImage}>
              <Image src={bgscores} alt="Image of the bg scores project" />
            </div>
            <div className={styles.linkWrapper}>
              <div className={styles.links}>
                <a
                  href="https://bg-scores.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-link" aria-hidden="true">
                    {' '}
                    <span className={styles.linkText}>Live</span>{' '}
                  </i>
                </a>
              </div>
              <div className={styles.links}>
                <a
                  href="https://github.com/gladys-pascual/bg-scores"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github-alt" aria-hidden="true">
                    {' '}
                    <span className={styles.linkText}> Repo</span>{' '}
                  </i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
