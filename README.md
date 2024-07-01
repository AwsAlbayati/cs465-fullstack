Architecture

In our full stack project, we utilized both traditional server-side rendering with Express HTML, JavaScript, and a Single Page Application (SPA) built with Angular. Express handled routing and server logic, rendering HTML templates dynamically. This approach was suitable for simpler, content-driven pages where full page reloads were acceptable. The SPA, on the other hand, leveraged Angular for a more interactive and responsive user experience. Angular's component-based architecture allowed us to create reusable UI components like navigation bars and booking forms, enhancing maintainability and scalability.

The decision to use a NoSQL MongoDB database for the backend was driven by the flexibility it offers with its schema-less structure. This flexibility was advantageous in our dynamic application where data models could evolve over time without strict schema requirements. MongoDB's ability to store JSON-like documents also aligned well with our use of JSON (JavaScript Object Notation) for data interchange between the frontend and backend.

Functionality

JSON (JavaScript Object Notation) is a lightweight data-interchange format that is easy for humans to read and write, and easy for machines to parse and generate. It differs from JavaScript in that JSON is purely a data format, while JavaScript is a programming language used for implementing logic and behavior in applications. In our full stack project, JSON served as the primary format for data communication between the frontend (Angular) and backend (Express). Angular's HTTP client module facilitated seamless communication with the Express API endpoints, exchanging JSON data for operations like fetching tour information and submitting bookings.

During our development process, refactoring code to improve functionality and efficiency involved restructuring Angular components and services to enhance code reuse. By extracting common UI elements into reusable components (e.g., navigation bar, booking form), we reduced redundancy and maintenance effort. This approach not only streamlined development but also ensured consistency across the application's UI. Benefits included faster development cycles for new features and easier maintenance as the project scaled.

Testing

Testing API endpoints in a full stack application involves various methods to validate functionality, performance, and security. Tools like Postman or Jest are used for unit testing Express routes and middleware, ensuring correct request handling and response generation. Integration testing with frameworks like Supertest verifies the interaction between Angular components and Express APIs, validating data flows and error handling. Security testing involves checking for vulnerabilities such as SQL injection or cross-site scripting (XSS), ensuring secure data transmission and storage practices are implemented across the application's layers.

Reflection

This course has been instrumental in advancing my professional goals by equipping me with comprehensive skills in full stack development. I have learned to proficiently navigate and integrate frontend technologies like Angular for dynamic user interfaces and responsive applications. On the backend, I have gained expertise in utilizing Node.js with Express for robust API development and MongoDB for efficient data storage and retrieval. These skills have not only enhanced my technical capabilities but also positioned me as a more marketable candidate in the competitive field of web development. The hands-on experience gained through this course has significantly bolstered my confidence in tackling real-world projects and adapting to evolving industry standards and technologies.
