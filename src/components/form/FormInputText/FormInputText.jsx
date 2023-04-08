import "./FormInputText.scss";

import { Controller } from "react-hook-form";
import cn from "classnames";
export default function FormInputText({
  control,
  errors,
  controllerName,
  requiredText = "This field is required",
  defaultValue = "",
}) {
  return (
    <Controller
      name={controllerName}
      control={control}
      defaultValue={defaultValue}
      rules={{
        required: requiredText,
        pattern: {
          value: /^\d+$/,
          message: "Table number must be a valid number",
        },
        min: {
          value: 1,
          message: "Table number must be greater than zero",
        },
      }}
      render={({ field }) => (
        <input
          type="text"
          id="number"
          className={cn("custom-form-select rounded-1 px-3 py-2 w-100", {
            "border-danger": errors[controllerName],
          })}
          {...field}
        />
      )}
    />
  );
}
