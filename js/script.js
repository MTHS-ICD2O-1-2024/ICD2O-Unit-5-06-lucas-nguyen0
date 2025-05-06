// Copyright (c) 2025 Lucas Nguyen All rights reserved
//
// Created by: Lucas Nguyen
// Created on: Apr 2025
// This file contains the JS functions for index.html

'use strict'

function enterClicked() {
  let inputNumber1 = parseFloat(document.getElementById('input-number-one').value)
  const inputNumber2 = parseFloat(document.getElementById('input-number-two').value)
  let answer = 0
  while (inputNumber1 >= 1) {
    answer = answer + inputNumber2
    inputNumber1--
  } 
  document.getElementById("answer").innerHTML =
    'The answer is: ' + answer + '.'
}
