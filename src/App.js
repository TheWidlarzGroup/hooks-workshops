import React, { Component } from "react";
import "./App.css";
import {
  Heading,
  Deck,
  Slide,
  Link,
  Text,
  Image,
  CodePane,
  ComponentPlayground,
  Appear,
  Layout,
  Fill,
  BlockQuote,
  Quote,
  Cite,
  Markdown,
  MarkdownSlides,
  List,
  ListItem,
  SlideSet,
  Table,
  TableHeader,
  TableHeaderItem,
  TableBody,
  TableRow,
  TableItem
} from "spectacle";
import createTheme from "spectacle/lib/themes/default";

import Codete from "./assets/codete.jpg";
import TWG from "./assets/twg-logo.png";
import DM from "./assets/dm-logo.png";

const theme = createTheme({
  primary: "#302b4e",
  text: "#fff"
});

// Example source code for a source code slide.
const exampleDeck = `
return (
  <Deck transition={['zoom','slide']} transitionDuration={800}>
    <Slide bgColor="primary">
      <Heading size={1} fit caps>
        React Presentations
      </Heading>
      <Heading size={2} fit caps>
        Written In React
      </Heading>
    </Slide>
    <Slide bgColor="black">
      <Heading size={1} fit textColor="primary" textFont="secondary">
        Wait What?
      </Heading>
    </Slide>
    <Slide bgColor="primary" textColor="white" align="center top">
      <Heading size={1} textColor="white" textFont="primary">
        Thats right
      </Heading>
      <List>
        <ListItem>Inline style based theme system</ListItem>
        <ListItem>Autofit Text</ListItem>
        <ListItem>PDF Export</ListItem>
      </List>
    </Slide>
  </Deck>
)
        `.trim();

class Interactive extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      count: this.state.count + 1
    });
  }
  render() {
    const styles = {
      padding: 20,
      background: "black",
      minWidth: 300,
      marginTop: 20,
      textTransform: "uppercase",
      border: "none",
      color: "white",
      outline: "none",
      fontWeight: "bold",
      fontSize: "2em"
    };
    return (
      <div>
        {this.state.count < 5 ? (
          <div>
            <Heading size={5} textColor="white">
              The button has been clicked {this.state.count} times
            </Heading>
            <button style={styles} type="button" onClick={this.handleClick}>
              Click Me
            </button>
          </div>
        ) : (
          <Heading size={5} fit caps textColor="white">
            Easy there pal
          </Heading>
        )}
      </div>
    );
  }
}

