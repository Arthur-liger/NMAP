import { useAppContext } from "@/web/components/AppContext.jsx"
import Button from "@/web/components/Button.jsx"
import Form from "@/web/components/Form.jsx"
import FormField from "@/web/components/FormField.jsx"
import Page from "@/web/components/Page"
import { useRouter } from "next/router.js"
import * as yup from "yup"

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
}

const validationSchema = yup.object().shape({
  firstName: yup.string().trim().required().label("First name"),
  lastName: yup.string().trim().required().label("Last name"),
  email: yup.string().email().required().label("E-mail"),
  password: yup
    .string()
    .min(8)
    .matches(/^.*(?=.*[0-9]+).*$/, "Password must contain a number")
    .matches(
      /^.*(?=.*\p{Ll}+).*$/u,
      "Password must contain a lower case letter"
    )
    .matches(
      /^.*(?=.*\p{Lu}+).*$/u,
      "Password must contain a upper case letter"
    )
    .matches(
      /^.*(?=.*[^0-9\p{L}]+).*$/u,
      "Password must contain a special character"
    )
    .required()
    .label("Password"),
})

const SignUpPage = () => {
  const {
    actions: { signUp },
  } = useAppContext()
  const router = useRouter()
  const handleSubmit = async (values) => {
    try {
      await signUp(values)

      router.push("/sign-in")
    } catch (err) {
      // TODO handle error
    }
  }

  return (
    <Page title="Sign Up">
      <Form
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <FormField name="firstName" label="First name" />
        <FormField name="lastName" label="Last name" />
        <FormField name="email" label="E-mail" type="email" />
        <FormField name="password" label="Password" type="password" />
        <Button type="submit" className="mt-4">
          Submit
        </Button>
      </Form>
    </Page>
  )
}

export default SignUpPage
