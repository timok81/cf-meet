# Events information app

## Overview
A serverless, progressive web application (PWA) with React using a test-driven development (TDD) technique. The application uses the Google Calendar API to fetch upcoming events.

## Feature 1: Filter Events By City

As a user, I should be able to filter the search results by city, so that the search results are relevant to me

### Scenario 1:
 - Given no city has been specified
 - When the user opens the app
 - Then upcoming events from all cities are displayed

### Scenario 2:
 - Given the user is using the app
 - When the user has typed something into the search field
 - Then the app displays suggestions for cities based on the value fo the search field

### Scenario 3:
 - Given a list of suggested cities is displayed under search field
 - When the user selects one of the suggestions
 - Then the suggested city is used as a search parameter and relevant events are displayed

## Feature 2: Show/Hide Event Details

As a user, I should be able to show and hide event details, so that I can see information about the events I'm interested in.

### Scenario 1:
 - Given an event is listed
 - When the user does nothing
 - Then the event element is collapsed

### Scenario 2:
 - Given an element is collapsed
 - When the user clicks button
 - Then the event expands

### Scenario 3:
 - Given a element is expanded
 - When the user clicks button
 - Then the event collapses

## Feature 3: Specify Number of Events

As a user, I should be able to specify the number of events displayed, so that I can control the amount of information returned.

### Scenario 1:
 - Given user searches for events
 - When the number of events hasn't been specified
 - Then display 32 events

### Scenario 2:
 - Given user is in search view
 - When user clicks on number input
 - Then user can change number of events

## Feature 4: Use the App When Offline

As a user, I should be able to use the app when I'm offline, so that I can use the app when the internet connection is unstable.

### Scenario 1:
 - Given there is no internet connection
 - When the user tries to view data
 - Then show cached data

### Scenario 2:
 - Given there is no internet connection
 - When user changes search settings
 - Then show error

## Feature 5: Add an App Shortcut to the Home Screen

As a user, I should be able to access the app directly from my home screen, so that I don't have to spend time searching for app.

### Scenario 1:
 - Given the app installation is in progress
 - When the app finishes installation
 - Then create a shortcut to the app on home screen

## Feature 6: Display Charts Visualizing Event Details

As a user, I should be able to view charts that visualize upcoming events, so that it's easier for me to make decision about events.

### Scenario 1:
 - Given the user is in search view
 - When the city hasn't been specified
 - Then display chart with upcoming events for all cities

