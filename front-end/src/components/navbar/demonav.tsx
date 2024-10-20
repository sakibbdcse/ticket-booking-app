import * as React from "react";
import { render } from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHome,
    faPlus,
    faUser,
    IconDefinition
} from "@fortawesome/free-solid-svg-icons";

import "./styles.scss";

interface IconProps {
    title: string;
    index: number;
    faStyle: IconDefinition;
    active: string;
    onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const Tab: React.FC<IconProps> = ({
    title,
    index,
    faStyle,
    onClick,
    active
}) => {
    return (
        <div data-index={index} className={`icon ${active}`} onClick={onClick}>
            <FontAwesomeIcon title={title} icon={faStyle} />
        </div>
    );
};

const Navbar: React.FC = () => {
    const [moving, setMoving] = React.useState(false);
    const [selected, setSelected] = React.useState(1);
    const [prev, setPrev] = React.useState(selected);
    const [mid, setMid] = React.useState("");

    const onClick = (index: number) => (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
        event.preventDefault();
        event.persist();
        setPrev(selected);
        setSelected(index);
        setMid("initialised");
        setMoving(true);
        setTimeout(() => {
            setMoving(false);
            setMid("");
        }, 750);
    };

    const selectedTab = React.useCallback(
        (index: number) => {
            return selected === index ? "initialised" : "";
        },
        [selected]
    );

    const Tabs = [
        <Tab
            key="home"
            title="Home"
            index={1}
            faStyle={faHome}
            onClick={onClick(1)}
            active={selectedTab(selected)}
        />,
        <Tab
            key="add"
            title="Add"
            index={2}
            faStyle={faPlus}
            onClick={onClick(2)}
            active={mid}
        />,
        <Tab
            key="profile"
            title="Profile"
            index={3}
            faStyle={faUser}
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

function App() {
    return (
        <div className="App">
            <Navbar />
        </div>
    );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
