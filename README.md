# AngularJs
Help &amp; Tips in angularjs framework . Angular v1.5

# AngularJS With some Examples

On a high level, AngularJS is a framework that binds your HTML (views) to JavaScript objects (models). When your models change, the page updates automatically. The opposite is also true – a model, associated with a text field, is updated when the content of the field is changed. Angular handles all the glue code, so you don’t have to update HTML manually or listen for events, like you do with jQuery. As a matter of fact, none of the examples here even include jQuery!

To use AngularJS, you have to include it in your page before the closing

## Build targets
    <body>



  tag. Google’s CDN is recommended for a faster load time:

<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.0.7/angular.min.js"></script>
AngularJS gives you a large number of directives that let you associate HTML elements to models. They are attributes that start with ng- and can be added to any element. The most important attribute that you have to include in any page, if you wish to use Angular, is ng-app:

<body ng-app>
It should be added to an element that encloses the rest of the page, like the body element or an outermost div. Angular looks for it when the page loads and automatically evaluates all directives it sees on its child elements.

Enough with the theory! Now let’s see some code.
