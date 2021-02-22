/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/functions/hello/api.service.ts":
/*!********************************************!*\
  !*** ./src/functions/hello/api.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ApiService\": () => (/* binding */ ApiService)\n/* harmony export */ });\n/* harmony import */ var request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! request */ \"request\");\n/* harmony import */ var request__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(request__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ \"moment\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ \"./src/functions/hello/constants.ts\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nclass ApiService {\n    static async mentionTweets() {\n        return new Promise(async (resolve, reject) => {\n            try {\n                const oauth = {\n                    consumer_key: 'cGnKg70lXayGCIxXHtRD5j108',\n                    consumer_secret: 'PIQRXEOALjiO0yiXs87Gp0HnPXWT2s2M4LOQ3cWbyKlFR7UNUm',\n                    token: '1363154619350745095-ntOCNKtJFEuNe3HG5oZYUFNa9xrwsn',\n                    token_secret: 'HyKeAe0jJsZGJrvTNuZy5GoiR3JmKVzUwOVpR9tEcNGU9'\n                };\n                let date = new Date();\n                let paramTime = moment__WEBPACK_IMPORTED_MODULE_1__(date).subtract(5, 'm').toISOString();\n                console.log(paramTime);\n                request__WEBPACK_IMPORTED_MODULE_0__.get(`${_constants__WEBPACK_IMPORTED_MODULE_2__.TWITTER_MENTION_URL}?start_time=${paramTime}`, {\n                    headers: {\n                        Authorization: `Bearer AAAAAAAAAAAAAAAAAAAAAD%2FSMwEAAAAA0la7ldlAtzZeipq258RvoVz5YR4%3Dn1pLq7XZMLxuUY5sDSJRmfYo6CLPlQ9U3fPPPA58fA4wx8ByWY`\n                    }\n                }, function (err, res, body) {\n                    console.log(body);\n                    resolve(JSON.parse(body));\n                });\n            }\n            catch (err) {\n                reject(err);\n            }\n        });\n    }\n    static async expertAuth() {\n        return new Promise(async (resolve, reject) => {\n            try {\n                let token = await axios__WEBPACK_IMPORTED_MODULE_3___default().post('https://developer.expert.ai/oauth2/token', {\n                    username: 'indrapranesh2111@gmail.com',\n                    password: 'helloworlD@1'\n                });\n                resolve(token.data);\n            }\n            catch (err) {\n                reject(err);\n            }\n        });\n    }\n    static async sentiment(text) {\n        return new Promise(async (resolve, reject) => {\n            try {\n                const token = await ApiService.expertAuth();\n                let sentiment = await axios__WEBPACK_IMPORTED_MODULE_3___default().post('https://nlapi.expert.ai/v2/analyze/standard/en/sentiment', {\n                    document: {\n                        text: text\n                    }\n                }, {\n                    headers: {\n                        Authorization: `Bearer ${token}`\n                    }\n                });\n                resolve(sentiment.data);\n            }\n            catch (err) {\n                reject(err);\n            }\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZnVuY3Rpb25zL2hlbGxvL2FwaS5zZXJ2aWNlLnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhwZXJ0LWxhbWJkYS8uL3NyYy9mdW5jdGlvbnMvaGVsbG8vYXBpLnNlcnZpY2UudHM/NmJlMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByZXF1ZXN0IGZyb20gJ3JlcXVlc3QnO1xuaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgeyBUV0lUVEVSX01FTlRJT05fVVJMIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ2xvZGFzaCc7XG5cbmV4cG9ydCBjbGFzcyBBcGlTZXJ2aWNlIHtcbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIG1lbnRpb25Ud2VldHMoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG9hdXRoID0ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdW1lcl9rZXk6J2NHbktnNzBsWGF5R0NJeFhIdFJENWoxMDgnLFxuICAgICAgICAgICAgICAgICAgICBjb25zdW1lcl9zZWNyZXQ6J1BJUVJYRU9BTGppTzB5aVhzODdHcDBIblBYV1QyczJNNExPUTNjV2J5S2xGUjdVTlVtJyxcbiAgICAgICAgICAgICAgICAgICAgdG9rZW46JzEzNjMxNTQ2MTkzNTA3NDUwOTUtbnRPQ05LdEpGRXVOZTNIRzVvWllVRk5hOXhyd3NuJyxcbiAgICAgICAgICAgICAgICAgICAgdG9rZW5fc2VjcmV0OidIeUtlQWUwakpzWkdKcnZUTnVaeTVHb2lSM0ptS1Z6VXdPVnBSOXRFY05HVTknXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vY29uc3QgdG9rZW4gPSAnQUFBQUFBQUFBQUFBQUFBQUFBQUFBRCUyRlNNd0VBQUFBQTBsYTdsZGxBdHpaZWlwcTI1OFJ2b1Z6NVlSNCUzRG4xcExxN1haTUx4dVVZNXNEU0pSbWZZbzZDTFBsUTlVM2ZQUFBBNThmQTR3eDhCeVdZJ1xuICAgICAgICAgICAgICAgIGxldCBkYXRlID0gbmV3IERhdGUoKVxuICAgICAgICAgICAgICAgIGxldCBwYXJhbVRpbWUgPSBtb21lbnQoZGF0ZSkuc3VidHJhY3QoNSwgJ20nKS50b0lTT1N0cmluZygpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHBhcmFtVGltZSk7XG4gICAgICBcbiAgICAgICAgICAgICAgICByZXF1ZXN0LmdldChgJHtUV0lUVEVSX01FTlRJT05fVVJMfT9zdGFydF90aW1lPSR7cGFyYW1UaW1lfWAsIHtcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciBBQUFBQUFBQUFBQUFBQUFBQUFBQUFEJTJGU013RUFBQUFBMGxhN2xkbEF0elplaXBxMjU4UnZvVno1WVI0JTNEbjFwTHE3WFpNTHh1VVk1c0RTSlJtZllvNkNMUGxROVUzZlBQUEE1OGZBNHd4OEJ5V1lgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBmdW5jdGlvbihlcnIsIHJlcywgYm9keSkge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGJvZHkpO1xuICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoSlNPTi5wYXJzZShib2R5KSk7XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSBjYXRjaChlcnIpIHtcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7ICAgIFxuICAgIH1cbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIGV4cGVydEF1dGgoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyhyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgbGV0IHRva2VuID0gYXdhaXQgYXhpb3MucG9zdCgnaHR0cHM6Ly9kZXZlbG9wZXIuZXhwZXJ0LmFpL29hdXRoMi90b2tlbicsIHtcbiAgICAgICAgICAgICAgICAgICAgdXNlcm5hbWU6ICdpbmRyYXByYW5lc2gyMTExQGdtYWlsLmNvbScsXG4gICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkOiAnaGVsbG93b3JsREAxJ1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJlc29sdmUodG9rZW4uZGF0YSk7XG4gICAgICAgICAgICB9IGNhdGNoKGVycikge1xuICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIHNlbnRpbWVudCh0ZXh0KSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRva2VuOiBhbnkgPSBhd2FpdCBBcGlTZXJ2aWNlLmV4cGVydEF1dGgoKTtcbiAgICAgICAgICAgICAgICBsZXQgc2VudGltZW50ID0gYXdhaXQgYXhpb3MucG9zdCgnaHR0cHM6Ly9ubGFwaS5leHBlcnQuYWkvdjIvYW5hbHl6ZS9zdGFuZGFyZC9lbi9zZW50aW1lbnQnLCB7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiB0ZXh0XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHNlbnRpbWVudC5kYXRhKTtcbiAgICAgICAgICAgIH0gY2F0Y2goZXJyKSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxufSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/functions/hello/api.service.ts\n");

