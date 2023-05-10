export interface Data {
  name: string;
  code: number;
  codename: string;
  division_type: string;
}

export interface StateData extends Data {
  phone_code: number;
  districts: DistrictData[];
}
export interface DistrictData extends Data {
  short_codename: string;
  wards: WardsData[];
}

export interface WardsData extends Data {
  short_codename: string;
}
