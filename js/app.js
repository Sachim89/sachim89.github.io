var app = angular.module('ResumeApp',['ngRoute','ngAnimate','ui.bootstrap','ui.router'])

app.config(['$stateProvider', '$urlRouterProvider','$uiViewScrollProvider', function($stateProvider, $urlRouterProvider,$uiViewScrollProvider) {
    $uiViewScrollProvider.useAnchorScroll();
    
    $urlRouterProvider.otherwise('/Home');
    
    $stateProvider 
        .state("Home", {
            url:'/Home',
			templateUrl: "views/Home.html",
			controller: "HeaderCntrl"
		})
        .state("Aware", {
            url:'/Aware',
			templateUrl: "views/Aware.html",
			controller: "ExpCntrl"
		})
        .state("Cognizant", {
            url:'/Cognizant',
			templateUrl: "views/Cognizant.html",
			controller: "ExpCntrl"
		})
        .state("CaseStudy", {
            url:'/CaseStudy',
			templateUrl: "views/CaseStudy.html",
			controller: "ExpCntrl"
		})
        .state("Tcps", {
            url:'/Tcps',
			templateUrl: "views/Tcps.html",
			controller: "ExpCntrl"
		})
        .state("ShuttleService", {
            url:'/ShuttleService',
			templateUrl: "views/ShuttleService.html",
			controller: "ExpCntrl"
		})
        .state("PersonalProject", {
            url:'/PersonalProject',
			templateUrl: "views/PersonalProject.html",
			controller: "ExpCntrl"
		})
        .state("Projects", {
            url:'/Projects',
			templateUrl: "views/Projects.html",
            controller: "ProjectCntrl"
		})
        .state("IndepProjects", { 
            url: '/IndepProjects',
            templateUrl: "views/IndepProjects.html",
            controller: 'IndepProCntrl'
		})
        .state("About", {
            url: '/About',
            templateUrl: "views/About.html",
            controller: 'AboutCntrl'
		})
 
}]);

app.controller('NavController', function ($scope, $location) {
    $scope.isCollapsed = true;
    $scope.$on('$routeChangeSuccess', function () {
        $scope.isCollapsed = true;
    });
});

app.controller('HeaderCntrl',['$scope', function($scope) {
        $scope.appDetails = {};
        $scope.appDetails.title = "HELLO";
        $scope.appDetails.tagline_1  = "My name is Saranya. Welcome to my portfolio."
        $scope.appDetails.tagline = "Let's explore my site to get a better understanding of my specialties, projects and professional experience. What you’ll find here is a combination of commissioned work, as well as some passion projects.";
}]);

