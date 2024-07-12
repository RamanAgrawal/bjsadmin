import {
  FiShoppingCart,
  FiUser,
  FiTag,
  FiBox,
  FiDollarSign,
  FiStar,
  FiPlus,
  FiList,
  FiUsers,
  FiSettings,
} from "react-icons/fi";

export const links = [
  {
    title: "Main Menu",
    links: [
      {
        name: "dashboard",
        icon: <FiBox />,
      },
      {
        name: "order-management",
        icon: <FiShoppingCart />,
      },
      {
        name: "customers",
        icon: <FiUser />,
      },
      {
        name: "coupon-code",
        icon: <FiTag />,
      },
      {
        name: "categories",
        icon: <FiBox />,
      },
      {
        name: "transaction",
        icon: <FiDollarSign />,
      },
      {
        name: "brand",
        icon: <FiStar />,
      },
    ],
  },
  {
    title: "Products",
    links: [
      {
        name: "add-products",
        icon: <FiPlus />,
      },
      {
        name: "product-list",
        icon: <FiList />,
      },
    ],
  },
  {
    title: "Admin",
    links: [
      {
        name: "manage-admins",
        icon: <FiUsers />,
      },
      {
        name: "admin-roles",
        icon: <FiSettings />,
      },
    ],
  },
];

interface Order {
  id: string;
  created: string;
  customer: string;
  total: string;
  profit: string;
  profitPercentage: string;
  status: string;
  items: OrderItem[];
}

interface OrderItem {
  sku: string;
  name: string;
  price: string;
  qty: string;
  discount: string;
  total: string;
}

export const orders: Order[] = [
  {
    id: "#6548",
    created: "2 min ago",
    customer: "Joseph Wheeler",
    total: "$2647.32",
    profit: "$154",
    profitPercentage: "16%",
    status: "Delivered",
    items: [
      {
        sku: "#6548",
        name: "Apple iPhone 13",
        price: "$999.29",
        qty: "1x",
        discount: "5%",
        total: "$949.32",
      },
      {
        sku: "#6548",
        name: "Apple iPhone 13",
        price: "$999.29",
        qty: "1x",
        discount: "5%",
        total: "$949.32",
      },
      {
        sku: "#6548",
        name: "Apple iPhone 13",
        price: "$999.29",
        qty: "1x",
        discount: "5%",
        total: "$949.32",
      },
    ],
  },
  {
    id: "#6549",
    created: "2 min ago",
    customer: "Joseph Wheeler",
    total: "$2647.32",
    profit: "$154",
    profitPercentage: "16%",
    status: "Pending",
    items: [
      {
        sku: "#6548",
        name: "Apple iPhone 13",
        price: "$999.29",
        qty: "1x",
        discount: "5%",
        total: "$949.32",
      },
      {
        sku: "#6548",
        name: "Apple iPhone 13",
        price: "$999.29",
        qty: "1x",
        discount: "5%",
        total: "$949.32",
      },
      {
        sku: "#6548",
        name: "Apple iPhone 13",
        price: "$999.29",
        qty: "1x",
        discount: "5%",
        total: "$949.32",
      },
    ],
  },
  // Add more orders as needed
];

export const salesData = [
  {
    country: "United States",
    users: 30000,
    sales: 25.8,
    flag: "🇺🇸",
    positive: true,
  },
  {
    country: "Brazil",
    users: 26000,
    sales: -16.2,
    flag: "🇧🇷",
    positive: false,
  },
  { country: "India", users: 22000, sales: 12.3, flag: "🇮🇳", positive: true },
  {
    country: "Australia",
    users: 17000,
    sales: -11.9,
    flag: "🇦🇺",
    positive: false,
  },
];


export const linedata = [
  {
    id: "Sales",
    color: "#009EFF",
    data: [
      { x: "MON", y: 10 },
      { x: "TUE", y: 20 },
      { x: "WED", y: 30 },
      { x: "THU", y: 40 },
      { x: "FRI", y: 40 },
      { x: "SAT", y: 50 },
      { x: "SUN", y: 10 },
    ],
  },
  {
    id: "Cost",
    // color: "hsl(3, 70%, 50%)",
    data: [
      { x: "MON", y: 20 },
      { x: "TUE", y: 30 },
      { x: "WED", y: 40 },
      { x: "THU", y: 50 },
      { x: "FRI", y: 45 },
      { x: "SAT", y: 60 },
      { x: "SUN", y: 20 },
    ],
  },
];
