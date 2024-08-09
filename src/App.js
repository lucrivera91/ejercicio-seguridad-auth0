import { useAuth0 } from "@auth0/auth0-react";
import { Button, Card, Container, Image, Nav } from "react-bootstrap";
import loading from "./assets/loading.gif";

function App() {
  const { isAuthenticated, isLoading, loginWithPopup, logout, user } =
    useAuth0();

  if (isLoading) {
    return (
      <Image
        src={loading}
        alt="Loading..."
        width={100}
        height={100}
        className="text-center"
      />
    );
  }

  return (
    <>
      <Nav className="bg-secondary pb-2">
        {!isAuthenticated ? (
          <Button
            variant="success"
            className="ms-auto mt-2 me-2"
            onClick={() => loginWithPopup()}
          >
            Login
          </Button>
        ) : (
          <Button
            variant="danger"
            className="ms-auto mt-2 me-2"
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
          >
            Logout
          </Button>
        )}
      </Nav>
      <Container fluid>
        {user ? (
          <Card className="ms-auto me-auto mt-3" style={{ width: "18rem" }}>
            <Card.Img variant="top" src={user.picture} />
            <Card.Body>
              <Card.Title>{user.name}</Card.Title>
              <Card.Text>{user.email}</Card.Text>
            </Card.Body>
          </Card>
        ) : (
          <h1>Debe iniciar sesión para ver los datos del usuario.</h1>
        )}
      </Container>
    </>
  );
}

export default App;
