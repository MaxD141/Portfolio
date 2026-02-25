export default function Navbar({ links, onNavigate }){
    return(
        <div className="navbar">
            <ul className="navbar-links">
                {links.map((link) => (
                <button class="navButton"
                    onClick={() => onNavigate(link.label)}
                >
                    {link.label}
                </button>
                ))}
            </ul>
        </div>
    );
}