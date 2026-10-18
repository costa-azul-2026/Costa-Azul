import "./TopBar.css";

export function TopBar() {
    return (
        <header className="topbar">
            <div className="topbar__left">
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
                <button className="topbar__flag-button" aria-label="Idioma Português (Brasil)">
                    <svg
                        width="30"
                        height="21"
                        viewBox="0 0 30 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <rect width="30" height="21" rx="2.5" fill="#16A34A" />
                        <path d="M15 2.5L27 10.5L15 18.5L3 10.5L15 2.5Z" fill="#FACC15" />
                        <circle cx="15" cy="10.5" r="4.5" fill="#1E3A8A" />
                        <path
                            d="M11 9.5C13.2 8.7 16.8 9.2 19 11"
                            stroke="#FFFFFF"
                            strokeWidth="1.1"
                            strokeLinecap="round"
                        />
                    </svg>
                </button>

                <button className="topbar__icon-button" aria-label="Configurações">
                    <i className="pi pi-cog" />
                </button>

                <button className="topbar__icon-button" aria-label="Notificações">
                    <i className="pi pi-bell" />
                </button>

                <button className="topbar__avatar" aria-label="Perfil do usuário">
                    E
                </button>
            </div>
        </header>
    );
}