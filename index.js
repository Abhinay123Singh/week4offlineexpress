const express = require("express");
const app = express();

function sum(n) {
    let ans = 0; // Initialize ans to 0
    for (let i = 1; i <= n; i++) {
        ans = ans + i;
    }
    return ans;
}

app.get("/", function (req, res) {
    const n = req.query.n; // Convert query parameter to a number
   const ans=sum(n);
   res.send("Hii your ans is" + ans);
})
app.listen(5000, function () {
    console.log("Server is running on port 5000");
});

