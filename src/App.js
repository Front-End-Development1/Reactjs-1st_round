import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Layout from "./reactbootstrap/Layout";
import Form from "./reactbootstrap/Form";
import CardExample from "./reactbootstrap/Card";
import CarouselExample from "./reactbootstrap/CarouselExample";
import Content from "./components/Content";

function App() {
  return (
    <>
    <Header />
    <Navbar />
    < CarouselExample />
    < Content />
    <Layout/>
    <CardExample />
    <Form />
    <Footer />
    
    </>
  );
}

export default App;
