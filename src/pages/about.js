import * as React from "react";
import { Link } from "gatsby";
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core/styles";
import { ResponsiveTypography } from "./index.js";
import { FaTwitter } from "react-icons/fa";
import { Layout } from "../components/layout";

const About = () => {
  let theme = createMuiTheme();
  theme = responsiveFontSizes(theme);
  return (
    <Layout>
      <Link to="/">ワクチン接種医療機関ページに戻る</Link>
      <ThemeProvider theme={theme}>
        <ResponsiveTypography variant="h6">自己紹介</ResponsiveTypography>
        <br />
        <ResponsiveTypography variant="body2">
          東加古川で生まれ育ち、今は東京でエンジニアをしています。
        </ResponsiveTypography>
        <br />
        <ResponsiveTypography variant="body2">
          地元に少しでも恩返しがしたいと思いこのまとめサイトを作りました。
        </ResponsiveTypography>
        <br />
        <ResponsiveTypography variant="body2">
          とにかく公開することを優先したので、改善しないといけない部分がたくさんあると思います。
        </ResponsiveTypography>
        <br />
        <ResponsiveTypography variant="body2">
          下記連絡先にでもどしどしご意見ください。よろしくお願いします。
        </ResponsiveTypography>
        <ResponsiveTypography variant="body2">
          連絡先:
          <a href="https://twitter.com/papa_ok_san">
            <FaTwitter />
            twitterアカウントを確認
          </a>
        </ResponsiveTypography>
      </ThemeProvider>
    </Layout>
  );
};

export default About;
