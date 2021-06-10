import React from "react";
import Layout from "../../components/layout";
import DataSource from "../../components/datasource";
import { Summary as JstorSummary } from "./jstor";
import { Summary as FacultySummary } from "./faculty";
import { Summary as JournalSummary } from "./h_journal";

export default function Data() {
  return (
    <Layout>
      <DataSource source={FacultySummary} />
      <DataSource source={JstorSummary} />
      <DataSource source={JournalSummary} />
    </Layout>
  );
}
