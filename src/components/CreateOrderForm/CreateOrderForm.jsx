import "./CreateOrderForm.scss";

import { useForm } from "react-hook-form";

import FormLabel from "../form/FormLabel";
import FormSelectBox from "../form/FormSelectBox";
import FormError from "../form/FormError";
import FormButton from "../form/FormButton";
export default function CreateOrderForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(errors, "errors");
    console.log(data, "data");
  };

  const nameOptions = ["Selen", "Jane", "John"];
  const tableOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const formInputData = [
    {
      label: "Waiter name",
      controllerName: "NameSelectBox",
      options: nameOptions,
      requiredText: "Waiter name is required",
    },
    {
      label: "Table number",
      controllerName: "TableNumSelectBox",
      options: tableOptions,
      requiredText: "Table number is required",
    },
  ];

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="order-form mx-auto my-0 px-4 py-4 d-flex flex-column gap-4"
    >
      {formInputData.map((inputData) => (
        <div
          className="form-item d-flex gap-4 justify-content-between align-items-center"
          key={inputData.label}
        >
          <FormLabel
            text={inputData.label}
            controllerName={inputData.controllerName}
          />

          <div className="form-item--input position-relative">
            <FormSelectBox
              control={control}
              errors={errors}
              options={inputData.options}
              controllerName={inputData.controllerName}
              requiredText={inputData.requiredText}
            />

            {/* select box name error message */}
            <div className="position-absolute">
              {errors[inputData.controllerName] && (
                <FormError
                  errors={errors}
                  controllerName={inputData.controllerName}
                />
              )}
            </div>
          </div>
        </div>
      ))}

      <FormButton text="Create order" />
    </form>
  );
}
