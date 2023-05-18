import React from "react";
import resume from "../../resume.jpg";
import './pages.css';

class Resume extends React.Component {
  downloadResume = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "resume.jpg";
    link.click();
  };
  render() {

    return (
        <div className='container'>
          <div className="card">
            <img
              src="images/resume.jpg"
              alt="Sadie Mantlo Resume"
              className='img'
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