function App() {
  return (
    <Deck transition={["zoom", "slide"]} theme={theme} transitionDuration={500}>
      <Slide transition={["zoom"]} bgColor="primary">
        <Heading size={1} fit caps lineHeight={1} textColor="white">
          🔥 React Hooks Workshops 🔥
        </Heading>
      </Slide>
      <Slide
        id="companies"
        transition={["slide"]}
        bgColor="primary"
        notes="You can even put notes on your slide. How awesome is that?"
      >
        <Appear fid="1">
          <Image src={Codete} margin="0px auto 40px" height="150px" />
        </Appear>
        <Appear fid="2">
          <Image src={TWG} margin="0px auto 40px" height="200px" />
        </Appear>
        <Appear fid="3">
          <Image src={DM} margin="0px auto 40px" height="150px" />
        </Appear>
        {/* <Heading size={2} caps fit textColor="white" textFont="primary">
          Cooperation of three entities
        </Heading> */}
      </Slide>
      <Slide
        id="about-host"
        bgColor="primary"
        notes="<ul><li>talk about that</li><li>and that</li></ul>"
      >
        <Layout>
          <Fill>
            <Heading size={6} caps textColor="white" margin={10}>
              Bart Widlarz
            </Heading>
          </Fill>
          <Fill>
            <Image src={TWG} margin="0px auto 40px" height="100px" />
          </Fill>
        </Layout>
        <Appear fid="1">
          <Heading size={6} caps textColor="white" margin={10}>
            JavaScript
          </Heading>
        </Appear>
        <Appear fid="1">
          <Heading size={6} caps textColor="white" margin={10}>
            TypeScript
          </Heading>
        </Appear>
        <Appear fid="1">
          <Heading size={6} caps textColor="white" margin={10}>
            Kotlin
          </Heading>
        </Appear>
        <Appear fid="1">
          <Heading size={6} caps textColor="white" margin={10}>
            Swift
          </Heading>
        </Appear>
        <Appear fid="1">
          <Heading size={6} caps textColor="white" margin={10}>
            Java
          </Heading>
        </Appear>
        <Appear fid="1">
          <Heading size={6} caps textColor="white" margin={10}>
            Elixir
          </Heading>
        </Appear>
        <Appear fid="1">
          <Heading size={6} caps textColor="white" margin={10}>
          TypeScript
          </Heading>
        </Appear>
        <Appear fid="1">
          <Heading size={6} caps textColor="white" margin={10}>
           JavaScript
          </Heading>
        </Appear>
        <Appear fid="1">
          <Heading size={6} caps textColor="white" margin={10}>
           ...
          </Heading>
        </Appear>
      </Slide>
      <Slide
        transition={["zoom", "fade"]}
        bgColor="primary"
        notes="<ul><li>talk about that</li><li>and that</li></ul>"
      >
        <CodePane lang="jsx" source={exampleDeck} margin="20px auto" />
      </Slide>
      <Slide>
        <ComponentPlayground theme="dark" />
      </Slide>
      <Slide
        transition={["slide"]}
        bgImage={
          "https://cdn.rawgit.com/FormidableLabs/spectacle/master/example/assets/city.jpg"
        }
        bgDarken={0.75}
      >
        <Appear fid="1">
          <Heading size={1} caps fit textColor="primary">
            Full Width
          </Heading>
        </Appear>
        <Appear fid="2">
          <Heading size={1} caps fit textColor="tertiary">
            Adjustable Darkness
          </Heading>
        </Appear>
        <Appear fid="3">
          <Heading size={1} caps fit textColor="primary">
            Background Imagery
          </Heading>
        </Appear>
      </Slide>
      <Slide transition={["zoom", "fade"]} bgColor="primary">
        <Heading caps fit>
          Flexible Layouts
        </Heading>
        <Layout>
          <Fill>
            <Heading
              size={4}
              caps
              textColor="secondary"
              bgColor="white"
              margin={10}
            >
              Left
            </Heading>
          </Fill>
          <Fill>
            <Heading
              size={4}
              caps
              textColor="secondary"
              bgColor="white"
              margin={10}
            >
              Right
            </Heading>
          </Fill>
        </Layout>
      </Slide>
      <Slide transition={["slide"]} bgColor="black">
        <BlockQuote>
          <Quote>Wonderfully formatted quotes</Quote>
          <Cite>Ken Wheeler</Cite>
        </BlockQuote>
      </Slide>
      <Slide transition={["spin", "zoom"]} bgColor="tertiary">
        <Heading caps fit size={1} textColor="primary">
          Inline Markdown
        </Heading>
        <Markdown>
          {`
![Markdown Logo](https://cdn.rawgit.com/FormidableLabs/spectacle/master/example/assets/markdown.png)

You can write inline images, [Markdown Links](http://commonmark.org), paragraph text and most other markdown syntax
* Lists too!
* With ~~strikethrough~~ and _italic_
* And let's not forget **bold**
                `}
        </Markdown>
      </Slide>
      {MarkdownSlides`
#### Create Multiple Slides in Markdown
All the same tags and elements supported in <Markdown /> are supported in MarkdownSlides.
---
Slides are separated with **three dashes** and can be used _anywhere_ in the deck. The markdown can either be:
* A Tagged Template Literal
* Imported Markdown from another file
              `}
      <Slide transition={["slide", "spin"]} bgColor="primary">
        <Heading caps fit size={1} textColor="tertiary">
          Smooth
        </Heading>
        <Heading caps fit size={1} textColor="secondary">
          Combinable Transitions
        </Heading>
      </Slide>
      <SlideSet>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <List>
            <Appear>
              <ListItem>Inline style based theme system</ListItem>
            </Appear>
            <Appear>
              <ListItem>Autofit text</ListItem>
            </Appear>
            <Appear>
              <ListItem>Flexbox layout system</ListItem>
            </Appear>
            <Appear>
              <ListItem>PDF export</ListItem>
            </Appear>
            <Appear>
              <ListItem>And...</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} caps fit textColor="tertiary">
            Your presentations are interactive
          </Heading>
          <Interactive />
        </Slide>
      </SlideSet>
      <Slide
        transition={["slide"]}
        bgColor="primary"
        notes="Hard to find cities without any pizza"
      >
        <Heading
          size={4}
          caps
          textColor="secondary"
          bgColor="white"
          margin={10}
        >
          Pizza Toppings
        </Heading>
        <Layout>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHeaderItem />
                <TableHeaderItem>2011</TableHeaderItem>
                <TableHeaderItem>2013</TableHeaderItem>
                <TableHeaderItem>2015</TableHeaderItem>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableItem>None</TableItem>
                <TableItem>61.8%</TableItem>
                <TableItem>39.6%</TableItem>
                <TableItem>35.0%</TableItem>
              </TableRow>
              <TableRow>
                <TableItem>Pineapple</TableItem>
                <TableItem>28.3%</TableItem>
                <TableItem>54.5%</TableItem>
                <TableItem>61.5%</TableItem>
              </TableRow>
              <TableRow>
                <TableItem>Pepperoni</TableItem>
                <TableItem />
                <TableItem>50.2%</TableItem>
                <TableItem>77.2%</TableItem>
              </TableRow>
              <TableRow>
                <TableItem>Olives</TableItem>
                <TableItem />
                <TableItem>24.9%</TableItem>
                <TableItem>55.9%</TableItem>
              </TableRow>
            </TableBody>
          </Table>
        </Layout>
      </Slide>
      <Slide transition={["spin", "slide"]} bgColor="tertiary">
        <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
          Made with love in Seattle by
        </Heading>
        <Link href="http://www.formidable.com">
          <Image
            width="100%"
            src={
              "https://cdn.rawgit.com/FormidableLabs/spectacle/master/example/assets/formidable-logo.svg"
            }
          />
        </Link>
      </Slide>
    </Deck>
  );
}

export default App;
