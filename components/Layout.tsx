import Footer from './Footer';
import Header from './Header';

export default function Layout({ children }) {
  return (
    <div className="xl:container h-screen ">
      <Header />
      <div className="wrapperPadding">{children}</div>
      <Footer />
    </div>
  );
}
