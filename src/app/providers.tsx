import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";


const Providers = ({ children }: { children: ReactNode }) => {
  return (
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem={true}>
        {children}
      </ThemeProvider>
  );
};
export default Providers;