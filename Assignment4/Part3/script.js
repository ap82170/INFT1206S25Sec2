/*
    Name: Parth Dalwadi
    File: script.js
    Date: 28 July 2026
    Description: This file contains the JavaScript for the bouncing balls activity in Assignment 4 Part 3.
*/

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomRGB() {
    return `rgb(${random(0, 255)} ${random(0, 255)} ${random(0, 255)})`;
}