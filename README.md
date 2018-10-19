# Getting Started with DevOps

Continuous Integration and Continuous Deployment is essential for companies that want their developers to be able to deploy code quickly, efficiently, and with minimal application downtime. 

In this workshop, you will get a taste of what it takes to setup a CI/CD pipeline using CircleCI and Heroku. For the workshop, we will provide you with a working application with a functional test suite. 

By the end of this workshop, you will be able to:
1. Manually run the application test suite
1. Manually deploy the application to Heroku
1. Configure CircleCI to run your test suite 
1. (Stretch) Configure CircleCI to deploy your app to Heroku if all tests are passing

## Prerequisite
* A github account
* A heroku account

## Steps to configure CircleCI to run your test suite
1. Fork and clone this repo
1. Sign up for CircleCI with your GitHub account
1. Connect Desired Repo
1. Create .circleci directory
1. Create `config.yml` file in .cirecleci directory
1. Configure files
    - Copy and paste `config_template.yml`
    - Change docker image type to cypress/base:8
    - Add the commands you use locally 
    - Commit and push; check tests on CircleCI


Workshop Video: [https://youtu.be/MKBn587MLQc]()

Workshop Survey: [https://goo.gl/forms/2emR6jzk1d9l6xL42]() 

   * Please take the survey if you do this workshop in person or on your own! 


