import FindPageIcon from "../assets/findPage";
import LinkIcon from "../assets/linkIcon";
import QueryStatsIcon from "../assets/queryStatsIcon";
import TroubleshootIcon from "../assets/troubleshootIcon";

export const featuresData = [
  {
    icon: TroubleshootIcon,
    iconBoxClass: "odd-icon-box",
    title: "Advanced Stock Screener",
    content:
      "Access advanced flters like volume shockers, price action, range breakout, opening price  clues, and more for efcient stock screening.",
  },
  {
    icon: QueryStatsIcon,
    title: "Live Market Screener",
    iconBoxClass: "even-icon-box",

    content:
      "Access real-time market data and  dynamic flters to ensure timely trades  without outdated information.",
  },
  {
    icon: FindPageIcon,
    iconBoxClass: "odd-icon-box",

    title: "Options Screener",
    content:
      "Quickly identify optimal trading  opportunities in the options market with  our real-time data and advanced flters.",
  },
  {
    icon: LinkIcon,
    title: "Advanced Option Chain",
    iconBoxClass: "even-icon-box",

    content:
      "Stay ahead with highlighted data on  Greeks, PCR, Vol PCR, and Expected  Range for the Day feature for  confdent target setting",
  },
];

export const pricingData = [
  {
    title: "Number of Users",
    td1: 1,
    td2: 3,
    td3: 1,
  },

  {
    title: "Users Per Page",
    td1: "5 Pages",
    td2: "50 Pages",
    td3: (
      <div>
        <p>Unlimited</p>
        <p className="text-darkGray">Pages Add-ons on Demand</p>
      </div>
    ),
  },

  {
    title: "Includes essential features to get started",
    td1: "approve",
    td2: "approve",
    td3: "approve",
  },
  {
    title: "More advanced features for increased productivity",
    td1: "reject",
    td2: "approve",
    td3: "approve",
  },
  {
    title: "Designing & Development",
    td1: "reject",
    td2: "approve",
    td3: "approve",
  },
  {
    title: "Customizable options to meet your specific needs",
    td1: "reject",
    td2: "approve",
    td3: "approve",
  },
  {
    title: "Secure data storage",
    td1: "reject",
    td2: "approve",
    td3: "approve",
  },
  {
    title: "Email Support",
    td1: "reject",
    td2: "approve",
    td3: "approve",
  },
  {
    title: "24/7 customer support",
    td1: "reject",
    td2: "approve",
    td3: "approve",
  },
  {
    title: "Analytics and reporting",
    td1: "reject",
    td2: "approve",
    td3: "approve",
  },
  {
    title: "Account Management",
    td1: "approve",
    td2: "approve",
    td3: "approve",
  },
];
