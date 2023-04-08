import "./FormLabel.scss";

export default function FormLabel({ text, controllerName }) {
  return (
    <label htmlFor={controllerName} className="text-nowrap">
      {text} &#8282;
    </label>
  );
}
