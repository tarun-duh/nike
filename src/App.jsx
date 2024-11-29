import {
  Hero,
  PopularProducts,
  SuperQuality,
  Services,
  SpecialOffers,
  Subscribe,
  CustomerReview,
  Footer,
} from "./Sections";
import Nav from "./components/Nav";
const App = () => (
  <main className="relative">
    <Nav />
    <section className="padding-b  xl:p-1">
      <Hero />
    </section>
    <section className="padding">
      <PopularProducts />
    </section>
    <section className="padding">
      <SuperQuality />
    </section>
    <section className="padding-x py-10">
      <Services />
    </section>
    <section className="padding">
      <SpecialOffers />
    </section>
    <section className="bg-pale-blue padding">
      <CustomerReview />
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe />
    </section>
    <section className="bg-black padding-x padding-t pb-8">
      <Footer />
    </section>
  </main>
);

export default App;