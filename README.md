This is originated as https://github.com/pg0408/lorem-ipsum-demo
specifically:
https://www.freecodecamp.org/news/how-to-deploy-your-site-using-express-and-heroku/

npm install
node server.js

-- or to avoid rerunning server.js a lot --

add to package.json
  "scripts": {
    "start": "node server.js"
  },
-- and use nodemon ...node monitor --

npm install nodemon --save-dev
npm run start
