import React from "react";

// Import Materialize
import { Footer } from "react-materialize";

const Tail = () => (
    <Footer
            className="blue-grey darken-1"
            moreLinks={<a className="grey-text text-lighten-4 right" href="#!">My Linkedin</a>}
        >
            <h5 className="white-text">
                React Timer
            </h5>
            <p className="grey-text text-lighten-4">
                A basic app to get better with React & frontend development.
            </p>
        </Footer>
);

export default Tail;
