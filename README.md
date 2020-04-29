# PollingApp

Install dependencies- npm install

Start server-npm start

1.Create question: POST-http://localhost:8002/api/v1/questions/create

Go in postman -> body -> x-www-form-urlencoded. Add title:"Question".

2.Add option: POST-http://localhost:8002/api/v1/questions/:id/options/create

x-www-form-urlencoded. Add text:"Option"

3.Get question and its options. GET http://localhost:8002/api/v1/questions/:id

4.Delete Question- DELETE-http://localhost:8002/api/v1/questions/:id/delete

5.Add vote. PUT-http://localhost:8002/api/v1/options/:id/add_vote

6.Delete option. DELETE-http://localhost:8002/api/v1/options/:id/delete

