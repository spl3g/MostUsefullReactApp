import "./Footer.css";
import PageTabs from "../page-tabs/PageTabs";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="page-tabs">
                <PageTabs linePosition="top" />
            </div>
        </footer>
    );
};

export default Footer;
