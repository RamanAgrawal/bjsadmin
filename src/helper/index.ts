export const getStatusColors = (status: string) => {
  switch (status) {
    case "Pending":
      return { background: "#fef3c7", color: "#d97706" };
    case "Confirmed":
      return { background: "#28C76F29", color: "#28C76F" };
    case "Picked":
      return { background: "#0F60FF29", color: "#0F60FF" };
    case "Shipped":
      return { background: "#BD00FF29", color: "#BD00FF" };
    case "Delivered":
      return { background: "#33189D29", color: "#33189D" };
    default:
      return { background: "#d1fae5", color: "#047857" };
  }
};
