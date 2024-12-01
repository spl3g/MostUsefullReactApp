import "./Footer.css";
import PageTabs from "../page-tabs/PageTabs";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="page-tabs">
                <PageTabs linePosition="top" />
            </div>
            <div className="company-text">@ 2024 My Lethal Company</div>
        </footer>
    );
};

export default Footer;
