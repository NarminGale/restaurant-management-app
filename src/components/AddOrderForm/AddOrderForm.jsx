import "./AddOrderForm.scss";

import { useForm } from "react-hook-form";

import FormLabel from "../form/FormLabel";
import FormSelectBox from "../form/FormSelectBox";
import FormError from "../form/FormError";
import FormButton from "../form/FormButton";
import FormInputText from "../form/FormInputText";
export default function AddOrderForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(errors, "errors");
    console.log(data, "data");
  };

  const nameOptions = ["meal1", "meal2", "meal13"];

  const inputData = [
    {
      label: "Waiter name",
      controllerName: "NameSelectBox",
      options: nameOptions,
      requiredText: "Waiter name is required",
    },
  ];

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="order-form mx-auto my-0 px-4 py-4 d-flex flex-column gap-4"
    >
      <div
        className="form-item d-flex gap-4 justify-content-between align-items-center"
        key={inputData[0].label}
      >
        <FormLabel
          text={inputData[0].label}
          controllerName={inputData[0].controllerName}
        />

        <div className="form-item--input position-relative">
          <FormSelectBox
            control={control}
            errors={errors}
            options={inputData[0].options}
            controllerName={inputData[0].controllerName}
            requiredText={inputData[0].requiredText}
          />

          {/*select box name error message */}
          <div className="position-absolute">
            {errors[inputData[0].controllerName] && (
              <FormError
                errors={errors}
                controllerName={inputData[0].controllerName}
              />
            )}
          </div>
        </div>
      </div>

      <div className="form-item mt-3 d-flex gap-4 justify-content-between align-items-center">
        <FormLabel text="Number" controllerName="number" />

        <div className="form-item--input">
          <FormInputText
            control={control}
            errors={errors}
            controllerName="number"
            requiredText="Number is required"
          />

          {/*select box name error message*/}
          <div className="position-absolute">
            {errors.number && (
              <FormError errors={errors} controllerName="number" />
            )}
          </div>
        </div>
      </div>

      <FormButton text="Add order" />
    </form>
  );
}
