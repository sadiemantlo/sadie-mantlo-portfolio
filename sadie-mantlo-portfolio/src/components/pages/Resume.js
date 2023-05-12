import React from "react";
import resume from "../../resume.jpg";

class Resume extends React.Component {
  downloadResume = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "resume.jpg";
    link.click();
  };
  render() {
    const styles = {
      card: {
        width: "40rem",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "110px"
      },
      img: {
        width: "40rem",
        display: "inline",
      },
      container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
    };

    return (
        <div style={styles.container}>
          <div className="card" style={styles.card}>
            <img
              src="images/resume.jpg"
              alt="Sadie Mantlo Resume"
              style={styles.img}
            />
            <div className="card-body">
              <button onClick={this.downloadResume} style={{ textAlign: "center" }}>Download</button>
            </div>
          </div>
        </div>
    );
  }
}

export default Resume;
