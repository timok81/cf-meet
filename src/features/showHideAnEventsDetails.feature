Feature:  Show/Hide Event Details
  Scenario: An event element is collapsed by default.
    Given an event is listed
    When the user does nothing
    Then the event element is collapsed

  Scenario: User can expand an event to see details.
    Given an event element is collapsed
    When the user clicks button
    Then the event expands

  Scenario: User can collapse an event to hide details.
    Given an event element is expanded
    And the event details are visible
    When the user clicks button
    Then the event collapses
