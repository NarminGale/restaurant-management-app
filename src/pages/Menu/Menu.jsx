import MenuCard from "../../components/MenuCard";
import { Button, Col, Container, Row } from "react-bootstrap";
import {
  useGetCategoryMealsQuery,
  useGetMenuCategoriesQuery,
} from "../../services/menuCatalogSlice/menuCatSlice";
import { useState } from "react";

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState(1);

  const {
    data: categories,
    isLoading: categoriesLoading,
    error: categoriesError,
  } = useGetMenuCategoriesQuery();

  const {
    data: categoryMeals,
    isLoading: categoryMealsLoading,
    error: categoryMealsError,
  } = useGetCategoryMealsQuery(selectedCategory);

  if (categoriesLoading || categoryMealsLoading) {
    return <div>Loading...</div>;
  }

  if (categoriesError || categoryMealsError) {
    return <div>Error: {categoriesError?.message}</div>;
  }

  return (
    <Container className="py-5 px-4">
      <Row>
        <Col>
          <div className="d-flex flex-wrap justify-content-evenly align-items-center mb-5">
            {categories?.map((category) => (
              <Button
                variant="outline-warning"
                key={category.id}
                className="text-black"
                onClick={() => setSelectedCategory(category.id)}
              >
                <h3 className="fw-bold">{category.name}</h3>
              </Button>
            ))}
          </div>
        </Col>
      </Row>

      <Row>
        {categoryMeals?.meals.map((meal) => (
          <Col>
            <MenuCard meal={meal} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
