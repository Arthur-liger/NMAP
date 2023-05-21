import { useAppContext } from "@/web/components/AppContext.jsx"
import Button from "@/web/components/Button.jsx"
import Form from "@/web/components/Form.jsx"
import FormField from "@/web/components/FormField.jsx"
import Page from "@/web/components/Page"
import { useRouter } from "next/router.js"
import * as yup from "yup"

const initialValues = {
  title: "",
  IP: "",
  option: "",
}
const validationSchema = yup.object().shape({
  title: yup.string().trim().required(),
  IP: yup.string().trim().required().matches((/([\d]{1,3}\.){3}[\d]{1,3}/g || /localhost/i), "invalid IPv4 address"),
  option: yup.string().trim().required(),
})

const NewScanPage = () => {
  const {
    actions: { postScan },
  } = useAppContext()
  const router = useRouter()
  const handleSubmit = async (values) => {
    try {
      await postScan(values)

      router.push("/")
    } catch (err) {
      return (<h1>{err}</h1>)
    }
  }
  

  return (
    <Page title="nmap scan">
      <Form
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <FormField name="title" label="title" type="string" />
        <FormField name="IP" label="target IP" type="string" />
        <FormField name="option" label="option" type="string" />
        <Button type="submit" className="mt-4">
          Submit
        </Button>
      </Form>
    </Page>
  )
}

export default NewScanPage
