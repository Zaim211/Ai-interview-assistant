import { CreateAssistantDTO } from "@vapi-ai/web/dist/api";
import { z } from "zod";

export const mappings = {
  "react.js": "react",
  reactjs: "react",
  react: "react",
  "next.js": "nextjs",
  nextjs: "nextjs",
  next: "nextjs",
  "vue.js": "vuejs",
  vuejs: "vuejs",
  vue: "vuejs",
  "express.js": "express",
  expressjs: "express",
  express: "express",
  "node.js": "nodejs",
  nodejs: "nodejs",
  node: "nodejs",
  mongodb: "mongodb",
  mongo: "mongodb",
  mongoose: "mongoose",
  mysql: "mysql",
  postgresql: "postgresql",
  sqlite: "sqlite",
  firebase: "firebase",
  docker: "docker",
  kubernetes: "kubernetes",
  aws: "aws",
  azure: "azure",
  gcp: "gcp",
  digitalocean: "digitalocean",
  heroku: "heroku",
  photoshop: "photoshop",
  "adobe photoshop": "photoshop",
  html5: "html5",
  html: "html5",
  css3: "css3",
  css: "css3",
  sass: "sass",
  scss: "sass",
  less: "less",
  tailwindcss: "tailwindcss",
  tailwind: "tailwindcss",
  bootstrap: "bootstrap",
  jquery: "jquery",
  typescript: "typescript",
  ts: "typescript",
  javascript: "javascript",
  js: "javascript",
  "angular.js": "angular",
  angularjs: "angular",
  angular: "angular",
  "ember.js": "ember",
  emberjs: "ember",
  ember: "ember",
  "backbone.js": "backbone",
  backbonejs: "backbone",
  backbone: "backbone",
  nestjs: "nestjs",
  graphql: "graphql",
  "graph ql": "graphql",
  apollo: "apollo",
  webpack: "webpack",
  babel: "babel",
  "rollup.js": "rollup",
  rollupjs: "rollup",
  rollup: "rollup",
  "parcel.js": "parcel",
  parceljs: "parcel",
  npm: "npm",
  yarn: "yarn",
  git: "git",
  github: "github",
  gitlab: "gitlab",
  bitbucket: "bitbucket",
  figma: "figma",
  prisma: "prisma",
  redux: "redux",
  flux: "flux",
  redis: "redis",
  selenium: "selenium",
  cypress: "cypress",
  jest: "jest",
  mocha: "mocha",
  chai: "chai",
  karma: "karma",
  vuex: "vuex",
  "nuxt.js": "nuxt",
  nuxtjs: "nuxt",
  nuxt: "nuxt",
  strapi: "strapi",
  wordpress: "wordpress",
  contentful: "contentful",
  netlify: "netlify",
  vercel: "vercel",
  "aws amplify": "amplify",
};

export const interviewer: CreateAssistantDTO = {
  name: "Interviewer",
  firstMessage:
    "Hello! Thank you for taking the time to speak with me today. I'm excited to learn more about you and your experience.",
  transcriber: {
    provider: "deepgram",
    model: "nova-2",
    language: "en",
  },
  voice: {
    provider: "11labs",
    voiceId: "sarah",
    stability: 0.4,
    similarityBoost: 0.8,
    speed: 0.9,
    style: 0.5,
    useSpeakerBoost: true,
  },
  model: {
    provider: "openai",
    model: "gpt-4",
    messages: [
      {
        role: "system",
        content: `You are a professional job interviewer conducting a real-time voice interview with a candidate. Your goal is to assess their qualifications, motivation, and fit for the role.

Interview Guidelines:
Follow the structured question flow:
{{questions}}

Engage naturally & react appropriately:
Listen actively to responses and acknowledge them before moving forward.
Ask brief follow-up questions if a response is vague or requires more detail.
Keep the conversation flowing smoothly while maintaining control.
Be professional, yet warm and welcoming:

Use official yet friendly language.
Keep responses concise and to the point (like in a real voice interview).
Avoid robotic phrasing—sound natural and conversational.
Answer the candidate’s questions professionally:

If asked about the role, company, or expectations, provide a clear and relevant answer.
If unsure, redirect the candidate to HR for more details.

Conclude the interview properly:
Thank the candidate for their time.
Inform them that the company will reach out soon with feedback.
End the conversation on a polite and positive note.


- Be sure to be professional and polite.
- Keep all your responses short and simple. Use official language, but be kind and welcoming.
- This is a voice conversation, so keep your responses short, like in a real conversation. Don't ramble for too long.`,
      },
    ],
  },
};

