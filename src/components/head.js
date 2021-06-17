import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Helmet } from "react-helmet";
import { useLocation } from "@reach/router";

export const Head = () => {
  const { pathname } = useLocation();
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          siteUrl
          description
          lang
          twitterUsername
        }
      }
    }
  `);
  const { title, siteUrl, description, lang, twitterUsername } =
    site.siteMetadata;

  const url = `${siteUrl}${pathname}`;
  return (
    <Helmet htmlAttributes={{ lang: lang }} title={title}>
      <meta name="description" content={description} />
      <meta
        name="google-site-verification"
        content="kmZW5GYU4y2ixeQIYR9jy10nN0buT9cGptqxwCjlGrk"
      />
      {url && <meta property="og:url" content={url} />}
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      <meta name="twitter:card" content="summary" />
      {twitterUsername && (
        <meta name="twitter:creator" content={twitterUsername} />
      )}
      {title && <meta name="twitter:title" content={title} />}
      {description && <meta name="twitter:description" content={description} />}
    </Helmet>
  );
};
