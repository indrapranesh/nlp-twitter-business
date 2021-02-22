import * as request from 'request';
import * as moment from 'moment';
import { TWITTER_MENTION_URL } from './constants';
import axios from 'axios';
import { map } from 'lodash';

export class ApiService {
    public static async mentionTweets() {
        return new Promise(async (resolve, reject) => {
            try {
                const oauth = {
                    consumer_key:'cGnKg70lXayGCIxXHtRD5j108',
                    consumer_secret:'PIQRXEOALjiO0yiXs87Gp0HnPXWT2s2M4LOQ3cWbyKlFR7UNUm',
                    token:'1363154619350745095-ntOCNKtJFEuNe3HG5oZYUFNa9xrwsn',
                    token_secret:'HyKeAe0jJsZGJrvTNuZy5GoiR3JmKVzUwOVpR9tEcNGU9'
                }
                //const token = 'AAAAAAAAAAAAAAAAAAAAAD%2FSMwEAAAAA0la7ldlAtzZeipq258RvoVz5YR4%3Dn1pLq7XZMLxuUY5sDSJRmfYo6CLPlQ9U3fPPPA58fA4wx8ByWY'
                let date = new Date()
                let paramTime = moment(date).subtract(5, 'm').toISOString();
                console.log(paramTime);
      
                request.get(`${TWITTER_MENTION_URL}?start_time=${paramTime}`, {
                    headers: {
                        Authorization: `Bearer AAAAAAAAAAAAAAAAAAAAAD%2FSMwEAAAAA0la7ldlAtzZeipq258RvoVz5YR4%3Dn1pLq7XZMLxuUY5sDSJRmfYo6CLPlQ9U3fPPPA58fA4wx8ByWY`
                    }
                  },
                  function(err, res, body) {
                      console.log(body);
                      resolve(JSON.parse(body));
                  })
            } catch(err) {
                reject(err);
            }
        });    
    }
    public static async expertAuth() {
        return new Promise(async(resolve, reject) => {
            try {
                let token = await axios.post('https://developer.expert.ai/oauth2/token', {
                    username: 'indrapranesh2111@gmail.com',
                    password: 'helloworlD@1'
                });
                resolve(token.data);
            } catch(err) {
                reject(err);
            }
        });
    }

    public static async sentiment(text) {
        return new Promise(async (resolve, reject) => {
            try {
                const token: any = await ApiService.expertAuth();
                let sentiment = await axios.post('https://nlapi.expert.ai/v2/analyze/standard/en/sentiment', {
                    document: {
                        text: text
                    }
                }, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                resolve(sentiment.data);
            } catch(err) {
                reject(err);
            }
        })
    }
}