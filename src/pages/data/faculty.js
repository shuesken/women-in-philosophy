import Layout from "../../components/layout";
import React, { useState, setState } from "react";
import {Doughnut, Line, Bar, HorizontalBar} from "react-chartjs-2";
import {Row, Col, Table} from 'react-bootstrap'


const data = {

}



export const Summary = {
    title: "Faculty Data ",
    page: "faculty",
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
        <p>Each of the schools (for Hassoun, 2015 data) was triple checked and checked at least one time by a graduate student. If there are discrepancies, we believe they may reflect faculty additions and subtractions since the time of our survey. Regretfully, not every change can be kept up with since the time of the survey. Regardless, the numbers here provided an accurate picture of the gender divisions within the field of philosophy. Please note some of the particulars of our data collection below.</p>

        <p>Some outlier faculty positions were research faculty and teaching faculty. The department was contacted directly to confirm how to categorize things. Sometimes research faculty were assistant, associate, or full professor, sometimes not. Some non tenure-track research professors were in a special case put under lecturer to reflect their non-tenure track status. Some teaching faculty were placed under lecturer, some under assistant, associate, or full professor. Another issue came down to titles like part-time lecturer. These were confirmed to be either a regular lecturer position that is more stable than an adjunct position, or simply an adjunct position that is more contingent.</p>

        <p>We did not count affiliated professors as philosophy professors, although we did count joint professors as professors, e.g. Professor of Philosophy and Psychology would count, but a Professor of Psychology affiliated with the Philosophy department would not count. The important consideration was whether or not they are listed along with everyone else as a faculty member in Philosophy and are not simply affiliated with the department. This is in agreement with Julie C. Van Camp based on the premise that joint faculty members usually have full decision making power within the department and serve as most other faculty do despite their teaching in other departments. The same logic applied to a philosophy professor also listed as a high level administrator like a Dean; they were counted along with the faculty. Likewise, the reason for separating out lecturers and adjuncts from tenure track professors was their exclusion from department governance.</p>

            <p>Post-docs and graduate assistants were not counted. Nor were visiting scholars. If there was a faculty member who was listed as being a head of some research organization, or if the title was not clearly one of our categories, we individually confirmed their title. Retired faculty were not counted as emeritus faculty unless explicitly listed as such.</p>

                <p>Finally, while we acknowledge the presence of transgender, queer, and non-traditional gendered philosophers within the field of philosophy, we have classified individuals by gender based on the name being either traditionally male or female. In the case of gender ambiguous names, we made our decision based on the self-reporting gender of the philosopher or by the gender of the pronouns used to describe the person. We welcome responses from faculty who think their gender may have been misrepresented in our data.</p>

                    <p>Our methodology is largely in agreement with the methodology of the other rankings from past years by Sally Haslinger and Julie C. Van Camp. Sally Haslinger counted as “full time professor” those who are on tenure track (assistant, associate, full) and may have counted those who are adjuncts or lecturers as well as some affiliated professors as full time. We all refer to assistant, associate and full professors as “tenure track”. Finally, we follow Julie C. Van Camp in using pronouns and other common indicators of gender to determine gender, and also in following up individually to clarify ambiguous names.</p>
    </Layout>
}
