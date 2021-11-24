var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// <stdin>
__export(exports, {
  assets: () => import_assets.default,
  entry: () => entry,
  routes: () => routes
});

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React = __toModule(require("react"));

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_server = __toModule(require("react-dom/server"));
var import_remix = __toModule(require("remix"));
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route-module:/Users/timchang/Desktop/github/tim2/app/root.tsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links
});
var React2 = __toModule(require("react"));
var import_remix2 = __toModule(require("remix"));

// app/styles/reset.css
var reset_default = "/build/_assets/reset-VWOLLJHN.css";

// app/styles/global.css
var global_default = "/build/_assets/global-MEIGR26C.css";

// route-module:/Users/timchang/Desktop/github/tim2/app/root.tsx
var links = () => {
  return [
    { rel: "stylesheet", href: reset_default },
    { rel: "stylesheet", href: global_default }
  ];
};
function App() {
  return /* @__PURE__ */ React2.createElement(Document, null, /* @__PURE__ */ React2.createElement(Layout, null, /* @__PURE__ */ React2.createElement(import_remix2.Outlet, null)));
}
function Document({
  children,
  title
}) {
  return /* @__PURE__ */ React2.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React2.createElement("head", null, /* @__PURE__ */ React2.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React2.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), title ? /* @__PURE__ */ React2.createElement("title", null, title) : null, /* @__PURE__ */ React2.createElement(import_remix2.Meta, null), /* @__PURE__ */ React2.createElement(import_remix2.Links, null)), /* @__PURE__ */ React2.createElement("body", null, children, /* @__PURE__ */ React2.createElement(RouteChangeAnnouncement, null), /* @__PURE__ */ React2.createElement(import_remix2.ScrollRestoration, null), /* @__PURE__ */ React2.createElement(import_remix2.Scripts, null), process.env.NODE_ENV === "development" && /* @__PURE__ */ React2.createElement(import_remix2.LiveReload, null)));
}
function Layout({ children }) {
  return /* @__PURE__ */ React2.createElement(React2.Fragment, null, children);
}
function CatchBoundary() {
  let caught = (0, import_remix2.useCatch)();
  let message;
  switch (caught.status) {
    case 401:
      message = /* @__PURE__ */ React2.createElement("p", null, "Oops! Looks like you tried to visit a page that you do not have access to.");
      break;
    case 404:
      message = /* @__PURE__ */ React2.createElement("p", null, "Oops! Looks like you tried to visit a page that does not exist.");
      break;
    default:
      throw new Error(caught.data || caught.statusText);
  }
  return /* @__PURE__ */ React2.createElement(Document, {
    title: `${caught.status} ${caught.statusText}`
  }, /* @__PURE__ */ React2.createElement(Layout, null, /* @__PURE__ */ React2.createElement("h1", null, caught.status, ": ", caught.statusText), message));
}
function ErrorBoundary({ error }) {
  console.error(error);
  return /* @__PURE__ */ React2.createElement(Document, {
    title: "Error!"
  }, /* @__PURE__ */ React2.createElement(Layout, null, /* @__PURE__ */ React2.createElement("div", null, /* @__PURE__ */ React2.createElement("h1", null, "There was an error"), /* @__PURE__ */ React2.createElement("p", null, error.message), /* @__PURE__ */ React2.createElement("hr", null), /* @__PURE__ */ React2.createElement("p", null, "Hey, developer, you should replace this with what you want your users to see."))));
}
var RouteChangeAnnouncement = React2.memo(() => {
  let [hydrated, setHydrated] = React2.useState(false);
  let [innerHtml, setInnerHtml] = React2.useState("");
  let location = (0, import_remix2.useLocation)();
  React2.useEffect(() => {
    setHydrated(true);
  }, []);
  let firstRenderRef = React2.useRef(true);
  React2.useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }
    let pageTitle = location.pathname === "/" ? "Home page" : document.title;
    setInnerHtml(`Navigated to ${pageTitle}`);
  }, [location.pathname]);
  if (!hydrated) {
    return null;
  }
  return /* @__PURE__ */ React2.createElement("div", {
    "aria-live": "assertive",
    "aria-atomic": true,
    id: "route-change-region",
    style: {
      border: "0",
      clipPath: "inset(100%)",
      clip: "rect(0 0 0 0)",
      height: "1px",
      margin: "-1px",
      overflow: "hidden",
      padding: "0",
      position: "absolute",
      width: "1px",
      whiteSpace: "nowrap",
      wordWrap: "normal"
    }
  }, innerHtml);
});

