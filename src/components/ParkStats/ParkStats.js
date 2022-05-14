import React from 'react';
import "./ParkStats.scss"

function ParkStats() {
    return (
        <section className="Container">
            <div className="Grid__Container">
                <div className="Stat__Card">
                    <div className="Stat__Container">
                        <div className="Stat__Title"># of Parks</div>
                        <div className="Stat__Content">
                            <p className="Stat__Content-Body">🪁 2,986</p>
                        </div>
                    </div>
                </div>
                <div className="Stat__Card">
                    <div className="Stat__Container">
                        <div className="Stat__Title">Top States</div>
                        <div className="Stat__Content">
                            <p className="Stat__Content-Body">📍 New York: 859 Parks</p>
                            <p className="Stat__Content-Body">📍 California: 194 Parks</p>
                            <p className="Stat__Content-Body">📍 Illinois: 184 Parks</p>
                        </div>
                    </div>
                </div>
                <div className="Stat__Card">
                    <div className="Stat__Container">
                        <div className="Stat__Title">Top Features</div>
                        <div className="Stat__Content">
                            <p className="Stat__Content-Body">🛴 Smooth Surface (2121)</p>
                            <p className="Stat__Content-Body">🌌 Accessible Swing (990)</p>
                            <p className="Stat__Content-Body">🥏 Ramps (928)</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        );
    }
    
export default ParkStats;