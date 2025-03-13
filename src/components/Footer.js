const Footer = () => {
    return (
      <footer style={styles.footerContainer}>
        {/* Footer content (if any) */}
      </footer>
    );
  };
  
  const styles = {
    footerContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px',
      backgroundColor: 'rgba(240, 242, 246, 0.8)', // Semi-transparent background
      boxShadow: '0 -2px 8px rgba(0,0,0,0.05)',
      width: '100%',
      zIndex: 1, // Ensure it's above the background image
    },
  };
  
  export default Footer;