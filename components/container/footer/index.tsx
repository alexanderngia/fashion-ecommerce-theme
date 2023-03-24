import React from "react";
import styles from "./index.module.scss";
import Img from "@/components/ui/img";
import { NextPage } from "next";
import {
  FacebookWithCircle,
  InstagramWithCircle,
} from "@styled-icons/entypo-social";
import { Tiktok } from "@styled-icons/boxicons-logos/Tiktok";
import Divider from "components/ui/divider";
import { ButtonSub } from "components/ui/button";

interface FooterProps {
  script?: HTMLScriptElement;
  className?: string;
  classSocial?: string;
}
const Footer: NextPage<FooterProps> = ({ script, className, classSocial }) => {
  return (
    <div className={`${styles["root"]} ${className}`}>
      <>
        <div className={styles["cta"]}>
          <div className={styles["box"]}>
            <h2>Need help?</h2>
            <p>
              Bạn gặp khó khăn trong việc mua hàng, thanh toán, giao nhận...
            </p>
            <ButtonSub className={`${styles["btn"]} `} type="button">
              Contact Us
            </ButtonSub>
          </div>
        </div>
        <Divider />

        <div className={styles["container"]}>
          <div className={styles["logo"]}>
            <div className={styles["img"]}>
              <Img
    
                src="/images/transBlack.png"
                alt="logo footer"
              />
            </div>
            <div className={styles["info"]}>
              <p>
                <span>Address</span> 100C Ngo Quyen Road, Ward 9, Ca Mau City,
                Vietnam
              </p>
              <p>
                <span>Phone</span> +84 944-606-333 (Mr.Alex) +84
                969-278-061(Mrs.Trinh)
              </p>
              <p>
                <span>Email</span> trine.closet@gmail.com
              </p>
            </div>
            <div className={`${styles["social"]} ${classSocial}`}>
              <a href="#">
                <FacebookWithCircle size={25} />
              </a>
              <a href="#">
                <InstagramWithCircle size={25} />
              </a>
              <a href="#">
                <Tiktok size={25} />
              </a>
            </div>
          </div>
          <div className={styles["navigation"]}>
            <div className={styles["column"]}>
              <a href="#">About</a>
              <a href="#">Contact</a>
              <a href="#">Privacy Policy</a>
            </div>
            <div className={styles["column"]}>
              <a href="#">Blog</a>
              <a href="#">FAQ</a>
              <a href="#">Terms & Conditions</a>
            </div>
          </div>
        </div>
        <p className={styles["copyright"]}>
          All Right Reserve | Copyright @2022 Trine Closet Made By&nbsp;
          <a href="#">Oroka Studio</a>
        </p>
        {script}
      </>
    </div>
  );
};

export default Footer;
