import "./CreateOrderForm.scss";

import { useForm } from "react-hook-form";

import FormLabel from "../form/FormLabel";
import FormError from "../form/FormError";
import FormButton from "../form/FormButton";
import FormSelectBox from "../form/FormSelectBox";
import { useGetWaitersQuery } from "../../services/waitersSlice/waitersSlice";
import { useGetTableNumbersQuery } from "../../services/tableNumbersSlice/tableNumbersSlice";
export default function CreateOrderForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { data: waiters } = useGetWaitersQuery();
  const { data: tableNumbers } = useGetTableNumbersQuery();

  const formInputData = [
    {
      label: "Waiter name",
      controllerName: "NameSelectBox",
      options: waiters,
      requiredText: "Waiter name is required",
    },
    {
      label: "Table number",
      controllerName: "TableNumSelectBox",
      options: tableNumbers,
      requiredText: "Table number is required",
    },
  ];

  const onSubmit = (data) => {
    console.log(data, "data");
  };

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
