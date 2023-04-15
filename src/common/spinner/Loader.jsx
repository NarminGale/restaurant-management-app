import { PulseLoader } from "react-spinners";
export default function Loader({ color = "#474554", loading = true }) {
  return <PulseLoader color={color} loading={loading} />;
}
