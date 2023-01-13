# ASSESSMENT 4: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is object-oriented programming? How is it different than functional programming?

Your answer:  Object-oriented programming is a way of looking at computer programming that organizes software design around data or objects.  Data or objects are defined as a piece of data with its own unique attributes and behaviour.  The difference between Object-Oriented Programming and functional programming is that functional programming focuses more on the logic or functionality of the program, rather than the data.

Researched answer:  During my research, I noted that there are 4 main principles of object-oriented programming are that of abstraction, encapsulation, inheritance, and polymorphism; among the best features of these principles are that they allow us to write more testable, flexible, and maintainable code.

    1. Abstraction is the root principle of design, in that the user does not need to know how it works, only that it does.  One example of this would be a TV remote. The user does not care how it works, only that it does.
    2. Encapsulation is the principle that objects contain states, decisions are made based on those states, and those objects relay messages to other objects asking for help in fetching or computing things.  One example of this is that encapsulation combines data and related behaviour to simplify usage and act as a single place for relevant logic, similar to a network of computers.
    3. Inheritance is the ability of code to be reused more than one time.  This is a key component to object oriented programming, and allows code to be more driven by data.  One factor in code reuse, however, is the so-called "Rule of Three".  This principle specifies that if you are seeing duplication in code three times, there is a need to refactor it into an abstraction.  One example of this is that if we are using an accounting software, if the fecthing logic is duplicated across three different API's, such as billing, users, and forums, then the logic needs to be rewritten so that it is reusable without being duplicated in each of the user interfaces.
    4. Polymorphism allows designing your use cases and algorithms in such a way that we always get the same high-level behaviour, even though the low level behaviour at run-time is dynamic.  The REACT component example is a prime example of this, in that the user sees the dynamic behaviour in real time, even if he does not see the algorithms behind that real time dynamic behaviour. 

1. What is the difference between a Float and an Integer in Ruby?

Your answer:  Integer and Float are two distinct types of data in Ruby.  Where some programming languages, such as JavaScript, make all numbers a single type of data, while in Ruby, if you do not specify a decimal in the data type, it will be defined as an Integer.  If you utilize a decimal point in Ruby, you are declaring that to be a FLoat data type, which is a separate and different data type with its own rules and behaviour. 

Researched answer: One thing I found in my research is that there is a function that will allow an integer data type to be re-assigned a s a float data type.  The to_f function will attempt to convert an integer into a float,; if it cannot be done, then it will return infinity.

1. Ruby has an implicit return. What does that mean?

Your answer: The implicit return of a Ruby method is the final statement inside the method.  This means that you do not have to declare a "return", although it is not taboo to do so.  If a programmer choices to add a retrun to the function, it is acceptable; however, Ruby programmers tend to not do so unless it is a very big method.

Researched answer: The fact of implicit returns in Ruby means that Ruby will return the value of the last evaluated expression. Because of this, it is imperative that the programmer know the behaviour and implementation of the method in order to know exactly how the program will act.  In order to check each iteration of a method, it is possible to use the #each and #map functions in Ruby.

1. What is a block in Ruby?

Your answer:  In Ruby, a block is a piece of code with a distinct name assigned to it, and is enclosed in curly braces{}.  A block is always involed from a function with that same name.  In other words, if you create a block called practice, it can be invoked by using the function practice to call it.

Researched answer: Ruby blocks are anonymous functions that can be passed into methods.  Blocks are either enclosed in DO-END statments or in curly braces{}.  Do-End blocks are typically those that contain more than a single line of code, while curly braces are more often used for single line code blocks.

1. How do you extract a value in a Ruby hash?

Your answer: In order to extract a specific value from a Ruby hash, it is necessary to specify what key you want the value of in a particular hash.  In other words, if you have a key of email, then it can be used to dictate that you return the values contained in the key of email.  One benefit to the use of key: value pairings in Ruby is that you can utilize more than one key in the extraction of values.  One use of this would be to get the first name and work phone number of the contacts in your phone.  You are able to retrieve these without extraction any other data from your contact list.

Researched answer: One way of looking at this as opposed to a SQL query, is that you have to dictate specifically what you want to pull out or put into a key: value pairing in a database.  Using Ruby hashes is a quicker simpler way to do the same thing, because it is not required to do this.  
    An example of a SQL query would be as follows:
        INSERT INTO users (first_name, last_name, email) VALUES (John, Doe, john@email.com)

    Opposed to this is the same statement in Ruby using json:
           {"first_name"=>"John", "last_name"=>"Doe", "email"=>"john@email.com"}

Using Ruby hashes is more straightforward and self-explanatory.

 
## Looking Ahead: Terms for Next Week

1. Class Inheritance: In Ruby, this is a very important distinction in that it is among the most important feature in Ruby.  Because Ruby is an object-oriented language, inheritance allows the programmer to inherit the characteristics of one class into another class.

2. RSpec:  Using RSpec in Ruby is similar in a way to using JEST testing in JavaScript.  It is a testing framework designed to allow programmers to create tests of a Ruby function and verify its re-usability prior to its implementation.

3. CRUD: CRUD is an acronym used in relation to SQL queries.  CRUD stans for CREATE, READ(select), UPDATE, and DELETE statements in SQL Server.  CRUD in database terms can be mentioned as a Data Manipulation Language (DML) statements, in that it allows the management and manipulation of data inside the database tables.

4. Test-driven development:  Test-Driven development refers to the software development process is that the requirements are being converted into test cases prior to the software being fully developed, as well as tracking all software development by repeatedly testing the software against all test cases.  This is important, in that it is common for a piece of software to work in most situations, but it is possible for the user to input something that "breaks" the code.  By using TDD, it dictates that the code is tested repeatedly against all possible entries prior to its release to the user.

5. HTTP: HTTP is a phrase that refers to HyperText Transfer Protocol, an application-layer protocol for transmitting hypermedia documents like HTML.  HTTP uses a client-side server model, because it uses a client to open the connection and then waits for the response.  It is also a stateless protocol in that it does not keep any data between the two requests.
