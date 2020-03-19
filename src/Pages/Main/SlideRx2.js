import React, { Component } from "react";
import Instagram from "./Component/Instagram";
import Footer from "./Component/Footer";
import * as Rx from "rxjs-es";
import styled, { css } from "styled-components";

export default class SlideRx2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      vIndex: 0
    };
  }

  handleClick = id => {
    id === 3 &&
      this.section3.scrollIntoView({ block: "start", behavior: "smooth" });
    id === 4 &&
      this.section4.scrollIntoView({ block: "start", behavior: "smooth" });
  };

  componentDidMount() {
    const vertical$ = Rx.Observable.fromEvent(window, "wheel")
      .map(event => (event.deltaY < 0 ? -1 : 1))
      .throttleTime(1400)
      .startWith(0)
      .scan((prev, current) => {
        let next = prev + current;
        if (next >= 0 && next < 1) {
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
      transitionDuration: "1400ms",
      transform: `translateY(${transitionY}vh)`
    };

    return (
      <div style={styleY}>
        <section ref={ref => (this.section3 = ref)}>
          <Instagram />
        </section>
        <section ref={ref => (this.section4 = ref)}>
          <Footer />
        </section>
      </div>
    );
  }
}
