
interface NavbarProps {
    children: React.ReactNode
}

const Navbar: React.FC<NavbarProps> = ({ children }) => {
    return (
        <div style={{ height: '10vh', display: 'flex', alignItems: 'center', gap: '20px', backgroundColor: 'yellow', paddingLeft: '20px' }}>
            {children}
        </div>
    );
};

export default Navbar;
