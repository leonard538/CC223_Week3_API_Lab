# API Development and Microservice  

This Node.js API activity uses JWT to allow users to authenticate themselves and protect specific routes from unauthorized access.  
Express.js is used in the building phase of the API, while bcrypt.js (password hashing) and jsonwebtoken (JWT) are used for 
user authentication to ensure safe access.  


 ------


 
**server.js** – API server handles JWT-based security and authentication (register & log in).  
**product-service.js** –  product service that needs to be authenticated to be accessed.  
**package.json** - manages dependencies.  