/***/ }),

/***/ "./src/functions/hello/constants.ts":
/*!******************************************!*\
  !*** ./src/functions/hello/constants.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TWITTER_MENTION_URL\": () => (/* binding */ TWITTER_MENTION_URL),\n/* harmony export */   \"header\": () => (/* binding */ header)\n/* harmony export */ });\nconst TWITTER_MENTION_URL = 'https://api.twitter.com/2/users/1363154619350745095/mentions';\nconst CONSUMER_API_KEY = '';\nconst ACCESS_TOKEN = '';\nconst header = `OAuth oauth_consumer_key=\"CONSUMER_API_KEY\", oauth_nonce=\"OAUTH_NONCE\", oauth_signature=\"OAUTH_SIGNATURE\", oauth_signature_method=\"HMAC-SHA1\", oauth_timestamp=\"OAUTH_TIMESTAMP\", oauth_token=\"ACCESS_TOKEN\", oauth_version=\"1.0\"`;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZnVuY3Rpb25zL2hlbGxvL2NvbnN0YW50cy50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4cGVydC1sYW1iZGEvLi9zcmMvZnVuY3Rpb25zL2hlbGxvL2NvbnN0YW50cy50cz9iMDhjIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBUV0lUVEVSX01FTlRJT05fVVJMID0gJ2h0dHBzOi8vYXBpLnR3aXR0ZXIuY29tLzIvdXNlcnMvMTM2MzE1NDYxOTM1MDc0NTA5NS9tZW50aW9ucyc7XG5cblxuY29uc3QgQ09OU1VNRVJfQVBJX0tFWSA9ICcnO1xuY29uc3QgQUNDRVNTX1RPS0VOID0gJyc7XG5cbmV4cG9ydCBjb25zdCBoZWFkZXIgPSBgT0F1dGggb2F1dGhfY29uc3VtZXJfa2V5PVwiQ09OU1VNRVJfQVBJX0tFWVwiLCBvYXV0aF9ub25jZT1cIk9BVVRIX05PTkNFXCIsIG9hdXRoX3NpZ25hdHVyZT1cIk9BVVRIX1NJR05BVFVSRVwiLCBvYXV0aF9zaWduYXR1cmVfbWV0aG9kPVwiSE1BQy1TSEExXCIsIG9hdXRoX3RpbWVzdGFtcD1cIk9BVVRIX1RJTUVTVEFNUFwiLCBvYXV0aF90b2tlbj1cIkFDQ0VTU19UT0tFTlwiLCBvYXV0aF92ZXJzaW9uPVwiMS4wXCJgIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBR0E7QUFDQTtBQUVBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/functions/hello/constants.ts\n");

