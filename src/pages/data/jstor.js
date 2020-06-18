import Layout from "../../components/layout";
import React from "react";
import DataSource from "../../components/datasource";
import {Doughnut, HorizontalBar} from "react-chartjs-2";
import {Row, Col} from 'react-bootstrap'


const data = {
    decades: {
        1900: {"name":"Proportion Female","index":["Mind","The Philosophical Review","Classical Philology","Harvard Law Review","Proceedings of the Aristotelian Society","The Monist"],"data":[11.9,10.7,0.0,0.0,0.0,0.0]} ,
        1910: {"name":"Proportion Female","index":["Mind","The Philosophical Review","Proceedings of the Aristotelian Society","Isis","Classical Philology","Harvard Law Review","The Monist"],"data":[12.5,7.8,7.7,5.9,5.8,0.8,0.0]} ,
        1920: {"name":"Proportion Female","index":["Proceedings of the Aristotelian Society","Mind","Classical Philology","Isis","The Philosophical Review","The Journal of Philosophy","Harvard Law Review","The Monist"],"data":[33.3,14.8,11.3,9.6,8.7,6.7,0.4,0.0]} ,
        1930: {"name":"Proportion Female","index":["Philosophy","Analysis","Classical Philology","Proceedings of the Aristotelian Society","Mind","Isis","The Philosophical Review","The Journal of Philosophy","Philosophy of Science","Harvard Law Review","Ethics","The Journal of Symbolic Logic","The Monist","The Review of Politics"],"data":[16.7,14.3,14.0,12.5,12.0,11.2,8.1,1.7,1.0,0.7,0.0,0.0,0.0,0.0]} ,
        1940: {"name":"Proportion Female","index":["Philosophy","Classical Philology","Isis","The Journal of Aesthetics and Art Criticism","Analysis","Journal of the History of Ideas","The Review of Politics","Mind","The Philosophical Review","The Journal of Symbolic Logic","The Journal of Philosophy","Philosophy and Phenomenological Research","Ethics","Philosophy of Science","Harvard Law Review","Proceedings of the Aristotelian Society","Synthese","The Review of Metaphysics"],"data":[33.3,17.5,16.2,12.9,12.5,10.5,7.3,6.3,5.7,4.0,4.0,2.8,2.0,1.1,0.7,0.0,0.0,0.0]} ,
        1950: {"name":"Proportion Female","index":["Studia Logica: An International Journal for Symbolic Logic","Proceedings of the Aristotelian Society","Phronesis","Philosophy","Isis","The British Journal for the Philosophy of Science","The Review of Politics","The Journal of Philosophy","Journal of the History of Ideas","The Journal of Aesthetics and Art Criticism","Classical Philology","Philosophical Studies: An International Journal for Philosophy in the Analytic Tradition","Mind","The Philosophical Review","Analysis","Philosophy of Science","The Journal of Symbolic Logic","The Review of Metaphysics","The Philosophical Quarterly","Ethics","Philosophy and Phenomenological Research","Harvard Law Review","Philosophy East and West","Synthese"],"data":[40.0,25.0,18.2,17.5,10.7,10.0,9.7,9.4,8.1,7.8,6.1,5.7,5.3,5.0,5.0,4.6,4.1,3.0,2.6,2.3,1.8,0.9,0.0,0.0]} ,
        1960: {"name":"Proportion Female","index":["Inquiry","Transactions of the Charles S. Peirce Society","The Journal of Aesthetics and Art Criticism","The British Journal for the Philosophy of Science","Religious Studies","The Philosophical Quarterly","Journal of the History of Ideas","Synthese","Classical Philology","The Journal of Philosophy","Mind","Proceedings of the Aristotelian Society","Philosophy","Isis","The Review of Metaphysics","Phronesis","The Journal of Symbolic Logic","Philosophical Studies: An International Journal for Philosophy in the Analytic Tradition","Philosophy of Science","Philosophy and Phenomenological Research","American Philosophical Quarterly","The Philosophical Review","Ethics","Analysis","Philosophy East and West","Harvard Law Review","No\u00fbs","The Monist","The Review of Politics","Polity","Studia Logica: An International Journal for Symbolic Logic","Apeiron: A Journal for Ancient Philosophy and Science"],"data":[27.6,20.0,12.9,11.6,11.1,10.2,9.7,9.5,8.9,7.1,6.8,6.7,6.7,6.3,5.8,4.7,4.6,4.2,3.9,3.6,3.5,3.2,3.2,2.5,2.1,2.1,1.5,1.5,0.8,0.0,0.0,0.0]} ,
        1970: {"name":"Proportion Female","index":["Feminist Studies","Journal of Medical Ethics","Proceedings of the Aristotelian Society","Linguistics and Philosophy","Phronesis","Philosophy","Classical Philology","Inquiry","Critical Inquiry","Journal of the History of Ideas","The Journal of Aesthetics and Art Criticism","Political Theory","The Philosophical Quarterly","The Review of Metaphysics","Ethics","The Philosophical Review","Mind","Philosophy & Public Affairs","American Philosophical Quarterly","The Review of Politics","Studia Logica: An International Journal for Symbolic Logic","Canadian Journal of Philosophy","The Journal of Symbolic Logic","Philosophy East and West","Isis","The Journal of Philosophy","The Monist","Analysis","Philosophy of Science","Erkenntnis (1975-)","Synthese","No\u00fbs","Polity","Philosophical Studies: An International Journal for Philosophy in the Analytic Tradition","Philosophy and Phenomenological Research","The British Journal for the Philosophy of Science","Journal of Philosophical Logic","Transactions of the Charles S. Peirce Society","Harvard Law Review","The Journal of Religious Ethics","Religious Studies","International Journal for Philosophy of Religion","Apeiron: A Journal for Ancient Philosophy and Science"],"data":[89.8,23.1,21.4,19.4,18.9,17.4,15.5,13.6,13.3,13.1,12.7,12.5,10.7,10.6,10.4,9.8,9.2,8.3,8.1,7.9,7.8,7.6,7.5,7.4,7.1,6.7,6.6,6.2,6.1,5.9,5.5,5.5,5.4,5.1,4.9,4.8,4.4,2.9,1.3,0.0,0.0,0.0,0.0]} ,
        1980: {"name":"Proportion Female","index":["Feminist Studies","Hypatia","The Journal of Speculative Philosophy","Inquiry","Linguistics and Philosophy","Critical Inquiry","Public Affairs Quarterly","Apeiron: A Journal for Ancient Philosophy and Science","Phronesis","Philosophy","Political Theory","Isis","The Journal of Aesthetics and Art Criticism","Ethics","Philosophy & Public Affairs","The Journal of Philosophy","The Review of Metaphysics","Journal of the History of Ideas","The Philosophical Review","Polity","Proceedings of the Aristotelian Society","Business & Professional Ethics Journal","Classical Philology","Law and Philosophy","Religious Studies","Canadian Journal of Philosophy","Journal of Medical Ethics","Philosophical Studies: An International Journal for Philosophy in the Analytic Tradition","Philosophy and Phenomenological Research","Harvard Law Review","The Monist","The Journal of Religious Ethics","Philosophy East and West","The Philosophical Quarterly","The Journal of Symbolic Logic","Philosophical Perspectives","Studia Logica: An International Journal for Symbolic Logic","American Philosophical Quarterly","Philosophy of Science","Erkenntnis (1975-)","No\u00fbs","Mind","The Review of Politics","Analysis","Synthese","Transactions of the Charles S. Peirce Society","The British Journal for the Philosophy of Science","Journal of Philosophical Logic","International Journal for Philosophy of Religion"],"data":[94.5,87.3,30.0,26.4,23.7,22.9,22.9,20.7,19.5,18.9,16.9,16.0,15.7,15.3,15.2,14.9,14.9,14.1,13.5,12.9,12.9,12.8,12.6,12.2,12.1,11.5,11.0,10.8,10.2,10.2,10.1,9.8,9.6,9.3,9.2,8.3,8.2,8.2,8.0,7.5,7.5,7.1,6.8,6.5,6.4,5.0,4.9,2.8,1.5]} ,
        1990: {"name":"Proportion Female","index":["Feminist Studies","Hypatia","Inquiry","Critical Inquiry","Political Theory","Journal of Medical Ethics","Isis","Classical Philology","Apeiron: A Journal for Ancient Philosophy and Science","The Journal of Ethics","Ethics","Transactions of the Charles S. Peirce Society","Harvard Law Review","Ethical Theory and Moral Practice","Polity","The Journal of Speculative Philosophy","The Journal of Aesthetics and Art Criticism","Journal of the History of Ideas","Phronesis","Linguistics and Philosophy","The Journal of Religious Ethics","Business & Professional Ethics Journal","Law and Philosophy","Public Affairs Quarterly","Proceedings of the Aristotelian Society","Business Ethics Quarterly","Philosophical Perspectives","The Journal of Philosophy","The Philosophical Review","American Philosophical Quarterly","Philosophy and Phenomenological Research","Philosophical Studies: An International Journal for Philosophy in the Analytic Tradition","Canadian Journal of Philosophy","Philosophy of Science","Philosophy & Public Affairs","Synthese","Philosophy","Philosophy East and West","The Monist","The Journal of Symbolic Logic","No\u00fbs","The Review of Metaphysics","The Review of Politics","The Philosophical Quarterly","Mind","Erkenntnis (1975-)","Analysis","Studia Logica: An International Journal for Symbolic Logic","Religious Studies","The British Journal for the Philosophy of Science","The Bulletin of Symbolic Logic","International Journal for Philosophy of Religion","Philosophical Issues","Journal of Philosophical Logic","Journal of Nietzsche Studies"],"data":[94.2,87.2,34.4,32.6,26.7,25.9,25.7,25.5,23.3,22.9,21.8,21.7,20.7,20.0,19.3,19.0,18.3,17.9,17.5,17.0,15.9,15.6,15.5,15.2,15.2,14.5,14.5,14.3,14.2,13.7,12.9,12.4,12.2,12.1,12.1,11.9,11.1,11.0,10.7,10.2,10.1,9.9,9.1,8.9,8.7,8.1,6.9,6.7,6.2,6.2,5.7,4.0,3.7,3.2,0.0]} ,
        2000: {"name":"Proportion Female","index":["Feminist Studies","Hypatia","Journal of Medical Ethics","Isis","Inquiry","Critical Inquiry","Business & Professional Ethics Journal","Political Theory","Journal of the History of Ideas","Classical Philology","Journal of Nietzsche Studies","The Journal of Aesthetics and Art Criticism","Linguistics and Philosophy","Polity","Ethical Theory and Moral Practice","Proceedings of the Aristotelian Society","Business Ethics Quarterly","Transactions of the Charles S. Peirce Society","Apeiron: A Journal for Ancient Philosophy and Science","The Journal of Speculative Philosophy","Law and Philosophy","Phronesis","The Review of Metaphysics","Ethics","American Philosophical Quarterly","Philosophy of Science","Philosophy & Public Affairs","Harvard Law Review","The Monist","Philosophical Studies: An International Journal for Philosophy in the Analytic Tradition","The Philosophical Review","The Journal of Religious Ethics","Public Affairs Quarterly","The Journal of Symbolic Logic","Philosophy and Phenomenological Research","The Journal of Philosophy","The Journal of Ethics","Philosophy","The Philosophical Quarterly","No\u00fbs","Studia Logica: An International Journal for Symbolic Logic","The Pluralist","Synthese","Analysis","The Review of Politics","Philosophy East and West","Erkenntnis (1975-)","Canadian Journal of Philosophy","Journal of Philosophical Logic","The British Journal for the Philosophy of Science","The Bulletin of Symbolic Logic","Mind","International Journal for Philosophy of Religion","Religious Studies"],"data":[92.8,86.2,39.1,35.8,35.0,29.2,28.9,27.7,25.1,24.8,23.5,23.3,22.4,22.2,22.0,21.5,21.4,20.5,20.0,19.0,18.9,18.2,18.2,17.2,16.5,16.3,16.0,16.0,15.4,14.8,14.5,14.2,14.0,13.7,13.6,13.3,13.1,12.8,12.4,12.1,11.6,11.5,11.3,10.4,10.4,10.3,10.3,10.3,8.9,8.9,8.3,8.2,7.3,3.0]} ,


    }
}
const chart_pie = {
    data: {
        labels: ['Men', 'Women'],
        datasets: [{
            backgroundColor: ['rgb(0, 99, 132)', 'rgb(255, 99, 132)'],
            borderColor: '#333',
            data: [80, 20]
        }]
    },
    options: {
        maintainAspectRatio: true,
        rotation: 0,
        title: {
            display: true,
            fontSize: 20,
            text: 'Custom  Title',

        }
    }
}

