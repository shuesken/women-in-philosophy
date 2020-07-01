import Layout from "../../components/layout";
import Doughnut from "../../components/doughnut-wrapper"
import Legend from "../../components/legend"
import React, { useState } from "react";
import {HorizontalBar} from "react-chartjs-2";
import {Row, Col, ButtonGroup, ToggleButton} from 'react-bootstrap'

import '../../components/datasource.css'

const data = {
    options: {
        all:        { color: "#3182bd", label: "All" },
        original:   { color: "#9ecae1", label: "Original" },
        discussion: { color: "#deebf7", label: "Discussion"},
    },

    pie: {
        labels: ["Original (Women)", "Discussion (Women)", "Original (Men)", "Discussion (Men)"],
        colors: ["#9ecae1","#deebf7","#e19e9e","#f7dede"],
        values:{
            2004:[107,41,577,298],
            2014:[179,88,1013,361],
            2015:[158,97,873,432]
        },
        totalPercent: {
            2004: 14,
            2014: 16,
            2015: 16
        }

    },
    journals: {
        labels: ['American Philosophical Quarterly', 'Analysis', 'Australasian Journal of Philosophy', 'British Journal for the History of Philosophy', 'British Journal for the Philosophy of Science', 'Canadian Journal of Philosophy', 'Erkenntnis', 'Ethics', 'European Journal of Philosophy', 'Journal of Philosophical Logic', 'Journal of Philosophy', 'Journal of the History of Philosophy', 'Mind', 'Mind & Language', 'Nous', 'Pacific Philosophical Quarterly', 'Philosophers Imprint', 'Philosophical Quarterly', 'Philosophical Review', 'Philosophical Studies', 'Philosophy & Phenomenological Research', 'Philosophy & Public Affairs', 'Philosophy of Science', 'Proceedings of the Aristotelian Society', 'Synthese'],

        values: {
            all: {
                2004: [11.5, 18.2, 16.2, 33.3, 6.7, 11.6, 14.6, 11.5, 22.2, 6.9, 20.0, 16.7, 13.6, 15.4, 10.0, 14.8, 0.0, 13.9, 7.7, 11.2, 11.4, 11.1, 20.9, 18.2, 10.9],
                2014: [9.1, 20.3, 17.6, 16.3, 20.0, 17.1, 14.6, 21.7, 23.3, 7.7, 14.7, 31.0, 4.8, 20.0, 17.5, 22.9, 13.5, 5.6, 0.0, 19.9, 11.1, 8.3, 18.2, 33.3, 15.5],
                2015: [16.7, 15.2, 14.3, 25.9, 1.9, 34.2, 14.4, 25.0, 19.4, 4.7, 25.0, 17.9, 0.0, 25.8, 16.7, 15.6, 16.2, 9.5, 15.4, 14.8, 22.5, 9.1, 19.6, 29.4, 12.4],
            },

            original: {
                2004: [11.5, 18.2, 19.6, 35.5, 8.1, 4.5, 14.6, 16.7, 23.1, 6.9, 28.6, 17.6, 6.2, 17.2, 11.1, 15.0, 0.0, 25.0, 10.0, 29.4, 8.7, 11.1, 16.1, 21.1, 13.2],
                2014: [4.2, 13.0, 17.8, 17.1, 20.0, 9.5, 11.4, 38.5, 23.3, 7.7, 17.2, 30.8, 10.0, 20.6, 17.5, 22.9, 13.5, 6.5, 0.0, 16.1, 4.9, 8.3, 13.5, 33.3, 15.7],
                2015: [16.7, 8.9, 16.7, 25.8, 1.9, 25.0, 12.2, 13.6, 20.0, 6.5, 21.1, 17.4, 0.0, 25.8, 16.7, 15.6, 16.2, 11.1, 15.4, 15.5, 18.4, 9.1, 19.6, 31.2, 10.9],
            },
            discussion: {
                2004: [0.0, 0.0, 9.1, 20.0, 0.0, 19.0, 0.0, 7.1, 20.0, 0.0, 0.0, 0.0, 33.3, 10.0, 0.0, 14.3, 0.0, 8.3, 0.0, 6.3, 14.3, 0.0, 23.3, 0.0, 6.1],
                2014: [22.2, 32.1, 16.7, 14.3, 0.0, 28.6, 16.8, 15.2, 0.0, 0.0, 0.0, 33.3, 0.0, 16.7, 0.0, 0.0, 0.0, 0.0, 0.0, 34.0, 24.1, 0.0, 23.4, 0.0, 14.8],
                2015: [0.0, 23.5, 0.0, 25.9, 0.0, 44.4, 18.9, 28.8, 0.0, 0.0, 33.3, 20.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 13.6, 29.0, 0.0, 20.0, 0.0, 12.8],
            }
        }

    },

}

