@sanity
Feature: Login
In order to perform sucessful login
As a user
I want to enter correct username and password

#Scenario Outline: In order to verify login to facebook
#		Given user navigates to facebook website
#		When user validates the homepage title
#		Then user entered "<username>" username
#		And user entered "<password>" password
#		And user selected the Age Group
#		| Age 		 | Location|
#		| above 18 | India	 |
#		| below 18 | USA		 |
#		Then user "<Logintype>" sucessfully logged in
#		
#Examples:
#|username | password | Logintype|
#|valid		|valid		 |	should	|
#|invalid	|invalid	 |shouldnot	|


  Scenario: Login into the application with valid credentials
  	Given I am on the Login page URL "https://www.amazon.in/"
    Then I click on sign in button and wait for sign in page
    Then I should see Sign In Page
    When I enter username as "testusername"