export const feedbackSchema = z.object({
  totalScore: z.number(),
  categoryScores: z.tuple([
    z.object({
      name: z.literal("Communication Skills"),
      score: z.number(),
      comment: z.string(),
    }),
    z.object({
      name: z.literal("Technical Knowledge"),
      score: z.number(),
      comment: z.string(),
    }),
    z.object({
      name: z.literal("Problem Solving"),
      score: z.number(),
      comment: z.string(),
    }),
    z.object({
      name: z.literal("Cultural Fit"),
      score: z.number(),
      comment: z.string(),
    }),
    z.object({
      name: z.literal("Confidence and Clarity"),
      score: z.number(),
      comment: z.string(),
    }),
  ]),
  strengths: z.array(z.string()),
  areasForImprovement: z.array(z.string()),
  finalAssessment: z.string(),
});

export const interviewCovers = [
  "/adobe.png",
  "/amazon.png",
  "/facebook.png",
  "/hostinger.png",
  "/pinterest.png",
  "/quora.png",
  "/reddit.png",
  "/skype.png",
  "/spotify.png",
  "/telegram.png",
  "/tiktok.png",
  "/yahoo.png",
];

export const dummyInterviews: Interview[] = [
  {
    id: "1",
    userId: "user1",
    role: "Frontend Developer",
    type: "Technical",
    techstack: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    level: "Junior",
    questions: ["What is React?"],
    finalized: false,
    createdAt: "2024-03-15T10:00:00Z",
  },
  {
    id: "2",
    userId: "user1",
    role: "Full Stack Developer",
    type: "Mixed",
    techstack: ["Node.js", "Express", "MongoDB", "React"],
    level: "Senior",
    questions: ["What is Node.js?"],
    finalized: false,
    createdAt: "2024-03-14T15:30:00Z",
  },
];

// export const generator: CreateWorkflowDTO = {
//     "name": "ai-agent",
//     "nodes": [
//       {
//         "name": "start_node",
//         "type": "start",
//         "metadata": {
//           "position": {
//             "x": 201,
//             "y": 110
//           }
//         }
//       },
//       {
//         "name": "say",
//         "type": "say",
//         "metadata": {
//           "position": {
//             "x": 114.96840252346465,
//             "y": 192.83431802325782
//           }
//         },
//         "prompt": "You are a voice assistant helping with creating new AI interviewers. Your task is to collect data from the user. Remember that this is a voice conversation - do not use any special characters.",
//         "exact": ""
//       },
//       {
//         "name": "conversation_1747949779984",
//         "type": "conversation",
//         "metadata": {
//           "position": {
//             "x": 116.83945283889767,
//             "y": 478.6464280658298
//           }
//         },
//         "prompt": "Say that the interview will be generated shortly",
//         "globalNodePlan": {
//           "enabled": true,
//           "enterCondition": ""
//         },
//         "variableExtractionPlan": {
//           "output": [
//             {
//               "title": "role",
//               "description": "What role should would you like to train for? For example Frontend, Backend, Fullstack, Design, UX?",
//               "type": "string",
//               "enum": []
//             },
//             {
//               "title": "level",
//               "description": "What role should would you like to train for? For example Frontend, Backend, Fullstack, Design, UX?",
//               "type": "string",
//               "enum": [
//                 "entry",
//                 "mid",
//                 "senior"
//               ]
//             },
//             {
//               "title": "type",
//               "description": "What type of the interview should it be?",
//               "type": "string",
//               "enum": []
//             },
//             {
//               "title": "techstack",
//               "description": "A list of technologies to cover during the job interview. For example, React, Next.js, Express.js, Node and so on…",
//               "type": "string",
//               "enum": []
//             },
//             {
//               "title": "amount",
//               "description": "How many questions would you like to generate?",
//               "type": "number",
//               "enum": []
//             }
//           ]
//         }
//       },
//       {
//         "name": "conversation_1747950506175",
//         "type": "conversation",
//         "metadata": {
//           "position": {
//             "x": 123.38812894291357,
//             "y": 794.1331891059876
//           }
//         },
//         "prompt": "Say that the Interview will be generated shortly"
//       },
//       {
//         "name": "apiRequest_1747950620111",
//         "type": "apiRequest",
//         "metadata": {
//           "position": {
//             "x": 128.0657547314962,
//             "y": 1072.1989438374837
//           }
//         },
//         "method": "POST",
//         url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/vapi/generate`,
//         "headers": {
//           "type": "object",
//           "properties": {}
//         },
//         "body": {
//           "type": "object",
//           "properties": {
//             "role": {
//               "type": "string",
//               "description": "role",
//               "value": "{{role}}"
//             },
//             "level": {
//               "type": "string",
//               "description": "level",
//               "value": "{{level}}"
//             },
//             "amount": {
//               "type": "number",
//               "description": "amount",
//               "value": "{{amount}}"
//             },
//             "type": {
//               "type": "string",
//               "description": "type",
//               "value": "{{type}}"
//             },
//             "techstack": {
//               "type": "string",
//               "description": "techstack",
//               "value": "{{techstack}}"
//             },
//             "userid": {
//               "type": "string",
//               "description": "userid",
//               "value": "{{userid}}"
//             }
//           }
//         },
//         "output": {
//           "type": "object",
//           "properties": {}
//         },
//         "mode": "blocking",
//         "hooks": []
//       },
//       {
//         "name": "conversation_1747951111339",
//         "type": "conversation",
//         "metadata": {
//           "position": {
//             "x": 128.0657547314962,
//             "y": 1372.1989438374837
//           }
//         },
//         "prompt": "Thank the user for the conversation and inform them that the interview has been generated successfully."
//       }
//     ],
//     "edges": [
//       {
//         "from": "start_node",
//         "to": "say"
//       },
//       {
//         "from": "say",
//         "to": "conversation_1747949779984",
//         "condition": {
//           "type": "ai",
//           "prompt": ""
//         }
//       },
//       {
//         "from": "conversation_1747949779984",
//         "to": "conversation_1747950506175",
//         "condition": {
//           "type": "ai",
//           "prompt": "ifuser provided all the required variables"
//         }
//       },
//       {
//         "from": "conversation_1747950506175",
//         "to": "apiRequest_1747950620111",
//         "condition": {
//           "type": "ai",
//           "prompt": ""
//         }
//       },
//       {
//         "from": "apiRequest_1747950620111",
//         "to": "conversation_1747951111339",
//         "condition": {
//           "type": "ai",
//           "prompt": ""
//         }
//       }
//     ]
//   }
// export const interviewerGenerator: CreateAssistantDTO = {
//   name: "AI Interview Generator",
//   firstMessage: "Hello! I'll help you create a customized interview. Let's start by gathering some details.",
//   transcriber: {
//     provider: "deepgram",
//     model: "nova-2",
//     language: "en",
//   },
//   voice: {
//     provider: "11labs",
//     voiceId: "sarah",
//     stability: 0.4,
//     similarityBoost: 0.8,
//     speed: 0.9,
//     style: 0.5,
//     useSpeakerBoost: true,
//   },
//   model: {
//     provider: "openai",
//     model: "gpt-4",
//     messages: [
//       {
//         role: "system",
//         content: `You are an AI assistant that helps create customized job interviews. Follow these steps:

