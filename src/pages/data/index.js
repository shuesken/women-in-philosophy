import React from 'react'
import Layout from '../../components/layout'
import DataSource from '../../components/datasource'
import {Summary as JstorSummary} from './jstor'
import {Summary as FacultySummary} from './faculty'
import {Summary as JournalSummary} from './journal'
import {Summary as SJSummary} from './sj_journals'

export default function() {
    return <Layout>
        <DataSource source={FacultySummary} />
        <DataSource source={JournalSummary} />
        <DataSource source={JstorSummary} />
        <DataSource source={SJSummary} />
    </Layout>
}
