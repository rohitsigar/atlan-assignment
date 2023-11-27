# 💻 ATLAN ASSIGNMENT SQL Editor

## Description

Create, design and implement a web-based application capable of running SQL queries and displaying the results of said query. The application must include a space which accepts SQL queries in the form of user inputs, then runs the given query, and displays the result within the application.

## 👨‍💻 Live Demo

[![GitHub](https://img.shields.io/website?url=https://www.codingspace.codes&logo=github&style=flat-square)](https://github.com/rohitsigar/atlan-assignment)

Try out the website: [SQL Editor](https://atlan-assignment-tau.vercel.app/)

## 👨‍💻 Features

- Users can run any query from available queries.
- Users can view all previously executed queries.
- Users can see the result of query in the table (pagination is also implemented)
- Users can download the data in CSV format with just one click.

## ⏱ Performance Scheenshot

![Performance](https://github.com/rohitsigar/atlan-assignment/blob/main/public/performance.jpeg)

### [web.dev Report](https://pagespeed.web.dev/)

## 🪜 How I Optimizing the Page Load Time and other metrics

- (for brownie points 😁) I incorporated pagination into the application to efficiently display a large number of rows. This implementation ensures a smoother user experience by preventing the browser from becoming overwhelmed or crashing. 
- The website has been optimized for responsiveness to a significant degree, despite the fact that such an application is less likely to be utilized on mobile devices.
- The website is deployed on Vercel, known as one of the swiftest free hosting platforms for JavaScript-based web apps, thanks to its CDN and caching advantages. Additionally, it offers free SSL during hosting, enhancing page security and ranking.
- Used react.memo which is a higher-order component in React that aims to optimize the performance of functional components by memoizing the result and preventing unnecessary renders.
- A minimal set of dependencies was employed in crafting the page.
- Restructured code to reuse components & used minimal imports where necessary.

## Available Scripts

In the project directory, you can run:

### `npm install`

Install all the packages listed in package.json. This includes both dependencies and devDependencies.

### `npm start`

Run the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page will reload if you make edits, and you'll see any lint errors in the console.

### `npm run build`

Build the app for production in the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified, and filenames include hashes. Your app is now ready for deployment!

Refer to the [deployment section](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## 🚀 Project Functionalities

![Screen Shot](https://github.com/rohitsigar/atlan-assignment/blob/main/public/Screenshot2.png)


![Screen Shot](https://github.com/rohitsigar/atlan-assignment/blob/main/public/Screenshot3.png)


![Screen Shot](https://github.com/rohitsigar/atlan-assignment/blob/main/public/Screenshot1.png)
