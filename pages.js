function changeSearch(i) {
    switch (i) {
        case 1:
            document.getElementById("searchBox").innerHTML = "<div class=\"subSystem\">" +
                "        <button class=\"dropbtn\">Part Type</button>" +
                "        <div class=\"dropdown-content\">" +
                "            <a id=\"link1\" onclick=\"\" value=\"suspension\">Suspension</a>" +
                "            <a id=\"link2\" onclick=\"\" value=\"engine\">Engine</a>" +
                "            <a id=\"link3\" onclick=\"\" value=\"electrical\" >Electrical</a>" +
                "            <a id=\"link4\" onclick=\"\" value=\"4th thing\">Some other 4th thing</a>" +
                "        </div>" +
                "    </div>";
        case 2:
            document.getElementById("searchBox").innerHTML = "<div class=\"textBox\">" +
                "        <h4>Part Name</h4>" +
                "        <input type=\"text\" id=\"name\">" +
                "    </div>";
        case 3:
            document.getElementById("searchBox").innerHTML = "<div class=\"textBox\">" +
                "        <h4>Part Number</h4>" +
                "        <input type=\"text\" id=\"partNumber\">" +
                "    </div>";
        default:
                document.getElementById("searchBox").innerText = "<div class=\"textBox\">" +
                    "        <h4>Part Number</h4>" +
                    "        <input type=\"text\" id=\"partNumber\">" +
                    "    </div>";
    }
}
