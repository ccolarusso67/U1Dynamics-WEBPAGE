/* U1DYNAMICS · v3 — App orchestration */

function App() {
  useReveal();
  return (
    <>
      <Cursor />
      <Loader />
      <Chrome />
      <Tweaks />
      <main>
        <Hero />
        <Trust />
        <Ticker />
        <Plant />
        <Gallery />
        <Process />
        <Specimen />
        <Rack />
        <SpecSheet />
        <Compare />
        <Quality />
        <Industries />
        <Sustainability />
        <CaseStudy />
        <News />
        <Dashboard />
        <Markets />
        <Founder />
        <Careers />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
