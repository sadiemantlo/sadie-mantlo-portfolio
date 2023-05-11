import React, { useState } from "react";

const styles = {
  inline: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridGap: "10px",
    gridAutoRows: "minmax(100px, auto)",
  },
  card: {
    width: "20rem",
    marginTop: "20px",
    backgroundColor: "yellow",
  },
  linkImg: {
    width: "45px",
  },
  hovered: {
    transform: "scale(1.1)",
  },
  header: {
    textAlign: "center",
    fontSize: "25px",
  },
};

export default function Portfolio() {
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);
  const [isHovered5, setIsHovered5] = useState(false);
  const [isHovered6, setIsHovered6] = useState(false);

  return (
    <div className="container" style={styles.inline}>
    <a href='https://spooky-dudes.herokuapp.com/' style={{ textDecoration: "none", color: "black" }}>
      <div className="card" style={styles.card}>
        <img
          src="./images/spooky-dudes.png"
          alt="Spooky Dudes"
          style={
            isHovered ? { ...styles.image, ...styles.hovered } : styles.image
          }
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />
        <div className="card-body">
          <h5 style={styles.header}>Spooky Dudes</h5>
          <div>
            <a href="https://github.com/sadiemantlo/spooky-dudes">
              <img
                style={styles.linkImg}
                src="./images/github.png"
                alt="Github"
              />
            </a>
          </div>
        </div>
      </div></a>

      <a href='https://sadiemantlo.github.io/Project-1/' style={{ textDecoration: "none", color: "black" }}>
      <div className="card" style={styles.card}>
        <img
          src="./images/craft&cocktail.png"
          alt="Craft & Cocktail"
          style={
            isHovered2 ? { ...styles.image, ...styles.hovered } : styles.image
          }
          onMouseEnter={() => setIsHovered2(true)}
          onMouseLeave={() => setIsHovered2(false)}
        />
        <div className="card-body">
          <h5 style={styles.header}>Craft & Cocktail</h5>
          <div>
            <a href="https://github.com/sadiemantlo/Project-1">
              <img
                style={styles.linkImg}
                src="./images/github.png"
                alt="Github"
              />
            </a>
          </div>
        </div>
      </div></a>

      <a href='https://sadiemantlo.github.io/weather-dashboard-week6/' style={{ textDecoration: "none", color: "black" }}>
      <div className="card" style={styles.card}>
        <img
          src="./images/weather-dashboard.png"
          alt="Weather Dashboard"
          style={
            isHovered3 ? { ...styles.image, ...styles.hovered } : styles.image
          }
          onMouseEnter={() => setIsHovered3(true)}
          onMouseLeave={() => setIsHovered3(false)}
        />
        <div className="card-body">
          <h5 style={styles.header}>Weather Dashboard</h5>
          <div>
            <a href="https://github.com/sadiemantlo/weather-dashboard-week6">
              <img
                style={styles.linkImg}
                src="./images/github.png"
                alt="Github"
              />
            </a>
          </div>
        </div>
      </div></a>

      <a href='https://note-taker-express4.herokuapp.com/' style={{ textDecoration: "none", color: "black" }}>
      <div className="card" style={styles.card}>
        <img
          src="./images/note-taker.png"
          alt="Note Taker"
          style={
            isHovered4 ? { ...styles.image, ...styles.hovered } : styles.image
          }
          onMouseEnter={() => setIsHovered4(true)}
          onMouseLeave={() => setIsHovered4(false)}
        />
        <div className="card-body">
          <h5 style={styles.header}>Note Taker</h5>
          <div>
            <a href="https://github.com/sadiemantlo/note-taker-challenge">
              <img
                style={styles.linkImg}
                src="./images/github.png"
                alt="Github"
              />
            </a>
          </div>
        </div>
      </div></a>

      <a href='https://text-editor-pwa-4.herokuapp.com/' style={{ textDecoration: "none", color: "black" }}>
      <div className="card" style={styles.card}>
        <img
          src="images/jate.png"
          alt="Jate"
          style={
            isHovered5 ? { ...styles.image, ...styles.hovered } : styles.image
          }
          onMouseEnter={() => setIsHovered5(true)}
          onMouseLeave={() => setIsHovered5(false)}
        />
        <div className="card-body">
          <h5 style={styles.header}>J.A.T.E</h5>
          <div>
            <a href="https://github.com/sadiemantlo/pwa-text-editor">
              <img
                style={styles.linkImg}
                src="./images/github.png"
                alt="Github"
              />
            </a>
          </div>
        </div>
      </div></a>

      <a href='https://sadiemantlo.github.io/work-day-scheduler-week5/' style={{ textDecoration: "none", color: "black" }}>
      <div className="card" style={styles.card}>
        <img
          src="images/work-scheduler.png"
          alt="Work Day Sceduler"
          style={
            isHovered6 ? { ...styles.image, ...styles.hovered } : styles.image
          }
          onMouseEnter={() => setIsHovered6(true)}
          onMouseLeave={() => setIsHovered6(false)}
        />
        <div className="card-body">
          <h5 style={styles.header}>Work Day Sceduler</h5>
          <div>
            <a href="https://github.com/sadiemantlo/work-day-scheduler-week5">
              <img
                style={styles.linkImg}
                src="./images/github.png"
                alt="Github"
              />
            </a>
          </div>
        </div>
      </div></a>

    </div>
  );
}
