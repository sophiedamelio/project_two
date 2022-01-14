
 phone - 640 or less
 tablet - 641-949
 desktop - 940 or more
 
 
 @mobile: ~"only screen and (max-width: 640px)";
 @tablet: ~"only screen and (min-width: 641px) and (max-width: 949px)";


/* for Mobile */
 @media @mobile {
     .sqs-block-image {
         width: 30%;
         margin: 0 auto;
    }
}

/* for Tablet */
 @media @tablet {
     .sqs-block-image {
         width: 30%;
         margin: 0 auto;
    }
}




## Wishlist App

This is my wishlist app, created to help you keep track of all of the things you want to buy. 
___

screenshots (add last)
### User stories to go with screenshots

___

### The technologies I used to build this game are:
- JavaScript
- EJS
- SCSS framework for CSS
- Node.js
- Express
- Mongoose for mongoDB
- Google OAuth

___

### Getting started:

#### Planning, wireframes, ERD, and user stories are on [this Trello board](https://trello.com/b/vQ7wqLNI/p2)


You can login using Google and create lists. To add items to a list you can click on the list you want to add to, then add items on the list details page. Everything is automatically saved and tied to only your account.

#### Launch the app and get listing [here](https://sophie-project-two.herokuapp.com/)

___

### Planned future enhancements:
- Add ability to rate importance of an item from 1-5 stars.

- Add ability to see the 'purchased' items from any given list on another view.

- Add ability to make book specific lists (have a slightly different input to add, including author and title).

- Make designs responsive.