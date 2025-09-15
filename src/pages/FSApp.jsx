import { useState, createContext, useContext, useRef, useEffect } from "react";
import { Container, Typography, Button, Card, CardContent, TextField } from "@mui/material";
import { Link } from "react-router-dom";

// Context to share cart data across components
const CartContext = createContext();

function FSApp() {
  const [cartTotal, setCartTotal] = useState(0);
  const [checkout, setCheckout] = useState(false);

  // Example products (replace with your practicals if needed)
  const products = [
    { id: 1, name: "Laptop", price: 50000, desc: "Powerful laptop", stock: 3 },
    { id: 2, name: "Phone", price: 20000, desc: "Smartphone with great camera", stock: 5 },
    { id: 3, name: "Headphones", price: 3000, desc: "Noise cancelling headphones", stock: 2 }
  ];

  return (
    <CartContext.Provider value={{ cartTotal, setCartTotal }}>
      <Container sx={{ mt: 3 }}>
        <Typography variant="h4" gutterBottom>
          🛍️ FS Practical App - Product Store
        </Typography>

        {/* Shopping Cart */}
        <ShoppingCart setCheckout={setCheckout} />

        {/* Product Panel (only show if not in checkout) */}
        {!checkout && <ProductPanel products={products} />}

        {/* Checkout Form (show only if checkout is true) */}
        {checkout && <Checkout setCheckout={setCheckout} />}

        {/* User Chat (Practical 7) */}
        <UserChat />

        {/* Back Button */}
        <Button component={Link} to="/portfolio" variant="contained" sx={{ mt: 3 }}>
          Back to Personal Website
        </Button>
      </Container>
    </CartContext.Provider>
  );
}

// 🛒 Shopping Cart Component
function ShoppingCart({ setCheckout }) {
  const { cartTotal } = useContext(CartContext);

  return (
    <Typography variant="h6" sx={{ mt: 2 }}>
      🛒 Total items in cart: {cartTotal}
      {cartTotal > 0 && (
        <Button variant="outlined" sx={{ ml: 2 }} onClick={() => setCheckout(true)}>
          Checkout
        </Button>
      )}
    </Typography>
  );
}

// 📦 Product Panel (list of products)
function ProductPanel({ products }) {
  return (
    <div>
      {products.map((p) => (
        <Product key={p.id} product={p} />
      ))}
    </div>
  );
}

// 🛍️ Product Component (each item)
function Product({ product }) {
  const { cartTotal, setCartTotal } = useContext(CartContext);
  const [stock, setStock] = useState(product.stock);

  const handleBuy = () => {
    if (stock > 0) {
      setStock(stock - 1);
      setCartTotal(cartTotal + 1);
    }
  };

  return (
    <Card sx={{ mt: 2 }}>
      <CardContent>
        <Typography variant="h6">{product.name}</Typography>
        <Typography>{product.desc}</Typography>
        <Typography>Price: ₹{product.price}</Typography>
        <Typography>Stock: {stock}</Typography>
        <Button
          onClick={handleBuy}
          disabled={stock === 0}
          variant="contained"
          sx={{ mt: 1 }}
        >
          {stock > 0 ? "Buy" : "Out of Stock"}
        </Button>
      </CardContent>
    </Card>
  );
}

// 💳 Checkout Form (Practical 8 - using ref)
function Checkout({ setCheckout }) {
  const { setCartTotal } = useContext(CartContext);
  const cardRef = useRef();
  const cvvRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const cardNumber = cardRef.current.value;
    const lastFour = cardNumber.slice(-4);
    alert(`Payment has been initiated for card ending with ${lastFour}`);
    setCartTotal(0);
    setCheckout(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField inputRef={cardRef} label="Card Number" fullWidth margin="normal" />
      <TextField inputRef={cvvRef} label="CVV" type="password" fullWidth margin="normal" />
      <Button type="submit" variant="contained" sx={{ mt: 2 }}>
        Pay Now
      </Button>
    </form>
  );
}

// 💬 User Chat Component (Practical 7)
function UserChat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  // lifecycle simulation with useEffect
  useEffect(() => {
    console.log("Chat component mounted"); // componentDidMount
    return () => {
      console.log("Chat component unmounted"); // componentWillUnmount
    };
  }, []);

  const handleSend = () => {
    if (input.trim() !== "") {
      setMessages([...messages, input]);
      setInput("");
    }
  };

  return (
    <Card sx={{ mt: 3 }}>
      <CardContent>
        <Typography variant="h6">💬 User Chat</Typography>
        <div style={{ maxHeight: "150px", overflowY: "auto", marginBottom: "10px" }}>
          {messages.map((msg, i) => (
            <Typography key={i}>👉 {msg}</Typography>
          ))}
        </div>
        <TextField
          value={input}
          onChange={(e) => setInput(e.target.value)}
          label="Type a message"
          fullWidth
          margin="normal"
        />
        <Button variant="outlined" onClick={handleSend}>Send</Button>
      </CardContent>
    </Card>
  );
}

export default FSApp;
