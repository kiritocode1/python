import { Scroll } from "scrollex";
import "./style.css"
const keyframes = {
  heading: ({ section }) => ({
    [section.topAt("container-bottom")]: {
      translateX: -200,
    },
    [section.bottomAt("container-top")]: {
      translateX: 200,
    },
  }),
};

export default function App() {
  return (
    <Scroll.Container scrollAxis="y" className="h-screen">
      <Scroll.Section className="h-screen center bg-1">
        <Scroll.Item keyframes={keyframes.heading}>
          <h1>Blog Coming Soon</h1>
        </Scroll.Item>
      </Scroll.Section>
      <Scroll.Section className="h-screen center bg-2">
        <Scroll.Item keyframes={keyframes.heading}>
          <h1>Dont Worry</h1>
        </Scroll.Item>
      </Scroll.Section>
      <Scroll.Section className="h-screen center bg-1">
        <Scroll.Item keyframes={keyframes.heading}>
          <h1>I am fast <br/> ◉/_\◉</h1>
        </Scroll.Item>
      </Scroll.Section>
    </Scroll.Container>
  );
}
