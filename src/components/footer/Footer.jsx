const Footer = () => {
    return (
        <>
            <footer className="footer">
                <p className="description">
                    Backstage Talks is a magazine of casual, but in depth dialogues on design and business. Our decisions shape and influence this complex world—to have a chance to make the right ones, we need to talk.
                    <span className="copyright">
                        &copy; 2023 <a className="link">Published by Büro Milk</a>
                    </span>
                    <br />
                    <a className="policy">Privacy Policy</a>
                </p>
                <ul className="menu">
                    <li><a className="menulink issue7" href="#issue7">Issue #7</a></li>
                    <li><a className="menulink issue6" href="#issue6">Issue #6</a></li>
                    <li><a className="menulink issue5" href="#issue5">Issue #5</a></li>
                    <li><a className="menulink issue4" href="#issue4">Issue #4</a></li>
                    <li><a className="menulink issue3" href="#issue3">Issue #3</a></li>
                    <li><a className="menulink issue2" href="#issue2">Issue #2</a></li>
                    <li><a className="menulink issue1" href="#issue1">Issue #1</a></li>
                </ul>
                <div className="contact">
                    <a className="mail">info@backstagetalks.com</a>
                </div>
            </footer>
        </>
    )
}

export default Footer
