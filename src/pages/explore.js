import React from 'react'
import Layout from '../components/layout'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { Bar } from 'react-chartjs-2';

const data =  {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
        label: 'My First dataset',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [0, 10, 5, 2, 20, 30, 45]
    }]
}

const IndexPage = () => (
    <Layout>
        <h1>What do you want to find out?</h1>
        <p></p>

        <Bar
            data={data}
            width={100}
            height={50}
            options={{ maintainAspectRatio: false }}
        />
    </Layout>
)

export default IndexPage
