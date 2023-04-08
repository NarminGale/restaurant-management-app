import "./FormSelectBox.scss";

import cn from "classnames";
import { Controller } from "react-hook-form";

export default function FormSelectBox({
  control,
  errors,
  controllerName,
  options = [],
  requiredText = "This field is required",
  placeHolder = "Choose",
  defaultValue = "",
}) {
  return (
    <Controller
      name={controllerName}
      control={control}
      defaultValue={defaultValue}
      rules={{
        required: requiredText,
      }}
      render={({ field }) => (
        <select
          className={cn("custom-form-select rounded-1 px-3 py-2 w-100", {
            "border-danger": errors[controllerName],
          })}
          {...field}
        >
          <option hidden disabled value="">
            {placeHolder}
          </option>
          {options.map((option) => (
            <option value={option} key={option}>
              {option}
            </option>
          ))}
        </select>
      )}
    />
  );
}