function selectJournalDecade(decade, type, sorting) {

    var jointArray = []
    var i = 0
    data.journals.labels.forEach( s =>{
        jointArray.push({'label': s, 'value': data.journals.values[type][decade][i]});
        i++;
    })

    const sortedData = {
        labels: [],
        datasets: [{data: [],backgroundColor: data.options[type].color}]
    }

    jointArray.sort((a, b) => (a[sorting] - b[sorting]) ).forEach( s =>{
        sortedData.labels.push(s.label)
        sortedData.datasets[0].data.push(s.value)
    })

    return  sortedData
}


function selectTypeDecade(decade) {
    return  {
        legend:{
            labels: data.pie.labels,
            colors: data.pie.colors
        },
        text: data.pie.totalPercent[decade]+"%",
        labels: data.pie.labels,
        datasets: [{ data: data.pie.values[decade], backgroundColor: data.pie.colors,}]
    }
}

export const Summary = {
    title: "Hassoun - Journals 2004, 2014, 2015 ",
    page: "h_journal",
    summary: <>
        Data on the representation of women who publish in 25 top philosophy journals as ranked by the Philosophical Gourmet Report (2015) for the years 2004, 2014, and 2015.
    </>,
    graph: <Doughnut data={selectTypeDecade(2015)}/>

}


