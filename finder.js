/** https://www.tradera.com/search.json?q=iphone+13+pro+max&itemStatus=Ended&fromPrice=5000&isActive=false&reservedPriceReached=true */

/**@TODO Create a wrapper class so you can extend it to other second-hand sites, such as blocket and/or ebay thus getting an even more accurate average price */
var myHeaders = new Headers();
myHeaders.append(
  "Cookie",
  "trd_at=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhcHAiOiJUb3VjaFdlYiIsImV4cCI6IjIwMjQtMDUtMjJUMTQ6MTM6MTlaIn0.1ywrEGfmtxp3x_tqbQXnSyzOYx_qQ55qeO8I_zO_i6c"
);

/**@TODO Unable to fetch without the Allow Cors plugin, downlaod it and enable it */
var requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
};

const q = "oculus+rift";

fetch(
  "https://www.tradera.com/_next/data/OfblPFrmCqoHx6InQRqbw/sv/search.json?q=macbook+pro&itemStatus=Ended", requestOptions)
  .then((response) => response.json())
  .then((result) => {
    // console.log(result.pageProps.initialState.discover.items[0].price);
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
