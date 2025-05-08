// Copyright (c) 2025 Lucas Nguyen All rights reserved
//
// Created by: Lucas Nguyen
// Created on: Apr 2025
// This file contains the JS functions for index.html

'use strict'

function enterClicked() {
  let inputNumberOne = parseFloat(document.getElementById('input-number-one').value)
  const inputNumberTwo = parseFloat(document.getElementById('input-number-two').value)
  let answer = 0
  while (inputNumberOne >= 1) {
    answer = answer + inputNumberTwo
    inputNumberOne--
  } 
  document.getElementById("answer").innerHTML =
    'The answer is: ' + answer + '.'
}
