import "./FormError.scss";

export default function FormError({ errors, controllerName }) {
  return <span role="alert">{errors[controllerName].message}</span>;
}
