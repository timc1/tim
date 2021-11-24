import { Link } from "remix";
import styles from "./styles.css";

const date = new Date();
const year = date.getFullYear();
const month = (date.getMonth() + 1).toString().padStart(2, "0");
const day = date.getDate();

export default function IndexPage() {
  return (
    <div className="container">
      <header>
        <div data-clip>
          <h1>
            <Link to="/"> Tim Chang</Link>
          </h1>
          <p>New York City</p>
        </div>
        <time data-clip>{`${month}.${day}.${year}`}</time>
      </header>
      <section className="about" data-appear>
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
      {/* @ts-ignore */}
      <section className="work" data-appear style={{ "--step": 2 }}>
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
              <Link to="/buildanevent">buildanevent.com</Link>
            </h3>
            <p>Simple, fast, modular event builder</p>
          </li>
          <li>
            <h3>
              <Link to="/clips">clips</Link>
            </h3>
            <p>
              macOS menubar app and site for storing things from the Internet
            </p>
          </li>
        </ul>
      </section>
      {/* @ts-ignore */}
      <section className="contact" data-appear style={{ "--step": 3 }}>
        <h2>Contact</h2>
        <p>Learning from and sharing stories.</p>
        <ul>
          <li>
            <div>Twitter</div>
            <a
              href="https://twitter.com/timcchang"
              target="_blank"
              rel="noreferer"
            >
              @timcchang
            </a>
          </li>
          <li>
            <div>Email</div>
            <a href="mailto:timchang@hey.com" target="_blank" rel="noreferer">
              timchang@hey.com
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}

IndexPage.styles = styles;
