import type { LinksFunction, MetaFunction } from "remix";
import { Heading, PostContent, Image, Paragraph } from "~/components/posts";

export const meta: MetaFunction = () => {
  return {
    title: "Clips",
    description:
      "macOS menubar app & site for storing and sharing interesting finds from the Internet.",
    url: "/images/posts/clips/illustration.png",
  };
};

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: PostContent.styles }];
};

export default function () {
  return (
    <PostContent>
      <Heading element="h1">Clips</Heading>

      <Paragraph>
        Clips is a React site for storing and sharing interesting finds from the
        Internet paired with a macOS menubar app.
      </Paragraph>

      <Image
        src="/images/posts/clips/illustration.png"
        alt="clips illustration"
        width="600"
        height="600"
      />

      <Heading id="background" element="h2">
        Background
      </Heading>

      <Paragraph>
        I enjoy tinkering with new technologies, dabbling with design, and
        making things from ideation to launch. I have been working on Clips over
        the past few months using it as a tool to challenge myself to continue
        building products from beginning to end. Feel free to play with the
        hosted version on getclips.app or run your own instance/learn/build on
        top of it.
      </Paragraph>

      <Paragraph>
        In this post I'd like to highlight the process for building Clips –
        ideating and implementing, with the smaller details in between. Of
        course, these projects are my way of just playing with technologies I
        don't usually get to work with so if you have suggestions or have ended
        up learning something, please shoot me a message!
      </Paragraph>

      <Heading id="overview" element="h2">
        Overview
      </Heading>

      <ol>
        <li>
          <a href="/clips/#idea">Idea</a>
        </li>
        <li>
          <a href="/clips/#tools-and-technologies">Tools and Technologies</a>
        </li>
        <li>
          <a href="/clips/#creating-and-managing-clips">
            Creating and managing clips
          </a>
        </li>
        <li>
          <a href="/clips/#shareable-links">Shareable links</a>
        </li>
        <li>
          <a href="/clips/#commenting">Commenting</a>
        </li>
        <li>
          <a href="/clips/#notifications">Notifications</a>
        </li>
        <li>
          <a href="/clips/#emails-and-validation">Emails and validations</a>
        </li>
        <li>
          <a href="/clips/#theming-views-virtualized-lists">
            Theming, view counts, virtualized lists
          </a>
        </li>
        <li>
          <a href="/clips/#menubar-app">macOS menubar app</a>
        </li>
      </ol>

      <Image
        src="/images/posts/clips/profile.png"
        alt="profile"
        width="3000"
        height="1676"
        loading="lazy"
      />

      <Heading id="idea" element="h2">
        Idea
      </Heading>

      <Paragraph>
        Clips is a macOS menubar app + site that enables anyone to "clip"/save
        random, interesting things they find on the internet and stores them on
        a simple grid, accessible through a{" "}
        <a href="https://getclips.app/tim" target="_blank" rel="noreferer">
          personalized link
        </a>
        .
      </Paragraph>

      <Paragraph>
        While building the site portion of the project, I realized that it might
        be nice for people to add a clip regardless of what app they're using at
        the time. So, in addition to being able to clip items from the site, I
        built a simple mac menubar app to create clips that can be toggled using
        a keyboard shortcut.
      </Paragraph>

      <Heading id="tools-and-technologies" element="h2">
        Tools and technologies
      </Heading>

      <Paragraph>
        Clips is a Next.js app deployed on Vercel. It's sitting on top of a
        MongoDB instance, uses swr for data fetching and caching, emotion for
        styling, and basic cookie authentication under the hood.
      </Paragraph>

      <Paragraph>
        The menubar app is built using Electron, Typescript, styled-components,
        and JWTs for authentication. Feel free to fork and play with building
        your own menubar app with this setup.
      </Paragraph>

      <Heading id="creating-and-managing-clips" element="h2">
        Creating and managing clips
      </Heading>

      <Paragraph>
        We can create three types of clips: text, links, and images.
      </Paragraph>

      <Heading id="creating-and-managing-clips" element="h2">
        Creating and managing clips
      </Heading>

      <Paragraph>
        A text clip is a very simple rich text editor. Add emphasis, quotes and
        lists to easily jot down something that came to mind.
      </Paragraph>

      <Image
        src="/images/posts/clips/text-clip.png"
        alt="text clip"
        width="3359"
        height="1841"
        loading="lazy"
      />

      <Paragraph>
        Link clips extends text clips by adding an unfurled link preview, useful
        for when you find a reference online that you'd like to visit in the
        future.
      </Paragraph>

      <Image
        src="/images/posts/clips/link-clip.gif"
        alt="link clip"
        width="1500"
        height="574"
        loading="lazy"
      />

      <Paragraph>
        Display a list of images, along with an optional description to keep a
        record of a recent trip, or just some funny gifs. Images can be from the
        local filesystem or unfurled from a link.
      </Paragraph>

      <Image
        src="/images/posts/clips/image-clip.gif"
        alt="image clip"
        width="1500"
        height="673"
        loading="lazy"
      />

      <Paragraph>
        Creating a clip is easy – click the ⌘ icon in the navigation or press
        ⌘+K to bring up the shortcut menu. In the future, the menu can serve as
        a portal for other features as well. Once a clip is created, it
        immediately gets added to the current date and all subsequent new clips
        will be appended to the current date as well.
      </Paragraph>

      <Paragraph>
        Clicking a clip will navigate to the clip's route; however, you will
        notice that we keep context of the screen you are currently on by
        rendering the page within a modal. This follows the Instagram-style
        loading of pages using Next.js's shallow routing. When refreshing the
        page at this stage, since there will be no more context, we will display
        the clip on it's own page.
      </Paragraph>

      <Paragraph>
        Editing a clip is just as easy! Click the overflow menu and then Edit.
        Edited clips are denoted by the [edited] indicator.
      </Paragraph>

      <Image
        src="/images/posts/clips/editing.gif"
        alt="editing a clip"
        width="1500"
        height="673"
        loading="lazy"
      />

      <Paragraph>
        Cool! Now that we have a nice clip put together, we can share it with
        others. Each clip is by default only viewable by yourself.
      </Paragraph>

      <Heading id="shareable-links" element="h2">
        Shareable links
      </Heading>

      <Paragraph>
        If there is a single clip that you would like to share, opening up the
        share panel is the place to go. From here, there are a few things you
        can do – make the clip publicly available for anyone to view, only
        specific people that you invite (via email), or just keep things to
        yourself!
      </Paragraph>

      <Image
        src="/images/posts/clips/sharing.png"
        alt="sharing a clip"
        width="1650"
        height="934"
        loading="lazy"
      />

      <Heading id="commenting" element="h2">
        Commenting
      </Heading>

      <Paragraph>
        Okay so you can also add comments to any clip – I have no idea why I
        called them Notes in the site but here we are 😆. Comments are editable
        and linkable – open the overflow menu for the edit and share options.
      </Paragraph>

      <Paragraph>
        When sharing a comment, one neat thing is that the selected comment will
        scroll into view and get highlighted, keeping context.
      </Paragraph>

      <Image
        src="/images/posts/clips/commenting.gif"
        alt="commenting"
        width="1500  "
        height="547"
        loading="lazy"
      />

      <Heading id="notifications" element="h2">
        Notifications
      </Heading>

      <Paragraph>
        In order to keep us up to date with what interactions are happening with
        our clips, I built a simple notification system – we get notified in-app
        when someone invites us to view a clip, comments on our own clips, and
        replies on clips that we are a part of. With swr, refetching and
        revalidating data was an easy option to ensure notifications, and
        effectively the entire state of the site, is up to date.
      </Paragraph>

      <Image
        src="/images/posts/clips/notifications.gif"
        alt="notifications"
        width="1499"
        height="445"
        loading="lazy"
      />

      <Paragraph>
        Additionally, emails are sent out for invitations as there would be
        users that don't have an account.
      </Paragraph>

      <Heading id="emails-and-validation" element="h2">
        Emails and validation
      </Heading>

      <Paragraph>
        Emails and validations was a fun one to work on. We currently send an
        email out for actions like login using an email link, reset password,
        and inviting other people to view a clip. A very simple flow for an
        invitation would go something like:
      </Paragraph>

      <ol>
        <li>A user creates a clip and adds me@timcchang.com</li>
        <li>
          A clip invitation would be created on the server under the email with
          a unique token
        </li>
        <li>
          An email would get sent with a url like
          https://getclips.app/invitations/clip?email=me@timcchang.com&clipId=12345678&token=987654321
        </li>
        <li>
          This link would navigate to a basic Next route, /invitations/:type,
          where the client would then parse and make a request to ensure that
          the params match what is on the server. The database would then be
          updated with the relevant invitation.
        </li>
        <li>
          Once the request is successful, we can redirect the user to the
          intended clip route and all should be good.
        </li>
      </ol>

      <Paragraph>
        Alright let's talk about some other small, fun things.
      </Paragraph>

      <Heading id="theming-views-virtualized-lists" element="h2">
        Theming, view counts, virtualized lists
      </Heading>

      <Paragraph>
        As with any project, a light and dark theme is always a nice touch. With
        clips, I went with a simple system, light, and dark option using a
        barebones theme provider.
      </Paragraph>

      <Image
        src="/images/posts/clips/theme.gif"
        alt="theme switching"
        width="1500"
        height="445"
        loading="lazy"
      />

      <Paragraph>
        View counts are as simple as it gets in the project where we just ping a
        /api/views endpoint to append and return the view count for a clip. We
        can further dedupe view counts by IP, but the simplest approach is to
        just ensure `swr` does not refetch views for a really long time (24
        hours) right now and simply returns the cached value for subsequent
        visits to the clip page.
      </Paragraph>

      <Paragraph>
        The notifications list is also virtualized! I ran into a small delay
        when rendering a huge list while testing, and this was the perfect
        opportunity to use react-virtual. There's a beauty in what virtual lists
        do to the DOM – I've spent a good chunk of time just watching the nodes
        appear in and out haha.
      </Paragraph>

      <Image
        src="/images/posts/clips/virtualized.gif"
        alt="virtualized list"
        width="1000"
        height="464"
        loading="lazy"
      />

      <Heading id="menubar-app" element="h2">
        macOS menubar app
      </Heading>

      <Paragraph>
        So while building the site, I realized that it would be really nice to
        be able to create clips anywhere when on your computer. First thing that
        came to mind was building a simple browser extension; however, I've
        always been interested in building a little menubar app, so with
        Electron and a simple React app connected to our Next.js functions, we
        can build something like this.
      </Paragraph>

      <Image
        src="/images/posts/clips/clip.gif"
        alt="macOS menubar app"
        width="600"
        height="504"
        loading="lazy"
      />

      <Paragraph>
        I'm currently doing a bit of cleanup and will publish the repo soon, so
        stay tuned!
      </Paragraph>

      <Paragraph>
        This site is hosted on <a href="https://getclips.app">getclips.app</a>{" "}
        and the repository can be found on Github{" "}
        <a href="https://github.com/timc1/clips">here</a>.
      </Paragraph>

      <Paragraph>
        I think that's it for now! If you're interested in some more learning,
        got questions, or want to share something cool you are working on please
        feel free to send me an email or a DM. This project was quite a lot of
        work – I'm going to take a little break before getting onto the next. I
        think, something smaller in scope. :-)
      </Paragraph>
    </PostContent>
  );
}
