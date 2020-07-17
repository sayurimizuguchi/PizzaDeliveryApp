## Greenfield Pizza Restaurant using Stripe

### Overall Preview 

##### gifs here

### Tech Stack

* [Figma] - UI Design Kit 
* [Storybook] - Design System component library 
* [ReactJS] - Front-end enhanced for web apps!
* [React Native] - Mobile
* [Node.js] - Backend
* [Express] - API
* [Stripe SDK] - Stripe API SDK
* [Cypress] - Automation Testing [@sabrina-alves]

### Details

The app was built divided in three repositories. 
* [Figma Design] - Our UI base to build the sample
* [AWS Server running] - Hosting
* [Web app] - User will use to order Pizza and make his payment
* [Mobile app] - The delivery driver will use to check it out the orders and his balance.
* [AWS Server] - All of the server-side logic for both front end apps
* [Postman] - Collection of all endpoints available in AWS server


### Installation

requires [Node.js](https://nodejs.org/) v8+ to run.

Install the dependencies and devDependencies and start the server.

[AWS Server]: 
```sh
$ cd green-field-pizza-aws-server
$ npm install -d
$ node server
```


[Web app]: 
```sh
$ cd green-field-pizza-web-app
$ npm install -d
$ npm start
```


[Mobile app]: 
```sh
$ cd PizzaDeliveryApp
$ npm install -d
$ npm android / npm ios
```

Now you can hit the server and check the Web app is running on `localhost:3001`. And the server on `localhost:3000`, and you can check the orders made in the Mobile app.



### Contributors

- [@Nathaniel] - Designer & Developer
- [@Sabrina Alves] - Developer
- [@Sayuri Mizuguchi] - QA Automation Engineer


### Todos

 - Write unit Tests

License
----

MIT

[AWS](pastelink.com)
**Free Software, Hell Yeah!**

   [ReactJS]: <https://reactjs.org/docs/getting-started.html>
   [React Native]: <https://reactnative.dev/>
   [Figma]: <https://www.figma.com/design/>
   [Figma Design]: <https://www.figma.com/file/DEfun7NJzq086bbIubPtmV/Greenfield-Pizza?node-id=12%3A6>
   [node.js]: <http://nodejs.org>
   [express]: <http://expressjs.com>
   [Stripe SDK]: <https://stripe.com/docs/api>
   [Cypress]: <https://www.cypress.io/>
   [AWS Server]: <https://github.com/nathanielkess/green-field-pizza-aws-server>
   [AWS Server running]: <http://ec2-34-227-31-122.compute-1.amazonaws.com:3000/hello-world>
   [Mobile app]: <https://github.com/sayurimizuguchi/PizzaDeliveryApp>
   [Web app]: <https://github.com/nathanielkess/green-field-pizza-web-app>
   [Storybook]: <https://storybook.js.org/>
   [Postman]: <https://drive.google.com/file/d/1iu9rxkuv-KDw895QuhbuBvlT9mCxdtW0/view?usp=sharing>
   [@Nathaniel]: <https://github.com/nathanielkess>
   [@Sabrina Alves]: <https://github.com/sabrina-alves>
   [@Sayuri Mizuguchi]: <https://github.com/sayurimizuguchi>
   
