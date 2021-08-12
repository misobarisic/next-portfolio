import React from 'react';
import TextComponent from "./TextComponent";
import ProgressBar from "./ProgressBar";

export default function Education() {
    return (
        <div className="flex flex-col space-y-1">
            <TextComponent text="EDUCATION"/>
            <div className="flex flex-col md:flex-row md:space-x-6 space-y-1 md:space-y-0">
                <ProgressBar title="FERIT" text="2021-PRESENT" href="https://www.ferit.unios.hr/2021/"
                             completed={40}/>
                <ProgressBar title="I. GIMNAZIJA OSIJEK" text="2017-2021"
                             href="http://gimnazija-prva-os.skole.hr/" completed={100}/>
            </div>
        </div>
    )
}
