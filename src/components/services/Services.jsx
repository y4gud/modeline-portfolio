import "./services.css"
import {BiCheck} from "react-icons/bi"

const Services = () => {
  return (
    <section id="services">
      <h5>Services I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Fashion Designing</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck/>
              <p>I do all sort of designs from Native to English wears</p>
            </li>
            <li>
              <BiCheck/>
              <p>I do all sort of designs from Native to English wears</p>
            </li>
            <li>
              <BiCheck/>
              <p>I do all sort of designs from Native to English wears</p>
            </li>
            <li>
              <BiCheck/>
              <p>I do all sort of designs from Native to English wears</p>
            </li>
          </ul>
        </article>

        {/* Web development section */}

        <article className="service">
          <div className="service__head">
            <h3>Hand Beading</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck/>
              <p>I do all sort of designs from Native to English wears</p>
            </li>
            <li>
              <BiCheck/>
              <p>I do all sort of designs from Native to English wears</p>
            </li>
            <li>
              <BiCheck/>
              <p>I do all sort of designs from Native to English wears</p>
            </li>
            <li>
              <BiCheck/>
              <p>I do all sort of designs from Native to English wears</p>
            </li>
          </ul>
        </article>

        {/* Debugging */}

        <article className="service">
          <div className="service__head">
            <h3>Online tutor</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck/>
              <p>I do all sort of designs from Native to English wears</p>
            </li>
            <li>
              <BiCheck/>
              <p>I do all sort of designs from Native to English wears</p>
            </li>
            <li>
              <BiCheck/>
              <p>I do all sort of designs from Native to English wears</p>
            </li>
            <li>
              <BiCheck/>
              <p>I do all sort of designs from Native to English wears</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services