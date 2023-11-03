# 'Robotiko Rejektor'

A JS Web Application by Henry Oberholtzer

### Description

A simple program that takes a numeric input from a user, and returns an array of data replaced according to a set of parameters. Formatted with Bootstrap v5.0.2. Name is a reference to the lyrics & artist of [Injection by Robotiko Rejekto](https://www.youtube.com/watch?v=vYZRfDmwDDw)

### Technologies Used:

* JavaScript
* HTML
* CSS
* Bootstrap


### Installation and use

* Download folder from github, open index.html in web browser of choice
* Alternatively - see the project [hosted on github pages](https://henry-oberholtzer.github.io/mr-roboger/)

### Known Bugs

* None known at this time

_Please reach out over github if you spot any!_

## Pseudocode TDD Tests

#### Describe countUp()
Test: Returns an array counting up by integers starting at 0 to the user's given number
Code: countUp(5)
Result: [0, 1, 2, 3, 4, 5]

#### Describe numberReplacer()
Test: If a number contains the digit 3, replace with the string "Won't you be my neighbor?"
Code: numberReplacer(13)
Result: "Won't you be my neighbor?"

Test: If a number contains the digit 2, and no 3, replace with the string "Boop!"
Code: numberReplacer(21)
Result: "Boop!"

Test: If a number contains the digit 1, and no 2 or 3, replace with the string "Beep!"
Code: numberReplacer(11)
Result: "Beep!"

Test: If user enters a name, and the number contains the digit 3, replace with the string "Won't you be my neighbor, NAME?"
Code: numberReplacer(13, NAME)
Result: "Won't you be my neighbor, NAME?

#### Describe arrayReplacer()
Test: Iterates through an array, replacing digits as needed with numberReplacer()
Code: numberReplacer([1, 2, 4, 21, 11, 13, 30])
Result: ["Beep!", "Boop", 4, "Boop!", "Beep!", "Won't you be my neigbhor?", "Won't you be my neighbor?"]

#### Describe mrRobogerSystem()
Test: Takes a single digit input, returning an array counting up from zero, which has been transformed according to the protocol from arrayReplacer()
Code: mrRobogerSystem(13)
Result: [0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, "Beep!", "Beep!", "Boop!", "Won't you be my neighbor?"]

#### Describe inputVerification()
Test: Takes an input, and parses into a number if possible, returning an error for text and blank inputs.
Code: inputVerification("hello")
Result: null

##

Code licensed under a GNU GPLv3 license

Copyright 2023 (c) Henry Oberholtzer

Bootstrap is licensed under MIT

"robot_man.png" taken from "Wasn't The Future Wonderful" (1979) by Tim Onosko, used transformatively & educationally under 17 U.S. Code § 107.
