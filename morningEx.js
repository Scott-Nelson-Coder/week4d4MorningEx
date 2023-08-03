function balancedParens(str) {
  let openPar = 0
  let closedPar = 0

  for (let i = 0; i < str.length; i++) {
    if (str[i].includes("(")) {
      openPar += 1
    } else if (str[i].includes(")")) {
      closedPar += 1
    }
  }
  return openPar === closedPar
}

console.log(balancedParens("()"))
console.log(balancedParens("(Oh Noes!)("))