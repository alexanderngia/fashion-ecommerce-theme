import React from "react";
import styles from "./index.module.scss";
import Img from "@/components/ui/img";
import { NextPage } from "next";
import Divider from "components/ui/divider";
import { ButtonSub } from "components/ui/button";
import classNames from "classnames";
import { useRouter } from "next/router";
import { Facebook, Instagram } from "@/components/ui/icons";
import { footer } from "data/footer";
import Link from "next/link";

interface FooterProps {
  script?: HTMLScriptElement;
  className?: string;
  classSocial?: string;
}
const Footer: NextPage<FooterProps> = ({ script, className, classSocial }) => {
  const router = useRouter();

  return (
    <div className={classNames(styles["root"], className)}>
      <>
        <div className={styles["cta"]}>
          <div className={styles["box"]}>
            <h2>Need help?</h2>
            <p>
              Bạn gặp khó khăn trong việc mua hàng, thanh toán, giao nhận...
            </p>
            <ButtonSub
              onClick={() => router.push("/contact")}
              classname={styles["btn"]}
              type="button"
            >
              Contact Us
            </ButtonSub>
          </div>
        </div>
        <Divider />

        <div className={styles["container"]}>
          <div className={styles["logo"]}>
            <div className={styles["img"]}>
              <Img src={footer.logo} alt="logo footer" />
            </div>
            <div className={styles["info"]}>
              <p>
                <span>Address</span> 100C Ngo Quyen Road, Ward 9, Ca Mau City,
                Vietnam
              </p>
              <p>
                <span>Phone</span> <a href="tel:84944606333">+84 944-606-333</a>
                (Mr.Alex)
                <a
                  href="tel:84
                969278061"
                >
                  +84 969-278-061
                </a>
                (Mrs.Trinh)
              </p>
              <p>
                <span>Email</span>{" "}
                <a href="mailto:trine.closet@gmail.com">
                  trine.closet@gmail.com
                </a>
              </p>
            </div>
            <div className={classNames(styles["social"], classSocial)}>
              <a href="https://www.facebook.com/trinecloset">
                <Facebook customClass={styles["icon"]} />
              </a>
              <a href="">
                <Instagram customClass={styles["icon"]} />
              </a>
            </div>
          </div>
          <div className={styles["navigation"]}>
            <div className={styles["column"]}>
              {footer.nav.map(({ title, url }) => {
                return (
                  <Link key={title} href={url}>
                    {title}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
        <p className={styles["copyright"]}>
          All Right Reserve | Copyright @2022 Trine Closet Made By&nbsp;
          <a href="https//:oroka-studio.com/">Oroka Studio</a>
        </p>
        {script}
      </>
    </div>
  );
};

export default Footer;
