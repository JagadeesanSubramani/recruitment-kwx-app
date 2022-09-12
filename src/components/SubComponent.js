import React from "react";

function SubComponent(props) {
    return <div className="sub-component">
        <div className="ui form">
            <div className="field">
                {props.name}
            </div>

            <div className="field">
                {props.button && <button className="ui button">Click Here</button>}
            </div>
        </div>

    </div>;
}

export default SubComponent;