// capitalize first letters of a string
export function capitalizeWords(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function padZero(time) {
  return time.toString().padStart(2, "0");
}

export function formattedDate(date) {
  const newDate = new Date(date);

  const day = padZero(newDate.getDate());
  const month = padZero(newDate.getMonth() + 1);
  const year = newDate.getFullYear();
  const hours = padZero(newDate.getHours());
  const minutes = padZero(newDate.getMinutes());
  const seconds = padZero(newDate.getSeconds());

  return `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;
}

export function getStatusButtonVariant(status) {
  switch (status) {
    case "Pending":
      return "warning";
    case "Delivered":
      return "success";
    case "Cancelled":
      return "secondary";
    default:
      return "light";
  }
}
