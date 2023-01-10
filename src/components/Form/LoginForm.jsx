import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";

function LoginForm() {
  const navigate = useNavigate();
  const style = {
    backgroundColor: "#39CDCC",
    border: "#39CDCC",
    height: 48,
    fontSize: 14,
  };
  return (
    <Form>
      <h1
        style={{
          marginTop: 120,
          fontSize: 40,
          color: "#213F7D",
          marginBottom: 10,
          fontWeight: 700,
        }}
      >
        Welcome!
      </h1>
      <p style={{ marginBottom: 60 }}>Enter details to login.</p>
      <Form.Group className="mb-6" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Email" />
      </Form.Group>

      <Form.Group className="mb-6" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Link
        to={"/reset-password"}
        className="no-underline text-xs"
        style={{ color: "#39CDCC" }}
      >
        FORGOT PASSWORD
      </Link>
      <div className="d-grid gap-2" style={{ marginTop: 30 }}>
        <Button
          style={style}
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            navigate("/users");
          }}
        >
          LOG IN
        </Button>
      </div>
    </Form>
  );
}

export default LoginForm;
