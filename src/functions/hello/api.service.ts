import * as request from 'request';
import * as moment from 'moment';
import { TWITTER_MENTION_URL } from './constants';
import axios from 'axios';
import * as Twitter from 'twit';

export class ApiService {   

    static Twit = new Twitter({
        consumer_key:         'ybWJ7HrPvVL4ueVaEIG0YJEVd',
        consumer_secret:      'eVr46yZqpWAQKr1eyCnl0as8AonRHNIkteC2VctvLfqiJjr5Q2',
        access_token:         '1363154619350745095-xIwF9hNj4BOvQ76d3vmJTl2RNbRRCz',
        access_token_secret:  'b3SevfNGlPwfBjvTCFWiRQyFNXDl6ndNoQAcWOCIRBJ3T',
        timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
        strictSSL:            true,     // optional - requires SSL certificates to be valid.
    })

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

    public static async replyTweet(id, text) {
        return new Promise(async (resolve, reject) => {
            try {
                let sentiment = await this.sentiment(text);
                console.log(sentiment);
                let tweet: any = await this.Twit.get(`statuses/show/:id`, {id: id});
                let reply = await this.Twit.post('statuses/update', {in_reply_to_status_id: tweet.data.id_str, status: '@' + tweet.data.user.screen_name + ' Happy to see your review' });
                console.log(reply)
                resolve(reply);
            } catch(err) {
                reject(err);
            }
        })
    }
}