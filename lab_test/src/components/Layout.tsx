import Footer from './Footer';
import Form from './Form';
import Header from './Header';
import HowItWorks from './HowItWorks';
import NavBar from './NavBar';
import QAndA from './QAndA';
import Questined from './Questined';
import Reviews from './Reviews';
import ThirdBlock from './ThirdBlock';

export default function Layout() {
  return (
    <div className='' id='home'>
      <NavBar />

      <Header />

      <main>
        <HowItWorks />
        <ThirdBlock />
        <Reviews />
        <QAndA />
        <Questined />
        <Form />
      </main>

      <Footer />
    </div>
  );
}
