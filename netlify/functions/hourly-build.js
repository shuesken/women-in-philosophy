import schedule from "@netlify/functions"
import fetch from "node-fetch";

const WEBHOOK_ID = process.env.WEBHOOK_BUILD_ID;
const API_ENDPOINT = "https://api.netlify.com/build_hooks/" + WEBHOOK_ID;

const handler = async function (event, context) {
    console.log("Received event:", event)

    return fetch(API_ENDPOINT, { method: 'POST' })
        .then(data => ({
            statusCode: 200,
        }))
        .catch(error => ({ statusCode: 422, body: String(error) }));
};

module.exports.handler = schedule("@hourly", handler);
