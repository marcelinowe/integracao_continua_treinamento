Feature: Is Jenkins?
  Test if we are stay in Jenkins
  Scenario: Is Jenkins instance?
    Given I am on Jenkins CI
    When I click on pipeline
    Then I should see pipeline view
