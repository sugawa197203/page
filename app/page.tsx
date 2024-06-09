export default function Home() {
  return (
      <div className="min-h-screen bg-[#f0f0f0] font-noto-sans-jp">
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
                      <li>Unity</li>
                      <li>C#</li>
                  </ul>
              </section>
              <section className="mb-6">
                  <h2 className="text-2xl font-semibold mb-2">Projects</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="border p-4 bg-white shadow-sm">
                          <h3 className="font-bold mb-2">イラストレース</h3>
                          <p>
                              書いた絵で遊べるレースゲーム
                          </p>
                      </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="border p-4 bg-white shadow-sm">
                          <h3 className="font-bold mb-2">Avoid Game</h3>
                          <p>
                              モーションキャプチャーで遊べるゲーム
                          </p>
                      </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="border p-4 bg-white shadow-sm">
                          <h3 className="font-bold mb-2">BeABachelor</h3>
                          <p>
                              単位を回収するゲーム
                          </p>
                      </div>
                  </div>
              </section>
          </main>
      </div>
  );
}
