## Problem: FirstNonRepeated Function
**Issued by:** Fleet Coffee

### Description
Here is my attempt at the [intern coding challenge](https://gist.github.com/gdogaru/f8c6bc7b203b3bc63693fa92f6cd3d4e) issued by [Fleet Coffee](https://fleetscoffee.com/). The goal of the problem is to write a function called `firstNonRepeated` that takes a single string `s` as input and returns the first non-repeated character in the string. If there is no non-repeated character, the function should return an empty string.

### Approach
I have implemented three different versions of the function. Initially, I started with a brute force method, which involved iterating through the string and checking for repetitions. However, the time complexity of this approach was O(n^2), which is not ideal.

Next, I attempted a hashmap function. This approach involves counting the occurrences of each character in the string using a hashmap and then finding the first non-repeated character by iterating through the string once again. This version improved the time complexity to O(n), which is more efficient.

Finally, I further optimized the hashmap approach by combining the two loops into a single loop. This updated version maintains a linear time complexity of O(n) while finding the first non-repeated character in the string.
