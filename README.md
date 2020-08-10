<h1>UDEMY QUIZ TAKER APPLICATION</h1>
<h4>Technical Stack: </h4> React FrontEnd, Django Backend, SQL Database.

<h3>Intro</h3>
The Main focus on this quiz-taker application is creating a single quiz, with a few questions, and each question has multiple choices with only one correct answer.
For people who want to review this code, the 'root app' as well as the 'frontend' is in 'quiz-taker' while the backend handling is in 'quizzes'.

<h4><a href='http://nick-quiz-taker.herokuapp.com'>LINK TO WEBAPP</a></h4>
<h3>Architectural Choices</h3>

For this mini-project I decided to have the backend handle most backend-related things such as managing the database and setting up the API for the frontend to hook into and grab the quizData from. Meanwhile the frontend can handle more of the bigger tasks such as giving the user feedback on their quiz and displaying the quiz in an intuitive way for the user to answer.

To solve this set of problems, I created my quiz in the backend using an SQL database to store this single quiz. The three models I used to create this database was a Quiz, a QuestionBlock, and Choices. Each Quiz consists of a title and 1+ QuestionBlock. Each QuestionBlock consists of the question itself, and 1+ Choices. Here, a Quiz has a one-to-many relationship with a QuestionBlock and a QuestionBlock has a one-to-many relationship with a Choice.

My Solution is mostly a frontend solution as the backend is mostly just there for the database; the frontend handles most of hte logic. The reason is that I would like to reduce as many API calls as possible since in a real-world case, the frontend and backend will probably act as separate apps. Therefore, users might get some noticeable lag or waiting times if both ends have to constantly communicate with each other. It is more efficient to just handle it in the frontend where the user is actually interacting with the app.

Hooking the frontend and backend together I had a few choices. One was to have both ends separate from each and hook the two applications together by having the backend act as an API. This actually is the most scalable choice if I was making a bigger application. However this is a smaller application plus the hassle with operating with two deployed applications at the same time proved that this wouldn't be the optimal choice toward a quicker development cycle of a smaller sized project.

The other choice was to create the React App frontend within my Django project. This proved to be a more efficient as I now only needed to deploy one app, and hooking between the two app is relatively easy as its the same as a GET Request for a different URL of the same web application. The problem with this choice is that as my project gets larger it would be more difficult to manage the stack if let's say we had a big group working on the project (like a team for front-end and backend respectively). Causing problems/bugs in the frontend might cause problems with the backend and vice-versa. Definitely the previous choice is overall better for scalability but this one still proves efficient for the job done.

<h3>TESTING</h3>
For testing, I did Unit testing in the backend for things such as proper model creation and sanity checks in regards to the relationships between these models. In the frontend, I mostly did visual testing as the application is small enough to find most problems through a visual review and a quick QA sweep to catch any bugs.

<h3>Rooms for improvement: </h3>
There are plenty of features for the quiz that I would wish to implement in the future (possibly in a branch of this current repo): better visual UI and styling, quiz creation from the frontend side, proper unit testing on the frontend.

Also one thing I left out that I think would be fun is custom messages depending on how the user did on the test.

On an architectural level, if I didnt have to create a backend per the instructions, I would simply make an app on the frontend and import the manual data I created myself as a JSON (reason is because majority of the logic is on the frontend and my implementation of the backend just creates the data for the frontend to import). However, if I had to make a more involved system which would have other models such as Users and History, then the current system I made with the backend would be of much more significant use.


I think the most difficult part of the project was deployment as I had to transition from SQLite to Postgresql per heroku's limitations. Concurrently I had to deal with some file management issues as I originally had the package.json file within frontend but that proved to be a bigger hassle so I moved it into the root as well. ~~I also couldn't get the project to run without debug=True currently but I think with a little more time I could fix that issue (might be able to soon as I get a handle of what to do with static files on heroku)~~ (Completed this task, everything works as if it was made for production now!). To amend these issues, I'll crank out a bit more practice in deploying projects and using cloud services as a whole. 

I wanted to make an implementation that would require frameworks and design patterns closer to real life large scaled projects, but I have to take into account development efficiency just so I can deploy in a timely manner which results in the compromises discussed in this README. I hope this was interesting for whoever reading this can see into my thought patterns and design choices.



