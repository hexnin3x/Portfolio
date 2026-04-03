import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', position: 'relative' }}>
            <Navbar />
            <main style={{ flex: 1, paddingTop: 'var(--nav-height)', position: 'relative', zIndex: 1 }}>
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
