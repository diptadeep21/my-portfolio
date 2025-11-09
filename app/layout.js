import { GoogleTagManager } from "@next/third-parties/google";
import { Poppins } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import ScrollToTop from "./components/helper/scroll-to-top";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";
const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins"
});

export const metadata = {
  title: "Portfolio of Diptadeep Sarkar - Software Developer",
  description:
    "This is the portfolio of Diptadeep Sarkar. I am a Software Developer, MERN Stack Developer, and Flutter Enthusiast. I am currently pursuing my B.Tech in Computer Engineering at VIIT Pune. I love to learn new technologies and am always open to collaborating with others. I am a quick learner and I am always looking for new challenges.",
  icons: {
    icon: "/profile.png",
    shortcut: "/profile.png",
    apple: "/profile.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} ${poppins.variable}`}>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
          <ScrollToTop />
        </main>
        <Footer />
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  );
}
