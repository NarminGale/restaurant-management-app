import "./AddOrderForm.scss";

import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

import FormLabel from "../form/FormLabel";
import FormError from "../form/FormError";
import FormInput from "../form/FormInput";
import FormButton from "../form/FormButton";
import MultiDropdown from "../MultiDropdown/MultiDropdown";
import {
  useGetOrderByIdQuery,
  useUpdateOrderItemsMutation,
} from "../../services/ordersSlice/ordersSlice";

export default function AddOrderForm() {
  const { orderId } = useParams();

  const {
    control,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { data: order } = useGetOrderByIdQuery(orderId);
  const [updateOrderItems] =
    useUpdateOrderItemsMutation();

  const selectedOption = watch("selectField");
  const number = watch("number");

  const price = selectedOption?.value?.price || 0;

  // calculate total price
  const totalPrice = number > 0 ? price * number : 0;

  const onSubmit = async () => {
    if (!selectedOption || !number) return;

    const newOrderItem = {
      name: selectedOption.label,
      quantity: number,
      amount: totalPrice,
      orderTime: new Date(),
      status: "Pending",
      waitingTime: null,
    };

    if (order?.orderItems) {
      const newOrderItems = [...order?.orderItems, newOrderItem];

      updateOrderItems({ id: order?.id, orderItems: newOrderItems });
    } else {
      updateOrderItems({ id: order?.id, orderItems: [newOrderItem] });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="order-form mx-auto my-0 px-4 py-4 d-flex flex-column gap-4"
    >
      <div className="form-item">
        <FormLabel text="Name of meal" controllerName="selectField" />

        <div className="position-relative mt-2">
          <MultiDropdown
            control={control}
            errors={errors}
            controllerName="selectField"
            requiredText="Meal name is required"
          />

          {/*select box name error message */}
          <div className="position-absolute">
            {errors.selectField && (
              <FormError errors={errors} controllerName="selectField" />
            )}
          </div>
        </div>
      </div>

      <div className="form-item d-flex justify-content-between align-items-center gap-5 mt-3">
        <div className="w-50">
          <FormLabel text="Number" controllerName="number" />
          <div className="position-relative mt-2">
            <FormInput
              type="number"
              control={control}
              errors={errors}
              defaultValue={1}
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
        <div className="w-50">
          <FormLabel text="Price" controllerName="price" />
          <div className="">
            <span className="text-danger fs-2">{`$${totalPrice}`}</span>
          </div>
        </div>
      </div>

      <FormButton text="Add order" />
    </form>
  );
}
