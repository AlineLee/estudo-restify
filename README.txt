node server.js

curl -s http://localhost:8080/

curl -s http://localhost:8080/hello/sebastiao

curl -s http://localhost:8080/user

curl -s http://localhost:8080/user -H 'accept-version: ~1'

curl -s -X POST -d "name=Josefina" http://localhost:8080/newuser

curl -s --header "info: 123" http://localhost:8080/
