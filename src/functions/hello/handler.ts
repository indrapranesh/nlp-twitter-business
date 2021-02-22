import 'source-map-support/register';
import { middyfy } from '@libs/lambda';
import {ApiService } from './api.service';

const hello = async (event) => {
  const oauth = {
    consumer_key:'D3qxbEl6JrLdKig0UJCUG0wgu',
    consumer_secret:'sWYnldFMu195OVJUFWjqIQDCAHGjrLYP50QXHsuY7b4pjA4JRK',
    token:'1363154619350745095-HCfeCdXzkdQgyI6JLHmHilg8m5v4o6',
    token_secret:'d48dkX2wC2onnCqMxemp35VPvfhfPMlaG1voxMMt9bKCr'
  }
  return new Promise(async(resolve, reject) => {
    try {
      const response: any = await ApiService.mentionTweets();
      if(response.meta.result_count > 0 ) {
        console.log(response.data[0])
        let sentiment: any = await ApiService.sentiment(response.data[0].text);
        console.log(sentiment);
        resolve(sentiment.data.sentiment.negativity)
      } else {
        resolve(0);
      }
    } catch(err) {
      reject(err);
    }
  });

  // return formatJSONResponse({
  //   message: `Hello ${event.body.name}, welcome to the exciting Serverless world!`,
  //   event,
  // });
}

export const main = middyfy(hello);
