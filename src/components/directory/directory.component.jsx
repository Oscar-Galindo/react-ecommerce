import './directory.styles.scss';
import CategoryItem from '../categories-item/categoryItem.component';

const Directory = ({categories}) => {
  return (
    <div className="directory-container">      
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;