import { ReactElement, PropsWithChildren, useEffect } from "react";

import type { QParams } from "typings/global";
import type { Locale } from "typings/i18n";

import { useRouter } from "next/router";
import { useLocalStorage } from "utils/useLocalstorage";

import LocaleContext from "./LocaleContext";
import { DEFAULT_LOCALE } from "i18n/constants";
import { isLocale } from "i18n/utils";

const LocaleProvider = ({
  lang = DEFAULT_LOCALE,
  children,
}: PropsWithChildren<{ lang: Locale }>): ReactElement => {
  const [locale, setLocale] = useLocalStorage("locale", lang);
  const query = useRouter().query as QParams;

  // Sync context with router
  useEffect(() => {
    if (!query.lang) return;

    if (isLocale(query.lang) && locale !== query.lang) {
      setLocale(query.lang);
    }
  }, [query.lang]);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
};

export default LocaleProvider;
