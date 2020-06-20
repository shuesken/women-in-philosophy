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

    </Layout>
}
