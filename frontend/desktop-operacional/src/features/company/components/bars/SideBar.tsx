import { useNavigate } from "react-router-dom";
import "./SideBar.css";

export function SideBar() {
    const navigate = useNavigate();

    return (
        <aside className="sidebar">
            <div className="sidebar__logo">
                <img
                    src="/logo-costa-azul.svg"
                    alt="Costa Azul"
                    className="sidebar__logo-img"
                />
            </div>

            <div className="sidebar__admin-banner">
                <span className="sidebar__admin-title">
                    GLOBAL ADMINISTRATION
                </span>
            </div>

            <div className="sidebar__content">
                <button
                    className="sidebar__item sidebar__item--active"
                    onClick={() => navigate("/dashboard")}
                >
                    <i className="pi pi-th-large" />
                    <span>Dashboard</span>
                    <span className="sidebar__active-dot" />
                </button>

                <div className="sidebar__group">
                    <span className="sidebar__section-title">
                        OPERAÇÃO
                    </span>

                    <div className="sidebar__list">
                        <button
                            className="sidebar__item"
                            onClick={() => navigate("/vessel/create")}
                        >
                            <i className="pi pi-sitemap" />
                            <span>Frota e Viagens</span>
                            <i className="pi pi-chevron-right sidebar__arrow" />
                        </button>

                        <button className="sidebar__item">
                            <i className="pi pi-compass" />
                            <span>Operações</span>
                            <i className="pi pi-chevron-right sidebar__arrow" />
                        </button>

                        <button className="sidebar__item">
                            <i className="pi pi-briefcase" />
                            <span>Comercial</span>
                            <i className="pi pi-chevron-right sidebar__arrow" />
                        </button>

                        <button className="sidebar__item">
                            <i className="pi pi-users" />
                            <span>Pessoas</span>
                            <i className="pi pi-chevron-right sidebar__arrow" />
                        </button>

                        <button className="sidebar__item">
                            <i className="pi pi-credit-card" />
                            <span>Financeiro</span>
                            <i className="pi pi-chevron-right sidebar__arrow" />
                        </button>
                    </div>
                </div>

                <div className="sidebar__group">
                    <span className="sidebar__section-title">
                        ADMINISTRAÇÃO
                    </span>

                    <div className="sidebar__list">
                        <button className="sidebar__item">
                            <i className="pi pi-shield" />
                            <span>Auditoria</span>
                            <i className="pi pi-chevron-right sidebar__arrow" />
                        </button>

                        <button className="sidebar__item">
                            <i className="pi pi-key" />
                            <span>Acessos</span>
                            <i className="pi pi-chevron-right sidebar__arrow" />
                        </button>

                        <button className="sidebar__item">
                            <i className="pi pi-cog" />
                            <span>Configurações</span>
                            <i className="pi pi-chevron-right sidebar__arrow" />
                        </button>
                    </div>
                </div>
            </div>

            <div className="sidebar__footer">
                <div className="sidebar__dark-mode">
                    <span className="sidebar__dark-mode-label">
                        <i className="pi pi-moon" />
                        Dark Mode
                    </span>

                    <div className="sidebar__toggle">
                        <div className="sidebar__toggle-handle">
                            <i className="pi pi-check" />
                        </div>
                    </div>
                </div>

                <div className="sidebar__user">
                    <div className="sidebar__avatar">
                        E
                    </div>

                    <div className="sidebar__user-info">
                        <strong>Eliza</strong>
                        <small>Company Admin</small>
                    </div>
                </div>

                <button className="sidebar__logout">
                    <i className="pi pi-sign-out" />
                    <span>Sair</span>
                </button>
            </div>
        </aside>
    );
}