app.controller('ExpCntrl',['$scope','$location', function($scope, $location) {
    
        /** AWARE **/
        $scope.aware = {};
        $scope.aware.title = 'FRONT-END DEVELOPMENT';
        $scope.aware.tagline = 'Developing web application for PreFace: Biometric Facial SDK';        
        $scope.aware.summary = 'In 2017, I had the chance to work with  Aware, Inc, Biometrics Solution as a Software Engineer Intern. I was responsible for developing web-based application for one of their Biometric SDK. I developed Responsive Web Design (RWD) using HTML5, Bootstrap, CSS3, JavaScript, JQuery, AJAX and JSON.';
        $scope.aware.learnt = 'Being a part of Aware was truly an enriching experience and provided me a great opportunity to learn other new web technologies and harness my technical and professional skills. Spending my summer working alongside with skilled engineers has really shaped my own experience as a Software Engineer.';
        
        $scope.aware_exp = [
            {title: 'Software Engineer Intern', company: 'Aware Inc, Biometrics Software, Bedford, MA', year: 'May 2017 - August 2017',
             project: 'Preface SDK: Biometric Web Services'}];
        $scope.aware_resp = [
            {
                re1: 'Developed fully functional responsive prototype using web technologies.',
                re2: 'Incorporated Face Detection library via Canvas and provided the user to adjust facial image metrics.', 
                re3: 'Dynamically appended facial image metrics into XML file and communicated with RESTful web services using AJAX for image construction.',
                re4: 'Retrieved constructed image and additional metrics by parsing multi-dimensional JSON objects.',
                re5: 'Tested the front-end code with multiple browsers to ensure cross-browser compatibility.'}];
        
        /** COGNIZANT **/
        $scope.cognizant = {};
        $scope.cognizant.title = 'PROGRAMMER ANALYST';
        $scope.cognizant.tagline = 'Building web applications in .NET Framework';        
        $scope.cognizant.summary = 'In 2012, I entered into professional environment from being a fresh graduate which helped me to shape my experience. As Programmer Analyst in Cognizant Technology Solutions, I received rigorous training in building web applications in .NET framework and I developed user interface for Online Recruitment Portal (mini project) using ASP.NET and C#.';
        
        $scope.cognizant_exp = [
            {title: 'Programmer Analyst', company: 'Cognizant Technology Solutions, India', year: 'December 2012 - Sep 2015',
             team: '.NET developer'}];
         $scope.cognizant_resp = [
            {
                re1: 'Designed and implemented a web application for Online Recruitment Portal in .NET framework using ASP.NET, C#, HTML, CSS, SQL server.',
                re2: 'Extensively worked on designing and implementing dynamic website using ASP.NET Web forms using drag-and-drop method.', 
                re3: 'Integrated ASP.NET Server controls to the webpage such as button, textboxes, labels and other familiar controls.',
                re4: 'Utilized ADO.NET for database connectivity and performed data retrieval, query, storage and manipulation on SQL Server.',
                re5: 'Involved in writing SQL queries based on Data Definition Language (DDL) for creating and defining database structure and Data Manipulation Language (DML) Statements for managing data within the database.',
		re6: 'Enhanced the presentation layer of the website using ASP.NET HTML and employed CSS techniques for styling server controls.'    
            }];
    
        /** DIPLOMA CERTIFICATION **/
        $scope.diploma = {};
        $scope.diploma.title = 'ADVANCED PROGRAMMING CERTIFICATION';
        $scope.diploma.tagline = 'Coursework includes C programming language and Object-Oriented Programming concepts in C++ and Java';        
        $scope.diploma.summary = 'In my high school, I spent my summer taking computer certificate courses. After my 10th grade, I enrolled myself in Advanced Programming certification coursework. \'Diploma in Advanced Programming (DACP)\' included the basics of C programming and OOPS concepts in C++ and JAVA. Being a computer enthusiast, I achieved National Level 10th rank in DACP coursework.';
        $scope.diploma.learnt = 'This course fulfilled my desire to learn more about Big Data Analysis techniques like Machine learning algorithms, Sentiment Analysis and so on. Being a part of this project helped me to understand the methodology behind Data Analysis and provided me a chance to learn and use different Data Visualization libraries in Python.';
        
        $scope.diploma_exp = [
            {title: 'Diploma Certification', certificate: 'Diploma in Advanced Computer Programming', year: 'April 2005 - June 2005',
             institute: 'TCPS, India'}];
        $scope.diploma_resp = [
            {
                /** C **/
                re1: 'Names, sizes and range of different datatypes in C programming language.',
                re2: 'Use of while, do..while and for loops.', 
                re3: 'Arithmetic operators including increment and decrement operators along with assignment operators.',
                re4: 'Understanding of relation, logical and comparison operators.',
                re5: 'Understanding the concept of ternary operators, sizeof() and operator precendence.',
                re6: 'Use of #include and #define C preprocessor directives.',
                re7: 'Use of union, structurs, pointers and string functions.',
                re8: 'Understanding the concept of local and global variables.',
                /** C++ **/
                re9: 'Use of nested loop and loop control statements, if, if..else, switch statements, arrays, strings, pointers and header files.',
                re10: 'Defining a function which includes return type, function name, function body and parameters.',
                re11: 'Understanding the oops concepts of classes, objects, encapsulation, inheritance, polymorphism, abstraction, interfaces, overloading.',
                re12: 'File handling functions, exception handling and dynamic memory location.',
                /** JAVA **/
                re13: 'Use of identifiers, modifiers, variables, arrays, comments and other oops concepts.',
                re14: 'Understanding string manipulation functions, constructors, destructors.',
                re15: 'Use and implementation of data structures such as queues, stacks, lists, maps.'}];
    
        /** CASE STUDY **/
        $scope.casestudy = {};
        $scope.casestudy.title = 'DATA SCIENCE CASE STUDY';
        $scope.casestudy.tagline = 'Analyzing Data from MovieLens to provide a possible solution of how a movie company could promote the movie';        
        $scope.casestudy.summary = 'For this Case Study, we used 1 million dataset from MovieLens and performed Data Analysis to provide a possible solution of how a movie company could promote the movie according to genre, age group, occupation and gender. This dataset consists of three data files, users, movies, and ratings files. We wanted to explore this data and get some useful insights from it as much as we can by analyzing data.';
        $scope.casestudy.learnt = 'This course fulfilled my desire to learn about Big Data Analysis techniques like Machine learning algorithms, Sentiment Analysis and so on. Being a part of this project helped me to understand the methodology behind Data Analysis and provided me a chance to learn and use different Data Visualization libraries in Python.';
        
        $scope.casestudy_exp = [
            {title: 'Data Scientist', team: 'Rishitha Kiran, Chu Wang, Di You', year: 'August 2017 - December 2017',
             course: 'DS 501 - Data Science'}];
        $scope.casestudy_resp = [
            {
                re1: 'Extensively worked on merging three data files obtained from MovieLens dataset into single Pandas DataFrame.',
                re2: 'Analyzed the data to provide top movies based on average rating over 4.5 and against men and women.', 
                re3: 'Performed analysis to provide top movies whose median rating is over 4.5 among men and women over age 30.',
                re4: 'Worked on plotting histograms based on ratings of all movies and number of ratings each movie received.',
                re5: 'Worked on providing some conjectures about the distribution of ratings among age groups.',
                re6: 'Calculated correlation coefficient between ratings of men and women',
                re7: 'Displayed scatter plot of men versus women against movie rating.',
                re8: 'Worked on determining unique genres and calculating average rating for each genre based on gender.',
                re9: 'Performed calculations on movie ratings for each genre based on age and location.',
                re10: 'Calculated average ratings for each genre based on occupation.'}];
        
        /** GOAT RUNNER **/
        $scope.shuttle = {};
        $scope.shuttle.title = 'SHUTTLE SERVICE WEB APPLICATION';
        $scope.shuttle.tagline = 'GoatRunner - Shuttle Service Web Application offers students to book cabs for providing easy transport to travel within 1 mile radius of University.';        
        $scope.shuttle.summary = 'GoatRunner is a Web application which offers students to book cabs. These services are available 24 hours and helps students for easy and secured transportation between places. It is developed based on Client-Server-Database architecture, in which the interface is built with completely responsive layout. The service layer is designed based on MVC design pattern which acts as an interface between the front end and the database. The database stores the required details in terms of tables. ';
        $scope.shuttle.learnt = 'In this course, I acquired more knowledge about Databases and Structured Query Language (SQL). As a part of this coursework, I was involved in developing Web application which was based on Client- Server- Database architecture. During the development of this project, I found myself fascinated in designing the front end of the application. I learnt many new methods and techniques in developing fully responsive and functional website.';
        
        $scope.shuttle_exp = [
            {title: 'Front End Developer', team: 'Rishitha Kiran, Apporva Lad, Jui Guram', year: 'January 2017 - May 2017',
             course_number: 'CS542', course: 'CS 542 - Database Management Systems'}];
        $scope.shuttle_resp = [
            {
                re1: 'The student should signup and create an account to book a ride using Signup Page.',
                re2: 'After the student creates an account, he/she should login using their student-id in the Login Page.', 
                re3: 'Once the student logs in, they can make a booking by specifying their source and destination locations along with number of passengers in the Booking Page.',
                re4: 'When the request for the cab is established. The server will validate the request and redirects to the Confirmed Booking page which holds the details of the name of the driver, cab number and arrival time.',
                re5: 'Student can cancel the booking within a specified time limit.',
                re6: 'The driver must login through Driver login page in which he/she will be able to view the current active rides associated with him/her.',
                re7: 'Admin can monitor the rides and view all the details regarding the cab and the rides associated with it in the Admin page',
                re8: 'The server should handle the requests from the front end and process accordingly.',
                re9: 'When the request for cab is established, the server should check the database and provide the available cab number to the front end.',
                re10: 'The database should have required tables and store necessary details.'}];
    
        /** PERSONAL PROJECT **/
        $scope.cuisine = {};
        $scope.cuisine.title = 'CUISINE PLATTER COOK BOOK';
        $scope.cuisine.tagline_1 = 'Cookbook to make your taste buds scream.';
        $scope.cuisine.tagline = 'Cuisine Platter is an online cook book which provides an array of recipes along with cooking instructions.'; 
        $scope.cuisine.summary = 'Cuisine Platter is a completely responsive Single Page Application(SPA) developed in AngularJS which provides a variety of cuisines and cuisine categories. It is developed using Model-View-Controllers(MVC) pattern. Cuisine platter web application provides you with an option to pick a cuisine category from a grid of cuisines. On selection of a cuisine, it displays an array of recipes which in turn provides you with cooking instructions and ingredients.';
        
        $scope.cuisine_exp = [
            {title: 'Front End Developer', year: 'January 2018 - Present'}];
        $scope.cuisine_resp = [
            {
                re1: 'Designed and implemented a web application that provides set of recipes using HTML5, CSS3, Bootstrap, JavaScript, AngularJS.',
                re2: 'Developed a responsive web application integrating Twitter Bootstrap with AngularJS.', 
                re3: 'Used AngularJS to create Single Page Application (SPA) which can bind data to specific views and incorporated Model-View-Controller pattern.',
                re4: 'Created Routing hierarchy for different views in single page application using AngularJS UI Router.',
                re5: 'Utilized AngularJS UI-Route for managing the State Transition and URL route.'
            }];
    
    
        /** PAGE DIRECTION **/
        $scope.experience_function = function(title){
           if(title  == 'Software Engineer Intern'){
               $location.path('/Aware');
            }
            if(title  == 'Programmer Analyst'){
               $location.path('/Cognizant');
            }
            if(title  == 'Data Scientist'){
               $location.path('/CaseStudy');
            }
            if(title  == 'Diploma Certification'){
               $location.path('/Tcps');
            }
            if(title == 'CS542'){
               $location.path('/ShuttleService');
            }
            if(title  == 'Front End Developer'){
               $location.path('/PersonalProject');
            }
        };
}]);

