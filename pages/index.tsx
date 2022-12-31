import Card from "../components/Card";
import Deck from "../components/Deck";
import SwipeTip from "../components/SwipeTip";
import Icons from "../components/Icons";
import Navbar from "../components/Navbar";
import { request } from "../lib/datocms";
import { HOMEPAGE_QUERY } from "../lib/queries";

export const QUERY = HOMEPAGE_QUERY;

export async function getStaticProps() {
  const data = await request({
    query: QUERY,
    variables: null,
    includeDrafts: false,
    excludeInvalid: true,
  });
  return {
    props: { data },
  };
}

export default function EnterPage(props: { data: any }) {
  const { data } = props;
  //   console.table(data);
  return (
    <main id="canvas">
      <Navbar />
      <section className="hero_wrapper">
        <div className="hero_text_container">
          <h1 className="hero_title">Hello</h1>
          <p className="hero_subtitle">
            {
              "Thanks for stopping by. My name is Sean DeRue. I'm a marketer turned software engineer and here's my portfolio. Have a look!"
            }
          </p>
          <Icons />
        </div>
        <div className="hero_cards_container">
          <Deck data={data} />
          <SwipeTip />
        </div>
      </section>
    </main>
  );
}
