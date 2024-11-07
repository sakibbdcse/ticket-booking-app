import React, { useState, useCallback } from "react";
import { FaBusAlt, FaCar, FaTrain } from "react-icons/fa"
import "./demo.css";

const Tab = ({ index, faStyle, onClick, active }) => {
    return (
        <div data-index={index} className={`icon ${active}`} onClick={onClick}>
            {faStyle}
        </div>
    );
};

const DemoNavbar = () => {
    const [moving, setMoving] = useState(false);
    const [selected, setSelected] = useState(1);
    const [prev, setPrev] = useState(selected);
    const [mid, setMid] = useState("");

    const onClick = (index) => (event) => {
        event.preventDefault();
        setPrev(selected);
        setSelected(index);
        setMid("initialised");
        setMoving(true);
        setTimeout(() => {
            setMoving(false);
            setMid("");
        }, 750);
    };

    const selectedTab = useCallback(
        (index) => {
            return selected === index ? "initialised" : "";
        },
        [selected]
    );

    const Tabs = [
        <Tab
            key="home"
            index={1}
            faStyle={<FaBusAlt />}
            onClick={onClick(1)}
            active={selectedTab(selected)}
        />,
        <Tab
            key="add"
            index={2}
            faStyle={<FaTrain />}
            onClick={onClick(2)}
            active={mid}
        />,
        <Tab
            key="profile"
            index={3}
            faStyle={<FaCar />}
            onClick={onClick(3)}
            active={selectedTab(selected)}
        />
    ];

    const movingClass = moving ? moving : "";

    return (
        <nav className={`tab ${movingClass}`} data-selected={selected}>
            <div className="icons">{Tabs}</div>
            <div className="bar">
                <div className="cap" />
                <div className="middle">
                    <div className="side" />
                    <div className="circle" />
                    <div className="side" />
                </div>
                <div className="cap" />
            </div>
        </nav>
    );
};
export default DemoNavbar;