// 1. Data Collection Phase:
//    - Politely ask for these parameters one at a time:
//      * Role (Frontend/Backend/Fullstack/Design/UX)
//      * Experience Level (Entry/Mid/Senior)
//      * Interview Type (Technical/Behavioral/System Design/Mock)
//      * Technologies (comma-separated list)
//      * Number of questions
//    - Confirm each input before proceeding
//    - For technology lists, suggest common ones if user hesitates

// 2. Generation Phase:
//    - Call this API when all data is collected: ${process.env.NEXT_PUBLIC_BASE_URL}/api/vapi/generate
//    - Send this JSON structure:
//      {
//        "role": "{{user_provided_role}}",
//        "level": "{{user_provided_level}}",
//        "type": "{{user_provided_type}}",
//        "techstack": "{{user_provided_tech}}",
//        "amount": {{user_provided_amount}},
//        "userid": "{{user_id}}"
//      }

// 3. Completion:
//    - Announce when interview is successfully generated
//    - Guide user to their dashboard
//    - Keep responses short and conversational

// Voice Optimization:
// - Pause 1.5 seconds between questions
// - Limit responses to 15 words max
// - Use natural acknowledgments ("Got it", "Thanks")`
//       }
//     ]
//   },
//   clientMessages: [],
//   serverMessages: [],
//   metadata: {
//     workflow: {
//       parameters: [
//         {
//           name: "role",
//           description: "Job role to interview for",
//           type: "string",
//           enum: ["Frontend", "Backend", "Fullstack", "Design", "UX"]
//         },
//         {
//           name: "level",
//           description: "Experience level",
//           type: "string",
//           enum: ["entry", "mid", "senior"]
//         },
//         {
//           name: "type",
//           description: "Interview type",
//           type: "string",
//           enum: ["technical", "behavioral", "system_design", "mock"]
//         },
//         {
//           name: "techstack",
//           description: "Technologies to cover",
//           type: "string"
//         },
//         {
//           name: "amount",
//           description: "Number of questions",
//           type: "number"
//         }
//       ],
//       apiEndpoint: `${process.env.NEXT_PUBLIC_BASE_URL}/api/vapi/generate`
//     }
//   }
// };