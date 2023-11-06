import './globals.css'
import Navbar from "./Components/Navbar/Navbar"
import Footer from "./Components/Footer/Footer";

export const metadata = {
  title: 'EcoCancún',
  description: 'Página oficial del programa ambiental ecoCancún',
  icons: {
    icon: "/favicon.png",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        { children }
      </body>
        <Footer />
    </html>
  )
}