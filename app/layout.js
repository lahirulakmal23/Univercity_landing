import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";




export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body className="bg-gray-100">
      
        <Navbar />
        <main className="relative overflow-hidden">
        {children}
        </main>
        <Footer />
        
        </body>
    </html>
  );
}
