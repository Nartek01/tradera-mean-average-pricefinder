# tradera-mean-average-pricefinder
Early iteration of the swedish bidding site tradera.se, this repo fetches multiples products that's reached it's bidding goal and is purchased, sum up the prices of all the sold products and divide the sum by the total item fetched giving a mean estimation of what the average pays for the item you're looking for.

This is the method I apply when I want to sell anything and need to get an estimation of the pricing, what it means is that you search for a product and compare what the average joe is paying for it and then you have a starting point for price estimation, I usually do this with 10 latest sold products but since there's so many more products that's sold an automation that can run a simple math calculation is better. I wanted to buy an iphone 13 pro max and wants to know what people are willing to pay for the device at the time being.

So I in the query parameter I put in iphone+13+pro+max and I get a result of 48 so I sum up the price of the 48 phones sold and divide it by 48

I got a sum of 469880sek and that divided by 48 is 9789.1666. So now I know that average people are paying ~9,790sek for an iphone 13 pro max.
The search paramter is simple list only products that has reached their bidding goal and is closed.

Reaching its bidding goal meaning that the seller list the item for a price and if the buyers have bidded to or beyond the listing price then it will have the value true. bidding goal is not to be confused with the origin/start price a device can start an biddong on 0sek but the seller might set a bidding goal to a specific number such as 11,000sek
