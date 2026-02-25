export default function({ links }){
    return(
        <div className="contacts">
            <p classname="contactLine">
                ------------------------------ Contact Me ------------------------------
            </p>
            <ul className="contactLinks">
                {links.map((link) => (
                <li key={link.label}>
                    <a href={link.href}>{link.label}</a>
                </li>
                ))}
            </ul>
        </div>
    )
}