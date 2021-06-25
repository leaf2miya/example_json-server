# example_json-server
json-server example actions
## Environment
  * docker (with docker-compose)
## Components
  * npm
  * nodejs
  * json-server(typicode/json-server)
## Getting started
  ```
    $ docker-compose build [options]
    $ docker-compose up [options]
  ```
## Default Actions
 * routes

   | Request method | Request path        | note                             |
   | -------------- | ------------------- | -------------------------------- |
   | GET            | /dummy_resouces     | get all dummy_resources          |
   | GET            | /dummy_resouces/:id | get id dummy_resources           |
   | POST           | /dummy_resouces     | post data to dummy_resources     |
   | PUT            | /dummy_resouces/:id | put id data to dummy_resources   |
   | DELETE         | /dummy_resouces/:id | delete id data to dummy_resouces |

## Registered Example Actions
 * routes

   | Request method | Request path        | Request body        | note                                                   |
   | -------------- | ------------------- | ------------------- | ------------------------------------------------------ |
   | POST           | /json               | to_error="1"        | GET id:2 of dummy_resources                            |
   | POST           | /json               | to_plain="1"        | GET id:3 of dummy_resources. (content-type: text/html) |

## Custom
 * server.js  
   edit json-server action
 * db.json  
   edit resource data