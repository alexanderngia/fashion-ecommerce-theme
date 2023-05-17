import classnames from "classnames";
import { ChevronDown } from "components/ui/icons";
import { Country } from "data/country";
import { ChangeEventHandler, useState } from "react";
import { CountryData, DistrictData, StateData, WardData } from "types/country";

import styles from "./index.module.scss";

export interface InputSelectAdressProps {
  onChange?: ChangeEventHandler;
  arrow?: boolean;
  required?: boolean;
  classname?: string;
  state?: boolean;
  districts?: boolean;
  col1?: string;
  col2?: string;
  col3?: string;
  col4?: string;
  selectedCountry: CountryData | null;
  selectedState: StateData | null;
  selectedDistrict: DistrictData | null;
  selectedWard: WardData | null;
  onHandleCountry: ChangeEventHandler;
  onHandleState: ChangeEventHandler;
  onHandleDistrict: ChangeEventHandler;
  onHandleWard: ChangeEventHandler;
}

const InputSelectAdress: React.FC<InputSelectAdressProps> = ({
  onChange,
  arrow,
  classname,
  col1,
  col2,
  col3,
  col4,
  selectedCountry,
  selectedState,
  selectedDistrict,
  selectedWard,
  onHandleCountry,
  onHandleState,
  onHandleDistrict,
  onHandleWard,
  ...props
}) => {
  // const [selectedCountry, setSelectedCountry] = useState<CountryData | null>(
  //   null
  // );
  // const [selectedState, setSelectedState] = useState<StateData | null>(null);
  // const [selectedDistrict, setSelectedDistrict] = useState<DistrictData | null>(
  //   null
  // );
  // const [selectedWard, setSelectedWard] = useState<WardData | null>(null);

  // const onHandleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  //   const countryName = e.target.value;
  //   const selectedCountry = Country.find(
  //     (country) => country.name === countryName
  //   );
  //   if (selectedCountry) setSelectedCountry(selectedCountry);
  //   setSelectedState(null);
  //   setSelectedDistrict(null);
  //   setSelectedWard(null);
  // };

  // const onHandleStateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  //   const selectedState = selectedCountry?.state.find(
  //     (state) => state.name === e.target.value
  //   );
  //   if (selectedState) setSelectedState(selectedState);
  //   setSelectedDistrict(null);
  //   setSelectedWard(null);
  // };
  // const onHandleDistrictChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  //   const selectedDistrict = selectedState?.districts.find(
  //     (district) => district.name === e.target.value
  //   );
  //   if (selectedDistrict) setSelectedDistrict(selectedDistrict);
  //   setSelectedWard(null);
  // };
  // const onHandleWardChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  //   const selectedWard = selectedDistrict?.wards.find(
  //     (ward) => ward.name === e.target.value
  //   );
  //   if (selectedWard) setSelectedWard(selectedWard);
  // };
  return (
    <>
      <div className={classnames(styles["root"], col1)}>
        <select
          onChange={onHandleCountry}
          name="Quốc Gia"
          id="Quốc Gia"
          {...props}
        >
          <option value="">Chọn</option>;
          {Country &&
            Country.map(({ name }: CountryData, index: number) => {
              return (
                <option key={name + index} value={name}>
                  {name}
                </option>
              );
            })}
        </select>
        <p className={styles["title"]}>Quốc Gia</p>
        {arrow && <ChevronDown customClass={styles["chevronDown"]} />}
      </div>
      <div className={classnames(styles["root"], col2)}>
        <select onChange={onHandleState} name="Tỉnh" id="Tỉnh" {...props}>
          <option value="">Chọn</option>;
          {selectedCountry &&
            selectedCountry?.state.map(({ name }: StateData, index: number) => {
              return (
                <option key={name + index} value={name}>
                  {name}
                </option>
              );
            })}
        </select>
        <p className={styles["title"]}>Tỉnh</p>
        {arrow && <ChevronDown customClass={styles["chevronDown"]} />}
      </div>
      <div className={classnames(styles["root"], col3)}>
        <select onChange={onHandleDistrict} name="Quận" id="Quận" {...props}>
          <option value="">Chọn</option>;
          {selectedState &&
            selectedState?.districts.map(
              ({ name }: DistrictData, index: number) => {
                return (
                  <option key={name + index} value={name}>
                    {name}
                  </option>
                );
              }
            )}
        </select>
        <p className={styles["title"]}>Quận</p>
        {arrow && <ChevronDown customClass={styles["chevronDown"]} />}
      </div>
      <div className={classnames(styles["root"], col4)}>
        <select onChange={onHandleWard} name="Phường" id="Phường" {...props}>
          <option value="">Chọn</option>;
          {selectedDistrict &&
            selectedDistrict?.wards.map(({ name }: WardData, index: number) => {
              return (
                <option key={name + index} value={name}>
                  {name}
                </option>
              );
            })}
        </select>
        <p className={styles["title"]}>Phường</p>
        {arrow && <ChevronDown customClass={styles["chevronDown"]} />}
      </div>
    </>
  );
};
export default InputSelectAdress;
