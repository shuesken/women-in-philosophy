import React from 'react'
import Layout from '../../components/layout'
import DataSource from '../../components/datasource'
import {Summary as JstorSummary} from './jstor'
import {Summary as FacultySummary} from './faculty'


export default function() {
    return <Layout>
        <DataSource source={FacultySummary} />
        <DataSource source={JstorSummary} />
    </Layout>
}
