import "./TopBar.css";

export function TopBar() {
    return (
        <header className="topbar">
            <div className="topbar__left">
                <button className="topbar__company">
                    <i className="pi pi-building" />
                    <span>Empresa "X"</span>
                    <i className="pi pi-chevron-down" />
                </button>

                <span className="topbar__home">
                    Página Inicial
                </span>
            </div>

            <div className="topbar__search">
                <i className="pi pi-search" />

                <input
                    type="text"
                    placeholder="Buscar..."
                />

                <span className="topbar__shortcut">
                    Ctrl K
                </span>
            </div>

            <div className="topbar__actions">
                <button className="topbar__icon-button">
                    🇧🇷
                </button>

                <button className="topbar__icon-button">
                    <i className="pi pi-cog" />
                </button>

                <button className="topbar__icon-button">
                    <i className="pi pi-bell" />
                </button>

                <button className="topbar__avatar">
                    E
                </button>
            </div>
        </header>
    );
}