export default function(props) {
    const [decade, setDecade] = useState(2015);
    const [type, setType] = useState("all");
    const [sort, setSort] = useState('label');
    const [journalDecade, setJournalDecade] = useState(selectJournalDecade(2015, "all", "label"));
    const [typeDecade, setTypeDecade] = useState(selectTypeDecade(2015));

    function updateSelection(e){
        var d = decade
        var t = type
        var s = sort

        if ( e.target.name === "decade") {
            d = [2004, 2014, 2015][e.target.value]
            setDecade(d)
        }
        else if ( e.target.name === "type") {
            t = e.target.value
            setType(e.target.value)
        }
        else if ( e.target.name === "sort") {
            s = e.target.value
            setSort(e.target.value)
        }

        setJournalDecade(selectJournalDecade(d,t,s))
        setTypeDecade(selectTypeDecade(d))
    }



    return <Layout>
        <h1>{Summary.title}</h1>
        <p>Data on the representation of women who publish in 25 top philosophy journals as ranked by the Philosophical Gourmet Report (2015) for the years 2004, 2014, and 2015.  In all years and for all journals, the percentage of female authors was extremely low, in the range of 14–16%. The percentage of women authors is less than the percentage of women faculty in different ranks and at different kinds of institutions. In addition, there is great variation across individual journals, and the discrepancy between women authors and women faculty appears to be different in different subfields. Interestingly, journals which do not practice anonymous review seem to have a higher percentage of women authors than journals which practice double anonymous or triple anonymous review. This paper also argues that we need more data on academic publishing to better understand whether this can explain why there are so few full-time female faculty in philosophy, since full-time hiring and tenuring practices presumably depend on a candidate’s academic publishing.</p>

        <Row>
            <Col md={6} sm={12}>
                <h3>Percent of Women Authorships {decade} <br/> by Journal ({data.options[type].label})</h3>

                <Row>
                    <Col sm={6}  className="controls">
                        <ButtonGroup toggle >
                            <ToggleButton key={1}  type="radio" variant="secondary" name="type" value="all" checked={type === "all" } onChange={updateSelection}>All</ToggleButton>
                            <ToggleButton key={2}  type="radio" variant="secondary" name="type" value="original" checked={type === "original" } onChange={updateSelection}>Original</ToggleButton>
                            <ToggleButton key={3}  type="radio" variant="secondary" name="type" value="discussion" checked={type === "discussion" } onChange={updateSelection}>Discussion</ToggleButton>
                        </ButtonGroup>
                    </Col>
                    <Col sm={6}  className="controls"  style={{textAlign: "right"}}>
                        <ButtonGroup toggle>
                            <ToggleButton key={1}  type="radio" variant="primary" name="sort" value="label" checked={sort === "label" } onChange={updateSelection}>Alphabetical</ToggleButton>
                            <ToggleButton key={2}  type="radio" variant="primary" name="sort" value="value" checked={sort === "value" } onChange={updateSelection}>Proportion</ToggleButton>
                        </ButtonGroup>
                    </Col>
                </Row>

                <HorizontalBar
                    data={journalDecade}
                    width={50}
                    height={60}
                    options={{
                        maintainAspectRatio: true,
                        legend: {display: false,},
                        scales: {xAxes: [{ticks: {min: 0, max: 50}}]}
                    }}
                />
            </Col>
            <Col  md={6}>
                <h3>Ratio of Authorships in {decade}</h3>

                <div  style={{"maxWidth": "60%", "margin":"auto"}}>
                    <Doughnut
                        data={typeDecade}
                        options={{maintainAspectRatio: true,}}
                    />
                </div>
                <Legend data={typeDecade.legend} />
            </Col>
        </Row>

        <strong>Selected Year:</strong> {decade}
        <input className="slider" type="range" id="decade" name="decade" min="0" max="2" defaultValue={2} onChange={updateSelection}/>


        <br/><br/>

        <h2>Methods</h2>
        <p>For each of the authors in the data set, the author’s gender was inferred based on (1) their name, (2) their photograph or the pronouns used to describe them on university or personal websites, and/or (3) the author's self-report when contacted by the researchers. In cases where significant uncertainty remained after consulting (1), the researchers sought out (2). When significant uncertainty remained after consulting (1) and seeking out (2), the researchers attempted to contact the author. In cases of significant uncertainty where the author could not be contacted, the author was excluded from the data set. Also excluded were individuals who informed the researchers that they identify as neither men nor women. Finally, where there was a known discrepancy between (i) an author’s gender identity at the time a paper was accepted for publication, and (ii) the author’s gender identity at later point in time, our data reflects the former.</p>

        <p>Inferring gender based on name or appearance will not be accurate in every case. We expect only that our classifications are accurate often enough to give a representative picture of the proportion of authors in philosophy journals who are women. We excluded authors whose gender we were not able to determine from the dataset. Authors who believe they may have been misclassified are encouraged to contact the researchers.</p>

            <p>Other contributions besides (what we call) “normal articles” were reported separately and this included discussion pieces, symposia, articles in special or supplemental issues, literature reviews, and critical notices (but not book reviews, introductions to issues, or editorials, which were not recorded at all). We classified these issues separately because they are likely to differ from normal, full-length research articles in being invited contributions and/or involving different standards of peer review.</p>

                <p>Journal-specific notes: (1) We did not include the very short articles marked as “critical notices” in Philosophy and Phenomenological Research, as they did not conform to our understanding of the category; namely, articles which are longer (and typically more substantive) than book reviews. (2) The last three articles in Erkenntnis volume 79, issue 5 supplement were classified as normal (not supplemental or special issue) articles, as that issue states that “The First Six Articles Belong to [a] Special Issue” — so apparently the last three do not. Contrariwise, the first set of articles in each of issues 5 and 6 (not supplemental issues) were classified as not being normal articles, as each issue had a subset of articles constituting a special issue. (3) At the last time data was collected (March 2016), Journal of Philosophy had not yet released issues 10-12 for 2015, and Journal of Philosophical Logic had not yet released issue 6.</p>

                    <p>Our methodology is largely in agreement with Schwitzgebel's and Jennings'. To examine temporal trends in visibility at the highest levels of prestige, they examined authorship rates over time in five elite journals. Three of the journals were Philosophical Review, Mind, andJournal of Philosophy, sometimes referred to as the “big three” general philosophy journals. All three have been regarded as leading journals since at least the early 20th century, and they tend to top informal polls of journal prestige, such as polls on the Leiter Reports blog, sometimes alongside relative newcomer Noûs (e.g. Leiter 2013, 2015). Since these journals publish proportionately less in ethics than in other areas of philosophy, they also included two elite ethics journals, Ethics andPhilosophy & Public Affairs, which tend to top polls of ethics journals (e.g. Bradley 2005, Leiter 2009), although Philosophy & Public Affairshas only been publishing since 1972.</p>


    </Layout>
}
