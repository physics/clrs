<p align="center"><img width=12.5% src="https://i.imgur.com/juYfXhv.png"></p>
<p align="center"><img width=60% src="https://i.imgur.com/ZzUShgS.png"></p>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
![Node](https://img.shields.io/npm/v/npm.svg)
[![Build Status](https://travis-ci.org/anfederico/Clairvoyant.svg?branch=master)](https://travis-ci.org/anfederico/Clairvoyant)
![Dependencies](https://img.shields.io/badge/dependencies-up%20to%20date-brightgreen.svg)
[![GitHub Issues](https://img.shields.io/github/issues/swingsets/colorize.svg)](https://github.com/swingsets/colorize/issues)
![Contributions welcome](https://img.shields.io/badge/contributions-welcome-orange.svg)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Mission
In the world of web development, creators are always looking for the finest colors they can possibly find. Those creators may browse websites that offer certain genres of colors, such as pastel colors, but they might just never find the right one. Instead of being stumped on a color to use, let Colorize generate a color for you.

## Backend
You may be asking yourself, how does Colorize work its magic? It uses JS's built in Math object to generate a nearly completely random RGB code and display it clearly on the webpage. Downloading an Eyedropper extension for your browser may be a good idea so you can grab the name of the color you are looking at, although the hex code and RGB are already provided.

## Randomization
The simple function below allows your application to generate a nearly random color code formatted in RGB. It may vary by function, but in Colorize, the function of randomizing the color allows for a range of what numbers to randomize between. For example, you may want a random number 0-255, or a random number 0-9.

```javascript
function randint(range){
    return Math.floor(Math.random() * range)
}
```

## Forking
If one wishes to fork Colorize, they may feel free to do so. On the same note as in the Randomization topic above, the random function can be messed around with to the clients' desires.

## ❤️
<br/>
