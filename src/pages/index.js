import * as React from "react";
import { Link } from "gatsby";
import { makeStyles } from "@material-ui/core/styles";
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import MaterialTable from "@material-table/core";
import { tableIcons } from "../tableicons";
import { hospitalDatas } from "../hospital-data";
import { Layout } from "../components/layout";

export const ResponsiveTypography = (props) => {
  return <Typography variant={props.variant}>{props.children}</Typography>;
};
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(
  hospitalName,
  address,
  reserveType,
  reserveStart,
  vaccineStart,
  reserveWay,
  homePageUrl,
  tel
) {
  return {
    hospitalName,
    address,
    reserveType,
    reserveStart,
    vaccineStart,
    reserveWay,
    homePageUrl,
    tel,
  };
}

const headers = [
  "医療機関名",
  "住所",
  "予約タイプ",
  "予約開始日",
  "接種開始日",
  "予約方法",
  "HP",
  "TEL",
];

const columns = [
  { title: "医療機関名", field: "hospitalName" },
  {
    title: "住所",
    field: "address",
    render: (row) => <a href={row.address.url}>{row.address.name}</a>,
    customFilterAndSearch: (term, row) => row.address.name.indexOf(term) > -1,
  },
  { title: "予約タイプ(病院 or 市)", field: "reserveType" },
  { title: "予約方法", field: "reserveWay" },
  {
    title: "予約開始日",
    field: "reserveStart",
    filtering: false,
  },
  { title: "接種開始日", field: "vaccineStart", filtering: false },
  {
    title: "HP",
    field: "homePageUrl",
    render: (row) => <a href={row.homePageUrl}>HP</a>,
    filtering: false,
  },
  { title: "TEL", field: "tel", filtering: false },
];

const FilterableTable = ({ title, columns, data, ...props }) => {
  return (
    <MaterialTable
      icons={tableIcons}
      title={title}
      columns={columns}
      data={data}
      {...props}
    />
  );
};

const Top = () => {
  let theme = createMuiTheme();
  theme = responsiveFontSizes(theme);
  return (
    <Layout>
      <ThemeProvider theme={theme}>
        <ResponsiveTypography variant="h4">
          加古川市内のコロナワクチン個別接種実施医療機関まとめ
        </ResponsiveTypography>
        <ResponsiveTypography variant="body1">注意点</ResponsiveTypography>
        <ResponsiveTypography variant="body2">
          ・病院予約タイプの医療機関はかかりつけ患者のみ予約
        </ResponsiveTypography>
        <ResponsiveTypography variant="body2">
          ・市予約タイプの医療機関は以下の方法で予約
        </ResponsiveTypography>
        <ResponsiveTypography variant="body2">
          　・
          <a href="https://form.kintoneapp.com/public/form/show/80d93ad98127e9285c0a9d0d6dcbfbfc8aabf0f7c77e64e66f3487b14e40ce68">
            WEB予約抽選申込ページ
          </a>
          から予約
        </ResponsiveTypography>
        <ResponsiveTypography variant="body2">
          　・市コールセンター(0570-022-160)へ連絡
        </ResponsiveTypography>
        <ResponsiveTypography variant="body2">
          ・<Link to="/about">サイト制作者について</Link>
        </ResponsiveTypography>
        <ResponsiveTypography variant="body2">
          <p>
            参考元サイト:
            <a href="https://www.city.kakogawa.lg.jp/corona/31856.html">
              新型コロナワクチン個別接種について|加古川市
            </a>
          </p>
        </ResponsiveTypography>
      </ThemeProvider>
      {/* <BasicTable /> */}
      <FilterableTable
        title={""}
        columns={columns}
        data={hospitalDatas}
        options={{ filtering: true, pageSize: 10 }}
      />
    </Layout>
  );
};

export default Top;
