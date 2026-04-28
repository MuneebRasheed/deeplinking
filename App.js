import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";

function Home() {
  return <h1>Home Page</h1>;
}

function Profile() {
  const { id } = useParams();
  return <h1>Profile ID: {id}</h1>;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile/:id" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}