// route-module:/Users/timchang/Desktop/github/tim2/app/routes/buildanevent.tsx
var buildanevent_exports = {};
__export(buildanevent_exports, {
  default: () => buildanevent_default,
  links: () => links2,
  meta: () => meta
});

// app/components/posts/PostContent.tsx
var import_react = __toModule(require("react"));
var import_remix3 = __toModule(require("remix"));

// app/components/posts/styles.css
var styles_default = "/build/_assets/styles-IIDYNWDP.css";

// app/components/posts/PostContent.tsx
function PostContent({ children }) {
  return /* @__PURE__ */ import_react.default.createElement("main", null, /* @__PURE__ */ import_react.default.createElement("header", null, /* @__PURE__ */ import_react.default.createElement(import_remix3.Link, {
    to: "/"
  }, "Back")), children);
}
PostContent.styles = styles_default;

// app/components/posts/Heading.tsx
var import_react2 = __toModule(require("react"));
function Heading(_a) {
  var _b = _a, { element, children } = _b, rest = __objRest(_b, ["element", "children"]);
  let Tag = element || "p";
  return /* @__PURE__ */ import_react2.default.createElement(Tag, __spreadValues({}, rest), children);
}

// app/components/posts/Paragraph.tsx
function Paragraph({ children }) {
  return /* @__PURE__ */ React.createElement("p", null, children);
}

// app/components/posts/Image.tsx
var import_react3 = __toModule(require("react"));
function Image(props) {
  return /* @__PURE__ */ import_react3.default.createElement("img", __spreadValues({}, props));
}

