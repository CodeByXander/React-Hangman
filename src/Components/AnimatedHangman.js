import React from "react";

// Animated Hangman sequence
class AnimatedHangman extends React.Component {
  constructor(props) {
    super(props);

    // Set starting frame
    this.state = {
      frame: 1,
    };
  }

  // Run on page load
  componentDidMount() {
    // Run animation on an interval
    this.interval = setInterval(() => {
      // Check current frame to loop over all frames
      this.setState((prev) => {
        const nextFrame = prev.frame >= 11 ? 1 : prev.frame + 1;
        return { frame: nextFrame };
      });
    }, 400); // animation speed
  }

  // Unmount component and clear interval
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  // Display on page
  render() {
    const { frame } = this.state;
    // src gets pulled from state
    const imgSrc = `/assets/hangmandrawings/state${frame}.gif`;

    // Render animation
    return (
      <div className="animated-hangman">
        <img src={imgSrc} alt={`Hangman animation frame ${frame}`} />
      </div>
    );
  }
}

export default AnimatedHangman;
