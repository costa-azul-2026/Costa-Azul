import "./NavBar.css";

export function NavBar() {
    return (
        <header className="navbar">
            <nav className="navbar__nav">
                <ul>
                    <li><a href="/dashboard">Dashboard</a></li>
                    <li><a href="/vessel">Embarcações</a></li>
                    <li><a href="/trips">Viagens</a></li>
                    <li><a href="/crew">Tripulação</a></li>
                    <li><a href="/finance">Financeiro</a></li>
                     <li><a href="/relatorios">Relatórios</a></li>
                    <li><a href="/settings">Configurações</a></li>
                </ul>
            </nav>
        </header>
    )
}