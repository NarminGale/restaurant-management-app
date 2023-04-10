import { useState } from "react";

import MenuCard from "../../components/MenuCard";
import { Button, Col, Container, Row } from "react-bootstrap";
import {
  useGetCategoryMealsQuery,
  useGetMenuCategoriesQuery,
} from "../../services/menuCatalogSlice/menuCatSlice";

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
    <Container className="py-1">
      <Row>
        <Col>
          <div className="d-flex flex-wrap justify-content-evenly align-items-center mb-5">
            {categories?.map((category) => (
              <Button
                variant={
                  selectedCategory === category.id
                    ? "warning"
                    : "outline-warning"
                }
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
          <Col xs={12} sm={12} md={12} lg={6} xl={4} xxl={3} className="px-3">
            <MenuCard meal={meal} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
