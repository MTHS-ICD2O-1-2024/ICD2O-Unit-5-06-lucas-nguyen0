// Copyright (c) 2025 Lucas Nguyen All rights reserved
//
// Created by: Lucas Nguyen
// Created on: Apr 2025
// This file contains the JS functions for index.html



function enterClicked() {
  const inputNumber1 = document.getElementById('input-number-one').value
  const inputNumber2 = document.getElementById('input-number-two').value
  let answer = 0
  while (inputNumber1 >= 1) {
    answer = answer + inputNumber2
    inputNumber1--
  } 
  document.getElementById("answer").innerHTML =
    'The answer is: ' + answer + '.'
}