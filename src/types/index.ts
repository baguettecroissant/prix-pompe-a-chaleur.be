export interface City {
    name: string;
    slug: string;
    zip: string;
    province_name: string;
    province_code: string;
    region: string;
    coordinates: {
        lat: number;
        lng: number;
    };
    population?: number;
    province_info?: {
        code: string;
        name: string;
        region: string;
        prime_info: string;
    };
}
