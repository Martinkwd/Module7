import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

const products = [
  {
    id: 1,
    name: "BAERII CAVIAR",
    category: "Food",
    price: 5.99,
    quantityInStock: 250,
    description:
      "From the best fish farms in the Mincio nature reserve in Italy comes the finest caviar from APANI Baerii. With its strong, robust taste and amber colour, this caviar made from Siberian sturgeon over 9 years old is the perfect choice for gourmets in search of an unforgettable taste.",
    sales: 1908,
    thumbnail: [
      "https://wolfox.ch/wp-content/uploads/2023/12/photo-output-11.jpeg",
    ],
  },
  {
    id: 2,
    name: "BELUGA CAVIAR",
    category: "Food",
    price: 12.99,
    quantityInStock: 75,
    description:
      "From the best fish farms in the Mincio nature reserve in Italy comes the best Beluga caviar from APANI. With its buttery texture and its classic pearly grey eggs, dark in colour with marble hues, this caviar produced from Beluga sturgeons over 20 years old guarantees a true taste experience for all gourmets.",
    sales: 102,
    thumbnail: [
      "https://wolfox.ch/wp-content/uploads/2023/12/photo-output-12.jpeg",
    ],
  },
  {
    id: 3,
    name: "Sembrancher 750ml – Sparkling",
    category: "Water",
    price: 1.99,
    quantityInStock: 177,
    description:
      "Contents: 1 case of 12 75 cl. bottles in glass Type: Sparkling Origin: Switzerland",
    sales: 23,
    thumbnail: [
      "https://wolfox.ch/wp-content/uploads/2023/07/sembrancher-750-ml-frizzante.jpg",
    ],
  },
  {
    id: 4,
    name: "CHAMPAGNE BLANC DE NOIR",
    category: "Wine",
    price: 14.99,
    quantityInStock: 48,
    description:
      "APANI always aims for the best, which is why it has chosen the most complex classic method to offer you the best Blanc De Noir.",
    sales: 90,
    thumbnail: [
      "https://wolfox.ch/wp-content/uploads/2023/12/blanc-de-noir.jpg.webp",
    ],
  },
  {
    id: 5,
    name: "Borgo Conventi Braida Nuova",
    category: "Wine",
    price: 79.99,
    quantityInStock: 90,
    description:
      "PVC doors are perfect for closing-off rooms for privacy, concealing unsightly areas, or for creating divisions within rooms and other large areas.",
    sales: 44,
    thumbnail: [
      "https://wolfox.ch/wp-content/uploads/2023/07/borgo-conventi-braida-nuova.jpg",
    ],
  },
  {
    id: 6,
    name: "Casa Gheller Cuvée Spumante",
    category: "Wine",
    price: 79.99,
    quantityInStock: 90,
    description:
      "It has a pale straw yellow colour with greenish reflections, a minute and persistent perlage. The bouquet is fruity and floral with delicate hints of unripe golden apples, the flavour is dry and fresh with notes of artemisia.",
    sales: 44,
    thumbnail: [
      "https://wolfox.ch/wp-content/uploads/2023/07/casa-gheller-cuvee-spumante.jpg",
    ],
  },
];

const productItems = products.map((product) => (
  <ProductPost
    key={product.id}
    name={product.name}
    description={product.description}
    image={product.thumbnail}
  ></ProductPost>
));

function ProductPost({ name, description, image }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  );
}

export function ProductList() {
  return <>{productItems}</>;
}
