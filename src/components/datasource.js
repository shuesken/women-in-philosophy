import React from 'react'
import {Link } from "gatsby"
import './datasource.css'
import { Doughnut } from 'react-chartjs-2';
import {Row, Col} from 'react-bootstrap'


const source = {
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

export default (props) => (
    <div className="data-source">

        <Row>
            <Col xs={12} md={6} lg={8} ><h2>{props.title}</h2><div className="description">{props.children}</div></Col>
        <Col xs={12} md={6} lg={4}><Doughnut
            data={source.data}
            width={50}
            height={50}
            options={source.options}
        /></Col>
        </Row>
    </div>
)
