import Home from '../MainPage';
import Category from '../Category'

export default [
    { path: "/", name: "Home", Component:  Home},
    {
      path: "/category=:id",
      name: "Category",
      Component: Category
    }
  ];