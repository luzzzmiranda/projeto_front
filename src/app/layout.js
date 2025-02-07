import Header from "@/components/header"
import "./globals.css";


export const metadata = {
  title: "Clínica",
  description: "Trabalho front",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body >
        <Header/>
        {children}
      </body>
    </html>
  );
}
