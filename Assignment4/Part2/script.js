/*
    Name: Parth Dalwadi
    File:script.js
    Date:08 July, 2026
    Description:This file contains letter which is the second part of assignment4.
*/
const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

// Create a data object

const images = [
  { filename: "pic1.jpg", alt: "Closeup of a human eye" },
  { filename: "pic2.jpg", alt: "Rock that looks like a wave" },
  { filename: "pic3.jpg", alt: "Purple and white pansies" },
  { filename: "pic4.jpg", alt: "Section of wall from a pharaoh's tomb" },
  { filename: "pic5.jpg", alt: "Large moth on a leaf" },
];

// Create the thumbnail images

const baseURL =
  "https://mdn.github.io/shared-assets/images/examples/learn/gallery/";

for (const image of images) 
    {
        const newImage = document.createElement("img");

        newImage.src = `${baseURL}${image.filename}`;
        newImage.alt = image.alt;
        thumbBar.appendChild(newImage);
        newImage.addEventListener("click", updateDisplayedImage);
    }

