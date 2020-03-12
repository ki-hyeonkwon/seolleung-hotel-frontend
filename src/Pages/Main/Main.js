import React, { Component } from "react";
import Subnav from "./Component/Subnav";
import Mainvisual from "./Component/Mainvisual";
import Ourhotels from "./Component/Ourhotels";
import Offers from "./Component/Offers";
import Instagram from "./Component/Instagram";
import Footer from "./Component/Footer";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.section1 = React.createRef();
    this.section2 = React.createRef();
    this.section3 = React.createRef();
    this.section4 = React.createRef();
    this.section5 = React.createRef();

    this.state = {
      section: [
        this.section1,
        this.section2,
        this.section3,
        this.section4,
        this.section5
      ]
    };
  }

  handleClick = e => {
    if (e.target.props) {
      console.log(e.target.props.section);
    }
    console.log("hi");
    // var section = document.getElementsByClassName("Instagram");
    // if (section.current) {
    //   section.scrollIntoView({
    //     block: "start",
    //     behavior: "smooth"
    //   });
  };

  // this.state.section[0].current.scrollIntoView({ block: "start" });
  // console.dir(e.target);
  // console.log(this.state.section);
  // console.log(this.props.section[0].current);
  // this.state.section.scrollIntoView({
  //   block: "start",
  //   behavior: "smooth"
  // });
  // if (this.props.section.current.offsetTop === 1000) {
  //   this.props.onChange();
  // } else {
  //   this.props.onChange("move-section");
  // }
  // };

  // componentDidMount() {
  //   console.log("kk", this.section1.current.props.ref);
  // }

  // componentWillUnmount() {
  //   window.removeEventListener("scroll", this.onScroll);
  // }

  // onScroll = e => {
  //   const scrollTop = ("scroll", e.srcElement.scrollingElement.scrollTop);
  //   scrollTop &&
  //     this.setState({
  //       Page: scrollTop
  //     });
  // };

  render() {
    console.log(window.offsetTop);
    const { section } = this.state;
    return (
      <>
        <Mainvisual>
          <div ref={this.section1}></div>
        </Mainvisual>

        <Ourhotels ref={this.section2} />
        <div ref={this.section3}>
          <Offers />
        </div>

        <Instagram ref={this.section4} />
        <Footer ref={this.section5} />
        <Subnav handleClick={this.handleClick} section={section} />
      </>
    );
  }
}
