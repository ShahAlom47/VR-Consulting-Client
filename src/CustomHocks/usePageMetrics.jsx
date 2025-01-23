import  { useContext } from 'react';
import { PageMetricsContext } from '../Provider/PageMetricsProvider';

const usePageMetrics = () => {
    const data = useContext(PageMetricsContext)
    return data;
};

export default usePageMetrics;

//   screenWidth,scrollPosition,totalPageHeight,homeComponentHeight,homeRef