// route-module:/Users/timchang/Desktop/github/tim2/app/routes/buildanevent.tsx
var meta = () => {
  return {
    title: "Buildanevent.com",
    description: "Simple, fast, modular event builder site",
    url: "/images/posts/buildanevent/animation-1.gif"
  };
};
var links2 = () => {
  return [{ rel: "stylesheet", href: PostContent.styles }];
};
function buildanevent_default() {
  return /* @__PURE__ */ React.createElement(PostContent, null, /* @__PURE__ */ React.createElement(Heading, {
    element: "h1"
  }, "Buildanevent.com"), /* @__PURE__ */ React.createElement(Image, {
    src: "/images/posts/buildanevent/animation-1.gif",
    alt: "animation of buildanevent.com dashboard",
    width: "2602",
    height: "1602"
  }), /* @__PURE__ */ React.createElement(Paragraph, null, "Over the past few months I have spent some time each day building a site from scratch \u2013 buildanevent.com."), /* @__PURE__ */ React.createElement(Paragraph, null, "Buildanevent.com is a React and Next.js site backed by a MySQL database. It is a playground to experiment with tooling (Vercel, serverless), UI (Web animations, css-in-js, design), and coordinating technologies to come full circle (Sockets, email, validation)."), /* @__PURE__ */ React.createElement(Paragraph, null, "In this post I want to highlight a few of the different features and fun tidbits of the site. Later posts will include technical breakdowns of features."), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("ol", null, /* @__PURE__ */ React.createElement("a", {
    href: "/buildanevent/#landing-page"
  }, "Landing page")), /* @__PURE__ */ React.createElement("ol", null, /* @__PURE__ */ React.createElement("a", {
    href: "/buildanevent/#dashboard"
  }, "Dashboard")), /* @__PURE__ */ React.createElement("ol", null, /* @__PURE__ */ React.createElement("a", {
    href: "/buildanevent/#event-editor"
  }, "Event editor")), /* @__PURE__ */ React.createElement("ol", null, /* @__PURE__ */ React.createElement("a", {
    href: "/buildanevent/#event-page"
  }, "Event page")), /* @__PURE__ */ React.createElement("ol", null, /* @__PURE__ */ React.createElement("a", {
    href: "/buildanevent/#thoughts"
  }, "Thoughts"))), /* @__PURE__ */ React.createElement(Heading, {
    id: "landing-page",
    element: "h2"
  }, "Landing page"), /* @__PURE__ */ React.createElement(Paragraph, null, "I enjoy sites that use animation. Much of my influence for learning to code stems from being extremely excited about little details in interactions."), /* @__PURE__ */ React.createElement(Paragraph, null, "Buildanevent.com uses a combination of the Web Animations API, state, and simple DOM elements to create these animations."), /* @__PURE__ */ React.createElement(Image, {
    src: "/images/posts/buildanevent/animation-2.gif",
    alt: "animation of buildanevent.com mobile event page",
    width: "1247",
    height: "1000",
    loading: "lazy"
  }), /* @__PURE__ */ React.createElement(Paragraph, null, "The next time I do something like this I'd probably use a drawing tool and export the assets into Lottie. All animations on the site currently are made with plain HTML elements, which is fun but can probably be done a lot simpler with a drawing tool. Ping me if you know of other neat solutions!"), /* @__PURE__ */ React.createElement(Heading, {
    element: "h2"
  }, "Theming"), /* @__PURE__ */ React.createElement(Paragraph, null, "You can also toggle between system, light, and dark mode for the site. I think it's a default now to include theming to a site so this was fun. If you're curious, I have two implementations of how to theme a site using React \u2014", " ", /* @__PURE__ */ React.createElement("a", {
    href: "https://gist.github.com/timc1/c25ab479c548ab87c2748004f33eddf3"
  }, "one"), " ", "that allows for both basic and custom themes, and a", " ", /* @__PURE__ */ React.createElement("a", {
    href: "https://gist.github.com/timc1/f79cb0febf2f96b4bbeed61c488684a7"
  }, "simpler"), " ", "version that just handles light and dark."), /* @__PURE__ */ React.createElement(Image, {
    src: "/images/posts/buildanevent/animation-3.gif",
    alt: "toggling between light and dark theme",
    width: "2866\u200A",
    height: "1602",
    loading: "lazy"
  }), /* @__PURE__ */ React.createElement(Heading, {
    id: "dashboard",
    element: "h2"
  }, "Dashboard"), /* @__PURE__ */ React.createElement(Paragraph, null, "Next up we have the dashboard. Authenticated users will see two screens \u2014 one as a host, and the other as the attendee."), /* @__PURE__ */ React.createElement(Paragraph, null, "The host screen contain three views: all, published, and unpublished. Each of these views display a list of events that, when clicked, opens a dialog that contain specific details."), /* @__PURE__ */ React.createElement(Paragraph, null, "The attendee screen gives an overview of all upcoming and past dates that a user is registered for. They can easily cancel an rsvp right there."), /* @__PURE__ */ React.createElement(Image, {
    src: "/images/posts/buildanevent/dashboard.png",
    alt: "dashboard",
    width: "3360\u200A",
    height: "1600",
    loading: "lazy"
  }), /* @__PURE__ */ React.createElement(Heading, {
    id: "event-editor",
    element: "h2"
  }, "Event editor"), /* @__PURE__ */ React.createElement(Paragraph, null, "Once an event is created, the user will be redirected to the editor. Some neat things include:"), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(Paragraph, null, "Live updating preview & autosaving"), /* @__PURE__ */ React.createElement(Paragraph, null, "Changes are reflected immediately as you make them on the preview sidebar and saved a few seconds after you make them. The sidebar is also resizable and persists on reload."), /* @__PURE__ */ React.createElement(Image, {
    src: "/images/posts/buildanevent/realtime.png",
    alt: "editing realtime",
    width: "3360\u200A",
    height: "1894",
    loading: "lazy"
  })), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(Paragraph, null, "Date picker"), /* @__PURE__ */ React.createElement(Paragraph, null, "Add and remove dates using a simple wizard."), /* @__PURE__ */ React.createElement(Image, {
    src: "/images/posts/buildanevent/animation-4.gif",
    alt: "editing calendar dates",
    width: "3360\u200A",
    height: "1894",
    loading: "lazy"
  })), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(Paragraph, null, "Photos"), /* @__PURE__ */ React.createElement(Paragraph, null, "Add and remove photos with multiselect."), /* @__PURE__ */ React.createElement(Image, {
    src: "/images/posts/buildanevent/photos.png",
    alt: "multiselecting photos",
    width: "3360\u200A",
    height: "1894",
    loading: "lazy"
  })), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(Paragraph, null, "Passcode backed events"), /* @__PURE__ */ React.createElement(Paragraph, null, "Private events can be placed behind a passcode."), /* @__PURE__ */ React.createElement(Image, {
    src: "/images/posts/buildanevent/passcode.gif",
    alt: "entering a passcode backed event",
    width: "3356",
    height: "1828",
    loading: "lazy"
  }))), /* @__PURE__ */ React.createElement(Paragraph, null, "Additionally, if mulltiple editors are open, changes made to one will be applied to the others."), /* @__PURE__ */ React.createElement(Paragraph, null, "Now we're ready to share the event page."), /* @__PURE__ */ React.createElement(Heading, {
    id: "event-page",
    element: "h2"
  }, "Event page"), /* @__PURE__ */ React.createElement(Paragraph, null, "The component used for the entire event page is the same one thats in the editor \u2014 so you have an accurate overview of what your page looks like while editing. Nothing should look too new here."), /* @__PURE__ */ React.createElement(Paragraph, null, "This is a pretty simple UI with a gallery on top, info split to the left, and available dates to the right. On mobile, the available dates live inside a modal triggered by a fixed RSVP button."), /* @__PURE__ */ React.createElement(Image, {
    src: "/images/posts/buildanevent/landing.png",
    alt: "event landing page",
    width: "3353",
    height: "1884",
    loading: "lazy"
  }), /* @__PURE__ */ React.createElement(Paragraph, null, "This page is also server rendered, so sharing a public event will be SEO friendly and display custom social media cards."), /* @__PURE__ */ React.createElement(Image, {
    src: "/images/posts/buildanevent/ssr.png",
    alt: "mobile social preview",
    width: "762\u200A",
    height: "454",
    loading: "lazy"
  }), /* @__PURE__ */ React.createElement(Paragraph, null, "A little neat thing added here and throughout the site is a shimmer loading placeholder. This is controlled by a custom", " ", /* @__PURE__ */ React.createElement("a", {
    href: "https://gist.github.com/timc1/6f0aac4f9e5a41f33202842b04e7d054"
  }, "utility function"), "that helps determine how long we should wait before displaying a loading state."), /* @__PURE__ */ React.createElement(Image, {
    src: "/images/posts/buildanevent/animation-5.gif",
    alt: "loading shimmer effect",
    width: "2002\u200A\u200A\u200A",
    height: "1190",
    loading: "lazy"
  }), /* @__PURE__ */ React.createElement(Paragraph, null, "And those are some of the fun tidbits that I wanted to highlight on the site! I'm in the process of opening up the repository but need to do a little bit of cleanup before."), /* @__PURE__ */ React.createElement(Paragraph, null, "And those are some of the fun tidbits that I wanted to highlight on the site! I'm in the process of opening up the repository but need to do a little bit of cleanup before. There are additional features to the site such as profile photos, email confirmation, custom toasts, tooltips, dropdowns, and more. You can check out the site at buildanevent.com. There will be nuances, quirky interactions, all of that \u2014 but what better way to improve than by making."), /* @__PURE__ */ React.createElement(Heading, {
    id: "thoughts",
    element: "h2"
  }, "Thoughts"), /* @__PURE__ */ React.createElement(Paragraph, null, "Building something from scratch and seeing it to the end will always be a tough task. A few times throughout this project I felt discouraged and wanted to do something else. I think a few things that helped me overcome these thoughts were just making sure that I:"), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(Paragraph, null, "Share progress with friends")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(Paragraph, null, "Remind myself that this is experimental")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(Paragraph, null, "Should take time off when I start feeling like this is a job"))), /* @__PURE__ */ React.createElement(Paragraph, null, "If you're building something while working a fulltime job I'd love to hear about your experiences while coordintating the two."), /* @__PURE__ */ React.createElement(Paragraph, null, "This experience has been great. Til then, onto the next thing! \u{1F3C3}\u{1F3FB}\u200D\u2642\uFE0F\u{1F4A8}"));
}

