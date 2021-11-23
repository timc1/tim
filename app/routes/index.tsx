import type { LinksFunction, MetaFunction } from "remix";
import IndexPage from "~/pages/index";

export let links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: IndexPage.styles }];
};

export let meta: MetaFunction = () => {
  return {
    title: "Tim Chang · Home",
    description: "Software Developer in New York City",
  };
};

export default function Index() {
  return <IndexPage />;
}
