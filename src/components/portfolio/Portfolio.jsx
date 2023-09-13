import "./portfolio.css";
import IMG1 from "../../assets/1.jpeg";
import IMG2 from "../../assets/2.jpg";
import IMG3 from "../../assets/3.jpg";
import IMG4 from "../../assets/4.avif";
import IMG5 from "../../assets/5.webp";
import IMG6 from "../../assets/6.jpeg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Labrador design ordered by a client in the United States",
    ig: "https://instagram.com",
  },
  {
    id: 2,
    image: IMG2,
    title: "Luc design with full beads ordered by a client in the UK",
    ig: "https://instagram.com",
  },
  {
    id: 3,
    image: IMG3,
    title: "A wedding gown made for one of our Nigeria customers",
    ig: "https://instagram.com",
  },
  {
    id: 4,
    image: IMG4,
    title: "Office jumper suits ordered by a popular french celebrity",
    ig: "https://instagram.com",
  },
  {
    id: 5,
    image: IMG5,
    title: "Full gown on display at our showroom",
    ig: "https://instagram.com",
  },
  {
    id: 6,
    image: IMG6,
    title: "An handmade bead for one of our clients in Dubai",
    ig: "https://instagram.com",
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My recent works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, ig}) => {
            return (
              <article key={id} className="portfolio__item">
          <div className="portfolio__item-image">
            <img className="portfolio__photo" src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <div className="portfolio__item-cta">
            <a
              href={ig}
              className="btn btn-primary"
              target="__blank"
            >
              View on Instagram
            </a>
          </div>
        </article>
            )
          })
        }
      </div>
    </section>
  );
};

export default Portfolio;
