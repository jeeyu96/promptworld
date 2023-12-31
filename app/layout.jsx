import '@styles/globals.css';

import Nav from '@components/Nav';
import Provider from '@components/Provider';


// define metadata / SEO for application
export const metadata = {
    title : "Promptworld",
    description: "Discover & Share AI Prompts"
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
        <body>
            <div className="main">
                <div className="gradient">
                </div>
                <main className ="app">
                    <Nav />
                    {children}
                </main>
            </div>
        </body>
    </html>
  )
}

export default RootLayout