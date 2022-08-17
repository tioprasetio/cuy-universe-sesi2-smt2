import React, {useState, useEffect} from 'react'
import Introduction from './componentes/introduction'

function App() {
  const [pacarSaya, setPacarSaya] = useState(1)
  const [namaPacar, setNamaPacar] = useState("");
  const refreshPage = () => {
    window.location.reload();
  };
  
  useEffect(() => {
    if (pacarSaya > 0) {
      setNamaPacar('Anya Geraldine')
    } else if (pacarSaya < 0) {
      alert("Udah bro, udh jomblo ga bisa dikurangin lagi");
      setPacarSaya(0)
      btnHapus.style.display = "none";
      btnTambah.style.display = "none";
      btnCari.textContent = "cari pacar lagi";
    } else if (pacarSaya < 1) {
      setNamaPacar("Saya Jomblo");
    }
  }, [pacarSaya])

  let btnHapus = document.getElementById('btnHapus');
  let btnTambah = document.getElementById("btnTambah");
  let btnCari = document.getElementById("btnCari");

  return (
    <div>
      <h5>Nama pacar: {namaPacar}</h5>
      <h1>Saya memiliki pacar: {pacarSaya}</h1>
      <button id='btnCari' onClick={() => refreshPage()}>Home</button>
      <button id='btnTambah' onClick={() => setPacarSaya((prev) => prev + 1)}>Tambah pacar</button>
      <button id='btnHapus' onClick={() => setPacarSaya((prev) => prev - 1)}>Hapus pacar</button>
      {/* <Introduction name = "Tio Yudho" /> */}
      {/* <Introduction name = "Anya Geraldine" /> */}
    </div>
  );
}

export default App;
