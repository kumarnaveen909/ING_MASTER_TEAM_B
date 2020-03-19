$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/com/ui/automation/features/APItest.feature");
formatter.feature({
  "name": "Using get methods for validating the response of ticker\u0027s precision value",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Validate valid response data using Ticker names listed in a file",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "baseURI of the rest service",
  "keyword": "Given "
});
formatter.match({
  "location": "com.ui.automation.stepdefinition.TestStepAPIdef.baseuri_of_the_rest_service()"
});
formatter.result({
  "error_message": "io.cucumber.java.PendingException: TODO: implement me\r\n\tat com.ui.automation.stepdefinition.TestStepAPIdef.baseuri_of_the_rest_service(TestStepAPIdef.java:17)\r\n\tat ✽.baseURI of the rest service(file:///C:/Users/kotla.naveen/workspace/HackathonTeamB/./src/test/java/com/ui/automation/features/APItest.feature:5)\r\n",
  "status": "pending"
});
formatter.step({
  "name": "when user selects the ticker name",
  "keyword": "When "
});
formatter.match({
  "location": "com.ui.automation.stepdefinition.TestStepAPIdef.when_user_selects_the_ticker_name()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on send request",
  "keyword": "And "
});
formatter.match({
  "location": "com.ui.automation.stepdefinition.TestStepAPIdef.click_on_send_request()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "response should be displayed with the ticker data in response body",
  "keyword": "Then "
});
formatter.match({
  "location": "com.ui.automation.stepdefinition.TestStepAPIdef.response_should_be_displayed_with_the_ticker_data_in_response_body()"
});
formatter.result({
  "status": "skipped"
});
});