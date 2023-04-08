import "./FormButton.scss";

export default function FormButton({ text }) {
  const onSubmit = (data) => {
    console.log("Submit", data);
  };

  return (
    <button
      type="submit"
      className="form-btn border-0 rounded-2 mt-5 text-white text-capitalize py-3 px-5"
      onClick={onSubmit}
    >
      {text}
    </button>
  );
}
