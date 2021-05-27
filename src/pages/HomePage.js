import movie from "../img/movie.png";
import social from "../img/social.png";
import rune from "../img/rune.png";
import React from "react";

const HomePage = () => {
  return (
    <div id="home" className="home">
      <section id="first-view" className="first-view">
        <div className="first-view__avatar"></div>
        <div className="first-view__info">
          <h1 className="name">Barry Hoang</h1>
          <p className="position">Full Stack Web Developer</p>
          <a href="#introduce" className="btn">
            <span>Read more</span>
          </a>
        </div>
      </section>

      <section id="introduce" className="introduce">
        <div className="introduce__profile">
          <h2 className="bnr">All about me</h2>
          <p className="txt">
            I graduated as a Bachelor of Information Technology from Hoa Sen
            University and worked as Frontend Developer in ALive Viet Nam. In my
            company, I use HTML5, CSS3 and JS to do work as normal web not has
            more features, it just a document web page to show information for
            users. If the client wants to have the admin page to post the
            product they want to show on their web, I use WordPress to do it,
            WordPress is the powerful framework of PHP language and I think this
            is the best way to do like they want.
            <br />
            <br />
            After working in the corporate environment for more than a year, I
            felt like developing myself and I decided to study at CoderSchool
            with the Full-Stack Development course. During the three months of
            studying and practicing skills, I feel like I want to continue to
            practice the skills learned in the past time through direct
            application to real projects at the development company. software.
            <br />
            <br />
            JavaScript, ReactJs, NodeJs, ExpressJs, PHP, Wordpress, MongoDb.
          </p>
          <a
            href="https://barryhoang.netlify.app/"
            target="_blank"
            rel="noreferrer"
            className="btn btn--grey"
          >
            <span>More</span>
          </a>
        </div>
        <div className="introduce__avatar"></div>
      </section>

      <section id="projects" className="projects">
        <div className="projects__bnr">
          <h2>What I Can Do</h2>
        </div>
        <div className="projects__list">
          <ul>
            <li>
              <div className="img">
                <img src={movie} alt="Netflix" />
              </div>
              <div className="info">
                <h3 className="tit">Netflix</h3>
                <p>
                  The website allows users to view trailers, reviews, ratings of
                  the latest movies from the IDMB site and add to favorites
                  movies that users are interested in.
                  <br />
                  Javascript, React, Redux-Thunk
                </p>
                <div className="group">
                  <a
                    href="https://hnanhphatmovie.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                  >
                    <span>See Live</span>
                  </a>
                  <a
                    href="https://github.com/hnanhphat/movie"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn--white"
                  >
                    <span>Github</span>
                  </a>
                </div>
              </div>
            </li>
            <li>
              <div className="img">
                <img src={social} alt="Te Quiero" />
              </div>
              <div className="info">
                <h3 className="tit">Te Quiero</h3>
                <p>
                  The website is made based on the idea of major social
                  networking sites like Facebook, Instagram, Twitter, ... users
                  can add (edit or delete) posts, interact with other users and
                  react to posts written by other users.
                  <br />
                  React, Redux-Thunk, NodeJs, ExpressJs, MongoDB.
                </p>
                <div className="group">
                  <a
                    href="https://hnanhphatsocialblog.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                  >
                    <span>See Live</span>
                  </a>
                  <a
                    href="https://github.com/hnanhphat/social_client"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn--white"
                  >
                    <span>Github</span>
                  </a>
                </div>
              </div>
            </li>
            <li>
              <div className="img">
                <img src={rune} alt="Rune House" />
              </div>
              <div className="info">
                <h3 className="tit">Rune House</h3>
                <p>
                  This is an e-commerce website that allows users to order
                  products for sale and read news from the authors on this
                  website, in addition, users can also make an appointment to
                  receive information. psychological counseling or interview to
                  become a counselor.
                  <br />
                  React, Redux-Thunk, NodeJs, ExpressJs, MongoDB.
                </p>
                <div className="group">
                  <a
                    href="https://hnanhphatecommerce.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                  >
                    <span>See Live</span>
                  </a>
                  <a
                    href="https://github.com/hnanhphat/ecommerce_fe"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn--white"
                  >
                    <span>Github</span>
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section id="contact" className="contact">
        <ul className="contact__info">
          <li>
            <h3>Email Address</h3>
            <a href="mailto:hnanhphat@gmail.com">hnanhphat@gmail.com</a>
          </li>
          <li>
            <h3>Phone Number</h3>
            <a href="tel:0909745634">(+84)909745634</a>
          </li>
        </ul>
        <h2 className="contact__bnr">Get in touch</h2>
      </section>
    </div>
  );
};

export default HomePage;
