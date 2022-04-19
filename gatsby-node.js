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
const opts = { version: 'v4', auth: API_KEY}
const sheets = google.sheets(opts)
const range = 'A1:E3'
const spreadsheetId = '13oFdIWmcFNunNyy1tXQvgkrpNhkcRMJ7yIw3irvmtjE'


exports.sourceNodes = async ({
    actions: { createNode },
    createContentDigest,
    createNodeId
}) => {
    const response = await sheets.spreadsheets.values.get({spreadsheetId, range})
    const values = response.data.values
    if (values.length <= 1) throw Error('no content in spreadsheet')
    values.shift() // remove header row

    const objs = values.map(row => ({
        name: row[1],
        dept: row[3],
        limits: row[4] ?? ''
    }))

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