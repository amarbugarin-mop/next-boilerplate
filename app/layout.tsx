"use client";

import Navigation from "@/components/navigation";
import StyledComponentsRegistry from "@/lib/registry";
import Document, { DocumentContext } from "next/document";
import { ServerStyleSheet } from "styled-components";

/**
 * @description
 * Main layout for the application and html structure
 *
 * @param {React.ReactNode} children - children
 * @return {React.ReactElement} - react element
 */
const rootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en">
    <head />
    <body>
      <StyledComponentsRegistry>
        <Navigation />
        {children}
      </StyledComponentsRegistry>
    </body>
  </html>
);

rootLayout.getInitialProps = async (ctx: DocumentContext) => {
  const sheet = new ServerStyleSheet();
  const originalRenderPage = ctx.renderPage;
  try {
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />), // gets the styles from all the components inside <App>
      });
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          {/* 👇 insert the collected styles to the html document */}
          {sheet.getStyleElement()}
        </>
      ),
    };
  } finally {
    sheet.seal();
  }
};
export default rootLayout;
