# Lumastore Cypress.

This is a test automation project designed to test the website (UI Test) [https://magento.softwaretestingboard.com](https://magento.softwaretestingboard.com/).

## Tech Stack

- [Node.js](https://nodejs.org/en/download/)
- [Cypress](https://www.cypress.io/)
- [Mochawesome](https://www.npmjs.com/package/mochawesome)

### UI testing

The test cases have been documented in platform [qatouch.com](https://www.qatouch.com/). To access the test suite, can reach me at:
luisjahziel1029@gmail.com. These were the scenerios documented as well as automated:

## URL

https://magento.softwaretestingboard.com/

### UI testing

    1. Login.✅

    2. Sign up

    3. Add item to shopping cart.

    4. Search Item.

    5. Subscribe to newsletter.

    6. Logout.

    7. Checkout.

    8. Delete item from shopping cart.

    9. Verify My Orders.

    10. Contact Us.

    11. Shop From Hot Sellers.

    12. Advance Search.

    13. Verify Customer Service Page

    14. Popular Search Terms

    15. Shop From Women Section

    16. Shop From Men Section

    17. Verify Deals Section

    18. Orders And Returns

    19. Shop Eco Friendly

    20. Add your Review

    21. Add To WishList

    22. Add Address

## Run Locally

#### Required to run project

- [Node.js](https://nodejs.org/en/download/)

##

- Clone repository:

```bash
  git clone https://github.com/luisbrito2900/cypress-test-practice.git
```

- Install dependencies:

```bash
  npm install
```

- Run project in headless mode:

```bash
  npx cypress run
```

- Run project in headed/local mode:

```bash
  npx cypress open
```

This will run all the tests and generate a report at the end of the execution.

## Must know

- A custom POM Pattern with Javascript and Cypress was used.

- The data is stored on `cypress.env.json` for each test case.

- The magento website use to make test fail sometimes so that's why retries are applied in the config.js file.

- Pipeline integration is not possible because this website it's blocking correct pipeline execution.

- The ESLint linter was implemented to ensure the best practices and performance of the code.
