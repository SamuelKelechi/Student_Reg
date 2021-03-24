import React from 'react'
import "./ViewStudentStyle.css"
import test from "./FB_IMG_16162381668651900.jpg"



function ViewStudents() {
  return (
    <div className="View_Container">
      <div className="View_ContainerWrapper">
        <button className="Activate_Container">Activate</button>
        <div className="Profile_Holder">
          <div className="Image_Pix">
            <img src={test} alt="profile" style={{
              height: "100%",
              width: "100%",
              borderRadius: "50px",
              objectFit: "cover"
            }}
            />
          </div>
          <div className="Name_Holder">
            <h4>
              <b>Samuel Kelechi</b>
              <br />
              Arrived: Time
            </h4>
          </div>

        </div>

        <hr />

        <div className="Profile_Container">
          <b>Profile</b><br />
          charity organization that caters to the physiological
          [feeding, clothing and shelter], social, educational,
          psychological, medical, and emotional needs of street
          kids and vulnerable children.
        </div>

        <div className="Interest_Container"><b>Interest:</b> Web Development</div>
      </div>
    </div >
  )
}

export default ViewStudents
