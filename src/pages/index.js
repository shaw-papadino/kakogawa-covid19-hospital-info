import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import { hospitalDatas } from "../hospital-data";

const ResponsiveTypography = (props) => {
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

const tel = "電話";
const contact = "窓口";
const internet = "ネット";
const selfReserve = "病院にて予約";
const cityReserve = "市にて予約";

const BasicTable = () => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            {headers.map((header) => (
              <TableCell>{header}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {hospitalDatas.map((row) => (
            <TableRow key={row.hospitalName}>
              <TableCell component="th" scope="row">
                {row.hospitalName}
              </TableCell>
              <TableCell>
                <a href={row.address.url}>{row.address.name}</a>
              </TableCell>
              <TableCell>{row.reserveType}</TableCell>
              <TableCell>{row.reserveStart}</TableCell>
              <TableCell>{row.vaccineStart}</TableCell>
              <TableCell>{row.reserveWay}</TableCell>
              <TableCell>
                <a href={row.homePageUrl}>HP</a>
              </TableCell>
              <TableCell>{row.tel}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const Top = () => {
  let theme = createMuiTheme();
  theme = responsiveFontSizes(theme);
  return (
    <>
      <ThemeProvider theme={theme}>
        <ResponsiveTypography variant="h4">
          加古川市内のコロナワクチン個別接種実施医療機関まとめ
        </ResponsiveTypography>
        <ResponsiveTypography variant="body1">注意点</ResponsiveTypography>
        <ResponsiveTypography variant="body2">
          ・病院予約タイプの医療機関はかかりつけ患者のみ予約
        </ResponsiveTypography>
        <ResponsiveTypography variant="body2">
          ・市予約タイプの医療機関は市の『WEB予約抽選申込ページ』で予約
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
      <BasicTable />
    </>
  );
};

export default Top;
