# Getting Started with DevOps

Continuous Integration and Continuous Deployment is essential for companies that want their developers to be able to deploy code quickly, efficiently, and with minimal application downtime. 

In this workshop, you will get a taste of what it takes to setup a CI/CD pipeline using CircleCI and Heroku. For the workshop, we will provide you with a working application with a functional test suite. 

By the end of this workshop, you will be able to:
1. Manually run the application test suite
1. Manually deploy the application to Heroku
1. Configure CircleCI to run your test suite 
1. (Stretch) Configure CircleCI to deploy your app to Heroku if all tests are passing

## Prerequisite
* A [github account](github.com)
* A [heroku account](heroku.com)

## Steps to configure CircleCI to run your test suite
1. Sign up for CircleCi with your GitHub account
2. Connect Desired Repo
3. Create .circleci directory
4. Create yaml file in .cirecleci directory
5. Configure files
    - Copy and paste CircleCi example yaml
    - Change docker image type to cypress/base:8
    - Yarn Install or NPM Install
    - Add Node Server Steps



