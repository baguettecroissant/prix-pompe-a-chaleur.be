import { City } from '@/types';
import citiesData from './db/cities.json';
import provincesData from './db/provinces-infos.json';

const cities = citiesData as City[];

export interface ProvinceInfo {
    code: string;
    name: string;
    region: string;
    prime_info: string;
}

function getDistanceFromLatLonInKm(lat1: number, lon1: number, lat2: number, lon2: number) {
    const R = 6371;
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}

function deg2rad(deg: number) {
    return deg * (Math.PI / 180);
}

export function getNearbyCities(currentCity: City, limit: number = 8): City[] {
    if (!currentCity.coordinates) return [];

    const candidates = cities.filter(c =>
        c.slug !== currentCity.slug &&
        (Math.abs(c.coordinates.lat - currentCity.coordinates.lat) < 0.5) &&
        (Math.abs(c.coordinates.lng - currentCity.coordinates.lng) < 0.5)
    );

    const withDist = candidates.map(c => ({
        city: c,
        dist: getDistanceFromLatLonInKm(
            currentCity.coordinates.lat, currentCity.coordinates.lng,
            c.coordinates.lat, c.coordinates.lng
        )
    }));

    withDist.sort((a, b) => a.dist - b.dist);
    return withDist.slice(0, limit).map(wd => wd.city);
}

export function getProvinceByCode(code: string): ProvinceInfo | undefined {
    return provincesData.find(d => d.code === code);
}

export function getCitiesByProvince(provinceCode: string): City[] {
    return cities.filter(c => c.province_code === provinceCode);
}

export function getAllProvinces(): ProvinceInfo[] {
    return provincesData;
}

export function getProvincesByRegion(region: string): ProvinceInfo[] {
    return provincesData.filter(d => d.region === region);
}
