function Footer() {
    return <footer className="page-footer blue darken-2">
        <div className="container">
            <div className="footer-copyright">
                <div className="container">
                    © {new Date().getFullYear()} React Movies
                    <a className="grey-text text-lighten-4 right" href="#!">Repo</a>
                </div>
            </div>
        </div>
    </footer>

}

export { Footer }