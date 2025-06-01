import React, { useEffect } from 'react';
import styles from './Categories.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchModules } from '../../redux/ducks/modules/modulesSlice';
import { RootState, AppDispatch } from '../../redux/store';
import { categoriesIconMapper } from '../../utils/iconMapper';
import Loading from '../Loading/Loading';
import ErrorMessage from '../Error/ErrorMessage';
import CategoryCard from './CategoryCard';
import MobileCategoryItem from './MobileCategoryItem';

const CategoriesSection: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { modules, loading, error } = useSelector((state: RootState) => state.modules);
  
    useEffect(() => {
      dispatch(fetchModules());
    }, [dispatch]);

    const categories = modules.filter((mod) => !mod.isPopular);

    if (loading) return <Loading/>;
    if (error) return <ErrorMessage message={error}/>;

    return(
        <section className={styles.wrapper}>
        <h2 className={`${styles.title} ${styles.hideOnMobile}`}>Kategorije</h2>
            <div className={styles.desktopGrid}>
              {categories.map((category) => {
                const Icon = categoriesIconMapper[category.iconId];

                return (
                  <CategoryCard
                    key={category.name}
                    name={category.name}
                    displayName={category.displayName}
                    count={category.count}
                    Icon={Icon}
                  />
                )
              })}
            </div>
  
          <ul className={styles.mobileList}>
            {categories.map((category) => {
              const Icon = categoriesIconMapper[category.iconId];

              return (
                <MobileCategoryItem
                  key={category.name}
                  name={category.name}
                  displayName={category.displayName}
                  count={category.count}
                  Icon={Icon}
                />
              )
            })}
          </ul>
      </section>
    )
}

export default CategoriesSection;