import React from "react";

// Import Materialize
import { Navbar } from "react-materialize";

const Head = () => (
    <Navbar
        className="blue-grey darken-1"
        brand={<a className="brand-logo" href="#">ReactTimer</a>}
        centerLogo
    >
    </Navbar>
);

export default Head;