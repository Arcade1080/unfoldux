import Footer from './Footer';
import Header from './Header';

export default function Layout({ children }) {
  return (
    <div className="2xl:container  ">
      <Header />
      <div className="wrapperPadding">{children}</div>
      <Footer />
    </div>
  );
}
