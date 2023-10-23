// Styles
import TableDebts from '../components/TableDebts';
import '../styles/MainScreen.css';
import { NavLink } from "react-router-dom";

// Import dataBase

const MainScreen = ({loading}) => {


    return (
        <div>
            <article className="mainArticle">
                <ul className="ulMain">
                    <li className="liMain">
                        <NavLink to="/Register-Entry">
                            Register Entry
                        </NavLink>
                    </li>
                    <li className="liMain">
                        <NavLink to="/Register-Expense">
                            Register Expense
                        </NavLink>
                    </li>
                    <li className="liMain">
                        <NavLink to="/Register-Debt">
                            Register Debt
                        </NavLink>
                    </li>
                    <li className="liMain">
                        <NavLink to="/Pay-off-Debt">
                            Pay off Debt
                        </NavLink>
                    </li>
                    <li className="liMain">
                        <NavLink to="/Register-Contribution">
                            Register Contribution
                        </NavLink>
                    </li>
                    <li className="liMain">
                        <NavLink to="/Withdraw-Contribution">
                            Withdraw  Contribution
                        </NavLink>
                    </li>
                </ul>
            </article>
            <TableDebts loading={loading}/>
        </div>
    )
}

export default MainScreen;