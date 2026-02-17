import { useEffect } from "react";
import Typed from "typed.js";
import img from "../../public/img.png";

const Home = () => {
  useEffect(() => {
    const typed = new Typed(".Typing-text", {
      strings: ["Full-Stack MERN Developer"],
      typeSpeed: 100,
      backSpeed: 70,
      loop: true,
    });
    return () => typed.destroy();
  }, []);

  return (
    <section className="home" id="home">
      <div className="home-content">
        <h1>Hello, It's Me</h1>
        <h1 id="name">Rohit Kumar</h1>
        <h3>
          And I'm a <span className="Typing-text"></span>
        </h3>

        <p>
          I am a MERN Full Stack Developer with hands-on experience in designing
          and developing scalable, high-performance web applications using
          MongoDB, Express.js, React.js, and Node.js. I specialize in delivering
          end-to-end solutions with a strong focus on clean code, intuitive user
          interfaces, and responsive design.
        </p>

        <div className="home-sci">
          <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
          <a href="#"><i className="fa-brands fa-instagram"></i></a>
          <a href="#"><i className="fa-brands fa-whatsapp"></i></a>
          <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
        </div>

        <a href="#about" className="btn-box">More About Me</a>
      </div>


      <div
        id="img-sec"
        style={{ backgroundImage: `url(${img})` }}
      ></div>
    </section>
  );
};

export default Home;