const chart_bar = {
    data: {
        labels: data.decades["2000"].index,
        datasets: [{
            backgroundColor: 'rgb(0, 99, 132)',
            borderColor: '#333',
            data: data.decades["2000"].data
        }]
    },
    options: {
        maintainAspectRatio: true,
        rotation: 0,
        title: {
            display: true,
            fontSize: 20,
            text: 'Proportion of Women',

        }
    }
}

export const Summary = {
    title: "JTOR Data 1900-2009",
    page: "jstor",
    summary: <>
        <p>This data is from the JSTOR network dataset, with a special focus on philosophy journals. We isolate our
            analysis to a part of the corpus we call the “network dataset.” This subset includes 1.8 million
            documents that either cited other JSTOR articles or were cited by other JSTOR articles.</p>
        <p> We examine the numbers and proportions of women authorships in philosophy journals for historical data
            collected from the JSTOR network dataset dating between 1900 and 2009. We define “authorships” as
            author-paper pairs, where multiple authors may co-author the same paper. </p>
        </>,
    graph: <Doughnut
        data={chart_pie.data}
        width={50}
        height={50}
        options={chart_pie.options}
    />

}


export default function(props) {
    return <Layout>
        <h1>{Summary.title}</h1>
        <p>This data is from the JSTOR network dataset, with a special focus on philosophy journals. We isolate our
            analysis to a part of the corpus we call the “network dataset.” This subset includes 1.8 million
            documents that either cited other JSTOR articles or were cited by other JSTOR articles.</p>

        <Row>
            <Col md={6} sm={12}>
                <HorizontalBar
                    data={chart_bar.data}
                    width={50}
                    height={100}
                    options={chart_bar.options}
                />
            </Col>
        </Row>

        <h2>Methods</h2>
        <p>We examine the numbers and proportions of women authorships in philosophy journals for historical data collected from the JSTOR network dataset dating between 1900 and 2009. We define “authorships” as author-paper pairs, where multiple authors may co-author the same paper. We use authorships because our dataset, like most large-scale bibliographic datasets, does not contain a fully disambiguated set of unique authors.  Because some examined articles are authored by more than one person, the number of women authors is somewhat greater than the number of unique articles with women authors.</p>

        <p>The analysis was further narrowed to 1.5 million documents where author gender was identifiable. In this study we distinguish authors by binary gender based on name. To determine the gender of authors, we used the top 1000 lists of gendered names, produced by the United States Social Security Administration to categorize authors by first name. We recognize that this may not reflect the self-identified gender of the individual. This decision was made due to the historical nature of this work, where getting self-identified gender is not possible, and to allow comparison to other works published on historical data. We are sensitive that this binary proscriptive division does not fully encompass the diversity in the discipline, and we are looking at ways of incorporating self-identified gender in future work.</p>

        <p>Authorship data was discarded when the author was listed by initials only, when the first name was common to both genders, and where the name was not on the lists. This may introduce a small bias in terms of undercounting women authors given that they may be more likely to rely on initials, but this accounted for only about 4% of articles, and we estimate that we undercount women authors by roughly 0.64%.</p>

        <p>For the current study, we selected journals from the JSTOR network dataset. The initial list of journals was selected by taking the intersection of lists of philosophy journals from the following sources: Thom Brooks (2011); Leiter Journal Ranking Survey (2015); BPA-APA Survey (2014); Andrew Cullison (2015); Brian Weatherson (2015). We identified 56 journals using this method. The data comprises 47,597 article entries for which we have author gender, with a corresponding 52,865 authorships. Out of these 7,304 are women authorships, and the remaining 45,561 authorships are men.</p>

            <p>In our set of authorships, the same individual may author multiple articles. By assuming that a unique first name and last name pair define a unique author in our data, our authorship data corresponds to 19,660 unique authors (3,789 women and 15,871 men). Each article may be authored by multiple individuals. In our data 3,899 (8%) of articles have more than one author, out of which 173 have multiple all women authors, 2,683 have all men authors, and 1,043 have mixed gender authors.  In our data, unique women authors publish an average of 1.9 papers while men authors publish an average of 2.8 papers.</p>

                <p>We grouped journals into three mutually exclusive categories. “Top-Philosophy” journals comprise 18 of the 21 highly ranked philosophy journals listed in a recent survey of faculty perceptions of journal quality reported by Leiter (2013).  We consider 18 of the 21 Leiter ranked journals because only data for these journals were available from JSTOR. The subset comprises 23,204 article entries, with 2,265 total women authorships. Then, we visited individual journal websites and emailed journal editors as needed to establish two additional journal category categories. “Non-Top Philosophy” journals comprise 22 philosophy journals, which self-identify as philosophy-specific journals. The subset comprises 8,341 article entries, with 1,953 total women authorships. “Interdisciplinary” journals comprise 16 journals self-identifying as interdisciplinary journals with philosophical content. The subset comprises 15,409 article entries, with 2,519 total women authorships. We classified all journals in our dataset by sub-disciplines included and review type (see Appendix B and C for details).</p>

                    <p>In our analysis, unless otherwise stated we use journal-year pair as the grouping for the data. On each journal-year pair we calculate the total proportion of women authorships as defined by the number of women authorships over the total authorships. We provide descriptive statistics of our data, and when possible model the data using generalized linear models (GLMs) to compare between variables. General linear models are a broad class of models, which can be used on data, such as ours, that do not have a normal distribution. As the data better conforms to a negative binomial distribution, in all cases we used this distribution family for generating the model. Note that negative binomial distributions are usually used for count data. When calculating proportions, we use an offset as the log of the number of authors. The statistics of this are outside of the scope of the paper, however, as a result, we can compute the proportions and not just the count of authorships.</p>

                        <p>In our analysis, we compare the proportions of women authorships in philosophy journals to the proportions of women philosophy faculty in two ways. First, we compare the proportions of women authorships, grouped by journal category, to the proportions of women philosophy faculty.</p>
    </Layout>
}
