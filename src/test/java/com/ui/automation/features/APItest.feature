Feature: Using get methods for validating the response of ticker's precision value

Scenario: Validate valid response data using Ticker names listed in a file

Given baseURI of the rest service
When when user selects the ticker name
And click on send request
Then response should be displayed with the ticker data in response body

