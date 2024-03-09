import axios from 'axios';
import { nanoid } from 'nanoid';

export const customFetch = axios.create({
  baseURL: 'http://localhost:5200/api/v1',
});

export const navbarData = [
  { id: nanoid(), url: '/', text: 'Home' },
  { id: nanoid(), url: '/about', text: 'Who we are' },
  { id: nanoid(), url: '/investment', text: 'Investment' },
  { id: nanoid(), url: '/faqs', text: 'Faqs' },
  { id: nanoid(), url: '/contact', text: 'Contact' },
];

export const list = [
  {
    id: nanoid(),
    image: '/hero.jpg',
    name: 'Get Started Now',
    title: 'Welcome to FTrest-holding',
    quote: 'A total new way to Invest',
  },
  {
    id: nanoid(),
    image: '/hero2.jpg',
    name: 'Read more',
    title: 'Earn Profit Without Compromising',
    quote: 'We support the growth of investment in promising innovations',
  },
];

export const questions = [
  {
    id: nanoid(),
    title: 'Why does fxrealtrade offer investment to investors?',
    info: 'Trest-holding sees the numerous opportunity in the financial markets and seeks to make this accessible to all and sundry.The popularization of digital assets has further strengthened our position as one of the top platforms changing lives through these assets. It is easy to understand that the more working capital is involved in the process of exchange transactions and the more people become interested in this business, the closer we are to our goals and the higher the income level of our customers is.',
  },
  {
    id: nanoid(),
    title:
      'What are the mechanism of making profit in the company with investors fund',
    info: 'Trest-holding accepts funds from its investors worldwide and creates consolidated financial flows of investment funds, carefully analyzing all aspects that may affect the conclusion of a particular exchange transaction. Making a profit, we divide it between clients in accordance with a fixed percentage of profitability, and use the remaining profit directly at our discretion.',
  },
  {
    id: 3,
    title: 'Is Trest-holding a registered and authorixed trading company?',
    info: 'Yes Trest-holding is legally registered company with Financial Industry Regulatory Authority Trest-holding is also regulated by the U.S. Security and Exchange Commission(SEC) and incorporated in the state of Maryland.',
  },
  {
    id: nanoid(),
    title: 'How can i register to start earning?',
    info: 'Simply click on the sign up button to register for free in the company, choose any investment package you can afford. kindly enter the amount you want to start with on the website and make the exact payment by transferring to the company wallet address and then you will finish up your deposit process by clicking on the save and wait for the company to approve your deposit. Once we verify your deposit we will definitely approve the deposit, then we will enable your dashboard for earning and at the agreed time on the investment package you selected.',
  },
  {
    id: nanoid(),
    title: 'How does withdrawal take to enter wallet?',
    info: 'The withdrawal is always instantly, and immediately your withdrawal request is received in the company, the transfer of the specified amount you want to withdraw is automatically send directly into your Bitcoin or Etherum wallet address registered in the company, this amount enters your wallet backoffice immediately after passing 3 to 4 confirmation process by the blockchain service. ',
  },
  {
    id: nanoid(),
    title: 'Is anyone from any country allowed to participate?',
    info: 'For anyone to take advantage of our investment opportunity, the person must be at least 18 years of age and must have agreed to our Terms of Service. It doesn’t matter the country you’re located; as long as you have an internet connection, you can participate.',
  },
  {
    id: nanoid(),
    title:
      'Whats the main activities that allows you to generate such interest?',
    info: 'We invest in high value assets using indepth analysis, market forensics and high end technology. Our Experts are able to make high yields due to our exceptional stratagies. Based on Bitcoin & Etherum mining volume and the state-of-the-art technology that we use for Bitcoin and Etherum mining, we are able to provide interest that’s higher than the market average. Also, the fact that we are expanding our services globally helps us to accelerate and reach new heights. In order to keep our status as one of the world’s best BTC / ETH mining companies available today, we have to work by standards and concepts that apply to modern-day technology. As a result of constant and purposefully teamwork we are able to provide lucrative interest to our clients.',
  },
  {
    id: nanoid(),
    title: 'What is your offer? How much will i earn?',
    info: 'The main concept behind our investment plan is that you will receive interest on daily basis based on the investment plan you activate/choose. This means that after your deposit has been added into your account, each day from that point on interest will be applied to your account balance. All your active deposits are stored in your account “Investment List” section; from there you can withdraw your principal or part of it. As long as you have an active deposit you will receive interest from it. As soon as you withdraw all your principal, your deposit will no longer be active and interest will no longer be applied.',
  },
  {
    id: nanoid(),
    title: 'What is minimum and maximum deposit amount?',
    info: 'The minimum deposit amount is $50 USD and the maximum amount as per deposit is $50000. You may have as many active investments at the time as you wish.',
  },
  {
    id: nanoid(),
    title: 'What is the affiliate program and how can i benefit from it?',
    info: 'Our affiliate program’s main concept is to provide an extra financial opportunity to our members by referring others to our project. All you have to do is share your referral link (available in your account) with other individuals, and you will be awarded with 7% from their deposit into your account balance. If you would like to earn even higher (10%) commission from your referrals’ deposits, please apply for Representative status.',
  },
  {
    id: nanoid(),
    title:
      'What is the main difference between standard affiliate program and regional representatives program?',
    info: 'Please check out our plans to view available offers. You can also contact support.',
  },
  {
    id: nanoid(),
    title: 'I would like to be a representative? What should i do',
    info: 'In order to become a Regional Representative of Digital Capital Markets you have to have the ability to support and promote our project in your region via different ways, such as a personal blog, online / offline presentation, meetings with clients etc. Please email us at support@fxidealtrade.co for application.',
  },
  {
    id: nanoid(),
    title: 'My account is inactive why?',
    info: 'If you account is inactive, you might have broken one of our terms/services. Please contact support to have it rectified.',
  },
];