/***/ }),

/***/ "./src/functions/hello/handler.ts":
/*!****************************************!*\
  !*** ./src/functions/hello/handler.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"main\": () => (/* binding */ main)\n/* harmony export */ });\n/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ \"source-map-support/register\");\n/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _libs_lambda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @libs/lambda */ \"./src/libs/lambda.ts\");\n/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.service */ \"./src/functions/hello/api.service.ts\");\n\n\n\nconst hello = async (event) => {\n    const oauth = {\n        consumer_key: 'D3qxbEl6JrLdKig0UJCUG0wgu',\n        consumer_secret: 'sWYnldFMu195OVJUFWjqIQDCAHGjrLYP50QXHsuY7b4pjA4JRK',\n        token: '1363154619350745095-HCfeCdXzkdQgyI6JLHmHilg8m5v4o6',\n        token_secret: 'd48dkX2wC2onnCqMxemp35VPvfhfPMlaG1voxMMt9bKCr'\n    };\n    return new Promise(async (resolve, reject) => {\n        try {\n            const response = await _api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService.mentionTweets();\n            if (response.meta.result_count > 0) {\n                console.log(response.data[0]);\n                let sentiment = await _api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService.sentiment(response.data[0].text);\n                console.log(sentiment);\n                resolve(sentiment.data.sentiment.negativity);\n            }\n            else {\n                resolve(0);\n            }\n        }\n        catch (err) {\n            reject(err);\n        }\n    });\n};\nconst main = (0,_libs_lambda__WEBPACK_IMPORTED_MODULE_1__.middyfy)(hello);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZnVuY3Rpb25zL2hlbGxvL2hhbmRsZXIudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leHBlcnQtbGFtYmRhLy4vc3JjL2Z1bmN0aW9ucy9oZWxsby9oYW5kbGVyLnRzPzkyMmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdzb3VyY2UtbWFwLXN1cHBvcnQvcmVnaXN0ZXInO1xuaW1wb3J0IHsgbWlkZHlmeSB9IGZyb20gJ0BsaWJzL2xhbWJkYSc7XG5pbXBvcnQge0FwaVNlcnZpY2UgfSBmcm9tICcuL2FwaS5zZXJ2aWNlJztcblxuY29uc3QgaGVsbG8gPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgY29uc3Qgb2F1dGggPSB7XG4gICAgY29uc3VtZXJfa2V5OidEM3F4YkVsNkpyTGRLaWcwVUpDVUcwd2d1JyxcbiAgICBjb25zdW1lcl9zZWNyZXQ6J3NXWW5sZEZNdTE5NU9WSlVGV2pxSVFEQ0FIR2pyTFlQNTBRWEhzdVk3YjRwakE0SlJLJyxcbiAgICB0b2tlbjonMTM2MzE1NDYxOTM1MDc0NTA5NS1IQ2ZlQ2RYemtkUWd5STZKTEhtSGlsZzhtNXY0bzYnLFxuICAgIHRva2VuX3NlY3JldDonZDQ4ZGtYMndDMm9ubkNxTXhlbXAzNVZQdmZoZlBNbGFHMXZveE1NdDliS0NyJ1xuICB9XG4gIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyhyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2U6IGFueSA9IGF3YWl0IEFwaVNlcnZpY2UubWVudGlvblR3ZWV0cygpO1xuICAgICAgaWYocmVzcG9uc2UubWV0YS5yZXN1bHRfY291bnQgPiAwICkge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhWzBdKVxuICAgICAgICBsZXQgc2VudGltZW50OiBhbnkgPSBhd2FpdCBBcGlTZXJ2aWNlLnNlbnRpbWVudChyZXNwb25zZS5kYXRhWzBdLnRleHQpO1xuICAgICAgICBjb25zb2xlLmxvZyhzZW50aW1lbnQpO1xuICAgICAgICByZXNvbHZlKHNlbnRpbWVudC5kYXRhLnNlbnRpbWVudC5uZWdhdGl2aXR5KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzb2x2ZSgwKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoKGVycikge1xuICAgICAgcmVqZWN0KGVycik7XG4gICAgfVxuICB9KTtcblxuICAvLyByZXR1cm4gZm9ybWF0SlNPTlJlc3BvbnNlKHtcbiAgLy8gICBtZXNzYWdlOiBgSGVsbG8gJHtldmVudC5ib2R5Lm5hbWV9LCB3ZWxjb21lIHRvIHRoZSBleGNpdGluZyBTZXJ2ZXJsZXNzIHdvcmxkIWAsXG4gIC8vICAgZXZlbnQsXG4gIC8vIH0pO1xufVxuXG5leHBvcnQgY29uc3QgbWFpbiA9IG1pZGR5ZnkoaGVsbG8pO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBRUE7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/functions/hello/handler.ts\n");

