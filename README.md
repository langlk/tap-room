# Tap Room

### _Epicodus Practice in JavaScript_

### By Kelsey Langlois

## Description

_A site for managing a tap room's inventory of kegs. Allows employees to add, view, and edit keg's information, as well as sell pints from a keg._

## Setup/Installation Requirements

* Clone this repository.
* Make sure you have Node.js and gulp installed.
    * Instructions for installing Node.js can be found [here](https://www.learnhowtoprogram.com/javascript/getting-started-with-javascript-2f9a73dc-b7f5-4a22-9101-e69d49f552ac/installing-node-js).
    * Once Node is installed, you can install gulp with the command ```npm install gulp -g```
* From the project root directory, run the following commands in the terminal:
  ```
  npm install
  bower install
  gulp build
  gulp serve
  ```
* The site should open in your default web browser at ```localhost:3000``` (or similar localhost-- success message will include access URL).

## Specifications

* Stores the following information about a keg:
  * Name
  * Brand/Brewery
  * Price per Pint
  * ABV
  * Current Volume Remaining (in Pints)
* Allows user to create, view, and update a keg's information.
* Selling a pint lowers a keg's volume by 1.
* Selling a growler lowers a keg's volume by 4.
* Happy Hour lowers all beer's price per pint by $1.
* Happy Hour activates from 4-6pm.

## Support and contact details

_Please contact [kels.langlois@gmail.com](mailto:kels.langlois@gmail.com) with questions, comments, or issues._

## Technologies Used

* JavaScript
* Angular
* Node.js
* Bower
* Materialize


### License

Copyright (c) 2017 **Kelsey Langlois**

*This software is licensed under the MIT license.*
