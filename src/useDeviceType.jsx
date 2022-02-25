import { useState, useEffect } from 'react';
import { DEVICE_SIZES } from './theme';

const useDeviceType = () => {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
    });

    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
            });
        }
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const isDesktop = windowSize.width > DEVICE_SIZES.TABLET;
    const isMobile = windowSize.width < DEVICE_SIZES.MOBILE;
    const isLargeDesktop = windowSize.width > DEVICE_SIZES.DESKTOP;
    // eslint-disable-next-line no-nested-ternary
    const DEVICE_TYPE = isLargeDesktop ? 'LARGE_DESKTOP' : isDesktop ? 'DESKTOP' : isMobile ? 'MOBILE' : 'TABLET';

    return DEVICE_TYPE;
};

export default useDeviceType;
