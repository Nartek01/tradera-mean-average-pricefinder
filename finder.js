/** https://www.tradera.com/search.json?q=iphone+13+pro+max&itemStatus=Ended&fromPrice=5000&isActive=false&reservedPriceReached=true */

/**@TODO Create a wrapper class so you can extend it to other second-hand sites, such as blocket and/or ebay thus getting an even more accurate average price */
var myHeaders = new Headers();
myHeaders.append(
  "Cookie",
  "trd_at=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhcHAiOiJUb3VjaFdlYiIsImV4cCI6IjIwMjItMDktMjNUMTU6Mjc6MjNaIn0.KTcKiygK1oX6GZiJFDYN8St6rc72E09eVFIa32vrmGM; ASP.NET_SessionId=tp2kh2sortgl2a2i24ov4cxa; experiment_bucket=1630803631; si=1; splittest_adsense_for_shopping_loggedin=103971053; splittest_attribute_suggestion_extractor=1371683031; splittest_category_boost_version=258865204; splittest_mobile_tag_based_navigation_filtering=496020282; splittest_search_ranking_variant=159725577; splittest_seller_suggestions_position=1731734216; splittest_similar_seller_suggestions=2121915416; splittest_tag_based_navigation_filtering_v2=638767102; splittest_userreg_auth_provider=1763854670"
);

/**@TODO Unable to fetch without the Allow Cors plugin, downlaod it and enable it */
var requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
};

const q = "oculus+rift";

fetch(
  `https://www.tradera.com/search.json?q=${q}&itemStatus=Ended&fromPrice=5000&isActive=false&reservedPriceReached=true`,
  requestOptions
)
  .then((response) => response.json())
  .then((result) => {
    console.log(result.items[0].price);
    const prices = [];
    document.write("<table>");
    result.items.forEach((item, index) => {
      prices.push(item.price);
      /***@TODO Create real html nodes instead of writing document.write */
      document.write(`
      <style>
      table {
        font-family: arial, sans-serif;
        border-collapse: collapse;
        width: 100%;
      }

      td,
      th {
        border: 1px solid #dddddd;
        text-align: left;
        padding: 8px;
      }

    </style>
      <tr>
      <th>Name</th>
      <th>Price</th>
      </tr>
      <tr>
      <td>${item.shortDescription}</td>
      <td>${item.price}</td>
      </tr>
      `);
    });
    const sum = prices.reduce((partialSum, a) => partialSum + a, 0);
    document.write(`
    <tr>
    <th>Total</th>
    </tr>
    <tr>
    <td>${sum / prices.length}</td>
    </tr>
    `);
    // console.log(prices);
    console.log(sum / prices.length);
  })
  .catch((error) => console.log("error", error));
