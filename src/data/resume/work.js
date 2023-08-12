/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Cars24 Financial Pvt. Ltd.',
    position: 'Assistant Manager - Data Science',
    // url: 'https://smileidentity.com',
    startDate: '2023-07-03',
    summary: `cars24 financial pvt. ltd. provides loans to the people who buys second hand cars. My job is to take care of the APIs which are powering the flow 
    of credit & risk processes, taking newly built models for ROI, risk, credit, etc prediction to the production to enhance the legitimacy of the customer as well as prevent 
    chances of default and fraud.`,
    highlights: [
      'Taken care of the POCs for flows, model',
    ],
  },
  {
    name: 'Swift',
    position: 'SDE-1',
    // url: 'http://skepticalinvestments.biz',
    startDate: '2023-05-24',
    summary: `Swift is a vendor aggregator for the people who sells on online store like shopify, woocomerce, etc. Swift takes care of the delivery updates form 
    vendors, trasaction management and an end to end solution to make your product reach to your customer`,
    highlights: [
      'Took care of the billing part in the fulfillment team of backend engineering.',
      'Implemented KYC Verification system for customer onboarding after which every seller was KYC compliant to use swift services.',
      'Debugged various backend bugs and helped in resolving the customer issues on call.',
      'Used Light-4J java & express.js node.js framework for the development & made sure to implement best practices like DRY, SOLID, etc like LLD design principles',
      'Used aggregated queries in the MongoDB for Analysis & Reporting',
      'Explored the software realm, learnt to create, optmize & develop scalable software and learnt how to be a professional coder',
    ],
  },
  {
    name: 'Innovaccer',
    position: 'Data Scientist',
    // url: 'https://arthena.com',
    startDate: '2022-07-04',
    endDate: '2022-05-30',
    summary: `Innovaccer is a health-tech company primarily solving the problem of using data to improve the healthcare. primarily operating in the 
    United States`,
    highlights: [
      'Built Data Processing Pipelines for adding data from multiple sources into multiple DataBases for ETL in python.',
      'Built a prototype for taking their process of Data Migration on the Flask Backend along with a UI functionality.',
      'Developed Executive reports and Dashboards using Power BI from US Healthcare Data.',
      'Tech Stack: Flask, SQL, Python, PowerBI, AWS-EC2, Postgres, DBeaber',
      'Non Technical Learnings',
      'Learnt a data sense how think whenever doing data analysis or Engineering',
      'Expanded professional network of Engineers, Analysts, Researchers, Managers and learnt how to maintain relationship',
      'Learnt How to be a Team Player',
    ],
  },
  {
    name: 'OLA',
    position: 'MLE Intern',
    // url: 'http://enveritas.org',
    startDate: '2022-01-03',
    endDate: '2022-04-16',
    summary: `Worked on Semantic Search Application for Quick Commerce Solution provided by the OLA during 2022
    `,
    highlights: [
      'Implemented Word2Vec and Doc2Vec for semantic search in quick commerce application.',
      'Developed a Graph based Algorithm along with GNN and heuristics for searching and successfully pushed the accuracymetrics by 2% from OLA’s best performing approach of Universal Sentence Encoder.',
      'Developed an end to end search functionality in quick commerce application.',
    ],
  },
  {
    name: 'HyperVerge',
    position: 'Research Intern',
    // url: 'https://zenysis.com',
    startDate: '2021-05-23',
    endDate: '2021-07-31',
    summary: `HyperVerge is an AI Research organization working primarily in solving the ID verification problem in the KYC of the businesses, banks and 
    organizations`,
    highlights: [
      'Worked on Automatic Speech Recognition to create an engine for speech to text synthesis of English & Vietnameese',
      'Used Timit Dataset to finetune Wav2Vec2.0 with a CTC loss layer on top and got 11% WER on the test dataset.',
      'Implemented Wav2Vec-U approach for unsupervised learning of speech data using GAN and Kaldi speech library.',
      'Prepared a demo for Automatic Speech Recognition in English with Wav2Vec2.0 approach.',
    ],
  },
  {
    name: 'Quibitrics - closed',
    position: 'Intern',
    // url: 'https://matroid.com',
    startDate: '2020-011-01',
    endDate: '2021-01-01',
    summary: `Quibitrics aimed to digitize the document processing of the invoices in the Indian Market
    `,
    highlights: [
      'Fine tuned the Bert Model for token classification on a cusotm dataset to predict specific tokens with respect to invoices',
      'tried to implement the task1 & task3 of ICDAR Robust Reading Challenge',
    ],
  },
];

export default work;