app.controller('ProjectCntrl',['$scope', function($scope) {
        $scope.project = {};
        $scope.project.title = 'PROJECTS';
        $scope.project.tagline = 'Through my work on these projects, I’ve developed a great skillset providing me with a chance to grow my technical and interpersonal skills.  I gauge success based on not only my work, but the work of my team. The experience and knowledge I achieved through each project is an added value to my career endeavors.';
    
        $scope.project_1 = [
            {name: 'RESTAURANT LOCATION: A RECOMMENDATION SYSTEM', year: 'Aug 2016 – Dec 2016',
             description: 'Designed and developed an analytics model that recommends optimum locations for setting up restaurants for maximum profitability and perennial revenue. Designed and executed Foursquare API pull based on latitude and longitude retrieved from Google Maps API for gathering POI data for data processing.'}];
        $scope.project_2 = [
            {name: 'DATA MANIPULATION IN HADOOP ECOSYSTEM', year:'Jan 2017 – Mar 2017',
            description: 'Worked in Ubuntu for developing MapReduce jobs to create and aggregate large datasets and implemented basic query operations on these datasets in Hadoop using Java. Implemented Spatial Join algorithm and K-Means algorithm by iterative MapReduce jobs.'}];
        $scope.project_3 = [
            {name: 'ADVANCED OPERATIONS IN MONGODB', year:'Jan 2017 – Mar 2017',
            description: 'Created database collection using MongoDB and applied CRUD (Create/Read/Update/Delete) and Bulk Write operations. Implemented Data Model Tree Structures with Parent References and Child References, Aggregation, Sorting, Indexing, Text search and Map-Reduce operations in MongoDB.'}];
        $scope.project_4 = [
            {name: 'YELP RECOMMENDER SYSTEM', year:'Aug 2017 – Dec 2017',
            description: 'Built a sentiment analysis model to predict whether a user liked a local business or not, based on their review on Yelp using Python’s Pandas, NLTK and Scikit-learn libraries. Built a model to recommend top restaurant in an area using k-means clustering, recommend potential friends to users based on similarity metrics and second level relationship, recommend potential users to business owners using Collaborative filtering.'}];
}]);

app.controller('AboutCntrl',['$scope', function($scope) {
        $scope.about = {};
        $scope.about.title = "SARANYA MANOHARAN";
        $scope.about.title_1 = "Hey there!";
        $scope.about.descrp  = "My name is Saranya Manoharan. I am a Computer Science graduate student from Worcester Polytechnic Institute, Massachusetts. I completed my undergraduate studies from Vellore Institute of Technology, India majoring in MS Software Engineering, which is a 5-year integrated course.";
        $scope.about.descrp_1 = "I have developed an excellent understanding of a wide range of programming languages and tools and have demonstrated this capability throughout my studies. To gain additional exposure, I dedicate myself for learning new technologies and languages and develop new projects, thereby honing my technology skills and building a diversified skill set suitable for a rewarding career.";
        $scope.about.descrp_2 = "With a full-time job in this new-age cutting edge technology field, I would definitely be able to build on my acquired knowledge and walk on a path to achieve a long lasting full-filling career within such field. After appraising my resume, you will definitely see me as an individual with great personality, excellent work ethics and immense potential in an organization.";
}]);
