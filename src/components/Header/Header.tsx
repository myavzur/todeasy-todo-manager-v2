import "./Header.scss";
import React from "react";
import { useHistory, useLocation } from "react-router-dom";

import { useTypedSelector } from "hooks";
import { CATEGORIES_ROUTE } from "pages/routes";
import TodayProgress from "components/TodayProgress";

const Header: React.FC = () => {

    const location = useLocation()
    const { currentPageName } = useTypedSelector(state => state.app)

    const buttonBack = (location.pathname !== CATEGORIES_ROUTE) ? <ButtonBack/> : null

    return (
        <header className="header">
            {buttonBack}
            <h1> {currentPageName} </h1>
            <TodayProgress/>
        </header>
    )
}

const ButtonBack = () => {

    const history = useHistory()

    return (
        <button onClick={history.goBack}>BACK</button>
    )
}

export default Header