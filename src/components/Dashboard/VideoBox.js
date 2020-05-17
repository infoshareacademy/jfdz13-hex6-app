import React from "react";
import styles from './Dashboard.module.css';



  
class VideoBox extends React.Component {
  state = {
    loading: true
  };
  componentDidMount() {
    if (this.video) {
      this.video.addEventListener("loadeddata", () => {
        this.setState({ loading: false });
      });
    }
  }

  componentWillUnmount() {
    if (this.video) {
      this.video.removeEventListener("loadeddata", () => {});
    }
  }

  render() {
    return (
      // <video
      //   ref={ref => (this.video = ref)}
      //   autoPlay
      //   muted
      //   loop
      //   className={styles.videoBox}>
      //   <source src="Videos/3city.mp4" type="video/mp4" />
      // </video>
      <iframe className={styles.videoBox} src="https://www.youtube-nocookie.com/embed/nTvKj8kOAWk?&mute=1&frameborder=0&autoplay=1&controls=0&showinfo=0&modestbranding=1&loop=1" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
    );
  }
}

export default VideoBox;