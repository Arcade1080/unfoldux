import Footer from './Footer';
import Header from './Header';

export default function Layout({ children }) {
  return (
    <div className="xl:container">
      <Header />
      <div className="">{children}</div>
      <Footer />
    </div>
  );
}
