import React from 'react'
import Lottie from 'react-lottie'
import * as animationData from './my-animation.json'

export default class LottieControl extends  React.Component {

    constructor(props) {
        super(props);
        this.state = {isStopped: false, isPaused: false};
      }

      render() {
        const defaultOptions = {
          loop: true,
          autoplay: true,
          animationData: animationData,
          speed: 2,
          rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
          }
        };
return (<div >
    <Lottie options={defaultOptions}
            height={200}
            width={400}/>
</div>)
      }}