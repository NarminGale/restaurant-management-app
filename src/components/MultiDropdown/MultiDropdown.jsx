import "./MultiDropdown.scss";

import cn from "classnames";
import Select from "react-select";
import { Controller } from "react-hook-form";
import { capitalizeWords } from "../../common/utils/helpers";

import { useGetMenuCategoriesQuery } from "../../services/menuCatalogSlice/menuCatSlice";
export default function MultiDropdown({
  control,
  errors,
  controllerName,
  requiredText = "This field is required",
}) {
  const { data } = useGetMenuCategoriesQuery();

  const options =
    data &&
    data.map((category) => ({
      label: capitalizeWords(category.name),
      options: category.meals.map((meal) => ({
        label: capitalizeWords(meal.name),
        value: meal,
      })),
    }));

  const flattenedOptions = options?.reduce(
    (acc, curr) => [...acc, ...curr.options],
    []
  );

  return (
    <Controller
      name={controllerName}
      control={control}
      rules={{ required: requiredText }}
      render={({ field }) => {
        const selectedOption = flattenedOptions?.find(
          (option) => option.value === field.value
        );

        return (
          <Select
            {...field}
            value={selectedOption}
            options={options}
            placeholder="Select an option"
            className={cn("custom-form-select rounded-1", {
              "border-danger": errors[controllerName],
            })}
          />
        );
      }}
    />
  );
}
