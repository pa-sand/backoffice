import AccountBalanceWalletRoundedIcon from "@mui/icons-material/AccountBalanceWalletRounded";
import CrisisAlertRoundedIcon from "@mui/icons-material/CrisisAlertRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import ManageAccountsRoundedIcon from "@mui/icons-material/ManageAccountsRounded";
import RoundaboutLeftRoundedIcon from "@mui/icons-material/RoundaboutLeftRounded";
import AddTaskRoundedIcon from "@mui/icons-material/AddTaskRounded";
import AllInclusiveRoundedIcon from "@mui/icons-material/AllInclusiveRounded";

export const SideBarDatas = [
  {
    text: "حسابداری",
    icon: <AccountBalanceWalletRoundedIcon />,
    link: "/counter",
  },
  {
    text: "دریافت/پرداخت",
    icon: <CrisisAlertRoundedIcon />,
    link: "/deposit",
  },
  {
    text: "پروفایل",
    icon: <AccountCircleRoundedIcon />,
    link: "/profile",
  },
  {
    text: "مدیریت اوراق بهادار",
    icon: <ManageAccountsRoundedIcon />,
    link: "/manage",
  },
  {
    text: "مدیریت بورس کالا",
    icon: <RoundaboutLeftRoundedIcon />,
    link: "/manageStocks",
  },
  {
    text: "مرکز عملیات",
    icon: <AddTaskRoundedIcon />,
    link: "/operationcenter",
  },
  {
    text: "اعتبارات  ",
    icon: <AllInclusiveRoundedIcon />,
    link: "/opacity",
  },
];
