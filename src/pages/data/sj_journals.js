import React, { useState } from "react";
import { Line, HorizontalBar } from "react-chartjs-2";
import { Row, Col } from "react-bootstrap";
import _ from "lodash";
import Legend from "../../components/legend";
import Doughnut from "../../components/doughnut-wrapper";
import Layout from "../../components/layout";

const data = {
  options: {
    journal_colors: [
      "#0F1F33",
      "#3A77C2",
      "#17877e",
      "#0f61db",
      "#4cc0d4",
      "#c90000",
    ],
  },

  number: {
    labels: [
      "Ethics",
      "Journal of Philosophy",
      "Mind",
      "Philosophical Review",
      "Philosophy & Public Affairs",
      "Total Men",
    ],
    totalPercent: {
      "1954-1955": 5,
      "1974-1975": 10,
      "1994-1995": 12,
      "2013-2015": 11,
    },
    values: {
      "1954-1955": [1, 12, 2, 2, null, 343],
      "1974-1975": [13, 11, 11, 1, 3, 353],
      "1994-1995": [13, 9, 4, 3, 3, 246],
      "2013-2015": [14, 12, 2, 2, 2, 256],
    },
  },

  journals: {
    labels: [
      "Ethics",
      "Journal of Philosophy",
      "Mind",
      "Philosophical Review",
      "Philosophy & Public Affairs",
    ],
    values: {
      "1954-1955": [2.6, 8.6, 2.3, 3.1, null],
      "1974-1975": [19.8, 10.5, 9.3, 3.1, 7.6],
      "1994-1995": [18.3, 13.9, 7.0, 10.8, 11.9],
      "2013-2015": [20.0, 18.6, 2.4, 6.7, 8.7],
    },
  },

  decades: {
    labels: ["1954-1955", "1974-1975", "1994-1995", "2013-2015"],
    values: {
      Ethics: [2.6, 19.8, 18.3, 20.0],
      "Journal of Philosophy": [8.6, 10.5, 13.9, 18.6],
      Mind: [2.3, 9.3, 7.0, 2.4],
      "Philosophical Review": [3.1, 3.1, 10.8, 6.7],
      "Philosophy & Public Affairs": [null, 7.6, 11.9, 8.7],
    },
  },
};

function constructDataSet() {
  const chartData = {
    labels: data.decades.labels,
    datasets: [],
  };

  let i = 0;
  Object.keys(data.decades.values).forEach((t) => {
    chartData.datasets.push({
      label: t,
      backgroundColor: data.options.journal_colors[i],
      borderColor: data.options.journal_colors[i],
      fill: false,
      data: data.decades.values[t],
    });
    i += 1;
  });

  return chartData;
}

function selectJournalDecade(decade) {
  const d = _.cloneDeep(data);
  return {
    labels: d.journals.labels,
    datasets: [
      {
        data: d.journals.values[decade],
        backgroundColor: d.options.journal_colors,
      },
    ],
  };
}

function selectPropDecade(decade) {
  const d = _.cloneDeep(data);
  return {
    legend: {
      labels: d.number.labels,
      colors: d.options.journal_colors,
    },
    text: `${d.number.totalPercent[decade]}%`,
    labels: d.number.labels,

    datasets: [
      {
        data: d.number.values[decade],
        backgroundColor: d.options.journal_colors,
      },
    ],
  };
}

export const Summary = {
  title: "Schwitzgebel and Jennings - Journals ",
  page: "sj_journals",
  summary: (
    <>
      In December 2014, Schwitzgebel and Jennings examined the names of all
      authors publishing articles, commentaries, or responses (but not book
      reviews, editorial remarks, or retrospectives), in four time periods:
      1954/1955, 1974/1975, 1994/1995, and 2014/2015.
    </>
  ),
  graph: (
    <>
      <HorizontalBar
        data={selectJournalDecade("2013-2015")}
        width={50}
        height={30}
        options={{
          maintainAspectRatio: true,
          legend: { display: false },
          scales: { xAxes: [{ ticks: { min: 0, max: 20 } }] },
        }}
      />
    </>
  ),
};

export default function Journals() {
  const [decade, setDecade] = useState("2013-2015");
  const [journalDecade, setJournalDecade] = useState(
    selectJournalDecade("2013-2015")
  );
  const [proportionDecade, setProportionDecade] = useState(
    selectPropDecade("2013-2015")
  );

  function updateYear(e) {
    const d = data.decades.labels[e.target.value];

    setDecade(d);
    setJournalDecade(selectJournalDecade(d));
    setProportionDecade(selectPropDecade(d));
  }

  return (
    <Layout>
      <h1>{Summary.title}</h1>
      <p>
        In December 2014, Schwitzgebel and Jennings examined the names of all
        authors publishing articles, commentaries, or responses (but not book
        reviews, editorial remarks, or retrospectives), in four time periods:
        1954/1955, 1974/1975, 1994/1995, and 2014/2015. (However, since not all
        2015 issues of Philosophical Review and Journal of Philosophy had been
        released at the time of data collection, they went back into late 2013
        for these two journals to have a full two-year sample.)
      </p>
      <Row>
        <Col md={6} sm={12}>
          <h3>Percent of Women Authorships {decade}</h3>
          <HorizontalBar
            data={journalDecade}
            width={50}
            height={30}
            options={{
              maintainAspectRatio: true,
              legend: { display: false },
              scales: { xAxes: [{ ticks: { min: 0, max: 50 } }] },
            }}
          />
        </Col>
        <Col md={6}>
          <h3>Ratio of Women Authorships {decade}</h3>

          <div style={{ maxWidth: "50%", margin: "auto" }}>
            <Doughnut data={proportionDecade} />
          </div>
          <Legend data={proportionDecade.legend} />
        </Col>
      </Row>
      <strong>Selected Years:</strong> {decade}
      <input
        className="slider"
        type="range"
        id="volume"
        name="volume"
        min="0"
        max="3"
        defaultValue={3}
        onChange={updateYear}
      />
      <br />
      <br />
      <h3>Percent of Women Authorships Over time</h3>
      <Line data={constructDataSet()} options={{ maintainAspectRatio: true }} />
      <br />
      <br />
      <h2>Methods</h2>
      <p>
        {" "}
        All articles in Ethics and Philosophy & Public Affairs were coded as
        “ethics.” Articles in the other three were coded as either “ethics” or
        “non-ethics” depending on article title or a brief skim of the article
        contents when the title was ambiguous. Gender was coded based on first
        name or personal knowledge, or in cases of uncertainty a brief web
        search for gender-identifying information such as a gender-typical photo
        or references to the person as “him” or “her” in discussions of that
        person’s work. In only 11 cases out of 1202 were we unable to make a
        determination. We treated non-first-authors in the same manner as first
        authors, but only 53 out of 1143 articles (5%) had more than one author.
      </p>
    </Layout>
  );
}
