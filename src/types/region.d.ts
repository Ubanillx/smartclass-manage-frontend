declare module '@/constants/regionData' {
  interface RegionItem {
    name: string;
    id: string;
    province?: string;
    city?: string;
    children?: RegionItem[];
  }

  const regionData: RegionItem[];
  export default regionData;
}

declare module '@/constants/regionWrapper' {
  interface RegionItem {
    name: string;
    id: string;
    province?: string;
    city?: string;
    children?: RegionItem[];
  }

  const regionData: RegionItem[];
  export default regionData;
}

declare module '@/constants/region-data.js' {
  interface RegionItem {
    name: string;
    id: string;
    province?: string;
    city?: string;
    children?: RegionItem[];
  }

  const regionData: RegionItem[];
  export default regionData;
}

declare module '*.json' {
  const value: any;
  export default value;
}
