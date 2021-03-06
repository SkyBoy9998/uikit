import React from "react";
import {Svg, SvgProps} from "../../../components/Svg";

const Icon: React.FC<SvgProps> = (props) => {
    return (
        <Svg viewBox="0 0 90 90" {...props}>
            <image width={90} height={110} href="/images/egg/fenix.png"/>
        </Svg>
    );
};

export default Icon;