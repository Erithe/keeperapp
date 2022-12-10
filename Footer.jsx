import React from "react";

function Footer () {

const name = "Marie Scharf";
const year = new Date().getFullYear();

return <div>  
<p>Created by {name}.</p>
<p>Copyright {year}.</p>
</div>;

};

export default Footer;

