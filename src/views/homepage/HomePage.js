import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import background2 from "../../assets/images/carousel/carousel33.jpg";
import background from "../../assets/images/carousel/bg4.png";
import background3 from "../../assets/images/carousel/carousel22.png";

import "./HomePage.css";
import FilterBar from "../../components/filterbar/FilterBar";
import PopularEvent from "../../components/popularEvent/PopularEvent";
import CategoryCard from "../../components/categoryCard/CategoryCard";

import NightLifeSvg from "../../components/svgLoader/NightLifeSvg";
import ConcertsSvg from "../../components/svgLoader/ConcertsSvg";
import ConferencesSvg from "../../components/svgLoader/ConferencesSvg";
import PartiesSvg from "../../components/svgLoader/PartiesSvg";
import SportsSvg from "../../components/svgLoader/SportsSvg";
import TravelSvg from "../../components/svgLoader/TravelSvg";
import advertbanner from "../../assets/images/ladiesbanner.png";
import Card from "../../components/card/Card";
import InfluencerCard from "../../components/influencerCard/InfluencerCard";
import HashTag from "../../components/hashTag/HashTag";
import { useDispatch, useSelector } from "react-redux";
import { fetchEvents } from "./homePage.action";
const HomePage = (props) => {
  const svgFill = "#f8535361";

  const events = useSelector((state) => state.allEvents.events);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);

  if (!events) {
    return <h3>Loading</h3>;
  }

  return (
    <section className="homepage-container">
      <Navbar />
      <section className="homepage-section">
        <div className="homepage-carousel">
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="about-container">
              <div>
                <h5>Create</h5>
                <p>
                  Your event with your larger audience privately or publicly
                </p>
              </div>
              <div>
                <h5>Invite</h5>
                <p>
                  your guest and get notified when they accepted the invitation
                </p>
              </div>
              <div>
                <h5>Share</h5>
                <p>
                  Your next event from the comfort of your mobile device in an
                  instant
                </p>
              </div>
            </div>

            <ol className="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                className="active"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="1"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="2"
              ></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  className="d-block w-100"
                  src={background}
                  alt="First slide"
                />
                <PopularEvent
                  eventTitle="Tiwa Savage: Savage 3.0 Concert"
                  eventDescription="There is a new version of Savage; Click here to Upgrade"
                  eventCategory="Concert"
                  eventLocation="Paris, France"
                  eventDate="April 3rd, 2020"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src={background2}
                  alt="Second slide"
                />
                <PopularEvent
                  eventTitle="Grammy's Award"
                  eventDescription="Oldest Music Award of all time"
                  eventCategory="Concert"
                  eventLocation="San Francisco, CA"
                  eventDate="June 3rd, 2020"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src={background3}
                  alt="Third slide"
                />
                <PopularEvent
                  eventTitle="Headies"
                  eventDescription="Africa's Pride"
                  eventCategory="Concert"
                  eventLocation="Lagos, Nigeria"
                  eventDate="August 3rd, 2020"
                />
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
        <section className="homepage-search">
          <FilterBar />
        </section>
        <section className="popular-categories-section mt-3">
          <div className="section-header-text">
            <h4>Popular Categories</h4>
            <p>Select any of the category below to display the featured</p>
          </div>
          <div className="popular-categories-container">
            <div className="single-category-card">
              <CategoryCard
                categoryTitle="Night Life"
                categoryCount={20}
                showCount={true}
              >
                <NightLifeSvg fill={svgFill} />
              </CategoryCard>
            </div>
            <div className="single-category-card">
              <CategoryCard
                categoryTitle="Concerts"
                categoryCount={16}
                showCount={true}
              >
                <ConcertsSvg fill={svgFill} />
              </CategoryCard>
            </div>
            <div className="single-category-card">
              <CategoryCard
                categoryTitle="Conferences"
                categoryCount={26}
                showCount={true}
              >
                <ConferencesSvg fill={svgFill} />
              </CategoryCard>
            </div>

            <div className="single-category-card">
              <CategoryCard
                categoryTitle="Parties"
                categoryCount={30}
                showCount={true}
              >
                <PartiesSvg fill={svgFill} />
              </CategoryCard>
            </div>

            <div className="single-category-card">
              <CategoryCard
                categoryTitle="Sports"
                categoryCount={18}
                showCount={true}
              >
                <SportsSvg fill={svgFill} />
              </CategoryCard>
            </div>
            <div className="single-category-card">
              <CategoryCard
                categoryTitle="Travel"
                categoryCount={22}
                showCount={true}
              >
                <TravelSvg fill={svgFill} />
              </CategoryCard>
            </div>
          </div>
        </section>
        <section className="upcoming-events mt-3">
          <div className="section-header-text">
            <h4>Upcoming Events</h4>
            <p>Select any of the category below to display the featured</p>
          </div>
          <div>
            <div className="row upcoming-event-cards">
              {events.map((event) => (
                <Card
                  name={event.name}
                  startDate={event.startDate}
                  location={event.location}
                />
              ))}
            </div>
          </div>
        </section>
        <section className="advert-section">
          <div>
            <img src={advertbanner} alt="advert" className="advert-image" />
          </div>
        </section>
        <section className="most-blooving-section mt-3">
          <div className="section-header-text">
            <h4>Most Blooving Places</h4>
            <p>Cities with the most iBloov events</p>
          </div>
          <div className="row blooving-places-card-container">
            <InfluencerCard
              customClassName=" mb-2 place-card  "
              placesCard={true}
              cardTitle="East Yolanda"
              events="900"
            />
            <InfluencerCard
              customClassName="mb-2 place-card  "
              placesCard={true}
              cardTitle="East Kano"
              events="900"
            />
            <InfluencerCard
              customClassName=" mb-2 place-card  "
              placesCard={true}
              cardTitle="New York"
              events="900"
            />
            <InfluencerCard
              customClassName="mb-2 place-card  "
              placesCard={true}
              cardTitle="Paris"
              events="900"
            />
            <InfluencerCard
              customClassName=" mb-2 place-card  "
              placesCard={true}
              cardTitle="London"
              events="900"
            />
            <InfluencerCard
              customClassName=" mb-2 place-card  "
              placesCard={true}
              cardTitle="Madrid"
              events="900"
            />
            <InfluencerCard
              customClassName=" mb-2 place-card  "
              placesCard={true}
              cardTitle="Barcelona"
              events="900"
            />
            <InfluencerCard
              customClassName=" mb-2 place-card  "
              placesCard={true}
              cardTitle="London"
              events="900"
            />
            <InfluencerCard
              customClassName=" mb-2 place-card  "
              placesCard={true}
              cardTitle="Madrid"
              events="900"
            />
            <InfluencerCard
              customClassName=" mb-2 place-card  "
              placesCard={true}
              cardTitle="Barcelona"
              events="900"
            />
          </div>
        </section>
        <section className="mt-3 bloobing-influencers-section">
          <div className="section-header-text">
            <h4>Most Blooving Influencers</h4>
            <p>Your most favorite influencers</p>
          </div>
          <div className="row influencers-card-container">
            <InfluencerCard
              customClassName="influencer-card most-influencer-image"
              cardTitle="Damilola Adekoya"
              userName="dharmykoya"
              followers="750000"
              events="1890"
            />
            <InfluencerCard
              customClassName="influencer-card most-influencer-image"
              cardTitle="Hamza"
              userName="hamza"
              followers="750000"
              events="1890"
            />
            <InfluencerCard
              customClassName="influencer-card most-influencer-image"
              cardTitle="Afolabi"
              userName="afo"
              followers="750000"
              events="1890"
            />
            <InfluencerCard
              customClassName="influencer-card most-influencer-image"
              cardTitle="Sandra"
              userName="sandra"
              followers="750000"
              events="1890"
            />
            <InfluencerCard
              customClassName="influencer-card most-influencer-image"
              cardTitle="Lewis Hamilton"
              userName="hamilton"
              followers="750000"
              events="1890"
            />
            <InfluencerCard
              customClassName="influencer-card most-influencer-image"
              cardTitle="Ronaldo Hamilton"
              userName="CR7"
              followers="750000"
              events="1890"
            />
            <InfluencerCard
              customClassName="influencer-card most-influencer-image"
              cardTitle="Sandra"
              userName="sandra"
              followers="750000"
              events="1890"
            />
            <InfluencerCard
              customClassName="influencer-card most-influencer-image"
              cardTitle="Lewis Hamilton"
              userName="hamilton"
              followers="750000"
              events="1890"
            />
            <InfluencerCard
              customClassName="influencer-card most-influencer-image"
              cardTitle="Ronaldo Hamilton"
              userName="CR7"
              followers="750000"
              events="1890"
            />
            <InfluencerCard
              customClassName="influencer-card most-influencer-image"
              cardTitle="Sandra"
              userName="sandra"
              followers="750000"
              events="1890"
            />
            <InfluencerCard
              customClassName="influencer-card most-influencer-image"
              cardTitle="Lewis Hamilton"
              userName="hamilton"
              followers="750000"
              events="1890"
            />
            <InfluencerCard
              customClassName="influencer-card most-influencer-image"
              cardTitle="Ronaldo Hamilton"
              userName="CR7"
              followers="750000"
              events="1890"
            />
          </div>
        </section>
        <section className="mt-3 mb-2 hashtag-section">
          <div className="section-header-text">
            <h4>Most Blooving Hashtags</h4>
            <p>The event hashtags that are making the rave</p>
          </div>
          <div className="row hashtag-card-container">
            <HashTag tagValue="TiwaLiveOnStage" />
            <HashTag tagValue="grammyNight" />
            <HashTag tagValue="covidConcert" />
            <HashTag tagValue="BirthdayParty" />
            <HashTag tagValue="Headies" />
            <HashTag tagValue="Wizkid" />
            <HashTag tagValue="DrakeAlbumLaunch" />
            <HashTag tagValue="Beyonce" />
            <HashTag tagValue="BirthdayParty" />
            <HashTag tagValue="Headies" />
            <HashTag tagValue="Wizkid" />
            <HashTag tagValue="DrakeAlbumLaunch" />
            <HashTag tagValue="Beyonce" />
          </div>
        </section>
      </section>
      <Footer />
    </section>
  );
};

HomePage.propTypes = {};

export default HomePage;