/***/ }),

/***/ "./src/libs/lambda.ts":
/*!****************************!*\
  !*** ./src/libs/lambda.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"middyfy\": () => (/* binding */ middyfy)\n/* harmony export */ });\n/* harmony import */ var _middy_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @middy/core */ \"@middy/core\");\n/* harmony import */ var _middy_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_middy_core__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _middy_http_json_body_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @middy/http-json-body-parser */ \"@middy/http-json-body-parser\");\n/* harmony import */ var _middy_http_json_body_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_middy_http_json_body_parser__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst middyfy = (handler) => {\n    return _middy_core__WEBPACK_IMPORTED_MODULE_0___default()(handler).use(_middy_http_json_body_parser__WEBPACK_IMPORTED_MODULE_1___default()());\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGlicy9sYW1iZGEudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leHBlcnQtbGFtYmRhLy4vc3JjL2xpYnMvbGFtYmRhLnRzPzZiMjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1pZGR5IGZyb20gXCJAbWlkZHkvY29yZVwiXG5pbXBvcnQgbWlkZHlKc29uQm9keVBhcnNlciBmcm9tIFwiQG1pZGR5L2h0dHAtanNvbi1ib2R5LXBhcnNlclwiXG5cbmV4cG9ydCBjb25zdCBtaWRkeWZ5ID0gKGhhbmRsZXIpID0+IHtcbiAgcmV0dXJuIG1pZGR5KGhhbmRsZXIpLnVzZShtaWRkeUpzb25Cb2R5UGFyc2VyKCkpXG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/libs/lambda.ts\n");

/***/ }),

/***/ "@middy/core":
/*!******************************!*\
  !*** external "@middy/core" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("@middy/core");;

/***/ }),

/***/ "@middy/http-json-body-parser":
/*!***********************************************!*\
  !*** external "@middy/http-json-body-parser" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = require("@middy/http-json-body-parser");;

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");;

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("moment");;

/***/ }),

/***/ "request":
/*!**************************!*\
  !*** external "request" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("request");;

/***/ }),

/***/ "source-map-support/register":
/*!**********************************************!*\
  !*** external "source-map-support/register" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("source-map-support/register");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/functions/hello/handler.ts");
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;