import React from "react";
import { graphql, StaticQuery, Link } from "gatsby";
import Img from "gatsby-image";
import YouTube from "react-youtube";
import Layout from "../components/layout";

const opts = {
  height: "390",
  width: "640",
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 0,
  },
};

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      {
        bannerImage: file(relativePath: { eq: "womenbanner.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1100) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={(data) => (
      <>
        <Layout>
          <div className="banner">
            {" "}
            <Img fluid={data.bannerImage.childImageSharp.fluid} />{" "}
          </div>
          <h1>What do you want to find out?</h1>
          <p>
            It is well established that women are under-represented in
            philosophy at all levels. There is also some data on the
            under-representation of women in journals. However, further data is
            necessary to see more clearly what has gone wrong, how things have
            been changing over time, and to understand how women are represented
            within different journals, professorial types, and ranks at
            different kinds of departments.{" "}
          </p>
          <p>
            This site provides some new <Link to="data">data</Link> on disparities
            between the proportion of women and men in faculty hiring and
            publishing.
          </p>
          <p>
            We also provide some further <Link to="resources">Resources</Link> for
            those who want to make a difference for women in philosophy. For
            some summary information, see{" "}
            <a href="https://blog.apaonline.org/2018/03/26/tell-us-how-to-fix-the-lack-of-diversity-in-philosophy-journals/">
              this blog post
            </a>
            ,{" "}
            <a href="https://phys.org/news/2017-05-women-underrepresented-philosophy-journals-reveals.html">
              this headline
            </a>
            ,{" "}
            <a href="https://link.springer.com/article/10.1007/s11098-017-0919-0">
              this article
            </a>
            ,{" "}
            <a href="http://scienmag.com/new-website-uses-big-data-to-address-underrepresentation-of-women-in-philosophy/">
              the news
            </a>
            ,{" "}
            <a href="http://blog.apaonline.org/2016/11/15/can-data-help-us-improve-the-situation-for-women-in-philosophy/">
              this post
            </a>
            ,
            <a href="http://blog.apaonline.org/2017/05/25/how-to-improve-the-situation-for-women-in-philosophy/">
              {" "}
              this
            </a>
            ,{" "}
            <a href="https://blog.apaonline.org/2018/08/23/diversity-and-philosophy-journals-introduction/">
              this one
            </a>
            ,{" "}
            <a href="https://blog.apaonline.org/2018/08/30/diversity-and-philosophy-journals-how-to-avoid-conservative-gatekeeping/">
              this journal
            </a>
            ,{" "}
            <a href="https://blog.apaonline.org/2018/09/06/diversity-and-philosophy-journals-sophias-history-of-encouraging-diversity/">
              this contribution
            </a>
            ,{" "}
            <a href="https://blog.apaonline.org/2018/09/13/diversity-and-philosophy-journals-some-comments-on-diversity/">
              this comment
            </a>
            ,{" "}
            <a href="https://blog.apaonline.org/2018/09/20/diversity-and-philosophy-journals-reforming-philosophy/">
              this reform
            </a>
            ,{" "}
            <a href="https://blog.apaonline.org/2018/10/01/diversity-and-philosophy-journals-diverse-aims-at-mind/">
              this review
            </a>
            , and{" "}
            <a href="https://blog.apaonline.org/2018/10/04/diversity-and-philosophy-journals-practices-for-improving-diversity-in-philosophy-journal-publishing/">
              this practice
            </a>
            .
          </p>


          <div className="video">
            {" "}
            <YouTube videoId="zndDhO6Mo68" opts={opts} />{" "}
          </div>
        </Layout>
      </>
    )}
  />
);

export default IndexPage;
