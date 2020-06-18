import React from 'react'
import Layout from '../../components/layout'
import DataSource from '../../components/datasource'
import {Summary as JstorSummary} from './jstor'


export default function() {
    return <Layout>
        <DataSource source={JstorSummary} />
    </Layout>
}
