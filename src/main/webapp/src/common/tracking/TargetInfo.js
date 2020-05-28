import React from "react";

const TargetInfo = (props) => {

    return (

        <div>
            <div className="top">
                <h4 className="top_text">Current target</h4>
            </div>
            <div className="target_img">

            </div>
            <div className="data">
                { /*<input type="image" src="${pageContext.request.contextPath}/images/settings.png"
                                onClick="location.href = '/profile';" width="24" height="24"
                                alt="Settings"> */}
                <h4 className="data_text">Name: {props.info.name}</h4>
                <h4 className="data_text">Surname: {props.info.lastName}</h4>
                <h4 className="data_text">Email: {props.info.email}</h4>
                <h4 className="data_text">Phone: {props.info.phone}</h4>
            </div>
        </div>

    )
};
export default TargetInfo;
