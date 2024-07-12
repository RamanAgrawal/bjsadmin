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



export const  orders = [
  {
    id: 'ORD001',
    created: '2023-06-25',
    customer: 'John Doe',
    total: '$100.00',
    profit: '$20.00',
    profitPercentage: '20%',
    status: 'Pending',
    items: [
      { sku: 'SKU001', name: 'Product 1', price: '$20.00', qty: 2, discount: '$0.00', total: '$40.00' },
      { sku: 'SKU002', name: 'Product 2', price: '$30.00', qty: 2, discount: '$5.00', total: '$55.00' },
      { sku: 'SKU003', name: 'Product 3', price: '$15.00', qty: 1, discount: '$0.00', total: '$15.00' },
    ],
  },
  {
    id: 'ORD002',
    created: '2023-06-26',
    customer: 'Jane Smith',
    total: '$200.00',
    profit: '$40.00',
    profitPercentage: '20%',
    status: 'Confirmed',
    items: [
      { sku: 'SKU004', name: 'Product 4', price: '$50.00', qty: 2, discount: '$0.00', total: '$100.00' },
      { sku: 'SKU005', name: 'Product 5', price: '$25.00', qty: 4, discount: '$0.00', total: '$100.00' },
    ],
  },
  {
    id: 'ORD003',
    created: '2023-06-27',
    customer: 'Alice Johnson',
    total: '$150.00',
    profit: '$30.00',
    profitPercentage: '20%',
    status: 'Processing',
    items: [
      { sku: 'SKU006', name: 'Product 6', price: '$50.00', qty: 1, discount: '$0.00', total: '$50.00' },
      { sku: 'SKU007', name: 'Product 7', price: '$20.00', qty: 5, discount: '$0.00', total: '$100.00' },
    ],
  },
  {
    id: 'ORD004',
    created: '2023-06-28',
    customer: 'Bob Brown',
    total: '$250.00',
    profit: '$50.00',
    profitPercentage: '20%',
    status: 'Picked',
    items: [
      { sku: 'SKU008', name: 'Product 8', price: '$100.00', qty: 1, discount: '$0.00', total: '$100.00' },
      { sku: 'SKU009', name: 'Product 9', price: '$75.00', qty: 2, discount: '$0.00', total: '$150.00' },
    ],
  },
  {
    id: 'ORD005',
    created: '2023-06-29',
    customer: 'Charlie Davis',
    total: '$300.00',
    profit: '$60.00',
    profitPercentage: '20%',
    status: 'Shipped',
    items: [
      { sku: 'SKU010', name: 'Product 10', price: '$150.00', qty: 2, discount: '$0.00', total: '$300.00' },
    ],
  },
  {
    id: 'ORD006',
    created: '2023-06-30',
    customer: 'David Evans',
    total: '$400.00',
    profit: '$80.00',
    profitPercentage: '20%',
    status: 'Delivered',
    items: [
      { sku: 'SKU011', name: 'Product 11', price: '$200.00', qty: 2, discount: '$0.00', total: '$400.00' },
    ],
  },
  {
    id: 'ORD007',
    created: '2023-07-01',
    customer: 'Eve Foster',
    total: '$500.00',
    profit: '$100.00',
    profitPercentage: '20%',
    status: 'Cancelled',
    items: [
      { sku: 'SKU012', name: 'Product 12', price: '$250.00', qty: 2, discount: '$0.00', total: '$500.00' },
    ],
  },
];


// export const orders: Order[] = [
//   {
//     id: "#6548",
//     created: "2 min ago",
//     customer: "Joseph Wheeler",
//     total: "$2647.32",
//     profit: "$154",
//     profitPercentage: "16%",
//     status: "Delivered",
//     items: [
//       {
//         sku: "#6548",
//         name: "Apple iPhone 13",
//         price: "$999.29",
//         qty: "1x",
//         discount: "5%",
//         total: "$949.32",
//       },
//       {
//         sku: "#6548",
//         name: "Apple iPhone 13",
//         price: "$999.29",
//         qty: "1x",
//         discount: "5%",
//         total: "$949.32",
//       },
//       {
//         sku: "#6548",
//         name: "Apple iPhone 13",
//         price: "$999.29",
//         qty: "1x",
//         discount: "5%",
//         total: "$949.32",
//       },
//     ],
//   },
//   {
//     id: "#6549",
//     created: "2 min ago",
//     customer: "Joseph Wheeler",
//     total: "$2647.32",
//     profit: "$154",
//     profitPercentage: "16%",
//     status: "Pending",
//     items: [
//       {
//         sku: "#6548",
//         name: "Apple iPhone 13",
//         price: "$999.29",
//         qty: "1x",
//         discount: "5%",
//         total: "$949.32",
//       },
//       {
//         sku: "#6548",
//         name: "Apple iPhone 13",
//         price: "$999.29",
//         qty: "1x",
//         discount: "5%",
//         total: "$949.32",
//       },
//       {
//         sku: "#6548",
//         name: "Apple iPhone 13",
//         price: "$999.29",
//         qty: "1x",
//         discount: "5%",
//         total: "$949.32",
//       },
//     ],
//   },
//   // Add more orders as needed
// ];

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
