# ToDoListAPI
Backend application that creates database with sample tasks to do and api to connect it with frontend,
and dynamic generated html file

How to run app:
  - run terminal in folder project
  - npm install mongodb mongoose
  - download mongodb, install and run server
  - connect your server to the app(if you didnt change anything in the host of the server just leave it as it is)
  - run in terminal node server.js
  - open your browser and GET localhost:8080 (you will see automatically generated html)
  - GET localhost:8080/api/tasks (you will see sample tasks, choose 1 and copy _id of it)
  - GET localhost:8080/api/task/${PASTE _id YOU COPIED IN THE STEP BEFORE}
    (now you will see one task from mongo that is searched by id)
