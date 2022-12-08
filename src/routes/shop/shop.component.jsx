import { Routes, Route } from "react-router-dom";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../../components/category/category.component";
import { useEffect } from "react";
import { setCategories } from "../../store/categories/categories.action";
import { getcategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { useDispatch } from "react-redux";

const Shop = () => {
  const dispatch = useDispatch();
  const getCategoriesMap = async () => {
    const categories = await getcategoriesAndDocuments();
    dispatch(setCategories(categories));
  };
  useEffect(() => {
    getCategoriesMap();
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />}></Route>
      <Route path=":category" element={<Category />}></Route>
    </Routes>
  );
};

export default Shop;
