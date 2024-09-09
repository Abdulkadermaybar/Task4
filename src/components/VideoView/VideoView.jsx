import "./VideoView.css";

const VideoView = () => {
  return (
    <section className="video-view container">
      <h3>شاهد الفيديو الخاص بنا</h3>
      <div className="video-container">
        <img src="assets/images/video-frame.jpg" alt="video-frame" className="img-fluid" />
        <div className="play-video-icon">
          <i className="fa-solid fa-play"></i>
        </div>
      </div>
    </section>
  );
};

export default VideoView;
