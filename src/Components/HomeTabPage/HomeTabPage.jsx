import React, { useState } from "react";
import { FaPlane, FaHotel } from "react-icons/fa";
import { GiTicket } from "react-icons/gi";
import { TbPlaneInflight } from "react-icons/tb";
import Planetab from "./tab/PlaneTab/PlaneTab"
import FlightStatus from "./tab/FlightStatus/FlightStatus"
import PlaneHotelTab from "./tab/PlaneHotelTab/PlaneHotelTab"
import CheckinTab from "./tab/CheckinTab/CheckinTab"
import "./style.css"

const HomeTabPage = () => {
  
  const [currentTab, setCurrentTab] = useState("1");

  const tabs = [
    {
      id: 1,
      tabTitle: "Uçak",
      content: <Planetab/>,
      object: <FaPlane />,
    },
    {
      id: 2,
      tabTitle: "Uçak + Otel",
      content: <PlaneHotelTab/>,
       object: <FaHotel />,
    },
    {
      id: 3,
      tabTitle: "Check-in / Bilet Yönetimi",
      content: <CheckinTab/>,
      object: <GiTicket />,
    },
    {
      id: 4,
      tabTitle: "Uçuş durumu",
      content: <FlightStatus/>,
      object: <TbPlaneInflight />,
    },
  ];

  const handleTabClick = (e) => {
    setCurrentTab(e.target.id);
  };

  return (
    <div className="container">
      <div className="tabs">
        {tabs.map((tab, i) => (
          <button
            key={i}
            id={tab.id}
            disabled={currentTab === `${tab.id}`}
            onClick={handleTabClick}
          >
            {tab.object} {tab.tabTitle}
          </button>
        ))}
      </div>
      <div className="content">
        {tabs.map((tab, i) => (
          <div key={i}>
            {currentTab === `${tab.id}` && (
               tab.content
              
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeTabPage;
