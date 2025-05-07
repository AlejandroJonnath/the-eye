import NavBar from './components/NavBar';
import Hero   from './components/Hero';
import Products from './components/Products';
import Services from './components/Services';
import Footer   from './components/Footer';

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <Products />
        <Services />
      </main>
      <Footer />
    </>
  );
}

export default App;
