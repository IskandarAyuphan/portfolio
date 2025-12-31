body {
  font-family: 'Roboto', sans-serif;
  line-height: 1.6;
  margin: 0;
  color: #222;
}

nav {
  background: #111;
  position: fixed;
  width: 100%;
  top: 0;
}

nav ul {
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 10px;
  list-style: none;
}

nav a {
  color: #fff;
  text-decoration: none;
  font-weight: bold;
}

.section {
  padding: 100px 20px;
  text-align: left;
  max-width: 800px;
  margin: auto;
  opacity: 0;
  transform: translateY(30px);
  transition: 0.8s ease-out;
}

.name {
  font-size: 2rem;
  font-weight: bold;
  color: #0070f3;
}
