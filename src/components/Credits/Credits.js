import React from 'react';
import "./Credits.scss"

function Credits() {
    return (
        <section className="credits">
            <h2 className="credits__subheader">Credits & Thanks to NPR</h2>
            <p className="credits__body">We were inspired by an <a className="welcome__link" href="http://www.playgroundsforeveryone.com/">outdated NPR site</a> to put together a centralized database where the community could easily find access to parks.</p><br></br>
            <p className="credits__body">Reporting and data analysis by Robert Benincasa, Matt Stiles and Margot Williams/NPR</p>
            <p className="credits__body">Design and development by Jeremy Bowers, Danny DeBelius, Christopher Groskopf, Alyson Hurt and Gerald Rich/NPR</p><br></br>
            <p className="credits__body">Photos of accessible playground features were taken at Brooklyn's Playground in Pocatello, Idaho (featuring playground namesake Brooklyn Fisher and her sister, Leah), and at Clemyjontri Playground in McLean, Va. Photos by John Poole/NPR</p><br></br>
            <p className="credits__body">Mara Kaplan of accessibleplayground.net, members of the National Recreation and Park Association, PlayCore Inc. and Leathers and Associates contributed to our initial list of playgrounds.</p>
        </section>
    );
}

export default Credits;