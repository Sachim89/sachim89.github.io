var app = angular.module('ResumeApp',['ngRoute','ngAnimate','ui.bootstrap','ui.router'])

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/Home');
 
    $stateProvider 
        .state("Home", {
            url:'/Home',
			templateUrl: "views/Home.html",
			controller: "HeaderCntrl"
		})
        .state("Experience", {
            url:'/Experience',
			templateUrl: "views/Experience.html",
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
        .state('Contact', {
            url:'/Contact',
            templateUrl: "views/Contact.html"
        });
 
}]);

app.controller('NavController', function ($scope, $location) {
    $scope.isCollapsed = true;
    $scope.$on('$routeChangeSuccess', function () {
        $scope.isCollapsed = true;
    });
});

app.controller('HeaderCntrl',['$scope', function($scope) {
        $scope.appDetails = {};
        $scope.appDetails.title = "SARANYA MANOHARAN";
        $scope.appDetails.tagline_1  = "Welcome to my portfolio."
        $scope.appDetails.tagline = "Let's explore my site to get a better understanding of my specialties, projects and professional experience. What you’ll find here is a combination of commissioned work, as well as some passion projects. Enjoy browsing, and get in touch with any questions.";
}]);

app.controller('ExpCntrl',['$scope', function($scope) {
        $scope.experience = {};
        $scope.experience.title = 'PROFESSIONAL EXPERIENCE';
        $scope.experience.tagline = 'With hard work and dedication, I’ve established a strong career in this industry. Each role has been a dynamic endeavor, providing me with an opportunity to develop both personally and professionally.';        
        $scope.experience_1 = [
            {title: 'SOFTWARE ENGINEER INTERN', company: 'Aware Inc, Biometrics Software, Bedford, MA', year: 'May 2017 - August 2017',
            responsibilities: 'Created an Responsive Web Design using HTML5, CSS3, Bootstrap, JavaScript, JQuery, AJAX, XML, RESTful services, JSON parsing.'}];
        $scope.experience_2 = [
            {title: 'PROGRAMMER ANALYST', company: 'Cognizant Technology Solutions, India', year: 'December 2012 - May 2013',
            responsibilities: 'Designed and implemented web applications using C#, ASP.NET, HTML, CSS and JavaScript. Developed database in SQL Server and integrate them in the applications.'}];
}]);

app.controller('ProjectCntrl',['$scope', function($scope) {
        $scope.project = {};
        $scope.project.title = 'PROJECTS';
        $scope.project.tagline = 'Through my work on these projects, I’ve developed a great skillset providing me with a chance to grow my technical and interpersonal skills.  I gauge success based on not only my work, but the work of my team. The experience and knowledge I achieved through each project is an added value to my career endeavors.';
        $scope.project_1 = [
            {name: 'PREFACE SDK: BIOMETRIC WEB SERVICES',
            descrp: 'Created an Responsive Web Design using HTML5, CSS3, Bootstrap, JavaScript, JQuery, AJAX, XML, RESTful services, JSON parsing.'}];
        $scope.project_2 = [
            {name: 'GOATRUNNER SHUTTLE SERVICE WEB APPLICATION',
            descrp: 'Developed a web application that provides Shuttle Cab booking service to university students using HTML5, CSS3, Bootstrap, JavaScript, JQuery, Java and SQL.'}];
        $scope.project_3 = [
            {name: 'RESTAURANT LOCATION: A RECOMMENDATION SYSTEM',
            descrp: 'Designed and developed an analytics model that recommends optimum locations for setting up restaurants for maximum profitability and perennial revenue using Java Eclipse IDE'}];
        $scope.project_4 = [
            {name: 'WORD SWEEPER: GAME IMPLEMENTATION',
            descrp: 'Designed and implemented server system for the word game - word sweeper which handled multiple clients based on MVC design pattern and implemented it using Java in Eclipse IDE.'}];
}]);

app.controller('IndepProCntrl',['$scope', function($scope) {
        $scope.indeproject = {};
        $scope.indeproject.title = 'INDEPENDENT PROJECTS';
        $scope.indeproject.tagline = 'Technology is evolving, Requirements are changing. It is vital to learn new technologies and keep growing rather than sitting idle and lagging behind. “Utilize the time, create a chance, improve your knowledge”, this motto keeps me motivated and directs me towards the right successful career path. To be a part of this tremendously growing tech-era, I have created few projects out of my interest thereby honing my technology skills and building a diversified high technology skill set. ';
        $scope.project_1 = [
            {name: 'CUISINE PLATTER',
            descrp: 'To be uploaded'}];
}]);

app.controller('AboutCntrl',['$scope', function($scope) {
        $scope.about = {};
        $scope.about.title = "About Me";
        $scope.about.descrp  = "Computers have been the forefront of technology and have fueled different technologies making our lives better. The wide scope and its evolving impact have fascinated me since my childhood. This interest helped me pursue my career in the field of computer science. I did my undergrad in MS in Software Engineering in Vellore Institute of Technology. Currently a graduate student at Worcester Polytechnic Institute, Massachusetts, pursuing my masters in the field of Computer Science.";
}]);