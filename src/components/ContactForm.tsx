import { useFormik } from "formik"
import { toast } from "react-toastify"
import * as yup from "yup"

const onSubmit = async (values: any, actions: any) => {
  console.log(values)
  console.log(actions)
  await new Promise(resolve => setTimeout(resolve, 2000))
  toast.success("Form has been sent!")
  actions.resetForm()
}
export const ContactForm = () => {
  const contactSchema = yup.object().shape({
    name: yup
      .string()
      .min(3, "Name must contain at least 3 letters")
      .matches(/^(?!\s).+/, "Name cannot start with a space")
      .required("Name is required"),
    email: yup
      .string()
      .email("Please enter a valid email")
      .required("Email is required"),
    age: yup
      .number()
      .positive("Age cannot be less than 0")
      .integer("Please enter a number as integer"),
    message: yup
      .string()
      .min(5, "Message must contain at least 5 letters")
      .matches(/^(?!\s).+/, "Message cannot start with a space")
      .required("Message is required"),
  })

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      age: "",
      message: "",
    },
    validationSchema: contactSchema,
    onSubmit,
  })

  const backgroundImageStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9)), url('../../images/contactBanner.jpg')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }

  return (
    <div
      className="flex flex-col items-center h-full sm:h-96 w-full sm:flex-row"
      style={backgroundImageStyle}
    >
      <div className="w-full text-white flex flex-col items-center justify-center py-8 sm:w-[50%] sm:py-0">
        <h3 className="text-3xl mr-8 lg:mr-0">Contact</h3>
        <div className="mt-12 font-light flex flex-col text-sm xl:text-base lg:flex-row lg:mt-16">
          <div>
            <h4 className="text-[#da5d61] font-medium">WHERE ARE WE ?</h4>
            <ul>
              <li>
                <a href="https://www.google.com/maps/search/?api=1&query=Warsaw+Lwowska+3/22">
                  Lwowska 3/22
                </a>
              </li>
              <li>
                <a href="https://www.google.com/maps/search/?api=1&query=Warsaw+00-660">
                  00-660 Warsaw
                </a>
              </li>
            </ul>
          </div>
          <div className="mx-0 my-4 lg:mx-8 lg:my-0">
            <h4 className="text-[#da5d61] font-medium">CALL US ON</h4>
            <ul>
              <li>
                <a href="tel:315135125">315-135-125</a>
              </li>
              <li>
                <a>Mon-Fri 8:00 - 16:00</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-[#da5d61] font-medium">WRITE TO US AT</h4>
            <ul>
              <li>
                <a href="mailto:contact@stylehub.com">contact@stylehub.com</a>
              </li>
              <li>
                <a>Mon-Sun 6:00 - 24:00</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full h-full flex flex-col items-center justify-center bg-white opacity-80 py-12 sm:w-[50%] sm:py-0">
        <form
          onSubmit={handleSubmit}
          autoComplete="off"
          className="flex flex-col w-[80%] text-sm font-light"
        >
          <input
            value={values.name}
            onChange={handleChange}
            id="name"
            type="text"
            placeholder="Name"
            onBlur={handleBlur}
            className={`p-2 border-l-4 border-b-2 border-[#ce4b4f] ${
              errors.name && touched.name
                ? "border-4 border-b-4 border-[#fc8181] outline-none"
                : "outline-none"
            }`}
          />
          {errors.name && touched.name && (
            <p className="text-[#fc8181]">{errors.name}</p>
          )}
          <input
            id="email"
            type="email"
            placeholder="Email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`mt-4 p-2 border-l-4 border-b-2 border-[#ce4b4f] ${
              errors.email && touched.email
                ? "border-4 border-b-4 border-[#fc8181] outline-none"
                : "outline-none"
            }`}
          />
          {errors.email && touched.email && (
            <p className="text-[#fc8181]">{errors.email}</p>
          )}
          <input
            id="age"
            type="number"
            placeholder="Age"
            value={values.age}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`mt-4 p-2 border-l-4 border-b-2 border-[#ce4b4f] ${
              errors.age && touched.age
                ? "border-4 border-b-4 border-[#fc8181] outline-none"
                : "outline-none"
            }`}
          />
          {errors.age && touched.age && (
            <p className="text-[#fc8181]">{errors.age}</p>
          )}
          <input
            id="message"
            type="text"
            placeholder="Your short message"
            maxLength={100}
            value={values.message}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`mt-4 p-2 border-l-4 border-b-2 border-[#ce4b4f] ${
              errors.message && touched.message
                ? "border-4 border-b-4 border-[#fc8181] outline-none"
                : "outline-none"
            }`}
          />
          {errors.message && touched.message && (
            <p className="text-[#fc8181]">{errors.message}</p>
          )}
          <button
            disabled={isSubmitting}
            type="submit"
            className={`w-full bg-[#da5d61] hover:bg-[#ce4b4f] transition duration-300 text-white text-lg font-medium py-2 mt-6 ${
              isSubmitting && "opacity-30"
            }`}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}