// route-module:/Users/timchang/Desktop/github/tim2/app/routes/clips.tsx
var clips_exports = {};
__export(clips_exports, {
  default: () => clips_default,
  links: () => links3,
  meta: () => meta2
});
var meta2 = () => {
  return {
    title: "Clips",
    description: "macOS menubar app & site for storing and sharing interesting finds from the Internet.",
    url: "/images/posts/clips/illustration.png"
  };
};
var links3 = () => {
  return [{ rel: "stylesheet", href: PostContent.styles }];
};
function clips_default() {
  return /* @__PURE__ */ React.createElement(PostContent, null, /* @__PURE__ */ React.createElement(Heading, {
    element: "h1"
  }, "Clips"), /* @__PURE__ */ React.createElement(Paragraph, null, "Clips is a React site for storing and sharing interesting finds from the Internet paired with a macOS menubar app."), /* @__PURE__ */ React.createElement(Image, {
    src: "/images/posts/clips/illustration.png",
    alt: "clips illustration",
    width: "600",
    height: "600"
  }), /* @__PURE__ */ React.createElement(Heading, {
    id: "background",
    element: "h2"
  }, "Background"), /* @__PURE__ */ React.createElement(Paragraph, null, "I enjoy tinkering with new technologies, dabbling with design, and making things from ideation to launch. I have been working on Clips over the past few months using it as a tool to challenge myself to continue building products from beginning to end. Feel free to play with the hosted version on getclips.app or run your own instance/learn/build on top of it."), /* @__PURE__ */ React.createElement(Paragraph, null, "In this post I'd like to highlight the process for building Clips \u2013 ideating and implementing, with the smaller details in between. Of course, these projects are my way of just playing with technologies I don't usually get to work with so if you have suggestions or have ended up learning something, please shoot me a message!"), /* @__PURE__ */ React.createElement(Heading, {
    id: "overview",
    element: "h2"
  }, "Overview"), /* @__PURE__ */ React.createElement("ol", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "/clips/#idea"
  }, "Idea")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "/clips/#tools-and-technologies"
  }, "Tools and Technologies")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "/clips/#creating-and-managing-clips"
  }, "Creating and managing clips")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "/clips/#shareable-links"
  }, "Shareable links")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "/clips/#commenting"
  }, "Commenting")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "/clips/#notifications"
  }, "Notifications")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "/clips/#emails-and-validation"
  }, "Emails and validations")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "/clips/#theming-views-virtualized-lists"
  }, "Theming, view counts, virtualized lists")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "/clips/#menubar-app"
  }, "macOS menubar app"))), /* @__PURE__ */ React.createElement(Image, {
    src: "/images/posts/clips/profile.png",
    alt: "profile",
    width: "3000",
    height: "1676"
  }), /* @__PURE__ */ React.createElement(Heading, {
    id: "idea",
    element: "h2"
  }, "Idea"), /* @__PURE__ */ React.createElement(Paragraph, null, 'Clips is a macOS menubar app + site that enables anyone to "clip"/save random, interesting things they find on the internet and stores them on a simple grid, accessible through a', " ", /* @__PURE__ */ React.createElement("a", {
    href: "https://getclips.app/tim",
    target: "_blank",
    rel: "noreferer"
  }, "personalized link"), "."), /* @__PURE__ */ React.createElement(Paragraph, null, "While building the site portion of the project, I realized that it might be nice for people to add a clip regardless of what app they're using at the time. So, in addition to being able to clip items from the site, I built a simple mac menubar app to create clips that can be toggled using a keyboard shortcut."), /* @__PURE__ */ React.createElement(Heading, {
    id: "tools-and-technologies",
    element: "h2"
  }, "Tools and technologies"), /* @__PURE__ */ React.createElement(Paragraph, null, "Clips is a Next.js app deployed on Vercel. It's sitting on top of a MongoDB instance, uses swr for data fetching and caching, emotion for styling, and basic cookie authentication under the hood."), /* @__PURE__ */ React.createElement(Paragraph, null, "The menubar app is built using Electron, Typescript, styled-components, and JWTs for authentication. Feel free to fork and play with building your own menubar app with this setup."), /* @__PURE__ */ React.createElement(Heading, {
    id: "creating-and-managing-clips",
    element: "h2"
  }, "Creating and managing clips"), /* @__PURE__ */ React.createElement(Paragraph, null, "We can create three types of clips: text, links, and images."), /* @__PURE__ */ React.createElement(Heading, {
    id: "creating-and-managing-clips",
    element: "h2"
  }, "Creating and managing clips"), /* @__PURE__ */ React.createElement(Paragraph, null, "A text clip is a very simple rich text editor. Add emphasis, quotes and lists to easily jot down something that came to mind."), /* @__PURE__ */ React.createElement(Image, {
    src: "/images/posts/clips/text-clip.png",
    alt: "text clip",
    width: "3359",
    height: "1841"
  }), /* @__PURE__ */ React.createElement(Paragraph, null, "Link clips extends text clips by adding an unfurled link preview, useful for when you find a reference online that you'd like to visit in the future."), /* @__PURE__ */ React.createElement(Image, {
    src: "/images/posts/clips/link-clip.gif",
    alt: "link clip",
    width: "1500",
    height: "574"
  }), /* @__PURE__ */ React.createElement(Paragraph, null, "Display a list of images, along with an optional description to keep a record of a recent trip, or just some funny gifs. Images can be from the local filesystem or unfurled from a link."), /* @__PURE__ */ React.createElement(Image, {
    src: "/images/posts/clips/image-clip.gif",
    alt: "image clip",
    width: "1500",
    height: "673"
  }), /* @__PURE__ */ React.createElement(Paragraph, null, "Creating a clip is easy \u2013 click the \u2318 icon in the navigation or press \u2318+K to bring up the shortcut menu. In the future, the menu can serve as a portal for other features as well. Once a clip is created, it immediately gets added to the current date and all subsequent new clips will be appended to the current date as well."), /* @__PURE__ */ React.createElement(Paragraph, null, "Clicking a clip will navigate to the clip's route; however, you will notice that we keep context of the screen you are currently on by rendering the page within a modal. This follows the Instagram-style loading of pages using Next.js's shallow routing. When refreshing the page at this stage, since there will be no more context, we will display the clip on it's own page."), /* @__PURE__ */ React.createElement(Paragraph, null, "Editing a clip is just as easy! Click the overflow menu and then Edit. Edited clips are denoted by the [edited] indicator."), /* @__PURE__ */ React.createElement(Image, {
    src: "/images/posts/clips/editing.gif",
    alt: "editing a clip",
    width: "1500",
    height: "673"
  }), /* @__PURE__ */ React.createElement(Paragraph, null, "Cool! Now that we have a nice clip put together, we can share it with others. Each clip is by default only viewable by yourself."), /* @__PURE__ */ React.createElement(Heading, {
    id: "shareable-links",
    element: "h2"
  }, "Shareable links"), /* @__PURE__ */ React.createElement(Paragraph, null, "If there is a single clip that you would like to share, opening up the share panel is the place to go. From here, there are a few things you can do \u2013 make the clip publicly available for anyone to view, only specific people that you invite (via email), or just keep things to yourself!"), /* @__PURE__ */ React.createElement(Image, {
    src: "/images/posts/clips/sharing.png",
    alt: "sharing a clip",
    width: "1650",
    height: "934"
  }), /* @__PURE__ */ React.createElement(Heading, {
    id: "commenting",
    element: "h2"
  }, "Commenting"), /* @__PURE__ */ React.createElement(Paragraph, null, "Okay so you can also add comments to any clip \u2013 I have no idea why I called them Notes in the site but here we are \u{1F606}. Comments are editable and linkable \u2013 open the overflow menu for the edit and share options."), /* @__PURE__ */ React.createElement(Paragraph, null, "When sharing a comment, one neat thing is that the selected comment will scroll into view and get highlighted, keeping context."), /* @__PURE__ */ React.createElement(Image, {
    src: "/images/posts/clips/commenting.gif",
    alt: "commenting",
    width: "1500\u200A\u200A",
    height: "547"
  }), /* @__PURE__ */ React.createElement(Heading, {
    id: "notifications",
    element: "h2"
  }, "Notifications"), /* @__PURE__ */ React.createElement(Paragraph, null, "In order to keep us up to date with what interactions are happening with our clips, I built a simple notification system \u2013 we get notified in-app when someone invites us to view a clip, comments on our own clips, and replies on clips that we are a part of. With swr, refetching and revalidating data was an easy option to ensure notifications, and effectively the entire state of the site, is up to date."), /* @__PURE__ */ React.createElement(Image, {
    src: "/images/posts/clips/notifications.gif",
    alt: "notifications",
    width: "1499",
    height: "445"
  }), /* @__PURE__ */ React.createElement(Paragraph, null, "Additionally, emails are sent out for invitations as there would be users that don't have an account."), /* @__PURE__ */ React.createElement(Heading, {
    id: "emails-and-validation",
    element: "h2"
  }, "Emails and validation"), /* @__PURE__ */ React.createElement(Paragraph, null, "Emails and validations was a fun one to work on. We currently send an email out for actions like login using an email link, reset password, and inviting other people to view a clip. A very simple flow for an invitation would go something like:"), /* @__PURE__ */ React.createElement("ol", null, /* @__PURE__ */ React.createElement("li", null, "A user creates a clip and adds me@timcchang.com"), /* @__PURE__ */ React.createElement("li", null, "A clip invitation would be created on the server under the email with a unique token"), /* @__PURE__ */ React.createElement("li", null, "An email would get sent with a url like https://getclips.app/invitations/clip?email=me@timcchang.com&clipId=12345678&token=987654321"), /* @__PURE__ */ React.createElement("li", null, "This link would navigate to a basic Next route, /invitations/:type, where the client would then parse and make a request to ensure that the params match what is on the server. The database would then be updated with the relevant invitation."), /* @__PURE__ */ React.createElement("li", null, "Once the request is successful, we can redirect the user to the intended clip route and all should be good.")), /* @__PURE__ */ React.createElement(Paragraph, null, "Alright let's talk about some other small, fun things."), /* @__PURE__ */ React.createElement(Heading, {
    id: "theming-views-virtualized-lists",
    element: "h2"
  }, "Theming, view counts, virtualized lists"), /* @__PURE__ */ React.createElement(Paragraph, null, "As with any project, a light and dark theme is always a nice touch. With clips, I went with a simple system, light, and dark option using a barebones theme provider."), /* @__PURE__ */ React.createElement(Image, {
    src: "/images/posts/clips/theme.gif",
    alt: "theme switching",
    width: "1500",
    height: "445"
  }), /* @__PURE__ */ React.createElement(Paragraph, null, "View counts are as simple as it gets in the project where we just ping a /api/views endpoint to append and return the view count for a clip. We can further dedupe view counts by IP, but the simplest approach is to just ensure `swr` does not refetch views for a really long time (24 hours) right now and simply returns the cached value for subsequent visits to the clip page."), /* @__PURE__ */ React.createElement(Paragraph, null, "The notifications list is also virtualized! I ran into a small delay when rendering a huge list while testing, and this was the perfect opportunity to use react-virtual. There's a beauty in what virtual lists do to the DOM \u2013 I've spent a good chunk of time just watching the nodes appear in and out haha."), /* @__PURE__ */ React.createElement(Image, {
    src: "/images/posts/clips/virtualized.gif",
    alt: "virtualized list",
    width: "1000",
    height: "464"
  }), /* @__PURE__ */ React.createElement(Heading, {
    id: "menubar-app",
    element: "h2"
  }, "macOS menubar app"), /* @__PURE__ */ React.createElement(Paragraph, null, "So while building the site, I realized that it would be really nice to be able to create clips anywhere when on your computer. First thing that came to mind was building a simple browser extension; however, I've always been interested in building a little menubar app, so with Electron and a simple React app connected to our Next.js functions, we can build something like this."), /* @__PURE__ */ React.createElement(Image, {
    src: "/images/posts/clips/clip.gif",
    alt: "macOS menubar app",
    width: "600",
    height: "504"
  }), /* @__PURE__ */ React.createElement(Paragraph, null, "I'm currently doing a bit of cleanup and will publish the repo soon, so stay tuned!"), /* @__PURE__ */ React.createElement(Paragraph, null, "This site is hosted on ", /* @__PURE__ */ React.createElement("a", {
    href: "https://getclips.app"
  }, "getclips.app"), " ", "and the repository can be found on Github", " ", /* @__PURE__ */ React.createElement("a", {
    href: "https://github.com/timc1/clips"
  }, "here"), "."), /* @__PURE__ */ React.createElement(Paragraph, null, "I think that's it for now! If you're interested in some more learning, got questions, or want to share something cool you are working on please feel free to send me an email or a DM. This project was quite a lot of work \u2013 I'm going to take a little break before getting onto the next. I think, something smaller in scope. :-)"));
}

