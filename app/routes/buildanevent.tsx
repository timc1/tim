import type { LinksFunction, MetaFunction } from "remix";
import { Heading, PostContent, Image, Paragraph } from "~/components/posts";

export const meta: MetaFunction = () => {
  return {
    title: "Buildanevent.com",
    description: "Simple, fast, modular event builder site",
    url: "/images/posts/buildanevent/animation-1.gif",
  };
};

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: PostContent.styles }];
};

export default function () {
  return (
    <PostContent>
      <Heading element="h1">Buildanevent.com</Heading>

      <Image
        src="/images/posts/buildanevent/animation-1.gif"
        alt="animation of buildanevent.com dashboard"
        width="2602"
        height="1602"
      />

      <Paragraph>
        Over the past few months I have spent some time each day building a site
        from scratch – buildanevent.com.
      </Paragraph>

      <Paragraph>
        Buildanevent.com is a React and Next.js site backed by a MySQL database.
        It is a playground to experiment with tooling (Vercel, serverless), UI
        (Web animations, css-in-js, design), and coordinating technologies to
        come full circle (Sockets, email, validation).
      </Paragraph>

      <Paragraph>
        In this post I want to highlight a few of the different features and fun
        tidbits of the site. Later posts will include technical breakdowns of
        features.
      </Paragraph>

      <ul>
        <ol>
          <a href="/buildanevent/#landing-page">Landing page</a>
        </ol>
        <ol>
          <a href="/buildanevent/#dashboard">Dashboard</a>
        </ol>
        <ol>
          <a href="/buildanevent/#event-editor">Event editor</a>
        </ol>
        <ol>
          <a href="/buildanevent/#event-page">Event page</a>
        </ol>
        <ol>
          <a href="/buildanevent/#thoughts">Thoughts</a>
        </ol>
      </ul>

      <Heading id="landing-page" element="h2">
        Landing page
      </Heading>

      <Paragraph>
        I enjoy sites that use animation. Much of my influence for learning to
        code stems from being extremely excited about little details in
        interactions.
      </Paragraph>

      <Paragraph>
        Buildanevent.com uses a combination of the Web Animations API, state,
        and simple DOM elements to create these animations.
      </Paragraph>

      <Image
        src="/images/posts/buildanevent/animation-2.gif"
        alt="animation of buildanevent.com mobile event page"
        width="1247"
        height="1000"
        loading="lazy"
      />

      <Paragraph>
        The next time I do something like this I'd probably use a drawing tool
        and export the assets into Lottie. All animations on the site currently
        are made with plain HTML elements, which is fun but can probably be done
        a lot simpler with a drawing tool. Ping me if you know of other neat
        solutions!
      </Paragraph>

      <Heading element="h2">Theming</Heading>

      <Paragraph>
        You can also toggle between system, light, and dark mode for the site. I
        think it's a default now to include theming to a site so this was fun.
        If you're curious, I have two implementations of how to theme a site
        using React —{" "}
        <a href="https://gist.github.com/timc1/c25ab479c548ab87c2748004f33eddf3">
          one
        </a>{" "}
        that allows for both basic and custom themes, and a{" "}
        <a href="https://gist.github.com/timc1/f79cb0febf2f96b4bbeed61c488684a7">
          simpler
        </a>{" "}
        version that just handles light and dark.
      </Paragraph>

      <Image
        src="/images/posts/buildanevent/animation-3.gif"
        alt="toggling between light and dark theme"
        width="2866 "
        height="1602"
        loading="lazy"
      />

      <Heading id="dashboard" element="h2">
        Dashboard
      </Heading>

      <Paragraph>
        Next up we have the dashboard. Authenticated users will see two screens
        — one as a host, and the other as the attendee.
      </Paragraph>

      <Paragraph>
        The host screen contain three views: all, published, and unpublished.
        Each of these views display a list of events that, when clicked, opens a
        dialog that contain specific details.
      </Paragraph>

      <Paragraph>
        The attendee screen gives an overview of all upcoming and past dates
        that a user is registered for. They can easily cancel an rsvp right
        there.
      </Paragraph>

      <Image
        src="/images/posts/buildanevent/dashboard.png"
        alt="dashboard"
        width="3360 "
        height="1600"
        loading="lazy"
      />

      <Heading id="event-editor" element="h2">
        Event editor
      </Heading>

      <Paragraph>
        Once an event is created, the user will be redirected to the editor.
        Some neat things include:
      </Paragraph>

      <ul>
        <li>
          <Paragraph>Live updating preview &amp; autosaving</Paragraph>
          <Paragraph>
            Changes are reflected immediately as you make them on the preview
            sidebar and saved a few seconds after you make them. The sidebar is
            also resizable and persists on reload.
          </Paragraph>

          <Image
            src="/images/posts/buildanevent/realtime.png"
            alt="editing realtime"
            width="3360 "
            height="1894"
            loading="lazy"
          />
        </li>
        <li>
          <Paragraph>Date picker</Paragraph>
          <Paragraph>Add and remove dates using a simple wizard.</Paragraph>
          <Image
            src="/images/posts/buildanevent/animation-4.gif"
            alt="editing calendar dates"
            width="3360 "
            height="1894"
            loading="lazy"
          />
        </li>
        <li>
          <Paragraph>Photos</Paragraph>
          <Paragraph>Add and remove photos with multiselect.</Paragraph>
          <Image
            src="/images/posts/buildanevent/photos.png"
            alt="multiselecting photos"
            width="3360 "
            height="1894"
            loading="lazy"
          />
        </li>
        <li>
          <Paragraph>Passcode backed events</Paragraph>
          <Paragraph>Private events can be placed behind a passcode.</Paragraph>
          <Image
            src="/images/posts/buildanevent/passcode.gif"
            alt="entering a passcode backed event"
            width="3356"
            height="1828"
            loading="lazy"
          />
        </li>
      </ul>

      <Paragraph>
        Additionally, if mulltiple editors are open, changes made to one will be
        applied to the others.
      </Paragraph>

      <Paragraph>Now we're ready to share the event page.</Paragraph>

      <Heading id="event-page" element="h2">
        Event page
      </Heading>

      <Paragraph>
        The component used for the entire event page is the same one thats in
        the editor — so you have an accurate overview of what your page looks
        like while editing. Nothing should look too new here.
      </Paragraph>

      <Paragraph>
        This is a pretty simple UI with a gallery on top, info split to the
        left, and available dates to the right. On mobile, the available dates
        live inside a modal triggered by a fixed RSVP button.
      </Paragraph>

      <Image
        src="/images/posts/buildanevent/landing.png"
        alt="event landing page"
        width="3353"
        height="1884"
        loading="lazy"
      />

      <Paragraph>
        This page is also server rendered, so sharing a public event will be SEO
        friendly and display custom social media cards.
      </Paragraph>

      <Image
        src="/images/posts/buildanevent/ssr.png"
        alt="mobile social preview"
        width="762 "
        height="454"
        loading="lazy"
      />

      <Paragraph>
        A little neat thing added here and throughout the site is a shimmer
        loading placeholder. This is controlled by a custom{" "}
        <a href="https://gist.github.com/timc1/6f0aac4f9e5a41f33202842b04e7d054">
          utility function
        </a>
        that helps determine how long we should wait before displaying a loading
        state.
      </Paragraph>

      <Image
        src="/images/posts/buildanevent/animation-5.gif"
        alt="loading shimmer effect"
        width="2002   "
        height="1190"
        loading="lazy"
      />

      <Paragraph>
        And those are some of the fun tidbits that I wanted to highlight on the
        site! I'm in the process of opening up the repository but need to do a
        little bit of cleanup before.
      </Paragraph>

      <Paragraph>
        And those are some of the fun tidbits that I wanted to highlight on the
        site! I'm in the process of opening up the repository but need to do a
        little bit of cleanup before. There are additional features to the site
        such as profile photos, email confirmation, custom toasts, tooltips,
        dropdowns, and more. You can check out the site at buildanevent.com.
        There will be nuances, quirky interactions, all of that — but what
        better way to improve than by making.
      </Paragraph>

      <Heading id="thoughts" element="h2">
        Thoughts
      </Heading>

      <Paragraph>
        Building something from scratch and seeing it to the end will always be
        a tough task. A few times throughout this project I felt discouraged and
        wanted to do something else. I think a few things that helped me
        overcome these thoughts were just making sure that I:
      </Paragraph>

      <ul>
        <li>
          <Paragraph>Share progress with friends</Paragraph>
        </li>
        <li>
          <Paragraph>Remind myself that this is experimental</Paragraph>
        </li>
        <li>
          <Paragraph>
            Should take time off when I start feeling like this is a job
          </Paragraph>
        </li>
      </ul>

      <Paragraph>
        If you're building something while working a fulltime job I'd love to
        hear about your experiences while coordintating the two.
      </Paragraph>

      <Paragraph>
        This experience has been great. Til then, onto the next thing! 🏃🏻‍♂️💨
      </Paragraph>
    </PostContent>
  );
}
