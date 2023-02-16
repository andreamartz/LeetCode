// https://leetcode.com/problems/first-bad-version/description/

/**
 * Definition for isBadVersion()
* 
* @param {integer} version number
* @return {boolean} whether the version is bad
* isBadVersion = function(version) {
*     ...
* };
*/

/**
* @param {function} isBadVersion()
* @return {function}
*/
var solution = function(isBadVersion) {
   /**
    * @param {integer} n Total versions
    * @return {integer} The first bad version
    */

   return function(n) {
       let lo = 1;
       let hi = n;
       let boundaryVersion = -1;
       
       while (lo <= hi) {
           let mid = lo + Math.floor((hi - lo) / 2);
           if (isBadVersion(mid)) {
               boundaryVersion = mid;
               hi = mid - 1;
               continue;
           }
           lo = mid + 1;
       }
       return boundaryVersion;
   };
};
