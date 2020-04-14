# TDDD27_2020_awesomewebproject

Functional specification:
-----------------------------
The purpose of the application is to allow a user to log-in and create a list
of their favorite movies.
1. The user is able to log-in and out of the application.
2. After creating a list item it's added to their account and 
they can add multiple movie titles and append relevant information
to that item. The movies can be filtered through different measurements
and can be viewed in a list format or a card-based format.
3. The user can POST items to the database, DELETE and GET.

Technical specification:
-----------------------------
The application will be using the MERN stack.

MongoDB ||
Express.js ||
React + Redux(For state handling) ||
Node.js

1. Client-side I also plan on using bootstrap or specifically reactstrap for easy
component building. However I would like a comment if this is allowed.
2. Mongoose will handle data sent to MongoDB. 
3. Nodemon will be used to run client and server-side at the same time. 
4. So far it's not determined but I think I will use Heroku for deployment and 
try Jenkins for build-tools.
5. For authentication of users I'm thinking about using Octa or Auth0, however
I'm still looking into using the most simplistic of authentication.
