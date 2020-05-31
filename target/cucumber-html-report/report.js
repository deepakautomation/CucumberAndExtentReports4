$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/login.feature");
formatter.feature({
  "name": "Login",
  "description": "In order to perform sucessful login\nAs a user\nI want to enter correct username and password",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@sanity"
    }
  ]
});
formatter.scenario({
  "name": "Login into the application with valid credentials",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@sanity"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on the Login page URL \"https://www.amazon.in/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "loginLogoutPageStepDefinitions.i_am_on_the_Login_page_URL(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on sign in button and wait for sign in page",
  "keyword": "Then "
});
formatter.match({
  "location": "loginLogoutPageStepDefinitions.i_click_on_sign_in_button_and_wait_for_sign_in_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see Sign In Page",
  "keyword": "Then "
});
formatter.match({
  "location": "loginLogoutPageStepDefinitions.i_should_see_Sign_In_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter username as \"testusername\"",
  "keyword": "When "
});
formatter.match({
  "location": "loginLogoutPageStepDefinitions.i_enter_username_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
});