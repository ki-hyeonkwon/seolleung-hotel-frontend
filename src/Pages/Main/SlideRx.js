import React, { Component } from "react";
import Mainvisual from "./Component/Mainvisual";
import Ourhotels2 from "./Component/Ourhotels2";
import * as Rx from "rxjs-es";
import styled, { css } from "styled-components";

export default class SlideRx extends Component {
  constructor(props) {
    super(props);

    this.state = {
      vIndex: 0
    };
  }

  handleClick = id => {
    id === 0 &&
      this.section0.scrollIntoView({ block: "start", behavior: "smooth" });
    id === 1 &&
      this.section1.scrollIntoView({ block: "start", behavior: "smooth" });
  };

  componentDidMount() {
    const vertical$ = Rx.Observable.fromEvent(window, "wheel")
      .map(event => (event.deltaY < 0 ? -1 : 1))
      .throttleTime(1400)
      .startWith(0)
      .scan((prev, current) => {
        let next = prev + current;
        if (next >= 0 && next < 2) {
          return next;
        } else {
          return prev;
        }
      }, 0)
      .distinctUntilChanged();

    vertical$.subscribe(vIndex => this.setState({ vIndex }));
  }

  render() {
    const transitionY = this.state.vIndex * -100;

    const styleY = {
      transition: "all ease",
      height: "200vh",
      transitionDuration: "500ms",
      transform: `translateY(${transitionY}vh)`
      // float: "left"
    };

    return (
      <div style={styleY}>
        {/* <section ref={ref => (this.section0 = ref)}> */}
        <Mainvisual />
        {/* </section>
        <section ref={ref => (this.section1 = ref)}> */}
        <Ourhotels2 />
        {/* </section> */}
      </div>
    );
  }
}
