import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './PopularCategories.module.css';
import { fetchModules } from '../../redux/ducks/modules/modulesSlice';
import { RootState, AppDispatch } from '../../redux/store';
import { popularCategoriesIconMapper } from '../../utils/iconMapper';
import PopularCategoryCard from './PopularCategoryCard';
import Loading from '../Loading/Loading';
import ErrorMessage from '../Error/ErrorMessage';

const PopularCategories: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const modules = useSelector((state: RootState) => state.modules.modules);
  const loading = useSelector((state: RootState) => state.modules.loading);
  const error = useSelector((state: RootState) => state.modules.error);

  useEffect(() => {
    dispatch(fetchModules());
  }, [dispatch]);

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error}/>;

  const popularModules = modules.filter((mod) => mod.isPopular);

  return(
    <section className={styles.wrapper}>
      <h2 className={`${styles.title} ${styles.hideOnMobile}`}>Popularne kategorije</h2>
      <div className={styles.grid}>
        {popularModules.map((mod) => {
          const Icon = popularCategoriesIconMapper[mod.iconId];

          return (
            <PopularCategoryCard
              key={mod.name}
              name={mod.name}
              displayName={mod.displayName}
              count={mod.count}
              gradientColorFrom={mod.gradientColorFrom}
              gradientColorTo={mod.gradientColorTo}
              Icon={Icon}
            />
          ) 
        }
      )}
    </div>
    </section>
  );
}

export default PopularCategories;
