function countdown( hollaback ) {
  window.setTimeout( hollaback, 2000 )
}

function createMultiplier(multiplierValue) {
  return function (num) {
    return multiplierValue * num
  }
}
var doubler = createMultiplier(2)
var tripler = createMultiplier(3)


function multiplier ( num1, num2 ) {
  return num1 * num2
}
var doublerWithBind = multiplier.bind(2)
var triplerWithBind = multiplier.bind(3)
