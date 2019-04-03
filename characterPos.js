var letterCounting = {};

function countLetters (str) {
  str = str.replace(/ /g,'')
 for (var i = 0; i < str.length; i++ ) {
   if (!letterCounting[str[i]]) {
     letterCounting[str[i]] = 1;
   } else {
     letterCounting[str[i]] += 1;
   }
 }
 console.log(letterCounting);
}
countLetters("Lighthouse in the house")
