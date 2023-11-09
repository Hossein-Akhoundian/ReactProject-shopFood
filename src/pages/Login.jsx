import { Button, Form, InputGroup } from "react-bootstrap";
// import { Link } from "react-router-dom";
// link for button
import { useNavigate } from "react-router-dom";

function Login() {
  // use navigate
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/EndLogin`;
    navigate(path);
  };

  return (
    <>
      <InputGroup className="mb-4 mt-4" dir="rtl">
        <Form.Control
          placeholder="نام و نام خانواگی"
          aria-label="name-Lastname"
          aria-describedby="basic-addon1"
        />
      </InputGroup>

      <InputGroup className="mb-4" dir="rtl">
        <Form.Control
          placeholder="نام کاربری"
          aria-label="name"
          aria-describedby="basic-addon1"
        />
      </InputGroup>

      <InputGroup className="mb-3" dir="rtl">
        <Form.Control
          placeholder="ایمیل"
          aria-label="email"
          aria-describedby="basic-addon2"
        />
        <InputGroup.Text id="basic-addon2">
          hosseinakhoundian@gmail.com
        </InputGroup.Text>
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon3">09137085836</InputGroup.Text>
        <Form.Control
          id="basic-url"
          aria-describedby="basic-addon3"
          placeholder="موبایل"
          dir="rtl"
        />
      </InputGroup>

      <InputGroup dir="rtl">
        <InputGroup.Text>توضیحات</InputGroup.Text>
        <Form.Control as="textarea" aria-label="With textarea" />
      </InputGroup>

      <Button
        id="bt1"
        className="text-white"
        variant="btn btn-outline-secondary"
        onClick={routeChange}
      >
        ادامه
      </Button>
    </>
  );
}

export default Login;
