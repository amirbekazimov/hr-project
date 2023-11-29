import React, { useState, useEffect } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { getRole } from "../../services/users";
import './Sidebar.css'


const Sidebar = () => {
    const [activeItem, setActiveItem] = useState("Home");
    const location = useLocation();
    const navigate = useNavigate();
    const [role, setRole] = useState('');

    const handleItemClick = (itemName) => {
        setActiveItem(itemName);
    };

    const isItemActive = (itemName) => {
        return itemName === activeItem;
    };

    useEffect(() => {
        const fetchRole = async () => {
            const role = await getRole();
            setRole(role);
        };

        fetchRole();
    }, []);

    return (
        <div className="d-flex w-100">
            <div className="d-flex flex-column flex-shrink-0 p-3 bg-light" style={{ width: 280, height: '100vh' }}>

                <hr />
                <ul className="nav nav-pills flex-column mb-auto">
                    <li className="nav-item">
                        <Link
                            to={'/admin-table'}
                            className={`nav-link text-secondary ${isItemActive("Home") ? "active text-light rounded-5" : ""}`}
                            onClick={() => handleItemClick("Home")}
                        >
                            <svg className="bi me-2" width={16} height={16}><use xlinkHref="#home" /></svg>
                            Home
                        </Link>
                    </li>
                    {role === 'Admin' && (
                        <li className="nav-item">
                            <Link
                                to={'/hr'}
                                className={`nav-link text-secondary ${isItemActive("Hr") ? "active text-light rounded-5" : ""}`}
                                onClick={() => handleItemClick("Hr")}
                            >
                                <svg className="bi me-2" width={16} height={16}><use xlinkHref="#home" /></svg>
                                Hr
                            </Link>
                        </li>
                    )}
                    <li className="nav-item">
                        <Link
                            to={'/applyed-users'}
                            className={`nav-link text-secondary ${isItemActive("ApplyedUsers") ? "active text-light rounded-5" : ""}`}
                            onClick={() => handleItemClick("ApplyedUsers")}
                        >
                            <svg className="bi me-2" width={16} height={16}><use xlinkHref="#home" /></svg>
                            Apllyed Users
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to={'/tags'}
                            className={`nav-link text-secondary ${isItemActive("CreateTag") ? "active text-light rounded-5" : ""}`}
                            onClick={() => handleItemClick("CreateTag")}
                        >
                            <svg className="bi me-2" width={16} height={16}><use xlinkHref="#home" /></svg>
                            Tags
                        </Link>
                    </li>
                    <li>
                        <Link style={{ textDecoration: 'none' }} to={'/create-contract'}>
                            <a
                                className={`nav-link text-secondary ${isItemActive("Dashboard") ? "active text-light rounded-5" : ""}`}
                                onClick={() => handleItemClick("Dashboard")}
                            >
                                <svg className="bi me-2" width={16} height={16}><use xlinkHref="#speedometer2" /></svg>
                                Create Contract
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link style={{ textDecoration: 'none' }} to={'/contracts'}>
                            <a
                                className={`nav-link text-secondary ${isItemActive("Contracts") ? "active text-light rounded-5" : ""}`}
                                onClick={() => handleItemClick("Contracts")}
                            >
                                <svg className="bi me-2" width={16} height={16}><use xlinkHref="#grid" /></svg>
                                Contracts
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link style={{ textDecoration: 'none' }} to={'/payment'}>
                            <a
                                className={`nav-link text-secondary ${isItemActive("Payment") ? "active text-light rounded-5" : ""}`}
                                onClick={() => handleItemClick("Payment")}
                            >
                                <svg className="bi me-2" width={16} height={16}><use xlinkHref="#grid" /></svg>
                                Payment
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link style={{ textDecoration: 'none' }} to={'/documents'}>
                            <a
                                className={`nav-link text-secondary ${isItemActive("Documents") ? "active text-light rounded-5" : ""}`}
                                onClick={() => handleItemClick("Documents")}
                            >
                                <svg className="bi me-2" width={16} height={16}><use xlinkHref="#grid" /></svg>
                                Documents
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link style={{ textDecoration: 'none' }} to={'/invoice-receipts'}>
                            <a
                                className={`nav-link text-secondary ${isItemActive("InvoiceReceipts") ? "active text-light rounded-5" : ""}`}
                                onClick={() => handleItemClick("InvoiceReceipts")}
                            >
                                <svg className="bi me-2" width={16} height={16}><use xlinkHref="#grid" /></svg>
                                Invoice Receipts
                            </a>
                        </Link>
                    </li>

                    <li>
                        <Link style={{ textDecoration: 'none' }} to={'/team-settings'}>
                            <a
                                className={`nav-link text-secondary ${isItemActive("TeamSettings") ? "active text-light rounded-5" : ""}`}
                                onClick={() => handleItemClick("TeamSettings")}
                            >
                                <svg className="bi me-2" width={16} height={16}><use xlinkHref="#grid" /></svg>
                                Team Settings
                            </a>
                        </Link>
                    </li>
                    <hr />
                    <li>
                        <Link style={{ textDecoration: 'none' }} to={'/apps-perks'}>
                            <a
                                className={`nav-link text-secondary ${isItemActive("AppsPerks") ? "active text-light rounded-5" : ""}`}
                                onClick={() => handleItemClick("AppsPerks")}
                            >
                                <svg className="bi me-2" width={16} height={16}><use xlinkHref="#grid" /></svg>
                                Apps & Perks
                            </a>
                        </Link>
                    </li>

                    <li>
                        <Link style={{ textDecoration: 'none' }} to={'/tax-forms'}>
                            <a
                                className={`nav-link text-secondary ${isItemActive("TaxForms") ? "active text-light rounded-5" : ""}`}
                                onClick={() => handleItemClick("TaxForms")}
                            >
                                <svg className="bi me-2" width={16} height={16}><use xlinkHref="#grid" /></svg>
                                Tax Forms
                            </a>
                        </Link>
                    </li>

                    <li>
                        <Link style={{ textDecoration: 'none' }} to={'/organization-settings'}>
                            <a
                                className={`nav-link text-secondary ${isItemActive("OrganizationSettings") ? "active text-light rounded-5" : ""}`}
                                onClick={() => handleItemClick("OrganizationSettings")}
                            >
                                <svg className="bi me-2" width={16} height={16}><use xlinkHref="#grid" /></svg>
                                Organisation Settings
                            </a>
                        </Link>
                    </li>
                </ul>
                <Link style={{ textDecoration: 'none', }} to={'/create-contract'}>
                    <button className="btn btn-primary rounded-5 p-3 w-100">
                        <a
                            onClick={() => handleItemClick("CreateContract")}
                            className={`nav-link text-secondary ${isItemActive("CreateContract") ? "active text-light" : ""}`}

                        >
                            <svg className="bi me-2" width={16} height={16}><use xlinkHref="#grid" /></svg>
                            <span className="text-white">
                                Create Contract +
                            </span>
                        </a>
                    </button>
                </Link>
                <br />
                <br />
                <br />
            </div>
            <div className="w-100 p-3">
                <Outlet />
            </div>
        </div>
    );
};

export default Sidebar;
