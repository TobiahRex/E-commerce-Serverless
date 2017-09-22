import React from 'react';
import { intlShape, injectIntl } from 'react-intl';
import { WebflowJs, WebflowAnimations } from './assets/utils/index';
import {
  HdrPage,
  BreadCrumb,
} from './components';
import './assets/styles';

class VapeNews extends React.Component {
  constructor(props) {
    super(props);

    const {
      intl: {
        messages: {
          'vapenews.breadCrumb.paths1': bcPaths1,
          'vapenews.breadCrumb.lastCrumb': lastCrumb,
          'vapenews.header.title': header,
        },
      },
    } = props;

    this.intl = {
      bcPaths1,
      lastCrumb,
      header,
    };
  }

  componentDidUpdate() {
    WebflowJs();
    WebflowAnimations();
  }

  render() {
    return (
      <div className="vape-news">
        <BreadCrumb
          paths={[this.intl.bcPaths1]}
          classes={['home']}
          destination={['']}
          lastCrumb={this.intl.lastCrumb}
        />

        <HdrPage header={this.intl.header} />

        <div className="news-top-section">
          <a
            className="top-section w-inline-block"
            href="http://www.japantimes.co.jp/news/2016/08/31/national/japan-tobacco-playing-catchup-nation-takes-vaping-big-way/#.WW4eOsaQ3K0"
            rel="noopener noreferrer"
            target="_blank"
          >
            <div className="top-section__image-container">
              <img
                alt="article"
                className="image-container--img"
                data-ix="fade-down-2"
                sizes="(max-width: 767px) 100vw, (max-width: 991px) 768px, (max-width: 1021px) 100vw, 1021px"
                src="images/japan-1902834_1280-1021x580.jpg"
                srcSet="images/japan-1902834_1280-1021x580-p-500.jpeg 500w, images/japan-1902834_1280-1021x580-p-800.jpeg 800w, images/japan-1902834_1280-1021x580.jpg 1021w"
              />
            </div>
            <div className="top-section__header">
              <h1 className="header__text" data-ix="fade-down-3">
                Japan: The fear of secondhand&nbsp;smoke to propagate to heat-not-burn cigarettes
              </h1>
            </div>
            <div className="top-section__author-info" data-ix="fade-down-3">
              <div className="author-info__author-img--container">
                <img alt="article" className="container--img" src="images/P1100442-150x150.jpg" />
              </div>
              <div className="author-info__author-text--container">
                <p className="container--blurb">
                  By Jérôme Harlay
                </p>
              </div>
            </div>
          </a>
        </div>
        <div className="news-dual-articles">
          <div className="dual-articles__section-container">
            <a
              className="section-container__image-container w-inline-block"
              data-ix="fade-down-4"
              href="https://www.vapingpost.com/2016/08/30/japan-the-explosion-of-vaping-products-and-steady-decline-of-tobacco-cigarettes/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                alt="article"
                className="image-container--image"
                sizes="(max-width: 767px) 96vw, (max-width: 991px) 350px, 500px"
                src="images/japan-tobacco-harm-reduction-1021x580-p-800.jpeg"
                srcSet="images/japan-tobacco-harm-reduction-1021x580-p-800-p-500.jpeg 500w, images/japan-tobacco-harm-reduction-1021x580-p-800.jpeg 800w"
              />
            </a>
            <a
              className="section-container__header w-inline-block"
              data-ix="fade-down-5"
              href="https://www.vapingpost.com/2016/08/30/japan-the-explosion-of-vaping-products-and-steady-decline-of-tobacco-cigarettes/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <h2 className="header--text text--duo">
                Japan : steady decline of tobacco cigarettes
              </h2>
            </a>
            <div className="section-container__author" data-ix="fade-down-5">
              <div className="author__image-container">
                <img alt="article" className="top-section" src="images/IMG_7048-1-150x150.jpg" />
              </div>
              <div className="author__text-container" data-ix="fade-down-6">
                <p className="text-container--blurb">
                  By Diane Caruana
                </p>
              </div>
            </div>
          </div>
          <div className="dual-articles__section-container">
            <a
              className="section-container__image-container w-inline-block"
              data-ix="fade-down-4"
              href="https://www.vapingpost.com/2017/03/21/10-scientific-facts-about-vaping-a-vaper-should-know/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                alt="article"
                className="image-container--image"
                src="images/magnifying-glass-1607160_1920-p-500.jpeg"
              />
            </a>
            <a
              className="section-container__header w-inline-block"
              data-ix="fade-down-5"
              href="https://www.vapingpost.com/2017/03/21/10-scientific-facts-about-vaping-a-vaper-should-know/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <h2 className="header--text text--duo">
                10 scientific facts about vaping a vaper should know
              </h2>
            </a>
            <div className="section-container__author" data-ix="fade-down-5">
              <div className="author__image-container">
                <img alt="article" className="top-section" src="images/P1100442-150x150.jpg" />
              </div>
              <div className="author__text-container">
                <p className="text-container--blurb" data-ix="fade-down-6">
                  By Jérôme Harlay
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="news-feed">
          <div className="news-feed__article" data-ix="pop-in">
            <a
              className="article__image-container w-inline-block"
              href="http://www.japantimes.co.jp/news/2016/08/31/national/japan-tobacco-playing-catchup-nation-takes-vaping-big-way/#.WW4eOsaQ3K0"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                alt="article"
                className="image-container--feed-image"
                src="images/masonry2.png"
              />
            </a>
            <div className="article__blurb-container">
              <a
                className="blurb-container__header w-inline-block"
                href="http://www.japantimes.co.jp/news/2016/08/31/national/japan-tobacco-playing-catchup-nation-takes-vaping-big-way/#.WW4eOsaQ3K0"
                rel="noopener noreferrer"
                target="_blank"
              >
                <h2 className="header--text">
                  Japan Tobacco playing catchup as nation takes to vaping in big way
                </h2>
              </a>
              <a
                className="blurb-container__blurb w-inline-block"
                href="http://www.japantimes.co.jp/news/2016/08/31/national/japan-tobacco-playing-catchup-nation-takes-vaping-big-way/#.WW4eOsaQ3K0"
                rel="noopener noreferrer"
                target="_blank"
              >
                <p className="blurb--text">
                  Competition to sate Japanese nicotine addicts is heating up.
                </p>
              </a>
              <div className="blurb-container__author-info">
                <div className="author-info__author-img--container">
                  <img alt="article" className="container--img" src="images/P1100442-150x150.jpg" />
                </div>
                <div className="author-info__author-text--container">
                  <p className="text-container--blurb">
                    By Jérôme Harlay
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="news-feed__article" data-ix="pop-in">
            <a
              className="article__image-container w-inline-block"
              href="http://www.japantimes.co.jp/news/2017/03/03/business/philip-morris-japan-tobacco-open-vape-stores-nationwide/#.WYBDva2Q3K2"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                alt="article"
                className="image-container--feed-image"
                src="images/Masonry3.png"
              />
            </a>
            <div className="article__blurb-container">
              <a
                className="blurb-container__header w-inline-block"
                href="http://www.japantimes.co.jp/news/2017/03/03/business/philip-morris-japan-tobacco-open-vape-stores-nationwide/#.WYBDva2Q3K2"
                rel="noopener noreferrer"
                target="_blank"
              >
                <h2 className="header--text">
                  Philip Morris, Japan Tobacco to open more vape stores nationwide
                </h2>
              </a>
              <a
                className="blurb-container__blurb w-inline-block"
                href="http://www.japantimes.co.jp/news/2017/03/03/business/philip-morris-japan-tobacco-open-vape-stores-nationwide/#.WYBDva2Q3K2"
                rel="noopener noreferrer"
                target="_blank"
              >
                <p className="blurb--text">
                  Philip Morris Japan Ltd. said Thursday that it will open a store in Tokyo’s Ginza district on Friday to sell its smokeless tobacco device iQOS
                </p>
              </a>
              <div className="blurb-container__author-info">
                <div className="author-info__author-img--container">
                  <img
                    alt="article"
                    className="container--img"
                    src="images/595d050cdf246873326fcc1e_Screen-Shot-2017-07-03-at-15.08.41.png"
                  />
                </div>
                <div className="author-info__author-text--container">
                  <p className="text-container--blurb">
                    By Jiji Nakamura
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="news-feed__article" data-ix="pop-in">
            <a
              className="article__image-container w-inline-block"
              href="https://www.vapingpost.com/2017/04/28/more-data-confirms-that-vaping-is-a-safer-alternative-to-smoking/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                alt="article"
                className="image-container--feed-image"
                src="images/masonry8-150px.png"
              />
            </a>
            <div className="article__blurb-container">
              <a
                className="blurb-container__header w-inline-block"
                href="https://www.vapingpost.com/2017/04/28/more-data-confirms-that-vaping-is-a-safer-alternative-to-smoking/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <h2 className="header--text">
                  The New War Against Vaping Goes Against Science
                </h2>
              </a>
              <a
                className="blurb-container__blurb w-inline-block"
                href="https://www.vapingpost.com/2017/04/28/more-data-confirms-that-vaping-is-a-safer-alternative-to-smoking/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <p className="blurb--text">
                  Special interest groups are forcing personal beliefs against science, yet again.
                </p>
              </a>
              <div className="blurb-container__author-info">
                <div className="author-info__author-img--container">
                  <img
                    alt="article"
                    className="container--img"
                    src="images/164d5d493e2e59b4c01fac05c2aed910.jpeg"
                  />
                </div>
                <div className="author-info__author-text--container">
                  <p className="text-container--blurb">
                    By Jimmy Hafrey
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="news-feed__article" data-ix="pop-in">
            <a
              className="article__image-container w-inline-block"
              href="https://www.vapingpost.com/2017/04/28/more-data-confirms-that-vaping-is-a-safer-alternative-to-smoking/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                alt="article"
                className="image-container--feed-image"
                src="images/masonry5-150px.png"
              />
            </a>
            <div className="article__blurb-container">
              <a
                className="blurb-container__header w-inline-block"
                href="https://www.vapingpost.com/2017/04/28/more-data-confirms-that-vaping-is-a-safer-alternative-to-smoking/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <h2 className="header--text">
                  More data confirms that vaping is a safer alternative to smoking
                </h2>
              </a>
              <a
                className="blurb-container__blurb w-inline-block"
                href="https://www.vapingpost.com/2017/04/28/more-data-confirms-that-vaping-is-a-safer-alternative-to-smoking/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <p className="blurb--text">
                  A new study which found no evidence that vaping products may propagate cancer.
                </p>
              </a>
              <div className="blurb-container__author-info">
                <div className="author-info__author-img--container">
                  <img alt="article" className="container--img" src="images/P1100442-150x150.jpg" />
                </div>
                <div className="author-info__author-text--container">
                  <p className="text-container--blurb">
                    By Jérôme Harlay
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="news-feed__article" data-ix="pop-in">
            <a
              className="article__image-container w-inline-block"
              href="http://www.vapingpost.com/2017/07/18/pmi-ceo-talks-about-phasing-out-cigarettes-in-japan-s-korea/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                alt="article"
                className="image-container--feed-image"
                src="images/masonry1-150px.png"
              />
            </a>
            <div className="article__blurb-container">
              <a
                className="blurb-container__header w-inline-block"
                href="http://www.vapingpost.com/2017/07/18/pmi-ceo-talks-about-phasing-out-cigarettes-in-japan-s-korea/"
              >
                <h2 className="header--text">
                  Air Sampling confirms secondhand vapor is harmless
                </h2>
              </a>
              <a
                className="blurb-container__blurb w-inline-block"
                href="http://www.vapingpost.com/2017/07/18/pmi-ceo-talks-about-phasing-out-cigarettes-in-japan-s-korea/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <p className="blurb--text">
                  The CDPH has been carrying out air sampling in vape shops
                </p>
              </a>
              <div className="blurb-container__author-info">
                <div className="author-info__author-img--container">
                  <img
                    alt="article"
                    className="container--img"
                    src="images/IMG_7048-1-150x150.jpg"
                  />
                </div>
                <div className="author-info__author-text--container">
                  <p className="text-container--blurb">
                    By Diane Caruana
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="news-feed__article" data-ix="pop-in">
            <a
              className="article__image-container w-inline-block"
              href="http://www.vapingpost.com/2017/07/18/pmi-ceo-talks-about-phasing-out-cigarettes-in-japan-s-korea/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                alt="article"
                className="image-container--feed-image"
                src="images/masonry4-150px.png"
              />
            </a>
            <div className="article__blurb-container">
              <a
                className="blurb-container__header w-inline-block"
                href="http://www.vapingpost.com/2017/07/18/pmi-ceo-talks-about-phasing-out-cigarettes-in-japan-s-korea/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <h2 className="header--text">
                  PMI CEO talks about phasing out cigarettes in Japan & S. Korea
                </h2>
              </a>
              <a
                className="blurb-container__blurb w-inline-block"
                href="http://www.vapingpost.com/2017/07/18/pmi-ceo-talks-about-phasing-out-cigarettes-in-japan-s-korea/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <p className="blurb--text">
                  PMI’s&nbsp;iQOS device, is a smokeless alternative to combustible cigarettes
                </p>
              </a>
              <div className="blurb-container__author-info">
                <div className="author-info__author-img--container">
                  <img
                    alt="article"
                    className="container--img"
                    src="images/IMG_7048-1-150x150.jpg"
                  />
                </div>
                <div className="author-info__author-text--container">
                  <p className="text-container--blurb">
                    By Diane Caruana
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="news-feed__article" data-ix="pop-in">
            <a
              className="article__image-container w-inline-block"
              href="https://www.vapingpost.com/2017/07/10/study-from-spain-confirms-effectivity-of-e-cigarettes/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                alt="article"
                className="image-container--feed-image"
                src="images/masonry9-150px.png"
              />
            </a>
            <div className="article__blurb-container">
              <a
                className="blurb-container__header w-inline-block"
                href="https://www.vapingpost.com/2017/07/10/study-from-spain-confirms-effectivity-of-e-cigarettes/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <h2 className="header--text">
                  Study from Spain confirms effectivity of e-cigarettes
                </h2>
              </a>
              <a
                className="blurb-container__blurb w-inline-block"
                href="https://www.vapingpost.com/2017/07/10/study-from-spain-confirms-effectivity-of-e-cigarettes/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <p className="blurb--text">
                  Recent data obtained from a Spanish study indicates that e-cigarettes are excellent harm reduction tools for smoking cessation.
                </p>
              </a>
              <div className="blurb-container__author-info">
                <div className="author-info__author-img--container">
                  <img
                    alt="article"
                    className="container--img"
                    src="images/IMG_7048-1-150x150.jpg"
                  />
                </div>
                <div className="author-info__author-text--container">
                  <p className="text-container--blurb">
                    By Diane Caruana
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="news-feed__article" data-ix="pop-in">
            <a
              className="article__image-container w-inline-block"
              href="http://www.churnmag.com/news/penn-st-study-vaping-cigarettes/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                alt="article"
                className="image-container--feed-image"
                src="images/masonry10.2-150px.png"
              />
            </a>
            <div className="article__blurb-container">
              <a
                className="blurb-container__header w-inline-block"
                href="http://www.churnmag.com/news/penn-st-study-vaping-cigarettes/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <h2 className="header--text">
                  Shocking Penn State Study on Vaping and Cigarettes
                </h2>
              </a>
              <a
                className="blurb-container__blurb w-inline-block"
                href="http://www.churnmag.com/news/penn-st-study-vaping-cigarettes/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <p className="blurb--text">
                  A new study out shows that people who use vape devices are less addicted to vaping than traditional smokers.
                </p>
              </a>
              <div className="blurb-container__author-info">
                <div className="author-info__author-img--container">
                  <img
                    alt="article"
                    className="container--img"
                    src="images/164d5d493e2e59b4c01fac05c2aed910.jpeg"
                  />
                </div>
                <div className="author-info__author-text--container">
                  <p className="text-container--blurb">
                    By Jimmy Hafrey
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="news-feed__article" data-ix="pop-in">
            <a
              className="article__image-container w-inline-block"
              href="http://www.churnmag.com/news/new-study-shows-vaping-less-harmful/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                alt="article"
                className="image-container--feed-image"
                src="images/masonry11-150px.png"
              />
            </a>
            <div className="article__blurb-container">
              <a
                className="blurb-container__header w-inline-block"
                href="http://www.churnmag.com/news/new-study-shows-vaping-less-harmful/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <h2 className="header--text">
                  New Study Shows Vaping Less Harmful Again
                </h2>
              </a>
              <a
                className="blurb-container__blurb w-inline-block"
                href="http://www.churnmag.com/news/new-study-shows-vaping-less-harmful/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <p className="blurb--text">
                  A study done by a Big Tobacco company has proven yet again that vaping is less harmful than smoking traditional cigarettes.
                </p>
              </a>
              <div className="blurb-container__author-info">
                <div className="author-info__author-img--container">
                  <img
                    alt="article"
                    className="container--img"
                    src="images/164d5d493e2e59b4c01fac05c2aed910.jpeg"
                  />
                </div>
                <div className="author-info__author-text--container">
                  <p className="text-container--blurb">
                    By Jimmy Hafrey
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="news-feed__article" data-ix="pop-in">
            <a
              className="article__image-container w-inline-block"
              href="https://www.vapingpost.com/2016/06/05/3-facts-smokers-should-know-about-vaping/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                alt="article"
                className="image-container--feed-image"
                src="images/masonry7-150px.png"
              />
            </a>
            <div className="article__blurb-container">
              <a
                className="blurb-container__header w-inline-block"
                href="https://www.vapingpost.com/2016/06/05/3-facts-smokers-should-know-about-vaping/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <h2 className="header--text">
                  3 facts smokers should know about vaping
                </h2>
              </a>
              <a
                className="blurb-container__blurb w-inline-block"
                href="https://www.vapingpost.com/2016/06/05/3-facts-smokers-should-know-about-vaping/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <p className="blurb--text">
                  Just a few years ago electronic cigarettes were uncommon, hard to find and a mystery to most people. Now they’re everywhere – but, it turns out, they’re still a mystery to most people.
                </p>
              </a>
              <div className="blurb-container__author-info">
                <div className="author-info__author-img--container">
                  <img
                    alt="article"
                    className="container--img"
                    src="images/fergus-mason-vapingpost-journalist.jpg"
                  />
                </div>
                <div className="author-info__author-text--container">
                  <p className="text-container--blurb">
                    By Fergus Mason
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="news-feed__article" data-ix="pop-in">
            <a
              className="article__image-container w-inline-block"
              href="https://www.vapingpost.com/2017/07/16/michigan-us-smoking-on-decline-partly-thanks-to-e-cigs/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                alt="article"
                className="image-container--feed-image"
                src="images/masonry6-150px.png"
              />
            </a>
            <div className="article__blurb-container">
              <a
                className="blurb-container__header w-inline-block"
                href="https://www.vapingpost.com/2017/07/16/michigan-us-smoking-on-decline-partly-thanks-to-e-cigs/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <h2 className="header--text">
                  Michigan US : Smoking on decline partly thanks to e-cigs
                </h2>
              </a>
              <a
                className="blurb-container__blurb w-inline-block"
                href="https://www.vapingpost.com/2017/07/16/michigan-us-smoking-on-decline-partly-thanks-to-e-cigs/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <p className="blurb--text">
                  Both the number of smokers and the rates of lung cancer are on the decline, partly thanks to the advent of electronic cigarettes.
                </p>
              </a>
              <div className="blurb-container__author-info">
                <div className="author-info__author-img--container">
                  <img
                    alt="article"
                    className="container--img"
                    src="images/IMG_7048-1-150x150.jpg"
                  />
                </div>
                <div className="author-info__author-text--container">
                  <p className="text-container--blurb">
                    By Diane Caruana
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
VapeNews.propTypes = {
  intl: intlShape.isRequired,
};
const VapeNewsWithIntl = injectIntl(VapeNews);
export default VapeNewsWithIntl;
