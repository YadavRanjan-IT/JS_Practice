/* Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######
*/

"use strict";

for (let cnt = 1; cnt <= 7; cnt++) {
  let trian = "#";
  while (trian.length < cnt) {
    trian += "#";
  }
  console.log(trian);
}

for (let cnt = "#"; cnt.length <= 7; cnt += "#") {
  console.log(cnt);
}
