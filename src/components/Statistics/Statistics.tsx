import React, { useEffect } from 'react';
import styles from './Statistics.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStats } from '../../redux/ducks/stats/statsSlice';
import { RootState, AppDispatch } from '../../redux/store';
import usersIcon from '../../assets/icons/ukupno-korsnika.svg';
import adsIcon from '../../assets/icons/ukupno-oglasa.svg';
import shopsIcon from '../../assets/icons/ukupno-trgovina.svg';
import newAdsIcon from '../../assets/icons/novi-oglasi.svg';
import StatsCard from './StatsCard';
import Loading from '../Loading/Loading';
import ErrorMessage from '../Error/ErrorMessage';

const Statistics : React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { stats, loading, error } =
    useSelector((state: RootState) => state.stats);

    const { totalAdsCount, tradeCount, newAdsCount, registeredUserCount } = stats || {};

    useEffect(() => {
        dispatch(fetchStats());
    }, [dispatch]);

    const statsData = [
        { icon: adsIcon, label: 'Ukupno oglasa', value: totalAdsCount },
        { icon: shopsIcon, label: 'Ukupno trgovina', value: tradeCount },
        { icon: newAdsIcon, label: 'Novih oglasa', value: newAdsCount },
        { icon: usersIcon, label: 'Registriranih korisnika', value: registeredUserCount },
    ];

    if (loading) return <Loading />;
    if (error) return <ErrorMessage message={error}/>;

    return (
        <section className={styles.wrapper}>
        <div className={styles.grid}>
          {statsData.map(({ icon, label, value }) => (
            <StatsCard icon={icon} label={label} value={value} />
          ))}
        </div>
      </section>
    )
}

export default Statistics;

