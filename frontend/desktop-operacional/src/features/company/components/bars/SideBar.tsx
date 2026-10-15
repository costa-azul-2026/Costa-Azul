import "./SideBar.css";

export function SideBar() {
    return (
        <aside className="sidebar">

            <div className="sidebar__logo">
                <span>Cost</span>
                <strong>Azul</strong>
            </div>

            <div className="sidebar__content">

                <span className="sidebar__section-title">
                    GLOBAL ADMINISTRATION
                </span>

                <button className="sidebar__item sidebar__item--active">
                    <i className="pi pi-th-large" />
                    <span>Dashboard</span>
                </button>

                <span className="sidebar__section-title">
                    OPERAÇÃO
                </span>

                <button className="sidebar__item">
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

                <span className="sidebar__section-title">
                    ADMINISTRAÇÃO
                </span>

                <button className="sidebar__item">
                    <i className="pi pi-history" />
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

            <div className="sidebar__footer">

                <div className="sidebar__search">
                    <i className="pi pi-search" />
                    <input placeholder="Pesquisar..." />
                </div>

                <div className="sidebar__dark-mode">
                    <span>
                        <i className="pi pi-moon" />
                        Dark Mode
                    </span>

                    <div className="sidebar__toggle">
                        <div />
                    </div>
                </div>

                <div className="sidebar__user">
                    <div className="sidebar__avatar">
                        E
                    </div>

                    <div>
                        <strong>Eliza</strong>
                        <small>Company Admin</small>
                    </div>
                </div>

                <button className="sidebar__logout">
                    <i className="pi pi-sign-out" />
                    Sair
                </button>

            </div>

        </aside>
    );
}