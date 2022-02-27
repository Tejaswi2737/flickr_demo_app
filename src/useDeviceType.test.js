import { renderHook } from '@testing-library/react-hooks';
import useDeviceType from './useDeviceType';

describe('useDeviceType', () => {
    beforeEach(() => {
        global.innerWidth = 400;
    });
    it('should return MOBILE', () => {
        const { result } = renderHook(() => useDeviceType());
        expect(result.current).toBe('MOBILE');
    });
});

describe('useDeviceType', () => {
    beforeEach(() => {
        global.innerWidth = 800;
    });
    it('should return TABLET', () => {
        const { result } = renderHook(() => useDeviceType());
        expect(result.current).toBe('TABLET');
    });
});

describe('useDeviceType', () => {
    beforeEach(() => {
        global.innerWidth = 1400;
    });
    it('should return DESKTOP', () => {
        const { result } = renderHook(() => useDeviceType());
        expect(result.current).toBe('DESKTOP');
    });
});

describe('useDeviceType', () => {
    beforeEach(() => {
        global.innerWidth = 1800;
    });
    it('should return LARGE_DESKTOP', () => {
        const { result } = renderHook(() => useDeviceType());
        expect(result.current).toBe('LARGE_DESKTOP');
    });
});
