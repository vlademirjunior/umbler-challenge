# Why the "services" directory?
~~~~
- This layer is a design pattern that helps to abstract your business rules, leaving your "Controller" cleaner and with sole responsibility.
- Another important point is that as your application grows you tend to reuse the codes already implemented in this layer. 
- Imagine that you have three controllers that make use of a service and you need to change some part of the code, obviously you will only use one function in the service to change, imagine if we didn't have this layer? 
- We would have to go looking for in our project all the places that make use of that code snippet.