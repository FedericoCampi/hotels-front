export interface Amenity {
    code: number;
    name: string;
    order: number;
  }
  
export interface Hotel {
    providerName: string;
    imgSupplier: string;
    id: number;
    contractId: number;
    netPrice: number;
    avgPrice: number;
    currency: string;
    rateType: string;
    boardbases: string[];
    name: string;
    stars: string;
    address: string;
    latitude: number;
    longitude: number;
    phone: string;
    image: string;
    images: string[];
    destination: string;
    country_code: string;
    property: string;
    recommended: boolean;
    offerDescription: string | null;
    offerIcon: string | null;
    offerColor: string | null;
    toReference: number;
    amenities: Amenity[];
    totalPrice: number;
  }