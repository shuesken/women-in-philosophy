import Layout from "../../components/layout";
import React, { useState, setState } from "react";
import {Doughnut, Line, Bar, HorizontalBar} from "react-chartjs-2";
import {Row, Col, Table} from 'react-bootstrap'


const data = {

}



export const Summary = {
    title: "Journal Data ",
    page: "journal",
    summary: <>

        </>,
    graph: <></>

}


export default function(props) {


    return <Layout>
        <h1>{Summary.title}</h1>
        <p>This data is from the JSTOR network dataset, with a special focus on philosophy journals. We isolate our
            analysis to a part of the corpus we call the “network dataset.” This subset includes 1.8 million
            documents that either cited other JSTOR articles or were cited by other JSTOR articles.</p>

            <br/><br/>

        <h2>Methods</h2>
        <p>For each of the authors in the data set, the author’s gender was inferred based on (1) their name, (2) their photograph or the pronouns used to describe them on university or personal websites, and/or (3) the author's self-report when contacted by the researchers. In cases where significant uncertainty remained after consulting (1), the researchers sought out (2). When significant uncertainty remained after consulting (1) and seeking out (2), the researchers attempted to contact the author. In cases of significant uncertainty where the author could not be contacted, the author was excluded from the data set. Also excluded were individuals who informed the researchers that they identify as neither men nor women. Finally, where there was a known discrepancy between (i) an author’s gender identity at the time a paper was accepted for publication, and (ii) the author’s gender identity at later point in time, our data reflects the former.</p>

        <p>Inferring gender based on name or appearance will not be accurate in every case. We expect only that our classifications are accurate often enough to give a representative picture of the proportion of authors in philosophy journals who are women. We excluded authors whose gender we were not able to determine from the dataset. Authors who believe they may have been misclassified are encouraged to contact the researchers.</p>

            <p>Other contributions besides (what we call) “normal articles” were reported separately and this included discussion pieces, symposia, articles in special or supplemental issues, literature reviews, and critical notices (but not book reviews, introductions to issues, or editorials, which were not recorded at all). We classified these issues separately because they are likely to differ from normal, full-length research articles in being invited contributions and/or involving different standards of peer review.</p>

                <p>Journal-specific notes: (1) We did not include the very short articles marked as “critical notices” in Philosophy and Phenomenological Research, as they did not conform to our understanding of the category; namely, articles which are longer (and typically more substantive) than book reviews. (2) The last three articles in Erkenntnis volume 79, issue 5 supplement were classified as normal (not supplemental or special issue) articles, as that issue states that “The First Six Articles Belong to [a] Special Issue” — so apparently the last three do not. Contrariwise, the first set of articles in each of issues 5 and 6 (not supplemental issues) were classified as not being normal articles, as each issue had a subset of articles constituting a special issue. (3) At the last time data was collected (March 2016), Journal of Philosophy had not yet released issues 10-12 for 2015, and Journal of Philosophical Logic had not yet released issue 6.</p>

                    <p>Our methodology is largely in agreement with Schwitzgebel's and Jennings'. To examine temporal trends in visibility at the highest levels of prestige, they examined authorship rates over time in five elite journals. Three of the journals were Philosophical Review, Mind, andJournal of Philosophy, sometimes referred to as the “big three” general philosophy journals. All three have been regarded as leading journals since at least the early 20th century, and they tend to top informal polls of journal prestige, such as polls on the Leiter Reports blog, sometimes alongside relative newcomer Noûs (e.g. Leiter 2013, 2015). Since these journals publish proportionately less in ethics than in other areas of philosophy, they also included two elite ethics journals, Ethics andPhilosophy & Public Affairs, which tend to top polls of ethics journals (e.g. Bradley 2005, Leiter 2009), although Philosophy & Public Affairshas only been publishing since 1972.</p>

                        <p>In December 2014, Schwitzgebel and Jennings examined the names of all authors publishing articles, commentaries, or responses (but not book reviews, editorial remarks, or retrospectives), in four time periods: 1954/1955, 1974/1975, 1994/1995, and 2014/2015. (However, since not all 2015 issues of Philosophical Review and Journal of Philosophy had been released at the time of data collection, they went back into late 2013 for these two journals to have a full two-year sample.) All articles in Ethics and Philosophy & Public Affairs were coded as “ethics.” Articles in the other three were coded as either “ethics” or “non-ethics” depending on article title or a brief skim of the article contents when the title was ambiguous. Gender was coded based on first name or personal knowledge, or in cases of uncertainty a brief web search for gender-identifying information such as a gender-typical photo or references to the person as “him” or “her” in discussions of that person’s work. In only 11 cases out of 1202 were we unable to make a determination. We treated non-first-authors in the same manner as first authors, but only 53 out of 1143 articles (5%) had more than one author.</p>
    </Layout>
}
