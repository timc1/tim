import { Link } from "remix";
import styles from "./styles.css";

export default function IndexPage() {
  return (
    <div className="container">
      <header>
        <div>
          <h1>
            <Link to="/"> Tim Chang</Link>
          </h1>
          <p>Software Developer</p>
          <p>New York City</p>
        </div>
      </header>
      <section>
        <h2>About</h2>
        <p>
          I'm a developer and designer. I value hard work, optimism, and
          learning about how things work.
        </p>
        <p>
          I enjoy the medium between design and engineering – in my spare time
          you'll find me experimenting and building apps that take up way too
          much of my time. This site is home to things I work on and various
          learnings.
        </p>
      </section>
      <section className="work">
        <h2>Ideas</h2>
        <ul>
          <li>
            <h3>
              <a href="https://kbar.vercel.app" target="_blank" rel="noreferer">
                kbar
              </a>
            </h3>
            <p>The open source React command menu library</p>
          </li>
          <li>
            <h3>
              <a
                href="https://buildanevent.com"
                target="_blank"
                rel="noreferer"
              >
                buildanevent.com
              </a>
            </h3>
            <p>Simple, fast, modular event builder</p>
          </li>
          <li>
            <h3>
              <a href="https://getclips.app" target="_blank" rel="noreferer">
                clips
              </a>
            </h3>
            <p>
              macOS menubar app and site for storing things from the Internet
            </p>
          </li>
        </ul>
      </section>
      <section>
        <h2>Contact</h2>
        <ul>
          <li>@timcchang</li>
          <li>timchang@hey.com</li>
        </ul>
      </section>
    </div>
  );
}

IndexPage.styles = styles;
