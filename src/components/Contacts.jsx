export default function({ links }){
    return(
        <div className="contacts">
            <div className="contactLine">
                <hr className="beforeLine" />
                <p className="contactText"> Contact Me </p>
                <hr className="afterLine" />
            </div>
            <ul className="contactLinks">
                {links.map((link) => (
                <a key={link.label}
                    href={link.href}>
                        {link.label}
                </a>
                ))}
            </ul>
        </div>
    )
}