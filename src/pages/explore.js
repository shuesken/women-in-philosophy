import React from 'react'
import Layout from '../components/layout'

import DataSource from '../components/datasource'



const IndexPage = () => (
    <Layout>
        <DataSource title={"JTOR Data 1900-2010"}>This data is from the JSTOR network dataset, with a special focus on philosophy journals. The JSTOR database contains more than 8.3 million documents, with dates ranging between the 1500s and 2011, at the time of data collection. We isolate our analysis to a part of the corpus we call the “network dataset.” This subset includes 1.8 million documents that either cited other JSTOR articles or were cited by other JSTOR articles. Except where specified in the results below, the comparisons conducted in this study were planned beforehand. </DataSource>


    </Layout>
)

export default IndexPage
