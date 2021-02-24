import 'source-map-support/register';
import { middyfy } from '@libs/lambda';
import {ApiService } from './api.service';
import { formatJSONResponse } from '@libs/apiGateway';

const hello = async (event) => {
  return new Promise(async(resolve, reject) => {
    try {
      let promises = [];
      const response: any = await ApiService.mentionTweets();
      if(response.meta.result_count > 0 ) {
        (response.data as Array<any>).map((mention) => {
          console.log(mention);
          promises.push(ApiService.replyTweet(mention.id, mention.text)) 
        });
        let res = await Promise.all(promises);
        resolve(formatJSONResponse({
          message: `Reply Tweet`,
          res
        }));
      } else {
        resolve(0);
      }
    } catch(err) {
      console.log(err);
      reject(err);
    }
  });
}

export const main = middyfy(hello);
