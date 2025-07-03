import './categories.styles.scss';

function App() {


  const categories = [
    {
      id: 1,
      title: "Hats",
      description: "Category Description 1",
    },
    {
      id: 2,
      title: "Shirts",
      description: "Category Description 1",
    },
    {
      id: 3,
      title: "Sneakers",
      description: "Category Description 1",
    },
    {
      id: 4,
      title: "Women",
      description: "Category Description 1",
    },
    {
      id: 5,
      title: "Mens",
      description: "Category Description 1",
    },
  ];
  return (
    <>
    <div className="categories-container">
      {categories.map(({id, title, description}) => (
        <div key={id} className="category-container">
         <div className="background-image">
          <div className="category-body-container">
            <h2>{title}</h2>
            <p>Shop Now</p>
          </div>
        </div>
        </div>
      ))}
    </div>
    </>
  );
}

export default App;
