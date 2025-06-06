import arcjet, { tokenBucket, shield, detectBot} from "@arcjet/node";

import "dotenv/config";


export const aj = arcjet({
  key: process.env.ARCJET_KEY,
  characteristics: ["ip.src"],
  rules: [
    // shield protects your app from common attacks 
    shield({ mode: "LIVE" }),
    detectBot({
      mode: "LIVE",
      // block all bots except search engines
      allow: [
        "CATEGORY:SEARCH_ENGINE",
      ],
    }),
    // rate limiting
    tokenBucket({
      mode: "LIVE",
      refillRate: 10,
      interval: 15,
      capacity: 20,
    }),
  ],
});