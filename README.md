HW1.P1
==============

## Part 0

Basic course setup.

##### Slack+Moodle

Properly setting up your Slack and Moodle profile by providing a picture will help the teaching staff learn your name. Upload a current headshot picture of you (not anyone else, not a cartoon picture of you, etc.) to your Moodle profile. For Slack, make sure you have your first and last name as part of your profile. Use [US passport photo guidelines](http://travel.state.gov/passport/pptphotoreq/photocomptemplate/photocomptemplate_5297.html). (10 points)

##### Github

Sign into [NCSU's GitHub](https://github.ncsu.edu/). Create a *private* repo called CSC326-HW1.P1. (10 points). Go to Settings, Collaborators and Teams, and add your lab TA as a collaborator (using their unity id).

## Part 1

Write a "single-page app" and develop its configuration management.

**Goal**: Gain experience with the following technologies:

[Bootstrap 3](http://getbootstrap.com/), [knockoutjs](http://knockoutjs.com/), [less](http://lesscss.org/), javascript, [grunt](http://gruntjs.com/), [bower](http://bower.io/), [npm](https://www.npmjs.org/)

**Learning outcome**: Realize that most software engineering projects will require learning many technologies together.  Gain experience in using configuration management tools, such as grunt and bower, to help bridge the multiple technologies in a single process.

#### Getting Started with your Template

Get the project template using git:

* 0) Install [git-scm](https://git-scm.com), and [node.js v4.2.4](https://nodejs.org/en/).

* 1) `git clone https://github.com/CSC-326/HW1.P1.git`

* 2) Run `npm install` to get project dependencies installed (grunt, bower). npm is installed when you install node.js.
     To make it easy to run, you might want a global install of grunt/bower: `npm install bower -g`, grunt with `npm install grunt-cli -g`.


* 3) Run `bower install` to get web dependencies installed (e.g., bootstrap).

* 4) Test out grunt by running `grunt less` to run the less task that will compile the bootstrap less file into a css file usable by your site.  

* 5) Open `www\index.html` in your browser. It should look pretty broken.

## Part 2

The main goal of this section is to use configuration management tools to ensure you have all the tools and steps needed to view the webpage.

#### Install missing components using bower.

Use [bower](http://bower.io/) to install additionally install:

* d3
* jQuery

You can edit the bower.json file or simply use the `-S` option to save dependencies directly when installing the new files. (20 points)

#### Use [grunt](http://gruntjs.com/) to manage build tasks.

Grunt is a task and build manager. Tasks are used to 
Create a grunt task to:

* 1) Extend current `less` task to compile an additional `local.less` file, containing your custom presentation elements into a css file. (15 points)
* 2) Create a new grunt task, called `package` to concat all javascript libraries into a single `"www\js\libs.js"` file. (15 points)

To help with step 2, the following snippet will be helpful:

```
bower_concat:
	  {
	  		all: 
	  		{
	  			dest: 'www/js/libs.js'
	  		}
	  }
```
You can rename tasks with `grunt.registerTask('package', 'bower_concat');`

* Bonus: 5 points. Add a new grunt task such as minification or validation using jshint.

## Part 3

If you successfully complete Part 2, you should be able to see webpage like the following:

![image](https://cloud.githubusercontent.com/assets/742934/12285874/d2282f30-b98c-11e5-80b9-aabb09363f8d.png)

#### Customize app content and javascript

* 1) Use [bootstrap 3](http://getbootstrap.com/) to create responsive layout (resilient to mobile screen sizes). A good resource for understanding the grid layout system: [Bootstrap Grid Explained](http://www.helloerik.com/the-subtle-magic-behind-why-the-bootstrap-3-grid-works).  Bootstrap simply provides a set of predefined css classes for helping layout the website.  
 `www/index.html` Already contains a basic layout using bootstrap.  Any additional css classes should be defined in your `local.less` file.

  **Fill in basic text and content** (20 points).

  If you want to replace visualization, you can find other examples here:  See http://bl.ocks.org/mbostock for inspiration (you can directly use any example as well).

* Bonus: Add interactive content using jQuery. (5 points).

## Part 4

Verify your assignment works by cloning your repo on a fresh directory location. Repeat the setup step in part 1. Additionally run, `grunt package`. Open `www\index.html` and verify the site looks correct. You should not be checking in node_modules, bower_components, or www\css\*.css or www\js\libs.js.

Create a branch gh-pages in your repo.  You should be able to see your webpage online, Example:

* Code: https://github.ncsu.edu/cjparnin/WebTest/tree/gh-pages
* Site: https://github.ncsu.edu/pages/cjparnin/WebTest/

10 points.

## Submission

Submit your link to your github repo on moodle.

Create a file HW1.P1.md which briefly describes your homework assignment and includes a screenshot of the final page. Describe any bonus work you have done.

**Due Wednesday, January 20th, 11:55pm**

## Grading

You will be graded on the configuration management of your app as well as your use of technology in building the app.

**NO CREDIT IS GIVEN** if scripts are embedded in script html or are hotlinked to an external page. They need to be loaded via www\js\libs.js that is generated by grunt.

* Moodle and Slack - 10%
* Github Repo - 10%
* Bower components (bower.json) - 20%
* Grunt tasks - 30%
* App layout and content - 20%
* gh-pages branch - 10%
* Bonus: jQuery - 5%
* Bonus: Extra grunt task - 5%
