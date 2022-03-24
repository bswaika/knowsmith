import React from 'react'
import '../styles/SplashScreen.css'

export default function SplashScreen(props) {
    return (
        <div className="lp-splash-parent">
            <span className="lp-splash-flush"></span>
            <div className='lp-splash-container'>
                <img src={props.logo} alt={`KnowSmith Logo`} className="lp-splash-logo" />
                <div className="lp-splash-loader-container">
                    <div className="lp-splash-loader">
                        <span className="lp-splash-loader-inner"></span>
                    </div>
                    <div className="lp-splash-loader loader-orange-larger">
                        <span className="lp-splash-loader-inner"></span>
                    </div>
                    <div className="lp-splash-loader">
                        <span className="lp-splash-loader-inner"></span>
                    </div>
                </div>
            </div>
        </div >
    )
}