// route-module:/Users/timchang/Desktop/github/tim2/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  links: () => links4,
  meta: () => meta3
});

// app/pages/index/index.tsx
var import_remix4 = __toModule(require("remix"));

// app/pages/index/styles.css
var styles_default2 = "/build/_assets/styles-VI3O72GU.css";

// app/pages/index/index.tsx
var date = new Date();
var year = date.getFullYear();
var month = (date.getMonth() + 1).toString().padStart(2, "0");
var day = date.getDate();
function IndexPage() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("header", null, /* @__PURE__ */ React.createElement("div", {
    "data-clip": true
  }, /* @__PURE__ */ React.createElement("h1", null, /* @__PURE__ */ React.createElement(import_remix4.Link, {
    to: "/"
  }, " Tim Chang")), /* @__PURE__ */ React.createElement("p", null, "New York City")), /* @__PURE__ */ React.createElement("time", {
    "data-clip": true
  }, `${month}.${day}.${year}`)), /* @__PURE__ */ React.createElement("section", {
    className: "about",
    "data-appear": true
  }, /* @__PURE__ */ React.createElement("h2", null, "About"), /* @__PURE__ */ React.createElement("p", null, "I'm a developer and designer. I value hard work, optimism, and learning about how things work."), /* @__PURE__ */ React.createElement("p", null, "I enjoy the medium between design and engineering \u2013 in my spare time you'll find me experimenting and building apps that take up way too much of my time. This site is home to things I work on and various learnings.")), /* @__PURE__ */ React.createElement("section", {
    className: "work",
    "data-appear": true,
    style: { "--step": 2 }
  }, /* @__PURE__ */ React.createElement("h2", null, "Ideas"), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("h3", null, /* @__PURE__ */ React.createElement("a", {
    href: "https://kbar.vercel.app",
    target: "_blank",
    rel: "noreferer"
  }, "kbar")), /* @__PURE__ */ React.createElement("p", null, "The open source React command menu library")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("h3", null, /* @__PURE__ */ React.createElement(import_remix4.Link, {
    to: "/buildanevent"
  }, "buildanevent.com")), /* @__PURE__ */ React.createElement("p", null, "Simple, fast, modular event builder")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("h3", null, /* @__PURE__ */ React.createElement(import_remix4.Link, {
    to: "/clips"
  }, "clips")), /* @__PURE__ */ React.createElement("p", null, "macOS menubar app and site for storing things from the Internet")))), /* @__PURE__ */ React.createElement("section", {
    className: "contact",
    "data-appear": true,
    style: { "--step": 3 }
  }, /* @__PURE__ */ React.createElement("h2", null, "Contact"), /* @__PURE__ */ React.createElement("p", null, "Learning from and sharing stories."), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("div", null, "Twitter"), /* @__PURE__ */ React.createElement("a", {
    href: "https://twitter.com/timcchang",
    target: "_blank",
    rel: "noreferer"
  }, "@timcchang")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("div", null, "Email"), /* @__PURE__ */ React.createElement("a", {
    href: "mailto:timchang@hey.com",
    target: "_blank",
    rel: "noreferer"
  }, "timchang@hey.com")))));
}
IndexPage.styles = styles_default2;

// route-module:/Users/timchang/Desktop/github/tim2/app/routes/index.tsx
var links4 = () => {
  return [{ rel: "stylesheet", href: IndexPage.styles }];
};
var meta3 = () => {
  return {
    title: "Tim Chang",
    description: "Software Developer in New York City"
  };
};
function Index() {
  return /* @__PURE__ */ React.createElement(IndexPage, null);
}

// <stdin>
var import_assets = __toModule(require("./assets.json"));
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/buildanevent": {
    id: "routes/buildanevent",
    parentId: "root",
    path: "buildanevent",
    index: void 0,
    caseSensitive: void 0,
    module: buildanevent_exports
  },
  "routes/clips": {
    id: "routes/clips",
    parentId: "root",
    path: "clips",
    index: void 0,
    caseSensitive: void 0,
    module: clips_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
//# sourceMappingURL=/build/index.js.map
