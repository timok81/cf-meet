Feature:  Specify Number of Events
  Scenario: When user hasn't specified a number, 32 events are shown by default.
    Given the app has loaded
    When the user does nothing
    Then 32 events are displayed

  Scenario: : User can change the number of events displayed.
    Given a list of events has loaded
    When user changes number in input field
    Then the amount of events listed changes
