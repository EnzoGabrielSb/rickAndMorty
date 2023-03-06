import "./About.css";

const About = () => {
  return (
    <div class="card">
      <img
        src="https://cdn-icons-png.flaticon.com/512/2059/2059570.png"
        alt="Person"
        class="card__image"
      ></img>
      <img src="" alt="" />
      <h2>Enzo Gabriel David Vera</h2>
      <h3>Estudiante Desarrollador Web Full Stack</h3>
      <ul class="social-icons">
        <li>
          <a href="#">
            <i class="fa fa-instagram"></i>
          </a>
        </li>

        <li>
          <a href="#">
            <i class="fa fa-linkedin"></i>
          </a>
        </li>
      </ul>
      <button class="btn draw-border">Follow</button>
      <button class="btn draw-border">Message</button>
    </div>
  );
};

export default About;
