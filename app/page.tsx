import Image from "next/image";

export default function Home() {
  return (
      <div className="min-h-screen bg-[#f0f0f0] font-noto-sans-jp">
          <header className="bg-[#121212] text-white p-4">
              <h1 className="text-3xl font-bold">SUGAWA</h1>
          </header>
          <main className="container mx-auto p-6">
              <section className="mb-6">
                  <h2 className="text-2xl font-semibold mb-2">Profile</h2>
                  <p>
                      SUGAWA
                  </p>
              </section>
              <section className="mb-6">
                  <h2 className="text-2xl font-semibold mb-2">Skils</h2>
                  <ul className="list-disc list-inside">
                      <li>explosion magic</li>
                  </ul>
              </section>
              <section className="mb-6">
                  <h2 className="text-2xl font-semibold mb-2">Projects</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="border p-4 bg-white shadow-sm">
                          <h3 className="font-bold mb-2">Will write it later</h3>
                          <p>
                              ^w^
                          </p>
                      </div>
                  </div>
              </section>
          </main>
          <footer className="bg-[#121212] text-white p-4 text-center">
              &copy; 2023 SUGAWA
          </footer>
      </div>
  );
}
