/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
})


const { google } = require('googleapis')
const API_KEY = process.env.GOOGLE_API_KEY
const opts = { version: 'v4', auth: API_KEY }
const sheets = google.sheets(opts)
const range = 'A:E'
const spreadsheetId = '1q1PPp1JiyVJTflTSq3G_xDh2mWlqrGyuitMi_V29slE'


exports.sourceNodes = async ({
    actions: { createNode },
    createContentDigest,
    createNodeId
}) => {
    const response = await sheets.spreadsheets.values.get({ spreadsheetId, range })
    const values = response.data.values
    if (values.length <= 1) throw Error('no content in spreadsheet')
    values.shift() // remove header row

    const objs = []

    values.forEach(row => {

        const obj = {}

        switch (row[1]) {
            case "Department":
                obj.entity = "department"
                break;
            case "Journal":
                obj.entity = "journal"
                break;
            case "Learned Society":
                obj.entity = "society"
                break;
            case "Project Leader":
                obj.entity = "leader"
                break;
            default:
                throw Error("unknown entity type: " + row[1])
        }

        if (!row[2]) throw Error("no name given")
        obj.name = row[2]

        obj.link = row[3] ?? ''

        obj.exceptions = row[4] ?? ''

        objs.push(obj)
    })

    const nodes = objs.map((obj, i) => ({
        id: createNodeId(i),
        parent: null,
        children: [],
        internal: {
            type: `Signatory`,
            contentDigest: createContentDigest(obj),
        },
        ...obj
    }))

    nodes.forEach(async node => {
        console.log('creating node ' + node.name)
        const ret = await createNode(node)
    })
}