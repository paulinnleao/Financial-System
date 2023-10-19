import { NavLink } from "react-router-dom";

const MainScreen = () => {


    return (
        <article className="Main">
            <ul className="ulMain">
                <li className="liMain">
                    <NavLink to="/RegisterEntry">
                        Register Entry
                    </NavLink>
                </li>
                <li className="liMain">
                    <NavLink to="/RegisterExpen">
                        Register Expense
                    </NavLink>
                </li>
                <li className="liMain">
                    <NavLink to="/RegisterDebt">
                        Register Debt
                    </NavLink>
                </li>
                <li className="liMain">
                    <NavLink to="/PayOffDebt">
                        Pay off Debt
                    </NavLink>
                </li>
                <li className="liMain">
                    <NavLink to="/RegisterContr">
                        Register Contribution
                    </NavLink>
                </li>
                <li className="liMain">
                    <NavLink to="/WithdrawCont">
                        Withdraw  Contribution
                    </NavLink>
                </li>
            </ul>
        </article>
    );
}

export default MainScreen;