# Next.js: Unhandled Promise Rejection in getStaticProps/getServerSideProps
This repository demonstrates a common yet subtle bug in Next.js applications related to error handling within `getStaticProps` or `getServerSideProps` asynchronous data fetching. The bug manifests as an application displaying a blank page or unexpected behavior when an API request fails.

## Problem
The issue occurs when a promise rejection (e.g., an API call failing) isn't correctly handled within `getStaticProps` or `getServerSideProps`. Next.js's error handling might not catch these rejections leading to silent failures.

## Solution
The provided solution uses a `try...catch` block to handle potential errors during the API request.  A default fallback is used in case of an error to prevent the application from crashing and provide a meaningful user experience.

## Reproduction
1. Clone this repository.
2. Navigate to the project's root directory.
3. Run `npm install`.
4. Run `npm run dev`.
5. Observe the behavior.  The original 'bug.js' will show the issue. The solution is in 'bugSolution.js'.